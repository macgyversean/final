// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useLoaderData, Link, Form, redirect } from "react-router-dom";
import { useState } from "react";
import React from "react";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const logindata = { email, password };
  try {
    const url = "https://hhomygevdtpekopdoudb.supabase.co";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logindata),
    });
    const statusCode = response.status;
    const data = await response.json();
    const { access_token } = data;
    localStorage.clear;
    localStorage.setItem("access_token", access_token);
    return statusCode === 200 ? true : false;
  } catch (error) {
    console.error("ERROR: ", error);
    return false;
  }
}

const login = () => {
  return (
    <>
      <h2>Login</h2>
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
    </>
  );
};

export default login;
