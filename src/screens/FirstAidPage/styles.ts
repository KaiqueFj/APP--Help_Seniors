import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',

        flex : 1,
        alignItems : "center",
        justifyContent : "center",

        position : "relative",
    },

    scroll : {
        marginTop: 100,
        width: 380,

        marginBottom: 100,
    },

    videoContainer: {
        width : '100%',
        height: 270,

        overflow : 'hidden',
        borderRadius : 15,

        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        
    },

    videoIcon: {
        position: 'absolute',
        width : 75,
        height : 75,        
    },

    videoBanner: {
        width: '100%',
        height: '100%',
    },  

    title: {
        flex:1,
        fontSize:35,
        fontFamily: theme.fonts.bold700,
        color: theme.colors.darkPurple,

        marginBottom: 10,
        textAlign:'center'
    },

    procedureIntroduction:{
        textAlign:'justify',

        color: theme.colors.darkPurple,
        fontFamily: theme.fonts.medium500,
        fontSize:30,
        
        textAlignVertical:'auto',
        
        overflow:'hidden'
    },

    procedure: {
        textAlign: 'center',

        marginTop: 10,
        color: theme.colors.darkPurple,
        fontFamily: theme.fonts.medium500,
        fontSize:25,
        
        textAlignVertical:'auto',
        
        overflow:'hidden'
    }
})