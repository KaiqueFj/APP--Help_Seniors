import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Linking, Text, TextInput, View } from "react-native";
import { style } from './styles';

export function Header() {

    const navigation = useNavigation()

    return (
        <View style={style.container}>

            <View>
                <Text style={style.title}>Faça seu login</Text>

                <Text style={style.legend}>
                    Caso tenha não tenha uma conta, 

                    <Text
                        style={style.link}
                        onPress={() => navigation.navigate('Register')}> registre-se</Text>
                </Text>

            </View>
        </View>
    )
}