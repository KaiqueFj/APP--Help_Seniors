import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    AppointmentHospitalsContainerss: {
        height: '15%',

        flex: 0,
        flexDirection: 'row',

        marginTop: 10
    },

    AppointmentContainer: {
        width: 185,
        height: '100%',

        backgroundColor: '#6810596c',
        borderRadius: 15,
        
        marginRight: 10,
        overflow: 'hidden',

    },

    HospitalContainer: {
        width: 185,
        height: '100%',

        backgroundColor: '#06221998',
        borderRadius: 15,
        overflow: 'hidden',
    },

    HelpContainer: {
        width: 380,
        height: 100,

        backgroundColor: '#44475a4d',
        marginTop: 10,
        borderRadius: 15,

        overflow: 'hidden',
    },

    title: {
        fontFamily: theme.fonts.bold700,
        fontSize: 20,
        color: '#fff',

        position: 'absolute',
        bottom: 10,
        left: 10,

        zIndex: 1000,
    },

    icon: {
        position: 'absolute',
        top: -25,
        left: 75,

        width: 150,
        height: 150,
    }
})