import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { NotLoggedHome } from "../screens/NotLoggedHome";
import { Emergency } from "../screens/Emergency";
import { FirstAid } from "../screens/FirstAid";
import { Medicines } from "../screens/Medicines";

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
            <Screen
                name='FirstAid'
                component={FirstAid}
            />
            <Screen
                name='Medicines'
                component={Medicines}
            />
        </Navigator>
    )
}
