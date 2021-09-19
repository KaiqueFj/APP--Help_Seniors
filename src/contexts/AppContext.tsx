import React from "react";
import { createContext, ReactNode } from "react";

type AppContextProps = {

}

type AppContextProviderProps = {
    children: ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider(props: AppContextProviderProps){

    return(
        <AppContext.Provider
            value={{

            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}