import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Refferal</ThemedText>
  <Link href="/Paywall"><ThemedText type="link">Paywall</ThemedText></Link>
</ThemedView>

