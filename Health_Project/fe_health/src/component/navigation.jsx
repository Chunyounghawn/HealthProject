import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "../redux/themeSelector"

import {
  Light,
  User,
  Main,
  Thumbs_up,
  Reviews,
  Headphone,
  Placeholder,
} from "../image/index.js"

import styled from "styled-components"

// Modal
import LoginModal from "./modal/Navigation/Login/Login.js"
import NoticeModal from "./modal/Navigation/Notice/Notice.js"
import MyInformationModal from "./modal/Navigation/MyInfo/MyInformation.js"
import ChallengeModal from "./modal/Navigation/Challenge/Challenge.js"
import BoardModal from "./modal/Navigation/Board/Board.js"
import PushUpModal from "./modal/Navigation/Challenge/Pushup.js"
import SitupModal from "./modal/Navigation/Challenge/Situp.js"
import SquatModal from "./modal/Navigation/Challenge/Squat.js"
import SignupModal from "./modal/Navigation/Login/Signup.js"

import MainPageModal from "./modal/Navigation/Login/Mainpage.js"

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
  background: ${(props) => props.theme.navColor};
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

export let LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
  PushUpTrue,
  SitUpTrue,
  SquatTrue,
  SignupTrue,
  MainPageTrue

const Navigations = ({ fullpageApi }) => {
  const [LoginModalIsOpen, setLoginModalOpen] = React.useState(false)
  const [NoticeModalIsOpen, setNoticeModalOpen] = React.useState(false)
  const [MyInformationModalIsOpen, setMyInformationModalOpen] = React.useState(
    false
  )
  const [ChallengeModalIsOpen, setChallengeModalOpen] = React.useState(false)
  const [BoardModalIsOpen, setBoardModalOpen] = React.useState(false)

  const [PushUpModalIsOpen, setPushUpModalOpen] = React.useState(false)
  const [SitUpModalIsOpen, setSitUpModalOpen] = React.useState(false)
  const [SquatModalIsOpen, setSquatModalOpen] = React.useState(false)

  const [SignupModalIsOpen, setSignupModalOpen] = React.useState(false)
  const [MainPageModalIsOpen, setMainPageModalOpen] = React.useState(false)

  LoginTrue = function LoginModalTrue() {
    // 로그인 화면
    setNoticeModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setLoginModalOpen(true)

    setMainPageModalOpen(false)
  }

  NoticeTrue = function NoteiceModalTrue() {
    // 공지사항 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(true)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  InformationTrue = function InformationModalTrue() {
    // 내정보 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(true)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  ChallengeTrue = function ChallengeModalTrue() {
    // 첼린지 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(true)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  BoardTrue = function BoardModalTrue() {
    // 게시판 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(true)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  PushUpTrue = function PushUpModalTrue() {
    // 팔굽혀펴기 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(true)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  SitUpTrue = function SitUpModalTrue() {
    // 윗몸일으키기 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(true)
    setSquatModalOpen(false)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  SquatTrue = function SquatModalTrue() {
    // 스쿼트 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(true)
    setSignupModalOpen(false)

    setMainPageModalOpen(false)
  }

  SignupTrue = function SignupModalTrue() {
    // 회원가입 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)

    setSignupModalOpen(true)
  }

  MainPageTrue = function MainPageModalTrue() {
    // 메인 페이지 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(true)
  }
  //,
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <>
      <NavigationStyle>
        {!theme.darkmode ? (
          <ThemeButton src={Light} onClick={() => dispatch(darkTheme())} />
        ) : (
          <ThemeButton src={Light} onClick={() => dispatch(lightTheme())} />
        )}

        <UserButton src={User} onClick={() => setLoginModalOpen(true)} />

        <LoginModal isModal={LoginModalIsOpen} setModal={setLoginModalOpen} />

        <NoticeModal
          isModal={NoticeModalIsOpen}
          setModal={setNoticeModalOpen}
        />

        <MyInformationModal
          isModal={MyInformationModalIsOpen}
          setModal={setMyInformationModalOpen}
        />

        <ChallengeModal
          isModal={ChallengeModalIsOpen}
          setModal={setChallengeModalOpen}
        />

        <BoardModal isModal={BoardModalIsOpen} setModal={setBoardModalOpen} />

        <PushUpModal
          isModal={PushUpModalIsOpen}
          setModal={setPushUpModalOpen}
        />

        <SitupModal isModal={SitUpModalIsOpen} setModal={setSitUpModalOpen} />

        <SquatModal isModal={SquatModalIsOpen} setModal={setSquatModalOpen} />

        <SignupModal
          isModal={SignupModalIsOpen}
          setModal={setSignupModalOpen}
        />

        <MainPageModal
          isModal={MainPageModalIsOpen}
          setModal={setMainPageModalOpen}
        />

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

export default Navigations
