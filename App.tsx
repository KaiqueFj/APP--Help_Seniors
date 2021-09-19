import React from 'react';
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

import { AppContextProvider } from './src/contexts/AppContext'

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts
} from '@expo-google-fonts/montserrat';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppContextProvider>
      <Background>
        <Routes />
        <StatusBar style='light' />
      </Background>
    </AppContextProvider>
  );
}
