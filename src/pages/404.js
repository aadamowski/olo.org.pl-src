import React from "react"
import BlogLayout from "../components/layout"

const NotFoundPage = props => (
  <BlogLayout
    location={props.location}
    title="Aleksander Adamowski - not found"
  >
    <main>
      <h1>Page not found</h1>
      <p>Please check that the URL you got is correct.</p>
    </main>
  </BlogLayout>
)
export default NotFoundPage
