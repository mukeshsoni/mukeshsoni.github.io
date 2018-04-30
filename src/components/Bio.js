import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex' }}>
          <img
            src={profilePic}
            alt={`Mukesh Soni`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <p>
            Written by <strong>Mukesh Soni</strong>. Now looking for a frontend
            gig. Good at JavaScript, reactjs and family. Knows and has worked in
            nodejs. Been doing this stuff for 7 years (since 2011).
          </p>
        </div>
        <p>
          Also getting into react-native of late and loving it. `react-native`
          might be the future of mobile development.
        </p>
        <p>
          Loves functional programming. Knows a little bit of purescript,
          haskell and elm. You can ask me about functors 😜.
        </p>
        <a
          style={{ textDecoration: 'none', boxShadow: 'none' }}
          href="https://twitter.com/mukeshsoni"
        >
          Follow me on Twitter
        </a>
        <a
          style={{ textDecoration: 'none', boxShadow: 'none' }}
          href="https://github.com/mukeshsoni"
        >
          Look at my open source work on github
        </a>
      </div>
    )
  }
}

export default Bio
