import React from "react"
import styled from "styled-components"
import Front4 from "./Front4"
import Back4 from "./Back4"

const Selecter4 = styled.div`
  &: hover ${Front4} {
    transform: rotateY(180deg);
  }
  &: hover ${Back4} {
    transform: rotateY(0deg);
  }
`

export default Selecter4
