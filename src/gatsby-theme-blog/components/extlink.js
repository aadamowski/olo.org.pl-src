import React from "react"
import { css, Styled } from "theme-ui"

export default ({ href, text }) => (
  <Styled.a
    href={href}
    css={css({
      fontFamily: `heading`,
      fontWeight: `bold`,
      textDecoration: `none`,
      ":hover": {
        textDecoration: `underline`,
      },
    })}
  >
    {text}
  </Styled.a>
)
