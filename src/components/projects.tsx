import { useState, useLayoutEffect } from 'react'
import ProjectCard from './commons/card/project'
import Button from './commons/button'

import { projects } from '@/mock/data'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {
    const [filter, setFilter] = useState('all')

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toLRTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "top center",
                endTrigger: "#projects",
                toggleActions: 'play reverse play reset'
            }
        });
        toLRTL.fromTo('.project-to-lr', {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

        const toRLTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "top center",
                endTrigger: "#projects",
                toggleActions: 'play reverse play reset'
            }
        });
        toRLTL.fromTo('.project-to-rl', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

        ScrollTrigger.batch('.project-item', {
            start: 'top center',
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15, grid: [1, 3] } }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true })
        })
    }, [])

    return (
        <div id="projects" className='flex justify-center items-center projects p-8'>
            <div className="max-w-screen-xl mx-auto">
                <div className='mb-20'>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-20">
                        <h3 className="project-to-lr text-4xl font-bold text-red-700 mb-10 sm:mb-0 tracking-wider">Projects</h3>
                        <div className="project-to-rl flex flex-row space-x-8">
                            <Button
                                onClick={() => setFilter('all')}
                                className="text-gray-700 font-semibold hover:text-red-700 px-4 py-0.5 rounded-lg"
                                style={
                                    filter === 'all' ? {
                                        color: '#fff',
                                        backgroundColor: '#B91C1C'
                                    } : undefined
                                }
                            >All</Button>
                            <Button
                                onClick={() => setFilter('mobile')}
                                className="text-gray-700 font-semibold hover:text-red-700 px-4 py-0.5 rounded-lg"
                                style={
                                    filter === 'mobile' ? {
                                        color: '#fff',
                                        backgroundColor: '#B91C1C'
                                    } : {}
                                }
                            >Mobile</Button>
                            <button
                                onClick={() => setFilter('web')}
                                className="text-gray-700 font-semibold hover:text-red-700 px-4 py-0.5 rounded-lg"
                                style={
                                    filter === 'web' ? {
                                        color: '#fff',
                                        backgroundColor: '#B91C1C'
                                    } : {}
                                }
                            >Web</button>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.filter(fp => fp.platform.includes(filter)).map((p, i) => (
                            <ProjectCard key={p.title} {...p} className={`project-item`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}