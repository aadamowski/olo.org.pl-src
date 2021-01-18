import React from "react"
import { css, Styled } from "theme-ui"

export default ({...props}) => (
    <Styled.div
      css={css({
        ml: 3,
        mr: `auto`,
      })}
    >
      {props.children}
    </Styled.div>
)
