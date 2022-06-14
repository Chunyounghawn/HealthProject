import React from "react"
import styled from "styled-components"
import { Close } from "../image/index.js"

import AlarmModal from "react-modal"

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
`

const ModalBody = styled.div`
  width: 1610px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
  height: 100px;
  bottom: 0px;
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

const Alarm = ({ isModal, setModal }) => {
  return (
    <AlarmModal
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
          borderRadius: "30px",
          backgroundColor: "#7FFFD4",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Text>AlarmModal</Text>
        </ModalBody>
        <ModalFooter />
      </ModalContainer>
    </AlarmModal>
  )
}

export default Alarm
