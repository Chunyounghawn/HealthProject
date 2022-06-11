import React from "react"
import styled from "styled-components"
import { Close } from "../image/index.js"

import CalendarModal from "react-modal"

import HealthCalendar from "react-calendar"
import moment from "moment"

// import "react-calendar/dist/Calendar.css"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 1610px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1610px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 690px;
  position: absolute;
  top: 150px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
  height: 100px;
  bottom: 0px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const Title = styled.div`
  font-size: 50px;
  font-family: fantasy;
  color: #ff4646;
`

const MyCalendar = styled(HealthCalendar)`
  .react-calendar__navigation {
    display: flex;
    width: 1610px;
    height: 110px;

    .react-calendar__navigation__label {
      font-weight: bold;
      font-size: 40px;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    height: 80px;
    margin: 3px;
    background-color: #6f876f;
    border-radius: 10px;
    color: white;
    font-size: 30px;
    padding: 5px 0;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #a5c1a5;
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px black;
  }

  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    margin-top: 70px;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`

const Calendar = ({ isModal, setModal }) => {
  const [value, onChange] = React.useState(new Date())

  return (
    <CalendarModal
      isOpen={isModal}
      onRequestClose={() => setModal}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          backgroundColor: "#7FFFD4",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Title>My Health Calendar</Title>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <MyCalendar
            calendarType="US"
            formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
          />
        </ModalBody>
        <ModalFooter />
      </ModalContainer>
    </CalendarModal>
  )
}

export default Calendar
