import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        position: 'relative',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image : {
        width: '90%',
        height: 200,
    },

    legend: {
        marginTop: 20,
        color: theme.colors.darkPurple,
        fontSize:25,
        fontFamily: theme.fonts.bold700
        
    }
})