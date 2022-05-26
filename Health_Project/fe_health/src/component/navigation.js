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
  Logo,
} from "../image/index.js"

import styled from "styled-components"

import React, { useCallback } from "react"

// Modal
import LoginModal from "react-modal"
import NoticeModal from "react-modal"
import InformationModal from "react-modal"
import ChallengeModal from "react-modal"
import BoardModal from "react-modal"

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
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const Menubar = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 300px;
  height: 890px;
  background-color: #ffa887;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const MenuBtn = styled.button`
  width: 300px;
  height: 100px;
  background-color: #e47ae0;
  color: #fff;
  font-size: 30px;
  border-color: #333;
  font-family: cursive;
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

const Symbol = styled.img`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 3%;
  left: 15%;
`

const Modalcontent = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  width: 1350px;
  height: 890px;
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
const Text = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  font-size: 30px;
`
const handleClick = (e) => {
  //  e.preventDefault();
  console.log("asdfasdfasd")
}

const Navigation = () => {
  const [LoginModalIsOpen, setLoginModalOpen] = React.useState(false)
  const [NoticeModalIsOpen, setNoticeModalOpen] = React.useState(false)
  const [InformationModalIsOpen, setInformationModalOpen] =
    React.useState(false)
  const [ChallengeModalIsOpen, setChallengeModalOpen] = React.useState(false)
  const [BoardModalIsOpen, setBoardModalOpen] = React.useState(false)

  const [ID, setID] = React.useState("")
  const [PW, setPW] = React.useState("")

  const onChange = useCallback((e) => {
    setID(e.target.ID)
    setPW(e.target.PW)
  }, [])

  return (
    <>
      <NavigationStyle>
        <ThemeButton src={Light} onClick={handleClick} />
        <UserButton src={User} onClick={() => setLoginModalOpen(true)} />

        <LoginModal
          isOpen={LoginModalIsOpen}
          onRequestClose={() => setLoginModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "relative",
              width: "1610px",
              height: "850px",
              left: "2%",
              right: "10%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn src={Close} onClick={() => setLoginModalOpen(false)} />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                setLoginModalOpen(true)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(true)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(true)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(true)
                setBoardModalOpen(false)
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(true)
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
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
          </Modalcontent>
        </LoginModal>

        <NoticeModal
          isOpen={NoticeModalIsOpen}
          onRequestClose={() => setNoticeModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "relative",
              width: "1610px",
              height: "850px",
              left: "2%",
              right: "10%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn src={Close} onClick={() => setNoticeModalOpen(false)} />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                setLoginModalOpen(true)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(true)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(true)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(true)
                setBoardModalOpen(false)
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(true)
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <Text>NoticeModal</Text>
          </Modalcontent>
        </NoticeModal>

        <InformationModal
          isOpen={InformationModalIsOpen}
          onRequestClose={() => setInformationModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "relative",
              width: "1610px",
              height: "850px",
              left: "2%",
              right: "10%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn
            src={Close}
            onClick={() => setInformationModalOpen(false)}
          />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                setLoginModalOpen(true)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(true)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(true)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(true)
                setBoardModalOpen(false)
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(true)
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <Text>InformationModal</Text>
          </Modalcontent>
        </InformationModal>

        <ChallengeModal
          isOpen={ChallengeModalIsOpen}
          onRequestClose={() => setChallengeModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "relative",
              width: "1610px",
              height: "850px",
              left: "2%",
              right: "10%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn src={Close} onClick={() => setChallengeModalOpen(false)} />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                setLoginModalOpen(true)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(true)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(true)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(true)
                setBoardModalOpen(false)
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(true)
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <Text>ChallengeModal</Text>
          </Modalcontent>
        </ChallengeModal>

        <BoardModal
          isOpen={BoardModalIsOpen}
          onRequestClose={() => setBoardModalOpen(false)}
          ariaHideApp={false}
          style={{
            content: {
              position: "relative",
              width: "1610px",
              height: "850px",
              left: "2%",
              right: "10%",
              backgroundColor: "#7FFFD4",
            },
          }}
        >
          <Closebtn src={Close} onClick={() => setBoardModalOpen(false)} />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                setLoginModalOpen(true)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(true)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(true)
                setChallengeModalOpen(false)
                setBoardModalOpen(false)
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(true)
                setBoardModalOpen(false)
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                setLoginModalOpen(false)
                setNoticeModalOpen(false)
                setInformationModalOpen(false)
                setChallengeModalOpen(false)
                setBoardModalOpen(true)
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <Text>BoardModal</Text>
          </Modalcontent>
        </BoardModal>

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
