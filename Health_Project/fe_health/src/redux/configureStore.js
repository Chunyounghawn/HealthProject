import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./Calendar";

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,

  },
});