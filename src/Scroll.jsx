// import React from "react";
import "./App.css"; // Assuming your CSS file is named App.css

const Scroll = () => {
  return (
    <div>
      <div className="first" id="home">
        <h2>
          <a href="#first">first</a>
        </h2>
      </div>
      <div className="second" id="about">
        <h2>
          <a href="#second">second</a>
        </h2>
      </div>
      <div className="third" id="contact">
        <h2>
          <a href="#third">third</a>
        </h2>
      </div>
    </div>
  );
};

export default Scroll;
