import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "../Pages/Hero";
import Error from "../Pages/Error";
import Navber from "../components/navber/Navber";

function RouteAll() {

  return (
    <BrowserRouter>
    <Navber />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteAll;
