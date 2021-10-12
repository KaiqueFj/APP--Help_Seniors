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

    datetimeContainerLegend:{
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
        color: theme.colors.purple,
        fontSize: 23,
        fontFamily: theme.fonts.medium500
    },

    datetimeButton: {
        width: 165,
        height: 50,
        borderRadius: 15,

        backgroundColor: theme.colors.purple,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    datetimeButtonLegend: {
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