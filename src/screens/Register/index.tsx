import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";

import { View, TextInput, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Header } from "./components/Header";

import { styles } from "./styles";

import { useForm } from 'react-hook-form';
import { theme } from '../../global/styles/theme'
import { useNavigation } from "@react-navigation/core";
import { api } from "../../services/api";


type OnSubmitProps = {
    password: string,
    email: string,
    username: string
};

export function Register() {

    const { register, setValue, handleSubmit } = useForm()
    const navigation = useNavigation()


    // Set input data in variable when textInput is changed
    useEffect(() => {
        register('email')
        register('username')
        register('password')
    }, [register])

    async function onSubmit(data: OnSubmitProps) {

        const response = await api.post(
            `register`,
            {
                username: data.username,
                email: data.email,
                password: data.password,
            }
        )

        if (response.status === 200) {

            navigation.navigate('Login')

        } else {

            // Alert Error with notification popup
        }
    }


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

                <TextInput
                    style={styles.inputArea}
                    placeholderTextColor="#62657a"
                    placeholder='Digite seu nome:'
                    onChangeText={text => setValue('username', text)}
                />

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

                <TextInput
                    style={styles.inputArea}
                    placeholderTextColor="#62657a"
                    placeholder='Digite seu e-mail:'
                    onChangeText={text => setValue('email', text)}

                />

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

                <TextInput
                    style={styles.inputArea}
                    secureTextEntry={true}
                    placeholderTextColor="#62657a"
                    placeholder='**********'
                    onChangeText={text => setValue('password', text)}
                />

            </View>

            {/* Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
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