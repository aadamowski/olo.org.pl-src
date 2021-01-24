import React from "react"
import BlogLayout from "src/components/layout"
import Helmet from "react-helmet"

export default props => (
  <BlogLayout {...props}>
    <Helmet title="Aleksander Adamowski - Notes" />
    {props.children}
  </BlogLayout>
)
