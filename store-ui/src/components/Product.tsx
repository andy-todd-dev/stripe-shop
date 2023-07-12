import React from "react";

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
