import React from "react";
import SubHeader from "../components/about/SubHeader";
import ProductCard from "../components/product/ProductCard";

const Product = () => {
  return (
    <div className=" box-border p-0 m-0">
      <SubHeader title="Mattresses" />
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
