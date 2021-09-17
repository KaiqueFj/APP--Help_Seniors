import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Register } from "../screens/Register";
import { ToogleLoginOrRegister } from "../screens/ToogleLoginOrRegister";
import { Login } from "../screens/Login";

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
        </Navigator>
    )
}
