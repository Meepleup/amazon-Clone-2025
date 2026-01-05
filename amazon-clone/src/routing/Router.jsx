import { Routes, Route } from "react-router-dom";
import LayOut from "../components/LayOut/LayOut";
import Landing from "../Pages/Landing/Landing";
import Auth from "../Pages/Auth/Auth";
import Signup from "../Pages/Auth/Signup";
import Cart from "../Pages/Cart/Cart";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";

function Router() {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </LayOut>
  );
}

export default Router;
