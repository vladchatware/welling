import { Link, Stack } from 'expo-router';
import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import {useState} from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { fetch as expoFetch } from 'expo/fetch'
import { generateAPIUrl } from '@/utils'
import '@/polyfills'

export default () => {

  const [input, setInput] = useState('');
  const { messages, error, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch,
      api: generateAPIUrl('/api/chat'),
    }),
    onError: error => console.error(error, 'ERROR'),
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View
        style={{
          height: '95%',
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 8,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          {messages.map(m => (
            <View key={m.id} style={{ marginVertical: 8 }}>
              <View>
                <Text style={{ fontWeight: 700 }}>{m.role}</Text>
                {m.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return <Text key={`${m.id}-${i}`}>{part.text}</Text>;
                  }
                })}
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{ marginTop: 8 }}>
          <TextInput
            style={{ backgroundColor: 'white', padding: 8 }}
            placeholder="Say something..."
            value={input}
            onChange={e => setInput(e.nativeEvent.text)}
            onSubmitEditing={e => {
              e.preventDefault();
              sendMessage({ text: input });
              setInput('');
            }}
            autoFocus={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
