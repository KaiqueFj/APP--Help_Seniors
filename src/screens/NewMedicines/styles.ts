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
        width: '85%',
        paddingTop: 15,
        paddingBottom: 15,

        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    timeContainer: {
        marginLeft: 7.5
    },

    dateContainer: {
        marginRight: 7.5
    },

    datetimeContainer: {
        width: '100%',
    },

    datetimeContainerLegend: {
        width: 165,
        height: 50,

        backgroundColor: theme.colors.second,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        marginBottom: 5,

        borderRadius: 15,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,

        borderColor: theme.colors.purple,
    },

    datetimeValue: {
        color: '#FFF9FB',
        fontSize: 25,
        fontFamily: theme.fonts.medium500
    },

    datetimeButton: {
        width: 350,
        height: 65,
        marginTop: 10,
        marginBottom: 23,
        borderRadius: 15,

        backgroundColor: theme.colors.purple,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    datetimeButtonLegend: {
        position: 'relative',
        color: '#fff',
        fontSize: 25,
        fontFamily: theme.fonts.medium500
    },

    button: {
        width: 350,
        height: 65,

        overflow: 'hidden',
        borderRadius: 15,

        marginTop: 30,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: theme.colors.purple,
    },


    buttonLegend: {
        color: '#fff',
        fontFamily: theme.fonts.medium500,
        fontSize: 25,

    },

    // Specific Date
    specificDateContainer: {
        width: '85%',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

    specificDateLegend: {
        fontFamily: theme.fonts.medium500,
        fontSize: 25,
        color: theme.colors.darkPurple,
        marginRight: 10,
    },

    specificDateHandleButton: {
        width: 70,
        height: 40,

        backgroundColor: theme.colors.purple,
        borderRadius: 15,
        position: 'relative',
        padding: 5,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    specificDateButtonCircle: {
        width: 30,
        height: '100%',
        borderRadius: 30 / 2,

        position: 'absolute',
    },

    // Specific Date Inputs
    specificDateValue: {
        color: '#62657a',
        fontSize: 25,
        fontFamily: theme.fonts.medium500
    },

    specificDateInput: {
        width: 350,
        height: 65,
        marginBottom: 10,
        borderRadius: 15,

        backgroundColor: theme.colors.second,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,

        borderColor: theme.colors.purple,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    specificDateInputLegend: {
        position: 'relative',
        color: '#62657a',
        fontSize: 25,
        fontFamily: theme.fonts.normal400
    },
})