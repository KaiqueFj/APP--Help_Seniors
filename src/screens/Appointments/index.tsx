import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useApp } from "../../hooks/useApp";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core"

import { NewAppointmentReminderButton } from "../../components/NewAppointmentReminderButton";
import { AppointmentReminder } from "../../components/AppointmentReminder/index";

import { styles } from './styles';

type AppointmentReminderData = {
    id: number,
    hospitalName: string,
    specialty: string,
    day: string,
    time: string,
    contactPhone: string,
    status: string,
};

// type AppointmentReminderPage = {
//     data: AppointmentReminderData[]
// }


export function AppointmentReminderPage() {

    const [data, setData] = useState<AppointmentReminderData[]>()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {

        // Get Token from Storage
        const token = await AsyncStorage.getItem('token')

        // Try to get userInformations from API if their login has not expired
        const response = await api.get('showAppointmentReminders', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        setData(response.data)
    }

    return (

        <View style={styles.container}>
            <Header />

            <View style={styles.appointmentReminder}>
                <ScrollView>
                    {data !== undefined ? (
                        data.map(appointmentReminder => (
                            <AppointmentReminder
                                key={appointmentReminder.id}
                                id={appointmentReminder.id}
                                state={appointmentReminder.status}
                                hospitalName={appointmentReminder.hospitalName}
                                specialty={appointmentReminder.specialty}
                                time={appointmentReminder.time}
                                date={appointmentReminder.day}
                                contactPhone={appointmentReminder.contactPhone}
                            />
                        ))

                    ) : <Text>Has not appointments</Text>}
                </ScrollView>
            </View>


            <NewAppointmentReminderButton />
        </View >
    )
}

// export async function getServerSideProps() {
//     // Get token in cookies -> AsyncStorage
//     const token = await AsyncStorage.getItem('token')

//     // API connection
//     const response = await fetch('http://localhost:3333/showAppointmentReminders', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': ` Bearer ${token}`
//         },
//     });

//     const data = await response.json();

//     return {
//         props: {
//             data: data
//         }
//     }
// }
