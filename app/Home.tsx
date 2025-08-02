import { Link, Stack } from 'expo-router';
import { View, Text, SafeAreaView, FlatList } from 'react-native'

export default () => <SafeAreaView style={{flex: 1}}>
  <View style={{ flex: 1 }}>
    <Link href="/Dashboard">Dashboard</Link>
    <FlatList
      data={[{ key: 1, message: 'First message' }, { key: 2, message: 'Second message' }]}
      renderItem={({ item }) => <View key={item.key}><Text>{item.message}</Text></View>}
    />
  </View>
</SafeAreaView>

