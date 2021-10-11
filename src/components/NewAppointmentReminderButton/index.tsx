import React from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export function NewAppointmentReminderButton() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity

            onPress={() => navigation.navigate('AddAppointmentReminder')}
            style={styles.container}

        >

        </TouchableOpacity>
    )
}