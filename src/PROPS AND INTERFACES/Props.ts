import { LinkInterface, ProjectInterface } from "./Interfaces"

export type ProjectProp = {
    project: ProjectInterface
}
export type ProjectsProp = {
    projects: ProjectInterface[]
}

export type AnyProjectsProp = {
    projects: any[],
    showLogo: (showLogo: boolean) => void
}

export type ButtonProp = {
    link: LinkInterface
}

export type HeaderProp = {
    showHeader: boolean,
    showLogo: boolean
}

export type ShowLogoAction = {
    showLogo: (showLogo: boolean) => void
}