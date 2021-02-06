import React, {useState} from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import RepeatIcon from "@material-ui/icons/Repeat"

const Loop = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => setSelected(!selected)

  return (
    <ToggleButton value="check" selected={selected} onClick={handleClick}>
      <RepeatIcon />
    </ToggleButton>
  )
}

export default Loop
