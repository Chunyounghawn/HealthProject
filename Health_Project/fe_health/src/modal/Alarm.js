import React from "react"
import styled from "styled-components"
import { Close } from "../image/index.js"

import AlarmModal from "react-modal"

import { Water, Timer, WaterCup } from "../image/index.js"

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

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
  right: 20px;
  width: 1610px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1610px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
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

const Symbol = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 140px;
  left: 220px;
  &:hover {
    cursor: pointer;
  }
`

const AlarmList = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 30px;
  background-color: gray;
  position: absolute;
  top: 50px;
  right: 100px;
`

const ListBox = styled.div`
  width: 560px;
  height: 100px;
  border-radius: 30px;
  background-color: white;
  position: absolute;
  left: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const TimerIcon = styled.img`
  widht: 100px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 50px;
`

const TimerText = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 40px;
  left: 150px;
`

const WaterText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #b4b4b4;
  position: absolute;
  top: 40px;
  right: 80px;
`

const CupIcon = styled.img`
  widht: 100px;
  height: 50px;
  position: absolute;
  top: 30px;
  right: 200px;
`

// Sample data
const data = [
  { name: "오늘 나의 물 섭취량", students: 300 },
  { name: "하루 권장 물 섭취량", students: 700 },
]

const data2 = [
  { name: "1월", 월평균물섭취량: 861 },
  { name: "2월", 월평균물섭취량: 862 },
  { name: "3월", 월평균물섭취량: 343 },
  { name: "4월", 월평균물섭취량: 454 },
  { name: "5월", 월평균물섭취량: 435 },
  { name: "6월", 월평균물섭취량: 653 },
  { name: "6월", 월평균물섭취량: 734 },
  { name: "7월", 월평균물섭취량: 845 },
  { name: "8월", 월평균물섭취량: 932 },
  { name: "9월", 월평균물섭취량: 133 },
  { name: "10월", 월평균물섭취량: 222 },
  { name: "11월", 월평균물섭취량: 332 },
  { name: "12월", 월평균물섭취량: 545 },
]

const COLORS = ["#3232FF", "#b4b4b4"]

const Alarm = ({ isModal, setModal }) => {
  return (
    <AlarmModal
      isOpen={isModal}
      onRequestClose={() => setModal}
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
            direction="vertical"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{
              width: "1610px",
              height: "700px",
              borderRadius: "30px",
              backgroundColor: "#9986ee",
            }}
          >
            <SwiperSlide>
              <PieChart
                width={700}
                height={700}
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "50px",
                }}
              >
                <Pie
                  data={data}
                  dataKey="students"
                  outerRadius={250}
                  innerRadius={230}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend wrapperStyle={{ bottom: 50, left: 10, fontSize: 20 }} />
                <Tooltip />
              </PieChart>
              <Symbol src={Water} />
              <AlarmList>
                <Swiper
                  direction="vertical"
                  spaceBetween={10}
                  slidesPerView={5}
                  pagination={{ clickable: true }}
                  style={{
                    width: "600px",
                    height: "600px",
                    borderRadius: "30px",
                    backgroundColor: "#dcdcdc",
                  }}
                >
                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>10:30</TimerText>
                      <WaterText>200mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>11:20</TimerText>
                      <WaterText>100mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>12:45</TimerText>
                      <WaterText>300mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>14:10</TimerText>
                      <WaterText>100mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>15:30</TimerText>
                      <WaterText>50mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>17:20</TimerText>
                      <WaterText>100mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ListBox>
                      <TimerIcon src={Timer} />
                      <TimerText>21:30</TimerText>
                      <WaterText>100mL</WaterText>
                      <CupIcon src={WaterCup} />
                    </ListBox>
                  </SwiperSlide>
                </Swiper>
              </AlarmList>
            </SwiperSlide>

            <SwiperSlide>
              <BarChart
                width={1550}
                height={600}
                data={data2}
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "10px",
                }}
              >
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Bar dataKey="월평균물섭취량" fill="#2828CD" />
                <Legend wrapperStyle={{ top: -50, left: 30, fontSize: 20 }} />
                <Tooltip />
              </BarChart>
            </SwiperSlide>
          </Swiper>
        </ModalBody>
        <ModalFooter />
      </ModalContainer>
    </AlarmModal>
  )
}

export default Alarm
