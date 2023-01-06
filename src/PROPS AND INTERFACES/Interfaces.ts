import { PRT_WEB_APPLICATION } from "../CONSTANTS"

export interface ProjectInterface {
    id: string,
    title: string,
    type: string,
    tools: string[],
    description: string,
    link: string,
    images: {
        cover: string,
        primary: string,
        secondary: string
    } | any
}

export interface LinkInterface {
    title: string, 
    link: string
}

export type ProjectCounterState = {
    value: number
}
