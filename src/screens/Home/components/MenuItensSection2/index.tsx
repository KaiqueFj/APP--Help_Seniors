import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from './styles'

export function MenuItensSection2() {
    return (
        <>
            <View style={styles.AppointmentHospitalsContainerss}>

                <TouchableOpacity
                    style={styles.AppointmentContainer}
                    onPress={() => console.log('Appointment')}
                >

                    <Text style={styles.title}>Consultas</Text>

                    <Image
                        source={require('../../../../../assets/icons/history.png')}
                        style={styles.icon}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HospitalContainer}
                    onPress={() => console.log('Hospitals')}
                >
                    <Text style={styles.title}>Hospitais</Text>

                    <Image
                        source={require('../../../../../assets/icons/consultas.png')}
                        style={[styles.icon, { left: 85 }]}
                    />
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={styles.HelpContainer}
                onPress={() => console.log('Help')}
            >
                <Text style={[styles.title, { fontSize: 25 }]}>Precisa de Ajuda?</Text>

                <Image
                    source={require('../../../../../assets/icons/help.png')}
                    style={[styles.icon, {
                        left: 250,
                    }]}
                />

            </TouchableOpacity>
        </>
    )
}