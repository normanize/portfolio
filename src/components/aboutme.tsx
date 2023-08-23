import { useLayoutEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutMe() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toBottomTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#aboutme",
                start: "top center",
                endTrigger: "#aboutme",
                toggleActions: 'play reverse play reset'
            }
        });
        toBottomTL.fromTo('.aboutme-to-bottom', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        
        const toRLTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#aboutme",
                start: "top center",
                endTrigger: "#aboutme",
                toggleActions: 'play reverse play reset'
            }
        });
        toRLTL.fromTo('.aboutme-to-right-left-1', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        toRLTL.fromTo('.aboutme-to-right-left-2', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        toRLTL.fromTo('.aboutme-to-right-left-3', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
    }, [])

    return (
        <div id="aboutme" className="aboutme flex py-14">
            <div className="w-full flex justify-start items-center max-w-screen-xl mx-auto">
                <div className="text-center md:text-left pt-24 pb-24 px-8 xl:p-0">
                    <h3 className="aboutme-to-bottom text-4xl font-bold text-red-700 mb-10 tracking-wider">About Me</h3>
                    <div>
                        <p className="aboutme-to-right-left-1 text-gray-800 text-2xl mb-4">
                            I am an experienced Web & Mobile developer who is passionate about improving my coding skills and following coding standards.
                        </p>
                        <p className="aboutme-to-right-left-2 text-gray-800 text-2xl mb-4">
                            I developed cross-platform mobile apps, custom web apps, and backend API's from scratch.
                        </p>
                        <p className="aboutme-to-right-left-3 text-gray-800 text-2xl">
                            I have published multiple mobile applications on Appstore & Playstore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}