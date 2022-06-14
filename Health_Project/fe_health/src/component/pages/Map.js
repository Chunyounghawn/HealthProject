import React, { useState } from "react"
import styled from "styled-components"
import Map from "./api/Map"



function MapSection() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <div className="section"
        style=
        {
          { backgroundColor: `${(props) => props.theme.questionPage.backgroundColor}` }
        }>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
        <Map searchPlace={Place} />
      </div>
    </>
  )
}

export default MapSection
