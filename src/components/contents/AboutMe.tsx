import { useLayoutEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutMe = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // title animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#aboutme',
                start: 'top center',
                endTrigger: '#aboutme',
                toggleActions: 'play reverse play reset',
            }
        });
        tl.fromTo('.title',{
            y: -20,
            opacity: 0
          },{
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 2,
          });

        // description animation
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#aboutme',
                start: 'top center',
                endTrigger: '#aboutme',
                toggleActions: 'play reverse play reset',
            }
        });
        tl2.fromTo('.description',{
            y: 20,
            opacity: 0
          },{
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 2,
          });
    }, [])

    return (
        <section id='aboutme' className='min-h-screen flex items-center'>
            <div className='w-full bg-black py-32 px-4 md:px-8 xl:px-0'>
                <div className='max-w-5xl mx-auto'>
                    <h1 className='title text-white text-4xl font-bold tracking-widest text-center mb-14'>
                        About Me
                    </h1>

                    <div className='description text-gray-300'>
                        <p className='text-xl mb-4'>
                            I am self-taught developer and i am very passionate about improving my coding skills and following coding standards.
                        </p>

                        <p className='text-xl leading-8 mb-4'>
                            More than 5 years of experience developing cross-platform apps, admin portals, and API's from scratch.
                            I have published multiple mobile applications on Appstore & Playstore.
                        </p>

                        <p className='text-xl mb-4'>
                            I am currently looking for a new opportunity that suits my skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;