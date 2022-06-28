import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";
import calendarReducer from "./calendar";
<<<<<<< HEAD
=======
import modalReducer from "./modalSelector"
>>>>>>> 09cc02652f10d0588a0ac085fddeaf476820a414

export default configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
    modal: modalReducer

  },
});