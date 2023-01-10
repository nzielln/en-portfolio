import { PRT_GITHUB_LINK_TEXT } from "../../CONSTANTS"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"

const ProjectDetails = ({ project }: ProjectProp, { row }: any) => {

    return (
        <>
            <div className="prt_tools">
                {
                    project.tools.map(tool => {
                        return <h4 key={tool} className="md:prt_content_style prt_normal_style prt_uppercase">{tool}</h4>
                    })
                }
            </div>
            <p className="prt_description md:prt_content_style prt_normal_style prt_uppercase">{project.description}</p>
            <a href={project.link} className="prt_github_link" target="_blank" rel="noreferrer">
                <h4 className="prt_content_style_b prt_uppercase md:mb-0 mb-8">{PRT_GITHUB_LINK_TEXT}</h4>
            </a>
        </>
    )
}

export default ProjectDetails
