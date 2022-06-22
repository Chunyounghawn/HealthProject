import React from "react"
import styled from "styled-components"

import {
  LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
} from "../component/navigation.jsx"

import { Logo } from "../image/index.js"

const MenuBar = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 300px;
  height: 890px;
  background-color: #EFDAD7;
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
  background-color: #886F6F;
  color: #fff;
  font-size: 30px;
  border-color: #C1A3A3;
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
  return (
    <MenuBar>
      <Symbol src={Logo} />
      <MenuBtn1
        onClick={() => {
          LoginTrue()
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
          InformationTrue()
        }}
      >
        내정보
      </MenuBtn3>
      <MenuBtn4
        onClick={() => {
          ChallengeTrue()
        }}
      >
        챌린지
      </MenuBtn4>
      <MenuBtn5
        onClick={() => {
          BoardTrue()
        }}
      >
        소통 게시판
      </MenuBtn5>
    </MenuBar>
  )
}

export default Menubar
