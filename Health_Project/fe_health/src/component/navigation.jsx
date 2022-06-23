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
import InformationModal from "./modal/Navigation/MyInfo/Information.js"
import ChallengeModal from "./modal/Navigation/Challenge/Challenge.js"
import BoardModal from "./modal/Navigation/Board/Board.js"
import PushUpModal from "./modal/Navigation/Challenge/Pushup.js"
import SitupModal from "./modal/Navigation/Challenge/Situp.js"
import SquatModal from "./modal/Navigation/Challenge/Squat.js"
import SignupModal from "./modal/Navigation/Login/Signup.js"
import CalModal from "./modal/StrengthPage/Calendar/CalModal"

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
  CalModalTrue

const Navigations = () => {
  const [LoginModalIsOpen, setLoginModalOpen] = React.useState(false)
  const [NoticeModalIsOpen, setNoticeModalOpen] = React.useState(false)
  const [InformationModalIsOpen, setInformationModalOpen] =
    React.useState(false)
  const [ChallengeModalIsOpen, setChallengeModalOpen] = React.useState(false)
  const [BoardModalIsOpen, setBoardModalOpen] = React.useState(false)

  const [PushUpModalIsOpen, setPushUpModalOpen] = React.useState(false)
  const [SitUpModalIsOpen, setSitUpModalOpen] = React.useState(false)
  const [SquatModalIsOpen, setSquatModalOpen] = React.useState(false)

  const [SignupModalIsOpen, setSignupModalOpen] = React.useState(false)

  const [CalModalIsOpen, setCalModalIsOpen] = React.useState(false)

  LoginTrue = function LoginModalTrue() {
    setLoginModalOpen(true)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  NoticeTrue = function NoteiceModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(true)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  InformationTrue = function InformationModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(true)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  ChallengeTrue = function ChallengeModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(true)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  BoardTrue = function BoardModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(true)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  PushUpTrue = function PushUpModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(true)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  SitUpTrue = function SitUpModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(true)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  SquatTrue = function SquatModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(true)
    setSignupModalOpen(false)
    setCalModalIsOpen(false)
  }

  SignupTrue = function SignupModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(true)
    setCalModalIsOpen(false)
  }

  CalModalTrue = function SignupModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setCalModalIsOpen(true)
  }
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

        <InformationModal
          isModal={InformationModalIsOpen}
          setModal={setInformationModalOpen}
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

        <CalModal isModal={CalModalIsOpen} setModal={setCalModalIsOpen} />

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
