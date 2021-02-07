import React from "react"
import {Link as NextLink} from "next/link"
import {makeStyles} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position="fixed" color="default">
      <Toolbar>
        <Link color="inherit" underline="none" component={NextLink} href="/">
          <Typography variant="h6">StaveEditor</Typography>
        </Link>
        <Box ml={5}>
          <Button component={NextLink} href="/documents">
            Documents
          </Button>
          <Button component={NextLink} href="/releases">
            Releases
          </Button>
        </Box>
        <Box ml="auto">
          <IconButton
            component={Link}
            href="https://github.com/izszzz/stave_docs"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
