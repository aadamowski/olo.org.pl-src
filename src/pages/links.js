import React from "react"
import BlogLayout from "../components/layout"
import ExtLink from "gatsby-theme-blog/src/components/extlink"
import Para from "gatsby-theme-blog/src/components/para"
import { css, Styled } from "theme-ui"

const MyLink = props => <ExtLink {...props} css={css({ margin: `2em` })} />
const OpenSourceContrib = props => (
  <MyLink {...props} css={css({ marginTop: `2em` })} />
)

export default function LinksPage(props) {
  return (
    <BlogLayout location={props.location} title="Aleksander Adamowski - Links">
      <div>
        <Styled.h1>My Links</Styled.h1>
        <p>
          <MyLink
            href="https://www.linkedin.com/in/aleksanderadamowski/"
            text="LinkedIn"
          />

          <MyLink href="https://github.com/aadamowski" text="GitHub" />
        </p>

        <p>
          <MyLink href="https://www.facebook.com/olo" text="Facebook" />
          <MyLink href="https://twitter.com/the_olo" text="Twitter" />
        </p>
        <p>
          <MyLink href="https://instagram.com/aadamowski" text="Instagram" />
          <MyLink href="https://pinterest.com/aadamowski/" text="Pinterest" />
          <MyLink
            href="https://www.flickr.com/photos/aleksanderadamowski/"
            text="Flickr"
          />
        </p>
        <p>
          <MyLink href="mailto:aleksander.adamowski@gmail.com" text="E-mail" />
        </p>
        <hr />
        <Styled.h2>Open source contributions</Styled.h2>
        <OpenSourceContrib
          href="https://github.com/aadamowski?tab=overview&amp;from=2013-06-01&amp;to=2014-09-30"
          text="Readium.js EPUB e-Book engine"
        />
        <Para>
          Implemented e-Book contents loading into memory from a remote EPUB
          (essentially a zip archive) incrementally (without pre-emptive
          unpacking of the ZIP archive).
        </Para>
        <OpenSourceContrib
          href="https://bugzilla.mindrot.org/show_bug.cgi?id=2521"
          text="OpenSSH"
        />
        <Para>
          Fixed an obscure bug in session key rekeying threshold computations.
          This was a bug that was causing <code>scp</code> transfers above 64
          GiB to fail on some SSH builds (notably RedHat/CentOS).
        </Para>
        <OpenSourceContrib
          href="https://github.com/systemd/systemd/pull/2304"
          text="systemd"
        />
        <Para>
          Fixed a <code>journald</code> logging bug.
        </Para>
      </div>
    </BlogLayout>
  )
}
