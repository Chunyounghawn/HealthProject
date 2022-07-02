import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import strength from "../../../video/ViewDetails/strength.mp4"
import { StrengthImg } from "../../../image/index.js"

const Strength = () => {
  return (
    <HoverVideoPlayer
      videoSrc={strength}
      videoStyle={{
        width: "700px",
        height: "350px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={StrengthImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Strength
