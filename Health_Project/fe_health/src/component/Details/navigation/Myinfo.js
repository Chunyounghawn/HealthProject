import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import myinfo from "../../../video/ViewDetails/myinfo.mp4"
import { MyinfoImg } from "../../../image/index.js"

const Myinfo = () => {
  return (
    <HoverVideoPlayer
      videoSrc={myinfo}
      videoStyle={{
        width: "700px",
        height: "350px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={MyinfoImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Myinfo
