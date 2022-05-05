import React from "react"
import styled from "styled-components"

const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #333;
  background-color: purple;
  border-radius: 50%;
  font-size: 30px;
`

export default ItemBox
