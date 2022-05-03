import React from "react"
import main_fisrt from "./video/main_fisrt.mp4"
import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"

import calender_image from "./image/calender.jpg"
import Inbody_image from "./image/in-body.jpg"
import scheduling_image from "./image/scheduling.jpg"
import water_alarm_image from "./image/water-alarm.jpg"

import "./style.css"
import "./css/section6.css"
import "./css/section7.css"
import "./js/section6.js"

import { Swiper, SwiperSlide } from "swiper/react" // basic

//import { options, fullpage_api } from "fullpage.js/dist/fullpage.extensions.min"

// section6 style components
const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
`

const Swiper_phone = styled.div`
  width: 350px;
  height: 600px;
  background-color: yellow;
  border: 4px solid #333;
  border-radius: 10%;
  position: absolute;
  top: 200px;
  left: 250px;
`

const Swiper_slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const Swiper_prev = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  position: absolute;
  left: 160px;
  top: 470px;
  &: hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

const Swiper_next = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  position: absolute;
  left: 650px;
  top: 470px;
  &: hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #333;
  background-color: purple;
  border-radius: 50%;
  font-size: 30px;
`

const Front1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  transform: rotateY(0deg);
`

const Back1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  font-size: 15px;
  background-color: #333;
  color: #fff;
  transform: rotateY(-180deg);
`

const Front2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  transform: rotateY(0deg);
`

const Back2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Front3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  transform: rotateY(0deg);
`

const Back3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Front4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 30px;
  transform: rotateY(0deg);
`

const Back4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

// Selecter가 hover 되면 Selecter는 180도 회전하면 안되고 Front & Back 이 180도 회전 되야됨
const Selecter1 = styled.div`
  &: hover ${Front1} {
    transform: rotateY(180deg);
  }
  &: hover ${Back1} {
    transform: rotateY(0deg);
  }
`

const Selecter2 = styled.div`
  &: hover ${Front2} {
    transform: rotateY(180deg);
  }
  &: hover ${Back2} {
    transform: rotateY(0deg);
  }
`

const Selecter3 = styled.div`
  &: hover ${Front3} {
    transform: rotateY(180deg);
  }
  &: hover ${Back3} {
    transform: rotateY(0deg);
  }
`

const Selecter4 = styled.div`
  &: hover ${Front4} {
    transform: rotateY(180deg);
  }
  &: hover ${Back4} {
    transform: rotateY(0deg);
  }
`

// section7 style components

function MainSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
      <video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </video>

      <div class="navigation"></div>
    </div>
  )
}

function HealthKeyWordSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>

      <div class="navigation"></div>
    </div>
  )
}

function TotalStrengthSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>

      <div class="navigation"></div>
    </div>
  )
}

function ReviewSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>

      <div class="navigation"></div>
    </div>
  )
}

function QuestionSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>

      <div class="navigation"></div>
    </div>
  )
}

function LocationSection(props) {
  return (
    <div className="section">
      <Container>
        <Swiper_phone>
          <Swiper_slide>
            <img
              src={Inbody_image}
              alt="진단표 스캔"
              width="300px"
              height="520px"
            ></img>
          </Swiper_slide>
        </Swiper_phone>

        <Swiper_prev>
          <div class="material-icons">arrow_back_ios</div>
        </Swiper_prev>

        <Swiper_next>
          <div class="material-icons">arrow_forward_ios</div>
        </Swiper_next>

        <Selecter1>
          <Front1>진단표 스캔</Front1>
          <Back1>
            카메라로 진단표를 스캔하여 나의 인다비 정보를 확인할 수 있습니다.
          </Back1>
        </Selecter1>

        <Selecter2>
          <Front2>물 알람</Front2>
          <Back2>
            알람 기능을 이용하여 사용자가 직접 물 알람을 설정할 수 있습니다.
          </Back2>
        </Selecter2>

        <Selecter3>
          <Front3>운동 스케줄링</Front3>
          <Back3>사용자가 직접 운동 스케줄을 추가 및 삭제할 수 있습니다.</Back3>
        </Selecter3>

        <Selecter4>
          <Front4>캘린더</Front4>
          <Back4>
            사용자는 캘린더를 통해 해당 날짜의 운동 달성량을 파악할 수 있습니다.
          </Back4>
        </Selecter4>
      </Container>

      <div class="navigation"></div>
    </div>
  )
}

function AppStrengthSection(props) {
  return (
    <div className="section">
      <div class="container">
        <h3>자주 묻는 질문</h3>

        <div class="information1">
          <div class="questions">로그인은 어디서 하나요?</div>
          <div class="answer">
            오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.
          </div>
        </div>

        <div class="information2">
          <div class="questions">내 정보는 어디서 확인할 수 있나요?</div>
          <div class="answer">
            오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.
          </div>
        </div>

        <div class="information3">
          <div class="questions">캘린더 수정은 어떻게 하나요?</div>
          <div class="answer">
            오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.
          </div>
        </div>

        <div class="swiper-prev2">
          <div class="material-icons">arrow_back_ios</div>
        </div>

        <div class="swiper-next2">
          <div class="material-icons">arrow_forward_ios</div>
        </div>

        <div class="admin">
          <div class="inquiry">
            자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을
            클릭하여 관리자에게 직접 문의 해주세요.
          </div>
          <div class="btn">관리자에게 문의</div>
        </div>
      </div>

      <div class="navigation"></div>
    </div>
  )
}

function Tnavigation(fullpageApi) {
  return (
    <button onClick={() => fullpageApi.moveSectionDown()} id="silentMoveTo">
      Click
    </button>
  )
}

const TotalPage = (fullpageApi) => {
  return (
    <>
      <MainSection content="Slide down!" />
      <HealthKeyWordSection content="HealthKeyWordSection" />
      <TotalStrengthSection content="TotalStrengthSection" />
      <ReviewSection content="ReviewSection" />
      <QuestionSection content="QuestionSection" />
      <LocationSection content="LocationSection" />
      <AppStrengthSection content="AppStrengthSection" />
    </>
  )
}

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourPage",
  "fifthPage",
  "sixthPage",
  "seventhPage",
]

const FullpageWrapper = () => (
  <ReactFullpage
    menu="#menu"
    //navigation
    //navigationTooltips={anchors}
    //showActiveTooltip="true"
    slidesNavigation="true"
    slidesNavPosition="bottom"
    sectionsColor={[
      "#282c34",
      "#ff5f45",
      "#0798ec",
      "#0798ec",
      "#0798ec",
      "#0798ec",
      "#0798ec",
    ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction })
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console

      return (
        <div>
          <button onClick={() => fullpageApi.moveTo(6)} id="silentMoveTo">
            {" "}
            Click{" "}
          </button>

          <TotalPage fullpageApi={fullpageApi} />
        </div>
      )
    }}
  />
)

function App() {
  return <FullpageWrapper />
  //   // message 초기값 설정 (""로 설정)
  //   const [message, setMessage] = useState("");

  //   // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행
  //   useEffect(() => {
  //     // fetch(url, options) : Http 요청 함수
  //     fetch("/api/getRequest")
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  //   }, [])
  // //d
  //   return (
  //     <div >
  //         <p>
  //           돌아온거 : {message}
  //         </p>
  //     </div>
  //   );
}

export default App
