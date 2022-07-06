import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import notice from "../../../video/ViewDetails/notice.mp4"
import { NoticeImg } from "../../../image/index.js"

const Notice = () => {
  return (
    <HoverVideoPlayer
      videoSrc={notice}
      videoStyle={{
        width: "700px",
        height: "350px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={NoticeImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Notice
