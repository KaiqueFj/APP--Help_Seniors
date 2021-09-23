import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { ButtonHelpAndFirstAid } from "../../components/ButtonHelpAndFirstAid/index";

import { styles } from './styles'
import { useApp } from "../../hooks/useApp";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
}

export function FirstAid() {
    const [data, setData] = useState<FirstAidData[]>()

    const { setFirstAidData } = useApp()
    const navigation = useNavigation()

    useEffect(() => {
        connectApi()
    }, [])

    async function connectApi() {

        const response = await api.get('showFirstAid')
        setData(response.data)
    }

    return (
        <View style={styles.container}>
            <Header />

            {
                data?.map(firstAid => (
                    <TouchableOpacity
                        key={firstAid.id}
                        onPress={() => {
                            setFirstAidData(firstAid)
                            navigation.navigate('FirstAidPage')
                        }}
                        style={styles.FirstAidContainer}
                    >
                        <Text style={styles.legend}>
                            {firstAid.name}
                        </Text>

                    </TouchableOpacity>
                    
                ))
            }
        </View >
    )

}
