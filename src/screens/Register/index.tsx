import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { View, TextInput, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Header } from "./components/Header";

import { styles } from "./styles";
import { theme } from '../../global/styles/theme'

export function Register() {
    return (
        <View style={styles.container}>
            <Header />

            {/* profileImgDesign */}
            <View style={styles.profileContainer}>
                <ImageBackground
                    source={require('../../../assets/icons/userPurple.png')}
                    resizeMode='stretch'
                    style={{
                        width: 150,
                        height: 150,
                    }}
                />
            </View>

            {/* Inputs */}
            <View style={styles.inputContainer}>

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

                <TextInput style={styles.inputArea} placeholderTextColor="#62657a" placeholder='Digite seu nome:' />

            </View>

            <View style={styles.inputContainer}>

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
                        Registrar-se
                    </Text>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}