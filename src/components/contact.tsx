import { useLayoutEffect } from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaSkype
} from 'react-icons/fa'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Contact() {

    const navigate = (url: string) => {
        window.open(url)
    }

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toBottomTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset',
            }
        });
        toBottomTL.fromTo('.contact-to-bottom', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        const githubTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset'
            }
        });
        githubTL.fromTo('.social-icon-github', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        const linkedinTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset'
            }
        });
        linkedinTL.fromTo('.social-icon-linkedin', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.2
        })

        const skypeTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset'
            }
        });
        skypeTL.fromTo('.social-icon-skype', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.3
        })

        const fbTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset'
            }
        });
        fbTL.fromTo('.social-icon-fb', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.4
        })

        const instagramTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom",
                endTrigger: ".contact",
                toggleActions: 'play reverse play reset'
            }
        });
        instagramTL.fromTo('.social-icon-instagram', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.5
        })
    }, [])

    return (
        <div className='contact flex bg-smoky-black px-8'>
            <div className="flex max-w-screen-xl mx-auto py-40 px-8">
                <div className="flex flex-col justify-center items-center">
                    <h3 className='contact-to-bottom text-gray-300 font-bold text-3xl text-center'>You can find me in</h3>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-20 mt-16'>
                        <FaGithub
                            onClick={() => navigate('http://bitly.ws/xxZP')}
                            className='social-icon-github text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaLinkedinIn
                            onClick={() => navigate('http://bitly.ws/xxZS')}
                            className='social-icon-linkedin text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaSkype
                            onClick={() => navigate('skype:normanamaro.work?chat')}
                            className='social-icon-skype text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaFacebook
                            onClick={() => navigate('https://www.facebook.com/n0rmanize')}
                            className='social-icon-fb text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaInstagram
                            onClick={() => navigate('https://www.instagram.com/puts.norms')}
                            className='social-icon-instagram text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}