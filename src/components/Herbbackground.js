import React from "react";
import herbs from "../images/herbs.jpg";
import you from "../images/you.png";

const Herbbackground = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#4b9cd3", // Set the background color to blue
  };

  return (
    <div style={backgroundStyle}>
      <img src={you} width="1000vh" alt="" />
    </div>
  );
};

export default Herbbackground;
