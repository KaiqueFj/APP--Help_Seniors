import { StyleSheet } from "react-native"
import { theme } from "../../../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,

        position: 'absolute',
        top: 20,
        right: 10,
        zIndex: 2,

        height: 35,
        width: 240,


        backgroundColor: theme.colors.purple,
        borderRadius: 10,
    },

    legend: {
        fontSize: 25,
        color: '#fff',
        fontFamily: theme.fonts.medium500
    }
})