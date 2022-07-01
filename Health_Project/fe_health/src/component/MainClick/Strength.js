import React from "react"
import { Timeline, Tween } from "react-gsap"
import styled from "styled-components"

const Strengths = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #0a6eff;
  background-color: #ffb2af;
`
const Inbody = styled(Strengths)`
  top: 0px;
  left: 10px;
`

const Alarm = styled(Strengths)`
  bottom: 0px;
  left: 190px;
`

const Training = styled(Strengths)`
  top: 0px;
  right: 190px;
`

const Calendar = styled(Strengths)`
  bottom: 0px;
  right: 10px;
`

const Strength = () => {
  return (
    <>
      <Timeline target={<Inbody>진단표 스캔</Inbody>}>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ y: "100px" }} duration={2} />
      </Timeline>

      <Timeline target={<Alarm>물 알람</Alarm>}>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ y: "-100px" }} duration={2} />
      </Timeline>

      <Timeline target={<Training>홈 트레이닝</Training>}>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ y: "100px" }} duration={2} />
      </Timeline>

      <Timeline target={<Calendar>캘린더</Calendar>}>
        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
        <Tween to={{ y: "-100px" }} duration={2} />
      </Timeline>
    </>
  )
}

export default Strength
