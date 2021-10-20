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

type AppContextProps = {
    showMenu: boolean,
    toggleShowMenu: (menuState: boolean) => void,
    setFirstAidData: (props: FirstAidData) => void,
    getFirstAidData: () => Promise<FirstAidData | undefined>,
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider(props: AppContextProviderProps) {

    const [showMenu, setShowMenu] = useState(false)

    function toggleShowMenu(menuState : boolean) {
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



    return (
        <AppContext.Provider
            value={{
                setFirstAidData,
                getFirstAidData,
                toggleShowMenu,
                showMenu
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}