import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { HomePage } from "./pages/HomePage/HomePage";
import s from "./style.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className={`${s.container}`}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </div>
);
