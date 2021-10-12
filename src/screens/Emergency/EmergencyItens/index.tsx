import React from "react";
import { Image, Linking, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

type EmergencyItensProps = {
    legend: string;
    banner: NodeRequire;
    number: string
}

export function EmergencyItem(props: EmergencyItensProps) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={()=>{Linking.openURL(`tel:${props.number}`)}}
        >
            <Image
                source={props.banner}
                style={styles.banner}
            />

            <Text style={styles.legend}>{props.legend}</Text>
        </TouchableOpacity >
    )
}