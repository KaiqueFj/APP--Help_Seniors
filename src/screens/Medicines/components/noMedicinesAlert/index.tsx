import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

type noMedicinesAlertProps = {
    day: string
}

export function NoMedicinesAlert(props: noMedicinesAlertProps) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('NewMedicines')}
        >
            <ImageBackground
                source={require('../../../../../assets/icons/noMedicines.png')}
                style={styles.banner}
            />

            <Text style={styles.legend}>
                Não há medicmentos{`\n`}{props.day}
            </Text>
        </TouchableOpacity>
    )
}