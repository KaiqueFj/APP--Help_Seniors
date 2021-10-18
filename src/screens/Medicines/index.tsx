import moment from "moment";
import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import { daysOfWeek } from "../../utils/daysWeek";
import { handleMedicineData, handleStatusOfMedicines } from "../../utils/handleMedicinesData";
import { joinMedicinesWithAndWithoutStatus } from "../../utils/joinMedicinesWithAndWithoutStatus";
import { medicinesOnDay } from "../../utils/medicinesOnDay";
// import { daysWeek } from '../../utils/daysWeek'

import { styles } from './styles'

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
                    <TouchableOpacity
                        style={[
                            styles.dayContainer,
                            daysWeek.indexOf(day) === indexOfToday ? { backgroundColor: theme.colors.darkPurple } : (daysWeek.indexOf(day) < indexOfToday ? { display: 'none' } : {})

                        ]}
                    >
                        <Text style={[
                            styles.dayContainerLegend,
                            daysWeek.indexOf(day) === indexOfToday ? { color: theme.colors.green } : {}
                        ]}>
                            {day}
                        </Text>

                        {/* @ts-ignore */}
                        {medicines !== undefined ? medicines[daysWeek.indexOf(day)].map(medicines => (
                            <View style={styles.medicinesContainer}>

                                <ScrollView>

                                    <Text
                                        key={medicines.id}
                                        style={styles.legend}
                                    >
                                        {medicines.time} | {medicines.name}
                                    </Text>
                                </ScrollView>

                            </View>
                        )) : <Text>Not has Medicines</Text>}

                    </TouchableOpacity>
                ))}

            </ScrollView>

        </View>

    )
}