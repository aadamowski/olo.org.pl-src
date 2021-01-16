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

          <ExtLink href="https://github.com/aadamowski" text="GitHub" />
        </p>

        <p>
          <ExtLink href="https://www.facebook.com/olo" text="Facebook" />
          <ExtLink href="https://twitter.com/the_olo" text="Twitter" />
        </p>
        <p>
          <ExtLink href="https://instagram.com/aadamowski" text="Instagram" />
          <ExtLink href="https://pinterest.com/aadamowski/" text="Pinterest" />
          <ExtLink
            href="https://www.flickr.com/photos/aleksanderadamowski/"
            text="Flickr"
          />
        </p>
        <p>
          <ExtLink href="mailto:aleksander.adamowski@gmail.com" text="E-mail" />
        </p>
      </div>
    </BlogLayout>
  )
}
