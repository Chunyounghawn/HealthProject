import React, { useReducer } from 'react';
import { createSlice } from "@reduxjs/toolkit";

const today = new Date()

export const modalSelector = createSlice({
  name: "modalSelector",
  initialState: {
    LoginModalIsOpen: false,
    NoticeModalIsOpen: false,
    InformationModalIsOpen: false,
    ChallengeModalIsOpen: false,
    BoardModalIsOpen: false,
    PushUpModalIsOpen: false,
    SitUpModalIsOpen: false,
    SquatModalIsOpen: false,
    SignupModalIsOpen: false,
    CalModalIsOpen: false,
  },
  reducers: {
    INCREMENT: (state) => {
      console.log(state);
      if (state.month < 11) {
        return { ...state, "month": state.month + 1 }
      }
      // 12월을 넘길 경우 Year + 1
      else {
        return { ...state, "year": state.year + 1, "month": 0 }
      }


    },
    DECREMENT: (state) => {
      console.log("de");
      if (state.month > 0) {
        return { ...state, "month": state.month - 1 }
      }
      // 1월 보다 작을 경우 Year - 1
      else {
        return { ...state, "year": state.year - 1, "month": 11 }
      }

    }

  }

})


export const { INCREMENT, DECREMENT } = Calendar.actions;


export default Calendar.reducer;