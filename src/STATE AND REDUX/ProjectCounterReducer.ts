import {
    PRT_NEXT_PROJECT_ACTION,
    PRT_PREV_PROJECT_ACTION,
    PRT_SET_PROJECT_ACTION,
    PRT_RESET_PROJECT_ACTION,
} from "../CONSTANTS"
import { ProjectCounterState } from "../PROPS AND INTERFACES/Interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./Store"

const initialState: ProjectCounterState = {
    value: 0,
}
export const ProjectCounterSlice = createSlice({
    name: "projectCounter",
    initialState,
    reducers: {
        nextProject: state => {
            state.value++
        },
        prevProject: state => {
            state.value--
        },
        resetProjects: state => {
            state.value == 0
        },
        setProject: (state: any, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { nextProject, prevProject, resetProjects, setProject } =
    ProjectCounterSlice.actions

export const counter = (state: RootState) => state.projectCounter.value
export default ProjectCounterSlice.reducer
