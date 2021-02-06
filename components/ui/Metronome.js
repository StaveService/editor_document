import React, {useState} from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import {GiMetronome} from "react-icons/gi"

const CountIn = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => setSelected(!selected)

  return (
    <ToggleButton value="check" selected={selected} onClick={handleClick}>
      <GiMetronome size={24} />
    </ToggleButton>
  )
}

export default CountIn
