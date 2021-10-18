import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {

        height: '100%',
        flex: 0,
        alignItems: "center",
        justifyContent: "center",

        position: "relative",
    },

    dayContainer: {
        width: '100%',
        height: 650,
        marginTop: 10,

        borderRadius: 15,

        backgroundColor: '#8985F8',

        paddingTop: 20,
        alignItems: 'center',
    },

    dayContainerLegend: {
        color: '#fff',
        fontSize: 35,
        fontFamily: theme.fonts.bold700
    },

    medicinesContainer: {

        width: '90%',
        height: 75,

        marginTop: 10,
        alignItems: 'center',
        
        backgroundColor: theme.colors.purple,
        borderRadius: 15,

    },
    legend: {
        marginTop: 16,
        fontFamily: theme.fonts.bold700,
        fontSize: 25,
        color: '#fff',
        

    }
})