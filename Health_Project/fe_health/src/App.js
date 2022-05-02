import React from "react"
import main_fisrt from "./video/main_fisrt.mp4"
import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"

import calender_image from "./image/calender.jpg";
import Inbody_image from "./image/in-body.jpg";
import scheduling_image from "./image/scheduling.jpg";
import water_alarm_image from "./image/water-alarm.jpg";

import "./style.css"
import "./css/section6.css"
import "./css/section7.css"
import "./js/section6.js";

import { Swiper, SwiperSlide } from "swiper/react"; // basic

//import { options, fullpage_api } from "fullpage.js/dist/fullpage.extensions.min"

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

      <div class="container">        
        <div class="swiper-container">
          <div class="swiper-phone">
            <div class="swiper-slide">
                <img src={Inbody_image} alt="진단표 스캔" width="300px" height="520px"></img>
            </div>
          </div>
        </div>

        <div class="swiper-prev">
          <div class="material-icons">arrow_back_ios</div>
        </div>

        <div class="swiper-next">
          <div class="material-icons">arrow_forward_ios</div>
        </div>

        <div class="item1"> 
          <div class="front">진단표 스캔</div>
          <div class="back">카메라로 진단표를 스캔하여 나의 인다비 정보를 확인할 수 있습니다.</div>
        </div>

        <div class="item2"> 
          <div class="front">물 알람</div>
          <div class="back">알람 기능을 이용하여 사용자가 직접 물 알람을 설정할 수 있습니다.</div>
        </div>

        <div class="item3"> 
          <div class="front">운동 스케줄링</div>
          <div class="back">사용자가 직접 운동 스케줄을 추가 및 삭제할 수 있습니다.</div>
        </div>

        <div class="item4"> 
          <div class="front">캘린더</div>
          <div class="back">사용자는 캘린더를 통해 해당 날짜의 운동 달성량을 파악할 수 있습니다.</div>
        </div>
      </div>

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
          <div class="answer">오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.</div>
        </div>

        <div class="information2">
          <div class="questions">내 정보는 어디서 확인할 수 있나요?</div>
          <div class="answer">오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.</div>
        </div>

        <div class="information3">
          <div class="questions">캘린더 수정은 어떻게 하나요?</div>
          <div class="answer">오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.</div>
        </div>

        <div class="swiper-prev2">
          <div class="material-icons">arrow_back_ios</div>
        </div>

        <div class="swiper-next2">
          <div class="material-icons">arrow_forward_ios</div>
        </div>

        <div class="admin">
         <div class="inquiry">자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을 클릭하여 관리자에게 직접 문의 해주세요.</div>
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
          <button onClick={() => 
          fullpageApi.moveSectionDown()} 
          id="silentMoveTo"> Click </button>

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
