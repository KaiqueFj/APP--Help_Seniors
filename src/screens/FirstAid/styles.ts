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

    FirstAidContainer:{
        width: 350,
        height: 80,

        marginTop: 10,
        
        backgroundColor:theme.colors.second,
        borderRadius: 15,
        borderRightWidth: 5,
        borderBottomWidth: 3,

        borderColor: theme.colors.purple,

        flex : 0,
        alignItems : "center",
        justifyContent : "center",
        position : "relative",
    },
    
    legend: {
        color:theme.colors.purple,
        fontFamily: theme.fonts.medium500,
        fontSize:35,
        textAlign: "center",
     

    }
})