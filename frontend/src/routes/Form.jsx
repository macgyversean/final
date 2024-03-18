import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";
import { Form } from "react-router-dom";
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

  const url = `${import.meta.env.VITE_SOURCE_URL}/Bookings`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logindata),
  });

  return response;
}
const FilloutForm = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Form method="post">
      <div className="forms1">
        <label>
          Your name
          <input type="text" name="name" />
        </label>
        <label>
          Your Email
          <input type="text" name="email" />
        </label>
        <label>
          Your phone
          <input type="number" name="phone" />
        </label>
        <label>
          Location of shoot
          <input type="text" name="location_of_shoot" />
        </label>
        <label>
          Your message
          <input type="text" name="message" />
        </label>
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
        <label>
          <input
            type="hidden"
            name="Owner_ID"
            value={localStorage.getItem("keyname")}
            required
          />
        </label>
        <button type="submit">Submit Form</button>
      </div>
    </Form>
  );
};

export default FilloutForm;