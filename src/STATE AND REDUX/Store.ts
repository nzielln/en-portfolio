import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { ProjectCounterState } from "../PROPS AND INTERFACES/Interfaces"
import {
    PRT_NEXT_PROJECT_ACTION,
    PRT_PREV_PROJECT_ACTION,
    PRT_RESET_PROJECT_ACTION,
    PRT_SET_PROJECT_ACTION,
} from "../CONSTANTS"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import ProjectCounterReducer from "./ProjectCounterReducer"
// STORE


export const store = configureStore({
    reducer: {
        projectCounter: ProjectCounterReducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

// HOOKS

export const _useDispatch = () => useDispatch<AppDispatch>()
export const _useSelector: TypedUseSelectorHook<RootState> = useSelector
