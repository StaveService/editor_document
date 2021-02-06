import React, {useState} from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import PauseIcon from "@material-ui/icons/Pause"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

const Pause = () => (
  <ToggleButton value="check" selected>
    <SkipPreviousIcon />
  </ToggleButton>
)

export default Pause
