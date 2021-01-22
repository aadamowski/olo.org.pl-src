import React from "react"
import { css, Styled } from "theme-ui"

const TocContainer = ({ ...props }) => (
  <Styled.ul
    css={css({
      fontFamily: `heading`,
      fontWeight: `bold`,
      textDecoration: `none`,
      ":hover": {
        textDecoration: `underline`,
      },
      position: `fixed`,
      left: `calc(67%)`,
      top: `calc(15%)`,
      maxHeight: `70vh`,
      maxWidth: `30em`,
      display: `flex`,
    })}
  >
    {props.children}
  </Styled.ul>
)
const InnerScroll = ({ ...props }) => (
  <Styled.div
    css={css({
      overflow: `hidden`,
      overflowY: `scroll`,
    })}
  >
    {props.children}
  </Styled.div>
)

const renderItem = item => {
  var subItems =
    typeof item.items === "undefined" ? null : item.items.map(renderItem)

  return (
    <li key={item.url}>
      <Styled.a href={item.url} key={item.url}>
        {item.title}
      </Styled.a>
      <ul>{subItems}</ul>
    </li>
  )
}

export default function Toc({ tableOfContents }) {
  return typeof tableOfContents.items === "undefined" ? null : (
    <TocContainer>
      <InnerScroll>
        <h2>Table of Contents:</h2>
        {tableOfContents.items.map(renderItem)}
      </InnerScroll>
    </TocContainer>
  )
}
