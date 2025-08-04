import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Plan</ThemedText>
  <Link href="/Diet"><ThemedText type="link">Diet preferences</ThemedText></Link>
</ThemedView>

