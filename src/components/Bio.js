import React from "react"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import profilePic from "./profile-pic.jpg"
import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2.5),
          flexDirection: "column"
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={profilePic}
            alt={`Mukesh Soni`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2)
            }}
          />
          <p>
            Written by <strong>Mukesh Soni</strong>. Now looking for a frontend
            gig. Good at JavaScript, reactjs and family. Knows and has worked in
            nodejs. Been doing this stuff for 7 years (since 2011).
          </p>
        </div>
        <p>
          I transitioned into web development from a business analyst role 7
          years back and have never looked back.
        </p>
        <p>
          I like the ideas behind functional programming and try to use them as
          much as possible in my own code. Immutability rules.
        </p>
        <p>
          I also love looking into ways to make a developers life easier and try
          building tools to improve developer productivity. This i do in my free
          time.
        </p>
        <p>
          Currently use reactjs and redux for writing complex frontend
          applications. Have decent knowledge about CSS, Haskell and elm too.
        </p>
        <p>
          Have been getting into `react-native` of late and loving it.
          `react-native` might be the future of mobile development.
        </p>
        <p>
          Know a little bit of purescript, haskell and elm. You can ask me about
          functors 😜.
        </p>
        <a
          style={{ textDecoration: "none", boxShadow: "none" }}
          href="https://twitter.com/mukeshsoni"
        >
          Follow me on Twitter
        </a>
        <a
          style={{ textDecoration: "none", boxShadow: "none" }}
          href="https://github.com/mukeshsoni"
        >
          Look at my open source work on github
        </a>
      </div>
    )
  }
}

export default Bio
