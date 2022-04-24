import React from "react"
import main_fisrt from "./video/main_fisrt.mp4"

import ReactFullpage from "@fullpage/react-fullpage"

import styled from "styled-components"

import "./style.css"

function MainSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
      <video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </video>
    </div>
  )
}

function HealthKeyWordSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function TotalStrengthSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function ReviewSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function QuestionSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function LocationSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function AppStrengthSection(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  )
}

function Cnavigation() {
  return (
    <div id="fullpage">
      <ul id="menu">
        <li data-anchor="firstPage">
          <a href="#firstPage">First slide</a>
        </li>
        <li data-anchor="secondPage">
          <a href="#secondPage">Second slide</a>
        </li>
        <li data-anchor="thirdPage">
          <a href="#thirdPage">Third slide</a>
        </li>
      </ul>
    </div>
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
    navigation
    navigationTooltips={anchors}
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
          <MainSection content="Slide down!" />
          <HealthKeyWordSection content="HealthKeyWordSection" />
          <TotalStrengthSection content="TotalStrengthSection" />
          <ReviewSection content="ReviewSection" />
          <QuestionSection content="QuestionSection" />
          <LocationSection content="LocationSection" />
          <AppStrengthSection content="AppStrengthSection" />
          <Cnavigation />
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
