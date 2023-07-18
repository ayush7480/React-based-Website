import React, { Component } from "react";
import "./About.css"; // Import custom CSS file for styling

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>ABOUT ME</h2>
        <div className="about-content">
          <div className="profile-image-container">
            <img
              src={require("./IMG20230309211229.jpg")}
              alt="Profile"
              className="profile-image"
            />
          </div>
          <div className="profile-description">
            <h3>Ayush Sharma</h3>
            <p>
              Hi, this is my first React website, and I decided to create it because I noticed a lot of excitement surrounding
              React in the business world. I wanted to explore React and see what all the hype was about. I must say, React is
              truly a remarkable technology. It allows for interactive user experiences that leave users in awe. As a beginner,
              creating this website felt like crafting a masterpiece. React has definitely lived up to its reputation.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
