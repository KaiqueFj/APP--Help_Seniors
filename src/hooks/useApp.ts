import { useContext } from "react";
import {AppContext} from  '../contexts/AppContext'

export function useApp(){
    const value = useContext(AppContext)
    return value
}