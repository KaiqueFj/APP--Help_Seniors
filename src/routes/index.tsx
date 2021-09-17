import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./auth.routes";

const transparentBackgroundNavigator = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    },
};

export function Routes() {
    return (
        <NavigationContainer theme={transparentBackgroundNavigator}>
            <AuthRoutes />
        </NavigationContainer>
    )
}