import React from "react";
import { useParams } from "react-router-dom";

const ProductInner = () => {
  const { id } = useParams();
  console.log(id);
  console.log(useParams());
  return <div>ProductInner</div>;
};

export default ProductInner;
