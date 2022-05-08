import styled from "styled-components"
import Map from "../Map"

const Message = styled.div`
 margin-top: 50px;
  font-size: 40px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

function MapSection() {
  return (
    <div className="section">
      <Message>헬스장 찾기</Message>
      <Map />
    </div>
  )
}

export default MapSection