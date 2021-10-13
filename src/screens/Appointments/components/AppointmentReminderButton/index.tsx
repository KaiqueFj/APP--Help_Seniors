import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';


type AppointmentReminderButtonProps = {
    color: string;
    legend: string;
}

export function AppointmentReminderButton(props: AppointmentReminderButtonProps) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity

            onPress={() => navigation.navigate('AppointmentReminderPage')}
            style={styles.container}
           
        >
            <Text style={styles.legend}>
                {props.legend}
            </Text>

        </TouchableOpacity>
    )
}