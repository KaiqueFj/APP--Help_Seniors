import React, { useEffect, useState } from "react";
import { Image, RefreshControl, Text, View } from "react-native";
import { AsyncStorage, TouchableOpacity } from "react-native";

import base64 from 'react-native-base64';
import { styles } from './styles';

type HeaderProps = {
    name: string,
    profileImage: string
}

export function Header(props: HeaderProps) {

    const [imageProfile, setImageProfile] = useState('')

    async function logout() {
        AsyncStorage.setItem('token', '')
    }

    useEffect(() => {
        // Set Image in profile
        setImageProfile('data:image/jpeg;base64,' + base64.encode(props.profileImage))
    }, [])

    return (
        <View style={styles.container} >

            <Text style={styles.headerFont}>
                Bem-Vindo(a) {'\n'}

                <Text style={styles.headerFont}>
                    {props.name}
                </Text>
            </Text>

            <Image
                source={
                    imageProfile !== ''
                        ? { uri: imageProfile }
                        : require('../../../../../assets/icons/userPurple.png')
                }
                style={styles.imageProfile}
            />

            <TouchableOpacity
                onPress={logout}
            // style={styles.logoutBtn}
            >
                <Text>Fazer Logout</Text>
            </TouchableOpacity>
        </View>
    )
}