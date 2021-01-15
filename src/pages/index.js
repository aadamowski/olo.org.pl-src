import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import { Styled } from "theme-ui"

export default function Home(props) {
  return (
    <BlogLayout
      location={props.location}
      title="Aleksander Adamowski - About Me"
    >
      <main>
        <Styled.h1>About me</Styled.h1>
        <p>
          I'm a technology progessional with over 20 years of experience in a
          wide array of domains - software engineering, system administration,
          full stack software development, with a focus on information security.
        </p>
        <p>Happily married with 2 kids.</p>
        <p>
          In my free time, I like to exercise (I love HIIT/Tabata and heavy
          lifting), hike, sing karaoke and play video games with friends and my
          kids. Recently started to learn playing electric guitar.
        </p>
      </main>
    </BlogLayout>
  )
}
