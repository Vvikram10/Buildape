// import React from 'react'
// import Home from './components/home/Home'

// const App = () => {
//   return (
//     <>
//     <Home />
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContactSection from "./components/pages/home/ContactSection";
import Header from "./components/partials/Header";
import MarqueeBanner from "./components/partials/MarqueeBanner";
import Footer from "./components/partials/Footer";
import BottomFooter from "./components/partials/BottomFooter";
import Consultancy from "./components/pages/home/Consultancy";
import MassGainerPage from "./components/pages/category/categorypage/MassGainerPage";
import WheyProteinPage from "./components/pages/category/categorypage/WheyProteinPage";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Router>
      <MarqueeBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consult" element={<Consultancy />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mass-gainers" element={<MassGainerPage />} />
        <Route path="/whey-proteins" element={<WheyProteinPage />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </Router>
  );
};

export default App;
