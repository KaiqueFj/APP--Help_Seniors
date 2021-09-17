import React from "react";
import { Linking, Text, TextInput, View } from "react-native";
import {style} from './styles';

export function Header(){
    return(
        <View style={style.container}>

            <View>
                <Text style={style.title}>Registre-se</Text>
                <Text style={style.legend}>
                    Caso tenha um a conta, volte para

                    <Text
                        style={style.link}
                        onPress={() => Linking.openURL('http://google.com')}> Login</Text>
                </Text>
            </View>
            <TextInput>Digite seu nome:</TextInput>
            <TextInput>Digite seu e-mail:</TextInput>
            <TextInput>*********</TextInput>

        </View>
    )
}