import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import LatestCollection from "../components/LatestCollection";
import ProductItem from "../components/ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ProductContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let pC = products.slice();

      pC = pC.filter((item) => category == item.category);
      pC = pC.filter((item) => subCategory == item.subCategory);

      setRelated(pC.slice(0, 5));
    }
  }, [products]);
  return (
    <div>
      <LatestCollection text1={"related"} text2={"products"} />
      <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-6">
        {related.map((item, i) => (
          <ProductItem
            key={i}
            id={item._id}
            price={item.price}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
