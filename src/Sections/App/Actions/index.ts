import createActionFactory from 'typescript-fsa';
import { ErrorResponse } from '../../../Utils/Redux/models';
import { IGetAllCharitiesResponse, ICharity, IPOSTMakePaymentRequest } from '../Models';

const createAction = createActionFactory('Charity');

// Select a charity
export const UPDATE_selectedCharities = createAction<ICharity[]>("SELECT_CHARITY");

// Search term 
export const UPDATE_SearchQuery = createAction<string>("UPDATE_SEARCH_QUERY");

// Charity
export const GET_AllCharitiesRequest = createAction("GET_ALL_CHARITIES_REQUEST");
export const GET_AllCharitiesSuccess = createAction<IGetAllCharitiesResponse>("GET_ALL_CHARITIES_SUCCESS");
export const GET_AllCharitiesFailure = createAction<ErrorResponse>("'GET_ALL_CHARITIES_FAILURE");

//Payments
export const POST_MakePaymentRequest = createAction<IPOSTMakePaymentRequest>("POST_MAKE_PAYMENT_REQUEST");
export const POST_MakePaymentSuccess = createAction<{ success: boolean }>("POST_MAKE_PAYMENT_SUCCESS");
export const POST_MakePaymentFailure = createAction<ErrorResponse>("POST_MAKE_PAYMENT_FAILURE");