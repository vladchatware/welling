import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';

export default () => <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ThemedText type="title">Welling</ThemedText>
  <Link href="/Questionnaire">
    <ThemedText type="link">Sign Up</ThemedText>
  </Link>
  <Link href="/home" replace={true}>
    <ThemedText type="link">Sign In</ThemedText>
  </Link>
</ThemedView>


