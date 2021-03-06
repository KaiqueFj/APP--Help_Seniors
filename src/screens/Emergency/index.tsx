import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header/index";
import { EmergencyItem } from "./EmergencyItens";
import { styles } from './styles';

export function Emergency() {
    return (
        <View style={styles.container}>

            <Header />

            <View style={{
                marginTop: 50
            }}>
                <EmergencyItem
                    banner={require('../../../assets/icons/copBanner.jpg')}
                    legend='Polícia - 190'
                    number='190'
                />

                <EmergencyItem
                    banner={require('../../../assets/icons/firemanBanner.jpg')}
                    legend='Bombeiros - 193'
                    number='193'
                />

                <EmergencyItem
                    banner={require('../../../assets/icons/ambulanceBanner.jpg')}
                    legend='Ambulância - 192'
                    number='192'
                />
            </View>
        </View>
    )
}