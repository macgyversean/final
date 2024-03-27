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
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/BlakeandEmily.png?t=2024-03-27T13%3A34%3A58.850Z"
          className="HomeImages"
        ></img>
        <div className="about-me-box">
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/1C6FB6BA-CC07-45BB-A9D6-5BA80D1641C9.JPG"
            className="Images"
          ></img>
          <p className="about-me-text">
            Hello, I am Sean I am a photographer and a software developer I am
            based in Greenville, South Carolina.
          </p>
        </div>

        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/IMG_1881.JPG"
          className="about-me"
        ></img>
        <div className="MaxPatch">
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8520.jpg"
            className="about-me"
          ></img>
          <p className="MaxPatch-text">
            I enjoy a bit darker tones for just one on one sessions, products
            and landscapes. I work with lighter tones for weddings, engagements,
            and elopements unless asked otherwise. Can't wait to work with you!
          </p>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/A76A1869.JPG"
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
