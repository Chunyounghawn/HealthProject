import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./calendar";

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,

  },
});