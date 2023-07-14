import React, { useState, createContext, ReactNode, useCallback } from "react"

type SidebarProps = {
    children: ReactNode
}

export interface SidebarContextData {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const sidebarContextDefaultValue: SidebarContextData = {
    isOpen: false,
    onOpen: () => null,
    onClose: () => null
}

export const SidebarContext = createContext<SidebarContextData>(sidebarContextDefaultValue);

export default function Sidebar({ children }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <SidebarContext.Provider value={{
            isOpen,
            onOpen,
            onClose
        }}>
            {children}
        </SidebarContext.Provider>
    )
}