import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./calendar";
import apitestReducer from "./apitest"

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
    apitest: apitestReducer
  },
});