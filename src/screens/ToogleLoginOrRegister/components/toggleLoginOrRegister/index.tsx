import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, Linking, Text, View } from 'react-native';
import { theme } from '../../../../global/styles/theme';
import { styles } from './styles';

export function ToggleLoginOrRegisterOptions() {
    const navigation = useNavigation()

    function handleRegister(){
        navigation.navigate('Register')
    }

    function handleLogin(){
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../../assets/icons/userPurple3.png')}
                resizeMode='cover'
                style={styles.userImage}
            />

            <View style={styles.toggleLoginRegisterContainer}>
                <Text style={styles.link}
                    onPress={handleRegister}>
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

                    <Text style={[styles.link, { color: theme.colors.darkPurple }]}
                        onPress={handleLogin}>
                        Login
                    </Text>
                </View>
            </View>
        </View>
    )
}

