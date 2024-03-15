import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../AuthContext";

export async function loader() {
  const url = `${import.meta.env.VITE_SOURCE_URL}/logout`;
  const access_token = localStorage.getItem("access_token");
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
  console.log(response);
  const statusCode = response.status;
  return statusCode === 200 ? true : false;
}

const Logout = () => {
  console.log("WTF???? ");
  const response = useLoaderData();
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  let loggedIn = true;
  if (response) {
    localStorage.clear();
    loggedIn = false;
  } else {
    alert("Error logging out");
  }
  if (loggedIn) {
    return navigate("/");
  }
  useEffect(() => {
    setIsAuth(false);
    return navigate("/");
  }, [navigate, setIsAuth, response, navigate]);
};

export default Logout;
