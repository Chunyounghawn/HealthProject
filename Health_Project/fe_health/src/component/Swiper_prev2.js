import React from "react"
import styled from "styled-components"
import Swiper_button from "./Swiper_button"

const Swiper_prev2 = styled(Swiper_button)`
  left: 70px;
  top: 300px;
  position: absolute;
  &: hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

export default Swiper_prev2
