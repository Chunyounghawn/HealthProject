import React from "react"
import styled from "styled-components"
import { Close } from "../../../image/index.js"

import ScanModal from "react-modal"

// Chart
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Line,
  CartesianGrid,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ModalHead = styled.div`
  width: 1610px;
  height: 150px;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 700px;
  position: absolute;
  top: 150px;
  border-radius: 30px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
  height: 50px;
  bottom: 0px;
`

const Title = styled.div`
  font-size: 50px;
  font-family: fantasy;
  color: #ff4646;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const MenuTop = styled.div`
  width: 1610px;
  height: 50px;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  align-items: center;
  background-color: gray;
`

const MenuBottom = styled.div`
  width: 1610px;
  height: 50px;
  position: absolute;
  top: 50px;
  display: flex;
  align-items: center;
  background-color: white;
`

const MenuText = styled.div`
  font-size: 20px;
  font-weight: bold;
  position: absolute;
`

const TopText1 = styled(MenuText)`
  left: 310px;
`
const TopText2 = styled(MenuText)`
  left: 610px;
`

const TopText3 = styled(MenuText)`
  left: 910px;
`

const TopText4 = styled(MenuText)`
  left: 1210px;
`

const BottomText1 = styled(MenuText)`
  left: 310px;
`
const BottomText2 = styled(MenuText)`
  left: 620px;
`

const BottomText3 = styled(MenuText)`
  left: 905px;
`

const BottomText4 = styled(MenuText)`
  left: 1220px;
`

const HeadContainer = styled.div`
  width: 1550px;
  height: 500px;
  position: absolute;
  top: 180px;
  background-color: #d2d2d2;
  border-radius: 50px;
`

const LeftContainer = styled.div`
  width: 750px;
  height: 580px;
  position: absolute;
  top: 100px;
  left: 30px;
  background-color: #d2d2d2;
  border-radius: 50px;
`

const RightContainer = styled.div`
  width: 750px;
  height: 580px;
  position: absolute;
  top: 100px;
  right: 30px;
  background-color: #d2d2d2;
  border-radius: 50px;
`

const Titles = styled.div`
  font-size: 25px;
  font-family: fantasy;
  font-weight: bold;
  font-style: italic;
`
const HeadTitle = styled(Titles)`
  position: absolute;
  top: 130px;
  color: #3c3c3c;
`

const LeftTitle = styled(Titles)`
  position: absolute;
  top: 50px;
  left: 330px;
  color: #3c3c3c;
`

const RightTitle = styled(Titles)`
  position: absolute;
  top: 50px;
  right: 350px;
  color: #3c3c3c;
`

// Sample chart data
const InBodyData = [
  {
    name: "1월",
    체지방: 11,
    골격근량: 16,
  },
  {
    name: "2월",
    체지방: 15,
    골격근량: 12,
  },
  {
    name: "3월",
    체지방: 5,
    골격근량: 10,
  },
  {
    name: "4월",
    체지방: 10,
    골격근량: 5,
  },
  {
    name: "5월",
    체지방: 9,
    골격근량: 4,
  },
  {
    name: "6월",
    체지방: 10,
    골격근량: 8,
  },
  {
    name: "7월",
    체지방: 11,
    골격근량: 19,
  },
  {
    name: "8월",
    체지방: 15,
    골격근량: 12,
  },
  {
    name: "9월",
    체지방: 5,
    골격근량: 10,
  },
  {
    name: "10월",
    체지방: 10,
    골격근량: 5,
  },
  {
    name: "11월",
    체지방: 9,
    골격근량: 4,
  },
  {
    name: "12월",
    체지방: 10,
    골격근량: 8,
  },
]

const expData = [
  {
    subject: "체수분",
    A: 100,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "단백질",
    A: 100,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "무기질",
    A: 100,
    B: 80,
    fullMark: 150,
  },
  {
    subject: "체지방",
    A: 100,
    B: 120,
    fullMark: 150,
  },
  {
    subject: "골격근량",
    A: 100,
    B: 85,
    fullMark: 150,
  },
]

const expData2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const Scan = ({ isModal, setModal }) => {
  return (
    <ScanModal
      isOpen={isModal}
      onRequestClose={() => setModal}
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
      <ModalHead>
        <Title>My InBody Information</Title>
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
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MenuTop>
              <TopText1>성별</TopText1>
              <TopText2>나이</TopText2>
              <TopText3>신장</TopText3>
              <TopText4>체중</TopText4>
            </MenuTop>
            <MenuBottom>
              <BottomText1>남자</BottomText1>
              <BottomText2>24</BottomText2>
              <BottomText3>173.0</BottomText3>
              <BottomText4>60</BottomText4>
            </MenuBottom>

            <HeadTitle>월별 체지방 및 골격근 분석</HeadTitle>
            <HeadContainer>
              <ResponsiveContainer width="95%" aspect={3}>
                <LineChart data={InBodyData} margin={{ top: 100, bottom: -10 }}>
                  <CartesianGrid />
                  <XAxis dataKey="name" interval={"preserveStartEnd"} />
                  <YAxis></YAxis>
                  <Legend wrapperStyle={{ top: 30, left: 30, fontSize: 20 }} />
                  <Tooltip />
                  <Line dataKey="체지방" stroke="blue" activeDot={{ r: 8 }} />
                  <Line dataKey="골격근량" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </HeadContainer>
          </SwiperSlide>

          <SwiperSlide>
            <LeftTitle>체성분 분석</LeftTitle>
            <LeftContainer>
              <RadarChart
                outerRadius={250}
                width={750}
                height={700}
                data={expData}
              >
                <PolarGrid stroke="black" />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  name="표준"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="나"
                  dataKey="B"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Legend wrapperStyle={{ top: 30, left: 10, fontSize: 20 }} />
                <Tooltip />
              </RadarChart>
            </LeftContainer>

            <RightTitle>?</RightTitle>
            <RightContainer>
              <PieChart width={800} height={650}>
                <Pie
                  data={expData2}
                  dataKey="value"
                  outerRadius={230}
                  fill="green"
                >
                  {expData2.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend wrapperStyle={{ top: 30, left: 10, fontSize: 20 }} />
                <Tooltip />
              </PieChart>
            </RightContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
      <ModalFooter />
    </ScanModal>
  )
}

export default Scan
