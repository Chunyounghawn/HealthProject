import React, { useState, useEffect } from "react"

import ReactFullpage from "@fullpage/react-fullpage"

import TotalPage from "./component"
import Navigation from "./component/navigation"

import { ThemeProvider, createGlobalStyle } from "styled-components"

import { darkTheme, lightTheme } from './theme'

import { useDispatch, useSelector } from "react-redux"


import axios from 'axios';

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
        licenseKey='1EB53BF6-00984973-A88B8092-A6220857'
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
  const [users, setUsers] = useState(null);   //결과값
  const [loading, setLoading] = useState(false); // 로딩되는지 여부
  const [error, setError] = useState(null); //에러

  const fetchUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true); //로딩이 시작됨
      const response = await axios.get('https://http://localhost:3000/test/');
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };



  useEffect(() => {

    fetchUsers();
  }, [])


  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러 발생!!</div>
  if (!users) return null;  //users값이 유효하지 않는 경우



  return (
    <>

      <h1>{users}</h1>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>

    // <ThemeProvider theme={theme.darkmode === true ? darkTheme : lightTheme}>

    //   <FullpageWrapper />

    // </ThemeProvider>
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
