import React from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import NoticeModal from "react-modal"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
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

const NoticeInformation = styled.div`
  width: 1200px;
  height: 200px;
  border-radius: 30px;
  position: absolute;
  top: 10px;
  left: 50px;
`

const NoticeMenu = styled.div`
  width: 1200px;
  height: 70px;
  border-radius: 30px 30px 0px 0px;
  position: relative;
  background-color: skyblue;
`

const MenuNumber = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  font-size: 30px;
  font-weight: bold;
`

const MenuTitle = styled.div`
  position: absolute;
  top: 20px;
  left: 500px;
  font-size: 30px;
  font-weight: bold;
`

const MenuDate = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  font-size: 30px;
  font-weight: bold;
`

const NoticeContent = styled.div`
  width: 1200px;
  height: 130px;
  position: absolute;
  bottom: 0px;
  border-radius: 0px 0px 30px 30px;
  background-color: pink;
`

const ContentNumber = styled.div`
  position: absolute;
  top: 50px;
  left: 70px;
  font-size: 30px;
  font-family: Jeju Hallasan;
  font-weight: bold;
`

const ContentTitle = styled.div`
  position: absolute;
  top: 50px;
  left: 250px;
  font-size: 30px;
  font-weight: bold;
`

const ContentDate = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 30px;
  font-weight: bold;
`

const Notice = ({ isModal, setModal }) => {
  return (
    <NoticeModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Swiper
            direction="vertical"
            spaceBetween={10}
            slidesPerView={3}
            pagination={{ clickable: true }}
            style={{
              width: "1300px",
              height: "670px",
            }}
          >
            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>1</ContentNumber>
                  <ContentTitle>
                    ??????????????? ???????????? UI ???????????? ???????????????.
                  </ContentTitle>
                  <ContentDate>2022-05-04</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>2</ContentNumber>
                  <ContentTitle>
                    ??? ?????? ????????? ????????? ?????? ?????? ??????????????????.
                  </ContentTitle>
                  <ContentDate>2022-05-15</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>3</ContentNumber>
                  <ContentTitle>
                    ?????? ????????? ????????? ?????? ?????? ???????????? ??????
                  </ContentTitle>
                  <ContentDate>2022-05-29</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>4</ContentNumber>
                  <ContentTitle>
                    ?????? ????????? ????????? ????????? ?????? (6/6~6/10)
                  </ContentTitle>
                  <ContentDate>2022-06-02</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>5</ContentNumber>
                  <ContentTitle>
                    ???????????? ???????????? ?????? ?????? (09:00~16:00)
                  </ContentTitle>
                  <ContentDate>2022-06-04</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>

            <SwiperSlide>
              <NoticeInformation>
                <NoticeMenu>
                  <MenuNumber>??????</MenuNumber>
                  <MenuTitle>??????</MenuTitle>
                  <MenuDate>?????????</MenuDate>
                </NoticeMenu>
                <NoticeContent>
                  <ContentNumber>6</ContentNumber>
                  <ContentTitle>
                    6???6??? ???????????? ?????? ???????????? ?????? ??????
                  </ContentTitle>
                  <ContentDate>2022-06-06</ContentDate>
                </NoticeContent>
              </NoticeInformation>
            </SwiperSlide>
          </Swiper>
        </ModalBody>
        <ModalFooter />
      </ModalContainer>
    </NoticeModal>
  )
}

export default Notice
