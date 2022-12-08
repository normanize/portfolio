import { useLayoutEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ProjectItem from '../ProjectItem'
import { PROJECT_LIST } from '../../mock/data'

const Projects = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // title animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects',
                start: 'top center',
                endTrigger: '#projects',
                toggleActions: 'play reverse play reset',
            }
        });
        tl.fromTo('.project-title', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 1.5,
        })
    }, [])

    return (
        <section id="projects">
            <div className='flex flex-col justify-center items-center min-h-screen py-10'>
                <h1 className='project-title text-4xl font-bold tracking-widest text-center mb-20'>
                    Projects
                </h1>

                <div className='max-w-9xl flex flex-row space-x-8 mb-20'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {PROJECT_LIST.map((list) => (
                            <a key={list.title} target="_blank" href={list.url}>
                                <ProjectItem {...list} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;