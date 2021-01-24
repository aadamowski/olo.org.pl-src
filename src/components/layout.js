import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import Helmet from "react-helmet"

export default ({ children, ...props }) => {
  return (
    <BlogLayout {...props}>
      <Helmet title={props.title} />
      {children}
    </BlogLayout>
  )
}
