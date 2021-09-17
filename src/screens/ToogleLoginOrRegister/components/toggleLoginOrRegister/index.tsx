import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';

import { styles } from './styles'

export function ToggleLoginOrRegisterOptions() {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../../assets/icons/userPurple3.png')}
                resizeMode='cover'
                style={styles.userImage}
            />

            <View style={styles.toggleLoginRegisterContainer}>
                <Text style={styles.link}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Registre-se
                </Text>

                <View style={styles.LoginContainer}>
                    <ImageBackground
                        source={require('../../../../../assets/icons/loginPurple.png')}
                        resizeMode='stretch'
                        style={{
                            width: 25,
                            height: 25,
                            marginRight: 5
                        }}
                    />

                    <Text style={[styles.link, { color: '#3b1f8d' }]}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Login
                    </Text>
                </View>
            </View>
        </View>
    )
}

