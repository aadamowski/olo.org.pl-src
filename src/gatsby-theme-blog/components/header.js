import React from "react"
import Header from "gatsby-theme-blog/src/components/header"
import Navlink from "gatsby-theme-blog/src/components/navlink"

export default props => (
  <Header {...props}>
    <Navlink to="/notes" text="Notes"/>
    <Navlink to="/blog" text="Blog"/>
  </Header>
)
