import styled from "styled-components"
import main_fisrt from "../../video/main_fisrt.mp4"

const Message = styled.div`
 margin-top: 50px;
  font-size: 40px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

const MainTitle = styled.div`
font-size: 5em;
  text-align: center;
  margin-top: -100px;
  color: #fff;
  font-weight: 700;
`

const Video = styled.video`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 1740px;
  height: 100%;
  background-size: 0% 0%;
  background-color: pink; /* in case the video doesn't fit the whole page*/
  background-image: "./video/main_fisrt.mp4";
  background-position: center center;
  /*background-size: contain;*/
  object-fit: cover; /*cover video background */
  opacity: 0.2;
`

function MainSection() {
  return (
    <div className="section">
      <MainTitle>Ready to begin you health?</MainTitle>
      <Message>click on the button now</Message>
      <Video id="myVideo" loop muted data-autoplay>
        <source src={main_fisrt} type="video/mp4" />
      </Video>

    </div>
  )
}

export default MainSection