import { Link, Stack } from 'expo-router';
import {View, Text, SafeAreaView} from 'react-native'

export default () => <SafeAreaView>
  <Link href="/Home">Back</Link>
  <View>
    <Text>Refer your friends</Text>
  </View>
  <View>
    <Text>Personal Info</Text>
    <Text>Favorites & Recipes</Text>
    <Text>Streaks</Text>
    <Text>Reminders & Notifications</Text>
    <Text>Apple Health Integration</Text>
    <Text>Log Sharing</Text>
    <Text>Widgets</Text>
    </View>
    <View>
    <Text>Goals and Targets</Text>
    <Text>Diet and Macro Ratios</Text>
    <Text>Allergies and Restrictions</Text>
  </View>
  <View>
    <Text>Join WhatsApp Community</Text>
    <Text>Support</Text>
    <Text>Unsubscribe</Text>
    <Text>Sign Out</Text>
  </View>
</SafeAreaView>

