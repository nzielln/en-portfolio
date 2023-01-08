import Link from "next/link"
import { useState } from "react"
import { PRT_OUTLINE_CURSOR_ANIMATION } from "../../CONSTANTS"
import { CSSProperties } from "styled-components"

const Cursor = () => {
    const [mousex, setMouseX] = useState<number>()
    const [mousey, setMouseY] = useState<number>()
    const [width, setWidth] = useState<number>(25)
    const [height, setHeight] = useState<number>(25)
    const [radius, setRadius] = useState<string>("50%")
    const [scale, setScale] = useState<string>("1")
    const [color, setColor] = useState<string>("#f45d59")
    const [mode, setMode] = useState<string>("normal")
    let cursor: HTMLElement
    let currentElement: HTMLElement | undefined

    if (typeof window !== "undefined") {
        cursor = document.getElementById("prt_cursor") as HTMLElement
        window.addEventListener("mousemove", (e) => {
            e.preventDefault()
            setMouseX(e.pageX)
            setMouseY(e.pageY)
        })
    }

    return (
        <div
            className="prt_cursor"
            id="prt_cursor"
            style={{
                left: `${mousex}px`,
                top: `${mousey}px`,
               
            }}>
            <h1></h1>
        </div>
    )
}

export default Cursor
