import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { ToogleLoginOrRegister } from "../screens/ToogleLoginOrRegister";


const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name='ToogleLoginOrRegister'
                component={ToogleLoginOrRegister}
            />
            <Screen
                name='Register'
                component={Register}
            />
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}
