import React from "react"
import Header from "gatsby-theme-blog/src/components/header"
import Navlink from "gatsby-theme-blog/src/components/navlink"
import { css, Styled } from "theme-ui"

export default props => (
  <Header {...props}>
    <Styled.div
      css={css({
        ml: 1,
        mr: 1,
      })}
    >
      <Navlink to="/" text="About" />
      |
      <Navlink to="/resume" text="Resume" />
      |
      <Navlink to="/notes" text="Notes" />
      |
      <Navlink to="/blog" text="Blog" />
      |
      <Navlink to="/links" text="Links" />
    </Styled.div>
  </Header>
)
