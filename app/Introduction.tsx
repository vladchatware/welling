import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Introduction</ThemedText>
  <Link href="/Reviews"><ThemedText type="link">Reviews</ThemedText></Link>
</ThemedView>


