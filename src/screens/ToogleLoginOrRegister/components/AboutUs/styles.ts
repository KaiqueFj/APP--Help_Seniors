import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 280,
        maxHeight: 150,
        position: 'relative',

        backgroundColor: theme.colors.purple,
        borderRadius: 15,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 0.7,
    },

    playContainer:{
        width: 75,
        height: 75,

        borderRadius: 75/2,
        backgroundColor: '#ffffff7b',

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        left: -30,
        bottom: -25,
    },

    playButton:{
        width: 40,
        height: 40,

        borderRadius: 40/2,

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: theme.colors.darkPurple,
        paddingLeft: 5,
    },
});
