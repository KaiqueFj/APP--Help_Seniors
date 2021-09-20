import { StyleSheet } from "react-native";
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50, 
    flex: 0, 
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  legend:{
    color:'#000',
    fontSize:40,
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
})
