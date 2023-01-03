import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PRT_WORK_PAGE_SECTION } from "../../../CONSTANTS"
import SingleProject from "../SingleProject"
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { GetStaticProps } from "next"
import { json } from "stream/consumers"
import ProjectCover from "../../COMPONENTS/ProjectCover"

const WorkSection = ({ project }: any) => {
    console.log(project)
    return (
        <div className="prt_work_page h-screen prt_section" id={PRT_WORK_PAGE_SECTION}>

            <div className="prt_work_title grid grid-cols-12">
                <h5 className="prt_pf_content_i prt_lowercase col-start-3 col-span-3">A cou<span>pl</span>e of things <span className="prt_uppercase">I</span>&#39;ve wor<span>k</span>ed on</h5>
                <button type="button" aria-label="More" className="prt_see_more prt_uppercase prt_normal_style col-start-8 col-span-4 flex justify-end items-center">
                    Checkout my more academic projects 
                    <FontAwesomeIcon icon={faArrowRight} className="prt_icon prt_more_icon"/>
                </button>

            </div>

            <div className="prt_project_section grid grid-cols-12 items-end">
                <div className="prt_prev_button prt_button col-start-1 col-span-1 flex justify-center">
                    <button className="prt_navigation_button" aria-label="Prev">
                        <FontAwesomeIcon icon={faChevronLeft} className="prt_icon" />
                    </button>
                </div>

                <ProjectCover project={project}/>

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
