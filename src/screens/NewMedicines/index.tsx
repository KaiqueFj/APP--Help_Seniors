import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { AsyncStorage, Platform, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { api } from '../../services/api';
import ToastManager, { toast } from 'react-toastify';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type NewMedicinesProps = {
    medicineName: string,
    initialDate: string,
    finalDate: string,
    time: string
}

export function NewMedicines() {

    const { register, setValue, handleSubmit } = useForm()
    const navigation = useNavigation()

    const currentDate = moment().format('YYYY-MM-DD');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // Specific Date
    const [timeValue, setTimeValue] = useState('00:00')
    const [finalDate, setFinalDate] = useState('dd/mm/yyyy')
    const [initialDate, setInitialDate] = useState('dd/mm/yyyy')
    const [specifyDate, setSpecifyDate] = useState(false)


    {/* @ts-ignore */ }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);

        // Process the date values
        const tempDate = new Date(currentDate);
        const iDate = moment(tempDate).format('YYYY-MM-DD')
        const fTime = moment(tempDate).format('HH:mm')

        // Initial Date
        setValue('initialDate', iDate)
        setInitialDate(moment(iDate).format('DD-MM-YYYY'))

        // Time
        setValue('time', fTime)
        setTimeValue(fTime)

    };

    // Final DateTimePicker
    {/* @ts-ignore */ }
    const onChangeFinalDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false)
        setDate(currentDate);

        // Process the date values
        const tempDate = new Date(currentDate);
        const fDate = moment(tempDate).format('YYYY-MM-DD')
        const fTime = moment(tempDate).format('HH:mm')

        // Final Date
        setValue('finalDate', fDate)
        setFinalDate(moment(fDate).format('DD-MM-YYYY'))

        // Time
        setValue('time', fTime)
        setTimeValue(fTime)

    };

    {/* @ts-ignore */ }
    function showMode(currentMode) {
        setShow(true);
        setMode(currentMode)
    }

    // Set input data in variable when textInput is changed
    useEffect(() => {
        register('medicineName')
        register('initialDate')
        register('finalDate')
        register('time')
    }, [register])

    async function onSubmit(data: NewMedicinesProps) {

        // Get Token from Storage
        const token = await AsyncStorage.getItem('token')

        if (show) {
            const response = await api.post(
                `registerMedicine`,
                {
                    name: data.medicineName,
                    initialDate: data.initialDate,
                    finalDate: data.finalDate,
                    time: data.time,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }

            )
        } else {
            const response = await api.post(
                `registerMedicine`,
                {
                    name: data.medicineName,
                    initialDate: currentDate,
                    finalDate: currentDate,
                    time: data.time,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }

            )
        }

        return navigation.navigate('Medicines')
    }

    return (
        <View style={styles.container}>
            <Header />


            <TouchableOpacity
                onPress={() => showMode('time')}
                style={styles.datetimeButton}
            >
                <Text style={styles.datetimeButtonLegend}>Adicione um horário:
                    <Text style={styles.datetimeValue}> {timeValue}</Text>
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.textInput}
                placeholderTextColor="#62657a"
                placeholder='Nome do remédio:'
                onChangeText={text => setValue('medicineName', text)}
            />

            {/* // Specific date  */}
            <View style={styles.specificDateContainer}>

                <Text style={styles.specificDateLegend}>
                    Data específica
                </Text>

                <TouchableOpacity
                    onPress={() => setSpecifyDate(!specifyDate)}
                    style={[
                        styles.specificDateHandleButton,
                        specifyDate ? { backgroundColor: theme.colors.purple } : { backgroundColor: '#62657a' }
                    ]}
                >
                    <View
                        style={[
                            styles.specificDateButtonCircle,
                            specifyDate ? {
                                backgroundColor: theme.colors.green,
                                right: 5,
                            } : {
                                backgroundColor: '#44475a',
                                left: 5,
                            }
                        ]}
                    />

                </TouchableOpacity>
            </View>

            {specifyDate ? (
                <View>

                    <TouchableOpacity
                        onPress={() => showMode('date')}
                        onLongPress={() => setInitialDate('dd/mm/yyyy')}
                        style={styles.specificDateInput}
                    >
                        <Text style={styles.specificDateInputLegend}>Data Inicial:
                            <Text style={styles.specificDateValue}> {initialDate}</Text>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => showMode('date')}
                        onLongPress={() => setFinalDate('dd/mm/yyyy')}
                        style={styles.specificDateInput}

                    >
                        <Text style={styles.specificDateInputLegend}>Data Final:
                            <Text style={styles.specificDateValue}> {finalDate}</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            ) : (<></>)}

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={initialDate !== 'dd/mm/yyyy' ? onChangeFinalDate : onChange}
                />
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.buttonLegend}>Adicionar novo remédio</Text>
            </TouchableOpacity>

        </View>
    )
}