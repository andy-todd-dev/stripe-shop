import React from "react";
import { Card, Button } from "react-bootstrap";

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
