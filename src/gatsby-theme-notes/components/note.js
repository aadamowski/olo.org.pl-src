import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"

const WikiPage = ({
  data: {
    note: { body, tableOfContents },
    site: {
      siteMetadata: { title },
    },
  },
  ...props
}) => (
  <Layout {...props} title={title}>
    <MDXRenderer tableOfContents={tableOfContents} {...props}>
      {body}
    </MDXRenderer>
  </Layout>
)

export default WikiPage
