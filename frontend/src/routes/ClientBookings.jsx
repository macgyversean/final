import { useEffect } from "react";

const BookingData = () => {
  useEffect(() => {
    const url = `${import.meta.env.VITE_SOURCE_URL}/mybookings`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
    </div>
  );
};

export default BookingData;
