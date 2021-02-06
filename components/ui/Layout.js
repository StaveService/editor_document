import React, {useState, useCallback} from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"

const Layout = () => {
  const [layout, setLayout] = useState("page")

  const handleLayout = useCallback(e => {
    if (!alphaTabApi) return
    switch (e.target.value) {
      case "horizontal":
        setLayout("horizontal")
        break
      case "page":
        setLayout("page")
        break
      default:
        break
    }
  }, [])

  return (
    <FormControl className="Layout">
      <InputLabel id="layout-select-label">Layout</InputLabel>
      <Select
        id="layout-select"
        labelId="layout-select-label"
        value={layout}
        onChange={handleLayout}
        autoWidth
      >
        <MenuItem value="horizontal">Horizontal</MenuItem>
        <MenuItem value="page">Page</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Layout
