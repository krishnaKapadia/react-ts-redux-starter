import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import GlobalReducer from '../../GlobalReducer';
import GlobalSagas from '../../GlobalSagas';
import { History } from "../React-Router";
import { assign } from 'lodash';
import { persistStore } from "redux-persist";
import { persistedReducer } from '../Redux-Persist';

// Middlewares
const SagaMiddleware = createSagaMiddleware();
const Middlewares = [
    SagaMiddleware
];

const persistedGlobalReducer = persistedReducer(GlobalReducer());

const store = createReduxStore(
    persistedGlobalReducer,
    composeWithDevTools(
        applyMiddleware(...Middlewares)
    )
);

SagaMiddleware.run(GlobalSagas);

export const createStore = () => ({
    store,
    persistor: persistStore(store)
});