// import React, { useState } from "react";

import {
  useLoaderData,
  Link,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const logindata = { email, password };
  try {
    const url = `${import.meta.env.VITE_SOURCE_URL}/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    });

    const statusCode = response.status;
    const data = await response.json();
    const { session } = data;

    localStorage.clear();
    localStorage.setItem("access_Token", session.access_token);
    return statusCode === 200 ? true : false;
  } catch (error) {
    console.error("ERROR: ", error);
    return false;
  }
}

const login = () => {
  const { isAuth, setIsAuth } = useAuth();
  const response = useActionData();

  useEffect(() => {
    setIsAuth(response);
  }, [response, setIsAuth]);
  return !isAuth ? (
    <Form method="post">
      <label>
        Your Email
        <input type="text" name="email" />
      </label>
      <label>
        Your Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login User</button>
    </Form>
  ) : (
    <Link to="/booking"></Link>
  );
};

export default login;
