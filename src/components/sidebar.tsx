import React, { useContext } from "react"
import { SidebarContext } from '@/context/sidebar'
import { FaTimes } from 'react-icons/fa';

export default function AppSidebar() {

    const { isOpen, onClose } = useContext(SidebarContext)

    return (
        <aside className={`fixed md:hidden top-0 right-0 z-40 w-80 md:w-96 min-h-screen bg-smoky-black translate-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative py-8">
                <div className="flex justify-end pr-6 mb-10">
                    <FaTimes
                        className="text-white text-2xl cursor-pointer justify-end"
                        onClick={() => onClose()}
                    />
                </div>

                <nav className="space-y-6 text-center list-none">
                    <li>
                        <a href="#overview" className="text-white font-bold text-3xl tracking-wider">Overview</a>
                    </li>
                    <li>
                        <a href="#aboutme" className="text-white font-bold text-3xl tracking-wider">About Me</a>
                    </li>
                    <li>
                        <a href="#experience" className="text-white font-bold text-3xl tracking-wider">Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white font-bold text-3xl tracking-wider">Projects</a>
                    </li>
                </nav>
            </div>
        </aside>
    )
}