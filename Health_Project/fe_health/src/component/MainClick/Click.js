import React from "react"
import styled from "styled-components"
import { Close } from "../../image/index.js"
import BoardModal from "react-modal"

import Strength from "./Strength.js"

import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1650px;
  height: 890px;
  background-color: red;
`

const ModalHead = styled.div`
  width: 1650px;
  height: 100px;
  background-color: black;
`

const ModalBody = styled.div`
  width: 1650px;
  height: 790px;
  position: absolute;
  top: 100px;
  background-color: pink;
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
const BasicContainer = styled.div`
  width: 700px;
  height: 350px;
  background-color: skyblue;
  border-radius: 30px;
  position: absolute;
`

// Slide 1
const StrengthContainer = styled(BasicContainer)`
  top: 30px;
  left: 100px;
`

const ReviewContainer = styled(BasicContainer)`
  top: 30px;
  right: 100px;
`

const MapContainer = styled(BasicContainer)`
  bottom: 30px;
  left: 100px;
`

const QuestionContainer = styled(BasicContainer)`
  bottom: 30px;
  right: 100px;
`

// Slide 2
const NoticeContainer = styled(BasicContainer)`
  top: 30px;
  left: 100px;
`

const MyinfoContainer = styled(BasicContainer)`
  top: 30px;
  right: 100px;
`

const ChallengeContainer = styled(BasicContainer)`
  bottom: 30px;
  left: 100px;
`

const BoardContainer = styled(BasicContainer)`
  bottom: 30px;
  right: 100px;
`

const Click = ({ isModal, setModal }, props) => {
  return (
    <BoardModal
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
          backgroundColor: "#FBF8F1",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Swiper
            style={{
              width: "1650px",
              height: "790px",
              position: "relative",
              left: "0px",
              top: "0px",
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            //            autoplay={{ delay: 2000, disableOnInteraction: false }}
            //            loop={true}
          >
            <SwiperSlide>
              <StrengthContainer>
                <Strength />
              </StrengthContainer>
              <ReviewContainer></ReviewContainer>
              <MapContainer></MapContainer>
              <QuestionContainer></QuestionContainer>
            </SwiperSlide>
            <SwiperSlide>
              <NoticeContainer></NoticeContainer>
              <MyinfoContainer></MyinfoContainer>
              <ChallengeContainer></ChallengeContainer>
              <BoardContainer></BoardContainer>
            </SwiperSlide>
          </Swiper>
        </ModalBody>
      </ModalContainer>
    </BoardModal>
  )
}

export default Click
