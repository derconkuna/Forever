import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import LatestCollection from "./LatestCollection";
import ProductItem from "./ProductItem";

const LatestProducts = ({ id, image, price, curency }) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div  className=' pt-10'>
      <LatestCollection text1="latest" text2="collection" />
      <p className=" w-3/4 text-center text-slate-500 mx-auto text-xs sm:text-sm md:text-base py-4 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        ipsum assumenda mollitia aut perspiciatis doloremque eum, vel quasi
        recusandae cumque?
      </p>
      {/* Displaying Products */}
      <div className=" grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item, i) => (
          <ProductItem
            key={i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
