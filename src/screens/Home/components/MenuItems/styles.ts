import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 380,
        height: 650,

        marginTop: '30%',
    },

    AppointmentHospitalsContainerss: {
        width: '100%',
        height: '15%',

        flex: 0,
        flexDirection: 'row',

        marginTop: 10
    },

    AppointmentContainer: {
        width: '49%',
        height: '100%',

        backgroundColor: 'yellow',
        marginRight: '2%',
        borderRadius: 15

    },

    HospitalContainer: {
        width: '49%',
        height: '100%',

        backgroundColor: 'red',
        borderRadius: 15
    },

    HelpContainer: {
        width: '100%',
        height: '15%',

        backgroundColor: 'blue',
        marginTop: 10,
        borderRadius: 15
    },
})