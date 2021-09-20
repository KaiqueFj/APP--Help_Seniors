import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { createContext, ReactNode } from "react";
import { AsyncStorage } from "react-native";

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
    setFirstAidData: (props: FirstAidData) => void,
    getFirstAidData: () => Promise<FirstAidData | undefined>,
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider(props: AppContextProviderProps) {

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
                getFirstAidData
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}