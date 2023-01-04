import Link from "next/link"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import { PRT_GITHUB_LINK_TEXT } from "../../CONSTANTS"

const ProjectDescription = ({project}: ProjectProp) => {

    console.log(project)
    return (
        <div className="prt_project_description grid grid-cols-12">
            <div className="prt_project_title col-start-2 col-span-3">
                <h4 className="prt_content_style_b">{project.title }</h4>
                <h4 className="prt_pf_content">{ project.type }</h4>
            </div>

            <div className="prt_project_description_details col-start-5 col-span-7">
                <div className="prt_tools">
                    {
                        project.tools.map(tool => {
                            return <h4 key="" className="">{tool}</h4>
                        })
                    }
                </div>
                <p className="prt_description">{project.description}</p>
                <a href={project.link}>
                    <h4>{PRT_GITHUB_LINK_TEXT}</h4>
                </a>


            </div>
        </div>
    )
}

export default ProjectDescription