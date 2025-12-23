import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landing from "./Pages/Landing/Landing";
import Results from "./Pages/Results/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Auth from "./Pages/Auth/Auth";
import SignUp from "./Pages/SignUp/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/results/:category" element={<Results />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
