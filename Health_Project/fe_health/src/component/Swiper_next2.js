import React from "react"
import styled from "styled-components"
import Swiper_button from "./Swiper_button"

const Swiper_next2 = styled(Swiper_button)`
  right: 80px;
  top: 300px;
  position: absolute;
  &: hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

export default Swiper_next2
