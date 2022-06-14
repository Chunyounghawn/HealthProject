import React from "react"
import styled from "styled-components"
import Map from "../Map"

const Container = styled.div`
  width: 1740px;
  height: 970px;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

const SearchBar = styled.div`
  width: 400px;
  height: 600px;
  position: absolute;
  top: 200px;
  left: 150px;
  z-index: 1;
  opacity: 0.7;
  border-radius: 30px;
  background-color: #828282;
`

const Search = styled.input`
  width: 270px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 20px;
  color: black;
  border-color: black;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
`

const Btn = styled.button`
  width: 80px;
  height: 50px;
  position: absolute;
  top: 35px;
  right: 10px;
  border-color: black;
  border-radius: 20px;
  background-color: #dcdcdc;
  font-size: 20px;
  color: black;
  cursor: pointer;
`

const Line = styled.div`
  width: 400px;
  height: 3px;
  position: absolute;
  top: 100px;
  background-color: black;
`

function MapSection() {
  return (
    <div className="section">
      <Container>
        <Map />
        <SearchBar>
          <Search />
          <Btn>검색</Btn>
          <Line />
        </SearchBar>
      </Container>
    </div>
  )
}

export default MapSection
