import React from "react"
import {MDXProvider} from "@mdx-js/react"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
const SingleColumn = ({children}) => (
  <Box display="flex">
    <Header />
    <Sidebar />
    <Container>
      <Toolbar />
      <MDXProvider>{children}</MDXProvider>
    </Container>
  </Box>
)

export default SingleColumn
