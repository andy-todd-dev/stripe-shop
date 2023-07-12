import React from "react";
import Product from "./Product";

interface ProductData {
  name: string;
  price: number;
}

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
