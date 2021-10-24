import React, { useEffect, useState } from "react";
import { AsyncStorage, ScrollView, Text, View } from "react-native";
import { AppointmentReminder } from "./components/AppointmentReminder/index";
import { Header } from "../../components/Header";
import { NewAppointmentReminderButton } from "../AddAppointmentReminder/components/NewAppointmentReminderButton";
import { api } from "../../services/api";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";

type AppointmentReminderData = {
    id: number,
    hospitalName: string,
    specialty: string,
    day: string,
    time: string,
    contactPhone: string,
    status: string,
};


export function AppointmentReminderPage() {

    const [data, setData] = useState<AppointmentReminderData[]>()
    const navigation = useNavigation()

    useEffect(() => {
        getData()
    }, [])

    // Refresh Appointments Page
    useEffect(() => {
        const refreshMedicinesPage = navigation.addListener('focus', () => {
            getData()
        });

        return refreshMedicinesPage;
    }, [navigation]);

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
