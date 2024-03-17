import React from "react";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import MyCard from "../components/myCard";
import myCard1 from "../components/myCard1";

const Booking = () => {
  return (
    <div className="booking">
      <MyCard />
      <MyCard />
      <myCard1 />
    </div>
  );
};
export default Booking;
