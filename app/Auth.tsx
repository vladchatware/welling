import { Link, Stack } from 'expo-router';
import {View, Text, SafeAreaView} from 'react-native'

export default () => <SafeAreaView>
  <Link href="/Home">Google</Link>
  <Link href="/Home">Apple</Link>
</SafeAreaView>

