import React from 'react';
import { View } from 'react-native';

import { ToggleLoginOrRegisterOptions } from './components/toggleLoginOrRegister';
import { AboutUs } from './components/AboutUs';

import {styles} from './styles';

export function ToogleLoginOrRegister() {
    return (
        <View style={styles.container}>
            <ToggleLoginOrRegisterOptions />
            <AboutUs />
        </View>
    )
}