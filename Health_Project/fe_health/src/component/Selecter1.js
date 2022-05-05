import React from "react"
import styled from "styled-components"
import Front1 from "./Front1"
import Back1 from "./Back1"

const Selecter1 = styled.div`
  &: hover ${Front1} {
    transform: rotateY(180deg);
  }
  &: hover ${Back1} {
    transform: rotateY(0deg);
  }
`

export default Selecter1
