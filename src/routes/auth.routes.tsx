import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { NotLoggedHome } from "../screens/NotLoggedHome";
import { Emergency } from "../screens/Emergency";

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name='NotLoggedHome'
                component={NotLoggedHome}
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
                name='Emergency'
                component={Emergency}
            />
        </Navigator>
    )
}
