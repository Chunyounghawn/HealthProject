
import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "themeSelector",
  initialState: {
    fullpageApi: 'dd'
  },
  reducers: {
    insert: (state, fullpageApi) => {
      state.fullpageApi = fullpageApi
      console.log("asdfasdfasdfasd");
      console.log(state.fullpageApi);


    },

  }

})


export const { insert } = apiSlice.actions;

export default apiSlice.reducer;