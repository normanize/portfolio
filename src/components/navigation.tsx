import React, { useLayoutEffect } from "react"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AppNavigation() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const toTopTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#header",
                start: "top center",
                endTrigger: "#header",
                toggleActions: 'play reverse play reset'
            }
        });
        toTopTL.fromTo('.nav-to-top', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <nav className="nav-to-top space-x-4">
            <a href="#overview" className="text-xl font-roboto">Overview</a>
            <a href="#aboutme" className="text-xl font-roboto">About Me</a>
            <a href="#experience" className="text-xl font-roboto">Experience</a>
            <a href="#projects" className="text-xl font-roboto">Projects</a>
        </nav>
    )
}