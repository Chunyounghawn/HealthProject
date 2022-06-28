import CalendarInModal from "react-modal"
import { useSelector } from "react-redux"
import styled from "styled-components"


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

const SettingComponent = styled.div`
position: absolute;
top: 3%;
left: 5%;
  width: 300px;
  height: 300px;
  background-color: purple;
`

const ScheduleComponent = styled.div`
position: absolute;
top: 3%;
right: 5%;
width: 300px;
  height: 300px;
  background-color: purple;
`

const CalInModal = ({ isModal, setModal }) => {

  const date = useSelector((state) => state.calendar)
  console.log(date);
  const yearMonth = date.year + "." + (date.month + 1);

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

      <SettingComponent>

      </SettingComponent>

      <ScheduleComponent>

      </ScheduleComponent>



    </CalendarInModal>
  )
}

export default CalInModal
