import React from "react"
import styled from "styled-components"
import { Close } from "../../image/index.js"
import DetailsModal from "react-modal"

import Strength from "./pages/Strength.js"
import Review from "./pages/Review.js"
import Map from "./pages/Map.js"
import Chatbot from "./pages/Chatbot.js"
import Notice from "./navigation/Notice.js"
import Myinfo from "./navigation/Myinfo.js"
import Challenge from "./navigation/Challenge.js"

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
  display: flex;
  justify-content: center;
`

const ModalHead = styled.div`
  width: 1650px;
  height: 80px;
`

const ModalBody = styled.div`
  width: 1600px;
  height: 790px;
  position: absolute;
  top: 80px;
  border-radius: 30px;
  background-color: #ffb2af;
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
  left: 80px;
`

const ReviewContainer = styled(BasicContainer)`
  top: 30px;
  right: 80px;
`

const MapContainer = styled(BasicContainer)`
  bottom: 30px;
  left: 80px;
`

const QuestionContainer = styled(BasicContainer)`
  bottom: 30px;
  right: 80px;
`

// Slide 2
const NoticeContainer = styled(BasicContainer)`
  top: 30px;
  left: 80px;
`

const MyinfoContainer = styled(BasicContainer)`
  top: 30px;
  right: 80px;
`

const ChallengeContainer = styled(BasicContainer)`
  bottom: 30px;
  left: 80px;
`

const BoardContainer = styled(BasicContainer)`
  bottom: 30px;
  right: 80px;
`

const Click = ({ isModal, setModal }) => {
  return (
    <DetailsModal
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
          backgroundColor: "#7DEBEB",
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
              width: "1600px",
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
              <ReviewContainer>
                <Review />
              </ReviewContainer>
              <MapContainer>
                <Map />
              </MapContainer>
              <QuestionContainer>
                <Chatbot />
              </QuestionContainer>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeContainer>
                <Notice />
              </NoticeContainer>
              <MyinfoContainer>
                <Myinfo />
              </MyinfoContainer>
              <ChallengeContainer>
                <Challenge />
              </ChallengeContainer>
              <BoardContainer></BoardContainer>
            </SwiperSlide>
          </Swiper>
        </ModalBody>
      </ModalContainer>
    </DetailsModal>
  )
}

export default Click
