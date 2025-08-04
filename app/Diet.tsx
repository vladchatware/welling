import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Diet Preferences</ThemedText>
  <Link href="/Introduction"><ThemedText type="link">Introduction</ThemedText></Link>
</ThemedView>

