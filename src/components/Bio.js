import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "./profile-pic.jpg";
import typography from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: typography.rhythm(2.5),
          flexDirection: "column"
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={profilePic}
            alt={`Mukesh Soni`}
            style={{
              marginRight: typography.rhythm(1 / 2),
              marginBottom: 0,
              width: typography.rhythm(2),
              height: typography.rhythm(2)
            }}
          />
          <p>
            This is the personal blog of <strong>Mukesh Soni</strong>. I am a
            frontend engineer who's exhausted trying to keep up with the new
            technologies in the frontend world. I am good at JavaScript, HTML,
            CSS, React (ReactJS) and family. I have worked with nodejs but i am
            not an expert in it. I have been doing this stuff since 2011.
          </p>
        </div>
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
    );
  }
}

export default Bio;
