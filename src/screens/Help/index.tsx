import React, { useEffect, useState } from "react";
import { Linking, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

import { styles } from './styles'

type HelpData = {
    id: number;
    title: string;
    videoLink: string;
}

export function Help() {

    const [data, setData] = useState<HelpData[]>()

    useEffect(() => {
        connectApi()
    }, [])

    async function connectApi() {

        const response = await api.get('showHelp')
        setData(response.data)
    }

    return (
        <View style={styles.container}>
            <Header />

            {/*Use map function, after getting API items */}
            <ScrollView style={styles.HelpContainer}>

                {data?.map(help => (
                    <TouchableOpacity
                        key={help.id}
                        onPress={() => Linking.openURL(help.videoLink)}
                        style={styles.HelpItem}
                    >
                        <Text style={styles.legend}>
                            {help.title}
                        </Text>

                    </TouchableOpacity>
                    
                ))}
            </ScrollView>
        </View>
    )
}