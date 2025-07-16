

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home/Home";
// import ContactSection from "./components/pages/home/ContactSection";
// import Header from "./components/partials/Header";
// import MarqueeBanner from "./components/partials/MarqueeBanner";
// import Footer from "./components/partials/Footer";
// import BottomFooter from "./components/partials/BottomFooter";
// import Consultancy from "./components/pages/home/Consultancy";
// import MassGainerPage from "./components/pages/category/categorypage/MassGainerPage";
// import WheyProteinPage from "./components/pages/category/categorypage/WheyProteinPage";
// import ProductDetails from "./components/product/ProductDetails";
// import Cart from "./components/pages/cart/Cart";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";

// const App = () => {
//   return (
//     <Router>
//       {/* <MarqueeBanner /> */}
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/consult" element={<Consultancy />} />
//         <Route path="/contact" element={<ContactSection />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/mass-gainers" element={<MassGainerPage />} />
//         <Route path="/whey-proteins" element={<WheyProteinPage />} />
//       </Routes>
//       <Footer />
//       <BottomFooter />
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/home/Home";
// import ContactSection from "./components/pages/home/ContactSection";
// import Header from "./components/partials/Header";
// import MarqueeBanner from "./components/partials/MarqueeBanner";
// import Footer from "./components/partials/Footer";
// import BottomFooter from "./components/partials/BottomFooter";
// import Consultancy from "./components/pages/home/Consultancy";
// import MassGainerPage from "./components/pages/category/categorypage/MassGainerPage";
// import WheyProteinPage from "./components/pages/category/categorypage/WheyProteinPage";
// import ProductDetails from "./components/product/ProductDetails";
// import Cart from "./components/pages/cart/Cart";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Hero from "./components/pages/home/Hero"; // 👈 Hero added

// const App = () => {
//   const [showHero, setShowHero] = useState(true);

//   useEffect(() => {
//     // Video loader duration (~9 seconds)
//     const timer = setTimeout(() => {
//       setShowHero(false);
//       document.body.style.overflow = "auto";
//     }, 9000); // Match your video length

//     // Prevent scrolling while loader is visible
//     document.body.style.overflow = "hidden";

//     return () => clearTimeout(timer);
//   }, []);

//   if (showHero) {
//     return <Hero />; // ⏳ Only Hero video shown on initial load
//   }

//   return (
//     <Router>
//       {/* Optional: <MarqueeBanner /> */}
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/consult" element={<Consultancy />} />
//         <Route path="/contact" element={<ContactSection />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/mass-gainers" element={<MassGainerPage />} />
//         <Route path="/whey-proteins" element={<WheyProteinPage />} />
//       </Routes>
//       <Footer />
//       <BottomFooter />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/home/Home";
import ContactSection from "./components/pages/home/ContactSection";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import BottomFooter from "./components/partials/BottomFooter";
import Consultancy from "./components/pages/home/Consultancy";
import MassGainerPage from "./components/pages/category/categorypage/MassGainerPage";
import WheyProteinPage from "./components/pages/category/categorypage/WheyProteinPage";
import ProductDetails from "./components/product/ProductDetails";
import Cart from "./components/pages/cart/Cart";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Hero from "./components/pages/home/Hero";
import Checkout from "./components/pages/cart/Checkout";
import ScrollToTop from "./components/pages/others/ScrollToTop";

const App = () => {
  // Hero को कंट्रोल करने के लिए अब यहाँ कोई state या effect नहीं है।
  // App.jsx अब बहुत सरल है।

  return (
    <Router>
      {/* आपका मुख्य एप्लिकेशन हमेशा रेंडर होता रहेगा */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consult" element={<Consultancy />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mass-gainers" element={<MassGainerPage />} />
        <Route path="/whey-proteins" element={<WheyProteinPage />} />
      </Routes>
      <Footer />
      <BottomFooter />

      {/* Hero कंपोनेंट को ऊपर रेंडर किया जाएगा। यह अपनी लाइफसाइकिल खुद मैनेज करेगा। */}
      {/* <Hero /> */}
    </Router>
  );
};

export default App;
