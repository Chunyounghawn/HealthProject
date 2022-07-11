import React from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import InformationModal from "react-modal"

import UserInfo from "./UserInfo.js"
import InbodyInfo from "./InbodyInfo.js"
import ChallengeInfo from "./ChallengeInfo.js"
import WaterInfo from "./WaterInfo.js"

// TodoList
import TodoTemplate from "./TodoTemplate.js"
import TodoHead from "./TodoHead.js"
import TodoList from "./TodoList.js"
import TodoCreate from "./TodoCreate.js"
import { TodoProvider } from "./TodoContext.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 60px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 830px;
  position: absolute;
  top: 60px;
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

const BasicContainer = styled.div`
  height: 370px;
  position: absolute;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #47ff9c;
`

const UserContainer = styled(BasicContainer)`
  width: 410px;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
`

const InBodyContainer = styled(BasicContainer)`
  width: 850px;
  top: 30px;
  right: 30px;
`

const ChallengeContainer = styled(BasicContainer)`
  width: 410px;
  left: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const AlarmContainer = styled(BasicContainer)`
  width: 410px;
  left: 470px;
  bottom: 30px;
`

const TodoListContainer = styled(BasicContainer)`
  width: 410px;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const MyInformation = ({ isModal, setModal }) => {
  return (
    <InformationModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <UserContainer>
            <UserInfo />
          </UserContainer>

          <InBodyContainer>
            <InbodyInfo />
          </InBodyContainer>

          <ChallengeContainer>
            <ChallengeInfo />
          </ChallengeContainer>

          <AlarmContainer>
            <WaterInfo />
          </AlarmContainer>

          <TodoListContainer>
            <TodoProvider>
              <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
              </TodoTemplate>
            </TodoProvider>
          </TodoListContainer>
        </ModalBody>
      </ModalContainer>
    </InformationModal>
  )
}

export default MyInformation
