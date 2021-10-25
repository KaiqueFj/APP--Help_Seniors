import React from "react";
import { styles } from "./styles";
import { Image, Text, View } from "react-native";
import { Header } from "../../components/Header";

export function Hospitals() {
    return (
        <View style={styles.container}>

            <Header />

            <Image
                source={require('../../../assets/icons/hospitalsDesign.png')}
                style={styles.image}
                resizeMode='stretch'
            />

            <Text
                style={styles.legend}
            >Página em desenvolvimento</Text>
        </View>
    )
}