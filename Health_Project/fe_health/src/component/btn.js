import React from "react"
import styled from "styled-components"

const btn = styled.div`
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  &: hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`

export default btn
