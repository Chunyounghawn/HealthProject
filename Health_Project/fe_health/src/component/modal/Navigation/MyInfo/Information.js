import React from "react"
import styled from "styled-components"
import {
  Close,
  SignupImg,
  Age,
  Gender,
  Email,
  Phone,
  Water,
  PushUp,
  SitUp,
  Squat,
} from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import InformationModal from "react-modal"

import BatteryGauge from "react-battery-gauge"

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
  PieChart,
  Pie,
  Cell,
} from "recharts"

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

const data = [
  { name: "잔여 물 섭취량", students: 300 },
  { name: "오늘 나의 물 섭취량", students: 1700 },
]

const COLORS = ["#FFB399", "#289AFF"]

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 60px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 830px;
  position: absolute;
  top: 60px;
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
  height: 370px;
  position: absolute;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #47ff9c;
`

const UserContainer = styled(BasicContainer)`
  width: 410px;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
`

const InBodyContainer = styled(BasicContainer)`
  width: 850px;
  top: 30px;
  right: 30px;
`

const ChallengeContainer = styled(BasicContainer)`
  width: 410px;
  left: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const AlarmContainer = styled(BasicContainer)`
  width: 410px;
  left: 470px;
  bottom: 30px;
`

const CalendarContainer = styled(BasicContainer)`
  width: 410px;
  right: 30px;
  bottom: 30px;
`

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
`

const ChallengeIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 5px;
  left: 20px;
`

const BatteryContainer = styled.div`
  width: 400px;
  height: 110px;
  position: relative;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #57e9e1;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`

const TitleText = styled.div`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  position: absolute;
  top: 5px;
  margin-left: 100px;
`

const Box = styled.div`
  width: 400px;
  height: 50px;
  position: absolute;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #57e9e1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const NameBox = styled(Box)`
  top: 140px;
`

const AgeBox = styled(Box)`
  width: 197px;
  top: 195px;
  left: 3px;
`

const GenderBox = styled(Box)`
  width: 197px;
  top: 195px;
  right: 3px;
`

const EmailBox = styled(Box)`
  top: 250px;
`

const PhoneBox = styled(Box)`
  top: 305px;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const Symbol = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60px;
  left: 100px;
`
const Information = ({ isModal, setModal }) => {
  return (
    <InformationModal
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

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <UserContainer>
            <UserIcon src={SignupImg} />
            <NameBox>
              <Text>홍길동</Text>
            </NameBox>
            <AgeBox>
              <Icon src={Age} />
              <Text>24</Text>
            </AgeBox>
            <GenderBox>
              <Icon src={Gender} />
              <Text>남자</Text>
            </GenderBox>
            <EmailBox>
              <Icon src={Email} />
              <Text>wlsdnjs156@naver.com</Text>
            </EmailBox>
            <PhoneBox>
              <Icon src={Phone} />
              <Text>010-3690-7822</Text>
            </PhoneBox>
          </UserContainer>

          <InBodyContainer>
            <ResponsiveContainer width="95%" aspect={2}>
              <LineChart data={InBodyData} margin={{ top: 70, bottom: 30 }}>
                <CartesianGrid />
                <XAxis dataKey="name" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend wrapperStyle={{ top: 20, left: 30, fontSize: 20 }} />
                <Tooltip />
                <Line dataKey="체지방" stroke="blue" activeDot={{ r: 8 }} />
                <Line dataKey="골격근량" stroke="red" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </InBodyContainer>

          <ChallengeContainer>
            <BatteryContainer>
              <ChallengeIcon src={PushUp} />
              <TitleText>팔굽혀펴기</TitleText>
              <BatteryGauge
                value={25}
                animated={true}
                style={{
                  height: "70px",
                  position: "absolute",
                  top: "30px",
                  marginLeft: "100px",
                }}
              />
            </BatteryContainer>

            <BatteryContainer>
              <ChallengeIcon src={SitUp} />
              <TitleText>윗몸일으키기</TitleText>
              <BatteryGauge
                value={50}
                animated={true}
                style={{
                  height: "70px",
                  position: "absolute",
                  top: "30px",
                  marginLeft: "100px",
                }}
              />
            </BatteryContainer>

            <BatteryContainer>
              <ChallengeIcon src={Squat} />
              <TitleText>스쿼트</TitleText>
              <BatteryGauge
                value={75}
                animated={true}
                style={{
                  height: "70px",
                  position: "absolute",
                  top: "30px",
                  marginLeft: "100px",
                }}
              />
            </BatteryContainer>
          </ChallengeContainer>

          <AlarmContainer>
            <PieChart
              width={400}
              height={400}
              style={{
                position: "absolute",
                top: "-20px",
                left: "0px",
              }}
            >
              <Pie
                startAngle={-270}
                data={data}
                dataKey="students"
                outerRadius={150}
                innerRadius={130}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Legend wrapperStyle={{ bottom: 20, left: 10, fontSize: 20 }} />
              <Tooltip />
            </PieChart>
            <Symbol src={Water} />
          </AlarmContainer>

          <CalendarContainer></CalendarContainer>
        </ModalBody>
      </ModalContainer>
    </InformationModal>
  )
}

export default Information
