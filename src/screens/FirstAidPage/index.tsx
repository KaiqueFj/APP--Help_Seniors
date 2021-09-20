import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useApp } from "../../hooks/useApp";
import { styles } from './styles';

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
};

export function FirstAidPage() {
    const [firstAid, setFirstAid] = useState<FirstAidData>()

    const { getFirstAidData } = useApp()

    useEffect(() => {
        teste()
    }, [])
    
    async function teste() {
        const response = await getFirstAidData()
        setFirstAid(response) 
    } 

    return (
        <View style={styles.container}>
            <Text key={firstAid?.id}>FirstAid Page poha</Text>
           
            {/* <Header />

            {
                data?.map(firstAid => (
                    <ButtonHelpAndFirstAid
                        key={firstAid.id}
                        legend={firstAid.name}
                        link='FirstAidPage'
                        onPress={() => setFirstAidData(firstAid)}
                    />
                ))
            } */}

        </View >

    )

}