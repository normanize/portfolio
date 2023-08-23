import { useLayoutEffect } from 'react'
import Hero from '@/assets/images/me.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Overview() {

    const hireMe = () => {
        window.open('http://bitly.ws/xxZV')
    }

    const download = async () => {
        window.open("https://drive.google.com/u/1/uc?id=1hucAcRgfjoxLEl0TP9rgkuNTHhSA5of1&export=download")
    }

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toBottomTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#overview",
                start: "top center",
                endTrigger: "#overview",
                toggleActions: 'play reverse play reset',
            }
        });
        toBottomTL.fromTo('.overview-to-bottom', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        const toTopTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#overview",
                start: "top bottom",
                endTrigger: "#overview",
                toggleActions: 'play reverse play reset',
            }
        });
        toTopTL.fromTo('.overview-to-top', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        
        const fadeInTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#overview",
                start: "top center",
                endTrigger: "#overview",
                toggleActions: 'play reverse play reset'
            }
        });
        fadeInTL.fromTo('.overview-fade-in', {
            opacity: 0
        }, {
            opacity: 1,
            delay: 0.3
        })
    }, [])

    return (
        <div id="overview" className='overview flex items-center py-14 px-8'>
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    <div className="flex-1 max-w-lg p-4 text-center lg:text-left">
                        <p className="overview-to-bottom text-red-700 text-5xl font-bold tracking-wider mb-4 mde:mb-2 lg:mb-1">
                            Norman Amaro
                        </p>
                        <p className="overview-fade-in text-2xl mb-3 font-semibold mb-8 md:mb-6 lg:mb-4">
                            Web & Mobile Application Developer
                        </p>
                        <p className="overview-to-top text-gray-800 text-lg mb-16 lg:mb-10 font-sans">
                            I developed cross-platform apps, custom
                            web apps, and backend API's from scratch.
                        </p>

                        <div className='flex flex-col-reverse md:flex-row justify-center lg:justify-start items-center md:space-x-6'>
                            <button
                                onClick={hireMe}
                                className="overview-to-bottom hover:text-red-800 text-xl font-bold border-2 border-black hover:border-red-800 rounded-lg py-3 px-10"
                            >
                                Hire Me
                            </button>
                            <button
                                onClick={download}
                                className="overview-to-top hover:text-red-800 text-xl font-semibold rounded-lg mb-10 md:mb-0"
                            >
                                Download CV
                            </button>
                        </div>
                    </div>
                    <div className='flex-1 mb-10 lg:mb-0 p-4'>
                        <img
                            src={Hero}
                            alt="hero"
                            className='w-96 mx-auto mb-10 lg:-translate-x-10 rounded-md'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}