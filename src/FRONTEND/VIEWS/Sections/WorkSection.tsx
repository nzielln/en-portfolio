import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    PRT_MORE_PROJECTS_LINK,
    PRT_PROJECTS_LINK,
    PRT_WORK_PAGE_SECTION,
} from "../../../CONSTANTS"
import SingleProject from "../SingleProject"
import {
    faChevronLeft,
    faChevronRight,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { GetStaticProps } from "next"
import { json } from "stream/consumers"
import ProjectCover from "../../COMPONENTS/ProjectCover"
import { useSelector, useDispatch } from "react-redux"
import { ProjectsProp } from "../../../PROPS AND INTERFACES/Props"
import { useEffect, useState } from "react"
import {
    nextProjectAction,
    prevProjectAction,
    resetProjectsAction,
    setProjectsAction,
} from "../../../STATE AND REDUX/ProjectActions"
import { _useDispatch, _useSelector } from "../../../STATE AND REDUX/Store"
import { counter } from "../../../STATE AND REDUX/ProjectCounterReducer"
import { TypeEnumType } from "../../../Helpers"
import ProjectView from "../../COMPONENTS/ProjectView"

const WorkSection = ({ projects }: ProjectsProp) => {
    const dispatch = _useDispatch()
    const projectCounter = _useSelector(counter)
    const [project, setProject] = useState<any>(null)
    const constant = 1

    useEffect(() => {
        setProject(projects[projectCounter])
        nextProjectAction(dispatch)
    }, [constant])

    const getNextProject = () => {
        setProject(projects[projectCounter])
        nextProjectAction(dispatch)

        if (projectCounter === projects.length - 1) {
            setProjectsAction(dispatch, 0)
        }
    }

    const getPrevProject = () => {
        setProject(projects[projectCounter])
        prevProjectAction(dispatch)

        if (projectCounter == 0) {
            setProjectsAction(dispatch, projects.length - 1)
        }
    }

    return (
        <div
            className="prt_work_page prt_section flex flex-col justify-center items-center"
            id={PRT_WORK_PAGE_SECTION}>
            <div className="prt_work_title grid lg:grid-cols-6 lg:gap-4 sm:text-left text-center">
                <h5 className="prt_pf_content_i prt_lowercase col-start-2 col-span-3">
                    A cou<span className="prt_pf_content">pl</span>e of things{" "}
                    <span className="prt_pf_content prt_uppercase">I</span>
                    &#39;ve wor<span className="prt_pf_content">k</span>ed on
                </h5>
            </div>
            <Link
                href={PRT_MORE_PROJECTS_LINK}
                className="prt_see_more prt_uppercase prt_normal_style flex justify-end items-center pb-4"
                passHref>
                Checkout my more academic projects
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="prt_icon prt_more_icon"
                />
            </Link>
            <div className="prt_project_section">
                {projects.map((project) => {
                    return (
                        <Link
                            href={`${PRT_PROJECTS_LINK}/${project.title.toLowerCase()}`}
                            passHref
                            key={project.id}>
                            <ProjectView project={project} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkSection
