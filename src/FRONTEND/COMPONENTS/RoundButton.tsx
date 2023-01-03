import Link from "next/link";
import Image from "next/image";
import { PRT_HOME_PAGE } from "../../CONSTANTS";
import { ButtonProp } from "../../PROPS AND INTERFACES/Props";

const RoundButton = ({ link}: ButtonProp) => {
    
    return (
        <div className="prt_round_button">
            <Link href={`#${link.link}`} className="prt_menu_link prt_normal_style prt_uppercase" scroll={link.title === PRT_HOME_PAGE ? true : false}>
                {link.title}
            </Link>

        </div>
    )

}

export default RoundButton