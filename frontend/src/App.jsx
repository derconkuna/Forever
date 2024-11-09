import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import AppLayout from "./Pages/AppLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/cart", element: <Cart /> },
        { path: "/collection", element: <Collection /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/orders", element: <Orders /> },
        { path: "/placeorder", element: <PlaceOrder /> },
        { path: "/product/:productId", element: <Product /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ]);
  return (
    <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg-[9vw]">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
