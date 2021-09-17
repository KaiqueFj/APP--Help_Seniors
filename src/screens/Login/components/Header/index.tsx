import React from "react";
import { Linking, Text, TextInput, View } from "react-native";
import { style } from './styles';

export function Header() {
    return (
        <View style={style.container}>

            <View>
                <Text style={style.title}>Faça seu login</Text>
                <Text
                    style={style.link}
                    onPress={() => Linking.openURL('http://google.com')}> Login</Text>
            </View>

            <TextInput>Digite seu e-mail:</TextInput>
            <TextInput>*********</TextInput>

        </View>
    )
}