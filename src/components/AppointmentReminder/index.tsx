import React, { useState } from 'react';
import { AsyncStorage, ScrollView, Text, View } from "react-native";
import { AppointmentReminderButton } from '../AppointmentReminderButton/index'
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../../screens/Login/components/Header/styles';
import { useNavigation } from '@react-navigation/core';


type AppointmentReminderProps = {
    id: number;
    state: string;
    hospitalName: string;
    specialty: string;
    time: string;
    date: string;
    contactPhone: string
}

export function AppointmentReminder(props: AppointmentReminderProps) {
    const navigation = useNavigation()
    const [show, setShow] = useState(false)

    function showOptions() {
        setShow(!show)
    }

    async function handleDeleteAppointment(appointmentReminderId: number) {
        const token = await AsyncStorage.getItem('token')


        // API connection
        const response = await api.post(
            `deleteAppointmentReminders`,
            {
                appointmentReminderId: appointmentReminderId,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        navigation.navigate('AppointmentReminderPage')
    }

    async function handleNotDoneAppointment(appointmentReminderId: number) {
        const token = await AsyncStorage.getItem('token')

        // API connection
        const response = await api.post(
            `updateAppointmentReminders`,
            {
                appointmentReminderId: appointmentReminderId,
                status: "notDone"
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        window.location.reload()
    }

    async function handleDoneAppointment(appointmentReminderId: number) {
        const token = await AsyncStorage.getItem('token')

        // API connection
        const response = await api.post(
            `updateAppointmentReminders`,
            {
                appointmentReminderId: appointmentReminderId,
                status: "done"
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        navigation.navigate('AppointmentReminderPage')
    }

    return (
        <TouchableOpacity
            style={
                props.state !== 'done'
                    ? (props.state === 'notDone' ? styles.notDoneContainer : styles.container)
                    : styles.doneContainer
            }
            key={props.state}
            onLongPress={showOptions}

        >

            <ScrollView
                style={styles.scroll}
                horizontal={true}
            >

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.state !== 'loading' ? { color: '#fff' } : { color: theme.colors.purple }]}>{props.hospitalName}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.state !== 'loading' ? { color: '#fff' } : { color: theme.colors.purple }]}>{props.specialty}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.state !== 'loading' ? { color: '#fff' } : { color: theme.colors.purple }]}>{props.time}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.state !== 'loading' ? { color: '#fff' } : { color: theme.colors.purple }]}>{props.date}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={[styles.text, props.state !== 'loading' ? { color: '#fff' } : { color: theme.colors.purple }]}>{props.contactPhone}</Text>
                </View>

            </ScrollView>

            {show ? (

                <View style={styles.appointmentOptionsButtonContainer}>
                    <TouchableOpacity
                        onPress={() => handleDeleteAppointment(props.id)}
                        style={styles.appointmentOptionsButton}
                    >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Deletar</Text>
                    </TouchableOpacity>

                    {props.state === 'loading' ? (
                        <>
                            <TouchableOpacity
                                onPress={() => handleNotDoneAppointment(props.id)}
                                style={styles.appointmentOptionsButton}
                            >
                                <Text style={{ color: '#fff', fontSize: 18 }}>Não Concluido</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleDoneAppointment(props.id)}
                                style={styles.appointmentOptionsButton}
                            >
                                <Text style={{ color: '#fff', fontSize: 18 }}>Concluido</Text>
                            </TouchableOpacity>
                        </>
                    ) : (<></>)}
                </View>

            ) : (<></>)}

        </TouchableOpacity >
    )
}