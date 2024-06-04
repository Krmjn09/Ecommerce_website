import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers</h1>
        <p>Get exclusive offers on the latest trends from top brands.</p>
        <button>SHOP NOW</button>
      </div>
      <div className="offers-right">
        <img
          src={exclusive_image}
          alt="exclusive_image"
        />
        </div>
    </div>
  );
};

export default Offers;
