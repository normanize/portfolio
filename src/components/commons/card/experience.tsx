type ExperienceCardProps = {
    company: string
    position: string
    start: string
    end?: string
    is_present: boolean,
    className?: string
}

export default function ExperienceCard({
    company,
    position,
    start,
    end,
    is_present,
    className
}: ExperienceCardProps) {
    return (
        <div className={`border-1 border-red-300 ${className}`}>
            <p className="text-2xl">{company}</p>
            <p className="text-lg text-gray-800">{position}</p>
            <p className="text-sm text-gray-800">
                {start} <span className="mr-1.5">&mdash;</span>
                {is_present
                    ? <span className="text-sm italic">Present</span>
                    : end}
            </p>
        </div>
    )
}