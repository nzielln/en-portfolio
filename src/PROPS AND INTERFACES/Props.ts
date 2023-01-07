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
    projects: any[]
}

export type ButtonProp = {
    link: LinkInterface
}

export type HeaderProp = {
    showMenuItems: boolean,
    isDefault: boolean
}

export type ShowLogoAction = {
    shouldShowMenuItems: (hide: boolean) => void
}
