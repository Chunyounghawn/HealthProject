import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSelector",
  initialState: {
    backgroundColor: "pink"
  },
  reducers: {
    darkTheme: (state) => {
      state.backgroundColor = "green"
      state.darkmode = true;

    },
    lightTheme: (state) => {
      state.backgroundColor = "blue"
      state.darkmode = false;
    }
  }

})


export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;