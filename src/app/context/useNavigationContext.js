'use client'

import { createContext, useContext, useState, useEffect } from "react";

export const NavContext = createContext(null);

export const NavigationProvider = ({children}) => {
    const [navState, setNavState] = useState("Home")

    return (
        <NavContext.Provider value={{
            navState,
            setNavState,
        }}>
            {children}
        </NavContext.Provider>
    )
}

export function useNavigationContext() {
  return useContext(NavContext);
}