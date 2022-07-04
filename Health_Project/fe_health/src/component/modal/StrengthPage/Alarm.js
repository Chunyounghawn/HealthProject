import React from "react"
import styled from "styled-components"
import { Close } from "../../../image/index.js"

import AlarmModal from "react-modal"

import { Water, Timer, WaterCup } from "../../../image/index.js"

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"

// TodoList
import TodoTemplate from "./AlarmTodoList/TodoTemplate.js"
import TodoHead from "./AlarmTodoList/TodoHead.js"
import TodoList from "./AlarmTodoList/TodoList.js"
import TodoCreate from "./AlarmTodoList/TodoCreate.js"
import { TodoProvider } from "./AlarmTodoList/TodoContext.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 1610px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1610px;
  height: 80px;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 790px;
  position: absolute;
  top: 80px;
  border-radius: 30px;
  background-color: skyblue;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const Symbol = styled.img`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 200px;
  left: 220px;
  &:hover {
    cursor: pointer;
  }
`

const TodoListContainer = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 100px;
  right: 150px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #47ff9c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const TimerIcon = styled.img`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 50px;
`

const CupIcon = styled.img`
  widht: 100px;
  height: 50px;
  position: absolute;
  top: 30px;
  right: 200px;
`

// Sample data
const data = [
  { name: "잔여 물 섭취량", students: 300 },
  { name: "오늘 나의 물 섭취량", students: 1700 },
]

const COLORS = ["#FFB399", "#289AFF"]

const Alarm = ({ isModal, setModal }) => {
  return (
    <AlarmModal
      isOpen={isModal}
      onRequestClose={() => setModal}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          borderRadius: "30px",
          backgroundColor: "#FBF8F1",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <PieChart
            width={700}
            height={700}
            style={{
              position: "absolute",
              top: "50px",
              left: "50px",
            }}
          >
            <Pie
              startAngle={-270}
              data={data}
              dataKey="students"
              outerRadius={250}
              innerRadius={230}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend wrapperStyle={{ bottom: 50, left: 10, fontSize: 20 }} />
            <Tooltip />
          </PieChart>
          <Symbol src={Water} />
          <TodoListContainer>
            <TodoProvider>
              <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
              </TodoTemplate>
            </TodoProvider>
          </TodoListContainer>
        </ModalBody>
      </ModalContainer>
    </AlarmModal>
  )
}

export default Alarm
