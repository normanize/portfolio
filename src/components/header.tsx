import React, { useEffect, useState, useContext } from "react"
import Navigation from '@/components/navigation'
import { FaAlignRight } from 'react-icons/fa';
import { SidebarContext } from '@/context/sidebar'

export default function AppHeader() {

    const { onOpen } = useContext(SidebarContext)

    return (
        <header className="p-8">
            <div  className="xl:max-w-screen-2xl 2xl:mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className='flex-1'>
                        <h3 className="font-bold text-3xl font-pacifico">
                            Portfolio
                        </h3>
                    </div>
                    <div className=''>
                        <div className='hidden sm:flex'>
                            <Navigation />
                        </div>
                        <div className='sm:hidden'>
                            <FaAlignRight
                                className='text-2xl cursor-pointer'
                                onClick={() => onOpen()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}