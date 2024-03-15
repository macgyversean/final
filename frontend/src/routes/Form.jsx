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
  const location = formData.get("location");
  const message = formData.get("message");
  const logindata = { name, email, phone, date, location, message };
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
          <input type="text" name="location" />
        </label>
        <label>
          Your message
          <input type="text" name="message" />
        </label>
        <label>
          Date of shoot
          <ReactDatePicker selected={date} onChange={(date) => setDate(date)} />
        </label>
        <button type="submit">Submit Form</button>
      </div>
    </Form>
  );
};

export default FilloutForm;
