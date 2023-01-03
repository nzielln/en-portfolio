import Link from "next/link";
import Header from "../COMPONENTS/Header";
import {
    PRT_HOME_PAGE_SECTION,
    PRT_WORK_PAGE_SECTION,
    PRT_ABOUT_PAGE_SECTION,
    PRT_CONTACT_PAGE_SECTION,
    PRT_LOCATION,
    PRT_YEAR,
    PRT_HOME_ROLE_ENGINEER,
    PRT_HOME_ROLE_DESIGNER,
    PRT_HOME_DESCRIPTION_TOP,
    PRT_HOME_DESCRIPTION_BOTTOM
} from "../../CONSTANTS";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import AboutSection from "./Sections/AboutSection";
import TitleSection from "./Sections/TitleSection";
import WorkSection from "./Sections/WorkSection";

const HomeScreen = ({projects}: any) => {
    console.log(projects)
    return (
        <div className="prt_homescreen" id={PRT_HOME_PAGE_SECTION}>
            <Header />

            <div className="prt_homescreen_content">
                <TitleSection/>
                <AboutSection/>
                <WorkSection project={projects[0]} />

                <div className="prt_contact_page h-screen prt_section" id={PRT_CONTACT_PAGE_SECTION}>
                    <h1>CONTACT</h1>
                </div>

            </div>


        </div>
    )

}


export default HomeScreen