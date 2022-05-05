import React from "react"
import styled from "styled-components"
import Front3 from "./Front3"
import Back3 from "./Back3"

const Selecter3 = styled.div`
  &: hover ${Front3} {
    transform: rotateY(180deg);
  }
  &: hover ${Back3} {
    transform: rotateY(0deg);
  }
`

export default Selecter3
