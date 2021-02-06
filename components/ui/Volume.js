import React, {useState} from "react"
import Box from "@material-ui/core/Box"
import Slider from "@material-ui/core/Slider"
import ToggleButton from "@material-ui/lab/ToggleButton"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"
import VolumeMuteIcon from "@material-ui/icons/VolumeMute"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"

const VolumeIcon = ({value, muted}) => {
  if (muted) return <VolumeOffIcon />
  if (value >= 60) return <VolumeUpIcon />
  if (value >= 30) return <VolumeDownIcon />
  return <VolumeMuteIcon />
}

const Volume = () => {
  const SLIDER_VALUE = 200
  const [value, setValue] = useState(SLIDER_VALUE)
  const [selected, setSelected] = useState(false)

  const handleChangeValue = (_e, newValue) => setValue(newValue)
  const handleClickValue = e => e.stopPropagation()

  const handleChangeSelected = () => {
    setSelected(!selected)
  }

  return (
    <ToggleButton selected={selected} onChange={handleChangeSelected}>
      <Box width={SLIDER_VALUE} display="flex" alignItems="center">
        <VolumeIcon value={value} muted={selected} />
        <Slider
          value={value}
          onClick={handleClickValue}
          onChange={handleChangeValue}
        />
      </Box>
    </ToggleButton>
  )
}

export default Volume
