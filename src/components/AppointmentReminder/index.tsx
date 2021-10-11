import React from 'react';
import { useNavigation } from "@react-navigation/core";
import { useEffect } from 'react'
import { AsyncStorage, ScrollView, Text, View } from "react-native";
import { AppointmentReminderButton } from '../AppointmentReminderButton'
import { styles } from './styles';


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

    // async function handleDeleteAppointment(appointmentReminderId: number) {
    //     const token = await AsyncStorage.getItem('token')

    //     // API connection

    //     const response = await fetch("http://localhost:3333/deleteAppointmentReminders", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization': `Bearer ${token}`
    //         },

    //         body: JSON.stringify({
    //             appointmentReminderId: appointmentReminderId,
    //         }),
    //     });

    //     // login sucess or not
    //     if (response.status === 200) {
    //         // sucessNotification("Lembrete de consulta deletado!")
    //         navigation.navigate('/AppointmentReminderPage');

    //     } else {
    //         // errorNotification("Não foi possível deletar lembrete!")
    //     }
    // }

    // async function handleNotDoneAppointment(appointmentReminderId: number) {
    //     const token = await AsyncStorage.getItem('token')

    //     // API connection
    //     const response = await fetch("http://localhost:3333/updateAppointmentReminders", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization': `Bearer ${token}`
    //         },

    //         body: JSON.stringify({
    //             appointmentReminderId: appointmentReminderId,
    //             status: "notDone"
    //         }),
    //     });

    //     // login sucess or not
    //     if (response.status === 200) {
    //         // sucessNotification("Consulta marcada como NÃO concluída")
    //         navigation.navigate('/AppointmentsReminder');

    //     } else {
    //         // errorNotification("Não foi possível alterar o estado da consulta")
    //     }
    // }

    // async function handleDoneAppointment(appointmentReminderId: number) {
    //     const token = await AsyncStorage.getItem('token')

    //     // API connection
    //     const response = await fetch("http://localhost:3333/updateAppointmentReminders", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization': `Bearer ${token}`
    //         },

    //         body: JSON.stringify({
    //             appointmentReminderId: appointmentReminderId,
    //             status: "done"
    //         }),
    //     });

    //     // login sucess or not
    //     if (response.status === 200) {
    //         // sucessNotification("Consulta concluída")
    //         navigation.navigate('/AppointmentsReminder');

    //     } else {
    //         //errorNotification("Não foi possível alterar o estado da consulta")
    //     }
    // }

    return (
        <View style={styles.container} key={props.state}>

            <ScrollView
                style={styles.scroll}
                horizontal={true}
            >

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.hospitalName}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.specialty}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.time}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.date}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.contactPhone}</Text>
                </View>

                


            </ScrollView>

            {/* <View style={styles.appointmentState} key={props.state}>
                {
                    props.state === 'done'
                        ? 'Consulta concluída'
                        : (props.state === 'notDone' ? 'Consulta não concluída' : 'Em andamento...')
                }
            </View> */}

            {/* <tr>
                <th>{props.hospitalName}</th>
                <th>{props.specialty}</th>
                <th>{props.time}</th>
                <th>{props.date}</th>
                <th>{props.contactPhone}</th>
            </tr> */}

            {/* <View style={styles.AppointmentReminderButtons}>
                <AppointmentReminderButton
                    // onPress={() => handleDeleteAppointment(props.id)}
                    color='var(--purple)'
                    legend='Deletar'
                /> */}

            {/* {props.state === 'loading' ? (
                    <>
                        <AppointmentReminderButton
                            // onPress={() => handleNotDoneAppointment(props.id)}
                            color='var(--red)'
                            legend='Consulta Não Concluída'
                        />

                        <AppointmentReminderButton
                            // onPress={() => handleDoneAppointment(props.id)}
                            color='var(--green)'
                            legend='Consulta Concluída'
                        />
                    </>
                ) : ''} */}
            {/* </View> */}

        </View >
    )
}