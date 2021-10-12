import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({

  container: {
    width: 360,
    height: 100,
    flex: 0,
    flexDirection: 'row',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.purple,
    borderRadius: 15,
    position: 'relative',
    bottom: -35,
    left: 0,
    zIndex: 2000,

  },


})
