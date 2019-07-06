import { reducerWithInitialState } from "typescript-fsa-reducers";
import { AppState } from "../Models";
import * as Actions from "../Actions";
import { InitialRequestState } from "../../../Utils/Redux/models";
import { reducerUpdate } from "../../../Utils/Redux/reducer-utils";

const INITIAL_STATE: AppState = {
  charities: [],
  request: InitialRequestState,
  topLevelSearch: ""
};

export const AppReducer = reducerWithInitialState(INITIAL_STATE)
.case(Actions.UPDATE_SearchQuery, (state: AppState, search_term: string) => 
  reducerUpdate(state, {
    topLevelSearch: search_term
  })
)
.case(Actions.GET_AllCharitiesRequest, (state: AppState) =>
  reducerUpdate(state, {
    request: {
      sent: true,
      success: false,
      failure: null
    }
  })
)
.case(Actions.GET_AllCharitiesSuccess, (state: AppState, res_payload: any) => {
    return reducerUpdate(state, {
      charities: res_payload,
      request: {
        sent: false,
        success: true,
        failure: null
      }
    });
  }
)
.case(Actions.GET_AllCharitiesFailure, (state: AppState, res_payload: any) =>
  reducerUpdate(state, {
    request: {
      sent: false,
      success: false,
      failure: res_payload
    }
  })
);