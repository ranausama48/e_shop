import React from "react";
import { useParams } from "react-router-dom";

const ProductInner = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.products);
  return <div>ProductInner</div>;
};

export default ProductInner;
