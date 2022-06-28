import React, { useReducer, useState } from 'react';
import { createSlice } from "@reduxjs/toolkit";
import NoticeModal from "../component/modal/Navigation/Notice/Notice.js"
import Notice from '../component/modal/Navigation/Notice/Notice';

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export const modalSelector = createSlice({
  name: "modalSelector",
  initialState: {
    modal: {
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
    nowModal: {
      nowModal: true
    }
  },
  reducers: {

    ModalChange: (state, pp) => {
      //console.log(state.modal.NoticeModalIsOpen);
      //console.log(pp.payload);

      //console.log(getKeyByValue(state.modal, true));



      //나머지 false처리 해줘야됨



      if (pp.payload == "NoticeModal") {
        state.modal.NoticeModalIsOpen = !state.modal.NoticeModalIsOpen


      }
      console.log(state.modal.NoticeModalIsOpen);

    },
    default: (state) => {
      return {
        ...state
      }

    }



  }

})


export const { ModalChange } = modalSelector.actions;


export default modalSelector.reducer;