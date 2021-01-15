import React from "react"
import Header from "gatsby-theme-blog/src/components/header"
import Navlink from "gatsby-theme-blog/src/components/navlink"

export default props => (
  <Header {...props}>
    <Navlink to="/" text="About Me"/>
    <Navlink to="/notes" text="Notes"/>
    <Navlink to="/blog" text="Blog"/>
    <Navlink to="/links" text="Links"/>
  </Header>
)
