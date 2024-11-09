import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import LatestCollection from "../components/LatestCollection";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, getCartTotalAmount } =
    useContext(ProductContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className=" border-t-2 pt-8">
      <div className=" text-2xl pb-6">
        <LatestCollection text1={"your"} text2={"cart"} />
      </div>

      <div>
        {cartData.map((item, i) => {
          const prouctData = products.find(
            (product) => product._id == item._id
          );

          return (
            <div
              key={i}
              className=" py-2 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className=" flex items-start gap-6">
                <img
                  src={prouctData.image[0]}
                  className=" w-16 sm:w-24"
                  alt=""
                />

                <div>
                  <p className=" text-base font-semibold text-gray-600">
                    {prouctData.name}
                  </p>

                  <div className=" flex items-center gap-5 my-3">
                    <p>
                      {currency} {prouctData.price}
                    </p>
                    <p className=" bg-gray-100 border px-3 py-1">{item.size}</p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  updateQuantity(item._id, item.size, Number(e.target.value))
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className=" border w-5/6 sm:w-1/5 text-center outline-none"
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className=" w-5 cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>

      {cartData.length > 0 ? (
        <div className=" flex justify-end py-8">
          <div className=" w-full sm:w-[450px]">
            <CartTotal />
            <Link to='/checkout'>
              <Button>Checkout</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
