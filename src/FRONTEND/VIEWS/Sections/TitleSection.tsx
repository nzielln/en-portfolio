import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    PRT_HOME_ROLE_ENGINEER,
    PRT_HOME_ROLE_DESIGNER,
    PRT_LOCATION,
    PRT_YEAR,
    PRT_HOME_DESCRIPTION_TOP,
    PRT_HOME_DESCRIPTION_BOTTOM,
    PRT_SCROLL_THRESHHOLD,
    PRT_SCROLL_MENU_THRESHHOLD,
    PRT_OUTLINE_CURSOR_ANIMATION,
} from "../../../CONSTANTS"
import { ShowMenuProp } from "../../../PROPS AND INTERFACES/Props"
import { useRef } from "react"

const TitleSection = ({ showMenuAction }: ShowMenuProp) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (typeof window !== "undefined") {
        let scrollButton = document.querySelector(
            ".prt_scroll_button"
        ) as HTMLElement

        if (scrollButton) {
            scrollButton!.style.opacity = "0"
        }

        const showTopButton = () => {
            if (
                document.body.scrollTop > PRT_SCROLL_THRESHHOLD() ||
                document.documentElement.scrollTop > PRT_SCROLL_THRESHHOLD()
            ) {
                if (scrollButton) {
                    scrollButton!.style.opacity = "1"
                }
            } else {
                if (scrollButton) {
                    scrollButton!.style.opacity = "0"
                }
            }
        }

        showTopButton()

        window.onscroll = () => {
            showTopButton()

            if (
                document.body.scrollTop > PRT_SCROLL_MENU_THRESHHOLD() ||
                document.documentElement.scrollTop >
                    PRT_SCROLL_MENU_THRESHHOLD()
            ) {
                showMenuAction(false)
            } else {
                showMenuAction(true)
            }
        }
    }

    return (
        <div className="prt_home_page prt_section grid md:grid-rows-4 grid-rows-3 md:gap-1 lg:gap-2 xl:gap-3 h-screen md:flex-row md:content-start md:items-stretch flex-col justify-center ">
            <div className="prt_home_page_row_role grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3 row-span-1 md:items-end items-center">
                <div className="prt_role_description_col md:col-start-5 md:col-span-4 lg:col-start-7 lg:col-span-4 xl:col-start-9 xl:col-span-4 flex flex-col justify-between">
                    <div
                        className="prt_role prt_uppercase flex items-start flex-col"
                        id={`${PRT_OUTLINE_CURSOR_ANIMATION}`}>
                        <h3 className="prt_content_style">
                            {PRT_HOME_ROLE_ENGINEER}
                        </h3>
                        <h3 className="prt_content_style_i">
                            {PRT_HOME_ROLE_DESIGNER}
                        </h3>
                    </div>
                </div>
            </div>
            
            <div
                className="prt_home_page_row_title grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3 md:row-span-2 md:items-center items-start"
                id="prt_title">
                <div className="prt_name_col md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-6 xl:col-start-3 xl:col-span-6">
                    <h1 className="prt_title_name prt_pf_title_i">
                        e<span className="prt_pf_title">ll</span>ah <br /> nz
                        <span className="prt_pf_title">ik</span>oba
                    </h1>
                </div>
            </div>
            <div className="prt_home_page_row_desc">
                <div className="prt_location_desc_col md:grid md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 md:gap-1 lg:gap-2 xl:gap-3 md:justify-between h-2/4 flex flex-col-reverse justify-end">
                    <div className="prt_location col-start-1 col-span-1 md:pt-0 pt-4 md:text-left text-right">
                        <h4 className="prt_normal_style prt_uppercase prt_yl_top">
                            {PRT_LOCATION}
                        </h4>
                        <h4 className="prt_normal_style_i prt_uppercase">
                            {PRT_YEAR}
                        </h4>
                    </div>

                    <div className="prt_desc prt_uppercase md:col-start-5 md:col-span-4 lg:col-start-6 lg:col-span-4 xl:col-start-9 xl:col-span-4 flex md:items-end items-end flex-col ">
                        <h3 className="prt_content_style">
                            {PRT_HOME_DESCRIPTION_TOP}
                        </h3>
                        <h3 className="prt_content_style_i">
                            {PRT_HOME_DESCRIPTION_BOTTOM}
                        </h3>
                    </div>
                </div>
                <div
                    className="prt_back_to_top fixed bottom-2 right-4 flex justify-centerm items-center prt_scroll_button"
                    id={`${PRT_OUTLINE_CURSOR_ANIMATION}`}>
                    <button
                        onClick={() => scrollToTop()}
                        aria-label="Back To Top"
                        className="flex flex-col items-center justify-center">
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="prt_icon"
                            size="sm"
                        />
                        <h5 className="prt_label prt_normal_style_xs prt_uppercase">
                            Top
                        </h5>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TitleSection
