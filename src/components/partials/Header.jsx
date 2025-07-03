
// // // // import React, { useState } from "react";
// // // // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

// // // // const Header = () => {
// // // //   const [showCategories, setShowCategories] = useState(false);
// // // //   const [showBrands, setShowBrands] = useState(false);

// // // //   return (
// // // //     <div className="w-full">
// // // //       {/* Top nav */}
// // // //       <div className="flex items-center justify-between px-10 py-1 md:px-10 border-b-1 border-gray-200">
// // // //         {/* Logo */}
// // // //         <div className="flex items-center space-x-2">
// // // //           <img src="/logo-1.png" alt="Buildape" className="h-18 border-2 shadow-lg" />
// // // //         </div>

// // // //         {/* Search */}
// // // //         <div className="flex flex-grow max-w-lg mx-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search Product..."
// // // //             className="w-full px-4 py-2 border text-gray-300 border-gray-300 rounded-l-md focus:outline-none"
// // // //           />
// // // //           <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
// // // //             <FaSearch />
// // // //           </button>
// // // //         </div>

// // // //         {/* Cart + Login */}
// // // //         <div className="flex items-center space-x-4">
// // // //           <FaShoppingCart className="text-2xl" />
// // // //           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // // //             <span>LOGIN</span>
// // // //             <FaUser />
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Bottom nav */}
// // // //       <div className="flex items-start justify-start space-x-6 text-md font-medium py-5 px-17 md:px-17 border-b-1 border-gray-200">
// // // //         <a href="#" className="hover:text-orange-500">Home</a>

// // // //         {/* Categories */}
// // // //         <div
// // // //           className="relative cursor-pointer"
// // // //           onMouseEnter={() => setShowCategories(true)}
// // // //           onMouseLeave={() => setShowCategories(false)}
// // // //         >
// // // //           <span className="flex items-center space-x-1 hover:text-orange-500">
// // // //             <span>Categories</span>
// // // //             <FaChevronDown className="text-xs" />
// // // //           </span>
// // // //           {showCategories && (
// // // //             <div className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10">
// // // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Protein</a>
// // // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Supplements</a>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Consultancy */}
// // // //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// // // //         {/* Brands */}
// // // //         <div
// // // //           className="relative cursor-pointer"
// // // //           onMouseEnter={() => setShowBrands(true)}
// // // //           onMouseLeave={() => setShowBrands(false)}
// // // //         >
// // // //           <span className="flex items-center space-x-1 hover:text-orange-500">
// // // //             <span>Brands</span>
// // // //             <FaChevronDown className="text-xs" />
// // // //           </span>
// // // //           {showBrands && (
// // // //             <div className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10">
// // // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand A</a>
// // // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand B</a>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Header;

// // // import React, { useState } from "react";
// // // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

// // // const Header = () => {
// // //   const [showCategories, setShowCategories] = useState(false);
// // //   const [showBrands, setShowBrands] = useState(false);

// // //   return (
// // //     <div className="w-full">
// // //       {/* Top nav */}
// // //       <div className="flex items-center justify-between px-4 md:px-10 py-3 border-b">
// // //         {/* Logo */}
// // //         <div className="flex items-center">
// // //           <img src="/logo-1.png" alt="Buildape" className="h-12" />
// // //         </div>

// // //         {/* Search */}
// // //         <div className="flex flex-grow max-w-xl mx-4">
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
// // //           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // //             <span>LOGIN</span>
// // //             <FaUser />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Bottom nav */}
// // //       <div className="flex items-center space-x-6 px-4 md:px-16 py-3 font-medium text-sm border-b relative">
// // //         <a href="#" className="hover:text-orange-500">Home</a>

// // //         {/* Categories mega menu */}
// // //         <div
// // //           className="relative"
// // //           onMouseEnter={() => setShowCategories(true)}
// // //           onMouseLeave={() => setShowCategories(false)}
// // //         >
// // //           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Categories</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </span>

// // //           {showCategories && (
// // //             <div className="absolute left-0 top-full w-screen max-w-6xl bg-white shadow-lg p-6 mt-2 z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // //               {/* Column 1 */}
// // //               <div>
// // //                 <h4 className="font-semibold border-b pb-1 mb-2">Popular Categories</h4>
// // //                 <ul className="space-y-1">
// // //                   <li>Mass Gainer</li>
// // //                   <li>Pre Workout</li>
// // //                   <li>Carbs</li>
// // //                   <li>Fat Burner</li>
// // //                   <li>Protein Blend</li>
// // //                   <li>Energy Drink</li>
// // //                   <li>Protein Vegan</li>
// // //                 </ul>
// // //               </div>

// // //               {/* Column 2 */}
// // //               <div>
// // //                 <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category A–D</h4>
// // //                 <ul className="space-y-1">
// // //                   <li>Amino Acids / BCAA / EAA</li>
// // //                   <li>Arginine & Glutamine</li>
// // //                   <li>Carbs</li>
// // //                   <li>Creatine</li>
// // //                 </ul>
// // //               </div>

// // //               {/* Column 3 */}
// // //               <div>
// // //                 <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category E–H</h4>
// // //                 <ul className="space-y-1">
// // //                   <li>Energy Drink</li>
// // //                   <li>Fat Burner</li>
// // //                 </ul>
// // //               </div>

// // //               {/* Column 4 */}
// // //               <div>
// // //                 <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category I–N</h4>
// // //                 <ul className="space-y-1">
// // //                   <li>Joint Health</li>
// // //                   <li>Keto</li>
// // //                   <li>Kidney & Liver</li>
// // //                   <li>Mass Gainer</li>
// // //                 </ul>
// // //               </div>

// // //               {/* Column 5 */}
// // //               <div>
// // //                 <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category O–Z</h4>
// // //                 <ul className="space-y-1">
// // //                   <li>Pre Workout</li>
// // //                   <li>Probiotic</li>
// // //                   <li>Protein Blend</li>
// // //                   <li>Protein Casein</li>
// // //                   <li>Protein Hydrolyzed</li>
// // //                   <li>Protein Isolate</li>
// // //                   <li>Protein Vegan</li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Consultancy */}
// // //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// // //         {/* Brands */}
// // //         <div
// // //           className="relative"
// // //           onMouseEnter={() => setShowBrands(true)}
// // //           onMouseLeave={() => setShowBrands(false)}
// // //         >
// // //           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Brands</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </span>
// // //           {showBrands && (
// // //             <div className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10">
// // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand A</a>
// // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand B</a>
// // //             </div>
// // //           )}
// // //         </div>

// // //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Header;

// // // import React, { useState } from "react";
// // // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

// // // const Header = () => {
// // //   const [showCategories, setShowCategories] = useState(false);
// // //   const [showBrands, setShowBrands] = useState(false);

// // //   return (
// // //     <div className="w-full relative z-50">
// // //       {/* Top Nav */}
// // //       <div className="flex items-center justify-between px-4 md:px-10 py-3 border-b">
// // //         {/* Logo */}
// // //         <div className="flex items-center">
// // //           <img src="/logo-1.png" alt="Buildape" className="h-12" />
// // //         </div>

// // //         {/* Search */}
// // //         <div className="flex flex-grow max-w-xl mx-4">
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
// // //           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// // //             <span>LOGIN</span>
// // //             <FaUser />
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Bottom nav */}
// // //       <div className="flex items-center space-x-6 px-4 md:px-16 py-3 font-medium text-sm border-b relative bg-white">
// // //         <a href="#" className="hover:text-orange-500">Home</a>

// // //         {/* Categories Mega Menu */}
// // //         <div
// // //           className="relative"
// // //           onMouseEnter={() => setShowCategories(true)}
// // //           onMouseLeave={() => setShowCategories(false)}
// // //         >
// // //           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Categories</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </span>

// // //           {showCategories && (
// // //            <div className="fixed top-[170px] left-0 right-0 w-full bg-white shadow-lg border-t z-50 m-0 px-4 ">
// // //     <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // //                 {/* Column 1 */}
// // //                 <div>
// // //                   <h4 className="font-semibold border-b pb-1 mb-2">Popular Categories</h4>
// // //                   <ul className="space-y-1">
// // //                     <li>Mass Gainer</li>
// // //                     <li>Pre Workout</li>
// // //                     <li>Carbs</li>
// // //                     <li>Fat Burner</li>
// // //                     <li>Protein Blend</li>
// // //                     <li>Energy Drink</li>
// // //                     <li>Protein Vegan</li>
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 2 */}
// // //                 <div>
// // //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category A–D</h4>
// // //                   <ul className="space-y-1">
// // //                     <li>Amino Acids / BCAA / EAA</li>
// // //                     <li>Arginine & Glutamine</li>
// // //                     <li>Carbs</li>
// // //                     <li>Creatine</li>
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 3 */}
// // //                 <div>
// // //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category E–H</h4>
// // //                   <ul className="space-y-1">
// // //                     <li>Energy Drink</li>
// // //                     <li>Fat Burner</li>
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 4 */}
// // //                 <div>
// // //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category I–N</h4>
// // //                   <ul className="space-y-1">
// // //                     <li>Joint Health</li>
// // //                     <li>Keto</li>
// // //                     <li>Kidney & Liver</li>
// // //                     <li>Mass Gainer</li>
// // //                   </ul>
// // //                 </div>

// // //                 {/* Column 5 */}
// // //                 <div>
// // //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category O–Z</h4>
// // //                   <ul className="space-y-1">
// // //                     <li>Pre Workout</li>
// // //                     <li>Probiotic</li>
// // //                     <li>Protein Blend</li>
// // //                     <li>Protein Casein</li>
// // //                     <li>Protein Hydrolyzed</li>
// // //                     <li>Protein Isolate</li>
// // //                     <li>Protein Vegan</li>
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Consultancy */}
// // //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// // //         {/* Brands dropdown */}
// // //         <div
// // //           className="relative"
// // //           onMouseEnter={() => setShowBrands(true)}
// // //           onMouseLeave={() => setShowBrands(false)}
// // //         >
// // //           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// // //             <span>Brands</span>
// // //             <FaChevronDown className="text-xs" />
// // //           </span>
// // //           {showBrands && (
// // //             <div className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10">
// // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand A</a>
// // //               <a href="#" className="block px-2 py-1 hover:bg-gray-100">Brand B</a>
// // //             </div>
// // //           )}
// // //         </div>

// // //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Header;


// // import React, { useState } from "react";
// // import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

// // const Header = () => {
// //   const [showCategories, setShowCategories] = useState(false);
// //   const [showBrands, setShowBrands] = useState(false);

// //   return (
// //     <div className="w-full relative z-50">
// //       {/* Top Nav */}
// //       <div className="flex items-center justify-between px-4 md:px-10 py-3 border-b">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <img src="/logo-1.png" alt="Buildape" className="h-12" />
// //         </div>

// //         {/* Search */}
// //         <div className="flex flex-grow max-w-xl mx-4">
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
// //           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
// //             <span>LOGIN</span>
// //             <FaUser />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Bottom nav */}
// //       <div className="flex items-center space-x-6 px-4 md:px-16 py-3 font-medium text-sm border-b relative bg-white">
// //         <a href="#" className="hover:text-orange-500">Home</a>

// //         {/* Categories Mega Menu */}
// //         <div
// //           className="relative"
// //           onMouseEnter={() => setShowCategories(true)}
// //           onMouseLeave={() => setShowCategories(false)}
// //         >
// //           <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// //             <span>Categories</span>
// //             <FaChevronDown className="text-xs" />
// //           </div>

// //           {showCategories && (
// //             <div 
// //               className="fixed top-[170px] left-0 right-0 w-full bg-white shadow-lg border-t z-50 m-0 px-4"
// //               onMouseEnter={() => setShowCategories(true)}
// //               onMouseLeave={() => setShowCategories(false)}
// //             >
// //               <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// //                 {/* Column 1 */}
// //                 <div>
// //                   <h4 className="font-semibold border-b pb-1 mb-2">Popular Categories</h4>
// //                   <ul className="space-y-1">
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Mass Gainer</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Pre Workout</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Carbs</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Fat Burner</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Blend</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Energy Drink</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Vegan</a></li>
// //                   </ul>
// //                 </div>

// //                 {/* Column 2 */}
// //                 <div>
// //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category A–D</h4>
// //                   <ul className="space-y-1">
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Amino Acids / BCAA / EAA</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Arginine & Glutamine</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Carbs</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Creatine</a></li>
// //                   </ul>
// //                 </div>

// //                 {/* Column 3 */}
// //                 <div>
// //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category E–H</h4>
// //                   <ul className="space-y-1">
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Energy Drink</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Fat Burner</a></li>
// //                   </ul>
// //                 </div>

// //                 {/* Column 4 */}
// //                 <div>
// //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category I–N</h4>
// //                   <ul className="space-y-1">
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Joint Health</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Keto</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Kidney & Liver</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Mass Gainer</a></li>
// //                   </ul>
// //                 </div>

// //                 {/* Column 5 */}
// //                 <div>
// //                   <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category O–Z</h4>
// //                   <ul className="space-y-1">
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Pre Workout</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Probiotic</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Blend</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Casein</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Hydrolyzed</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Isolate</a></li>
// //                     <li><a href="#" className="hover:text-orange-500 block py-1">Protein Vegan</a></li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Consultancy */}
// //         <a href="#" className="hover:text-orange-500">Consultancy</a>

// //         {/* Brands dropdown */}
// //         <div
// //           className="relative"
// //           onMouseEnter={() => setShowBrands(true)}
// //           onMouseLeave={() => setShowBrands(false)}
// //         >
// //           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
// //             <span>Brands</span>
// //             <FaChevronDown className="text-xs" />
// //           </span>
// //           {showBrands && (
// //             <div 
// //               className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10"
// //               onMouseEnter={() => setShowBrands(true)}
// //               onMouseLeave={() => setShowBrands(false)}
// //             >
// //               <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand A</a>
// //               <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand B</a>
// //             </div>
// //           )}
// //         </div>

// //         <a href="#" className="hover:text-orange-500">Contact Us</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

// import React, { useState } from "react";
// import { FaShoppingCart, FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

// const Header = () => {
//   const [showCategories, setShowCategories] = useState(false);
//   const [showBrands, setShowBrands] = useState(false);

//   return (
//     <div className="w-full relative z-50">
//       {/* Top Nav */}
//       <div className="flex items-center justify-between px-4 md:px-10 py-3 border-b">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src="/logo-1.png" alt="Buildape" className="h-12" />
//         </div>

//         {/* Search */}
//         <div className="flex flex-grow max-w-xl mx-4">
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
//           <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
//             <span>LOGIN</span>
//             <FaUser />
//           </button>
//         </div>
//       </div>

//       {/* Bottom nav */}
//       <div className="flex items-center space-x-6 px-4 md:px-16 py-3 font-medium text-sm border-b relative bg-white">
//         <a href="#" className="hover:text-orange-500">Home</a>

//         {/* Categories Mega Menu - Fixed Hover Issue */}
//         <div className="relative">
//           {/* This invisible connector bridges the gap between button and menu */}
//           <div 
//             className="absolute left-0 right-0 h-2 -bottom-2 z-40"
//             onMouseEnter={() => setShowCategories(true)}
//           />
          
//           <div
//             className="relative inline-block"
//             onMouseEnter={() => setShowCategories(true)}
//             onMouseLeave={() => setShowCategories(false)}
//           >
//             <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//               <span>Categories</span>
//               <FaChevronDown className="text-xs" />
//             </div>

//             {showCategories && (
//               <div 
//                 className="fixed top-[170px] left-0 right-0 w-full bg-white shadow-lg border-t z-50 m-0 px-4"
//                 onMouseEnter={() => setShowCategories(true)}
//                 onMouseLeave={() => setShowCategories(false)}
//               >
//                 <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//                   {/* Column 1 */}
//                   <div>
//                     <h4 className="font-semibold border-b pb-1 mb-2">Popular Categories</h4>
//                     <ul className="space-y-1">
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Mass Gainer</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Pre Workout</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Carbs</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Fat Burner</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Blend</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Energy Drink</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Vegan</a></li>
//                     </ul>
//                   </div>

//                   {/* Column 2 */}
//                   <div>
//                     <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category A–D</h4>
//                     <ul className="space-y-1">
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Amino Acids / BCAA / EAA</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Arginine & Glutamine</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Carbs</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Creatine</a></li>
//                     </ul>
//                   </div>

//                   {/* Column 3 */}
//                   <div>
//                     <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category E–H</h4>
//                     <ul className="space-y-1">
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Energy Drink</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Fat Burner</a></li>
//                     </ul>
//                   </div>

//                   {/* Column 4 */}
//                   <div>
//                     <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category I–N</h4>
//                     <ul className="space-y-1">
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Joint Health</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Keto</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Kidney & Liver</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Mass Gainer</a></li>
//                     </ul>
//                   </div>

//                   {/* Column 5 */}
//                   <div>
//                     <h4 className="font-semibold border-b pb-1 mb-2">Shop By Category O–Z</h4>
//                     <ul className="space-y-1">
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Pre Workout</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Probiotic</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Blend</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Casein</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Hydrolyzed</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Isolate</a></li>
//                       <li><a href="#" className="hover:text-orange-500 block py-1">Protein Vegan</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Consultancy */}
//         <a href="#" className="hover:text-orange-500">Consultancy</a>

//         {/* Brands dropdown */}
//         <div
//           className="relative"
//           onMouseEnter={() => setShowBrands(true)}
//           onMouseLeave={() => setShowBrands(false)}
//         >
//           <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//             <span>Brands</span>
//             <FaChevronDown className="text-xs" />
//           </span>
//           {showBrands && (
//             <div 
//               className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10"
//               onMouseEnter={() => setShowBrands(true)}
//               onMouseLeave={() => setShowBrands(false)}
//             >
//               <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand A</a>
//               <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand B</a>
//             </div>
//           )}
//         </div>

//         <a href="#" className="hover:text-orange-500">Contact Us</a>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaChevronDown, FaSearch, FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  return (
    <div className="w-full relative z-50 bg-white">
      {/* Top Nav */}
      <div className="flex items-center justify-between px-4 md:px-10 pt-1 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/logo-1.png" alt="Buildape" className="h-15" />
        </div>

        {/* Search */}
        <div className="flex flex-grow max-w-xl mx-4">
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
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md space-x-2">
            <span>LOGIN</span>
            <FaUser />
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
        <a href="#" className="hover:text-orange-500">Home</a>

        {/* Categories Mega Menu with Slide Effect */}
        <div className="relative">
          {/* Invisible hover bridge */}
          <div 
            className="absolute left-0 right-0 h-2 -bottom-2 z-40"
            onMouseEnter={() => setShowCategories(true)}
          />
          
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
              <span>Categories</span>
              <FaChevronDown className="text-xs" />
            </div>

            {showCategories && (
              <div 
                className="fixed top-[182px] left-0 right-0 w-full bg-white shadow-lg border-t z-50 m-0 px-4"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-semibold  pb-1 mb-2">Popular Categories</h4>
                    <ul className="space-y-1">
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Mass Gainer
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Pre Workout
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Carbs
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Fat Burner
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Blend
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Energy Drink
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Vegan
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-semibold  pb-1 mb-2">Shop By Category A–D</h4>
                    <ul className="space-y-1">
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Amino Acids / BCAA / EAA
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Arginine & Glutamine
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Carbs
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Creatine
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h4 className="font-semibold  pb-1 mb-2">Shop By Category E–H</h4>
                    <ul className="space-y-1">
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Energy Drink
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Fat Burner
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <h4 className="font-semibold  pb-1 mb-2">Shop By Category I–N</h4>
                    <ul className="space-y-1">
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Joint Health
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Keto
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Kidney & Liver
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Mass Gainer
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 5 */}
                  <div>
                    <h4 className="font-semibold  pb-1 mb-2">Shop By Category O–Z</h4>
                    <ul className="space-y-1">
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Pre Workout
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Probiotic
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Blend
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Casein
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Hydrolyzed
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Isolate
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                      <li className="group relative overflow-hidden">
                        <a href="#" className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2">
                          Protein Vegan
                          <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Consultancy */}
        <a href="#" className="hover:text-orange-500">Consultancy</a>

        {/* Brands dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowBrands(true)}
          onMouseLeave={() => setShowBrands(false)}
        >
          <span className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
            <span>Brands</span>
            <FaChevronDown className="text-xs" />
          </span>
          {showBrands && (
            <div 
              className="absolute top-full left-0 bg-white shadow-md mt-1 p-2 w-40 z-10"
              onMouseEnter={() => setShowBrands(true)}
              onMouseLeave={() => setShowBrands(false)}
            >
              <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand A</a>
              <a href="#" className="block px-2 py-1 hover:bg-gray-100 hover:text-orange-500">Brand B</a>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-orange-500">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
