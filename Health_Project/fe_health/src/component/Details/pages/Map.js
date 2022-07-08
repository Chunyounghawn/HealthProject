import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import map from "../../../video/ViewDetails/map.mp4"
import { MapImg } from "../../../image/index.js"

const Map = () => {
  return (
    <HoverVideoPlayer
      videoSrc={map}
      videoStyle={{
        width: "700px",
        height: "350px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={MapImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Map
