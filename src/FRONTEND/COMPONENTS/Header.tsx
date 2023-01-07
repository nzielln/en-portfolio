import Link from "next/link"
import Image from "next/image"
import RoundButton from "./RoundButton"
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
    PRT_RESUME_LINK,
    PRT_LAST_INITALS,
    PRT_BACK_HOME,
    PRT_NAME,
    PRT_SMALL_WIDTH,
} from "../../CONSTANTS"
import { HeaderProp } from "../../PROPS AND INTERFACES/Props"
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import { faPlus, faMinus, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import styled from "styled-components"
import Cursor from "./Cursor"

const MENU_ITEMS = [
    {
        title: PRT_HOME_PAGE,
        link: PRT_HOME_PAGE_SECTION,
    },
    {
        title: PRT_ABOUT_PAGE,
        link: PRT_ABOUT_PAGE_SECTION,
    },
    {
        title: PRT_WORK_PAGE,
        link: PRT_WORK_PAGE_SECTION,
    },
    {
        title: PRT_CONTACT_PAGE,
        link: PRT_CONTACT_PAGE_SECTION,
    },
    {
        title: PRT_RESUME_PAGE,
        link: PRT_RESUME_LINK,
    },
]

const Header = ({ showMenuItems, isDefault }: HeaderProp) => {
    const [showMenu, setShowMenu] = useState<boolean>(showMenuItems)
    const [menuIcon, setMenuIcon] = useState<IconProp>(
        isDefault ? faMinus : faPlus)
    const [degrees, setDegrees] = useState<string>("0")
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [mousex, setMouseX] = useState<number>()
    const [mousey, setMouseY] = useState<number>()

    console.log(showMenu)
    useEffect(() => {
        setShowMenu(showMenuItems)
        setMenuIcon(showMenuItems ? faMinus : faPlus)
        setDegrees(degrees === "0" ? "-90" : "0")
        if (typeof window !== "undefined") {
            const currentViewWidth = window.innerWidth

            if (showMenuItems) {
                setShowMobileMenu(
                    currentViewWidth <= PRT_SMALL_WIDTH ? true : false
                )
            }
        }
    }, [showMenuItems])

    const showMenuAndTransition = () => {
        setDegrees(degrees === "0" ? "-90" : "0")
        setShowMenu(!showMenu)
        setMenuIcon(menuIcon === faPlus ? faMinus : faPlus)
    }

    const showMobileMenuHandler = () => {}

    return (
        <div className="prt_header flex items-center justify-between fixed ">
            {isDefault ? (
                <div className="prt_header_logo prt_content_style_b">
                    {PRT_LAST_INITALS}
                </div>
            ) : (
                <div className="prt_header_logo prt_content_style_b">
                    <Link
                        href={"/"}
                        passHref
                        className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
                        <h4 className="prt_normal_style_b prt_uppercase">
                            {PRT_BACK_HOME}
                        </h4>
                    </Link>
                </div>
            )}

            {showMobileMenu ? (
                <div className="prt_header_menu flex items-center">
                    <button
                        aria-label="Menu"
                        onClick={() => showMobileMenuHandler()}>
                        <FontAwesomeIcon
                            icon={menuIcon}
                            className="prt_plus_menu"
                            size="xl"
                            style={{
                                transform: `rotate(${degrees}deg)`,
                            }}
                        />
                    </button>
                </div>
            ) : (
                <div className="prt_header_menu flex items-center">
                    <div
                        className={`prt_menu flex items-center ${
                            showMenu ? "mr-4" : ""
                        }`}
                        style={{
                            opacity: `${
                                showMenu ? "1" : "0"
                            }`,
                        }}>
                        {MENU_ITEMS.map((item) => {
                            return <RoundButton link={item} key={item.title} />
                        })}
                    </div>

                    <button
                        aria-label="Menu"
                        onClick={() => showMenuAndTransition()}>
                        <FontAwesomeIcon
                            icon={menuIcon}
                            className="prt_plus_menu"
                            style={{
                                transform: `rotate(${degrees}deg)`,
                                fontSize: "30px"
                            }}
                        />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header
