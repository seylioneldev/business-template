import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
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
import { Dashboard } from "./pages/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <div className={`${s.container}`}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  </div>
  </Provider>
);
