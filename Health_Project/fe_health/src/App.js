import React, { useState } from "react"

import ReactFullpage from "@fullpage/react-fullpage"

import TotalPage from "./component"
import Navigation from "./component/navigation"

import { ThemeProvider, createGlobalStyle } from "styled-components"

import { darkTheme, lightTheme } from './theme'

import { useDispatch, useSelector } from "react-redux"


// export const backgroundColor = theme("theme", {
//   light: "#fff",
//   dark: "#2d2d2d"
// })

// export const textColor = theme("theme", {
//   light: "#fff",
//   dark: "#2d2d2d"
// })


const anchors = [
  "MainPage",
  "StrengthPage",
  "ReviewPage",
  "MapPage",
  "QuestionPage",
]



const FullpageWrapper = () => {
  const theme = useSelector(state => state.theme);

  return (
    <>
      <Navigation />
      <ReactFullpage
        slidesNavigation="true"
        slidesNavPosition="bottom"
        anchors={anchors}
        licenseKey='4E25228B-7C8B4585-A791A885-52CF92B7'
        sectionsColor={[
          `black`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`
        ]}
        onLeave={(origin, destination, direction) => {
          //console.log("onLeave event", { origin, destination, direction })

        }}
        render={({ state, fullpageApi }) => {
          //console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console

          return <TotalPage fullpageApi={fullpageApi} />
        }}
      />
    </>)

}


function App() {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  console.log("qfqfq");
  console.log(theme.darkmode);

  return (

    <ThemeProvider theme={theme.darkmode === true ? lightTheme : darkTheme}>

      <FullpageWrapper />

    </ThemeProvider>
  )
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
