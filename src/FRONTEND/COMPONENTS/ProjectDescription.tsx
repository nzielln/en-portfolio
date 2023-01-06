import Link from "next/link"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import { PRT_GITHUB_LINK_TEXT } from "../../CONSTANTS"
import ProjectDetails from "./ProjectDetails"
import { TypeEnumType } from "../../Helpers"

const ProjectDescription = ({ project }: ProjectProp) => {

    return (
        <>
            <div className="prt_project_description md:grid md:grid-cols-12 md:gap-1 ">
                <div className="prt_project_title md:col-start-3 md:col-span-4 xl:col-start-3 xl:col-span-3">
                    <h4 className="prt_content_style_b prt_uppercase">{project.title}</h4>
                    <h4 className="prt_pf_content_i prt_lowercase md:mb-0 mb-12">{TypeEnumType(project.type)}</h4>
                </div>

                <div className="prt_project_description_details md:col-start-6 md:col-span-6">
                    <ProjectDetails project={project} />
                </div>
            </div>
            <div className="prt_separator md:invisible"></div>

        </>
    )
}

export default ProjectDescription
