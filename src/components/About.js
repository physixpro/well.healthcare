import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Why Well?</h1>
      <p className="about-paragraph" id="about">
        Well disease search is a platform used to look up common diseases and
        their descriptions, why is that important? Unlike regular search
        engines, this one allows you to input a specific disease and see how
        many times that particular disease has been searched. This is used for
        data collection to help improve our services to better accomodate our
        clients.
      </p>
    </div>
  );
};

export default About;
