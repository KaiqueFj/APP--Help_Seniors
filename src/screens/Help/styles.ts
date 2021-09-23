import { StyleSheet } from "react-native";
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 650,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    HelpContainer: {
        marginTop: 130,
        width: 350,

        marginBottom: 100,
    },

    HelpItem: {
        width: 350,
        height: 80,

        marginTop: 10,

        backgroundColor: theme.colors.purple,
        borderRadius: 15,
        borderRightWidth: 5,
        borderLeftWidth: 3,
        borderBottomWidth: 3,

        borderColor: theme.colors.darkPurple,

        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    legend: {
        color: '#fff',
        fontFamily: theme.fonts.medium500,
        fontSize: 35,
        textAlign: "center",
    }
})