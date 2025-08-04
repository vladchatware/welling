import { SafeAreaView, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { fetch as expoFetch } from 'expo/fetch'
import '@/polyfills'
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const url = process.env.EXPO_PUBLIC_API_BASE_URL!

export default () => {
  const [input, setInput] = useState('');
  const { messages, error, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      fetch: expoFetch as unknown as typeof globalThis.fetch,
      api: `${url}/api/chat`,
    }),
    onError: error => console.error(error, 'ERROR'),
  });

  if (error) return <ThemedText>{error.message}</ThemedText>;

  return (
    <ThemedView
      style={{
        flex: 1
      }}
    >
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ScrollView style={{ flex: 1 }}>
            {messages.map(m => (
              <ThemedView key={m.id} style={{ padding: 8 }}>
                <ThemedView>
                  <ThemedText type="defaultSemiBold">{m.role}</ThemedText>
                  {m.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return <ThemedText key={`${m.id}-${i}`}>{part.text}</ThemedText>;
                    }
                  })}
                </ThemedView>
              </ThemedView>
            ))}
          </ScrollView>

          <ThemedView style={{ padding: 8 }}>
            <TextInput
              style={{ backgroundColor: 'white', padding: 8, borderRadius: 8 }}
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
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
}
