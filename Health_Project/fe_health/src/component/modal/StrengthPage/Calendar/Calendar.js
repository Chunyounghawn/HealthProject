import React, { useReducer } from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import CalendarModal from "react-modal"

import HealthCalendar from "react-calendar"
import moment from "moment"

// import "react-calendar/dist/Calendar.css"
import CCalendar from "../../../../test/containers/Calendar"
import { useDispatch, useSelector } from "react-redux"

import MakeCalendar from "./MakeCalendar.js"

import { CalModalTrue } from "../../../navigation.jsx"
import { DECREMENT, INCREMENT } from "../../../../redux/calendar.js"
<<<<<<< HEAD

import CalInModal from "react-modal"
import { CalInModalTrue } from "../../../navigation.jsx"
=======
>>>>>>> 09cc02652f10d0588a0ac085fddeaf476820a414

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
  height: 50px;
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
  color: #ff4646;
`

const CalendarStyle = styled.div`
body {
    height: 100%;
    width: 100%;
    background: #d8dbe0;
}

.Calendar {
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.header p {
    margin-top: 45px;
    font-size:30px;
}



.choice{
    align-items: center;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: #768192;
    outline: none;
    cursor: pointer;
    background: #d8dbe0;
    margin: 30px;
}
.choice:hover {
    background: black;
}

input {
    padding: 3px;
    border-radius: 5px;
    border: 1px solid black;
    height: 25px;
}

`

const MoveButton = styled.button`
    margin: 50px;
    background: #d8dbe0;
    border: none;
    font-size: 30px;

`

const TableStyle = styled.table`
width: 80%;
    height: 900px;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    font-size: 19px;
    tbody{
      tr{
        border-top: 0.5px solid #c4c9d0;
      }
      td{
        width: 10%;
    height: 10%;
    overflow:hidden;
    white-space : nowrap;
    text-overflow: ellipsis;
      }
      tr, td{
        margin-left: 20px;
      }
    }
    td:first-child, td:last-child {
    color: red;
}
    th,td{
      vertical-align: top;
    }
    
div::-webkit-scrollbar {
    width: 10px;
}
div::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
}
div::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}
table tbody td:hover{
    font-weight: bold;
}

li {
    list-style: none;
}

.diff {
    color:rgba(0, 0, 0, 0.3 ) !important;
}
    
`



const Calendar = ({ isModal, setModal }) => {

  const state = useSelector(state => state.calendar)
  const dispatch = useDispatch()

  //지금까지 state값 가져오기함. 이제 날짜 관련 << 이거해야함

  //날짜 관련
  const year = state.year;
  const month = state.month;
  const yearMonth = year + "." + (month + 1);
  const lastDate = parseInt(new Date(year, month + 1, 0).getDate());
  const firstDay = parseInt(new Date(year, month, 1).getDay());

  // 일정
  const todo = state.schedule
  console.log(todo);


  // Month 감소
  const onDecreases = () => {
    dispatch(DECREMENT())
    console.log("back");
  }

  // Month 증가
  const onIncreases = () => {
    dispatch(INCREMENT())
    console.log("front");
  }
  // Modal Active
  const changeVisible = (key) => {

    setModal(false)
    CalInModalTrue()

  }

  // 일정 입력
  const onConfirm = ({ index, todo, color, todos }) => {
    if (todos.length != 0) {
      todos.map((item) => {
        dispatch({ type: 'INSERT', index: item, todo: todo, color: color })
      })
    }
    else {
      dispatch({ type: 'INSERT', index: index, todo: todo, color: color })
    }
    //dispatch({type: "MODAL"})
  }

  // 일정 입력 취소 모달꺼라 굳이필요없음 아직
  const onCancel = () => {
    dispatch({ type: "MODAL" })
  }




  return (
    <CalendarModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          backgroundColor: "#FBF8F1",

        },
      }}
    >
      <CalendarStyle>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
          <MoveButton onClick={onDecreases}>&lt;</MoveButton>
          <p>{yearMonth}</p>
          <MoveButton onClick={onIncreases}>&gt;</MoveButton>
        </ModalHead>

        <TableStyle>
          <thead>
            <tr>
              <td>Sun</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
            </tr>
          </thead>
          <tbody>

            {MakeCalendar({ year, month, firstDay, lastDate, changeVisible, todo, })}
          </tbody>


          {/* <button style={{ width: 70, height: 70 }} onClick={() => { CalModalTrue() }} /> */}
        </TableStyle>



      </CalendarStyle>












      {/* 
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
        <ModalFooter />*/}



    </CalendarModal>
  )
}

export default Calendar
