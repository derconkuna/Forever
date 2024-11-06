import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import LatestCollection from "./LatestCollection";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ProductContext);
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);

    setBestSelling(bestProducts.slice(0, 5));
  }, []);
  return (
    <div>
      <LatestCollection text1={"best"} text2={"sellers"} />
      <p className=" text-xs sm:text-sm md:text-base text-center py-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias odit
        inssitatibus atque possimus, blanditiis consequatur assumenda ipsam
        totam magnam.
      </p>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-2">
        {bestSelling.map((item) => (
          <ProductItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
