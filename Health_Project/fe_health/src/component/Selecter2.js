import React from "react"
import styled from "styled-components"
import Front2 from "./Front2"
import Back2 from "./Back2"

const Selecter2 = styled.div`
  &: hover ${Front2} {
    transform: rotateY(180deg);
  }
  &: hover ${Back2} {
    transform: rotateY(0deg);
  }
`

export default Selecter2
