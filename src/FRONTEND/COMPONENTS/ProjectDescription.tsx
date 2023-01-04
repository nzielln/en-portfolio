import Link from "next/link"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import { PRT_GITHUB_LINK_TEXT } from "../../CONSTANTS"
import ProjectDetails from "./ProjectDetails"

const ProjectDescription = ({ project }: ProjectProp) => {
    
    return (
        <div className="prt_project_description grid grid-cols-12 md:gap-2 lg:gap-4 xl:gap-6">
            <div className="prt_project_title col-start-2 col-span-3">
                <h4 className="prt_content_style_b prt_uppercase">{project.title }</h4>
                <h4 className="prt_pf_content_i prt_lowercase">{ project.type }</h4>
            </div>

            <div className="prt_project_description_details col-start-5 col-span-7">
                <ProjectDetails project={project}/>
            </div>
        </div>
    )
}

export default ProjectDescription