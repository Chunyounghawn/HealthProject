import React from "react"
import main_fisrt from "./video/main_fisrt.mp4"
import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"

import calender_image from "./image/calender.jpg"
import Inbody_image from "./image/in-body.jpg"
import scheduling_image from "./image/scheduling.jpg"
import water_alarm_image from "./image/water-alarm.jpg"

import "./style.css"

// Component-Basic
import Container from "./component/Container"
import Navigation_bar from "./component/Navigation_bar"
import SilentMoveTo from "./component/SilentMoveTo"
import SilentMoveTo2 from "./component/SilentMoveTo2"
import SilentMoveTo3 from "./component/SilentMoveTo3"
import SilentMoveTo4 from "./component/SilentMoveTo4"
import SilentMoveTo5 from "./component/SilentMoveTo5"
import Swiper_button from "./component/Swiper_button"
import btn from "./component/btn"

// Component-Section2
import Swiper_phone from "./component/Swiper_phone"
import Swiper_slide from "./component/Swiper_slide"
import Swiper_prev from "./component/Swiper_prev"
import Swiper_next from "./component/Swiper_next"
import ItemBox from "./component/ItemBox"
import Front1 from "./component/Front1"
import Back1 from "./component/Back1"
import Front2 from "./component/Front2"
import Back2 from "./component/Back2"
import Front3 from "./component/Front3"
import Back3 from "./component/Back3"
import Front4 from "./component/Front4"
import Back4 from "./component/Back4"
import Selecter1 from "./component/Selecter1"
import Selecter2 from "./component/Selecter2"
import Selecter3 from "./component/Selecter3"
import Selecter4 from "./component/Selecter4"

// Component-Section5
import Information_Box from "./component/Information_Box"
import Information1 from "./component/Information1"
import Information2 from "./component/Information2"
import Information3 from "./component/Information3"
import Swiper_next2 from "./component/Swiper_next2"
import Swiper_prev2 from "./component/Swiper_prev2"
import Questions from "./component/Questions"
import Answer from "./component/Answer"
import Inquiry from "./component/Inquiry"
import Inquiry_btn from "./component/Inquiry_btn"

import { Swiper, SwiperSlide } from "swiper/react" // basic

//import { options, fullpage_api } from "fullpage.js/dist/fullpage.extensions.min"

function MainSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
      <video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </video>

      <Navigation_bar></Navigation_bar>
    </div>
  )
}

function HealthKeyWordSection(props) {
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

      <Navigation_bar>
        <SilentMoveTo2></SilentMoveTo2>
      </Navigation_bar>
    </div>
  )
}

function TotalStrengthSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
      <Navigation_bar></Navigation_bar>
    </div>
  )
}

function ReviewSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>

      <Navigation_bar></Navigation_bar>
    </div>
  )
}

function QuestionSection(props) {
  return (
    <div className="section">
      <Container>
        <h3>자주 묻는 질문</h3>

        <Information1>
          <Questions>로그인은 어디서 하나요?</Questions>
          <Answer>오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.</Answer>
        </Information1>

        <Information2>
          <Questions>내 정보는 어디서 확인할 수 있나요?</Questions>
          <Answer>오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.</Answer>
        </Information2>

        <Information3>
          <Questions>캘린더 수정은 어떻게 하나요?</Questions>
          <Answer>
            오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.
          </Answer>
        </Information3>

        <Swiper_prev2>
          <div class="material-icons">arrow_back_ios</div>
        </Swiper_prev2>

        <Swiper_next2>
          <div class="material-icons">arrow_forward_ios</div>
        </Swiper_next2>

        <Inquiry>
          자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을 클릭하여
          관리자에게 직접 문의 해주세요.
        </Inquiry>
        <Inquiry_btn>관리자에게 문의</Inquiry_btn>
      </Container>

      <Navigation_bar></Navigation_bar>
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
          <button onClick={() => fullpageApi.moveTo(2)}>
            <SilentMoveTo2>Section2</SilentMoveTo2>
          </button>

          <button onClick={() => fullpageApi.moveTo(3)}>
            <SilentMoveTo3>Section3</SilentMoveTo3>
          </button>

          <button onClick={() => fullpageApi.moveTo(4)}>
            <SilentMoveTo4>Section4</SilentMoveTo4>
          </button>

          <button onClick={() => fullpageApi.moveTo(5)}>
            <SilentMoveTo5>Section5</SilentMoveTo5>
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
