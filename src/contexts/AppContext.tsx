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


//First aid 
// function setFirstAidData(props) {
//     localStorage.setItem('firstAid', JSON.stringify(props))
// }

// function getFirstAidData() {
//     return JSON.parse(localStorage.getItem('firstAid'))
// }