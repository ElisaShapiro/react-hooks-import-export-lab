import React from "react";
import { image } from "/Users/elisashapiro/Development/Code/Mod2/labs/react-hooks-import-export-lab/src/data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;