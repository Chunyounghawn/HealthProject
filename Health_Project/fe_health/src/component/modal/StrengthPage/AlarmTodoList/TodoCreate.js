import React, { useState } from "react"
import styled, { css } from "styled-components"
import { MdAdd } from "react-icons/md"
import { useTodoDispatch, useTodoNextId } from "./TodoContext"

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  position: absolute;
`

const TimerInput = styled(Input)`
  left: 0px;
`

const WaterInput = styled(Input)`
  right: 0px;
`

const handleOnClick = () => {}

const handleOnKeyPress = (e) => {
  if (e.key === "Enter") {
    handleOnClick()
  }
}

function TodoCreate() {
  const [open, setOpen] = useState(false)
  const [Timervalue, setTimerValue] = useState("")
  const [Watervalue, setWaterValue] = useState("")

  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  const onToggle = () => setOpen(!open)
  const onTimerChange = (e) => setTimerValue(e.target.value)
  const onWaterChange = (e) => setWaterValue(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault() // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        timertext: Timervalue,
        watertext: Watervalue,
      },
    })
    setTimerValue("")
    setWaterValue("")
    setOpen(false)
    nextId.current += 1
  }

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <TimerInput
              autoFocus
              placeholder="추가할 시간을 입력하세요"
              onChange={onTimerChange}
              value={Timervalue}
            />
          </InsertForm>
          <InsertForm onSubmit={onSubmit}>
            <WaterInput
              autoFocus
              placeholder="추가할 물의양을 입력하세요"
              onChange={onWaterChange}
              value={Watervalue}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default React.memo(TodoCreate)
