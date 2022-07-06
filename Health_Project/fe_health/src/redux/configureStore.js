import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./calendar";
import modalTFReducer from "./modalTFselector";

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
    modalTFselector: modalTFReducer
  },
});