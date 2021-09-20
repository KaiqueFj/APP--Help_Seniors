import React, { useEffect, useState } from "react";
import { AsyncStorage, Text, View } from "react-native";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { ButtonHelpAndFirstAid } from "../../components/ButtonHelpAndFirstAid/index";

import { styles } from './styles'

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
}

export function FirstAid() {
    const [data, setData] = useState<FirstAidData[]>()

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
                    <ButtonHelpAndFirstAid
                        key={firstAid.id}
                        legend={firstAid.name}
                        link='FirstAidPage'
                    // onClick={() => setFirstAidData(firstAid)}
                    />
                ))
            }

        </View >


    )

}

// {props.data.map(firstAid => (
//     <ButtonHelpAndFirstAid
//         key={firstAid.id}
//         legend={firstAid.name}
//         link='FirstAidPage'
//         onClick={() => setFirstAidData(firstAid)}
//     />
// ))}

