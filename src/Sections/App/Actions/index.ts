import createActionFactory from 'typescript-fsa';
import { ErrorResponse } from '../../../Utils/Redux/models';
import { IGetAllCharitiesResponse } from '../Models';

const createAction = createActionFactory('Charity');

// Search term 
export const UPDATE_SearchQuery = createAction<string>("UPDATE_SEARCH_QUERY");

// Charity
export const GET_AllCharitiesRequest = createAction("GET_ALL_CHARITIES_REQUEST");
export const GET_AllCharitiesSuccess = createAction<IGetAllCharitiesResponse>("GET_ALL_CHARITIES_SUCCESS");
export const GET_AllCharitiesFailure = createAction<ErrorResponse>("'GET_ALL_CHARITIES_FAILURE");