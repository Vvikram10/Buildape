// // // // // // import React, { useState } from "react";
// // // // // // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch, FaArrowRight } from "react-icons/fa";

// // // // // // const Header = () => {
// // // // // //   const [showCategories, setShowCategories] = useState(false);
// // // // // //   const [showBrands, setShowBrands] = useState(false);

// // // // // //   return (
// // // // // //     <div className="w-full relative z-50 bg-white">
// // // // // //       {/* Top Nav */}
// // // // // //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// // // // // //         {/* Logo */}
// // // // // //         <div className="flex items-center ">
// // // // // //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// // // // // //         </div>

// // // // // //         {/* Search */}
// // // // // //         <div className="flex flex-grow max-w-xl mx-4">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search Product..."
// // // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // // // //           />
// // // // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // // // //             <FaSearch />
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {/* Cart + Login */}
// // // // // //         <div className="flex items-center space-x-4">
// // // // // //           <FaShoppingCart className="text-2xl" />
// // // // // //           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // // // //             <span>LOGIN</span>
// // // // // //             <FaUser />
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Header;

// // // // // import React, { useState } from "react";
// // // // // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

// // // // // const Header = () => {
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // // // //   return (
// // // // //     <div className="w-full relative z-50 bg-white">
// // // // //       {/* Top Nav */}
// // // // //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// // // // //         {/* Mobile Menu Button (visible only on small screens) */}
// // // // //         <div className="md:hidden flex items-center">
// // // // //           <button
// // // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // // //             className="text-gray-700 focus:outline-none"
// // // // //           >
// // // // //             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Logo */}
// // // // //         <div className="flex items-center">
// // // // //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// // // // //         </div>

// // // // //         {/* Search - hidden on small screens */}
// // // // //         <div className="hidden md:flex flex-grow max-w-xl mx-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search Product..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // // //           />
// // // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // // //             <FaSearch />
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Cart + Login */}
// // // // //         <div className="flex items-center space-x-4">
// // // // //           <FaShoppingCart className="text-2xl" />
// // // // //           <button className="hidden md:flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // // //             <span>LOGIN</span>
// // // // //             <FaUser />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Search (visible only on small screens) */}
// // // // //       <div className="md:hidden px-4 py-2 border-b border-gray-200">
// // // // //         <div className="flex">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search Product..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // // //           />
// // // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // // //             <FaSearch />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu (visible only on small screens) */}
// // // // //       {mobileMenuOpen && (
// // // // //         <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200">
// // // // //           <div className="flex flex-col space-y-3">
// // // // //             <a href="#" className="hover:text-orange-500">Home</a>
// // // // //             <a href="#" className="hover:text-orange-500">Categories</a>
// // // // //             <a href="#" className="hover:text-orange-500">Consultancy</a>
// // // // //             <a href="#" className="hover:text-orange-500">Brands</a>
// // // // //             <a href="#" className="hover:text-orange-500">Contact Us</a>
// // // // //             <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2 w-full justify-center">
// // // // //               <span>LOGIN</span>
// // // // //               <FaUser />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // // import React, { useState } from "react";
// // // // // import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";

// // // // // const Header = () => {
// // // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // // // //   return (
// // // // //     <div className="w-full relative z-50 bg-white">
// // // // //       {/* Top Nav */}
// // // // //       {/* For small screens: hamburger, logo, cart, login in one row */}
// // // // //       {/* For medium and larger screens: existing layout */}
// // // // //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// // // // //         {/* Mobile Menu Button (visible only on small screens) */}
// // // // //         <div className="md:hidden flex items-center">
// // // // //           <button
// // // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // // //             className="text-gray-700 focus:outline-none"
// // // // //           >
// // // // //             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Logo */}
// // // // //         <div className="flex items-center">
// // // // //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// // // // //         </div>

// // // // //         {/* Search - hidden on small screens, visible on md and up */}
// // // // //         <div className="hidden md:flex flex-grow max-w-xl mx-4">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search Product..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // // //           />
// // // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // // //             <FaSearch />
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Cart + Login Icons - visible on all screens, but "LOGIN" text hidden on small */}
// // // // //         <div className="flex items-center space-x-4">
// // // // //           <FaShoppingCart className="text-2xl cursor-pointer" />
// // // // //           {/* Mobile Login Icon */}
// // // // //           <FaUser className="text-2xl md:hidden cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-md" color="white" />
// // // // //           {/* Desktop Login Button */}
// // // // //           <button className="hidden md:flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // // //             <span>LOGIN</span>
// // // // //             <FaUser />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Search Bar (visible only on small screens) */}
// // // // //       <div className="md:hidden px-4 py-2 border-b border-gray-200">
// // // // //         <div className="flex">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search Product..."
// // // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // // //           />
// // // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // // //             <FaSearch />
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu (visible only when mobileMenuOpen is true and on small screens) */}
// // // // //       {mobileMenuOpen && (
// // // // //         <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200 absolute w-full left-0 shadow-lg">
// // // // //           <div className="flex flex-col space-y-3">
// // // // //             <a href="#" className="hover:text-orange-500 py-1">Home</a>
// // // // //             <a href="#" className="hover:text-orange-500 py-1">Categories</a>
// // // // //             <a href="#" className="hover:text-orange-500 py-1">Consultancy</a>
// // // // //             <a href="#" className="hover:text-orange-500 py-1">Brands</a>
// // // // //             <a href="#" className="hover:text-orange-500 py-1">Contact Us</a>
// // // // //             {/* Login button moved out of the top bar for mobile menu */}
// // // // //             {/* This is an alternative if you want a dedicated login button inside the mobile menu */}
// // // // //             {/* <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2 w-full justify-center mt-3">
// // // // //               <span>LOGIN</span>
// // // // //               <FaUser />
// // // // //             </button> */}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // import React, { useState, useRef } from "react";
// // // // import {
// // // //   FaShoppingCart,
// // // //   FaUser,
// // // //   FaChevronDown,
// // // //   FaSearch,
// // // //   FaArrowRight,
// // // //   FaBars,
// // // //   FaTimes
// // // // } from "react-icons/fa";

// // // // const Header = () => {
// // // //   // State for mobile menu
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // // //   // State for mega menus
// // // //   const [showCategories, setShowCategories] = useState(false);
// // // //   const [showBrands, setShowBrands] = useState(false);

// // // //   // Refs for hover delays
// // // //   const categoriesTimeoutRef = useRef(null);
// // // //   const brandsTimeoutRef = useRef(null);

// // // //   // Mega menu handlers
// // // //   const handleCategoriesMouseEnter = () => {
// // // //     if (categoriesTimeoutRef.current) {
// // // //       clearTimeout(categoriesTimeoutRef.current);
// // // //     }
// // // //     setShowCategories(true);
// // // //   };

// // // //   const handleCategoriesMouseLeave = () => {
// // // //     categoriesTimeoutRef.current = setTimeout(() => {
// // // //       setShowCategories(false);
// // // //     }, 150);
// // // //   };

// // // //   const handleBrandsMouseEnter = () => {
// // // //     if (brandsTimeoutRef.current) {
// // // //       clearTimeout(brandsTimeoutRef.current);
// // // //     }
// // // //     setShowBrands(true);
// // // //   };

// // // //   const handleBrandsMouseLeave = () => {
// // // //     brandsTimeoutRef.current = setTimeout(() => {
// // // //       setShowBrands(false);
// // // //     }, 150);
// // // //   };

// // // //   // Menu item components
// // // //   const SubMenuItem = ({ label }) => (
// // // //     <li className="group relative overflow-hidden list-none">
// // // //       <a
// // // //         href="#"
// // // //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// // // //       >
// // // //         {label}
// // // //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// // // //       </a>
// // // //     </li>
// // // //   );

// // // //   const BrandMenuItem = ({ label, href }) => (
// // // //     <li className="group relative overflow-hidden list-none">
// // // //       <a
// // // //         href={href}
// // // //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// // // //       >
// // // //         {label}
// // // //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// // // //       </a>
// // // //     </li>
// // // //   );

// // // //   return (
// // // //     <div className="w-full relative z-50 bg-white">
// // // //       {/* Top Navigation */}
// // // //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// // // //         {/* Mobile Menu Button */}
// // // //         <div className="md:hidden flex items-center">
// // // //           <button
// // // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // // //             className="text-gray-700 focus:outline-none"
// // // //           >
// // // //             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// // // //           </button>
// // // //         </div>

// // // //         {/* Logo */}
// // // //         <div className="flex items-center">
// // // //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// // // //         </div>

// // // //         {/* Search - hidden on mobile */}
// // // //         <div className="hidden md:flex flex-grow max-w-xl mx-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search Product..."
// // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // //           />
// // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // //             <FaSearch />
// // // //           </button>
// // // //         </div>

// // // //         {/* Cart + Login */}
// // // //         <div className="flex items-center space-x-4">
// // // //           <FaShoppingCart className="text-2xl" />
// // // //           <button className="hidden md:flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // //             <span>LOGIN</span>
// // // //             <FaUser />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Search - visible only on mobile */}
// // // //       <div className="md:hidden px-4 py-2 border-b border-gray-200">
// // // //         <div className="flex">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search Product..."
// // // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // // //           />
// // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // //             <FaSearch />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu - visible only on mobile */}
// // // //       {mobileMenuOpen && (
// // // //         <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200">
// // // //           <div className="flex flex-col space-y-3">
// // // //             <a href="#" className="hover:text-orange-500 py-2">Home</a>

// // // //             {/* Mobile Categories */}
// // // //             <div className="py-2">
// // // //               <div className="flex justify-between items-center">
// // // //                 <span className="font-medium">Categories</span>
// // // //                 <FaChevronDown className="text-xs" />
// // // //               </div>
// // // //               <div className="mt-2 pl-4">
// // // //                 <a href="#" className="block py-1 text-gray-600">Mass Gainer</a>
// // // //                 <a href="#" className="block py-1 text-gray-600">Pre Workout</a>
// // // //                 <a href="#" className="block py-1 text-gray-600">Fat Burner</a>
// // // //                 <a href="#" className="block py-1 text-gray-600">View All</a>
// // // //               </div>
// // // //             </div>

// // // //             <a href="#" className="hover:text-orange-500 py-2">Consultancy</a>

// // // //             {/* Mobile Brands */}
// // // //             <div className="py-2">
// // // //               <div className="flex justify-between items-center">
// // // //                 <span className="font-medium">Brands</span>
// // // //                 <FaChevronDown className="text-xs" />
// // // //               </div>
// // // //               <div className="mt-2 pl-4">
// // // //                 <a href="#" className="block py-1 text-gray-600">Popular Brands</a>
// // // //                 <a href="#" className="block py-1 text-gray-600">A-Z Brands</a>
// // // //                 <a href="#" className="block py-1 text-gray-600">View All</a>
// // // //               </div>
// // // //             </div>

// // // //             <a href="#" className="hover:text-orange-500 py-2">Contact Us</a>

// // // //             <button className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // //               <span>LOGIN</span>
// // // //               <FaUser />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Bottom Navigation - Desktop */}
// // // //       <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
// // // //         <a href="#" className="hover:text-orange-500">Home</a>

// // // //         {/* Categories with Mega Menu */}
// // // //         <div
// // // //           onMouseEnter={handleCategoriesMouseEnter}
// // // //           onMouseLeave={handleCategoriesMouseLeave}
// // // //         >
// // // //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // // //             <span>Categories</span>
// // // //             <FaChevronDown className="text-xs" />
// // // //           </div>

// // // //           {showCategories && (
// // // //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// // // //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // // //                 {/* Column 1 */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
// // // //                   {["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"].map((item) => (
// // // //                     <SubMenuItem key={item} label={item} />
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Column 2 */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
// // // //                   {["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"].map((item) => (
// // // //                     <SubMenuItem key={item} label={item} />
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Column 3 */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
// // // //                   {["Energy Drink", "Fat Burner"].map((item) => (
// // // //                     <SubMenuItem key={item} label={item} />
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Column 4 */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
// // // //                   {["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"].map((item) => (
// // // //                     <SubMenuItem key={item} label={item} />
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* Column 5 */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
// // // //                   {[
// // // //                     "Pre Workout",
// // // //                     "Probiotic",
// // // //                     "Protein Blend",
// // // //                     "Protein Casein",
// // // //                     "Protein Hydrolyzed",
// // // //                     "Protein Isolate",
// // // //                     "Protein Vegan"
// // // //                   ].map((item) => (
// // // //                     <SubMenuItem key={item} label={item} />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Consultancy */}
// // // //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// // // //         {/* Brands with Mega Menu */}
// // // //         <div
// // // //           onMouseEnter={handleBrandsMouseEnter}
// // // //           onMouseLeave={handleBrandsMouseLeave}
// // // //         >
// // // //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // // //             <span>Brands</span>
// // // //             <FaChevronDown className="text-xs" />
// // // //           </div>

// // // //           {showBrands && (
// // // //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// // // //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // // //                 {/* Column 1: #-A-B-C */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">#-A-B-C</h4>
// // // //                   <ul className="sub_li_list">
// // // //                     <BrandMenuItem label="Alani" href="brand/alani" />
// // // //                     <BrandMenuItem label="AllMax" href="brand/allmax" />
// // // //                     <BrandMenuItem label="Animal" href="brand/animal" />
// // // //                     <BrandMenuItem label="Axe & Sledge" href="brand/axe-sledge" />
// // // //                     <BrandMenuItem label="Believe" href="brand/believe" />
// // // //                     <BrandMenuItem label="Bucked Up" href="brand/bucked-up" />
// // // //                     <BrandMenuItem label="Concrete" href="brand/concrete" />
// // // //                   </ul>
// // // //                 </div>

// // // //                 {/* Column 2: D-E-F-G-H-I-J */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">D-E-F-G-H-I-J</h4>
// // // //                   <ul className="sub_li_list">
// // // //                     <BrandMenuItem label="Diesel" href="brand/diesel" />
// // // //                     <BrandMenuItem label="Dymatize" href="brand/dymatize" />
// // // //                     <BrandMenuItem label="EHP Labs" href="brand/ehp-labs" />
// // // //                     <BrandMenuItem label="Himalaya" href="brand/himalaya" />
// // // //                   </ul>
// // // //                 </div>

// // // //                 {/* Column 3: K-L-M-N-O */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">K-L-M-N-O</h4>
// // // //                   <ul className="sub_li_list">
// // // //                     <BrandMenuItem label="Kre-Alkalyn" href="brand/kre-alkalyn" />
// // // //                     <BrandMenuItem label="Limitless Pharma" href="brand/limitless-pharma" />
// // // //                     <BrandMenuItem label="MuscleMeds" href="brand/musclemeds" />
// // // //                     <BrandMenuItem label="MuscleTech" href="brand/muscletech" />
// // // //                     <BrandMenuItem label="Nutrabolics" href="brand/nutrabolics" />
// // // //                     <BrandMenuItem label="Optimum Nutrition" href="brand/optimum-nutrition" />
// // // //                   </ul>
// // // //                 </div>

// // // //                 {/* Column 4: P-Q-R */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">P-Q-R</h4>
// // // //                   <ul className="sub_li_list">
// // // //                     <BrandMenuItem label="PVL" href="brand/pvl" />
// // // //                     <BrandMenuItem label="Raw X CBum" href="brand/raw-x-cbum" />
// // // //                     <BrandMenuItem label="Red Demon Nutrition" href="brand/red-demon-nutrition" />
// // // //                     <BrandMenuItem label="RedBull" href="brand/redbull" />
// // // //                     <BrandMenuItem label="RedCon" href="brand/redcon" />
// // // //                     <BrandMenuItem label="Revive" href="brand/revive" />
// // // //                     <BrandMenuItem label="Rule 1" href="brand/rule-1" />
// // // //                   </ul>
// // // //                 </div>

// // // //                 {/* Column 5: S-T-U-V-W-X-Y-Z */}
// // // //                 <div>
// // // //                   <h4 className="font-semibold pb-1 mb-2">S-T-U-V-W-X-Y-Z</h4>
// // // //                   <ul className="sub_li_list">
// // // //                     <BrandMenuItem label="Schinoussa" href="brand/schinoussa" />
// // // //                     <BrandMenuItem label="TC Nutrition" href="brand/tc-nutrition" />
// // // //                     <BrandMenuItem label="Whey" href="brand/whey" />
// // // //                     <BrandMenuItem label="Xtend" href="brand/xtend" />
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Header;

// // // import React, { useState, useRef } from "react";
// // // import {
// // //   FaShoppingCart,
// // //   FaUser,
// // //   FaChevronDown,
// // //   FaSearch,
// // //   FaArrowRight,
// // //   FaBars,
// // //   FaTimes
// // // } from "react-icons/fa";

// // // const Header = () => {
// // //   // State for mobile menu
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// // //   // State for mega menus
// // //   const [showCategories, setShowCategories] = useState(false);
// // //   const [showBrands, setShowBrands] = useState(false);

// // //   // Refs for hover delays
// // //   const categoriesTimeoutRef = useRef(null);
// // //   const brandsTimeoutRef = useRef(null);

// // //   // Mega menu handlers
// // //   const handleCategoriesMouseEnter = () => {
// // //     if (categoriesTimeoutRef.current) {
// // //       clearTimeout(categoriesTimeoutRef.current);
// // //     }
// // //     setShowCategories(true);
// // //   };

// // //   const handleCategoriesMouseLeave = () => {
// // //     categoriesTimeoutRef.current = setTimeout(() => {
// // //       setShowCategories(false);
// // //     }, 150);
// // //   };

// // //   const handleBrandsMouseEnter = () => {
// // //     if (brandsTimeoutRef.current) {
// // //       clearTimeout(brandsTimeoutRef.current);
// // //     }
// // //     setShowBrands(true);
// // //   };

// // //   const handleBrandsMouseLeave = () => {
// // //     brandsTimeoutRef.current = setTimeout(() => {
// // //       setShowBrands(false);
// // //     }, 150);
// // //   };

// // //   // Menu item components
// // //   const SubMenuItem = ({ label }) => (
// // //     <li className="group relative overflow-hidden list-none">
// // //       <a
// // //         href="#"
// // //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// // //       >
// // //         {label}
// // //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// // //       </a>
// // //     </li>
// // //   );

// // //   const BrandMenuItem = ({ label, href }) => (
// // //     <li className="group relative overflow-hidden list-none">
// // //       <a
// // //         href={href}
// // //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// // //       >
// // //         {label}
// // //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// // //       </a>
// // //     </li>
// // //   );

// // //   return (
// // //     <div className="w-full relative z-50 bg-white">
// // //       {/* Top Navigation */}
// // //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// // //         {/* Mobile Menu Button */}
// // //         <div className="md:hidden flex items-center">
// // //           <button
// // //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // //             className="text-gray-700 focus:outline-none"
// // //           >
// // //             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// // //           </button>
// // //         </div>

// // //         {/* Logo */}
// // //         <div className="flex items-center">
// // //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// // //         </div>

// // //         {/* Search - hidden on mobile */}
// // //         <div className="hidden md:flex flex-grow max-w-xl mx-4">
// // //           <input
// // //             type="text"
// // //             placeholder="Search Product..."
// // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // //           />
// // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // //             <FaSearch />
// // //           </button>
// // //         </div>

// // //         {/* Cart + Login */}
// // //         <div className="flex items-center space-x-4">
// // //           <FaShoppingCart className="text-2xl" />
// // //           {/* Modified Login Button */}
// // //           <button className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base">
// // //             <span className="hidden md:inline">LOGIN</span> {/* Hide "LOGIN" text on small screens, show on md and up */}
// // //             <FaUser className="text-xl md:text-base" /> {/* Adjust icon size if needed */}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Search - visible only on mobile */}
// // //       <div className="md:hidden px-4 py-2 border-b border-gray-200">
// // //         <div className="flex">
// // //           <input
// // //             type="text"
// // //             placeholder="Search Product..."
// // //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// // //           />
// // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // //             <FaSearch />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu - visible only on mobile */}
// // //       {mobileMenuOpen && (
// // //         <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200">
// // //           <div className="flex flex-col space-y-3">
// // //             <a href="#" className="hover:text-orange-500 py-2">Home</a>

// // //             {/* Mobile Categories */}
// // //             <div className="py-2">
// // //               <div className="flex justify-between items-center">
// // //                 <span className="font-medium">Categories</span>
// // //                 <FaChevronDown className="text-xs" />
// // //               </div>
// // //               <div className="mt-2 pl-4">
// // //                 <a href="#" className="block py-1 text-gray-600">Mass Gainer</a>
// // //                 <a href="#" className="block py-1 text-gray-600">Pre Workout</a>
// // //                 <a href="#" className="block py-1 text-gray-600">Fat Burner</a>
// // //                 <a href="#" className="block py-1 text-gray-600">View All</a>
// // //               </div>
// // //             </div>

// // //             <a href="#" className="hover:text-orange-500 py-2">Consultancy</a>

// // //             {/* Mobile Brands */}
// // //             <div className="py-2">
// // //               <div className="flex justify-between items-center">
// // //                 <span className="font-medium">Brands</span>
// // //                 <FaChevronDown className="text-xs" />
// // //               </div>
// // //               <div className="mt-2 pl-4">
// // //                 <a href="#" className="block py-1 text-gray-600">Popular Brands</a>
// // //                 <a href="#" className="block py-1 text-gray-600">A-Z Brands</a>
// // //                 <a href="#" className="block py-1 text-gray-600">View All</a>
// // //               </div>
// // //             </div>

// // //             <a href="#" className="hover:text-orange-500 py-2">Contact Us</a>

// // //             {/* Remove the redundant LOGIN button from here if you only want one */}
// // //             {/* <button className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // //               <span>LOGIN</span>
// // //               <FaUser />
// // //             </button> */}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Bottom Navigation - Desktop */}
// // //       <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
// // //         <a href="#" className="hover:text-orange-500">Home</a>

// // //         {/* Categories with Mega Menu */}
// // //         <div
// // //           onMouseEnter={handleCategoriesMouseEnter}
// // //           onMouseLeave={handleCategoriesMouseLeave}
// // //         >
// // //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Categories</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </div>

// // //           {showCategories && (
// // //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// // //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // //                 {/* Column 1 */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
// // //                   {["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"].map((item) => (
// // //                     <SubMenuItem key={item} label={item} />
// // //                   ))}
// // //                 </div>

// // //                 {/* Column 2 */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
// // //                   {["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"].map((item) => (
// // //                     <SubMenuItem key={item} label={item} />
// // //                   ))}
// // //                 </div>

// // //                 {/* Column 3 */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
// // //                   {["Energy Drink", "Fat Burner"].map((item) => (
// // //                     <SubMenuItem key={item} label={item} />
// // //                   ))}
// // //                 </div>

// // //                 {/* Column 4 */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
// // //                   {["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"].map((item) => (
// // //                     <SubMenuItem key={item} label={item} />
// // //                   ))}
// // //                 </div>

// // //                 {/* Column 5 */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
// // //                   {[
// // //                     "Pre Workout",
// // //                     "Probiotic",
// // //                     "Protein Blend",
// // //                     "Protein Casein",
// // //                     "Protein Hydrolyzed",
// // //                     "Protein Isolate",
// // //                     "Protein Vegan"
// // //                   ].map((item) => (
// // //                     <SubMenuItem key={item} label={item} />
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Consultancy */}
// // //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// // //         {/* Brands with Mega Menu */}
// // //         <div
// // //           onMouseEnter={handleBrandsMouseEnter}
// // //           onMouseLeave={handleBrandsMouseLeave}
// // //         >
// // //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Brands</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </div>

// // //           {showBrands && (
// // //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// // //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // //                 {/* Column 1: #-A-B-C */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">#-A-B-C</h4>
// // //                   <ul className="sub_li_list">
// // //                     <BrandMenuItem label="Alani" href="brand/alani" />
// // //                     <BrandMenuItem label="AllMax" href="brand/allmax" />
// // //                     <BrandMenuItem label="Animal" href="brand/animal" />
// // //                     <BrandMenuItem label="Axe & Sledge" href="brand/axe-sledge" />
// // //                     <BrandMenuItem label="Believe" href="brand/believe" />
// // //                     <BrandMenuItem label="Bucked Up" href="brand/bucked-up" />
// // //                     <BrandMenuItem label="Concrete" href="brand/concrete" />
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 2: D-E-F-G-H-I-J */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">D-E-F-G-H-I-J</h4>
// // //                   <ul className="sub_li_list">
// // //                     <BrandMenuItem label="Diesel" href="brand/diesel" />
// // //                     <BrandMenuItem label="Dymatize" href="brand/dymatize" />
// // //                     <BrandMenuItem label="EHP Labs" href="brand/ehp-labs" />
// // //                     <BrandMenuItem label="Himalaya" href="brand/himalaya" />
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 3: K-L-M-N-O */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">K-L-M-N-O</h4>
// // //                   <ul className="sub_li_list">
// // //                     <BrandMenuItem label="Kre-Alkalyn" href="brand/kre-alkalyn" />
// // //                     <BrandMenuItem label="Limitless Pharma" href="brand/limitless-pharma" />
// // //                     <BrandMenuItem label="MuscleMeds" href="brand/musclemeds" />
// // //                     <BrandMenuItem label="MuscleTech" href="brand/muscletech" />
// // //                     <BrandMenuItem label="Nutrabolics" href="brand/nutrabolics" />
// // //                     <BrandMenuItem label="Optimum Nutrition" href="brand/optimum-nutrition" />
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 4: P-Q-R */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">P-Q-R</h4>
// // //                   <ul className="sub_li_list">
// // //                     <BrandMenuItem label="PVL" href="brand/pvl" />
// // //                     <BrandMenuItem label="Raw X CBum" href="brand/raw-x-cbum" />
// // //                     <BrandMenuItem label="Red Demon Nutrition" href="brand/red-demon-nutrition" />
// // //                     <BrandMenuItem label="RedBull" href="brand/redbull" />
// // //                     <BrandMenuItem label="RedCon" href="brand/redcon" />
// // //                     <BrandMenuItem label="Revive" href="brand/revive" />
// // //                     <BrandMenuItem label="Rule 1" href="brand/rule-1" />
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 5: S-T-U-V-W-X-Y-Z */}
// // //                 <div>
// // //                   <h4 className="font-semibold pb-1 mb-2">S-T-U-V-W-X-Y-Z</h4>
// // //                   <ul className="sub_li_list">
// // //                     <BrandMenuItem label="Schinoussa" href="brand/schinoussa" />
// // //                     <BrandMenuItem label="TC Nutrition" href="brand/tc-nutrition" />
// // //                     <BrandMenuItem label="Whey" href="brand/whey" />
// // //                     <BrandMenuItem label="Xtend" href="brand/xtend" />
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Header;

// // import React, { useState, useRef } from "react";
// // import {
// //   FaShoppingCart,
// //   FaUser,
// //   FaChevronDown,
// //   FaSearch,
// //   FaArrowRight,
// //   FaBars,
// //   FaTimes,
// //   FaChevronRight // New icon for sub-menu indicators
// // } from "react-icons/fa";

// // const Header = () => {
// //   // State for mobile menu
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   // States for mobile sub-menus
// //   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
// //   const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
// //   const [mobileShopByGoalOpen, setMobileShopByGoalOpen] = useState(false); // New state for Shop by Goal

// //   // State for mega menus (desktop)
// //   const [showCategories, setShowCategories] = useState(false);
// //   const [showBrands, setShowBrands] = useState(false);

// //   // Refs for hover delays
// //   const categoriesTimeoutRef = useRef(null);
// //   const brandsTimeoutRef = useRef(null);

// //   // Mega menu handlers (desktop)
// //   const handleCategoriesMouseEnter = () => {
// //     if (categoriesTimeoutRef.current) {
// //       clearTimeout(categoriesTimeoutRef.current);
// //     }
// //     setShowCategories(true);
// //   };

// //   const handleCategoriesMouseLeave = () => {
// //     categoriesTimeoutRef.current = setTimeout(() => {
// //       setShowCategories(false);
// //     }, 150);
// //   };

// //   const handleBrandsMouseEnter = () => {
// //     if (brandsTimeoutRef.current) {
// //       clearTimeout(brandsTimeoutRef.current);
// //     }
// //     setShowBrands(true);
// //   };

// //   const handleBrandsMouseLeave = () => {
// //     brandsTimeoutRef.current = setTimeout(() => {
// //       setShowBrands(false);
// //     }, 150);
// //   };

// //   // Menu item components
// //   const SubMenuItem = ({ label }) => (
// //     <li className="group relative overflow-hidden list-none">
// //       <a
// //         href="#"
// //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// //       >
// //         {label}
// //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// //       </a>
// //     </li>
// //   );

// //   const BrandMenuItem = ({ label, href }) => (
// //     <li className="group relative overflow-hidden list-none">
// //       <a
// //         href={href}
// //         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
// //       >
// //         {label}
// //         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
// //       </a>
// //     </li>
// //   );

// //   return (
// //     <div className="w-full relative z-50 bg-white">
// //       {/* Top Navigation */}
// //       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden flex items-center">
// //           <button
// //             onClick={() => setMobileMenuOpen(true)} // Open menu on click
// //             className="text-gray-700 focus:outline-none"
// //           >
// //             <FaBars size={24} />
// //           </button>
// //         </div>

// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <img src="/logo-1.png" alt="Buildape" className="h-15" />
// //         </div>

// //         {/* Search - hidden on mobile */}
// //         <div className="hidden md:flex flex-grow max-w-xl mx-4">
// //           <input
// //             type="text"
// //             placeholder="Search Product..."
// //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// //           />
// //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// //             <FaSearch />
// //           </button>
// //         </div>

// //         {/* Cart + Login */}
// //         <div className="flex items-center space-x-4">
// //           <FaShoppingCart className="text-2xl" />
// //           <button className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base">
// //             <span className="hidden md:inline">LOGIN</span>
// //             <FaUser className="text-xl md:text-base" />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Search - visible only on mobile */}
// //       <div className="md:hidden px-4 py-2 border-b border-gray-200">
// //         <div className="flex">
// //           <input
// //             type="text"
// //             placeholder="Search Product..."
// //             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
// //           />
// //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// //             <FaSearch />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu Overlay and Side Menu */}
// //       {mobileMenuOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
// //           {/* Actual Mobile Side Menu */}
// //           <div
// //             className={`fixed right-0 top-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
// //               ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
// //             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
// //           >
// //             <div className="flex items-center justify-between p-4 border-b border-gray-200">
// //               <img src="/logo-1.png" alt="Buildape" className="h-12" /> {/* Adjust logo size for menu */}
// //               <button onClick={() => setMobileMenuOpen(false)} className="text-red-500">
// //                 <FaTimes size={24} />
// //               </button>
// //             </div>

// //             <div className="p-4 flex flex-col">
// //               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Home</a>

// //               {/* Mobile Categories */}
// //               <div>
// //                 <div
// //                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
// //                   onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
// //                 >
// //                   <span className="font-medium">Categories</span>
// //                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileCategoriesOpen ? 'rotate-90' : ''}`} />
// //                 </div>
// //                 {mobileCategoriesOpen && (
// //                   <div className="mt-2 pl-4">
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Mass Gainer</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Pre Workout</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Fat Burner</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">View All</a>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Mobile Shop by Goal - New item */}
// //               <div>
// //                 <div
// //                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
// //                   onClick={() => setMobileShopByGoalOpen(!mobileShopByGoalOpen)}
// //                 >
// //                   <span className="font-medium">Shop by Goal</span>
// //                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileShopByGoalOpen ? 'rotate-90' : ''}`} />
// //                 </div>
// //                 {mobileShopByGoalOpen && (
// //                   <div className="mt-2 pl-4">
// //                     {/* Add your Shop by Goal sub-items here */}
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Muscle Gain</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Weight Loss</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Endurance</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Overall Health</a>
// //                   </div>
// //                 )}
// //               </div>

// //               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Consultancy</a>

// //               {/* Mobile Brands */}
// //               <div>
// //                 <div
// //                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
// //                   onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
// //                 >
// //                   <span className="font-medium">Brands</span>
// //                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-90' : ''}`} />
// //                 </div>
// //                 {mobileBrandsOpen && (
// //                   <div className="mt-2 pl-4">
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Popular Brands</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">A-Z Brands</a>
// //                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">View All</a>
// //                   </div>
// //                 )}
// //               </div>

// //               <a href="#" className="py-3 px-2 hover:text-orange-500">Contact Us</a>
// //               {/* Removed border-b for the last item for cleaner look */}
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Bottom Navigation - Desktop */}
// //       <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
// //         <a href="#" className="hover:text-orange-500">Home</a>

// //         {/* Categories with Mega Menu */}
// //         <div
// //           onMouseEnter={handleCategoriesMouseEnter}
// //           onMouseLeave={handleCategoriesMouseLeave}
// //         >
// //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// //             <span>Categories</span>
// //             <FaChevronDown className="text-xs" />
// //           </div>

// //           {showCategories && (
// //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// //                 {/* Column 1 */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
// //                   {["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"].map((item) => (
// //                     <SubMenuItem key={item} label={item} />
// //                   ))}
// //                 </div>

// //                 {/* Column 2 */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
// //                   {["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"].map((item) => (
// //                     <SubMenuItem key={item} label={item} />
// //                   ))}
// //                 </div>

// //                 {/* Column 3 */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
// //                   {["Energy Drink", "Fat Burner"].map((item) => (
// //                     <SubMenuItem key={item} label={item} />
// //                   ))}
// //                 </div>

// //                 {/* Column 4 */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
// //                   {["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"].map((item) => (
// //                     <SubMenuItem key={item} label={item} />
// //                   ))}
// //                 </div>

// //                 {/* Column 5 */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
// //                   {[
// //                     "Pre Workout",
// //                     "Probiotic",
// //                     "Protein Blend",
// //                     "Protein Casein",
// //                     "Protein Hydrolyzed",
// //                     "Protein Isolate",
// //                     "Protein Vegan"
// //                   ].map((item) => (
// //                     <SubMenuItem key={item} label={item} />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Consultancy */}
// //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// //         {/* Brands with Mega Menu */}
// //         <div
// //           onMouseEnter={handleBrandsMouseEnter}
// //           onMouseLeave={handleBrandsMouseLeave}
// //         >
// //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// //             <span>Brands</span>
// //             <FaChevronDown className="text-xs" />
// //           </div>

// //           {showBrands && (
// //             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
// //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// //                 {/* Column 1: #-A-B-C */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">#-A-B-C</h4>
// //                   <ul className="sub_li_list">
// //                     <BrandMenuItem label="Alani" href="brand/alani" />
// //                     <BrandMenuItem label="AllMax" href="brand/allmax" />
// //                     <BrandMenuItem label="Animal" href="brand/animal" />
// //                     <BrandMenuItem label="Axe & Sledge" href="brand/axe-sledge" />
// //                     <BrandMenuItem label="Believe" href="brand/believe" />
// //                     <BrandMenuItem label="Bucked Up" href="brand/bucked-up" />
// //                     <BrandMenuItem label="Concrete" href="brand/concrete" />
// //                   </ul>
// //                 </div>

// //                 {/* Column 2: D-E-F-G-H-I-J */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">D-E-F-G-H-I-J</h4>
// //                   <ul className="sub_li_list">
// //                     <BrandMenuItem label="Diesel" href="brand/diesel" />
// //                     <BrandMenuItem label="Dymatize" href="brand/dymatize" />
// //                     <BrandMenuItem label="EHP Labs" href="brand/ehp-labs" />
// //                     <BrandMenuItem label="Himalaya" href="brand/himalaya" />
// //                   </ul>
// //                 </div>

// //                 {/* Column 3: K-L-M-N-O */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">K-L-M-N-O</h4>
// //                   <ul className="sub_li_list">
// //                     <BrandMenuItem label="Kre-Alkalyn" href="brand/kre-alkalyn" />
// //                     <BrandMenuItem label="Limitless Pharma" href="brand/limitless-pharma" />
// //                     <BrandMenuItem label="MuscleMeds" href="brand/musclemeds" />
// //                     <BrandMenuItem label="MuscleTech" href="brand/muscletech" />
// //                     <BrandMenuItem label="Nutrabolics" href="brand/nutrabolics" />
// //                     <BrandMenuItem label="Optimum Nutrition" href="brand/optimum-nutrition" />
// //                   </ul>
// //                 </div>

// //                 {/* Column 4: P-Q-R */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">P-Q-R</h4>
// //                   <ul className="sub_li_list">
// //                     <BrandMenuItem label="PVL" href="brand/pvl" />
// //                     <BrandMenuItem label="Raw X CBum" href="brand/raw-x-cbum" />
// //                     <BrandMenuItem label="Red Demon Nutrition" href="brand/red-demon-nutrition" />
// //                     <BrandMenuItem label="RedBull" href="brand/redbull" />
// //                     <BrandMenuItem label="RedCon" href="brand/redcon" />
// //                     <BrandMenuItem label="Revive" href="brand/revive" />
// //                     <BrandMenuItem label="Rule 1" href="brand/rule-1" />
// //                   </ul>
// //                 </div>

// //                 {/* Column 5: S-T-U-V-W-X-Y-Z */}
// //                 <div>
// //                   <h4 className="font-semibold pb-1 mb-2">S-T-U-V-W-X-Y-Z</h4>
// //                   <ul className="sub_li_list">
// //                     <BrandMenuItem label="Schinoussa" href="brand/schinoussa" />
// //                     <BrandMenuItem label="TC Nutrition" href="brand/tc-nutrition" />
// //                     <BrandMenuItem label="Whey" href="brand/whey" />
// //                     <BrandMenuItem label="Xtend" href="brand/xtend" />
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

// import React, { useState, useRef } from "react";
// import {
//   FaShoppingCart,
//   FaUser,
//   FaChevronDown,
//   FaSearch,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
//   FaChevronRight
// } from "react-icons/fa";

// const Header = () => {
//   // State for mobile menu
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // States for mobile sub-menus
//   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
//   const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
//   const [mobileShopByGoalOpen, setMobileShopByGoalOpen] = useState(false);

//   // State for desktop mega menus
//   const [showCategories, setShowCategories] = useState(false);
//   const [showBrands, setShowBrands] = useState(false);

//   // Refs for hover delays
//   const categoriesTimeoutRef = useRef(null);
//   const brandsTimeoutRef = useRef(null);

//   // Consolidated Category Data for both desktop and mobile reuse
//   const allCategoryData = [
//     { heading: "Popular Categories", items: ["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"] },
//     { heading: "Shop By Category A–D", items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"] },
//     { heading: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
//     { heading: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
//     { heading: "Shop By Category O–Z", items: ["Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan"] }
//   ];

//   // Consolidated Brand Data for both desktop and mobile reuse
//   const allBrandData = [
//     { heading: "#-A-B-C", items: [{label: "Alani", href: "brand/alani"}, {label: "AllMax", href: "brand/allmax"}, {label: "Animal", href: "brand/animal"}, {label: "Axe & Sledge", href: "brand/axe-sledge"}, {label: "Believe", href: "brand/believe"}, {label: "Bucked Up", href: "brand/bucked-up"}, {label: "Concrete", href: "brand/concrete"}] },
//     { heading: "D-E-F-G-H-I-J", items: [{label: "Diesel", href: "brand/diesel"}, {label: "Dymatize", href: "brand/dymatize"}, {label: "EHP Labs", href: "brand/ehp-labs"}, {label: "Himalaya", href: "brand/himalaya"}] },
//     { heading: "K-L-M-N-O", items: [{label: "Kre-Alkalyn", href: "brand/kre-alkalyn"}, {label: "Limitless Pharma", href: "brand/limitless-pharma"}, {label: "MuscleMeds", href: "brand/musclemeds"}, {label: "MuscleTech", href: "brand/muscletech"}, {label: "Nutrabolics", href: "brand/nutrabolics"}, {label: "Optimum Nutrition", href: "brand/optimum-nutrition"}] },
//     { heading: "P-Q-R", items: [{label: "PVL", href: "brand/pvl"}, {label: "Raw X CBum", href: "brand/raw-x-cbum"}, {label: "Red Demon Nutrition", href: "brand/red-demon-nutrition"}, {label: "RedBull", href: "brand/redbull"}, {label: "RedCon", href: "brand/redcon"}, {label: "Revive", href: "brand/revive"}, {label: "Rule 1", href: "brand/rule-1"}] },
//     { heading: "S-T-U-V-W-X-Y-Z", items: [{label: "Schinoussa", href: "brand/schinoussa"}, {label: "TC Nutrition", href: "brand/tc-nutrition"}, {label: "Whey", href: "brand/whey"}, {label: "Xtend", href: "brand/xtend"}] }
//   ];

//   // Mega menu handlers (desktop)
//   const handleCategoriesMouseEnter = () => {
//     if (categoriesTimeoutRef.current) {
//       clearTimeout(categoriesTimeoutRef.current);
//     }
//     setShowCategories(true);
//   };

//   const handleCategoriesMouseLeave = () => {
//     categoriesTimeoutRef.current = setTimeout(() => {
//       setShowCategories(false);
//     }, 150);
//   };

//   const handleBrandsMouseEnter = () => {
//     if (brandsTimeoutRef.current) {
//       clearTimeout(brandsTimeoutRef.current);
//     }
//     setShowBrands(true);
//   };

//   const handleBrandsMouseLeave = () => {
//     brandsTimeoutRef.current = setTimeout(() => {
//       setShowBrands(false);
//     }, 150);
//   };

//   // Menu item components
//   const SubMenuItem = ({ label }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href="#" // You might want to make this dynamic as well if these items have specific links
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//       </a>
//     </li>
//   );

//   const BrandMenuItem = ({ label, href }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href={href}
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//       </a>
//     </li>
//   );

//   return (
//     <div className="w-full relative z-50 bg-white">
//       {/* Top Navigation */}
//       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="text-gray-700 focus:outline-none"
//           >
//             <FaBars size={24} />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo-1.png" alt="Buildape" className="h-15" />
//         </div>

//         {/* Search - hidden on mobile */}
//         <div className="hidden md:flex flex-grow max-w-xl mx-4">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//           />
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Cart + Login */}
//         <div className="flex items-center space-x-4">
//           <FaShoppingCart className="text-2xl" />
//           <button className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base">
//             <span className="hidden md:inline">LOGIN</span>
//             <FaUser className="text-xl md:text-base" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search - visible only on mobile */}
//       <div className="md:hidden px-4 py-2 border-b border-gray-200">
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//           />
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
//             <FaSearch />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay and Side Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
//           {/* Actual Mobile Side Menu */}
//           <div
//             className={`fixed left-0 top-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//               ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <img src="/logo-1.png" alt="Buildape" className="h-12" />
//               <button onClick={() => setMobileMenuOpen(false)} className="text-red-500">
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             {/* Scrollable content area for mobile menu */}
//             <div className="p-4 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
//               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Home</a>

//               {/* Mobile Categories - Now showing all categories directly */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
//                 >
//                   <span className="font-medium">Categories</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileCategoriesOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileCategoriesOpen && (
//                   <div className="mt-2 pl-4">
//                     {allCategoryData.map((section, index) => (
//                       <div key={index} className="mb-4 last:mb-0"> {/* Add margin-bottom for spacing */}
//                         <h5 className="font-semibold text-gray-800 py-2">{section.heading}</h5>
//                         {section.items.map((item, itemIndex) => (
//                           <a key={itemIndex} href="#" className="block py-1 text-gray-600 hover:text-orange-500">
//                             {item}
//                           </a>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Shop by Goal */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileShopByGoalOpen(!mobileShopByGoalOpen)}
//                 >
//                   <span className="font-medium">Shop by Goal</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileShopByGoalOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileShopByGoalOpen && (
//                   <div className="mt-2 pl-4">
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Muscle Gain</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Weight Loss</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Endurance</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Overall Health</a>
//                   </div>
//                 )}
//               </div>

//               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Consultancy</a>

//               {/* Mobile Brands - Now showing all brands directly */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
//                 >
//                   <span className="font-medium">Brands</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileBrandsOpen && (
//                   <div className="mt-2 pl-4">
//                     {allBrandData.map((section, index) => (
//                       <div key={index} className="mb-4 last:mb-0">
//                         <h5 className="font-semibold text-gray-800 py-2">{section.heading}</h5>
//                         {section.items.map((item, itemIndex) => (
//                           <a key={itemIndex} href={item.href} className="block py-1 text-gray-600 hover:text-orange-500">
//                             {item.label}
//                           </a>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#" className="py-3 px-2 hover:text-orange-500">Contact Us</a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Bottom Navigation - Desktop */}
//       <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
//         <a href="#" className="hover:text-orange-500">Home</a>

//         {/* Categories with Mega Menu (Desktop) - Uses allCategoryData */}
//         <div
//           onMouseEnter={handleCategoriesMouseEnter}
//           onMouseLeave={handleCategoriesMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Categories</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showCategories && (
//             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allCategoryData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">{section.heading}</h4>
//                     {section.items.map((item, itemIndex) => (
//                       <SubMenuItem key={itemIndex} label={item} />
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Consultancy */}
//         <a href="#" className="hover:text-orange-500">Consultancy</a>

//         {/* Brands with Mega Menu (Desktop) - Uses allBrandData */}
//         <div
//           onMouseEnter={handleBrandsMouseEnter}
//           onMouseLeave={handleBrandsMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Brands</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showBrands && (
//             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allBrandData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">{section.heading}</h4>
//                     <ul className="sub_li_list">
//                       {section.items.map((item, itemIndex) => (
//                         <BrandMenuItem key={itemIndex} label={item.label} href={item.href} />
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <a href="#" className="hover:text-orange-500">Contact Us</a>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import {
//   FaShoppingCart,
//   FaUser,
//   FaChevronDown,
//   FaSearch,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
//   FaChevronRight
// } from "react-icons/fa";

// const Header = () => {
//   // State for mobile menu
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // States for mobile sub-menus
//   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
//   const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
//   const [mobileShopByGoalOpen, setMobileShopByGoalOpen] = useState(false);

//   // State for desktop mega menus
//   const [showCategories, setShowCategories] = useState(false);
//   const [showBrands, setShowBrands] = useState(false);

//   // Refs for hover delays
//   const categoriesTimeoutRef = useRef(null);
//   const brandsTimeoutRef = useRef(null);

//   // Consolidated Category Data for both desktop and mobile reuse
//   const allCategoryData = [
//     { heading: "Popular Categories", items: ["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"] },
//     { heading: "Shop By Category A–D", items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"] },
//     { heading: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
//     { heading: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
//     { heading: "Shop By Category O–Z", items: ["Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan"] }
//   ];

//   // Consolidated Brand Data for both desktop and mobile reuse
//   const allBrandData = [
//     { heading: "#-A-B-C", items: [{label: "Alani", href: "brand/alani"}, {label: "AllMax", href: "brand/allmax"}, {label: "Animal", href: "brand/animal"}, {label: "Axe & Sledge", href: "brand/axe-sledge"}, {label: "Believe", href: "brand/believe"}, {label: "Bucked Up", href: "brand/bucked-up"}, {label: "Concrete", href: "brand/concrete"}] },
//     { heading: "D-E-F-G-H-I-J", items: [{label: "Diesel", href: "brand/diesel"}, {label: "Dymatize", href: "brand/dymatize"}, {label: "EHP Labs", "href": "brand/ehp-labs"}, {label: "Himalaya", href: "brand/himalaya"}] },
//     { heading: "K-L-M-N-O", items: [{label: "Kre-Alkalyn", href: "brand/kre-alkalyn"}, {label: "Limitless Pharma", href: "brand/limitless-pharma"}, {label: "MuscleMeds", href: "brand/musclemeds"}, {label: "MuscleTech", href: "brand/muscletech"}, {label: "Nutrabolics", href: "brand/nutrabolics"}, {label: "Optimum Nutrition", href: "brand/optimum-nutrition"}] },
//     { heading: "P-Q-R", items: [{label: "PVL", href: "brand/pvl"}, {label: "Raw X CBum", href: "brand/raw-x-cbum"}, {label: "Red Demon Nutrition", href: "brand/red-demon-nutrition"}, {label: "RedBull", href: "brand/redbull"}, {label: "RedCon", href: "brand/redcon"}, {label: "Revive", href: "brand/revive"}, {label: "Rule 1", href: "brand/rule-1"}] },
//     { heading: "S-T-U-V-W-X-Y-Z", items: [{label: "Schinoussa", href: "brand/schinoussa"}, {label: "TC Nutrition", href: "brand/tc-nutrition"}, {label: "Whey", href: "brand/whey"}, {label: "Xtend", href: "brand/xtend"}] }
//   ];

//   // Mega menu handlers (desktop)
//   const handleCategoriesMouseEnter = () => {
//     if (categoriesTimeoutRef.current) {
//       clearTimeout(categoriesTimeoutRef.current);
//     }
//     setShowCategories(true);
//   };

//   const handleCategoriesMouseLeave = () => {
//     categoriesTimeoutRef.current = setTimeout(() => {
//       setShowCategories(false);
//     }, 150);
//   };

//   const handleBrandsMouseEnter = () => {
//     if (brandsTimeoutRef.current) {
//       clearTimeout(brandsTimeoutRef.current);
//     }
//     setShowBrands(true);
//   };

//   const handleBrandsMouseLeave = () => {
//     brandsTimeoutRef.current = setTimeout(() => {
//       setShowBrands(false);
//     }, 150);
//   };

//   // Menu item components
//   const SubMenuItem = ({ label }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href="#"
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         {/* <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" /> */}
//       </a>
//     </li>
//   );

//   const BrandMenuItem = ({ label, href }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href={href}
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         {/* <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" /> */}
//       </a>
//     </li>
//   );

//   return (
//     <div className="w-full relative z-50 bg-white">
//       {/* Top Navigation */}
//       <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="text-gray-700 focus:outline-none"
//           >
//             <FaBars size={24} />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo-1.png" alt="Buildape" className="h-15" />
//         </div>

//         {/* Search - hidden on mobile */}
//         <div className="hidden md:flex flex-grow max-w-xl mx-4">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//           />
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Cart + Login */}
//         <div className="flex items-center space-x-4">
//           <FaShoppingCart className="text-2xl" />
//           <button className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base">
//             <span className="hidden md:inline">LOGIN</span>
//             <FaUser className="text-xl md:text-base" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search - visible only on mobile */}
//       <div className="md:hidden px-4 py-2 border-b border-gray-200">
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//           />
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
//             <FaSearch />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay and Side Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
//           {/* Actual Mobile Side Menu */}
//           <div
//             // **CRITICAL CHANGE HERE**
//             // Position it to start fully off-screen to the right by default
//             // Then translate it to 0 when open, and back to full when closed.
//             className={`fixed top-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//               ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//             // Added a specific right position for clarity if 'w-full' isn't sufficient for initial off-screen
//             style={mobileMenuOpen ? {} : { right: '-100%' }} // Optional: Ensures it starts off-screen
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <img src="/logo-1.png" alt="Buildape" className="h-12" />
//               <button onClick={() => setMobileMenuOpen(false)} className="text-red-500">
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             {/* Scrollable content area for mobile menu */}
//             <div className="p-4 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
//               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Home</a>

//               {/* Mobile Categories - Now showing all categories directly */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
//                 >
//                   <span className="font-medium">Categories</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileCategoriesOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileCategoriesOpen && (
//                   <div className="mt-2 pl-4">
//                     {allCategoryData.map((section, index) => (
//                       <div key={index} className="mb-4 last:mb-0">
//                         <h5 className="font-semibold text-gray-800 py-2">{section.heading}</h5>
//                         {section.items.map((item, itemIndex) => (
//                           <a key={itemIndex} href="#" className="block py-1 text-gray-600 hover:text-orange-500">
//                             {item}
//                           </a>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Shop by Goal */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileShopByGoalOpen(!mobileShopByGoalOpen)}
//                 >
//                   <span className="font-medium">Shop by Goal</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileShopByGoalOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileShopByGoalOpen && (
//                   <div className="mt-2 pl-4">
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Muscle Gain</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Weight Loss</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Endurance</a>
//                     <a href="#" className="block py-2 text-gray-600 hover:text-orange-500">Overall Health</a>
//                   </div>
//                 )}
//               </div>

//               <a href="#" className="py-3 px-2 border-b border-gray-200 hover:text-orange-500">Consultancy</a>

//               {/* Mobile Brands - Now showing all brands directly */}
//               <div>
//                 <div
//                   className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
//                   onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
//                 >
//                   <span className="font-medium">Brands</span>
//                   <FaChevronRight className={`text-xs transition-transform duration-200 ${mobileBrandsOpen ? 'rotate-90' : ''}`} />
//                 </div>
//                 {mobileBrandsOpen && (
//                   <div className="mt-2 pl-4">
//                     {allBrandData.map((section, index) => (
//                       <div key={index} className="mb-4 last:mb-0">
//                         <h5 className="font-semibold text-gray-800 py-2">{section.heading}</h5>
//                         {section.items.map((item, itemIndex) => (
//                           <a key={itemIndex} href={item.href} className="block py-1 text-gray-600 hover:text-orange-500">
//                             {item.label}
//                           </a>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <a href="#" className="py-3 px-2 hover:text-orange-500">Contact Us</a>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Bottom Navigation - Desktop */}
//       <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
//         <a href="#" className="hover:text-orange-500">Home</a>

//         {/* Categories with Mega Menu (Desktop) - Uses allCategoryData */}
//         <div
//           onMouseEnter={handleCategoriesMouseEnter}
//           onMouseLeave={handleCategoriesMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Categories</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showCategories && (
//             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allCategoryData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">{section.heading}</h4>
//                     {section.items.map((item, itemIndex) => (
//                       <SubMenuItem key={itemIndex} label={item} />
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Consultancy */}
//         <a href="#" className="hover:text-orange-500">Consultancy</a>

//         {/* Brands with Mega Menu (Desktop) - Uses allBrandData */}
//         <div
//           onMouseEnter={handleBrandsMouseEnter}
//           onMouseLeave={handleBrandsMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Brands</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showBrands && (
//             <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allBrandData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">{section.heading}</h4>
//                     <ul className="sub_li_list">
//                       {section.items.map((item, itemIndex) => (
//                         <BrandMenuItem key={itemIndex} label={item.label} href={item.href} />
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <a href="#" className="hover:text-orange-500">Contact Us</a>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useRef } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaChevronDown,
  FaSearch,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States for mobile sub-menus
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileShopByGoalOpen, setMobileShopByGoalOpen] = useState(false);

  // State for desktop mega menus
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  // Refs for hover delays
  const categoriesTimeoutRef = useRef(null);
  const brandsTimeoutRef = useRef(null);

  // Consolidated Category Data for both desktop and mobile reuse
  const allCategoryData = [
    {
      heading: "Popular Categories",
      items: [
        "Mass Gainer",
        "Pre Workout",
        "Carbs",
        "Fat Burner",
        "Protein Blend",
        "Energy Drink",
        "Protein Vegan",
      ],
    },
    {
      heading: "Shop By Category A–D",
      items: [
        "Amino Acids / BCAA / EAA",
        "Arginine & Glutamine",
        "Carbs",
        "Creatine",
      ],
    },
    { heading: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
    {
      heading: "Shop By Category I–N",
      items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
    },
    {
      heading: "Shop By Category O–Z",
      items: [
        "Pre Workout",
        "Probiotic",
        "Protein Blend",
        "Protein Casein",
        "Protein Hydrolyzed",
        "Protein Isolate",
        "Protein Vegan",
      ],
    },
  ];

  // Consolidated Brand Data for both desktop and mobile reuse
  const allBrandData = [
    {
      heading: "#-A-B-C",
      items: [
        { label: "Alani", href: "brand/alani" },
        { label: "AllMax", href: "brand/allmax" },
        { label: "Animal", href: "brand/animal" },
        { label: "Axe & Sledge", href: "brand/axe-sledge" },
        { label: "Believe", href: "brand/believe" },
        { label: "Bucked Up", href: "brand/bucked-up" },
        { label: "Concrete", href: "brand/concrete" },
      ],
    },
    {
      heading: "D-E-F-G-H-I-J",
      items: [
        { label: "Diesel", href: "brand/diesel" },
        { label: "Dymatize", href: "brand/dymatize" },
        { label: "EHP Labs", href: "brand/ehp-labs" },
        { label: "Himalaya", href: "brand/himalaya" },
      ],
    },
    {
      heading: "K-L-M-N-O",
      items: [
        { label: "Kre-Alkalyn", href: "brand/kre-alkalyn" },
        { label: "Limitless Pharma", href: "brand/limitless-pharma" },
        { label: "MuscleMeds", href: "brand/musclemeds" },
        { label: "MuscleTech", href: "brand/muscletech" },
        { label: "Nutrabolics", href: "brand/nutrabolics" },
        { label: "Optimum Nutrition", href: "brand/optimum-nutrition" },
      ],
    },
    {
      heading: "P-Q-R",
      items: [
        { label: "PVL", href: "brand/pvl" },
        { label: "Raw X CBum", href: "brand/raw-x-cbum" },
        { label: "Red Demon Nutrition", href: "brand/red-demon-nutrition" },
        { label: "RedBull", href: "brand/redbull" },
        { label: "RedCon", href: "brand/redcon" },
        { label: "Revive", href: "brand/revive" },
        { label: "Rule 1", href: "brand/rule-1" },
      ],
    },
    {
      heading: "S-T-U-V-W-X-Y-Z",
      items: [
        { label: "Schinoussa", href: "brand/schinoussa" },
        { label: "TC Nutrition", href: "brand/tc-nutrition" },
        { label: "Whey", href: "brand/whey" },
        { label: "Xtend", href: "brand/xtend" },
      ],
    },
  ];

  // Mega menu handlers (desktop)
  const handleCategoriesMouseEnter = () => {
    if (categoriesTimeoutRef.current) {
      clearTimeout(categoriesTimeoutRef.current);
    }
    setShowCategories(true);
  };

  const handleCategoriesMouseLeave = () => {
    categoriesTimeoutRef.current = setTimeout(() => {
      setShowCategories(false);
    }, 150);
  };

  const handleBrandsMouseEnter = () => {
    if (brandsTimeoutRef.current) {
      clearTimeout(brandsTimeoutRef.current);
    }
    setShowBrands(true);
  };

  const handleBrandsMouseLeave = () => {
    brandsTimeoutRef.current = setTimeout(() => {
      setShowBrands(false);
    }, 150);
  };

  // Menu item components
  const SubMenuItem = ({ label }) => (
    <li className="group relative overflow-hidden list-none">
      <a
        href="#"
        className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
      >
        {label}
      </a>
    </li>
  );

  const BrandMenuItem = ({ label, href }) => (
    <li className="group relative overflow-hidden list-none">
      <a
        href={href}
        className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
      >
        {label}
      </a>
    </li>
  );

  return (
    <div className="w-full relative z-50 bg-white sticky top-0">
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo-1.png" alt="Buildape" className="h-15" />
        </div>

        {/* Search - hidden on mobile */}
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Cart + Login */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-2xl" />
          <button className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base">
            <span className="hidden md:inline">LOGIN</span>
            <FaUser className="text-xl md:text-base" />
          </button>
        </div>
      </div>

      {/* Mobile Search - visible only on mobile */}
      <div className="md:hidden px-4 py-2 border-b border-gray-200">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay and Side Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Side Menu */}
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <img src="/logo-1.png" alt="Buildape" className="h-12" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-red-500"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Scrollable content area for mobile menu */}
          <div className="p-4 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
            <Link
              to="/"
              className="py-3 px-2 border-b border-gray-200 hover:text-orange-500"
            >
              Home
            </Link>

            {/* Mobile Categories */}
            <div>
              <div
                className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
              >
                <span className="font-medium">Categories</span>
                <FaChevronRight
                  className={`text-xs transition-transform duration-200 ${
                    mobileCategoriesOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
              {mobileCategoriesOpen && (
                <div className="mt-2 pl-4">
                  {allCategoryData.map((section, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h5 className="font-semibold text-gray-800 py-2">
                        {section.heading}
                      </h5>
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href="#"
                          className="block py-1 text-gray-600 hover:text-orange-500"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Shop by Goal */}
            <div>
              <div
                className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
                onClick={() => setMobileShopByGoalOpen(!mobileShopByGoalOpen)}
              >
                <span className="font-medium">Shop by Goal</span>
                <FaChevronRight
                  className={`text-xs transition-transform duration-200 ${
                    mobileShopByGoalOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
              {mobileShopByGoalOpen && (
                <div className="mt-2 pl-4">
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-500"
                  >
                    Muscle Gain
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-500"
                  >
                    Weight Loss
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-500"
                  >
                    Endurance
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-500"
                  >
                    Overall Health
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="py-3 px-2 border-b border-gray-200 hover:text-orange-500"
            >
              Consultancy
            </a>

            {/* Mobile Brands */}
            <div>
              <div
                className="flex justify-between items-center py-3 px-2 border-b border-gray-200 cursor-pointer hover:text-orange-500"
                onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
              >
                <span className="font-medium">Brands</span>
                <FaChevronRight
                  className={`text-xs transition-transform duration-200 ${
                    mobileBrandsOpen ? "rotate-90" : ""
                  }`}
                />
              </div>
              {mobileBrandsOpen && (
                <div className="mt-2 pl-4">
                  {allBrandData.map((section, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h5 className="font-semibold text-gray-800 py-2">
                        {section.heading}
                      </h5>
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="block py-1 text-gray-600 hover:text-orange-500"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="py-3 px-2 hover:text-orange-500">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Desktop */}
      <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>

        {/* Categories with Mega Menu (Desktop) - Uses allCategoryData */}
        <div
          onMouseEnter={handleCategoriesMouseEnter}
          onMouseLeave={handleCategoriesMouseLeave}
        >
          <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <span>Categories</span>
            <FaChevronDown className="text-xs" />
          </div>

          {showCategories && (
            <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
              <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
                {allCategoryData.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold pb-1 mb-2">
                      {section.heading}
                    </h4>
                    {section.items.map((item, itemIndex) => (
                      <SubMenuItem key={itemIndex} label={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Consultancy */}
        <a href="#" className="hover:text-orange-500">
          Consultancy
        </a>

        {/* Brands with Mega Menu (Desktop) - Uses allBrandData */}
        <div
          onMouseEnter={handleBrandsMouseEnter}
          onMouseLeave={handleBrandsMouseLeave}
        >
          <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <span>Brands</span>
            <FaChevronDown className="text-xs" />
          </div>

          {showBrands && (
            <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
              <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
                {allBrandData.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold pb-1 mb-2">
                      {section.heading}
                    </h4>
                    <ul className="sub_li_list">
                      {section.items.map((item, itemIndex) => (
                        <BrandMenuItem
                          key={itemIndex}
                          label={item.label}
                          href={item.href}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/contact" className="hover:text-orange-500">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
