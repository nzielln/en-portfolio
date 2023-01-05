export interface ProjectInterface {
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

export interface ProjectCounterState {
    value: number
}