import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";
import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";

type EmergencyItensProps = {
    legend: string;
    banner: NodeRequire;
}

export function EmergencyItem(props: EmergencyItensProps) {

    return (
        <View style={styles.container}>
            <Image
                source={props.banner}
                style={styles.banner}
            />

            <Text style={styles.legend}>{props.legend}</Text>
        </View >
    )
}