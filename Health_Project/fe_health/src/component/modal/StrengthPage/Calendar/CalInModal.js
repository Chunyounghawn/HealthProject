import { useState } from "react"
import CalendarInModal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { MODALCHECK, MODAL_END_DATE, MODAL_SELECT_DATE } from "../../../../redux/calendar.js"
import SelectDatePicker from "./DatePicker/SelectDatePicker.js"

const ModalHead = styled.div`
  width: 100%;
  height: 40px;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 28px;
  }
`

const SettingContainer = styled.div`
position: absolute;
top: 15%;
left: 2%;
  width: 480px;
  height: 430px;
  background-color: purple;
`

const SelectedDay = styled.div`
  position: absolute;
  top: 8%;
  left: 40px;
  width: 100px;
  height: 100px;
  font-size: 40px;
  color: white;
`

const AddButton = styled.button`
  position: absolute;
  top: 30px;
  right: 300px;
  
  
  position: absolute;
width: 80px;
height: 30px;
  top: 10%;
  right: 130px;


  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  background: rgb(6,14,131);
  background: linear-gradient(50deg, gray 10%, white 100%);
  border: none;

  :hover {
   background: pink
}
`


const RemoveButton = styled.button`
position: absolute;
width: 80px;
height: 30px;
  top: 10%;
  right: 30px;


  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  background: rgb(6,14,131);
  background: linear-gradient(50deg, gray 10%, white 100%);
  border: none;

  :hover {
   background: pink
}
`

const ContentBox = styled.textarea`
  position: absolute;
  top: 25%;
  left: 40px;
  width: 405px;
  height: 150px;
  background-color: pink;
`

const EndDateText = styled.p`
  position: absolute;
  top: 63%;
  right: 30px;
  color: yellow;
`

const EndDayCheckBox = styled.input`
   position: absolute;
  top: 62.5%;
  right: 31%;
  width: 17px;
  height: 17px;
  color: yellow;
`

const SelectDateText = styled.div`
    position: absolute;
  top: 63%;
  left: 60px;
  color: yellow;
`

const SelectDayCheckBox = styled.input`
  position: absolute;
  top: 62.5%;
  left: 7.2%;
  width: 17px;
  height: 17px;
  color: yellow;
`

const SelectDateSet = styled.input`
  position: absolute;
  top: 62.5%;
  left: 7.2%;
  width: 17px;
  height: 17px;
  color: yellow;
`


const FieldSet = styled.fieldset`
   position: absolute;
  top: 62.5%;
  left: 7.2%;
  min-width: 410px;
  height: 50px;
  color: yellow;
  font-size: 20px;
  font-family: sans-serif;
  border: 5px solid red;
  border-radius: 5px;
`




const DateInfoText = styled.legend`
    margin-left: calc(50% - 35px - 8px);
    color: #fff;
    font-size: 20px;
    display: flex;
`

const RadioBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`


//-------------------------------------

const ScheduleContainer = styled.div`
position: absolute;
top: 15%;
right: 2%;
width: 480px;
  height: 430px;
  background-color: purple;
`

const CalInModal = ({ isModal, setModal }) => {

  const date = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  const yearMonth = date.year + "." + (date.month + 1);

  const EndDateSet = () => {
    dispatch(MODAL_END_DATE())
    console.log();
  }

  const SelectedDateSet = () => {
    dispatch(MODAL_SELECT_DATE())
  }


  const settingDate = (e) => {
    console.log(e.target.value);
  }





  return (
    <CalendarInModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1000px",
          height: "500px",
          left: "22%",
          top: "20%",
          borderRadius: "30px",
          backgroundColor: "white",
        },
      }}
    >
      <ModalHead>
        <p>{yearMonth}</p>
      </ModalHead>



      <SettingContainer>
        <SelectedDay>2022.06.25</SelectedDay>
        <AddButton>ad</AddButton>
        <RemoveButton>re</RemoveButton>

        <ContentBox placeholder="여기"></ContentBox>



        <FieldSet>
          <DateInfoText align="center">날짜 설정</DateInfoText>
          <RadioBox onChange={settingDate.bind(this)}>
            <div>
              <input type="radio" value="nowDate" name="date" /> 현재일
            </div>
            <div>
              <input type="radio" value="selectedDate" name="date" /> 선택일
            </div>
            <div>
              <input type="radio" value="endDate" name="date" /> 종료일
            </div>


          </RadioBox>
        </FieldSet>

        {/* <EndDateText>종료일 설정하기</EndDateText>
        <SelectDayCheckBox type="checkbox" onClick={SelectedDateSet} />

        <SelectDateText>선택일 설정하기</SelectDateText>
        <EndDayCheckBox type="checkbox" onClick={EndDateSet} /> */}
      </SettingContainer>




      <ScheduleContainer>

      </ScheduleContainer>



    </CalendarInModal>
  )
}

export default CalInModal
