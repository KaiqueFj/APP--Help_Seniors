import { StyleSheet } from "react-native";
import { theme } from '../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 220,

        borderRadius: 15,
        marginTop: 15,

        overflow: "hidden",
        position: "relative"
    },

    banner: {
        width: '100%',
        height: '100%',
    },

    legend: {
        paddingLeft: 10,
        position: "absolute",
        bottom: 0,

        fontFamily: theme.fonts.bold700,
        fontSize: 35,
        color: '#fff',

        width: '100%',
        backgroundColor: '#00000080'


    }
})