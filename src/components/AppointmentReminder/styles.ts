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
  }

  // Funções de Estado e botão
  // appointmentState:{
  //   width: '100%',
  //   color: '#E3170A'
  // },
  // AppointmentReminderButtons:{
  //   width: '100%',
  //   color: '#E3170A'
  // }
})
