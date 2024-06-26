import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import  data_product  from "../assets/data";
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related </h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item key={i} image={item.image} name={item.name} id={item.id} />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
