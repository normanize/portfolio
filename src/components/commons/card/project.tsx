interface IAttributes {
    customClass: string,
    width: number,
    height: number,
}

type ProjectCardProps = {
    title: string
    image_url: string
    link: string
    attributes: IAttributes
    platform: string[]
}

export default function ProjectCard({
    title,
    image_url,
    link,
    attributes,
    platform
}: ProjectCardProps) {

    const navigate = () => {
        window.open(link)
    }

    return (
        <div
            className={`flex items-center justify-center h-60 hover:scale-105 ease-in duration-500 
            overflow-hidden border shadow-sm hover:shadow-lg rounded-lg p-4 cursor-pointer ${attributes.customClass}`}
            onClick={navigate}
        >
                <img src={image_url} width={attributes.width} height={attributes.height} />
        </div>
    )
}