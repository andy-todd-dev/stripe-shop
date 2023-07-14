import React from "react";

import products from "../data/products.json";
import ProductList from "../components/ProductList";

export const Store: React.FC = () => {
  return <ProductList products={products} />;
};
