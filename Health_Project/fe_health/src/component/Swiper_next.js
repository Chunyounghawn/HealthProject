import React from "react"
// import React, { Component } from "react"
import styled from "styled-components"
import Swiper_button from "./Swiper_button"

const Swiper_next = styled(Swiper_button)`
  left: 650px;
  top: 470px;
  &: hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

export default Swiper_next
