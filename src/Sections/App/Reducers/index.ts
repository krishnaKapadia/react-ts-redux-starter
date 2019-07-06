import { combineReducers } from "redux";
import { AppReducer } from "./AppReducer";



export const CoreReducer = combineReducers({
  app: AppReducer
});