import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { useEffect, useState, } from "react";
import { AsyncStorage, Text, View, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { useApp } from "../../hooks/useApp";
import { api } from "../../services/api";
import { daysOfWeek } from "../../utils/daysWeek";
import { handleMedicineData, handleStatusOfMedicines } from "../../utils/handleMedicinesData";
import { joinMedicinesWithAndWithoutStatus } from "../../utils/joinMedicinesWithAndWithoutStatus";
import { medicinesOnDay } from "../../utils/medicinesOnDay";
import { MedicinesContainer } from "./components/medicinesContainer";
import { NewMedicinesButton } from "./components/newMedicinesButton";
import { NoMedicinesAlert } from "./components/noMedicinesAlert";
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

    const days = daysOfWeek();
    const currentDay = moment().format("YYYY-MM-DD");
    const indexOfToday = days.indexOf(currentDay);
    const navigation = useNavigation();

    // Medicines and the name of days
    const [medicines, setMedicines] = useState<MedicinesData[]>()
    const daysWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        connectApi()
    }, [])

    // Refresh Medicines Page
    useEffect(() => {
        const refreshMedicinesPage = navigation.addListener('focus', () => {
            connectApi()
        });

        return refreshMedicinesPage;
    }, [navigation]);

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

    {/* @ts-ignore */ }
    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    function onRefresh() {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        connectApi()
    }

    return (
        <View style={styles.container}>

            <Header />

            <ScrollView
                style={{
                    width: '90%',

                    flex: 0,
                    marginTop: 120,
                    marginBottom: 20,
                    paddingTop: 20,
                }}

                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                {daysWeek.map(day => (
                    <View
                        key={day}
                        style={[
                            styles.daysOfWeekContainer,
                            daysWeek.indexOf(day) === indexOfToday ? { backgroundColor: '#230E6A' } : (daysWeek.indexOf(day) < indexOfToday ? { display: 'none' } : {})
                        ]}
                    >
                        <Text style={[
                            styles.daysOfWeekContainerLegend,
                            daysWeek.indexOf(day) === indexOfToday ? { color: '#fff' } : {}
                        ]}>
                            {day}
                        </Text>


                        <ScrollView>
                            {/* @ts-ignore */}
                            {medicines !== undefined && medicines[daysWeek.indexOf(day)].length > 0 ? medicines[daysWeek.indexOf(day)].map(medicines => (

                                // medicines in the list
                                <MedicinesContainer
                                    medicine={medicines}
                                    key={medicines.id}
                                />

                            )) : (

                                // Show alert when has no medicines on day
                                <NoMedicinesAlert
                                    day={day}
                                />
                            )}
                        </ScrollView>

                        {/* @ts-ignore */}
                        {medicines !== undefined && medicines[daysWeek.indexOf(day)].length > 0 ? (

                            // Go to NewMedicines page 
                            <NewMedicinesButton />
                        ) : (<></>)}
                    </View>
                ))}



            </ScrollView>

        </View>

    )
}