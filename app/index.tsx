import { Link, Stack } from 'expo-router';
import {View, Text, SafeAreaView} from 'react-native'

export default () => <SafeAreaView>
  <Link href="/Questionnaire">Sign up</Link>
  <Link href="/Home">Sign in</Link>
</SafeAreaView>

