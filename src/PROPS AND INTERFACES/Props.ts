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
    hideHeader: (hide: boolean) => void
}

export type ButtonProp = {
    link: LinkInterface
}

export type HeaderProp = {
    showHeader: boolean,
    hideHeader: boolean
}

export type ShowLogoAction = {
    hideHeader: (hide: boolean) => void
}
