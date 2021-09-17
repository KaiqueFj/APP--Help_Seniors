import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';


import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts
}
  from '@expo-google-fonts/montserrat';

import { ToggleLoginOrRegisterOptions } from './src/components/toggleLoginOrRegister/index'

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
       
        <ToggleLoginOrRegisterOptions />
      
      </ImageBackground>

      {/* Mobile Status Bar color -> get theme and change this */}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e1e6',
    color: '#fff',

    width: '100%',
    height: '100%',

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
