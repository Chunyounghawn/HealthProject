import styled from "styled-components"
import Map from "./api/Map"

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

function MapSection() {
  return (
    <div className="section">
      <Container>
        <Map />
      </Container>
    </div>
  )
}

export default MapSection
