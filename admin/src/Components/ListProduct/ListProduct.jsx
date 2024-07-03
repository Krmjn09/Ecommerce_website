// ListProduct.js
import { useEffect, useState } from "react"
import "./ListProduct.css"
import cross_icon from "../../assets/cross_icon.png"

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([])

  const fetchInfo = async () => {
    await fetch("http://localhost:5000/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data)
      })
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const removeProduct = async (id) => {
    await fetch(`http://localhost:5000/removeproduct/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
    await fetchInfo()
  }

  return (
    <div className="main-content">
      <div className="list-product">
        <h1>All Product List</h1>
        <div className="lsitproduct-format-main">
          <p>Image</p>
          <p>Name</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allProducts.map((product, index) => {
            return (
              <>
                <div
                  key={index}
                  className="listproduct-format-main listproduct"
                >
                  <img src={product.image} alt="product" />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    onClick={() => removeProduct(product.id)}
                    className="listproduct-remove"
                    src={cross_icon}
                    alt="remove"
                  />
                </div>
                <hr />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListProduct
