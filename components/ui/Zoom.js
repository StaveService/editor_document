import React, {useCallback, useState} from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

const ZoomSelect = () => {
  const [zoom, setZoom] = useState(100)
  const handleZoom = useCallback(e => {
    setZoom(e.target.value)
  }, [])

  const options = [25, 50, 75, 90, 100, 110, 125, 150, 200]
  const optionItems = options.map(option => (
    <MenuItem key={option} value={option}>
      {option}%
    </MenuItem>
  ))

  return (
    <FormControl className="Zoom">
      <InputLabel id="zoom-select-label">Zoom</InputLabel>
      <Select
        id="zoom-select"
        labelId="zoom-select-label"
        value={zoom}
        onChange={handleZoom}
      >
        {optionItems}
      </Select>
    </FormControl>
  )
}

const Zoom = () => {
  return <ZoomSelect />
}
export default Zoom
