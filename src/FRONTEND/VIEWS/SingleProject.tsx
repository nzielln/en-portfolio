import Link from "next/link"
import Image from "next/image"
import { ProjectProp } from "../../PROPS AND INTERFACES/Props"
import ProjectDetails from "../COMPONENTS/ProjectDetails"
import { PRT_IMAGES_FOLDER } from "../../CONSTANTS"

const SingleProject = ({ project }: ProjectProp) => {
    console.log(project)
    return (
        <div className="prt_single_project flex flex-col items-center">
            <div className="prt_single_project_header flex justify-between">
                <div className="prt_title prt_project_title_style">{project.title}</div>
                <div className="prt_project_navigation">
                </div>
            </div>
            <div className="prt_primary_image">
                <Image
                    src={`/${PRT_IMAGES_FOLDER}/${[project.images.primary]}`}
                    alt=""
                    fill
                    className="prt_image"></Image>

            </div>

            <div className="prt_secondary flex sm:gap-4 md:gap-6 lg:gap-8 md:flex-row flex-col-reverse">
                <div className="prt_secondary_image ">
                    <Image
                        src={`/${PRT_IMAGES_FOLDER}/${[project.images.secondary]}`}
                        alt=""
                        fill
                        className="prt_image"></Image>
                </div>

                <div className="prt_details ">
                    <ProjectDetails project={project} />
                </div>


            </div>

        </div>
    )
}

export default SingleProject