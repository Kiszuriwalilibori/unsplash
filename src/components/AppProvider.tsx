import React from "react";
import thunk from "redux-thunk";
import storage from "reduxjs-toolkit-persist/lib/storage";

import { HashRouter as Router } from "react-router-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "reduxjs-toolkit-persist";

import {
    errorReducer,
    hintsReducer,
    imagesReducer,
    modalReducer,
    onlineReducer,
    temporaryBackgroundReducer,
} from "reduxware/reducers";

import { WithRandomBackground } from "hocs";
import { SnackbarProvider } from "notistack";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["hints", "images"],
};

const rootReducer = combineReducers({
    images: imagesReducer,
    modal: modalReducer,
    error: errorReducer,
    hints: hintsReducer,
    temporaryBackground: temporaryBackgroundReducer,
    online: onlineReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer) as typeof rootReducer;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunk),
});

let persistor = persistStore(store);

const AppProvider: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <WithRandomBackground>{children}</WithRandomBackground>
                    </SnackbarProvider>
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default AppProvider;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
