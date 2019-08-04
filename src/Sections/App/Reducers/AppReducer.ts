import { reducerWithInitialState } from "typescript-fsa-reducers";
import { AppState, ICharity } from "../Models";
import * as Actions from "../Actions";
import { InitialRequestState } from "../../../Utils/Redux/models";
import { reducerUpdate } from "../../../Utils/Redux/reducer-utils";

const INITIAL_STATE: AppState = {
  charities: [],
  request: InitialRequestState,
  topLevelSearch: "",
  selectedCharities: [],
};

export const AppReducer = reducerWithInitialState(INITIAL_STATE)
.case(Actions.UPDATE_SearchQuery, (state: AppState, search_term: string) => 
  reducerUpdate(state, {
    topLevelSearch: search_term.toLowerCase()
  })
)
.case(Actions.UPDATE_selectedCharities, (state: AppState, selectedCharities: ICharity[]) => 
  reducerUpdate(state, {
    selectedCharities
  })
)
.case(Actions.POST_MakePaymentRequest, (state: AppState) => 
  reducerUpdate(state, {
    request: {
      sent: true,
      success: false,
      failure: null
    }
  })
)
.case(Actions.POST_MakePaymentSuccess, (state: AppState, res_payload: any) => {
  console.log("POST Make Payment result:", res_payload);
  return reducerUpdate(state, {
    request: {
      sent: false,
      success: true,
      failure: null
    }
  });
}
)
.case(Actions.POST_MakePaymentFailure, (state: AppState, res_payload: any) =>
  reducerUpdate(state, {
    request: {
      sent: false,
      success: false,
      failure: res_payload
    }
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