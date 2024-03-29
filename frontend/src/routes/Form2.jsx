import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  Navigate,
} from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

export async function action({ request }) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const location_of_shoot = formData.get("location_of_shoot");
  const message = formData.get("message");
  const date = formData.get("date");
  const Owner_ID = formData.get("Owner_ID");
  const logindata = {
    name,
    email,
    phone,
    date,
    location_of_shoot,
    message,
    date,
    Owner_ID,
  };

  const url = `${import.meta.env.VITE_SOURCE_URL}/Bookings2`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logindata),
  });
  if (response && response.status === 200) {
    return redirect("/checkout2");
  }

  return response;
}
const FilloutForm2 = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Form method="post" className="fullPage">
      <div className="form-container">
        <div className="form-group">
          <label>
            Your name
            <input type="text" name="name" />
          </label>
          <label className="email">Your Email</label>
          <input type="text" id="email" name="email" required="" />
          <label>
            Location of Shoot
            <input type="text" name="location_of_shoot" />
          </label>
          <label>
            Your phone
            <input type="number" name="phone" />
          </label>
        </div>
        <div className="form-group">
          <label>How Can We Help You?</label>
          <textarea
            name="message"
            id="textarea"
            rows="10"
            cols="50"
            required=""
          ></textarea>
          <label>
            Date of shoot
            <ReactDatePicker
              dateFormat="yyyy-MM-dd"
              value={date}
              selected={date}
              onChange={(date) => setDate(date)}
              name="date"
            />
          </label>
        </div>
        <label>
          <input
            type="hidden"
            name="Owner_ID"
            value={localStorage.getItem("keyname")}
            required
          />
        </label>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default FilloutForm2;
