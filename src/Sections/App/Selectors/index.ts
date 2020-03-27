import { createSelector } from "reselect";
import { AppState } from "../Models";
import { GlobalState } from "../../../Global/GlobalReducer";

const appState = (state: GlobalState): AppState => state.app;

export const getPlaceholderText = createSelector(
  appState,
  state => state.placeholderText
);
