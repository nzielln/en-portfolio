import {
    legacy_createStore as createStore,
    applyMiddleware,
    Store,
    combineReducers,
} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { ProjectCounterState } from "../PROPS AND INTERFACES/Interfaces"
import {
    PRT_NEXT_PROJECT_ACTION,
    PRT_PREV_PROJECT_ACTION,
    PRT_RESET_PROJECT_ACTION,
    PRT_SET_PROJECT_ACTION,
} from "../CONSTANTS"

const initialCounterState: ProjectCounterState = {
    value: 0,
}

const ProjectReducer = (
    state: ProjectCounterState = initialCounterState,
    action: any
): ProjectCounterState => {
    switch (action.type) {
        case PRT_NEXT_PROJECT_ACTION:
            return {
                value: state.value + 1,
            }
        case PRT_PREV_PROJECT_ACTION:
            return {
                value: state.value - 1,
            }
        case PRT_SET_PROJECT_ACTION:
            console.log(action.value)
            return {
                value: action.value,
            }
        case PRT_RESET_PROJECT_ACTION:
            console.log("REDUCER: RESETTING")
            return {
                
                value: 0,
            }
        default:
            return state
    }
}


const reducers = combineReducers({
    projectCounter: ProjectReducer
})

export const store: Store<any, any> & {
    dispatch: any 
} = createStore(reducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>