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
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A0463.jpg"
            className="Images"
          ></img>
          <p className="about-me-text">
            I am a photographer and a web developer. I have been a photographer
            since 2019 and a web developer since 2024. I have a passion for
            volleyball, rockclimbing, adrenaline junkie, and just anything
            outdoors. I am a very outgoing person and love to meet new people.
          </p>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A0362.JPG"
            className="HomeImages"
          ></img>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A1869.JPG"
            className="HomeImages"
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
