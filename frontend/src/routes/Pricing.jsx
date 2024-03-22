import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div>
      <img
        src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02667.jpg"
        className="PricingImage"
      ></img>
      <ul className="Texts">
        <li className="Text1">
          <h2>Basic Package</h2>
          <p>Includes:</p>
          <ul>
            <li>1-hour photo session</li>
            <li>30 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p>Price: $200</p>
        </li>
        <br></br>
        <li className="Text2">
          <h2>Standard Package</h2>
          <p>Includes:</p>
          <ul>
            <li>2-hour photo session</li>
            <li>45 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p>Price: $350</p>
        </li>
        <br></br>
        <li className="Text3">
          <h2>Premium Package</h2>
          <p>Includes:</p>
          <ul>
            <li>4-hour photo session</li>
            <li>60 edited photos</li>
            <li>Online gallery</li>
          </ul>
          <p>Price: $500</p>
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
    </div>
  );
};

export default Pricing;
