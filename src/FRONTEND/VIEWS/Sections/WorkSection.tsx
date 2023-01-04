import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PRT_MORE_PROJECTS_LINK, PRT_WORK_PAGE_SECTION } from "../../../CONSTANTS"
import SingleProject from "../SingleProject"
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { GetStaticProps } from "next"
import { json } from "stream/consumers"
import ProjectCover from "../../COMPONENTS/ProjectCover"

const WorkSection = ({ project }: any) => {
    console.log(project)
    return (
        <div className="prt_work_page h-screen prt_section flex flex-col justify-center" id={PRT_WORK_PAGE_SECTION}>

            <div className="prt_work_title grid grid-cols-12">
                <h5 className="prt_pf_content_i prt_lowercase col-start-3 col-span-3">A cou<span className="prt_pf_content">pl</span>e of things <span className="prt_pf_content prt_uppercase">I</span>&#39;ve wor<span className="prt_pf_content">k</span>ed on</h5>
            </div>

            

            <div className="prt_project_section grid grid-cols-12 items-end">
                <Link href={PRT_MORE_PROJECTS_LINK} className="prt_see_more prt_uppercase prt_normal_style col-start-7 col-span-4 flex justify-end items-center" passHref>
                    Checkout my more academic projects
                    <FontAwesomeIcon icon={faArrowRight} className="prt_icon prt_more_icon" />
                </Link>
                <div className="prt_prev_button prt_button col-start-1 col-span-1 flex justify-center">
                    <button className="prt_navigation_button" aria-label="Prev">
                        <FontAwesomeIcon icon={faChevronLeft} className="prt_icon" />
                    </button>
                </div>

                <div className="prt_project_detail_section col-start-2 col-span-10">
                    <ProjectCover project={project} />
                    <div className="prt_project_details flex justify-between">
                        <h4 className="prt_project_title_small prt_content_style_b prt_uppercase">{ project.title} </h4>
                        <h4 className="prt_project_type prt_content_style prt_uppercase">{project.type}</h4>
                    </div>
                </div>

                <div className="prt_next_button prt_button col-start-12 col-span-1 flex justify-center" >
                    <button className="prt_navigation_button" aria-label="Next">
                        <FontAwesomeIcon icon={faChevronRight} className="prt_icon" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default WorkSection
