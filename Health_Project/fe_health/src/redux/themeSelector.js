import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSelector",
  initialState: {
    backgroundColor: "pink"
  },
  reducers: {
    darkTheme: (state) => {
      state.backgroundColor = "black"
      console.log("aaaaaaaa");
      console.log(state.backgroundColor);
      console.log("dark");
    },
    lightTheme: (state) => {
      state.backgroundColor = "blue"
      console.log("aaaaaaaa");
      console.log(state.backgroundColor);
      console.log("light");
    }
  }

})


export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;