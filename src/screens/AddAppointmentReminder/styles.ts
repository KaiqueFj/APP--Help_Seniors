import { StyleSheet } from "react-native";

import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 650,

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    legend: {
        fontSize: 25,
        color: theme.colors.purple,
        fontFamily: theme.fonts.medium500,
        

        marginBottom: 3,
    },

    textInput: {
        width: '85%',
        height: 65,
        paddingLeft: 15,

        marginTop: 10,

        fontSize: 25,
        fontFamily: theme.fonts.normal400,
        color: theme.colors.purple,

        borderRadius: 15,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,

        borderColor: theme.colors.purple,

        backgroundColor: theme.colors.second
    },

    timeAndDateContainer: {

    },

    timeInputContainer: {
        width: 150,
        height: 75,
        backgroundColor: theme.colors.second,
        overflow: 'hidden',

        borderRadius: 15,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,

        borderColor: theme.colors.purple,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    timeInput: {
        width: 60,
       
        fontSize: 30,
        color: theme.colors.purple,
        fontFamily: theme.fonts.medium500,
    },

    dateContainer: {

    },

    button: {
        width: 350,
        height: 65,

        overflow: 'hidden',
        borderRadius: 15,

        marginTop: 30,
        backgroundColor: theme.colors.purple,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLegend: {
        color: '#fff',
        fontFamily: theme.fonts.medium500,
        fontSize: 25,

    },
})