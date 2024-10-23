import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    UrbanistR: require('../assets/fonts/Urbanist-Regular.ttf'),
    UrbanistS: require('../assets/fonts/Urbanist-SemiBold.ttf'),
    UrbanistB: require('../assets/fonts/Urbanist-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fae7e3', height: '100%' }}>
      <StatusBar
        animated={true}
        backgroundColor="#fae7e3"
      />
      <View style={{
        display: 'flex',
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#fae7e3',
        borderBottomWidth: 1,
        borderColor: '#ffdbd4'
      }}>
        <Text style={{ fontWeight: "bold" }}>VARSADA</Text>
        <View style={{ width: "70%" }}>
          <TextInput placeholder='Search' style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderColor: '#dddd',
            borderWidth: 1,
            width: '100%',
            borderRadius: 20,
            backgroundColor: 'white',
          }} />
        </View>
      </View>
      <Slot />
    </SafeAreaView>
  );
}
