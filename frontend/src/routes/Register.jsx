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
  if (response.ok) {
    return redirect("/login");
  }
  return response;
}
const UserCreate = () => {
  return (
    <>
      <h2>Register for an account</h2>
      <Form method="post">
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button id="bottone1">
          <strong>Register User</strong>
        </button>
      </Form>
    </>
  );
};
export default UserCreate;
