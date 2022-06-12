import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSelector",
  initialState: {
    backgroundColor: "pink"
  },
  reducers: {
    darkTheme: (state) => {
      state.backgroundColor = "black"


    },
    lightTheme: (state) => {
      state.backgroundColor = "blue"

    }
  }

})


export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;