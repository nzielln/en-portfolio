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

            <div className="prt_secondary grid grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3">
                <div className="prt_secondary_image col-start-1 col-span-7">
                    <Image
                        src={`/${PRT_IMAGES_FOLDER}/${[project.images.secondary]}`}
                        alt=""
                        fill
                        className="prt_image"></Image>
                </div>

                <div className="col-span-5">
                    <ProjectDetails project={project} />
                </div>


            </div>

        </div>
    )
}

export default SingleProject