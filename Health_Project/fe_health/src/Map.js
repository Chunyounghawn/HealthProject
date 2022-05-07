import React, { useEffect } from "react"

const { kakao } = window

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("myMap")
    const options = {
      center: new kakao.maps.LatLng(35.8960664, 128.622118),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
  }, [])

  return (
    <div
      id="myMap"
      style={{
        position: "relative",
        top: "50px",
        left: "100px",
        width: "1540px",
        height: "650px",
      }}
    ></div>
  )
}

export default Map
