import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 325,
        height: 55,

        backgroundColor: theme.colors.green,
        marginTop: 20,
        marginBottom: 20,

        flex: 0,
        alignItems: "center",
        justifyContent: "center",

        borderRadius: 15
    },

    legend: {
        fontFamily: theme.fonts.medium500,
        fontSize: 25,
        color: '#000',
    }
});