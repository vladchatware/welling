import { Link, Stack } from 'expo-router';
import {View, Text, SafeAreaView} from 'react-native'

export default () => <SafeAreaView>
  <Link href="/Settings">Settings</Link>
  <View>
    <Text>Calories</Text>
  </View>
  <View>
    <Text>Breakfast</Text>
  </View>
  <View>
    <Text>Lunch</Text>
  </View>
  <View>
    <Text>Dinner</Text>
  </View>
  <View>
    <Text>Snack</Text>
  </View>
  <View>
    <Text>Macros</Text>
  </View>
  <View>
    <Text>Fiber</Text>
  </View>
  <View>
    <Text>Water</Text>
  </View>
  <View>
    <Text>Steps</Text>
  </View>
  <View>
    <Text>Workouts</Text>
  </View>
  <View>
    <Text>Weight</Text>
  </View>
</SafeAreaView>

