import { useState } from "react"
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
    image: "",
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }

  const Add_Product = async () => {
    console.log(productDetails)
    let responseData
    let product = productDetails
    let formData = new FormData()
    formData.append("product", image)

    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data
      })

    if (responseData.success) {
      product.image = responseData.image_url
      console.log(product)

      await fetch("http://localhost:3000/addproduct", {
        // Changed port from 5000 to 4000
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success
            ? alert("Product added successfully")
            : alert("Failed to add product")
        })
    }
  }

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product title"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Enter product price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Discounted Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Enter discounted price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Product category</p>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="add-product-selector"
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className="addproduct-thumnail-img"
              alt="upload"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            id="file-input"
            name="image"
            hidden
          />
        </div>
        <button onClick={() => Add_Product()} className="addproduct-btn">
          Add Product
        </button>
      </div>
    </div>
  )
}

export default AddProduct
