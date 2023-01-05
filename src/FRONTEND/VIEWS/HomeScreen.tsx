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
import ContactSection from "./Sections/ContactSection";
import { AnyProjectsProp, ShowLogoAction } from "../../PROPS AND INTERFACES/Props";

const HomeScreen = ({ projects, showLogo }: AnyProjectsProp) => {

    return (
        <div className="prt_homescreen">
            <div className="prt_homescreen_content">
                <TitleSection showLogo={showLogo}/>
                <div className="prt_section_divider"></div>
                <AboutSection />
                <div className="prt_section_divider"></div>

                <WorkSection project={projects[0]} />
                <div className="prt_section_divider"></div>

                <ContactSection />

            </div>


        </div>
    )

}


export default HomeScreen