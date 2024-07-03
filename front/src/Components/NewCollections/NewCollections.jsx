import React from "react"
import "./NewCollections.css"
import new_collection from "../assets/new_collections"
import Item from "../Item/Item"
import { useState, useEffect } from "react"
const NewCollections = () => {
  const [new_collection, setNewCollection] = useState([])

  useEffect(() => {
  fetch("http://localhost:3001/new_collections")
    .then((res) => res.json())
    .then((data) => {
      setNewCollection(data)
    })
  }, [])
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item key={i} image={item.image} name={item.name} id={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default NewCollections
