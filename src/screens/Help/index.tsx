import React from "react";
import { Linking, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../components/Header";

import { styles } from './styles'

export function Help() {
    return (
        <View style={styles.container}>
            <Header />

            {/*Use map function, after getting API items */}
            <ScrollView style={styles.HelpContainer}>
                <TouchableOpacity
                    style={styles.HelpItem}
                    // onPress={() => Linking.openURL('')}
                >
                    <Text style={styles.legend}>
                        teste
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HelpItem}
                >
                    <Text style={styles.legend}>
                        teste
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HelpItem}
                >
                    <Text style={styles.legend}>
                        teste
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.HelpItem}
                >
                    <Text style={styles.legend}>
                        teste
                    </Text>

                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}