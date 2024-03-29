import { createStore } from "redux"
import rootReducer from "./rootreduser"

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)