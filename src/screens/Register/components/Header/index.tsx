import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Linking, Text, TextInput, View } from "react-native";
import { style } from './styles';

export function Header() {

    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <Text style={style.title}>Registre-se</Text>
            <Text style={style.legend}>
                Caso tenha um a conta, volte para

                <Text
                    style={style.link}
                    onPress={() => navigation.navigate('Login')}> Login</Text>
            </Text>
        </View>
    )
}