import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {

  return (
    <ImageBackground source={require('../../../assets/backgrounds/whiteTheme1.png')} style={styles.container}>
      {children}
    </ImageBackground>
  )
}