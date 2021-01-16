import React from "react"
import BlogLayout from "gatsby-theme-blog/src/components/layout"
import ExtLink from "gatsby-theme-blog/src/components/extlink"
import YearsSince from "gatsby-theme-blog/src/components/yearssince"
import { css, Styled } from "theme-ui"

const Company = props => (
  <Styled.h2
    {...props}
    css={css({ borderTop: `thin solid gray`, paddingTop: `0.5em` })}
  />
)
const Position = props => <Styled.h3 {...props} />
const Period = props => <Styled.h4 {...props} />

export default function ResumePage(props) {
  return (
    <BlogLayout location={props.location} title="Aleksander Adamowski - Resume">
      <div>
        <Styled.h1>My Resume</Styled.h1>

        <Company>
          <ExtLink href="https://www.facebook.com/" text="Facebook, Inc." />
        </Company>

        <Period>
          March 2016 - Now (<YearsSince startDate="2014-10-20T09:00:00-07:00" />{" "}
          years)
        </Period>
        <Position>
          <ExtLink
            href="https://engineering.fb.com/category/production-engineering/"
            text="Production Engineer"
          />
        </Position>
        <q>
          Production Engineering at Facebook is a hybrid between software and
          systems engineering; it keeps Facebook running smoothly and scaling
          efficiently. The Production Engineering team works within Facebook’s
          product and infrastructure teams to make sure our services are
          reliable and scalable. The team writes code and debugs hard problems
          in live production that impact more than 2 billion people around the
          world.
        </q>
        <p> </p>

        <Period>Oct 2014 - Feb 2016 (1.5 years)</Period>
        <Position>
          <ExtLink
            href="https://engineering.fb.com/category/security/"
            text="Security Engineer"
          />
        </Position>
        <q>
          Facebook Security strives to create and maintain the safest
          environment possible for people on Facebook. We are building the
          technologies that lay the groundwork for more than 2 billion people
          around the world to connect and share with each other safely.
        </q>
        <p> </p>

        <Company>
          <ExtLink href="https://www.pzu.pl/" text="Grupa PZU" />
        </Company>

        <Period>Oct 2010 - Sep 2014 (4 years)</Period>
        <Position>
          <ExtLink
            href="http://en.wikipedia.org/wiki/Systems_architect"
            text="Systems Architect"
          />
        </Position>

        <ul>
          <li>Defined architecture and requirements for information systems</li>
          <li>
            Provided technical expertise during negotiations with external
            software houses
          </li>
          <li>Implemented key pieces of systems</li>
          <li>Defined internal technology standards</li>
        </ul>

        <Company>
          <ExtLink
            href="https://www.fiserv.com/en-pl/"
            text="First Data Polska S.A."
          />
        </Company>

        <Period>Sep 2008 - Nov 2010 (2 years)</Period>
        <Position>Senior Application Developer</Position>
        <p>Design and development of card payments processing applications.</p>

        <Company>
          <ExtLink href="https://www.altkom.pl" text="Altkom Akademia S.A." />
        </Company>

        <Period>Oct 2003 - Aug 2008 (5 years)</Period>
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

        <Period>Oct 1999 - Sep 2003 (4 years)</Period>
        <Position>Trainer and Consultant</Position>
        <p>
          Trainer in the area of office applications, VBA programming and web
          development.
        </p>

        <Company>Daewoo Dacom Communications</Company>

        <Period>1998 - 1999 (1 year)</Period>
        <Position>IT Specialist</Position>
        <p>
          Maintaining office computers, printers, small networking maintenance
        </p>
      </div>
    </BlogLayout>
  )
}
