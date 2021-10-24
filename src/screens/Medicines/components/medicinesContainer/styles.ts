import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 325,
        height: 75,

        marginTop: 15,
        alignItems: 'center',

        backgroundColor: theme.colors.purple,
        borderRadius: 15,

        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15,
    },

    legend: {
        marginTop: 16,
        fontFamily: theme.fonts.bold700,
        fontSize: 25,
        color: '#fff',
    },


    deleteMedicinesButtonContainer: {
        width: 65,
        height: 75,

        position: 'absolute',
        top: 0,
        right: 0,
    },

    deleteMedicinesButton: {
        height: 75,
        paddingLeft: 10,
        paddingRight: 10,

        backgroundColor: theme.colors.red,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
    },


})