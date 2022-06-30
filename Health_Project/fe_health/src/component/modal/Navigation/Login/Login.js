import React from "react"
import styled from "styled-components"
import { Close, UserImg } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import LoginModal from "react-modal"

import { SignupTrue, MainPageTrue } from "../../../navigation.jsx"
import axios from "axios"

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

  const IDOnChange = React.useCallback((e) => {
    console.log(e);
    setID(e.target.value)
  }, [])

  const PASSOnChange = React.useCallback((e) => {
    console.log(e);
    setPW(e.target.value)
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
          backgroundColor: "#FBF8F1",
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
                value={ID || ""}
                onChange={IDOnChange}
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
                value={PW || ''}
                onChange={PASSOnChange}
                style={{
                  width: "200px",
                  height: "30px",
                  fontSize: "20px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              />
              <br />
              <LoginBtn
                onClick={() => {

                  //나중에 setState로 일정조건 안될시 버튼 안눌리게 변경해야함


                  if (PW == "" || ID == "") {
                    alert("빈칸 채워주세요")
                    console.log(ID);
                    console.log(PW);
                  } else {
                    const LoginDataForm = new FormData();
                    LoginDataForm.append('user_id', ID);
                    LoginDataForm.append('user_pw', PW);
                    axios({
                      url: '/test',
                      method: 'post',
                      data: LoginDataForm
                    })
                      .then(function a(response) {

                        setID("")
                        setPW("")

                        if (response.data == "TestLoginTrue") {
                          console.log(response)
                          setModal(false)
                          MainPageTrue()
                          console.log("성공인듯?");
                        } else {
                          console.log(response)
                          alert("스프링에서 아이디 없다함")
                        }

                      })
                      .catch(function (error) {
                        console.log(error);
                        alert("서버통신에러")
                      });
                  }




                }}
              >
                Login
              </LoginBtn>
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
