import { PRT_DESCRIPTION, PRT_GITHUB_LINK_TEXT, PRT_TYPE } from "../../CONSTANTS"
import { TypeEnumType } from "../../Helpers"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"

const ProjectDetailsType = ({ project }: ProjectProp, { row }: any) => {

    return (
        <>
            <div className="prt_tools prt_uppercase prt_line_height">
                <h4 className="prt_normal_style_b mb-2">{PRT_TYPE} </h4>
                <h4 className="prt_normal_style ">
                    {TypeEnumType(project.type)}
                </h4>
            </div>
            <p className="prt_description prt_uppercase prt_line_height">
                <h4 className="prt_normal_style_b mb-2">{PRT_DESCRIPTION} </h4>
                <h4 className="prt_normal_style">{project.description}</h4>
            </p>
            <a
                href={project.link}
                className="prt_github_link"
                target="_blank"
                rel="noreferrer">
                <h4 className="prt_normal_style_b prt_uppercase">
                    {PRT_GITHUB_LINK_TEXT}
                </h4>
            </a>
        </>
    )
}

export default ProjectDetailsType
