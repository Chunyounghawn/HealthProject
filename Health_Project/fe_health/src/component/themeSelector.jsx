import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "../redux/themeSelector"

const Theme = () => {
  const { theme } = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(darkTheme())}>button1</button>
      <button onClick={() => dispatch(lightTheme())}>button2</button>
    </div>
  )
}

export default Theme
