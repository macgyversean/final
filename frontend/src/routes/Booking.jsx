import React from "react";
import ReactDatePicker from "react-datepicker";
import IMG_8464 from "../components/Data/Photos/IMG_8464.jpg";
import IMG_8520 from "../components/Data/Photos/IMG_8520.jpg";
import IMG_8608 from "../components/Data/Photos/IMG_8608.jpg";
// import DatePickerCard from "../components/DatePicker";
import { useState } from "react";
import MyCard from "../components/myCard";
import { slides } from "../components/Data/carouselData.json";

const Booking = () => {
  return (
    <div className="booking">
      <MyCard image={IMG_8464} />
    </div>
  );
};
export default Booking;
