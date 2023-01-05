import {
    PRT_NEXT_PROJECT_ACTION,
    PRT_PREV_PROJECT_ACTION,
    PRT_RESET_PROJECT_ACTION,
    PRT_SET_PROJECT_ACTION,
} from "../CONSTANTS"


export const nextProjectAction = async (dispatch: any) => {
    dispatch ({
        type: PRT_NEXT_PROJECT_ACTION
    })
}

export const prevProjectAction = async (dispatch: any) => { 
     dispatch({
         type: PRT_PREV_PROJECT_ACTION,
     })
}

export const resetProjectsAction = async (dispatch: any) => {
     dispatch({
         type: PRT_RESET_PROJECT_ACTION,
     })
}
export const setProjectsAction = async (dispatch: any, value: number) => {
     dispatch({
         type: PRT_SET_PROJECT_ACTION,
         value: value

     })
}