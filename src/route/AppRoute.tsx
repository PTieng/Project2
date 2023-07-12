import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Payment from "../pages/Payment";
import Details from "../pages/Details";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
