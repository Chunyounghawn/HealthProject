import CalendarInModal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { MODALCHECK } from "../../../../redux/calendar.js"

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
  height: 180px;
  background-color: pink;
`

const EndDateText = styled.p`
  position: absolute;
  top: 70%;
  right: 30px;
  color: yellow;
`

const EndCheckBox = styled.input`
   position: absolute;
  top: 69.5%;
  right: 150px;
  width: 17px;
  height: 17px;
  color: yellow;

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
    dispatch(MODALCHECK())
    console.log();
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
        <EndDateText>종료일 설정하기</EndDateText>
        <EndCheckBox type="checkbox" onClick={EndDateSet} />
      </SettingContainer>




      <ScheduleContainer>

      </ScheduleContainer>



    </CalendarInModal>
  )
}

export default CalInModal
