import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import JaviCarousel from "./Data/javiCarousel";
import PhotoButton from "./PhotoButton";
export const JaviCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <JaviCarousel />
          <div className="full-container">
            <h3>Sarasota</h3>
            <Link to="/JaviPage">
              <button id="bottone1">
                <strong>View Gallery</strong>
              </button>
            </Link>
            <Link to="/Form4">
              <button id="bottone1">
                <strong>Book a Date</strong>
              </button>
            </Link>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default JaviCard;
