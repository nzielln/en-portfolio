import Link from "next/link";
import Image from "next/image";
import { PRT_HOME_PAGE } from "../../CONSTANTS";
import { ButtonProp } from "../../PROPS AND INTERFACES/Props";

const RoundButton = ({ link}: ButtonProp) => {
    
    return (
        <div className="prt_round_button">
            <Link href={link.link.toLowerCase()} className="prt_menu_link">
                {link.title.toUpperCase()}
            </Link>

        </div>
    )

}

export default RoundButton