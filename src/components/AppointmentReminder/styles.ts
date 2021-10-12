import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    marginTop: 20,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    borderBottomWidth: 4,
    borderRightWidth: 1,
    borderLeftWidth: 1,

    borderColor: theme.colors.purple,

    backgroundColor: theme.colors.second,
    paddingRight: 20,

    position: 'relative',


  },

  doneContainer: {
    width: '100%',
    height: 120,
    marginTop: 20,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    borderBottomWidth: 4,
    borderRightWidth: 1,
    borderLeftWidth: 1,

    borderColor: theme.colors.green,

    backgroundColor: theme.colors.green,
    paddingRight: 20,
    position: 'relative',
  },

  notDoneContainer: {
    width: '100%',
    height: 120,
    marginTop: 20,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    borderBottomWidth: 4,
    borderRightWidth: 1,
    borderLeftWidth: 1,

    borderColor: '#dd4242',

    backgroundColor: '#dd4242',
    paddingRight: 20,
    position: 'relative',
  },

  scroll: {
    height: '25%',
  },

  textContainer: {
    height: '100%',

    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 30,
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',

    fontSize: 28,
    color: theme.colors.purple,
  },

  appointmentOptionsButtonContainer: {
    width: '100%',
    height: 50,

    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appointmentOptionsButton: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: theme.colors.purple,
    marginLeft: 10,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    marginBottom: 10,
  },
})
