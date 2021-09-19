import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { AsyncStorage, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from '../../global/styles/theme';
import { api } from "../../services/api";
import { Header } from "./components/Header";
import { styles } from "./styles";

type OnSubmitProps = {
    password: string,
    email: string,
};

export function Login() {

    const { register, setValue, handleSubmit } = useForm()
    const navigation = useNavigation()

    // Set input data in variable when textInput is changed
    useEffect(() => {
        register('email')
        register('password')
    }, [register])

    async function onSubmit(data: OnSubmitProps) {

        const response = await api.post(
            `login`,
            {
                email: data.email,
                password: data.password,
            }
        )

        if (response.status === 200) {

            // Get Token and save in Storage
            const { token } = await response.data

            AsyncStorage.setItem('token', token)
            navigation.navigate('Home')
            
        } else {

            // Alert Error with notification popup
        }
    }

    return (
        <View style={styles.container}>
            <Header />

            {/* Inputs */}
            <View style={[styles.inputContainer, { marginTop: 40 }]}>

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
                        Login
                    </Text>

                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}