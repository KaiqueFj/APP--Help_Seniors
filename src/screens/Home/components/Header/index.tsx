import React, { useEffect, useState } from "react";
import { Image, RefreshControl, Text, View } from "react-native";
import { AsyncStorage, TouchableOpacity } from "react-native";

import base64 from 'react-native-base64';
import { theme } from "../../../../global/styles/theme";
import { useApp } from "../../../../hooks/useApp";
import { styles } from './styles';

type HeaderProps = {
    name: string,
    profileImage: string
}

export function Header(props: HeaderProps) {

    const {showMenu, toggleShowMenu} = useApp()
    const [imageProfile, setImageProfile] = useState('')

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

            <TouchableOpacity
                onPress={() => toggleShowMenu(!showMenu)}
            >
                <Image
                    source={
                        imageProfile !== ''
                            ? { uri: imageProfile }
                            : require('../../../../../assets/icons/userPurple.png')
                    }
                    style={styles.imageProfile}
                />
            </TouchableOpacity>

        </View>
    )
}