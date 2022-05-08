import styled from "styled-components"
import main_fisrt from "../../video/main_fisrt.mp4"

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
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

const MainTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  font-size: 80px;
  text-align: center;
  color: #fff;
  font-weight: 700;
`

const Message = styled.div`
  position: absolute;
  top: 45%;
  left: 30%;
  font-size: 60px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

const Main_btn = styled.div`
  width: 150px;
  height: 40px;
  position: absolute;
  top: 60%;
  left: 45%;
  background-color: #333;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`
function MainSection() {
  return (
    <div className="section">
      <Container>
        <MainTitle>Ready to begin you health?</MainTitle>
        <Message>click on the button now</Message>
        <Video id="myVideo" loop muted data-autoplay>
          <source src={main_fisrt} type="video/mp4" />
        </Video>
        <Main_btn>Click</Main_btn>
      </Container>
    </div>
  )
}

export default MainSection
