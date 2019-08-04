import { createSelector } from "reselect";
import { isNil } from 'lodash';
import { AppState } from "../Models";
import { GlobalState } from "../../../Global/GlobalReducer";

const appState = (state: GlobalState): AppState => state.app;

export const getSearchQuery = createSelector(
  appState,
  state => state.topLevelSearch
);

export const getCharities = createSelector(
  appState,
  state => state.charities
);

export const getSelectedCharities = createSelector(
  appState,
  state => state.selectedCharities
);

export const isGettingCharities = createSelector(
  appState,
  state => {
    return state.request.sent && !state.request.success && isNil(state.request.failure);
  }
);

export const getCharitiesError = createSelector(
  appState,
  state => state.request.failure
);

export const didGetCharitiesError = createSelector(
  appState,
  state => !isNil(state.request.failure)
)