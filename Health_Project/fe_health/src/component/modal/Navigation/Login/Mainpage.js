import React from "react"
import styled from "styled-components"
import {
  Close,
  SignupImg,
  Logout,
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster5,
  Poster6,
  Poster7,
} from "../../../../image/index.js"

import { LoginTrue } from "../../../navigation.jsx"

import Menubar from "../Menubar.js"
import MainPageModal from "react-modal"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"

const ModalContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 25px;
  width: 1300px;
  height: 790px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background-color: #ffa0a0;
`

const ModalHead = styled.div`
  width: 1100px;
  height: 250px;
  position: absolute;
  top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  border-radius: 30px;
  background-color: #47ff9c;
`

const ModalBody = styled.div`
  width: 1200px;
  height: 470px;
  position: absolute;
  top: 300px;
  border-radius: 30px;
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
const UserIcon = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 50px;
`

const LogoutIcon = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50px;
  right: 50px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

const NameText = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 80px;
  left: 250px;
`

const EmailText = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 140px;
  left: 250px;
`

const Poster = styled.img`
  width: 500px;
  height: 430px;
  position: absolute;
  top: 20px;
  left: 50px;
  border-radius: 30px;
  background-color: yellow;
`

const MainPage = ({ isModal, setModal }) => {
  return (
    <MainPageModal
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
      <Menubar />
      <Closebtn src={Close} onClick={() => setModal(false)} />
      <ModalContainer>
        <ModalHead>
          <UserIcon src={SignupImg}></UserIcon>
          <NameText>홍길동</NameText>
          <EmailText>wlsdnjs156@naver.com</EmailText>
          <LogoutIcon src={Logout} onClick={() => LoginTrue()} />
        </ModalHead>

        <ModalBody>
          <Swiper
            style={{
              width: "1200px",
              height: "480px",
              borderRadius: "30px",
            }}
            spaceBetween={1}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <Poster src={Poster1} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster2} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster3} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster4} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster5} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster6} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster7} />
            </SwiperSlide>
          </Swiper>
        </ModalBody>
      </ModalContainer>
    </MainPageModal>
  )
}

export default MainPage
