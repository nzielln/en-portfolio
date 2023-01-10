import Link from "next/link"
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
    PRT_MAIN_COLOR,
    PRT_DARK_COLOR,
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
import {
    animated,
    useSpring,
    config,
    useTrail,
    useTransition,
    a,
} from "@react-spring/web"
import styles from "./styles.module.css"
import { useRouter } from "next/router"

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
    const [degrees, setDegrees] = useState<number>(0)
    const [showMobileMenu, setShowMobileMenu] = useState<boolean | undefined>()
    const [mousex, setMouseX] = useState<number>()
    const [mousey, setMouseY] = useState<number>()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [color, setColor] = useState(PRT_MAIN_COLOR)
    const route = useRouter()
    const [menuIcon, setMenuIcon] = useState<IconProp>(isDefault ? faMinus : faPlus)

    useEffect(() => {
        setShowMenu(showMenuItems)
        setMenuIcon(showMenuItems ? faMinus : faPlus)
        if (typeof window !== "undefined") {
            const currentViewWidth = window.innerWidth
            setWindowWidth(currentViewWidth)

            if (showMenuItems) {
                setShowMobileMenu(
                    currentViewWidth <= PRT_SMALL_WIDTH ? true : false
                )
            }

            if (currentViewWidth <= PRT_SMALL_WIDTH) {
                setMenuIcon(
                    currentViewWidth <= PRT_SMALL_WIDTH ? faPlus : menuIcon
                )
                setDegrees(currentViewWidth <= PRT_SMALL_WIDTH ? -90 : degrees)
            }

        }
    }, [showMenuItems])

    const showMenuAndTransition = () => {
        setDegrees(degrees === 0 ? -90 : 0)
        setShowMenu(!showMenu)
        setMenuIcon(menuIcon === faPlus ? faMinus : faPlus)
    }

    const labelTrail = useTrail(MENU_ITEMS.length, {
        config: { mass: 15, tension: 1000, friction: 100 },
        opacity: mobileMenuOpen ? 1 : 0,
        x: mobileMenuOpen ? 0 : -100,
        width: mobileMenuOpen ? windowWidth : 0,
        from: { opacity: 0, x: -100, width: 0 },
        delay: 300,
    })

    const spring = useSpring({
        config: {
            mass: 5,
            friction: 20,
            tension: 50,
        },
        from: {
            opacity: 0,

            width: 0,
        },
        to: {
            opacity: mobileMenuOpen ? 1 : 0,

            width: mobileMenuOpen ? windowWidth : 0,
        },
    })

    const showMobileMenuHandler = () => {
        setDegrees(degrees === 0 ? -90 : 0)
        setMobileMenuOpen(!mobileMenuOpen)
        setMenuIcon(!mobileMenuOpen ? faMinus : faPlus)
        setColor(color === PRT_DARK_COLOR ? PRT_MAIN_COLOR : PRT_DARK_COLOR)
    }

    return (
        <>
            <animated.div
                className="prt_mobile_menu h-screen"
                style={{ ...spring }}>
                {labelTrail.map(({ width, ...style }, index) => (
                    <a.div
                        key={index}
                        className="prt_mobile_menu_link prt_overlay_menu prt_uppercase"
                        style={style}
                        onClick={() => {
                            route.push(`#${MENU_ITEMS[index].link}`)
                            setDegrees(degrees === 0 ? -90 : 0)
                            setMobileMenuOpen(!mobileMenuOpen)
                            setMenuIcon(!mobileMenuOpen ? faMinus : faPlus)
                            setColor(
                                color === PRT_DARK_COLOR
                                    ? PRT_MAIN_COLOR
                                    : PRT_DARK_COLOR
                            )
                        }}>
                        <a.div style={{ width }}>
                            {MENU_ITEMS[index].title}
                        </a.div>
                    </a.div>
                ))}
            </animated.div>
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
                    <div
                        className={`prt_header_menu sm:flex items-center ${
                            isDefault ? "flex" : "hidden"
                        }`}>
                        <button
                            className="prt_plus_sign"
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
                    <div
                        className={`prt_header_menu sm:flex items-center ${
                            isDefault ? "flex" : "hidden"
                        }`}>
                        <div
                            className={`prt_menu flex items-center ${
                                showMenu ? "mr-3" : ""
                            }`}
                            style={{
                                opacity: `${showMenu ? "1" : "0"}`,
                            }}>
                            {MENU_ITEMS.map((item) => {
                                return (
                                    <RoundButton link={item} key={item.title} />
                                )
                            })}
                        </div>

                        <button
                            className="prt_plus_sign"
                            aria-label="Menu"
                            onClick={() => showMenuAndTransition()}>
                            <FontAwesomeIcon
                                icon={menuIcon}
                                className="prt_plus_menu"
                                style={{
                                    transform: `rotate(${degrees}deg)`,
                                    fontSize: "30px",
                                }}
                            />
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header
