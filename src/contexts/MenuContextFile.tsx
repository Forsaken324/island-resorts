import React, { createContext, ReactNode } from "react";
import { useState } from "react";


interface MenuContextInterface
{
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface MenuDataProviderProps
{
    children: ReactNode
}

export const MenuContext = createContext<MenuContextInterface | undefined>(undefined)

export const MenuContextProvider: React.FC<MenuDataProviderProps> = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
            {children}
        </MenuContext.Provider>
    )
}
