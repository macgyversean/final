import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const MyCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <DemoCarousel />
          <div className="full-container">
            <h3>Max Patch</h3>
            <Link to="/Max_Patch">
              <button id="bottone1">
                <strong>View Gallery</strong>
              </button>
            </Link>
            <Link to="/Form4">
              <button id="bottone1">
                <strong>Contact</strong>
              </button>
            </Link>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default MyCard;
