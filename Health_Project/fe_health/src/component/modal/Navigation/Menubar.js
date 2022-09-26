import React from "react"
import styled from "styled-components"

import {
  LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
  MainPageTrue,
} from "../../navigation.jsx"
import { Logo } from "../../../image/index.js"
import { IsLogin } from "./Login/Login.js"
import { IsLogOut } from "./Login/Mainpage.js"
// import { useRecoilState } from "recoil"
// import LoginCheck from "./Login/recoil/LoginCheck.js"

const MenuBar = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 300px;
  height: 890px;
  background-color: #efdad7;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const Symbol = styled.img`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 3%;
  left: 15%;
`

const MenuBtn = styled.button`
  width: 300px;
  height: 100px;
  background-color: #886f6f;
  color: #fff;
  font-size: 30px;
  border-color: #c1a3a3;
  font-family: ${(props) => props.theme.font};
  &:hover {
    background-color: #fff;
    color: #808080;
    cursor: pointer;
  }
`

const MenuBtn1 = styled(MenuBtn)``

const MenuBtn2 = styled(MenuBtn)``

const MenuBtn3 = styled(MenuBtn)``

const MenuBtn4 = styled(MenuBtn)``

const MenuBtn5 = styled(MenuBtn)``

const Menubar = () => {
  // const [isLogin, setisLogin] = useRecoilState(LoginCheck)

  return (
    <MenuBar>
      <Symbol src={Logo} />
      <MenuBtn1
        onClick={() => {
          // isLogin === true ? MainPageTrue() : LoginTrue()
          if (IsLogOut === true) LoginTrue()
          else {
            IsLogin === true ? MainPageTrue() : LoginTrue()
          }
        }}
      >
        로그인
      </MenuBtn1>
      <MenuBtn2
        onClick={() => {
          NoticeTrue()
        }}
      >
        공지사항
      </MenuBtn2>
      <MenuBtn3
        onClick={() => {
          // isLogin === true
          //   ? InformationTrue()
          //   : window.alert("로그인이 필요한 페이지 입니다.")

          if (IsLogOut === true) window.alert("로그인이 필요한 페이지 입니다.")
          else {
            IsLogin === true
              ? InformationTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }
        }}
      >
        내정보
      </MenuBtn3>
      <MenuBtn4
        onClick={() => {
          // isLogin === true
          //   ? ChallengeTrue()
          //   : window.alert("로그인이 필요한 페이지 입니다.")

          if (IsLogOut === true) window.alert("로그인이 필요한 페이지 입니다.")
          else {
            IsLogin === true
              ? ChallengeTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }
        }}
      >
        챌린지
      </MenuBtn4>
      <MenuBtn5
        onClick={() => {
          //   isLogin === true
          //     ? BoardTrue()
          //     : window.alert("로그인이 필요한 페이지 입니다.")

          if (IsLogOut === true) window.alert("로그인이 필요한 페이지 입니다.")
          else {
            IsLogin === true
              ? BoardTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }
        }}
      >
        소통 게시판
      </MenuBtn5>
    </MenuBar>
  )
}

export default Menubar
