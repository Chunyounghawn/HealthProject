import React, { useCallback, useState } from "react"
import styled from "styled-components"

const MonthBox = styled.div`
  width: 90px;
  height: 130px;
  background-color: #ff9614;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
`

const Month = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffdcdc;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`

const UserInput = styled.input`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  text-align: right;
`

export let BodyFatMonths = new Array(12)

const BodyFat = () => {
  const [January, setJanuary] = useState()
  const [February, setFebruary] = useState()
  const [March, setMarch] = useState()
  const [April, setApril] = useState()
  const [May, setMay] = useState()
  const [June, setJune] = useState()

  const [July, setJuly] = useState()
  const [August, setAugust] = useState()
  const [September, setSeptember] = useState()
  const [October, setOctober] = useState()
  const [November, setNovember] = useState()
  const [December, setDecember] = useState()

  const onJanuaryChange = (e) => {
    BodyFatMonths[0] = e.target.value
    setJanuary(BodyFatMonths[0])
  }

  const onFebruaryChange = (e) => {
    BodyFatMonths[1] = e.target.value
    setFebruary(BodyFatMonths[1])
  }

  const onMarchChange = (e) => {
    BodyFatMonths[2] = e.target.value
    setMarch(BodyFatMonths[2])
  }

  const onAprilChange = (e) => {
    BodyFatMonths[3] = e.target.value
    setApril(BodyFatMonths[3])
  }

  const onMayChange = (e) => {
    BodyFatMonths[4] = e.target.value
    setMay(BodyFatMonths[4])
  }

  const onJuneChange = (e) => {
    BodyFatMonths[5] = e.target.value
    setJune(BodyFatMonths[5])
  }

  const onJulyChange = (e) => {
    BodyFatMonths[6] = e.target.value
    setJuly(BodyFatMonths[6])
  }

  const onAugustChange = (e) => {
    BodyFatMonths[7] = e.target.value
    setAugust(BodyFatMonths[7])
  }

  const onSeptemberChange = (e) => {
    BodyFatMonths[8] = e.target.value
    setSeptember(BodyFatMonths[8])
  }

  const onOctoberChange = (e) => {
    BodyFatMonths[9] = e.target.value
    setOctober(BodyFatMonths[9])
  }

  const onNovemberChange = (e) => {
    BodyFatMonths[10] = e.target.value
    setNovember(BodyFatMonths[10])
  }

  const onDecemberChange = (e) => {
    BodyFatMonths[11] = e.target.value
    setDecember(BodyFatMonths[11])
  }

  return (
    <>
      <MonthBox>
        <Month>1월</Month>
        <UserInput
          type="text"
          name="height"
          value={January || ""}
          placeholder="kg"
          onChange={onJanuaryChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>2월</Month>
        <UserInput
          type="text"
          name="height"
          value={February || ""}
          placeholder="kg"
          onChange={onFebruaryChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>3월</Month>
        <UserInput
          type="text"
          name="height"
          value={March || ""}
          placeholder="kg"
          onChange={onMarchChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>4월</Month>
        <UserInput
          type="text"
          name="height"
          value={April || ""}
          placeholder="kg"
          onChange={onAprilChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>5월</Month>
        <UserInput
          type="text"
          name="height"
          value={May || ""}
          placeholder="kg"
          onChange={onMayChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>6월</Month>
        <UserInput
          type="text"
          name="height"
          value={June || ""}
          placeholder="kg"
          onChange={onJuneChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>7월</Month>
        <UserInput
          type="text"
          name="height"
          value={July || ""}
          placeholder="kg"
          onChange={onJulyChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>8월</Month>
        <UserInput
          type="text"
          name="height"
          value={August || ""}
          placeholder="kg"
          onChange={onAugustChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>9월</Month>
        <UserInput
          type="text"
          name="height"
          value={September || ""}
          placeholder="kg"
          onChange={onSeptemberChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>10월</Month>
        <UserInput
          type="text"
          name="height"
          value={October || ""}
          placeholder="kg"
          onChange={onOctoberChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>11월</Month>
        <UserInput
          type="text"
          name="height"
          value={November || ""}
          placeholder="kg"
          onChange={onNovemberChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>12월</Month>
        <UserInput
          type="text"
          name="height"
          value={December || ""}
          placeholder="kg"
          onChange={onDecemberChange}
        />
      </MonthBox>
    </>
  )
}

export default BodyFat
