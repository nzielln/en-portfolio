import { LinkInterface, ProjectInterface } from "./Interfaces"

export type ProjectProp = {
    project: ProjectInterface,
}
export type ProjectsProp = {
    projects: ProjectInterface[],
}

export type SingleProjectsProp = {
    project: ProjectInterface
    projects: ProjectInterface[]
}

export type AnyProjectsProp = {
    projects: any[],
    showMenuAction: (show: boolean) => void
}

export type ButtonProp = {
    link: LinkInterface
}

export type HeaderProp = {
    showMenuItems: boolean,
    isDefault: boolean
}

export type ShowMenuProp = {
    showMenuAction: (show: boolean) => void
}
