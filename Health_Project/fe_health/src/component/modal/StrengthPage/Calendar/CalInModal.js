import CalendarInModal from "react-modal"


const CalInModal = ({ isModal, setModal }) => {
  return (
    <CalendarInModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "610px",
          height: "450px",
          left: "2%",
          right: "10%",
          borderRadius: "30px",
          backgroundColor: "whtie",
        },
      }}
    >

    </CalendarInModal>
  )
}

export default CalInModal
