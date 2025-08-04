import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{title: 'Welling', headerTintColor: 'red', presentation: 'modal', headerTransparent: true, headerBlurEffect: 'prominent'}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}

