import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./calendar";
import modalReducer from "./modalSelector"

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
    modal: modalReducer

  },
});