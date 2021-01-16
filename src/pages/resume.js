import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import ExtLink from "gatsby-theme-blog/src/components/extlink"
import { Styled } from "theme-ui"

const Company = props => <Styled.h2 {...props} />
const Position = props => <Styled.h3 {...props} />
const Period = props => <Styled.h4 {...props} />

export default function ResumePage(props) {
  return (
    <BlogLayout location={props.location} title="Aleksander Adamowski - Resume">
      <div>
        <Styled.h1>My Resume</Styled.h1>

        <Company><ExtLink href="https://www.altkom.pl" text="Altkom Akademia S.A."/></Company>

        <Period>Oct 2003 - Aug 2008</Period>
        <Position>Corporate Systems Administrator</Position>
        <p>
          System administrator in one of the largest IT companies in Poland.
        </p>

        <p>Gained experience with the following technologies and concepts:</p>
        <ul>
          <li>
            IT Systems security (no single intrusion/incident during the whole
            period up to date)
          </li>
          <li>
            LDAP (mainly OpenLDAP administration and writing lots of software
            that interfaces with LDAP servers, plus devising a replication +
            failover scheme for the company's main directory)
          </li>
          <li>
            Network backup - IBM Tivoli Storage Manager, multi-terabyte
            installation that includes a SAN array and a fully automated
            dual-drive 20 TB tape library
          </li>
          <li>
            Internet mail and groupware (Courier mail system and eGroupWare +
            own customisations)
          </li>
          <li> Automation of administrative processes and workflow</li>
          <li>
            Knowledge management (with the help of TWiki and eGroupWare systems)
          </li>
        </ul>

        <Period>Oct 1999 - Sep 2003</Period>
        <Position>Trainer and Consultant</Position>
        <p>Trainer in the area of office applications, VBA programming and web development.</p>

        <Company>Daewoo Dacom Communications</Company>

        <Period>1998 - 1999</Period>
        <Position>IT Specialist</Position>
        <p>Maintaining office computers, printers, small networking maintenance</p>
      </div>
    </BlogLayout>
  )
}
