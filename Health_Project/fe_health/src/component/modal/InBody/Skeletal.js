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

let Months = new Array(12)

const Skeletal = () => {
  const [January, setJanuary] = useState("")
  const [February, setFebruary] = useState("")
  const [March, setMarch] = useState("")
  const [April, setApril] = useState("")
  const [May, setMay] = useState("")
  const [June, setJune] = useState("")

  const [July, setJuly] = useState("")
  const [August, setAugust] = useState("")
  const [September, setSeptember] = useState("")
  const [October, setOctober] = useState("")
  const [November, setNovember] = useState("")
  const [December, setDecember] = useState("")

  Months[0] = January
  Months[1] = February
  Months[2] = March
  Months[3] = April
  Months[4] = May
  Months[5] = June
  Months[6] = July
  Months[7] = August
  Months[8] = September
  Months[9] = October
  Months[10] = November
  Months[11] = December

  const onJanuaryChange = useCallback((e) => {
    setJanuary(e.target.January)
  })

  const onFebruaryChange = useCallback((e) => {
    setFebruary(e.target.February)
  })

  const onMarchChange = useCallback((e) => {
    setMarch(e.target.March)
  })

  const onAprilChange = useCallback((e) => {
    setApril(e.target.April)
  })

  const onMayChange = useCallback((e) => {
    setMay(e.target.May)
  })

  const onJuneChange = useCallback((e) => {
    setJune(e.target.June)
  })

  const onJulyChange = useCallback((e) => {
    setJuly(e.target.July)
  })

  const onAugustChange = useCallback((e) => {
    setAugust(e.target.August)
  })

  const onSeptemberChange = useCallback((e) => {
    setSeptember(e.target.September)
  })

  const onOctoberChange = useCallback((e) => {
    setOctober(e.target.October)
  })

  const onNovemberChange = useCallback((e) => {
    setNovember(e.target.November)
  })

  const onDecemberChange = useCallback((e) => {
    setDecember(e.target.December)
  })

  return (
    <>
      <MonthBox>
        <Month>1월</Month>
        <UserInput
          type="text"
          name="height"
          value={January || undefined}
          placeholder="kg"
          onChange={onJanuaryChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>2월</Month>
        <UserInput
          type="text"
          name="height"
          value={February || undefined}
          placeholder="kg"
          onChange={onFebruaryChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>3월</Month>
        <UserInput
          type="text"
          name="height"
          value={March || undefined}
          placeholder="kg"
          onChange={onMarchChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>4월</Month>
        <UserInput
          type="text"
          name="height"
          value={April || undefined}
          placeholder="kg"
          onChange={onAprilChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>5월</Month>
        <UserInput
          type="text"
          name="height"
          value={May || undefined}
          placeholder="kg"
          onChange={onMayChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>6월</Month>
        <UserInput
          type="text"
          name="height"
          value={June || undefined}
          placeholder="kg"
          onChange={onJuneChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>7월</Month>
        <UserInput
          type="text"
          name="height"
          value={July || undefined}
          placeholder="kg"
          onChange={onJulyChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>8월</Month>
        <UserInput
          type="text"
          name="height"
          value={August || undefined}
          placeholder="kg"
          onChange={onAugustChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>9월</Month>
        <UserInput
          type="text"
          name="height"
          value={September || undefined}
          placeholder="kg"
          onChange={onSeptemberChange}
        />
      </MonthBox>

      <MonthBox>
        <Month>10월</Month>
        <UserInput
          type="text"
          name="height"
          value={October || undefined}
          placeholder="kg"
          onChange={onOctoberChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>11월</Month>
        <UserInput
          type="text"
          name="height"
          value={November || undefined}
          placeholder="kg"
          onChange={onNovemberChange}
        />
      </MonthBox>
      <MonthBox>
        <Month>12월</Month>
        <UserInput
          type="text"
          name="height"
          value={December || undefined}
          placeholder="kg"
          onChange={onDecemberChange}
        />
      </MonthBox>
    </>
  )
}

export default Skeletal
