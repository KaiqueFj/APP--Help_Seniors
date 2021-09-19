import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import base64 from 'react-native-base64';
import { styles } from './styles';

type HeaderProps = {
    name: string,
    profileImage: string
}

export function Header(props: HeaderProps) {

    const [imageProfile, setImageProfile] = useState('')

    useEffect(() => {
        // Set Image in profile
        setImageProfile('data:image/jpeg;base64,' + base64.encode(props.profileImage))
    }, [])

    return (
        <View style={styles.container}>

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
        </View>
    )
}