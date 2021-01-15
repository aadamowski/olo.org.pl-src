import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import Navlink from "gatsby-theme-blog/src/components/navlink"
import { Styled } from "theme-ui"

export default function LinksPage(props) {
  return (
    <BlogLayout location={props.location} title="Aleksander Adamowski - Links">
      <div>
        <Styled.h1>My Links</Styled.h1>
        <p>
          <Navlink
            to="https://www.linkedin.com/in/aleksanderadamowski/"
            text="LinkedIn"
          />
        </p>
        <p>
          <Navlink to="https://github.com/aadamowski" text="GitHub" />
        </p>
      </div>
    </BlogLayout>
  )
}
