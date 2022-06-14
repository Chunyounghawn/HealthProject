import React from "react"
import styled from "styled-components"
import { Close, UserImg } from "../image/index.js"

import Menubar from "./Menubar.js"
import LoginModal from "react-modal"

import { SignupTrue } from "../component/navigation.jsx"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
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

const UserLogin = styled.div`
  position: absolute;
  top: 35%;
  left: 45%;
`

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -100%;
  left: 30%;
`

const Btn = styled.div`
  width: 150px;
  height: 40px;
  position: absolute;
  background-color: #333;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`

const LoginBtn = styled(Btn)`
  top: 120%;
  left: 15%;
`

const SignupBtn = styled(Btn)`
  top: 180%;
  left: 15%;
`

const Login = ({ isModal, setModal }) => {
  const [ID, setID] = React.useState("")
  const [PW, setPW] = React.useState("")

  const onChange = React.useCallback((e) => {
    setID(e.target.ID)
    setPW(e.target.PW)
  }, [])

  return (
    <LoginModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
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
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <UserLogin>
            <UserIcon src={UserImg}></UserIcon>
            <form>
              <input
                type="text"
                name="userId"
                value={ID}
                onChange={onChange}
                style={{
                  width: "200px",
                  height: "30px",
                  fontSize: "20px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              />
              <br />
              <input
                type="password"
                name="userPW"
                value={PW}
                onChange={onChange}
                style={{
                  width: "200px",
                  height: "30px",
                  fontSize: "20px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              />
              <br />
              <LoginBtn>Login</LoginBtn>
              <SignupBtn
                onClick={() => {
                  setModal(false)
                  SignupTrue()
                }}
              >
                Sign Up
              </SignupBtn>
            </form>
          </UserLogin>
        </ModalBody>

        <ModalFooter />
      </ModalContainer>
    </LoginModal>
  )
}

export default Login
