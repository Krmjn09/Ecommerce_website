import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offers On Your Email</h1>
        <p>Subscribe to our newsletter and get exclusive offers on the latest trends from top brands.</p>
        <div>
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
        </div>
    </div>
  );
};

export default NewsLetter;
