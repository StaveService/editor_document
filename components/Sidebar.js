import React from "react"
import Link from "next/link"
import {makeStyles} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"

const useStyles = makeStyles({
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
  },
})
const Sidebar = () => {
  const classes = useStyles()
  return (
    <Drawer
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
      variant="permanent"
    >
      <Toolbar />
      <List>
        <Link href="/documents">
          <ListItem button>
            <ListItemText primary="Overview" />
          </ListItem>
        </Link>
        <Link href="/documents/ui">
          <ListItem button>
            <ListItemText primary="UI" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}

export default Sidebar
