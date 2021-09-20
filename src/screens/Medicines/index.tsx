import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View } from "react-native";
import { api } from "../../services/api";
import { handleMedicineData, handleStatusOfMedicines } from "../../utils/handleMedicinesData";
import { joinMedicinesWithAndWithoutStatus } from "../../utils/joinMedicinesWithAndWithoutStatus";
import { medicinesOnDay } from "../../utils/medicinesOnDay";

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

        // calls the function to handle the data
        const allMedicines = medicinesOnDay(medicinesHandled);

        // const AllmedicinesHandled = joinMedicinesWithAndWithoutStatus({ allMedicines, medicinesStatusHandled })
        setMedicines(medicinesHandled)
        console.log('/////////////////////////////////')
    }

    console.log(medicines)

    return (
        <View style={styles.container}>
            {medicines?.map(medicines => (
                <Text key={medicines.id}>{medicines.name}</Text>
            ))}
        </View>
    )
}