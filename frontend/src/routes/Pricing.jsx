import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <img
        src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02667.jpg"
        className="PricingImage "
      ></img>
      <ul className="Texts">
        <li className="Text1">
          <h2>Basic Package</h2>

          <ul>
            <li>1-hour photo session</li>
            <li>30 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p className="priceSize">Price: $200</p>

          <Link to="/Form">
            <button id="bottone1">
              <strong>Book Now</strong>
            </button>
          </Link>
        </li>
        <br></br>
        <li className="Text2">
          <h2>Standard Package</h2>

          <ul>
            <li>2-hour photo session</li>
            <li>45 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p className="priceSize">Price: $350</p>
          {/* <Link to="/Form1">
            <button id="bottone1">
              <strong>Book Now</strong>
            </button>
          </Link> */}
        </li>
        <br></br>
        <li className="Text3">
          <h2>Premium Package</h2>

          <ul>
            <li>4-hour photo session</li>
            <li>60 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p className="priceSize">Price: $500</p>
          {/* <Link to="/Form2">
            <button id="bottone1">
              <strong>Book Now</strong>
            </button>
          </Link> */}
        </li>
      </ul>
      <div className="PricingImages">
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC01227.jpg"
            className="PricingImage"
          ></img>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC01088.jpg"
            className="PricingImage"
          ></img>
        </div>
        <div>
          <img
            src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02207.jpg"
            className="PricingImage"
          ></img>
        </div>
      </div>
      <div className="yasContainer">
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2682.jpg"
          className="PricingImage"
        ></img>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2814.jpg"
          className="PricingImage"
        ></img>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2946.jpg"
          className="PricingImage"
        ></img>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3651-2.jpg"
          className="PricingImage"
        ></img>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A3768.jpg"
          className="PricingImage"
        ></img>
      </div>
    </div>
  );
};

export default Pricing;
