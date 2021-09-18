import { StyleSheet } from "react-native"
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        width: '85%',
        height: 65,

        position: 'relative',

        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 10
    },

    inputArea: {
        width: '100%',
        height: '100%',
        paddingLeft: 65,

        fontSize: 25,
        fontFamily: theme.fonts.normal400,
        color: theme.colors.purple,

        borderRadius: 15,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        borderLeftWidth: 1,

        borderColor: theme.colors.purple,

        backgroundColor: theme.colors.second
    },

    button: {
        width: '85%',
        height: 65,

        overflow: 'hidden',
        borderRadius: 15,

        marginTop: 50,
    },

    linearGradient: {
        width: '100%',
        height: 65,

        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})