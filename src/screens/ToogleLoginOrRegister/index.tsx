import React from 'react';
import { View } from 'react-native';
import { AboutUs } from './components/AboutUs';
import { ToggleLoginOrRegisterOptions } from './components/toggleLoginOrRegister';
import { styles } from './styles';

export function ToogleLoginOrRegister() {
    return (

        <View style={styles.container}>
            <ToggleLoginOrRegisterOptions />
            <AboutUs />
        </View>

    )
}