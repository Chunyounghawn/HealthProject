import React, { useCallback, useState } from "react"
import styled from "styled-components"

const UserInfo = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  background-color: orange;
`

const Menu = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
const MenuTop = styled(Menu)`
  height: 30px;
  background-color: #51ffa6;
  border-radius: 30px 30px 0px 0px;
`

const MenuBottom = styled(Menu)`
  height: 70px;
  background-color: #c8c8c8;
  border-radius: 0px 0px 30px 30px;
`

const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const RadioBox = styled.form`
  font-size: 20px;
  font-weight: bold;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

const GenderBtn = styled.input`
  width: 20px;
  height: 20px;
`

const UserInput = styled.input`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  text-align: right;
`

const DefaultInfo = () => {
  const [AgeValue, setAgeValue] = useState("")
  const [HeightValue, setHeightValue] = useState("")
  const [WeightValue, setWeightValue] = useState("")

  const onAgeChange = useCallback((e) => {
    setAgeValue(e.target.AgeValue)
  })

  const onHeightChange = useCallback((e) => {
    setHeightValue(e.target.HeightValue)
  })

  const onWeightChange = useCallback((e) => {
    setWeightValue(e.target.WeightValue)
  })

  return (
    <>
      <UserInfo>
        <MenuTop>
          <Text>성별</Text>
        </MenuTop>
        <MenuBottom>
          <RadioBox>
            <GenderBtn type="radio" name="gender" value="male" />
            남자
            <GenderBtn type="radio" name="gender" value="female" />
            여자
          </RadioBox>
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>나이</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="age"
            value={AgeValue || undefined}
            placeholder="세(만)"
            onChange={onAgeChange}
          />
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>키</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="height"
            value={HeightValue || undefined}
            placeholder="cm"
            onChange={onHeightChange}
          />
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>몸무게</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="weight"
            value={WeightValue || undefined}
            placeholder="kg"
            onChange={onWeightChange}
          />
        </MenuBottom>
      </UserInfo>
    </>
  )
}

export default DefaultInfo
