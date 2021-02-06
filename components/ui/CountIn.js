import React, {useState} from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import TimerIcon from "@material-ui/icons/Timer"

const CountIn = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!selected)
  }
  return (
    <ToggleButton value="check" selected={selected} onClick={handleClick}>
      <TimerIcon />
    </ToggleButton>
  )
}

export default CountIn
