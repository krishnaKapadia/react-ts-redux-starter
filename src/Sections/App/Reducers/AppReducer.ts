import { reducerWithInitialState } from "typescript-fsa-reducers";
import { AppState } from "../Models";

const INITIAL_STATE: AppState = {
    placeholderText: "placeholder text"
};

export const AppReducer = reducerWithInitialState(INITIAL_STATE);