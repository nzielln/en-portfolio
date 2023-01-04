import Link from "next/link";
import Image from "next/image";
import { PRT_HOME_PAGE, PRT_RESUME_PAGE } from "../../CONSTANTS";
import { ButtonProp } from "../../PROPS AND INTERFACES/Props";

const RoundButton = ({ link}: ButtonProp) => {
    
    return (
        <div className="prt_round_button flex items-center justify-center">
            <Link
                href={link.title === PRT_RESUME_PAGE ? link.link : `#${link.link}`}
                className="prt_menu_link prt_normal_style prt_uppercase"
                scroll={link.title === PRT_HOME_PAGE ? true : false}
                target={link.title === PRT_RESUME_PAGE ? "_blank" : ""}>
                {link.title}
            </Link>

        </div>
    )

}

export default RoundButton