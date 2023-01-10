import Image from "next/image"
import { PRT_IMAGES_FOLDER } from "../../CONSTANTS"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import { TypeEnumType } from "../../Helpers"

const ProjectView = ({ project }: ProjectProp) => {
    return (
        <div className="prt_project_view flex flex-col md:mb-12 mb-6">
            <div className="prt_project_view_top flex ">
                <Image
                    src={`/${PRT_IMAGES_FOLDER}/${[project.images.cover]}`}
                    alt=""
                    fill
                    priority={true}
                    className="prt_project_view_image"></Image>
            </div>
            <div className="prt_project_view_details flex justify-between md:pt-2 pt-1">
                <h4 className="prt_project_title_small md:prt_content_style_b prt_normal_style_b prt_uppercase">
                    {project.title}{" "}
                </h4>
                <h4 className="prt_project_type md:prt_content_style_b prt_normal_style prt_uppercase">
                    {TypeEnumType(project.type)}
                </h4>
            </div>
        </div>
    )
}

export default ProjectView
