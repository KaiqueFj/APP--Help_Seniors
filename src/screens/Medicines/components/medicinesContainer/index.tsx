import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { api } from "../../../../services/api";
import { styles } from './styles';

type MedicinesData = {
    finalDate: string,
    id: number,
    initialDate: string,
    name: string,
    status: number,
    time: string,
}

type MedicinesProps = {
    medicine: MedicinesData
}

export function MedicinesContainer(props: MedicinesProps) {

    const [showDeleteMedicinesButton, setShowDeleteMedicinesButton] = useState(false)
    const navigation = useNavigation()

    function toggleShowDeleteMedicinesButton() {
        setShowDeleteMedicinesButton(!showDeleteMedicinesButton)
    }

    async function deleteMedicine(medicineId: number) {

        // API connection
        const response = await api.post("deleteMedicine", {
            medicineId: medicineId,
        })

        navigation.navigate('Home')
    }

    return (
        <TouchableOpacity
            style={styles.container}
            key={props.medicine.id}
            onLongPress={toggleShowDeleteMedicinesButton}
        >

            <ScrollView
                horizontal={true}
            >

                <Text
                    style={styles.legend}
                >
                    {props.medicine.time} | {props.medicine.name}
                </Text>
            </ScrollView>

            {showDeleteMedicinesButton ? (

                <View style={styles.deleteMedicinesButtonContainer}>
                    <TouchableOpacity
                        onPress={() => deleteMedicine(props.medicine.id)}
                        style={styles.deleteMedicinesButton}
                    >
                        <ImageBackground
                            source={require('../../../../../assets/icons/trash.png')}
                            style={{
                                width: 35,
                                height: 35,
                            }}
                        />
                    </TouchableOpacity>
                </View>

            ) : (<></>)}

        </TouchableOpacity>
    )
}