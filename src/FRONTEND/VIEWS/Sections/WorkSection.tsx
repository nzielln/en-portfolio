import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PRT_MORE_PROJECTS_LINK, PRT_PROJECTS_LINK, PRT_WORK_PAGE_SECTION } from "../../../CONSTANTS"
import SingleProject from "../SingleProject"
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { GetStaticProps } from "next"
import { json } from "stream/consumers"
import ProjectCover from "../../COMPONENTS/ProjectCover"
import { useSelector, useDispatch } from "react-redux"
import { ProjectsProp } from "../../../PROPS AND INTERFACES/Props"
import { useEffect, useState } from "react"
import { nextProjectAction, prevProjectAction, resetProjectsAction, setProjectsAction } from "../../../STATE AND REDUX/ProjectActions"

const WorkSection = ({ projects }: ProjectsProp) => {

    const dispatch = useDispatch()
    const projectCounter = useSelector((state: any) => state.projectCounter.value)
    const [project, setProject] = useState<any>(null)
    const constant = 1

    useEffect(() => {
        console.log("UPDATING!!")

        setProject(projects[projectCounter])
            nextProjectAction(dispatch)
        
    }, [constant])


    const getNextProject = () => {
        console.log("CURRENT COUNTER: " + projectCounter + "ITEMS: " + projects.length)
        console.log("GETTING NEXT")

        if (projectCounter === projects.length - 1) {
            console.log("NEXT LIMIT REACHED! RESETTING")
            resetProjectsAction(dispatch).then(() => {
                console.log(projectCounter)
                setProject(projects[projectCounter])
                nextProjectAction(dispatch)
            })
        } else {
            setProject(projects[projectCounter])
            nextProjectAction(dispatch)
        }
        
        
    }

    const getPrevProject = () => {
        console.log("CURRENT COUNTER: " + projectCounter + " ITEMS: " + projects.length)
        console.log("GET PREV")

        if (projectCounter === 0) {
            console.log("PREV LIMIT REACHED! RESETTING")
            setProjectsAction(dispatch, projects.length - 1)
            setProject(projects[projectCounter])
        }

        setProject(projects[projectCounter])
        prevProjectAction(dispatch)
    }


    return (
        <div className="prt_work_page h-screen prt_section flex flex-col justify-center" id={PRT_WORK_PAGE_SECTION}>

            <div className="prt_work_title grid lg:grid-cols-6 md:gap-1 lg:gap-2 xl:gap-3">
                <h5 className="prt_pf_content_i prt_lowercase col-start-2 col-span-3">A cou<span className="prt_pf_content">pl</span>e of things <span className="prt_pf_content prt_uppercase">I</span>&#39;ve wor<span className="prt_pf_content">k</span>ed on</h5>
            </div>

            <div className="prt_project_section grid grid-cols-12 items-end">
                <Link href={PRT_MORE_PROJECTS_LINK} className="prt_see_more prt_uppercase prt_normal_style col-start-3 col-span-8 md:col-start- md:col-span-6 lg:col-start-6 lg:col-span-5 xl:col-start-7 xl:col-span-4 flex justify-end items-center" passHref>
                    Checkout my more academic projects
                    <FontAwesomeIcon icon={faArrowRight} className="prt_icon prt_more_icon" />
                </Link>
                <div className="prt_prev_button prt_button col-start-1 col-span-1 flex justify-center">
                    <button className="prt_navigation_button" aria-label="Prev"
                        onClick={() => getPrevProject()}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="prt_icon" />
                    </button>
                </div>

                <div className="prt_project_detail_section col-start-2 col-span-10">
                    {project ?
                        <>
                            <Link href={`${PRT_PROJECTS_LINK}/${project.title.toLowerCase()}`} passHref>
                                <ProjectCover project={project} />
                            </Link>
                            <div className="prt_project_details flex justify-between">
                                <h4 className="prt_project_title_small prt_content_style_b prt_uppercase">{project.title} </h4>
                                <h4 className="prt_project_type prt_content_style prt_uppercase">{project.type}</h4>
                            </div></>
                        : null}
                </div>

                <div className="prt_next_button prt_button col-start-12 col-span-1 flex justify-center" >
                    <button className="prt_navigation_button" aria-label="Next"
                        onClick={() => getNextProject()}
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="prt_icon" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default WorkSection
