

// import React, { useState, useRef } from "react";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa"; // Ensure FaArrowRight is imported

// const BottomNav = () => {
//   const [showCategories, setShowCategories] = useState(false);
//   const [showBrands, setShowBrands] = useState(false);

//   const categoriesTimeoutRef = useRef(null);
//   const brandsTimeoutRef = useRef(null);

//   const handleCategoriesMouseEnter = () => {
//     if (categoriesTimeoutRef.current) {
//       clearTimeout(categoriesTimeoutRef.current);
//     }
//     setShowCategories(true);
//   };

//   const handleCategoriesMouseLeave = () => {
//     categoriesTimeoutRef.current = setTimeout(() => {
//       setShowCategories(false);
//     }, 150); // 150ms delay
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
//     }, 150); // 150ms delay
//   };

//   // SubMenuItem for Categories (already has the slide effect)
//   const SubMenuItem = ({ label }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href="#" // Assuming href is not dynamic for categories here, or pass it if needed
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         {/* Added the FaArrowRight for the slide effect */}
//         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//       </a>
//     </li>
//   );

//   // New BrandMenuItem with the same slide effect
//   const BrandMenuItem = ({ label, href }) => (
//     <li className="group relative overflow-hidden list-none"> {/* Added group and relative for the effect */}
//       <a
//         href={href}
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         {/* Added the FaArrowRight for the slide effect */}
//         <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//       </a>
//     </li>
//   );

//   return (
//     <div className="flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
//       <a href="#" className="hover:text-orange-500">Home</a>

//       {/* Categories with Mega Menu */}
//       <div
//         onMouseEnter={handleCategoriesMouseEnter}
//         onMouseLeave={handleCategoriesMouseLeave}
//       >
//         <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//           <span>Categories</span>
//           <FaChevronDown className="text-xs" />
//         </div>

//         {showCategories && (
//           <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//             <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//               {/* Column 1 */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
//                 {["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"].map((item) => (
//                   <SubMenuItem key={item} label={item} />
//                 ))}
//               </div>

//               {/* Column 2 */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
//                 {["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"].map((item) => (
//                   <SubMenuItem key={item} label={item} />
//                 ))}
//               </div>

//               {/* Column 3 */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
//                 {["Energy Drink", "Fat Burner"].map((item) => (
//                   <SubMenuItem key={item} label={item} />
//                 ))}
//               </div>

//               {/* Column 4 */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
//                 {["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"].map((item) => (
//                   <SubMenuItem key={item} label={item} />
//                 ))}
//               </div>

//               {/* Column 5 */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
//                 {[
//                   "Pre Workout",
//                   "Probiotic",
//                   "Protein Blend",
//                   "Protein Casein",
//                   "Protein Hydrolyzed",
//                   "Protein Isolate",
//                   "Protein Vegan"
//                 ].map((item) => (
//                   <SubMenuItem key={item} label={item} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Consultancy */}
//       <a href="#" className="hover:text-orange-500">Consultancy</a>

//       ---

//       {/* Brands with Mega Menu - Now with 5 columns and hover slide effect */}
//       <div
//         onMouseEnter={handleBrandsMouseEnter}
//         onMouseLeave={handleBrandsMouseLeave}
//       >
//         <div className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer">
//           <span>Brands</span>
//           <FaChevronDown className="text-xs" />
//         </div>

//         {showBrands && (
//           <div className="absolute left-0 right-0 w-full top-full bg-white shadow-lg border-t z-50 px-4">
//             <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700"> {/* Changed to md:grid-cols-5 */}
//               {/* Column 1: #-A-B-C */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">#-A-B-C</h4>
//                 <ul className="sub_li_list">
//                   <BrandMenuItem label="Alani" href="brand/alani" />
//                   <BrandMenuItem label="AllMax" href="brand/allmax" />
//                   <BrandMenuItem label="Animal" href="brand/animal" />
//                   <BrandMenuItem label="Axe & Sledge" href="brand/axe-sledge" />
//                   <BrandMenuItem label="Believe" href="brand/believe" />
//                   <BrandMenuItem label="Bucked Up" href="brand/bucked-up" />
//                   <BrandMenuItem label="Concrete" href="brand/concrete" />
//                 </ul>
//               </div>

//               {/* Column 2: D-E-F-G-H-I-J */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">D-E-F-G-H-I-J</h4>
//                 <ul className="sub_li_list">
//                   <BrandMenuItem label="Diesel" href="brand/diesel" />
//                   <BrandMenuItem label="Dymatize" href="brand/dymatize" />
//                   <BrandMenuItem label="EHP Labs" href="brand/ehp-labs" />
//                   <BrandMenuItem label="Himalaya" href="brand/himalaya" />
//                 </ul>
//               </div>

//               {/* Column 3: K-L-M-N-O */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">K-L-M-N-O</h4>
//                 <ul className="sub_li_list">
//                   <BrandMenuItem label="Kre-Alkalyn" href="brand/kre-alkalyn" />
//                   <BrandMenuItem label="Limitless Pharma" href="brand/limitless-pharma" />
//                   <BrandMenuItem label="MuscleMeds" href="brand/musclemeds" />
//                   <BrandMenuItem label="MuscleTech" href="brand/muscletech" />
//                   <BrandMenuItem label="Nutrabolics" href="brand/nutrabolics" />
//                   <BrandMenuItem label="Optimum Nutrition" href="brand/optimum-nutrition" />
//                 </ul>
//               </div>

//               {/* Column 4: P-Q-R */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">P-Q-R</h4>
//                 <ul className="sub_li_list">
//                   <BrandMenuItem label="PVL" href="brand/pvl" />
//                   <BrandMenuItem label="Raw X CBum" href="brand/raw-x-cbum" />
//                   <BrandMenuItem label="Red Demon Nutrition" href="brand/red-demon-nutrition" />
//                   <BrandMenuItem label="RedBull" href="brand/redbull" />
//                   <BrandMenuItem label="RedCon" href="brand/redcon" />
//                   <BrandMenuItem label="Revive" href="brand/revive" />
//                   <BrandMenuItem label="Rule 1" href="brand/rule-1" />
//                 </ul>
//               </div>

//               {/* Column 5: S-T-U-V-W-X-Y-Z */}
//               <div>
//                 <h4 className="font-semibold pb-1 mb-2">S-T-U-V-W-X-Y-Z</h4>
//                 <ul className="sub_li_list">
//                   <BrandMenuItem label="Schinoussa" href="brand/schinoussa" />
//                   <BrandMenuItem label="TC Nutrition" href="brand/tc-nutrition" />
//                   <BrandMenuItem label="Whey" href="brand/whey" />
//                   <BrandMenuItem label="Xtend" href="brand/xtend" />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <a href="#" className="hover:text-orange-500">Contact Us</a>
//     </div>
//   );
// };

// // SubMenuItem for Categories (Ensuring it has the slide effect too)
// const SubMenuItem = ({ label }) => (
//   <li className="group relative overflow-hidden list-none">
//     <a
//       href="#"
//       className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//     >
//       {label}
//       <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//     </a>
//   </li>
// );

// export default BottomNav;


import React, { useState, useRef } from "react";
import { FaChevronDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const BottomNav = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categoriesTimeoutRef = useRef(null);
  const brandsTimeoutRef = useRef(null);

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

  const SubMenuItem = ({ label }) => (
    <li className="group relative overflow-hidden list-none">
      <a
        href="#"
        className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
      >
        {label}
        <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
        <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </a>
    </li>
  );

  return (
    <>
      {/* Mobile Menu Button (visible only on small screens) */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <span className="font-medium">Menu</span>
        <div className="w-6"></div> {/* Spacer for alignment */}
      </div>

      {/* Desktop Navigation (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 px-4 md:px-16 py-5 font-medium text-md border-b relative bg-white border-gray-200">
        <a href="#" className="hover:text-orange-500">Home</a>

        {/* Categories with Mega Menu */}
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
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
                  {["Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan"].map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
                  {["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"].map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
                  {["Energy Drink", "Fat Burner"].map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </div>

                {/* Column 4 */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
                  {["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"].map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </div>

                {/* Column 5 */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
                  {[
                    "Pre Workout",
                    "Probiotic",
                    "Protein Blend",
                    "Protein Casein",
                    "Protein Hydrolyzed",
                    "Protein Isolate",
                    "Protein Vegan"
                  ].map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Consultancy */}
        <a href="#" className="hover:text-orange-500">Consultancy</a>

        {/* Brands with Mega Menu */}
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
                {/* Column 1: #-A-B-C */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">#-A-B-C</h4>
                  <ul className="sub_li_list">
                    <BrandMenuItem label="Alani" href="brand/alani" />
                    <BrandMenuItem label="AllMax" href="brand/allmax" />
                    <BrandMenuItem label="Animal" href="brand/animal" />
                    <BrandMenuItem label="Axe & Sledge" href="brand/axe-sledge" />
                    <BrandMenuItem label="Believe" href="brand/believe" />
                    <BrandMenuItem label="Bucked Up" href="brand/bucked-up" />
                    <BrandMenuItem label="Concrete" href="brand/concrete" />
                  </ul>
                </div>

                {/* Column 2: D-E-F-G-H-I-J */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">D-E-F-G-H-I-J</h4>
                  <ul className="sub_li_list">
                    <BrandMenuItem label="Diesel" href="brand/diesel" />
                    <BrandMenuItem label="Dymatize" href="brand/dymatize" />
                    <BrandMenuItem label="EHP Labs" href="brand/ehp-labs" />
                    <BrandMenuItem label="Himalaya" href="brand/himalaya" />
                  </ul>
                </div>

                {/* Column 3: K-L-M-N-O */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">K-L-M-N-O</h4>
                  <ul className="sub_li_list">
                    <BrandMenuItem label="Kre-Alkalyn" href="brand/kre-alkalyn" />
                    <BrandMenuItem label="Limitless Pharma" href="brand/limitless-pharma" />
                    <BrandMenuItem label="MuscleMeds" href="brand/musclemeds" />
                    <BrandMenuItem label="MuscleTech" href="brand/muscletech" />
                    <BrandMenuItem label="Nutrabolics" href="brand/nutrabolics" />
                    <BrandMenuItem label="Optimum Nutrition" href="brand/optimum-nutrition" />
                  </ul>
                </div>

                {/* Column 4: P-Q-R */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">P-Q-R</h4>
                  <ul className="sub_li_list">
                    <BrandMenuItem label="PVL" href="brand/pvl" />
                    <BrandMenuItem label="Raw X CBum" href="brand/raw-x-cbum" />
                    <BrandMenuItem label="Red Demon Nutrition" href="brand/red-demon-nutrition" />
                    <BrandMenuItem label="RedBull" href="brand/redbull" />
                    <BrandMenuItem label="RedCon" href="brand/redcon" />
                    <BrandMenuItem label="Revive" href="brand/revive" />
                    <BrandMenuItem label="Rule 1" href="brand/rule-1" />
                  </ul>
                </div>

                {/* Column 5: S-T-U-V-W-X-Y-Z */}
                <div>
                  <h4 className="font-semibold pb-1 mb-2">S-T-U-V-W-X-Y-Z</h4>
                  <ul className="sub_li_list">
                    <BrandMenuItem label="Schinoussa" href="brand/schinoussa" />
                    <BrandMenuItem label="TC Nutrition" href="brand/tc-nutrition" />
                    <BrandMenuItem label="Whey" href="brand/whey" />
                    <BrandMenuItem label="Xtend" href="brand/xtend" />
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-orange-500">Contact Us</a>
      </div>

      {/* Mobile Menu (visible only on small screens) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 border-b border-gray-200">
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Home</a>
            
            {/* Mobile Categories */}
            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium">Categories</span>
                <FaChevronDown className="text-xs" />
              </div>
              <div className="mt-2 pl-4">
                <a href="#" className="block py-1 text-gray-600">Mass Gainer</a>
                <a href="#" className="block py-1 text-gray-600">Pre Workout</a>
                <a href="#" className="block py-1 text-gray-600">Fat Burner</a>
                <a href="#" className="block py-1 text-gray-600">View All</a>
              </div>
            </div>
            
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Consultancy</a>
            
            {/* Mobile Brands */}
            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium">Brands</span>
                <FaChevronDown className="text-xs" />
              </div>
              <div className="mt-2 pl-4">
                <a href="#" className="block py-1 text-gray-600">Popular Brands</a>
                <a href="#" className="block py-1 text-gray-600">A-Z Brands</a>
                <a href="#" className="block py-1 text-gray-600">View All</a>
              </div>
            </div>
            
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Contact Us</a>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNav;