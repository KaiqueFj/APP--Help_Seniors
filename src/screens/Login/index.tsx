import React from "react";

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LinearGradient } from "expo-linear-gradient";

import { View, TextInput, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Header } from "./components/Header";

import { styles } from "./styles";
import { theme } from '../../global/styles/theme'

export function Login() {
    return (
        <View style={styles.container}>
            <Header />

            {/* Inputs */}
            <View style={[styles.inputContainer, {marginTop: 40}]}>

                <ImageBackground
                    source={require('../../../assets/icons/userPurple.png')}
                    resizeMode='stretch'
                    style={{
                        width: 45,
                        height: 45,

                        position: 'absolute',
                        left: 10,
                        zIndex: 100,
                    }}
                />

                <TextInput style={styles.inputArea} placeholderTextColor="#62657a" placeholder='Digite seu e-mail:' />

            </View>

            <View style={styles.inputContainer}>

                <ImageBackground
                    source={require('../../../assets/icons/password.png')}
                    resizeMode='stretch'
                    style={{
                        width: 45,
                        height: 45,

                        position: 'absolute',
                        left: 10,
                        zIndex: 100,
                    }}
                />

                <TextInput style={styles.inputArea} secureTextEntry={true} placeholderTextColor="#62657a" placeholder='**********' />

            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button}>
                <LinearGradient
                    colors={[theme.colors.purple, theme.colors.blue,]}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >

                    <ImageBackground
                        source={require('../../../assets/icons/enterWhite.png')}
                        resizeMode='stretch'
                        style={{
                            width: 35,
                            height: 35,
                            marginRight: 10,
                        }}
                    />

                    <Text style={{
                        fontSize: 25,
                        fontFamily: theme.fonts.bold700,
                        color: '#fff'
                    }}
                    >
                        Login
                    </Text>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

// export function Login({navigation}) {
//     return (
//        <View>
//            <Text>Login</Text>
//            <Button
//            title='Sobre'
//            onPress={() => navigation.navigate('sobre')} />
//        </View>

//     )
// }