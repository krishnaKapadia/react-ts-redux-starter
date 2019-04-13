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

const globalReducer = GlobalReducer(History);

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

export function reducerUpdate<T extends object>(existingState: T, newState: Partial<T>): T {
    return assign({}, existingState, newState);
}

export function nestedReducerUpdate<T extends object, K extends keyof T>(
    existingState: T,
    prop: K,
    newValue: Partial<T[K]>,
) {
    const newState = assign({}, existingState);
    newState[prop] = assign({}, newState[prop], newValue);

    return newState;
}