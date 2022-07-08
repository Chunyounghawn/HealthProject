import React, { useState } from "react"
import styled from "styled-components"
import CalendarModal from "../../modal/StrengthPage/Calendar/Calendar.js"
import CalInModal from "../../modal/StrengthPage/Calendar/CalInModal.js"
import HoverVideoPlayer from "react-hover-video-player"
import calendar from "../../../video/Strength/calendar.mp4"
import {
  ChallengeImg,
  CalendarTitle,
  CalendarThumbnail,
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

const TitleImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
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
  font-family: "Jua", sans-serif;
  color: #333;
  :hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`

export let CalInModalTrue

const Calendar = () => {
  const [CalendarModalIsOpen, setCalendarModalOpen] = useState(false)
  const [CalInModalIsOpen, setCalInModalIsOpen] = React.useState(false)

  CalInModalTrue = function CalInModalTrue() {
    setCalendarModalOpen(true)
    setCalInModalIsOpen(true)
  }

  return (
    <>
      <Container>
        <Timeline
          target={
            <ImageContainer>
              <HoverVideoPlayer
                videoSrc={calendar}
                videoStyle={{
                  width: "750px",
                  height: "350px",
                  borderRadius: "30px",
                }}
                pausedOverlay={<PausedOverlay image={CalendarThumbnail} />}
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
              <TitleImage src={CalendarTitle} />
              <Title>Calendar</Title>
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
                사용자는 캘린더를 통해 해당 날짜의 운동 달성량을 파악할 수
                있습니다.
              </Text>
              <Btn onClick={() => setCalendarModalOpen(true)}>바로가기</Btn>
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

      <CalendarModal
        isModal={CalendarModalIsOpen}
        setModal={setCalendarModalOpen}
      />

      <CalInModal isModal={CalInModalIsOpen} setModal={setCalInModalIsOpen} />
    </>
  )
}

export default Calendar
