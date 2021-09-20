import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

type ButtonHelpAndFirstAidProps = {
    link: string,
    legend: string,
    onPress : () => void,
}

export function ButtonHelpAndFirstAid(props: ButtonHelpAndFirstAidProps) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity

            onPress={() => navigation.navigate('Home')}
            style={styles.container}
           
        >
            <Text style={styles.legend}>
                {props.legend}
            </Text>

        </TouchableOpacity>
    )
}
