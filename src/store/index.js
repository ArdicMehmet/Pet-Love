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
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, useSelector } from "react-redux";

// defination slices here
import sampleSlice from "./slices/sampleSlice/slice";
const rootReducer = combineReducers({
  sampleSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sampleSlice"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Custom hooks for dispatch and selector
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
