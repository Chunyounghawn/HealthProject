import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import challenge from "../../../video/ViewDetails/challenge.mp4"
import { ChallengeImg } from "../../../image/index.js"

const Challenge = () => {
  return (
    <HoverVideoPlayer
      videoSrc={challenge}
      videoStyle={{
        width: "700px",
        height: "350px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={ChallengeImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Challenge
