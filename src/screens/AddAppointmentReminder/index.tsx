import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { styles } from './styles';


import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'


export function AddAppointmentReminder() {

    const { register, setValue, handleSubmit } = useForm()
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    // Set input data in variable when textInput is changed
    useEffect(() => {
        register('hospitalName')
        register('specialty')
        register('time')
        register('date')
        register('contactPhone')
    }, [register])

    async function onSubmit() {

    }

    return (
        <View style={styles.container}>
            <Header />

            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholderTextColor="#62657a"
                placeholder='Nome do Hospital:'
                onChangeText={text => setValue('hospitalName', text)}
            />

            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholderTextColor="#62657a"
                placeholder='Especialidade:'
                onChangeText={text => setValue('specialty', text)}
            />

            <View style={styles.timeAndDateContainer}>
                <View>
                    <Text style={styles.legend}>Horário</Text>

                    <Button title="Open" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        onDateChange={() => console.log(date)}
                    />
                </View>

                <View style={styles.dateContainer}>
                    <Text style={styles.legend}>Data</Text>

                </View>
            </View>

            <TextInput
                style={styles.textInput}
                secureTextEntry={true}
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