// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import Error from "./../Pages/Error";
import FoodDetails from "../Pages/FoodDetails";
import OrderConfrom from "../Pages/OrderConfrom";
import Login from "./../Pages/Login";
import Checkout from "../Pages/checkout";
import ProtectRoute from "./ProtectRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="food/:key" element={<FoodDetails />} />
        <Route path="/checkout" element={<ProtectRoute>
          <Checkout />
        </ProtectRoute>} />
        <Route path="customer-location" element={<OrderConfrom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
