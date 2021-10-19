import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AsyncStorage, ImageBackground, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import { daysOfWeek } from "../../utils/daysWeek";
import { handleMedicineData, handleStatusOfMedicines } from "../../utils/handleMedicinesData";
import { joinMedicinesWithAndWithoutStatus } from "../../utils/joinMedicinesWithAndWithoutStatus";
import { medicinesOnDay } from "../../utils/medicinesOnDay";
import { styles } from './styles';

type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

export function Medicines() {

    const [medicines, setMedicines] = useState<MedicinesData[]>()
    const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    const [show, setShow] = useState(false)
    const navigation = useNavigation()

    function showOptions() {
        setShow(!show)
    }

    useEffect(() => {
        connectApi()
    }, [])

    async function connectApi() {

        // Get Token from Storage
        const token = await AsyncStorage.getItem('token')

        const response = await api.get('showMedicine', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const medicinesHandled = handleMedicineData(response.data)
        const medicinesStatusHandled = handleStatusOfMedicines(response.data)

        // // calls the function to handle the data
        const allMedicines = medicinesOnDay(medicinesHandled);


        {/* @ts-ignore */ }
        const AllmedicinesHandled = joinMedicinesWithAndWithoutStatus({ allMedicines, medicinesStatusHandled })
        setMedicines(AllmedicinesHandled)
    }

    async function deleteMedicine(medicineId: number) {

        // API connection
        const response = await api.post("deleteMedicine", {
            medicineId: medicineId,
        })
    }


    const days = daysOfWeek();
    const currentDay = moment().format("YYYY-MM-DD");

    // Get medicines of today
    const indexOfToday = days.indexOf(currentDay);

    return (
        <View style={styles.container}>

            <Header />

            <ScrollView style={{
                width: '90%',

                flex: 0,
                height: 200,

                marginTop: 120,
                marginBottom: 20
            }}>

                {daysWeek.map(day => (
                    <View
                        key={day}
                        style={[
                            styles.dayContainer,
                            daysWeek.indexOf(day) === indexOfToday ? { backgroundColor: '#230E6A' } : (daysWeek.indexOf(day) < indexOfToday ? { display: 'none' } : {})

                        ]}
                    >
                        <Text style={[
                            styles.dayContainerLegend,
                            daysWeek.indexOf(day) === indexOfToday ? { color: '#fff' } : {}
                        ]}>
                            {day}
                        </Text>


                        {/* @ts-ignore */}
                        {medicines !== undefined && medicines[daysWeek.indexOf(day)].length > 0 ? medicines[daysWeek.indexOf(day)].map(medicines => (
                            <TouchableOpacity
                                style={styles.medicinesContainer}
                                key={medicines.id}
                                onLongPress={showOptions}
                            >

                                <ScrollView
                                    horizontal={true}
                                >

                                    <Text
                                        style={styles.legend}
                                    >
                                        {medicines.time} | {medicines.name}
                                    </Text>
                                </ScrollView>

                                {show ? (

                                    <View style={styles.appointmentOptionsButtonContainer}>
                                        <TouchableOpacity
                                            onPress={() => deleteMedicine(medicines.id)}
                                            style={styles.appointmentOptionsButton}
                                        >
                                            <ImageBackground
                                                source={require('../../../assets/icons/trash.png')}
                                                style={{
                                                    width: 35,
                                                    height: 35,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                ) : (<></>)}

                            </TouchableOpacity>

                        )) : (

                            <TouchableOpacity style={{
                                marginTop: 50,
                                flex: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                            onPress={() => navigation.navigate('NewMedicines')}
                            >
                                <ImageBackground
                                    source={require('../../../assets/icons/noMedicines.png')}
                                    style={{
                                        width: 300,
                                        height: 300,
                                    }} />

                                <Text style={{
                                    color: '#fff',
                                    fontFamily: theme.fonts.medium500,
                                    fontSize: 25,
                                    textAlign: 'center',
                                }}>
                                    Não há medicmentos{`\n`}{day}</Text>
                            </TouchableOpacity>
                        )}

                    </View>
                ))}

            </ScrollView>

        </View>

    )
}