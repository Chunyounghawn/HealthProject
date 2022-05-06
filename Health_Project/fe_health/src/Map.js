import React, { useEffect } from "react"

const { kakao } = window

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("myMap")
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
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
        height: "651px",
      }}
    ></div>
  )
}

export default Map
