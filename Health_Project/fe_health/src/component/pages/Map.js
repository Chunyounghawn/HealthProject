import styled from "styled-components"
import Map from "../Map"

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
`

const Message = styled.div`
  position: absolute;
  top: 10%;
  left: 45%;
  font-size: 40px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

function MapSection() {
  return (
    <div className="section">
      <Container>
        <Message>헬스장 찾기</Message>
        <Map />
      </Container>
    </div>
  )
}

export default MapSection
