import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { useState } from "react";
import { createContext, ReactNode } from "react";
import { AsyncStorage } from "react-native";
import { daysOfWeek } from "../utils/daysWeek";

type AppContextProviderProps = {
    children: ReactNode
}

type FirstAidData = {
    id: number;
    name: string;
    procedureIntroduction: string;
    procedure: string;
    videoLink: string;
}

type MedicinesData = {
    name: string;
    id: string;
    time: string;
    status: number;
    date?: string;
    initialDate?: string;
    finalDate?: string;
}

type AppContextProps = {
    showMenu: boolean,
    medicinesToday: Array<Object>
    toggleShowMenu: (menuState: boolean) => void,
    setFirstAidData: (props: FirstAidData) => void,
    getFirstAidData: () => Promise<FirstAidData | undefined>,
    medicineDayNotification: () => void;
    getAllMedicinesOfDay: (props: {}) => Number;
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider(props: AppContextProviderProps) {

    const [showMenu, setShowMenu] = useState(false)
    const [medicinesToday, setMedicinesToday] = useState([]);
    const [medicineToBeTaken, setMedicineToBeTaken] = useState<MedicinesData>()

    function toggleShowMenu(menuState: boolean) {
        setShowMenu(menuState)
    }

    //FirstAid Functions
    function setFirstAidData(props: FirstAidData) {
        AsyncStorage.setItem('firstAid', JSON.stringify(props))
    }

    async function getFirstAidData() {
        const firstAidInStorage = await AsyncStorage.getItem('firstAid')
        return firstAidInStorage !== null ? JSON.parse(firstAidInStorage) : {};
    }

    // Functions
    function medicineDayNotification() {
        var time = moment(Date.now()).format("HH:mm");
        console.log(time)

        for (var i = 0; i < medicinesToday.length; i++) {
            {/* @ts-ignore */ }
            if (medicinesToday[i].status === 2 && medicinesToday[i].time === time) {
                setMedicineToBeTaken(medicinesToday[i])

                {/*@ts-ignore*/ }
                alert(`Está na hora de tomar seu remedio ${medicinesToday[i].name}!`)
            }
        }
    };

    // Verify in each minute if has medicines to taken
    var toExactMinute = 60000 - (new Date().getTime() % 60000)

    setTimeout(function () {
        setInterval(medicineDayNotification, 60000)
        medicineDayNotification()
    }, toExactMinute)

    // Get all medicines of day
    {/* @ts-ignore */ }
    function getAllMedicinesOfDay(props) {

        // Variables
        const days = daysOfWeek();
        const currentDay = moment().format("YYYY-MM-DD");

        // Get medicines of today
        const indexOf = days.indexOf(currentDay);

        {/*@ts-ignore*/ }
        setMedicinesToday(props[indexOf]);
        return indexOf;
    }

    return (
        <AppContext.Provider
            value={{
                setFirstAidData,
                getAllMedicinesOfDay,
                medicineDayNotification,
                getFirstAidData,
                toggleShowMenu,
                showMenu,
                medicinesToday
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}