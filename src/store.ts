import rootReducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './epics';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const preloadedState = {
    recipes: {recipes: []}
};

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(epicMiddleware),
    devTools: true,
    preloadedState,
});

epicMiddleware.run(rootEpic);

const persistor = persistStore(store);

export {store, persistor};
