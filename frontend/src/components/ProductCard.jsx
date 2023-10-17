import React from "react";

const ProductCard = ({ item }) => {
  return (
    <>
      <div style={{ border: "1px solid", maxWidth: "11rem", margin: "10px" }}>
        <div
          id={item.id}
          style={{ maxWidth: "10rem", height: "10rem", margin: "5px" }}
        >
          <img
            src={item.images[0]}
            alt=""
            style={{ width: "10rem", height: "10rem" }}
          />
          <h3></h3>
        </div>
        <div>
          <h5>{item.title}</h5>
          <p style={{fontSize:'12px'}}>price: {item.price}$</p>
          <p style={{fontSize:'12px'}}>rating: {item.rating}</p>
        </div>
        <button style={{fontSize:'12px',margin:'10px'}} type="button">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
