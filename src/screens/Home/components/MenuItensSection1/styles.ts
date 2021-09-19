import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 455,

        flex: 0,
        flexDirection: 'row',
    },

    EmergencyAndFirstAidContainer: {
        marginRight: 10,  
    },

    EmergencyContainer: {
        width: 185,
        height: 223,

        backgroundColor: '#57050591',
        borderRadius: 15,

        position: 'relative',
        overflow: "hidden",
    },

    FirstAidContainer: {
        width: 185,
        height: 223,

        marginTop: '5%',

        backgroundColor: '#3909688e',
        borderRadius: 15,

        position: 'relative',
        overflow: "hidden",
    },

    MedicinesContainer: {
        width: 185,
        height: '100%',

        backgroundColor: '#131a5379',
        borderRadius: 15,

        position: 'relative',
        overflow: "hidden",
    },

    title: {
        fontFamily: theme.fonts.bold700,
        fontSize: 25,
        color: '#fff',

        position: 'absolute',
        bottom: 10,
        left: 10,

        zIndex: 1000,
    },

    icon: {
        position: 'absolute',
        top: -40,
        left: 30,

        width: 220,
        height: 220,
    }
})