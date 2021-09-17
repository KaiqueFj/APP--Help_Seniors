import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { ToogleLoginOrRegister } from './src/screens/ToogleLoginOrRegister';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat';

export default function App() {

  // Google Fonts
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/backgrounds/whiteTheme1.png')} style={styles.backgroundImage} >

        <ToogleLoginOrRegister/>

      </ImageBackground>

      <StatusBar style='light' />
    </SafeAreaView>
  );
}

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e1e6',
    color: '#fff',

    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

