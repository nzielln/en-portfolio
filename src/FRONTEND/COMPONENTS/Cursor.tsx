
import Link from "next/link"
import { useState } from "react"

const Cursor = () => {
    const [mousex, setMouseX] = useState<number>()
    const [mousey, setMouseY] = useState<number>()

    if (typeof window !== "undefined") {
        window.addEventListener("mousemove", (e) => {
        e.preventDefault()
        setMouseX(e.pageX)
        setMouseY(e.pageY)
    })

    }


    return (
        <div className='prt_cursor'
            style={{
                "left": `${mousex}px`,
                "top": `${mousey}px`
            }}
        ></div>
    )
}

export default Cursor
