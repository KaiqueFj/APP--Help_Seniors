import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from './styles'

export function Header() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    source={require('../../../assets/icons/back.png')}
                    resizeMode='cover'
                    style={styles.backButton}
                />
            </TouchableOpacity>

            <Image
                source={require('../../../assets/icons/logo.png')}
                style={styles.logoImage}
            />
        </View>
    )
}