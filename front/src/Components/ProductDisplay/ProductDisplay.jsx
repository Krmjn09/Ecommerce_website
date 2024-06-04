import React from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import "./ProductDisplay.css";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay__left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img
            src="{product.image}"
            alt=""
            className="productdisplay-main-img"
          />
        </div>
      </div>
      <div className="productdisplay__right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-">${product.new_price}</div>
          <div className="productdisplay-right-price-new">
            ${product.old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam
          id, quisquam quod et saepe, molestias repellat veritatis illum hic
          quis sapiente magni ad impedit consequuntur reiciendis, nesciunt
          ratione quibusdam!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-size-list">
            <div className="productdisplay-right-size-item">S</div>
            <div className="productdisplay-right-size-item">M</div>
            <div className="productdisplay-right-size-item">L</div>
            <div className="productdisplay-right-size-item">XL</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
