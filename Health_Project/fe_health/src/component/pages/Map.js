import styled from "styled-components"
import Map from "../Map"

const Container = styled.div`
  width: 1740px;
  height: 970px;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

const Title = styled.div`
  position: absolute;
  top: 10%;
  font-size: 40px;
  color: #fff;
  font-weight: 600;
`

function MapSection() {
  return (
    <div className="section">
      <Container>
        <Title>헬스장 찾기</Title>
        <Map />
      </Container>
    </div>
  )
}

export default MapSection
