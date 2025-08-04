import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native'

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Questionnarie</ThemedText>
  <Link href="/Plan"><ThemedText type="link">Plan</ThemedText></Link>
</ThemedView>

