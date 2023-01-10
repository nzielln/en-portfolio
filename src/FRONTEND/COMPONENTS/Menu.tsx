import { animated, useSpring } from "@react-spring/web"
import { MenuProp } from "../../PROPS AND INTERFACES/Props"
import { useImperativeHandle } from "react"

const Menu = ({ openMenu, spring }: MenuProp) => {

    return (
        <animated.div
            className="prt_mobile_menu h-screen"
            style={
                {
                    background: "red",
                    width: "100%",
                    ...spring
                }
            }
        >
            Hello
        </animated.div>
    )

}

export default Menu
