import ExperienceCard from "@/components/commons/card/experience"
import { experiences } from '@/mock/data'

export default function Experience() {
    return (
        <div id="experience" className="content py-14 px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="py-32 text-center">
                    <h3 className="text-4xl font-bold text-red-700 mb-12 tracking-wider">Experience</h3>
                    <div className="space-y-10">
                        {experiences.map(e => (
                            <ExperienceCard key={e.company} {...e} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}