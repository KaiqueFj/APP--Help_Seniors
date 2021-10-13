import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type AppointmentStatusProps = {
    status: string,
    showStatusBar: boolean,
}

export function AppointmentStatus(props: AppointmentStatusProps) {

    return (
        <>
            {!props.showStatusBar ? (
                <View style={[
                    styles.container,
                    props.status !== 'loading'
                        ? (props.status === 'notDone' ? { backgroundColor: '#6A0E0E' } : { backgroundColor: '#08481E' })
                        : {}
                ]}
                >

                    <Text style={styles.legend}>
                        {
                            props.status !== 'loading' 
                                ? (props.status === 'notDone' ? 'Não realizada' : 'Concluída') 
                                : 'Em andamento...'
                        }       
                    </Text>
                </View>
            ) : (<></>)}
        </>
    )
}