import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"

export default function Home(props) {
  return <BlogLayout location={props.location} title="Aleksander Adamowski - landing page">
    <div>
      <h1>Hello and welcome to my personal website!</h1>
      <p>This is pretty rudimentary; choose any sections of interest at the top.</p>
    </div>
  </BlogLayout>
}
