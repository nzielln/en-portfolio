import {
    PRT_NEXT_PROJECT_ACTION,
    PRT_PREV_PROJECT_ACTION,
    PRT_RESET_PROJECT_ACTION,
    PRT_SET_PROJECT_ACTION,
} from "../CONSTANTS"
import {
    nextProject,
    prevProject,
    resetProjects,
    setProject,
} from "./ProjectCounterReducer"

export const nextProjectAction = (dispatch: any) => {
    dispatch(nextProject())
}

export const prevProjectAction = (dispatch: any) => {
    dispatch(prevProject())
}

export const resetProjectsAction = (dispatch: any) => {
    dispatch(resetProjects())
}
export const setProjectsAction = (dispatch: any, value: number) => {
    dispatch(setProject(value))
}
