import { graphql } from "gatsby"

import Note from "gatsby-theme-notes/src/templates/note"

export default Note

// Note: This will cause noise because of https://github.com/gatsbyjs/gatsby/issues/23729
export const pageQuery = graphql`
  query($id: String!) {
    note: mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
