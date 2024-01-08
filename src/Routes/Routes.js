// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './../Pages/Login';
import Home from './../Pages/Home';
import Error from './../Pages/Error';
import BreackfastPage from './../Pages/Breackfast';
import Navber from '../components/navber/Navber';
import Address from '../Pages/Address';
import FoodDetails from '../Pages/FoodDetails';
import OrderConfrom from '../Pages/OrderConfrom';
import Lunch from './../Pages/Lunch';

function App() {
  return (
    <BrowserRouter>
      <Navber />
      <div style={{height:"10vh"}} />
      <Routes>
        <Route index element={<Home index />} />
        <Route path="login" element={<Login />} >
          <Route path='b' element={<BreackfastPage />} />
          <Route path='a' element={<Lunch />} />
        </Route>
        <Route path="address" element={<Address />} />
        <Route path="food" element={<FoodDetails />} />
        <Route path="customer-location" element={<OrderConfrom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
