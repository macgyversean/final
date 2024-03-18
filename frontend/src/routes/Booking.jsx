import React from "react";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import MyCard from "../components/myCard";
import MyCard1 from "../components/myCard1";
import MyCard2 from "../components/myCard3";
import Footer from "../components/footer";
const Booking = () => {
  return (
    <div className="booking">
      <MyCard />
      <MyCard1 />
      <MyCard2 />
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Booking;
