import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Payment from "../pages/Payment/Payment";
import Orders from "../pages/Orders/Orders";
import Auth from "../Pages/Auth/Auth";
import SignUp from "../Pages/Auth/SignUp";
import Results from "../pages/Results/Results";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default AppRouter;
