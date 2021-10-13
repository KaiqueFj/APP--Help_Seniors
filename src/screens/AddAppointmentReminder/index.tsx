import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { AsyncStorage, Platform, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { api } from '../../services/api';
import { styles } from './styles';

type OnSubmitProps = {
    hospitalName: string,
    specialty: string,
    date: string,
    time: string,
    contactPhone: string,
};

export function AddAppointmentReminder() {

    const navigation = useNavigation()
    const { register, setValue, handleSubmit } = useForm()
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [timeValue, setTimeValue] = useState('00:00')
    const [dateValue, setDateValue] = useState('dd/mm/yyyy')

    {/* @ts-ignore */ }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);

        // Process the date values
        const tempDate = new Date(currentDate);
        const fDate = moment(tempDate).format('YYYY-MM-DD')
        const fTime = moment(tempDate).format('HH:mm')

        // Date
        setValue('date', fDate)
        setDateValue(fDate)

        // Time
        setValue('time', fTime)
        setTimeValue(fTime)

    };

    // Set input data in variable when textInput is changed
    useEffect(() => {
        register('hospitalName')
        register('specialty')
        register('time')
        register('date')
        register('contactPhone')
    }, [register])

    {/* @ts-ignore */ }
    function showMode(currentMode) {
        setShow(true);
        setMode(currentMode)
    }

    async function onSubmit(data: OnSubmitProps) {

        // Get Token from Storage
        const token = await AsyncStorage.getItem('token')

        const response = await api.post(
            `newAppointmentReminder`,
            {
                hospitalName: data.hospitalName,
                specialty: data.specialty,
                day: data.date,
                time: data.time,
                contactPhone: data.contactPhone,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

        )

        if (response.status === 200) {

            navigation.navigate('AppointmentReminderPage')

        } else {
            // Alert Error with notification popup
        }
    }

    return (
        <View style={styles.container}>
            <Header />

            <TextInput
                style={styles.textInput}
                placeholderTextColor="#62657a"
                placeholder='Nome do Hospital:'
                onChangeText={text => setValue('hospitalName', text)}
            />

            <TextInput
                style={styles.textInput}
                placeholderTextColor="#62657a"
                placeholder='Especialidade:'
                onChangeText={text => setValue('specialty', text)}
            />

            <View style={styles.timeAndDateContainer}>

                <View style={styles.dateContainer}>

                    <View style={styles.datetimeContainerLegend}>
                        <Text style={styles.datetimeValue}>{dateValue}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => showMode('date')}
                        style={styles.datetimeButton}
                    >
                        <Text style={styles.datetimeButtonLegend}>Data</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.timeContainer}>

                    <View style={styles.datetimeContainerLegend}>
                        <Text style={styles.datetimeValue}>{timeValue}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => showMode('time')}
                        style={styles.datetimeButton}
                    >
                        <Text style={styles.datetimeButtonLegend}>Horário</Text>
                    </TouchableOpacity>
                </View>


                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />

                )}

            </View>

            <TextInput
                style={styles.textInput}
                placeholderTextColor="#62657a"
                placeholder='Número de contato:'
                onChangeText={text => setValue('contactPhone', text)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.buttonLegend}>Adicionar Lembrete</Text>
            </TouchableOpacity>

        </View>
    )
}