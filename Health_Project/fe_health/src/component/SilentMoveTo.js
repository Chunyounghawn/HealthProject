import React from "react"
import styled from "styled-components"

const SilentMoveTo = styled.div`
  position: fixed;
  right: 25px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  font-size: 20px;
  border: 4px solid black;
  background-color: white;
  color: black;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`

export default SilentMoveTo
