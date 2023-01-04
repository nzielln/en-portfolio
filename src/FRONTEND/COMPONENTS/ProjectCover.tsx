import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import Image from "next/image"

const ProjectCover = ({project}: ProjectProp) => {

    return (
        <div className="prt_project_cover col-start-2 col-span-10">
            <Image
                src={`/IMAGES/${[project.images.cover]}`}
                alt=""
                fill
                className="pro_project_cover_image"></Image>
        </div>

    )
}

export default ProjectCover