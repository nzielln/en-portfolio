import Link from "next/link"
import Header from "../COMPONENTS/Header"
import { ProjectsProp } from "../../PROPS AND INTERFACES/Props"
import ProjectDescription from "../COMPONENTS/ProjectDescription"

const Projects = ({ projects }: ProjectsProp) => {

    return (
        <div className="prt_more_projects grid grid-rows-6 flex-col pb-24">

            <div className="md:grid md:grid-cols-12 md:gap-1 row-span-1">
                <h4 className="prt_more_projects_title prt_pf_content_i md:col-start-2 md:col-span-4 ">o<span className="prt_pf_content">th</span>er <span className="prt_pf_content">pr</span>o<span className="prt_pf_content">j</span>ects <span className="prt_pf_content prt_uppercase" >I</span>&#39;ve wo<span className="prt_pf_content">rk</span>ed on</h4>
            </div>
            <div className="prt_more_projects_content row-span-5">
                {
                    projects.map(project => {
                        return <ProjectDescription project={project} key="" />
                    })
                }
            </div>


        </div>
    )

}

export default Projects