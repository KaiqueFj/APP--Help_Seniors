import React from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Image, ImageBackground, Text } from "react-native";
import { theme } from "../../global/styles/theme";

export function NewAppointmentReminderButton() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity

            onPress={() => navigation.navigate('AddAppointmentReminder')}
            style={styles.container}

        >
            <ImageBackground
                source={require('../../../assets/icons/add.png')}
                style={{
                    width: 50,
                    height: 50,
                }}
            />

            <Text style={{
                fontSize: 25,
                fontFamily: theme.fonts.medium500,
                color: '#fff',
                marginLeft: 5,
            }}>
                Adicionar Lembrete
            </Text>
        </TouchableOpacity>
    )
}