import React from "react";
import Product from "./Product";
import { Col, Container, Row } from "react-bootstrap";

interface ProductData {
  name: string;
  price: number;
}

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Container fluid>
      <Row>
        {products.map((product, index) => (
          <Col>
            <Product key={index} name={product.name} price={product.price} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
