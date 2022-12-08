import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Header = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // logo animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'header',
                start: 'top center',
                endTrigger: '.hero',
                toggleActions: 'play reverse play reset',
            }
        })
        tl.fromTo('.logo',{
            y: -20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 2,
        })

        // nav animation
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: 'header',
                start: 'top center',
                endTrigger: '.hero',
                toggleActions: 'play reverse play reset'
            }
        })
        tl2.fromTo('nav ul',{
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.5,
            duration: 2,
        })
    }, [])

    return (
        <header className='max-w-screen-xl xl:mx-auto flex flex-row items-center pt-4 pb-2 2xl:mt-6 2xl:pb-4 mx-4 md:mx-8'>
            <div className='flex-1 logo'>
                <h3 className='font-pacifico font-extrabold text-3xl 2xl:text-4xl'>
                    <a href="#">Portfolio</a>
                </h3>
            </div>
            <nav className='nav hidden md:inline font-roboto text-lg 2xl:text-xl tracking-wider'>
                <ul className='flex flex-row items-center space-x-4'>
                    <li>
                        <a href="#overview" className='hover:text-red-800 hover:font-medium'>Overview</a>
                    </li>
                    <li>
                        <a href="#aboutme" className='hover:text-red-800 hover:font-medium'>About Me</a>
                    </li>
                    <li>
                        <a href="#projects" className='hover:text-red-800 hover:font-medium'>Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;