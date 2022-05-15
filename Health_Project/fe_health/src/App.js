import React from "react"

import ReactFullpage from "@fullpage/react-fullpage"

import TotalPage from "./component"
import Navigation from "./component/navigation"

const anchors = [
  "MainPage",
  "StrengthPage",
  "ReviewPage",
  "MapPage",
  "QuestionPage",
]

const FullpageWrapper = () => (
  <>
    <Navigation />
    <ReactFullpage
      slidesNavigation="true"
      slidesNavPosition="bottom"
      anchors={anchors}
      sectionsColor={["#E3E2B4", "#E3E2B4", "#E3E2B4", "#E3E2B4", "#E3E2B4"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction })
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console

        return <TotalPage fullpageApi={fullpageApi} />
      }}
    />
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
