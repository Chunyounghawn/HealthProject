import React from "react"
import styled from "styled-components"
import { Close } from "../image/index.js"

import ScheduleModal from "react-modal"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 1610px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1610px;
  height: 100px;
  background-color: red;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 690px;
  position: absolute;
  top: 100px;
  background-color: orange;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
  height: 100px;
  bottom: 0px;
  background-color: blue;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const Text = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  font-size: 30px;
`

const Schedule = ({ isModal, setModal }) => {
  return (
    <ScheduleModal
      isOpen={isModal}
      onRequestClose={() => setModal}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          backgroundColor: "#7FFFD4",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Text>ScheduleModal</Text>
        </ModalBody>
        <ModalFooter />
      </ModalContainer>
    </ScheduleModal>
  )
}

export default Schedule
