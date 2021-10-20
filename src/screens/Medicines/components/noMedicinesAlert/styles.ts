import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    legend: {
        color: '#fff',
        fontFamily: theme.fonts.medium500,
        fontSize: 25,
        textAlign: 'center',
    },

    banner: {
        width: 300,
        height: 300,
    }
})