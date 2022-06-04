import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSelector";

export default configureStore({
  reducer: {
    theme: themeReducer,

  },
});