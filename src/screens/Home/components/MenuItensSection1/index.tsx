import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from './styles'

export function MenuItensSection1() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.EmergencyAndFirstAidContainer}>

                <TouchableOpacity
                    style={styles.EmergencyContainer}
                    onPress={() => navigation.navigate('Emergency')}
                >
                    <Text style={styles.title}>Emergência</Text>

                    <Image
                        source={require('../../../../../assets/icons/emergency.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.FirstAidContainer}
                    onPress={() => navigation.navigate('FirstAid')}
                >
                    <Text style={styles.title}>Primeiros {'\n'}Socorros</Text>

                    <Image
                        source={require('../../../../../assets/icons/firstAid.png')}
                        style={styles.icon}
                    />

                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={styles.MedicinesContainer}
                onPress={() => navigation.navigate('Medicines')}
            >
                <Text style={styles.title}>Remédios</Text>

                <Image
                    source={require('../../../../../assets/icons/medicine.png')}
                    style={[styles.icon, {
                        width: 270,
                        height: 270,

                        left: 10,
                    }]}
                />
            </TouchableOpacity>

        </View>
    )
}