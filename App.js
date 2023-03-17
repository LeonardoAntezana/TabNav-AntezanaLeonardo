import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './src/navigator/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  })

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
