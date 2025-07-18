// import React from "react";
// import ProductFilters from "../filter/ProductFilters";
// import { Link } from "react-router-dom";

// const CategoryPageLayout = ({ category, children, productCount }) => {
//   return (
//     // Responsive padding for different screen sizes
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
//       {/* Breadcrumb Navigation */}
//       <div className="text-sm breadcrumbs mb-4">
//         <ul className="flex items-center space-x-2">
//           <li>
//             <Link to="/" className="text-blue-600 hover:text-blue-800">
//               Home
//             </Link>
//           </li>
//           <li>
//             <span className="text-gray-400">/</span>
//           </li>
//           <li>
//             <span className="text-gray-600 capitalize">{category}</span>
//           </li>
//         </ul>
//       </div>

//       {/* Responsive heading font size */}
//       <h1 className="text-3xl sm:text-4xl font-bold mb-6 capitalize">{category}</h1>

//       {/* Main layout: Stacks on mobile, row on large screens */}
//       {/* Changed md: to lg: for a better breakpoint on tablets */}
//       <div className="flex flex-col lg:flex-row gap-8">
        
//         {/* Filters Sidebar */}
//         <aside className="w-full lg:w-1/4">
//           <ProductFilters />
//         </aside>

//         {/* Main Content Area */}
//         <main className="w-full lg:w-3/4">
          
//           {/* Header with Sort Options */}
//           <div className="mb-6">
//             <form>
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border rounded-lg bg-gray-50">
//                 {/* Product Count */}
//                 <div>
//                   <p className="text-gray-700 font-medium">
//                     Showing {productCount} products
//                   </p>
//                 </div>

//                 {/* Sort Dropdown */}
//                 <div className="flex items-center gap-2 w-full sm:w-auto">
//                   <label htmlFor="sort-select" className="text-gray-600 shrink-0">Sort by:</label>
//                   <select
//                     id="sort-select"
//                     className="form-control border rounded px-3 py-1.5 w-full" // Removed fixed width style
//                     onChange={(e) =>
//                       console.log("Sort changed:", e.target.value)
//                     }
//                   >
//                     <option value="title-ascending">Default</option>
//                     <option value="product_name_asc">Name (A - Z)</option>
//                     <option value="product_name_desc">Name (Z - A)</option>
//                     <option value="price_low_to_high">Price (Low &gt; High)</option>
//                     <option value="price_high_to_low">Price (High &gt; Low)</option>
//                   </select>
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* This is where the ProductList component will be rendered */}
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CategoryPageLayout;
import React from "react";
import ProductFilters from "../filter/ProductFilters";
import { Link } from "react-router-dom";

const CategoryPageLayout = ({ category, children, productCount }) => {
  return (
    // Responsive padding
    <div className="container mx-auto px-4 py-8">

      {/* Breadcrumbs (same for all devices) */}
      <div className="text-sm breadcrumbs mb-4">
        <ul className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          </li>
          <li><span className="text-gray-400">/</span></li>
          <li><span className="text-gray-600 capitalize">{category}</span></li>
        </ul>
      </div>

      {/* Responsive Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 capitalize">{category}</h1>

      {/* --- MAIN LAYOUT --- */}
      {/* Mobile/Tablet: Stacks vertically (flex-col) */}
      {/* Desktop (lg): Becomes a row (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* FILTERS SIDEBAR */}
        {/* Mobile/Tablet: Takes full width (w-full) */}
        {/* Desktop (lg): Takes 1/4 width (lg:w-1/4) */}
        <aside className="w-full lg:w-1/4">
          <ProductFilters />
        </aside>

        {/* MAIN CONTENT & PRODUCTS */}
        {/* Mobile/Tablet: Takes full width (w-full) */}
        {/* Desktop (lg): Takes 3/4 width (lg:w-3/4) */}
        <main className="w-full lg:w-3/4">
          
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <form>
              {/* Mobile: Stacks vertically (flex-col) */}
              {/* Small screens & up (sm): Becomes a row (sm:flex-row) */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                {/* Product Count text */}
                <p className="text-gray-700 font-medium shrink-0">
                  Showing {productCount} products
                </p>

                {/* Sort Dropdown section */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <label htmlFor="sort-select" className="text-gray-600 shrink-0">Sort by:</label>
                  <select
                    id="sort-select"
                    // REMOVED: style={{ width: "105px" }} - This was the main problem.
                    // Mobile: Takes full width (w-full) for easy tapping.
                    // Small screens & up (sm): Width becomes automatic (sm:w-auto).
                    className="form-control border rounded px-3 py-1.5 w-full sm:w-auto"
                    onChange={(e) => console.log("Sort changed:", e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="product_name_asc">Name (A - Z)</option>
                    <option value="product_name_desc">Name (Z - A)</option>
                    <option value="price_low_to_high">Price (Low &gt; High)</option>
                    <option value="price_high_to_low">Price (High &gt; Low)</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {/* Product list appears here */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default CategoryPageLayout;