import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

export default ({ to, text}) => (
    <Styled.a
      as={Link}
      to={to}
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
