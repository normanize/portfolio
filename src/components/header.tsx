import React, { useLayoutEffect, useContext } from "react"
import Navigation from '@/components/navigation'
import { FaAlignRight } from 'react-icons/fa';
import { SidebarContext } from '@/context/sidebar'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AppHeader() {

    const { onOpen } = useContext(SidebarContext)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toBottomTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".header",
                start: "top center",
                endTrigger: ".header",
                toggleActions: 'play reverse play reset'
            }
        });
        toBottomTL.fromTo('.header-to-bottom', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <header className="header p-8">
            <div  className="xl:max-w-screen-2xl 2xl:mx-auto">
                <div className="flex flex-row justify-between items-center">
                    <div className='flex-1'>
                        <h3 className="header-to-bottom font-bold text-3xl font-pacifico">
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