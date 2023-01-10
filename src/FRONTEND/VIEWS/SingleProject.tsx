import Link from "next/link"
import Image from "next/image"
import { ProjectProp, SingleProjectsProp } from "../../PROPS AND INTERFACES/Props"
import ProjectDetails from "../COMPONENTS/ProjectDetails"
import { PRT_IMAGES_FOLDER, PRT_NEXT, PRT_PREV } from "../../CONSTANTS"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { counter } from "../../STATE AND REDUX/ProjectCounterReducer"
import { useState, useEffect } from "react"
import { nextProjectAction, setProjectsAction, prevProjectAction } from "../../STATE AND REDUX/ProjectActions"
import { _useDispatch, _useSelector } from "../../STATE AND REDUX/Store"
import { useRouter } from "next/router"
import Cursor from "../COMPONENTS/Cursor"
import ProjectDetailsType from "../COMPONENTS/ProjectDetailsType"

const SingleProject = ({ project, projects }: SingleProjectsProp) => {
    const dispatch = _useDispatch()
    const projectCounter = _useSelector(counter)
    const [nextProject, setProject] = useState<any>(null)
    const constant = 1
    const router = useRouter()

    useEffect(() => {

        setProject(projects[projectCounter])
        nextProjectAction(dispatch)

    }, [constant])

    const getNextProject = () => {
        const next = nextProject.title.toLowerCase()
        setProject(projects[projectCounter])
        nextProjectAction(dispatch)
        

        if (projectCounter === projects.length - 1) {

            setProjectsAction(dispatch, 0)
        }
        router.push(`/projects/${next}`)

    }

    const getPrevProject = () => {
        const next = nextProject.title.toLowerCase()
        setProject(projects[projectCounter])
        prevProjectAction(dispatch)

        if (projectCounter == 0) {
            setProjectsAction(dispatch, projects.length - 1)

        }
        
        router.push(`/projects/${next}`)

    }

    return (
        <div className="prt_single_project flex flex-col items-center sm:gap-4 gap-2">
            <div className="prt_single_project_header flex flex-col sm:gap-4 gap-2 mb-8">
                <div className="prt_title prt_project_title_style sm:mb-8 mb-4">
                    {project.title}
                </div>
                <div className="prt_details ">
                    <ProjectDetailsType project={project} />
                </div>
            </div>
            <div className="prt_primary_image">
                <Image
                    src={`/${PRT_IMAGES_FOLDER}/${[project.images.primary]}`}
                    alt=""
                    fill
                    priority={true}
                    className="prt_image"></Image>
            </div>

            <div className="prt_secondary flex md:flex-row flex-col sm:gap-4 gap-2">
                <div className="prt_secondary_image prt_small">
                    <Image
                        src={`/${PRT_IMAGES_FOLDER}/${[
                            project.images.secondary,
                        ]}`}
                        alt=""
                        fill
                        priority={true}
                        className="prt_image"></Image>
                </div>
                <div className="prt_secondary_image prt_large">
                    <Image
                        src={`/${PRT_IMAGES_FOLDER}/${[project.images.cover]}`}
                        alt=""
                        fill
                        priority={true}
                        className="prt_image"></Image>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
