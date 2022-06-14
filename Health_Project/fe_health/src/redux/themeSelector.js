import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSelector",
  initialState: {

  },
  reducers: {
    darkTheme: (state) => {

      state.darkmode = true;
      console.log("aaaaaa");

    },
    lightTheme: (state) => {

      state.darkmode = false;
      console.log("wwwwww");
    }
  }

})


export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;