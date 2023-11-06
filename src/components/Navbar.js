import React from "react";
import well from "../images/well.png";
import "../styles/App.css";

const NavBar = () => {
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <img src={well} alt="" />
      <div className="logo"></div>
      <div className="nav-links">
        <button onClick={scrollToHome}>Home</button>
        <button onClick={scrollToAbout}>About</button>
        {/* Add more buttons and handle their respective scroll positions */}
      </div>
    </div>
  );
};

export default NavBar;
