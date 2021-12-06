import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePageReducer from "./containers/HomePage/slice";
import reduxLongger from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLongger),
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
