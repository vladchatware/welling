import { Link, Stack } from 'expo-router';
import {View, Text, SafeAreaView} from 'react-native'

export default () => <SafeAreaView>
  <Text>Paywall</Text>
  <Link href="/Home">Pay</Link>
</SafeAreaView>

