import React, { useEffect, useState } from "react"

import ReactFullpage from "@fullpage/react-fullpage"

import TotalPage from "./component"
import Navigation from "./component/navigation"

import { ThemeProvider } from "styled-components"

import { darkTheme, lightTheme } from './theme'

import { useSelector } from "react-redux"


import axios from 'axios';



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
  const modal = useSelector((state) => state.modal)

  const [message, setMessage] = useState('df');

  const responseHandler = ({ data }) => {
    setMessage(data);
    return data;
  };

  const errorHandler = ({ message }) => {
    setMessage(message);
    return message;
  };

  const onNonCorsHeaderHandler = () => {
    axios.get('http://localhost:8080/not-cors')
      .then(responseHandler)
      .catch(errorHandler);
  };

  const onCorsHeaderHandler = () => {
    axios.get('http://localhost:8080/cors').then(responseHandler);
  };

  const onNonProxyHandler = () => {
    axios.get('/not-proxy')
      .then(responseHandler)
      .catch(errorHandler);
  };

  const onProxyHandler = () => {
    axios.get('/proxy').then(responseHandler);
  };

  //-------

  // const form = new FormData();
  // form.append('name', 'veneas');
  // form.append('food', 'cake');

  // useEffect(() => {
  //   axios({
  //     url: '/test',
  //     method: 'post',
  //     data: form
  //   })
  //     .then(function a(response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (

    // <><p>
    //   {message}
    // </p><div>
    //     <button onClick={onNonCorsHeaderHandler}>non cors header</button>
    //     <button onClick={onCorsHeaderHandler}>cors header</button>
    //     <button onClick={onNonProxyHandler}>nonProxy</button>
    //     <button onClick={onProxyHandler}>proxy</button>
    //   </div>
    <ThemeProvider theme={theme.darkmode === true ? darkTheme : lightTheme}>
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
