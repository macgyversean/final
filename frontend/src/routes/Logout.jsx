import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export async function loader() {
  const url = `${import.meta.env.VITE_SOURCE_URL}/logout`;
  const acces_token = localStorage.getItem("acces_token");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${acces_token}`,
    },
    body: JSON.stringify(data),
  });

  const statusCode = response.status;
  return statusCode === 200 ? true : false;
}

const Logout = () => {
  const response = useLoaderData();
  const { setIsAuth } = useAuth();

  useEffect(() => {
    localStorage.clear();
    setIsAuth(false);
    return navigate("/logout");
  }, [navigate, setIsAuth]);
};
export default Logout;
