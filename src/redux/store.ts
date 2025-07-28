// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter/counterSlice";
// import taskReducer from "./features/task/taskSlice";
import userReducer from "./features/user/userSlice";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const reducers = combineReducers({
//   counter: counterReducer,
//   todo: taskReducer,
//   user: userReducer,
// });
// const persistedReducer = persistReducer(persistConfig, reducers);
// export const store = configureStore({
//   reducer: persistedReducer,
// });
export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
// export const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
//export type AppDispatch = typeof store.dispatch;
