import React from "react";
import { View, Text, Button} from "react-native";

import { Header } from "./components/Header";

import { styles } from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export function Login({navigation}) {
    return (
       <View>
           <Text>Login</Text>
           <Button
           title='Sobre'
           onPress={() => navigation.navigate('sobre')} />
       </View>
       
    )
}