import React from "react"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

import main_fisrt from "./video/main_fisrt.mp4"
import ReactFullpage from "@fullpage/react-fullpage"
import styled from "styled-components"

import calender_image from "./image/app/calender.jpg"
import Inbody_image from "./image/app/in_body.jpg"
import scheduling_image from "./image/app/scheduling.jpg"
import water_alarm_image from "./image/app/water_alarm.jpg"

import "./style.css"
import thumbs_up from "./image/icon/thumbs_up.png"


import TotalPage from "./component"


import {
  Container,
  Navigation_bar,
  SilentMoveTo,
  SilentMoveTo2,
  SilentMoveTo3,
  SilentMoveTo4,
  SilentMoveTo5,
  Swiper_button,
  btn,
  Swiper_phone,
  Swiper_slide,
  Swiper_prev,
  Swiper_next,
  ItemBox,
  Front1,
  Back1,
  Front2,
  Back2,
  Front3,
  Back3,
  Front4,
  Back4,
  Selecter1,
  Selecter2,
  Selecter3,
  Selecter4,
  Questions,
  Answer,
  Inquiry,
  Inquiry_btn,
} from "./component/style"

import Map from "./component/Map"

const Headdercss = styled.div`
  position:fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  right: 0;
  top: 0;
  height: 100% ;
  background: gray;
  z-index: 100;

  img{
    width: 50px;
    height: 50px;
  }

  img.attrs{
    src:${props => props.src}
  }

`



const PPP = () => {
  return (
    <>
      <Headdercss>
        <ul>
          <li data-menuanchor="section1">
            <a href="#firstPage">
              <img src={thumbs_up} />

            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="section2" >
            <a href="#secondPage">
              <img src={thumbs_up} />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="section3" >
            <a href="#thirdPage">
              <img src={thumbs_up} />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="section4" >
            <a href="#fouthPage">
              <img src={thumbs_up} />
            </a>
          </li>
        </ul>
      </Headdercss>
    </>
  )
}

//import { options, fullpage_api } from "fullpage.js/dist/fullpage.extensions.min"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

function MainSection(props) {
  return (
    <div className="section">
      <h3>Ready to begin you health?</h3>
      <p class="message">click on the button now</p>
      <video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </video>

    </div>
  )
}

function HealthKeyWordSection(props) {
  return (
    <div className="section">
      <Container>
        <Swiper_phone>
          <Swiper
            style={{
              height: "680px",
              width: "500px",
              position: "relative",
              left: "-80px",
              top: "-30px",
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <Swiper_slide>
                <img
                  src={Inbody_image}
                  alt="진단표 스캔"
                  width="300px"
                  height="520px"
                ></img>
              </Swiper_slide>
            </SwiperSlide>
            <SwiperSlide>
              <Swiper_slide>
                <img
                  src={calender_image}
                  alt="캘린더"
                  width="300px"
                  height="520px"
                ></img>
              </Swiper_slide>
            </SwiperSlide>
            <SwiperSlide>
              <Swiper_slide>
                <img
                  src={scheduling_image}
                  alt="운동 스케줄링"
                  width="300px"
                  height="520px"
                ></img>
              </Swiper_slide>
            </SwiperSlide>
            <SwiperSlide>
              <Swiper_slide>
                <img
                  src={water_alarm_image}
                  alt="물 알람"
                  width="300px"
                  height="520px"
                ></img>
              </Swiper_slide>
            </SwiperSlide>
          </Swiper>
        </Swiper_phone>

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


    </div>
  )
}

function TotalStrengthSection(props) {
  return (
    <div className="section">
      <Container>
        <h3>헬스장 찾기</h3>

        <Map></Map>
      </Container>

    </div>
  )
}

function ReviewSection(props) {
  return (
    <div className="section">


    </div>
  )
}

function QuestionSection(props) {
  return (
    <div className="section">
      <Container>
        <h3>자주 묻는 질문</h3>

        <Swiper
          style={{ height: "450px" }}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <Questions>로그인은 어디서 하나요?</Questions>
            <Answer>오른쪽 상단 내정보 아이콘에서 로그인 가능 합니다.</Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>내 정보는 어디서 확인할 수 있나요?</Questions>
            <Answer>오른쪽 상단 내정보 아이콘에서 확인 가능 합니다.</Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>캘린더 수정은 어떻게 하나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 캘린더 탭 클릭하면 수정 가능 합니다.
            </Answer>
          </SwiperSlide>

          <SwiperSlide>
            <Questions>공지사항은 어디에 있나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 공지사항 확인 가능 합니다.
            </Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>챌린지 참여는 어떻게 하나요?</Questions>
            <Answer>
              오른쪽 상단 내정보 아이콘에서 챌린지 참여 가능 합니다.
            </Answer>
          </SwiperSlide>
          <SwiperSlide>
            <Questions>이 웹 사이트에서는 무엇을 제공하나요?</Questions>
            <Answer>
              저희 웹 사이트에서는 건강 및 헬스 관련 정보들을 제공 합니다.
            </Answer>
          </SwiperSlide>
        </Swiper>

        <Inquiry>
          자주 묻는 질문 외에 다른 질문을 문의 하고 싶다면 아래 버튼을 클릭하여
          관리자에게 직접 문의 해주세요.
        </Inquiry>
        <Inquiry_btn>관리자에게 문의</Inquiry_btn>
      </Container>


    </div>
  )
}

function Tnavigation(fullpageApi) {
  return (
    <button
      onClick={() => fullpageApi.fullpageApi.moveSectionDown()}
      id="silentMoveTo"
    >
      Click
    </button>
  )
}

// const TotalPage = (fullpageApi) => {
//   return (
//     <>
//       <MainSection content="Slide down!" />
//       <HealthKeyWordSection content="HealthKeyWordSection" />
//       <TotalStrengthSection content="TotalStrengthSection" />
//       <ReviewSection content="ReviewSection" />
//       <QuestionSection content="QuestionSection" />
//     </>
//   )
// }

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
  "sixthPage",
  "seventhPage",
]

const FullpageWrapper = () => (
  <>
    <PPP />
    <ReactFullpage
      menu="#menu"
      //navigation
      //navigationTooltips={anchors}
      //showActiveTooltip="true"
      slidesNavigation="true"
      slidesNavPosition="bottom"
      anchors={anchors}
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


          <TotalPage fullpageApi={fullpageApi} />

        )
      }} />
  </>
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
