import React, { useState } from "react"
import styled from "styled-components"
import AlarmModal from "../../modal/StrengthPage/Alarm.js"
import HoverVideoPlayer from "react-hover-video-player"
import alarm from "../../../video/Strength/alarm.mp4"
import {
  ChallengeImg,
  AlarmTitle,
  AlarmThumbnail,
} from "../../../image/index.js"
import PausedOverlay from "./Video/Paused.js"
import LoadingOverlay from "./Video/Loading.js"
import { Timeline, Tween } from "react-gsap"

const Container = styled.div`
  width: 1700px;
  height: 410px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #dcdcdc;
`

const ImageContainer = styled.div`
  width: 750px;
  height: 350px;
  border-radius: 30px;
  position: absolute;
  left: -900px;
`

const TitleContainer = styled.div`
  width: 600px;
  height: 100px;
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  bottom: -100px;
  right: 150px;
  background-color: #46ffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const TitleImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

const TextContainer = styled.div`
  width: 600px;
  height: 230px;
  border-radius: 0px 0px 30px 30px;
  position: absolute;
  right: 150px;
  bottom: -330px;
  background-color: #47ff9c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 40px;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Text = styled.div`
  font-size: 30px;
  line-height: 2;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Btn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  font-family: "Jua", sans-serif;
  :hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`

const Alarm = () => {
  const [AlarmModalIsOpen, setAlarmModalOpen] = useState(false)

  return (
    <>
      <Container>
        <Timeline
          target={
            <ImageContainer>
              <HoverVideoPlayer
                videoSrc={alarm}
                videoStyle={{
                  width: "750px",
                  height: "350px",
                  borderRadius: "30px",
                }}
                pausedOverlay={<PausedOverlay image={AlarmThumbnail} />}
                loadingOverlay={<LoadingOverlay />}
              />
            </ImageContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, x: "1050px" }}
            duration={3}
          />
        </Timeline>

        <Timeline
          target={
            <TitleContainer>
              <TitleImage src={AlarmTitle} />
              <Title>Alarm</Title>
            </TitleContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, y: "-370px" }}
            duration={3}
          />
        </Timeline>

        <Timeline
          target={
            <TextContainer>
              <Text>
                ?????? ????????? ???????????? ???????????? ?????? ??? ????????? <br /> ????????? ???
                ????????????.
              </Text>
              <Btn onClick={() => setAlarmModalOpen(true)}>????????????</Btn>
            </TextContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, y: "-370px" }}
            duration={3}
          />
        </Timeline>
      </Container>
      <AlarmModal isModal={AlarmModalIsOpen} setModal={setAlarmModalOpen} />
    </>
  )
}

export default Alarm
