import Link from "next/link";
import Image from "next/image";
import RoundButton from "./RoundButton";
import {
    PRT_HOME_PAGE,
    PRT_CONTACT_PAGE,
    PRT_WORK_PAGE,
    PRT_RESUME_PAGE,
    PRT_ABOUT_PAGE,
    PRT_HOME_PAGE_SECTION,
    PRT_WORK_PAGE_SECTION,
    PRT_ABOUT_PAGE_SECTION,
    PRT_CONTACT_PAGE_SECTION,
} from "../../CONSTANTS";

const MENU_ITEMS = [
    {
        "title": PRT_HOME_PAGE,
        "link": PRT_HOME_PAGE_SECTION
    },
    {
        "title": PRT_ABOUT_PAGE,
        "link": PRT_ABOUT_PAGE_SECTION
    },
    {
        "title": PRT_WORK_PAGE,
        "link": PRT_WORK_PAGE_SECTION
    },
    {
        "title": PRT_CONTACT_PAGE,
        "link": PRT_CONTACT_PAGE_SECTION
    },
    {
        "title": PRT_RESUME_PAGE,
        "link": "/resume"
    },
]

const Header = () => {

    return (
        <div className="prt_header flex items-center justify-between">

            <div className="prt_header_logo"></div>
            <div className="prt_header_menu flex items-center">
                {
                    MENU_ITEMS.map(item => {
                        return <RoundButton link={item} key={item.title} />
                    })
                }
            </div>
        </div>
    )

}

export default Header