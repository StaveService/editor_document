import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import Header from "../components/Header"

const SingleColumn = ({children}) => (
  <>
    <Header />
    <Toolbar />
    {children}
  </>
)

export default SingleColumn
