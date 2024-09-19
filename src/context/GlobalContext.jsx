import { createContext } from "react";

export const GlobalContext =  createContext()

let colors = ['crimson', 'teal', 'orange']

export function GlobalContextProvider({ children }) {
    return (
        <GlobalContext.Provider value={colors} >{children}</GlobalContext.Provider>
    )
}