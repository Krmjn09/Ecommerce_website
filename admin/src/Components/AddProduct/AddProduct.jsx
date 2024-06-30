import React from "react"
import "./AddProduct.css"
const AddProduct = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Enter product title" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            placeholder="Enter product price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Discounted Price</p>
          <input
            type="text"
            name="new_price"
            placeholder="Enter discounted price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Product category</p>
          <select name="category" className="add-product-selector">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default AddProduct
