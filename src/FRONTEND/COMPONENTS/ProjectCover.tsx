import { useEffect } from "react"
import { PRT_IMAGES_FOLDER } from "../../CONSTANTS"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import Image from "next/image"

const ProjectCover = ({ project }: ProjectProp) => {
    
    useEffect(() => {

    }, [project])

    return (
        <div className="prt_project_cover col-start-2 col-span-10">
            <Image
                src={`/${PRT_IMAGES_FOLDER}/${[project.images.cover]}`}
                alt=""
                fill
                priority={true}
                className="prt_project_cover_image"></Image>
        </div>
    )
}

export default ProjectCover
