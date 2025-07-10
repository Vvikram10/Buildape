// import React, { useState, useRef, useEffect } from "react";
// import {
//   FaShoppingCart,
//   FaUser,
//   FaChevronDown,
//   FaSearch,
//   FaBars,
//   FaTimes,
//   FaChevronRight,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   // Mobile menu states
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
//   const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
//   const [mobileShopByGoalOpen, setMobileShopByGoalOpen] = useState(false);

//   // Desktop mega menu states
//   const [showCategories, setShowCategories] = useState(false);
//   const [showBrands, setShowBrands] = useState(false);

//   // Refs for hover delays
//   const categoriesTimeoutRef = useRef(null);
//   const brandsTimeoutRef = useRef(null);

//   // Category data
//   const allCategoryData = [
//     {
//       heading: "Popular Categories",
//       items: [
//         "Mass Gainer",
//         "Pre Workout",
//         "Carbs",
//         "Fat Burner",
//         "Protein Blend",
//         "Energy Drink",
//         "Protein Vegan",
//       ],
//     },
//     {
//       heading: "Shop By Category A–D",
//       items: [
//         "Amino Acids / BCAA / EAA",
//         "Arginine & Glutamine",
//         "Carbs",
//         "Creatine",
//       ],
//     },
//     {
//       heading: "Shop By Category E–H",
//       items: ["Energy Drink", "Fat Burner"],
//     },
//     {
//       heading: "Shop By Category I–N",
//       items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
//     },
//     {
//       heading: "Shop By Category O–Z",
//       items: [
//         "Pre Workout",
//         "Probiotic",
//         "Protein Blend",
//         "Protein Casein",
//         "Protein Hydrolyzed",
//         "Protein Isolate",
//         "Protein Vegan",
//       ],
//     },
//   ];

//   // Brand data
//   const allBrandData = [
//     {
//       heading: "#-A-B-C",
//       items: [
//         { label: "Alani", href: "/brand/alani" },
//         { label: "AllMax", href: "/brand/allmax" },
//         { label: "Animal", href: "/brand/animal" },
//         { label: "Axe & Sledge", href: "/brand/axe-sledge" },
//         { label: "Believe", href: "/brand/believe" },
//         { label: "Bucked Up", href: "/brand/bucked-up" },
//         { label: "Concrete", href: "/brand/concrete" },
//       ],
//     },
//     {
//       heading: "D-E-F-G-H-I-J",
//       items: [
//         { label: "Diesel", href: "/brand/diesel" },
//         { label: "Dymatize", href: "/brand/dymatize" },
//         { label: "EHP Labs", href: "/brand/ehp-labs" },
//         { label: "Himalaya", href: "/brand/himalaya" },
//       ],
//     },
//     {
//       heading: "K-L-M-N-O",
//       items: [
//         { label: "Kre-Alkalyn", href: "/brand/kre-alkalyn" },
//         { label: "Limitless Pharma", href: "/brand/limitless-pharma" },
//         { label: "MuscleMeds", href: "/brand/musclemeds" },
//         { label: "MuscleTech", href: "/brand/muscletech" },
//         { label: "Nutrabolics", href: "/brand/nutrabolics" },
//         { label: "Optimum Nutrition", href: "/brand/optimum-nutrition" },
//       ],
//     },
//     {
//       heading: "P-Q-R",
//       items: [
//         { label: "PVL", href: "/brand/pvl" },
//         { label: "Raw X CBum", href: "/brand/raw-x-cbum" },
//         { label: "Red Demon Nutrition", href: "/brand/red-demon-nutrition" },
//         { label: "RedBull", href: "/brand/redbull" },
//         { label: "RedCon", href: "/brand/redcon" },
//         { label: "Revive", href: "/brand/revive" },
//         { label: "Rule 1", href: "/brand/rule-1" },
//       ],
//     },
//     {
//       heading: "S-T-U-V-W-X-Y-Z",
//       items: [
//         { label: "Schinoussa", href: "/brand/schinoussa" },
//         { label: "TC Nutrition", href: "/brand/tc-nutrition" },
//         { label: "Whey", href: "/brand/whey" },
//         { label: "Xtend", href: "/brand/xtend" },
//       ],
//     },
//   ];

//   // Convert category name to path
//   const getCategoryPath = (name) => {
//     const mappings = {
//       "Mass Gainer": "mass-gainers",
//       "Protein Blend": "whey-proteins",
//       "Amino Acids / BCAA / EAA": "amino-acids-bcaa-eaa",
//       "Arginine & Glutamine": "arginine-glutamine",
//       "Kidney & Liver": "kidney-liver",
//       "Protein Hydrolyzed": "protein-hydrolyzed",
//       "Protein Isolate": "protein-isolate",
//       "Protein Casein": "protein-casein",
//       "Protein Vegan": "protein-vegan",
//     };

//     return (
//       mappings[name] ||
//       name
//         .toLowerCase()
//         .replace(/\s+/g, "-")
//         .replace(/&/g, "and")
//         .replace(/\//g, "-")
//     );
//   };

//   // Desktop mega menu handlers
//   const handleCategoriesMouseEnter = () => {
//     clearTimeout(categoriesTimeoutRef.current);
//     setShowCategories(true);
//     setShowBrands(false);
//   };

//   const handleCategoriesMouseLeave = () => {
//     categoriesTimeoutRef.current = setTimeout(() => {
//       setShowCategories(false);
//     }, 150);
//   };

//   const handleBrandsMouseEnter = () => {
//     clearTimeout(brandsTimeoutRef.current);
//     setShowBrands(true);
//     setShowCategories(false);
//   };

//   const handleBrandsMouseLeave = () => {
//     brandsTimeoutRef.current = setTimeout(() => {
//       setShowBrands(false);
//     }, 150);
//   };

//   // Close menus when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (showCategories && !e.target.closest(".categories-mega-menu")) {
//         setShowCategories(false);
//       }
//       if (showBrands && !e.target.closest(".brands-mega-menu")) {
//         setShowBrands(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [showCategories, showBrands]);

//   // Mobile menu handlers
//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const toggleMobileCategories = () =>
//     setMobileCategoriesOpen(!mobileCategoriesOpen);
//   const toggleMobileBrands = () => setMobileBrandsOpen(!mobileBrandsOpen);
//   const toggleMobileShopByGoal = () =>
//     setMobileShopByGoalOpen(!mobileShopByGoalOpen);

//   return (
//     <div className="w-full  z-50   fixed top-0 ">
//       {/* Top Navigation */}
//       <div className="flex items-center justify-between px-4 md:px-10 pt-1 ">
//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-700 focus:outline-none"
//           >
//             <FaBars size={24} />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src="/logo-1.png" alt="Buildape" className="h-15" />
//           </Link>
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
//           <Link to="/cart" className="relative">
//             <FaShoppingCart className="text-2xl" />
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               0
//             </span>
//           </Link>
//           <Link
//             to="/login"
//             className="flex items-center bg-orange-500 text-white px-3 py-2 rounded-md space-x-2 text-sm md:text-base"
//           >
//             <span className="hidden md:inline">LOGIN</span>
//             <FaUser className="text-xl md:text-base" />
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Search */}
//       <div className="md:hidden px-4 py-2 ">
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

//       {/* Bottom Navigation - Desktop */}
//       <div className="hidden text-gray-800 md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md  relative ">
//         <Link to="/" className="hover:text-orange-500">
//           Home
//         </Link>

//         {/* Categories with Mega Menu (Desktop) */}
//         <div
//           onMouseEnter={handleCategoriesMouseEnter}
//           onMouseLeave={handleCategoriesMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Categories</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showCategories && (
//             <div className="categories-mega-menu absolute left-0 right-0 w-full bg-white shadow-lg top-full  z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allCategoryData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">
//                       {section.heading}
//                     </h4>
//                     <ul>
//                       {section.items.map((item, itemIndex) => (
//                         <li key={itemIndex} className="py-1">
//                           <Link
//                             to={`/${getCategoryPath(item)}`}
//                             className="hover:text-orange-500 block transition-all duration-300 hover:translate-x-1"
//                             onClick={() => setShowCategories(false)}
//                           >
//                             {item}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Consultancy */}
//         <Link to="/consult" className="hover:text-orange-500">
//           Consultancy
//         </Link>

//         {/* Brands with Mega Menu (Desktop) */}
//         <div
//           onMouseEnter={handleBrandsMouseEnter}
//           onMouseLeave={handleBrandsMouseLeave}
//         >
//           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Brands</span>
//             <FaChevronDown className="text-xs" />
//           </div>

//           {showBrands && (
//             <div className="brands-mega-menu absolute left-0 right-0 w-full top-full bg-white shadow-lg  z-50 px-4">
//               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-5 gap-6 text-sm text-gray-700">
//                 {allBrandData.map((section, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold pb-1 mb-2">
//                       {section.heading}
//                     </h4>
//                     <ul>
//                       {section.items.map((item, itemIndex) => (
//                         <li key={itemIndex} className="py-1">
//                           <Link
//                             to={item.href}
//                             className="hover:text-orange-500 block transition-all duration-300 hover:translate-x-1"
//                             onClick={() => setShowBrands(false)}
//                           >
//                             {item.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <Link to="/contact" className="hover:text-orange-500">
//           Contact Us
//         </Link>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black bg-opacity-50"
//             onClick={toggleMobileMenu}
//           />

//           {/* Side Menu */}
//           <div className="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <img src="/logo-1.png" alt="Buildape" className="h-12" />
//               <button onClick={toggleMobileMenu} className="text-red-500">
//                 <FaTimes size={24} />
//               </button>
//             </div>

//             <div className="h-[calc(100%-64px)] overflow-y-auto p-4">
//               <Link
//                 to="/"
//                 className="block py-3 px-2 border-b border-gray-200 hover:text-orange-500"
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </Link>

//               {/* Mobile Categories */}
//               <div className="border-b border-gray-200">
//                 <div
//                   className="flex justify-between items-center py-3 px-2 cursor-pointer hover:text-orange-500"
//                   onClick={toggleMobileCategories}
//                 >
//                   <span className="font-medium">Categories</span>
//                   <FaChevronRight
//                     className={`text-xs transition-transform ${
//                       mobileCategoriesOpen ? "rotate-90" : ""
//                     }`}
//                   />
//                 </div>
//                 {mobileCategoriesOpen && (
//                   <div className="pl-4">
//                     {allCategoryData.map((section, index) => (
//                       <div key={index} className="mb-4">
//                         <h5 className="font-semibold text-gray-800 py-2">
//                           {section.heading}
//                         </h5>
//                         {section.items.map((item, itemIndex) => (
//                           <Link
//                             key={itemIndex}
//                             to={`/${getCategoryPath(item)}`}
//                             className="block py-2 text-gray-600 hover:text-orange-500 pl-2"
//                             onClick={toggleMobileMenu}
//                           >
//                             {item}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Consultancy */}
//               <Link
//                 to="/consult"
//                 className="block py-3 px-2 border-b border-gray-200 hover:text-orange-500"
//                 onClick={toggleMobileMenu}
//               >
//                 Consultancy
//               </Link>

//               {/* Mobile Brands */}
//               <div className="border-b border-gray-200">
//                 <div
//                   className="flex justify-between items-center py-3 px-2 cursor-pointer hover:text-orange-500"
//                   onClick={toggleMobileBrands}
//                 >
//                   <span className="font-medium">Brands</span>
//                   <FaChevronRight
//                     className={`text-xs transition-transform ${
//                       mobileBrandsOpen ? "rotate-90" : ""
//                     }`}
//                   />
//                 </div>
//                 {mobileBrandsOpen && (
//                   <div className="pl-4">
//                     {allBrandData.map((section, index) => (
//                       <div key={index} className="mb-4">
//                         <h5 className="font-semibold text-gray-800 py-2">
//                           {section.heading}
//                         </h5>
//                         {section.items.map((item, itemIndex) => (
//                           <Link
//                             key={itemIndex}
//                             to={item.href}
//                             className="block py-2 text-gray-600 hover:text-orange-500 pl-2"
//                             onClick={toggleMobileMenu}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/contact"
//                 className="block py-3 px-2 hover:text-orange-500"
//                 onClick={toggleMobileMenu}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full fixed top-0  z-50 pb-16">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with image */}
        <Link to="/">
          <img 
            src="/logo-1.png" // Replace with your actual logo path
            alt="BUILDAPE" 
            className="h-10" // Adjust height as needed
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-600 font-medium">
            HOME
          </Link>
          <Link to="/menu" className="hover:text-gray-600 font-medium">
            MENU
          </Link>
          <Link to="/about" className="hover:text-gray-600 font-medium">
            ABOUT US
          </Link>
          <Link to="/contact" className="hover:text-gray-600 font-medium">
            CONTACT
          </Link>
        </nav>

        {/* Login with icon */}
        <div className="flex items-center space-x-4 ">
          <Link 
            to="/login" 
            className="flex items-center space-x-1 hover:text-gray-600"
          >
            {/* <span className="hidden md:inline">LOGIN</span> */}
            <FaUser className="text-lg" />
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;