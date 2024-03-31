import React, { useState } from "react";
import { Like, Add } from "./helper/Icons";

const CardProduct = ({ image, name, price, incrementProduct }) => {
  const [liked, setLiked] = useState(false)

  function discountPercentage(orginalPrice, finalPrice) {
    const dif = orginalPrice - finalPrice;
    const result = (dif / orginalPrice) * 100;
    return result;
} 

  return (
    <div className="product-card">
      <div className="image">
        <img src={image} alt={name} />
        <button onClick={()=>setLiked(!liked)} className="like">
          <Like fill2={liked ? "#1D1D1D" : ""} />
        </button>
        <button className="add" onClick={()=>incrementProduct()}>
          <Add />
        </button>
        {price.isDiscount ? (
          <span>{discountPercentage(price.amount, price.isDiscount).toFixed(0)}% OFF</span>
        ) : ''}
      </div>
      <p>{name}</p>
      <div>
        {price.isDiscount ? (
          <div className="price">
            <span className="desconto">R$ {price.amount.toFixed(2)}</span>
            <span>R$ {price.isDiscount.toFixed(2)}</span>
          </div>
        ) : (
          <span>R$ {price.amount.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
