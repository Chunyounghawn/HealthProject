import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import imm from "./image/asas.jpg"

import ReactFullpage from "@fullpage/react-fullpage";

import "./style.css";


class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
        <img src={imm}  alt='bb'/>
          {/* <video id="myVideo" loop muted playsInline data-autoplay >
            <source src="./video/aa.mp4" type="video/mp4"/>
          </video> */}
          <h2>hihihihihi</h2>
      </div>

    );
  }
}

const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection content={"Slide down!"} />
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </div>
      );
    }}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <FullpageWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
//testdfdf
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

