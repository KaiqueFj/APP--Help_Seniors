import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 75,

        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",

        position: 'absolute',
        top: 30,
    },

    backButton: {
        width: 60,
        height: 60,
    },

    logoImage: {
        width: 60,
        height: 60,

        borderRadius: 60 / 2,
        backgroundColor: theme.colors.purple
    }
});