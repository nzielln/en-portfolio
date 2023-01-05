import { LinkInterface, ProjectInterface } from "./Interfaces"

export type ProjectProp = {
    project: ProjectInterface
}
export type ProjectsProp = {
    projects: ProjectInterface[]
}

export type ButtonProp = {
    link: LinkInterface
}

export type PageProp = {

    showHeader: boolean
}