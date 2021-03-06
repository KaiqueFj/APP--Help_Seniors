import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { NotLoggedHome } from "../screens/NotLoggedHome";
import { Emergency } from "../screens/Emergency";
import { FirstAid } from "../screens/FirstAid";
import { Medicines } from "../screens/Medicines";
import { FirstAidPage } from "../screens/FirstAidPage";
import { Help } from "../screens/Help";
import { AddAppointmentReminder } from "../screens/AddAppointmentReminder";
import { AppointmentReminderPage } from "../screens/Appointments";
import { NewMedicines } from "../screens/NewMedicines";
import { Hospitals } from "../screens/Hospitals";


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
                name='Hospitals'
                component={Hospitals}
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
                name='FirstAidPage'
                component={FirstAidPage}
            />
            <Screen
                name='Medicines'
                component={Medicines}
            />
            <Screen
                name='Help'
                component={Help}
            />
            <Screen
                name='AddAppointmentReminder'
                component={AddAppointmentReminder}
            />
            <Screen
                name='AppointmentReminderPage'
                component={AppointmentReminderPage}
            />
            <Screen
                name='NewMedicines'
                component={NewMedicines}
            />
        </Navigator>
    )
}
