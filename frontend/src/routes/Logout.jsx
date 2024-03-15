import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
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
    console.log(response);
    const statusCode = response.status;
    return statusCode === 200 ? true : false;
  } catch (error) {
    console.error("Error:", error);
  }
}

const Logout = () => {
  console.log("WTF???? ");
  const response = useLoaderData();
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  let logged_in = true;
  if (response) {
    localStorage.clear();
    logged_in = false;
  } else {
    alert("PROBLEM LOGGING OUT");
  }

  useEffect(() => {
    if (!logged_in) {
      setIsAuth(false);
      navigate("/");
    }
  }, [logged_in, setIsAuth, navigate]);

  return <Navigate to="/" replace={true} />;
};

export default Logout;
