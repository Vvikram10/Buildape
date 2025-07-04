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

const App = () => {
  return (
    <Router>
      <MarqueeBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </Router>
  );
};

export default App;
