import { StyleSheet } from "react-native";
import {theme} from '../../../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: 280,
        maxHeight: 200,
        position: 'relative',

        backgroundColor: '#6a42e1a1',
        borderRadius: 15,

        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 10
        },
        shadowRadius: 20,
        shadowOpacity: 0.7, 
        
    },

    toggleLoginRegisterContainer: {
        width: '90%',
        height: 70,
        padding: 10,

        backgroundColor: theme.colors.darkPurple,
        borderRadius: 15,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        position: 'absolute',
        bottom: 20,
    },

    link: {
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
        fontSize: 20
    },

    LoginContainer: {
        height: 50,
        width: 95,

        borderRadius: 10,
        backgroundColor: '#14d8e4',

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 5,
        marginLeft: 10,

        shadowColor: '#14d8e4',
        shadowOffset: {
          width: 5,
          height: 2
        },
        shadowRadius: 18,
        shadowOpacity: 0.7
    },

    userImage: {
        width: 150,
        height: 150,

        position: 'absolute',
        top: -65,

        borderRadius: 90,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 10
        },
        shadowRadius: 18,
        shadowOpacity: 0.7
    },
});
