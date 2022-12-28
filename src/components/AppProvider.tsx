import React from "react";
import { HashRouter as Router } from "react-router-dom";
import SetBackground from "./SetBackground";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import imagesReducer from "../reduxware/redux/imagesReducer";
import modalReducer from "../reduxware/redux/modalReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ images: imagesReducer, modal: modalReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
        <Router >
          <SetBackground>
           {children}
          </SetBackground>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
