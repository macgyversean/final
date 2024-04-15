import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ClientBookings.module.css";
import Footer from "../components/footer";

export async function loader() {
  const url = `${import.meta.env.VITE_SOURCE_URL}/mybookings`;
  const data = await fetch(url).then((response) => response.json());
  return data;
}

const BookingData = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h1>My Bookings</h1>
      <div>
        <ul>
          {data.map((booking, index) => (
            <li key={booking.id} className={styles.Mybookings}>
              <p>{booking.name}</p>
              <p>{booking.email}</p>
              <p>{booking.phone}</p>
              <p>{booking.location_of_shoot}</p>
              <p>{booking.date}</p>
              <p>{booking.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookingData;
