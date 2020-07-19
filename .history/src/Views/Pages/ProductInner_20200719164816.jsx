import React from "react";
import { useParams } from "react-router-dom";

const ProductInner = () => {
  const { id } = useParams;
  return <div>ProductInner</div>;
};

export default ProductInner;
