import React from "react";
import DSC02607 from "../components/Data/Photos/DSC02607.jpg";
import A76A0463 from "../components/Data/Photos/A76A0463.jpg";
import A76A0233 from "../components/Data/Photos/A76A0233.jpg";
import "./Home.css";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          <img src={DSC02607} className="Image"></img>
        </p>
        <div className="about-me-text">
          <img src={A76A0463} className="Images"></img>
          <p className="about-me">
            I am a photographer and a web developer. I have been a photographer
            since 2019 and a web developer since 2024. I have a passion for
            volleyball, rockclimbing, adrenaline junkie, and just anything
            outdoors. I am a very outgoing person and love to meet new people.
          </p>
        </div>
        <div>
          <img src={A76A0233} className="Image" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
