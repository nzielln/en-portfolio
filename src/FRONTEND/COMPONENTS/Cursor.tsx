import Link from "next/link"
import { useState } from "react"

const Cursor = () => {
    const [mousex, setMouseX] = useState<number>()
    const [mousey, setMouseY] = useState<number>()
    const [width, setWidth] = useState<number>(25)
    const [height, setHeight] = useState<number>(25)
    const [radius, setRadius] = useState<string>("50%")
    const [color, setColor] = useState<string>("#f45d59")

    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", (e) => {
            e.preventDefault()
            setMouseX(e.pageX)
            setMouseY(e.pageY)
        })
    }

    return (
        <div
            className="prt_cursor"
            style={{
                left: `${mousex}px`,
                top: `${mousey}px`,
               
            }}>
            <h1></h1>
        </div>
    )
}

export default Cursor
