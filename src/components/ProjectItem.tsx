import { useLayoutEffect } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type ProjectItemType = {
    title: string;
    image_url: string;
    url: string;
    attributes: {
        customClass: string;
        width: number;
        height: number;
    };
}

const ProjectItem: React.FC<ProjectItemType> = ({ title, image_url, url, attributes }) => {

    const { width, height, customClass } = attributes;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // project item animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects',
                start: 'top center',
                endTrigger: '#projects',
                toggleActions: 'play reverse play reset',
            }
        });
        tl.from('.project-item', {
            opacity: 0
        }).to('.project-item', {
            opacity: 1,
            delay: 0.5,
            duration: 1,
        })
    }, [])

    return (
        <div className={`project-item w-72 h-48 hover:scale-105 ease-in duration-500 flex items-center justify-center overflow-hidden border shadow-sm hover:shadow-lg rounded-lg p-4 ${customClass}`}>
            <img src={image_url} {...{ width, height }} />
        </div>
    );
};

export default ProjectItem;