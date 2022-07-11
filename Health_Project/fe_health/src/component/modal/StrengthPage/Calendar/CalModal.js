import CalendarModal from "react-modal"

const CalModal = ({ isModal, setModal }) => {
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
          borderRadius: "30px",
          backgroundColor: "hotpink",
        },
      }}
    ></CalendarModal>
  )
}

export default CalModal
