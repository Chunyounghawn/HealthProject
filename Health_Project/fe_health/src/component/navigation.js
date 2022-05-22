import {
  Light,
  User,
  Main,
  Thumbs_up,
  Reviews,
  Headphone,
  Placeholder,
  Close,
  UserImg,
} from "../image/index.js"

import styled from "styled-components"

import React, { useCallback, useState } from "react"
import UserModal from "react-modal"

const NavigationStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  right: 0;
  top: 0;
  height: 100%;
  background: #f9d9ca;
  z-index: 100;

  @media screen and (min-width: 1920px) {
    width: 10%;
  }

  img {
    margin: 12px;
    width: 50px;
    height: 50px;
    &:last-child {
      width: 80px;
      height: 80px;
    }
  }

  img.attrs {
    src: ${(props) => props.src};
  }
`

const ThemeButton = styled.img`
  position: fixed;
  top: 10px;
  right: 100px;
  &:hover {
    cursor: pointer;
  }
`
const UserButton = styled.img`
  position: fixed;
  width: 5px;
  height: 5px;
  top: 10px;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  &:hover {
    cursor: pointer;
  }
`

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -100%;
  left: 30%;
`
const UserLogin = styled.div`
  position: absolute;
  top: 35%;
  left: 46%;
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

const handleClick = (e) => {
  //  e.preventDefault();
  console.log("asdfasdfasd")
}

const Navigation = () => {
  const [modalIsOpen, setModalOpen] = React.useState(false)

  const [ID, setID] = useState("")
  const [PW, setPW] = useState("")

  const onChange = useCallback((e) => {
    setID(e.target.ID)
    setPW(e.target.PW)
  }, [])

  return (
    <>
      <NavigationStyle>
        <ThemeButton src={Light} onClick={handleClick} />
        <UserButton src={User} onClick={() => setModalOpen(true)} />

        <UserModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              left: "2%",
              right: "12%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn src={Close} onClick={() => setModalOpen(false)} />

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
              <SignupBtn>Sign Up</SignupBtn>
            </form>
          </UserLogin>
        </UserModal>

        <ul>
          <li data-menuanchor="MainPage">
            <a href="#MainPage">
              <img src={Main} alt="메인페이지" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="StrengthPage">
            <a href="#StrengthPage">
              <img src={Thumbs_up} alt="앱장점" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="ReviewPage">
            <a href="#ReviewPage">
              <img src={Reviews} alt="리뷰" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="MapPage">
            <a href="#MapPage">
              <img src={Placeholder} alt="지도" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="QuestionPage">
            <a href="#QuestionPage">
              <img src={Headphone} alt="고객센터" />
            </a>
          </li>
        </ul>
      </NavigationStyle>
    </>
  )
}

export default Navigation
