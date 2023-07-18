import { useLayoutEffect } from "react"
import ExperienceCard from "@/components/commons/card/experience"
import { experiences } from '@/mock/data'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Experience() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const toBottomTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: "#experience",
                toggleActions: 'play reverse play reset'
            }
        });
        toBottomTL.fromTo('.experience-to-bottom', {
            y: -20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })

        const experienceItem1TL = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: "#experience",
                toggleActions: 'play reverse play reset'
            }
        });
        experienceItem1TL.fromTo('.experience-item-1', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

        const experienceItem3TL = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: "#experience",
                toggleActions: 'play reverse play reset'
            }
        });
        experienceItem3TL.fromTo('.experience-item-3', {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

        const experienceItem0TL = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: "#experience",
                toggleActions: 'play reverse play reset'
            }
        });
        experienceItem0TL.fromTo('.experience-item-0', {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })

        const experienceItem2TL = gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                start: "top center",
                endTrigger: "#experience",
                toggleActions: 'play reverse play reset'
            }
        });
        experienceItem2TL.fromTo('.experience-item-2', {
            x: -20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
    }, [])

    return (
        <div id="experience" className="experience py-14 px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="py-32 text-center">
                    <h3 className="experience-to-bottom text-4xl font-bold text-red-700 mb-12 tracking-wider">Experience</h3>
                    <div className="space-y-10">
                        {experiences.map((e, i) => (
                            <ExperienceCard key={e.company} {...e} className={`experience-item-${i}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}