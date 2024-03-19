import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = { email, password };

  const url = `${import.meta.env.VITE_SOURCE_URL}/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}
const UserCreate = () => {
  return (
    <>
      <h2>URL Submit Form</h2>
      <Form method="post">
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <Link to="/login">
          <button type="submit">Add New User</button>
        </Link>
      </Form>
    </>
  );
};
export default UserCreate;
