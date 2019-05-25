import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: "root",
    storage,
    blacklist: ['user.login', 'user.registration']
};

export const persistedReducer = (rootReducer: any) => (
    persistReducer(persistConfig, rootReducer)
);