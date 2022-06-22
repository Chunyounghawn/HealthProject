import React, { useReducer } from 'react';
import { createSlice } from "@reduxjs/toolkit";

const today = new Date()

export const Calendar = createSlice({
  name: "Calendar",
  initialState: {
    year: today.getFullYear(),
    month: today.getMonth(),
    modal: {
      visible: false,
      index: '',
    },
    schedule: []
  },
  reducers: {
    INCREMENT: (state) => {
      if (state.month < 11) {
        return { ...state, "month": state.month + 1 }
      }
      // 12월을 넘길 경우 Year + 1
      else {
        return { ...state, "year": state.year + 1, "month": 0 }
      }


    },
    DECREMENT: (state) => {

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