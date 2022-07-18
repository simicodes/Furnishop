import React from "react";

//import data
import { products } from "../data";

//import component
import ProductSlider from "./ProductSlider";

const Products = () => {
  //destructuring products
  const { title, subtitle } = products;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {/* slider */}
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
