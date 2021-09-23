import React, { useEffect, useState } from "react";
import { Image, Linking, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useApp } from "../../hooks/useApp";
import { Header } from "../../components/Header";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
};

export function FirstAidPage() {
    const [firstAid, setFirstAid] = useState<FirstAidData>()

    const { getFirstAidData } = useApp();
    const navigation = useNavigation();

    useEffect(() => {
        teste()
    }, [])

    async function teste() {
        const response = await getFirstAidData()
        setFirstAid(response)
    }

    const firstAidProcedureTopics = firstAid?.procedure !== undefined ? firstAid?.procedure.split('/') : [];

    return (
        <View style={styles.container}>
            <Header />


            <ScrollView
                style={styles.scroll}
            >

                <Text style={styles.title}> {firstAid?.name} </Text>


                <TouchableOpacity
                    style={styles.videoContainer}
                    onPress={() => Linking.openURL(firstAid?.videoLink !== undefined ? firstAid.videoLink : '')}
                >
                    <Image
                        style={styles.videoBanner}
                        source={{ uri: 'https://ead.cdmensino.com.br/files/curso-primeiros-socorros.jpg' }}
                    />

                    <Image
                        source={require('../../../assets/icons/playIcon.png')}
                        style={styles.videoIcon}
                    />

                </TouchableOpacity>


                <Text style={styles.procedureIntroduction}>
                    {firstAid?.procedureIntroduction}
                    {'\n'}
                </Text>

                {firstAidProcedureTopics?.map(procedure => (
                    <Text
                        style={styles.procedure}
                        key={firstAidProcedureTopics.indexOf(procedure) + 1}
                    >
                        {`${firstAidProcedureTopics.indexOf(procedure) + 1}. ${procedure}`}
                    </Text>
                ))}

            </ScrollView >
        </View>
    )

}