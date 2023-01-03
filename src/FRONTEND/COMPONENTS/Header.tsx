import Link from "next/link";
import Image from "next/image";
import RoundButton from "./RoundButton";
import {
    PRT_HOME_PAGE,
    PRT_CONTACT_PAGE,
    PRT_WORK_PAGE,
    PRT_RESUME_PAGE
} from "../../CONSTANTS";

const MENU_ITEMS = [
    {
        "title": PRT_HOME_PAGE,
        "link": "/"
    },
    {
        "title": PRT_WORK_PAGE,
        "link": "/work"
    },
    {
        "title": PRT_CONTACT_PAGE,
        "link": "/contact"
    },
    {
        "title": PRT_RESUME_PAGE,
        "link": "/resume"
    },
]

const Header = () => {

    return (
        <div className="prt_header flex items-center">

            <div className="prt_header_logo"></div>
            <div className="prt_header_menu flex items-center">
                {
                    MENU_ITEMS.map(item => {
                        return <RoundButton link={item} key={item.title} />
                    })
                }
            </div>
            <div className="prt_header_menu_expand"></div>

        </div>
    )

}

export default Header