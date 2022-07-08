import React from "react"
import styled from "styled-components"

// modal
import InBody from "./Strength/Inbody.js"
import Alarm from "./Strength/Alarm.js"
import Training from "./Strength/Training.js"
import Calendar from "./Strength/Calendar.js"

const Container = styled.div`
  width: 1740px;
  height: 1970px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.strengthPage.backgroundColor};
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

function StrengthSection() {
  return (
    <div className="section">
      <Container>
        <InBody />
        <Alarm />
        <Training />
        <Calendar />
      </Container>
    </div>
  )
}

export default StrengthSection
