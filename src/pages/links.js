import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import ExtLink from "gatsby-theme-blog/src/components/extlink"
import { Styled } from "theme-ui"

export default function LinksPage(props) {
  return (
    <BlogLayout location={props.location} title="Aleksander Adamowski - Links">
      <div>
        <Styled.h1>My Links</Styled.h1>
        <p>
          <ExtLink
            href="https://www.linkedin.com/in/aleksanderadamowski/"
            text="LinkedIn"
          />
        </p>
        <p>
          <ExtLink href="https://github.com/aadamowski" text="GitHub" />
        </p>
      </div>
    </BlogLayout>
  )
}
