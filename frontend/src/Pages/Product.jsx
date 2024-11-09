import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { assets } from "../assets/assets";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const { products,addToCart } = useContext(ProductContext);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className=" flex flex-col gap-6">
      <div className=" grid grid-rows gap-4 sm:grid-cols-2  sm:gap-12 border-t-2 border-gray-200 ">
        <div className=" flex gap-3 pt-5">
          <div className=" flex flex-col gap-3 w-[18%]">
            {productData.image.map((item, i) => (
              <img
                key={i}
                onClick={() => setImage(item)}
                src={item}
                alt=""
                className=" flex flex-col gap-1 w-full"
              />
            ))}
          </div>
          <img src={image} alt="" className="w-[80%]" />
        </div>

        <div className=" w-full sm:w-2/3 sm:pt-5">
          <p className=" font-semibold text-black text-xl">
            {productData.name}
          </p>

          <div className=" flex items-center gap-2 py-6">
            <img src={assets.star_icon} className=" w-4" alt="" />
            <img src={assets.star_icon} className=" w-4" alt="" />
            <img src={assets.star_icon} className=" w-4" alt="" />
            <img src={assets.star_icon} className=" w-4" alt="" />
            <img src={assets.star_icon} className=" w-4" alt="" />
            <p>(122)</p>
          </div>
          <p className=" font-bold text-lg text-black">R{productData.price}</p>
          <p className=" pt-3 text-gray-500">{productData.description}</p>

          <p className=" py-7 text-base font-semibold text-gray-900">
            Select Size
          </p>

          <div className=" flex gap-2">
            {productData.sizes.map((item, i) => (
              <button
                onClick={() => setSize(item)}
                key={i}
                className={`border border-gray-200 px-4 py-2 bg-gray-100 ${
                  item == size ? " border-3 border-orange-500" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className=" bg-black text-white px-8 py-3 uppercase my-5 hover:scale-90 mb-8"
          >
            Add to Cart
          </button>

          <hr className=" border border-gray-200 " />

          <div className=" text-gray-700 leading-7 text-sm pt-5">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/*Reviews and Description */}
      <div className=" sm:mt-5">
        <div className=" flex">
          <b className=" border px-5 py-3 text-sm">Description</b>
          <p className=" border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className=" border p-2 text-gray-600 font-light">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            impedit aspernatur tempora quibusdam libero iste quis optio,
            repudiandae doloribus veritatis nulla minus, tenetur veniam
            laboriosam architecto praesentium corporis culpa reprehenderit!
          </p>

          <p className=" mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.expedita
            tempore doloribus neque quae corrupti pariatur quia, quo iure.
          </p>
        </div>
      </div>

      {/* Display Related Products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : null;
};

export default Product;
