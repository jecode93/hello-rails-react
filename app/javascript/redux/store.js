import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import greetingReducer from "./greeting/greetingSlice";

export const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
