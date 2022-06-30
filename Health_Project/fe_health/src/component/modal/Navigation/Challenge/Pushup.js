import React from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import PushUpModal from "react-modal"

import GaugeChart from "react-gauge-chart"

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
  display: flex;
  justify-content: center;
  background-color: #96a5ff;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
  height: 100px;
  bottom: 0px;
  background-color: #b4b4b4;
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

const Title = styled.div`
  position: absolute;
  top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`

const PushUpBg = styled.div`
  width: 1250px;
  height: 630px;
  position: absolute;
  left: 50px;
  top: 30px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const PushUpBg2 = styled.div`
  width: 1250px;
  height: 530px;
  position: absolute;
  top: 50px;
  background-color: #f2ebe9;
`

const PushUpBg3 = styled.div`
  width: 400px;
  height: 470px;
  position: absolute;
  left: 30px;
  top: 30px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Mission = styled.div`
  width: 750px;
  height: 80px;
  position: absolute;
  right: 30px;
  border-radius: 30px;
  font-size: 30px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Mission1 = styled(Mission)`
  top: 30px;
`

const Mission2 = styled(Mission)`
  top: 150px;
`

const Mission3 = styled(Mission)`
  top: 280px;
`

const Mission4 = styled(Mission)`
  top: 410px;
`

const MissionBtn = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
  color: #333;
  &:hover {
    cursor: pointer;
  }
`

const MissionSuccessBtn1 = styled(MissionBtn)`
  right: 110px;
  background-color: ${(props) => props.color};
`

const MissionSuccessBtn2 = styled(MissionBtn)`
  right: 110px;
  background-color: ${(props) => props.color};
`

const MissionSuccessBtn3 = styled(MissionBtn)`
  right: 110px;
  background-color: ${(props) => props.color};
`

const MissionSuccessBtn4 = styled(MissionBtn)`
  right: 110px;
  background-color: ${(props) => props.color};
`
const MissionFailBtn1 = styled(MissionBtn)`
  right: 30px;
  background-color: ${(props) => props.color};
`

const MissionFailBtn2 = styled(MissionBtn)`
  right: 30px;
  background-color: ${(props) => props.color};
`

const MissionFailBtn3 = styled(MissionBtn)`
  right: 30px;
  background-color: ${(props) => props.color};
`

const MissionFailBtn4 = styled(MissionBtn)`
  right: 30px;
  background-color: ${(props) => props.color};
`

const MissionResult = styled.div`
  width: 300px;
  height: 60px;
  position: absolute;
  right: 50px;
  bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const MissionSuccess = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  background-color: #a0afff;
  border-radius: 50px;
`

const MissionSuccessText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 50px;
`

const MissionFail = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 160px;
  background-color: #cd1039;
  border-radius: 50px;
`

const MissionFailText = styled.div`
  font-size: 20px;
  position: absolute;
  left: 200px;
`

export let Value = 10
let Success = 0,
  Fail = 0

const Pushup = ({ isModal, setModal }) => {
  const [SuccessColor1, setSuccessColor1] = React.useState("#fff")
  const [FailColor1, setFailColor1] = React.useState("#fff")
  const [SuccessColor2, setSuccessColor2] = React.useState("#fff")
  const [FailColor2, setFailColor2] = React.useState("#fff")
  const [SuccessColor3, setSuccessColor3] = React.useState("#fff")
  const [FailColor3, setFailColor3] = React.useState("#fff")
  const [SuccessColor4, setSuccessColor4] = React.useState("#fff")
  const [FailColor4, setFailColor4] = React.useState("#fff")

  const SuccessChoice1 = () =>
    SuccessColor1 === "#fff"
      ? (setSuccessColor1("#3CFBFF"), setFailColor1("#fff"), Success++)
      : (setSuccessColor1("#fff"),
        setFailColor1("#fff"),
        Success > 0 ? Success-- : (Success = 0))
  Value = 0.25 * Success

  const FailChoice1 = () =>
    FailColor1 === "#fff"
      ? (setFailColor1("#CD1F48"), setSuccessColor1("#fff"), Fail++)
      : (setFailColor1("#fff"),
        setSuccessColor1("#fff"),
        Fail > 0 ? Fail-- : (Fail = 0))

  const SuccessChoice2 = () =>
    SuccessColor2 === "#fff"
      ? (setSuccessColor2("#3CFBFF"), setFailColor2("#fff"), Success++)
      : (setSuccessColor2("#fff"),
        setFailColor2("#fff"),
        Success > 0 ? Success-- : (Success = 0))
  Value = 0.25 * Success

  const FailChoice2 = () =>
    FailColor2 === "#fff"
      ? (setFailColor2("#CD1F48"), setSuccessColor2("#fff"), Fail++)
      : (setFailColor2("#fff"),
        setSuccessColor2("#fff"),
        Fail > 0 ? Fail-- : (Fail = 0))

  const SuccessChoice3 = () =>
    SuccessColor3 === "#fff"
      ? (setSuccessColor3("#3CFBFF"), setFailColor3("#fff"), Success++)
      : (setSuccessColor3("#fff"),
        setFailColor3("#fff"),
        Success > 0 ? Success-- : (Success = 0))
  Value = 0.25 * Success

  const FailChoice3 = () =>
    FailColor3 === "#fff"
      ? (setFailColor3("#CD1F48"), setSuccessColor3("#fff"), Fail++)
      : (setFailColor3("#fff"),
        setSuccessColor3("#fff"),
        Fail > 0 ? Fail-- : (Fail = 0))

  const SuccessChoice4 = () =>
    SuccessColor4 === "#fff"
      ? (setSuccessColor4("#3CFBFF"), setFailColor4("#fff"), Success++)
      : (setSuccessColor4("#fff"),
        setFailColor4("#fff"),
        Success > 0 ? Success-- : (Success = 0))
  Value = 0.25 * Success

  const FailChoice4 = () =>
    FailColor4 === "#fff"
      ? (setFailColor4("#CD1F48"), setSuccessColor4("#fff"), Fail++)
      : (setFailColor4("#fff"),
        setSuccessColor4("#fff"),
        Fail > 0 ? Fail-- : (Fail = 0))

  return (
    <PushUpModal
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
          <Title>Mission</Title>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <PushUpBg>
            <PushUpBg2>
              <PushUpBg3>
                <GaugeChart
                  id="gauge-chart1"
                  nrOfLevels={4}
                  cornerRadius={20}
                  animate={true}
                  percent={Value}
                  needleColor="#345243"
                />
              </PushUpBg3>
              <Mission1>
                팔굽혀피기 연속 20개
                <MissionSuccessBtn1
                  color={SuccessColor1}
                  onClick={SuccessChoice1}
                >
                  성공
                </MissionSuccessBtn1>
                <MissionFailBtn1 color={FailColor1} onClick={FailChoice1}>
                  실패
                </MissionFailBtn1>
              </Mission1>
              <Mission2>
                팔굽혀피기 연속 40개
                <MissionSuccessBtn2
                  color={SuccessColor2}
                  onClick={SuccessChoice2}
                >
                  성공
                </MissionSuccessBtn2>
                <MissionFailBtn2 color={FailColor2} onClick={FailChoice2}>
                  실패
                </MissionFailBtn2>
              </Mission2>
              <Mission3>
                팔굽혀피기 연속 60개
                <MissionSuccessBtn3
                  color={SuccessColor3}
                  onClick={SuccessChoice3}
                >
                  성공
                </MissionSuccessBtn3>
                <MissionFailBtn3 color={FailColor3} onClick={FailChoice3}>
                  실패
                </MissionFailBtn3>
              </Mission3>
              <Mission4>
                팔굽혀피기 연속 80개
                <MissionSuccessBtn4
                  color={SuccessColor4}
                  onClick={SuccessChoice4}
                >
                  성공
                </MissionSuccessBtn4>
                <MissionFailBtn4 color={FailColor4} onClick={FailChoice4}>
                  실패
                </MissionFailBtn4>
              </Mission4>
            </PushUpBg2>
          </PushUpBg>
        </ModalBody>

        <ModalFooter>
          <MissionResult>
            <MissionSuccess />
            <MissionSuccessText>성공: {Success}</MissionSuccessText>
            <MissionFail />
            <MissionFailText>실패: {Fail}</MissionFailText>
          </MissionResult>
        </ModalFooter>
      </ModalContainer>
    </PushUpModal>
  )
}

export default Pushup
