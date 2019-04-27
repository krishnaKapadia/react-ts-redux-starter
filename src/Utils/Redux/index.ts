import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import GlobalReducer from '../../GlobalReducer';
import GlobalSagas from '../../GlobalSagas';
import { History } from "../React-Router";
import { assign } from 'lodash';

// Middlewares
const SagaMiddleware = createSagaMiddleware();
const Middlewares = [
    SagaMiddleware
];

const globalReducer = GlobalReducer();

const store = createReduxStore(
    globalReducer,
    composeWithDevTools(
        applyMiddleware(...Middlewares)
    )
);

SagaMiddleware.run(GlobalSagas);

export const createStore = () => ({
    store
});