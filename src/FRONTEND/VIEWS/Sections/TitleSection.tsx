import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    PRT_HOME_ROLE_ENGINEER,
    PRT_HOME_ROLE_DESIGNER,
    PRT_LOCATION, PRT_YEAR,
    PRT_HOME_DESCRIPTION_TOP,
    PRT_HOME_DESCRIPTION_BOTTOM
} from "../../../CONSTANTS"


const TitleSection = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="prt_home_page prt_section grid grid-rows-3 md:gap-2 lg:gap-4 xl:gap-6 h-screen">
            <div className="prt_home_page_row_title grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-2 lg:gap-4 xl:gap-6 row-span-2">
                <div className="prt_name_col md:col-start-1 md:col-span-5 lg:col-start-3 lg:col-span-6 xl:col-start-3 xl:col-span-6 flex items-center">
                    <h1 className="prt_title_name prt_pf_title_i">e<span className="prt_pf_title">ll</span>ah <br /> nz<span className="prt_pf_title">ik</span>oba</h1>
                </div>
                <div className="prt_role_description_col md:col-start-1 md:col-span-5 lg:col-start-3 lg:col-span-6 xl:col-start-9 xl:col-span-4 flex flex-col justify-between">
                    <div className="prt_role prt_uppercase flex items-start flex-col">
                        <h3 className="prt_content_style">{PRT_HOME_ROLE_ENGINEER}</h3>
                        <h3 className="prt_content_style_i">{PRT_HOME_ROLE_DESIGNER}</h3>
                    </div>

                </div>
            </div>
            <div className="prt_home_page_row_desc">
                <div className="prt_location_desc_col grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-2 lg:gap-4 xl:gap-6 justify-between h-2/4">
                    <div className="prt_location col-span-1">
                        <h4 className="prt_normal_style prt_uppercase prt_yl_top">{PRT_LOCATION}</h4>
                        <h4 className="prt_normal_style_i prt_uppercase">{PRT_YEAR}</h4>
                    </div>

                    <div className="prt_desc prt_uppercase md:col-start-1 md:col-span-5 lg:col-start-3 lg:col-span-6 xl:col-start-9 xl:col-span-4 flex items-end flex-col ">
                        <h3 className="prt_content_style">{PRT_HOME_DESCRIPTION_TOP}</h3>
                        <h3 className="prt_content_style_i">{PRT_HOME_DESCRIPTION_BOTTOM}</h3>
                    </div>
                </div>
                <div className="prt_back_to_top fixed right-12">
                    <button
                        onClick={() => scrollToTop()}
                        aria-label="Back To Top"
                    >
                        <FontAwesomeIcon icon={faArrowUp} className="prt_icon" />
                        <h5 className="prt_label prt_normal_style prt_uppercase">Back To Top</h5>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TitleSection