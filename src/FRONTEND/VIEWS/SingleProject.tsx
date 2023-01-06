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
        <div className="prt_single_project flex flex-col items-center">
            <div className="prt_single_project_header flex justify-between items-center">
                <div className="prt_title prt_project_title_style">{project.title}</div>
                <div className="prt_project_navigation flex items-center justify-end gap-2">
                    <button
                        aria-label="Prev"
                        className="prt_prev flex items-center justify-center"
                        onClick={() => getPrevProject()}>
                        <FontAwesomeIcon icon={faChevronLeft} className="prt_icon" size="sm" />
                        <h4 className="prt_normal_style prt_uppercase">{PRT_PREV}</h4>
                    </button>
                    <button aria-label="Next"
                        className="prt_next flex items-center justify-center"
                        onClick={() => getNextProject()}>
                        <h4 className="prt_normal_style prt_uppercase">{PRT_NEXT}</h4>
                        <FontAwesomeIcon icon={faChevronRight} className="prt_icon"  size="sm"/>
                    </button>
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
