import { StyleSheet } from "react-native";
import {theme} from '../../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,

        padding: 15,

        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",

        position: 'absolute',
        top: 50,
    },

    headerFont: {
        fontSize: 25,
        color: '#fff',
        fontFamily: theme.fonts.medium500
    },

    imageProfile: {
        width: 85,
        height: 85,

        borderRadius: 85/2
    },
})