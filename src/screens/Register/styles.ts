import { StyleSheet } from "react-native"

import { theme } from '../../global/styles/theme'

export const style = StyleSheet.create({
    legendPageContainer: {
        width: '85%',
    },

    title: {
        color: theme.colors.purple,
        fontFamily: theme.fonts.bold700,
        fontSize: 40,
        textAlign: 'center'
    },

    legend: {
        marginTop: 10,

        color: '#fff',
        fontFamily: theme.fonts.medium500,
        fontSize: 25,
        textAlign: 'center',
    },

    link: {
        color: theme.colors.purple,
    }
})