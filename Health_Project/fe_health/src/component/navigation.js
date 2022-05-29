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
  PushUp,
  SitUp,
  Squat,
  Trophy,
} from "../image/index.js"

import styled from "styled-components"

import React, { useCallback } from "react"

// Modal
import LoginModal from "react-modal"
import NoticeModal from "react-modal"
import InformationModal from "react-modal"
import ChallengeModal from "react-modal"
import BoardModal from "react-modal"
import PushUpModal from "react-modal"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

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

const ChallengeSlide = styled.div`
  width: 550px;
  height: 800px;
  position: absolute;
  left: 50px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const ChallengeTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: fantasy;
  font-weight: bold;
  position: absolute;
  top: 80px;
`

const ChallengeImage = styled.img`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 150px;
`

const ChallengeBtn = styled(Btn)`
  bottom: 100px;
`

const MissionTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 30px;
`

const PushUpBg = styled.div`
  width: 1250px;
  height: 800px;
  position: absolute;
  left: 50px;
  top: 70px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const PushUpBg2 = styled.div`
  width: 1250px;
  height: 600px;
  position: absolute;
  top: 100px;
  background-color: #ffa0ff;
`

const PushUpBg3 = styled.div`
  width: 400px;
  height: 500px;
  position: absolute;
  left: 30px;
  top: 50px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TrophyImage = styled.img`
  width: 300px;
  height: 400px;
`

const Mission = styled.div`
  width: 750px;
  height: 100px;
  position: absolute;
  right: 30px;
  border-radius: 30px;
  font-size: 30px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Mission1 = styled(Mission)`
  top: 50px;
`

const Mission2 = styled(Mission)`
  top: 180px;
`

const Mission3 = styled(Mission)`
  top: 310px;
`

const Mission4 = styled(Mission)`
  top: 440px;
`

const MissionBtn = styled.div`
  width: 100px;
  height: 40px;
  position: absolute;
  right: 30px;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

const MissionSuccessBtn = styled(MissionBtn)`
  background-color: #a0afff;
`
const MissionFailBtn = styled(MissionBtn)`
  background-color: #cd1039;
`

const MissionResult = styled.div`
  width: 300px;
  height: 60px;
  position: absolute;
  right: 50px;
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const MissionSuccess = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  background-color: #a0afff;
  border-radius: 50px;
`

const MissionSuccessText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 50px;
`

const MissionFail = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 160px;
  background-color: #cd1039;
  border-radius: 50px;
`

const MissionFailText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 200px;
`

const handleClick = (e) => {
  //  e.preventDefault();
  console.log("asdfasdfasd")
}

const Navigations = () => {
  const [LoginModalIsOpen, setLoginModalOpen] = React.useState(false)
  const [NoticeModalIsOpen, setNoticeModalOpen] = React.useState(false)
  const [InformationModalIsOpen, setInformationModalOpen] =
    React.useState(false)
  const [ChallengeModalIsOpen, setChallengeModalOpen] = React.useState(false)
  const [BoardModalIsOpen, setBoardModalOpen] = React.useState(false)

  const [PushUpModalIsOpen, setPushUpModalOpen] = React.useState(false)

  const [ID, setID] = React.useState("")
  const [PW, setPW] = React.useState("")

  const onChange = useCallback((e) => {
    setID(e.target.ID)
    setPW(e.target.PW)
  }, [])

  function LoginModalTrue() {
    setLoginModalOpen(true)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
  }

  function NoteiceModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(true)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
  }

  function InformationModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(true)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
  }

  function ChallengeModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(true)
    setBoardModalOpen(false)
    setPushUpModalOpen(false)
  }

  function BoardModalTrue() {
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(true)
    setPushUpModalOpen(false)
  }

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
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
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
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
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
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
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
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <Swiper
              style={{
                width: "1300px",
                height: "800px",
                position: "relative",
                top: "70px",
              }}
              spaceBetween={5}
              slidesPerView={2}
              navigation
              loop={true}
            >
              <SwiperSlide>
                <ChallengeSlide>
                  <ChallengeTitle>팔굽혀피기</ChallengeTitle>
                  <ChallengeImage src={PushUp} />
                  <ChallengeBtn
                    onClick={() => {
                      setChallengeModalOpen(false)
                      setPushUpModalOpen(true)
                    }}
                  >
                    현황 보기
                  </ChallengeBtn>
                </ChallengeSlide>
              </SwiperSlide>

              <SwiperSlide>
                <ChallengeSlide>
                  <ChallengeTitle>윗몸일으키기</ChallengeTitle>
                  <ChallengeImage src={SitUp} />
                  <ChallengeBtn>현황 보기</ChallengeBtn>
                </ChallengeSlide>
              </SwiperSlide>

              <SwiperSlide>
                <ChallengeSlide>
                  <ChallengeTitle>스쿼트</ChallengeTitle>
                  <ChallengeImage src={Squat} />
                  <ChallengeBtn>현황 보기</ChallengeBtn>
                </ChallengeSlide>
              </SwiperSlide>
            </Swiper>
          </Modalcontent>
        </ChallengeModal>

        <PushUpModal
          isOpen={PushUpModalIsOpen}
          onRequestClose={() => setPushUpModalOpen(false)}
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
          <Closebtn src={Close} onClick={() => setPushUpModalOpen(false)} />

          <Menubar>
            <Symbol src={Logo} />
            <MenuBtn1
              onClick={() => {
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
              }}
            >
              소통 게시판
            </MenuBtn5>
          </Menubar>

          <Modalcontent>
            <PushUpBg>
              <MissionTitle>Mission</MissionTitle>
              <PushUpBg2>
                <PushUpBg3>
                  <TrophyImage src={Trophy} />
                </PushUpBg3>
                <Mission1>
                  팔굽혀피기 연속 150개
                  <MissionSuccessBtn>성공</MissionSuccessBtn>
                </Mission1>
                <Mission2>
                  팔굽혀피기 30분
                  <MissionFailBtn>실패</MissionFailBtn>
                </Mission2>
                <Mission3>
                  팔굽혀피기 20분
                  <MissionSuccessBtn>성공</MissionSuccessBtn>
                </Mission3>
                <Mission4>
                  팔굽혀피기 연속 300개
                  <MissionFailBtn>실패</MissionFailBtn>
                </Mission4>
              </PushUpBg2>
              <MissionResult>
                <MissionSuccess />
                <MissionSuccessText>성공: 2개</MissionSuccessText>
                <MissionFail />
                <MissionFailText>실패: 2개</MissionFailText>
              </MissionResult>
            </PushUpBg>
          </Modalcontent>
        </PushUpModal>

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
                LoginModalTrue()
              }}
            >
              로그인
            </MenuBtn1>
            <MenuBtn2
              onClick={() => {
                NoteiceModalTrue()
              }}
            >
              공지사항
            </MenuBtn2>
            <MenuBtn3
              onClick={() => {
                InformationModalTrue()
              }}
            >
              내정보
            </MenuBtn3>
            <MenuBtn4
              onClick={() => {
                ChallengeModalTrue()
              }}
            >
              챌린지
            </MenuBtn4>
            <MenuBtn5
              onClick={() => {
                BoardModalTrue()
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

export default Navigations
