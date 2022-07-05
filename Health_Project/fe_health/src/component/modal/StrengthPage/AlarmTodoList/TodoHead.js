import React from "react"
import styled from "styled-components"
import { useTodoState } from "./TodoContext"

const TodoHeadBlock = styled.div`
  padding-top: 10px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 20px;
    color: #343a40;
  }
  .day {
    margin-top: 10px;
    color: #868e96;
    font-size: 15px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 15px;
    margin-top: 10px;
    font-weight: bold;
  }
`

function TodoHead() {
  const todos = useTodoState()
  const undoneTasks = todos.filter((todo) => todo.id)

  const today = new Date()
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" })

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">
        추가한 물 알람 갯수: {undoneTasks.length}
      </div>
    </TodoHeadBlock>
  )
}

export default TodoHead