import React, { useEffect, useState, useContext } from "react"
import { SidebarContext } from '@/context/sidebar'
import { FaTimes } from 'react-icons/fa';

export default function AppSidebar() {

    const { isOpen, onClose } = useContext(SidebarContext)

    return (
        <div className={`fixed top-0 right-0 z-40 w-80 md:w-96 h-screen bg-smoky-black translate-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative p-6">
                <div className="absolute right-0 mr-6">
                    <FaTimes
                        className="text-white text-2xl cursor-pointer justify-end"
                        onClick={() => onClose()}
                    />
                </div>
            </div>
        </div>
    )
}