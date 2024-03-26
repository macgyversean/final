import React from "react";

import "./Home.css";
import { supabase } from "../config/supabase.Config";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

export async function loader() {
  const { data, error } = await supabase.storage.from("home").list("images", {
    transform: {
      width: 100,
      height: 100,
      resize: "contain",
    },
  });
}
const Home = () => {
  return (
    <div className="background-image">
      <div className="about-me">
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02607.jpg"
          className="HomeImages"
        ></img>
        <div className="about-me-box">
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/1C6FB6BA-CC07-45BB-A9D6-5BA80D1641C9.JPG"
            className="Images"
          ></img>
          <p className="about-me-text">
            Hello, I am Sean I am a photographer and a web developer. I have
            been a photographer since 2019 and a web developer since 2024. I
            have a passion for volleyball, rockclimbing, adrenaline junkie, and
            just anything outdoors. I am a very outgoing person and love to meet
            new people. Here are some of my photos you can see how I take my
            pictures and how I edit them, and see if I am a fit for your vision.
          </p>
        </div>

        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A0362.jpg"
          className="about-me"
        ></img>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8520.jpg"
          className="about-me"
        ></img>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A1869.jpg"
            className="about-me"
          ></img>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/IMG_8608.jpg"
            className="HomeImages"
          ></img>
        </div>
        <div></div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
