import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 650,
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        position : "relative",
    },
  
    appointmentReminder:{
        width: "90%",
        height: '75%',
        borderColor: theme.colors.purple,

        paddingTop: 20,
    },
})