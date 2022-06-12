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

import React from "react"

// Modal
import LoginModal from "../modal/Login.js"
import NoticeModal from "../modal/Notice.js"
import InformationModal from "../modal/Information.js"
import ChallengeModal from "../modal/Challenge.js"
import BoardModal from "../modal/Board.js"
import PushUpModal from "../modal/Pushup.js"
import SitupModal from "../modal/Situp.js"
import SquatModal from "../modal/Squat.js"
import SignupModal from "../modal/Signup.js"

import ThemeSelector from "./themeSelector"

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

export let LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
  PushUpTrue,
  SitUpTrue,
  SquatTrue,
  SignupTrue

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
  }
  const { theme } = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  return (
    <>
      <NavigationStyle>
        <ThemeSelector />
        {!theme === "darkTheme"
          ? (console.log(theme),
            (<ThemeButton src={Light} onClick={() => dispatch(darkTheme())} />))
          : (console.log(theme),
            (
              <ThemeButton src={Light} onClick={() => dispatch(lightTheme())} />
            ))}

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
