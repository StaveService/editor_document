import React, {useState} from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import PauseIcon from "@material-ui/icons/Pause"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

const Pause = () => {
  const [playerState, setPlayerState] = useState(false)
  const handleClick = () => setPlayerState(prev => !prev)
  return (
    <ToggleButton onClick={handleClick}>
      {playerState ? <PlayArrowIcon /> : <PauseIcon />}
    </ToggleButton>
  )
}

export default Pause
