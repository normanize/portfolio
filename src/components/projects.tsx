import { useState } from 'react'
import ProjectCard from './commons/card/project'
import Button from './commons/button'

import { projects } from '@/mock/data'

export default function Projects() {
    const [filter, setFilter] = useState('all')

    return (
        <div id="projects" className='content p-8'>
            <div className="max-w-screen-xl mx-auto">
                <div className="pb-32">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-20">
                        <h3 className="text-4xl font-bold text-red-700 mb-10 sm:mb-0 tracking-wider">Projects</h3>
                        <div className="flex flex-row space-x-8">
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
                        {projects.filter(fp => fp.platform.includes(filter)).map(p => (
                            <ProjectCard key={p.title} {...p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}