// import React from "react";
// import { FaInstagram, FaTiktok } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#000000] text-gray-300 py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Subscription Form */}
//         {/* <div className="flex justify-center">
//           <div className="w-full max-w-2xl mb-12">
//             <div className="gshop_subscribe_form text-center">
//               <h4 className="text-white gshop-title text-2xl font-semibold mb-6">
//                 Subscribe for Other Information.
//               </h4>
//               <form 
//                 className="mt-5 flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden subscribe_form"
//                 action="controller.php" 
//                 method="post"
//               >
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control flex-grow px-4 py-3 focus:outline-none"
//                   placeholder="Enter Email Address"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   name="btn_email_submit"
//                   className="btn btn-primary flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 w-full sm:w-auto transition"
//                 >
//                   Subscribe Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div> */}

//         {/* Gradient Spacer */}
//         <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          
//           {/* Category */}
//           <div className="px-4">
//             <h5 className="text-white text-lg mb-4 font-semibold">Category</h5>
//             <ul className="space-y-2">
//               <li><a href="category/protein-vegan" className="hover:text-white transition">Protein Vegan</a></li>
//               <li><a href="category/protein-hydrolized" className="hover:text-white transition">Protein Hydrolized</a></li>
//               <li><a href="category/joint-health" className="hover:text-white transition">Joint Health</a></li>
//               <li><a href="category/fat-burner" className="hover:text-white transition">Fat Burner</a></li>
//               <li><a href="category/carbs" className="hover:text-white transition">Carbs</a></li>
//               <li><a href="category/creatine" className="hover:text-white transition">Creatine</a></li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="px-4">
//             <h5 className="text-white text-lg mb-4 font-semibold">Quick Links</h5>
//             <ul className="space-y-2">
//               <li><a href="" className="hover:text-white transition">About Us</a></li>
//               <li><a href="" className="hover:text-white transition">Consultancy</a></li>
//               <li><a href="" className="hover:text-white transition">Brands</a></li>
//               <li><a href="" className="hover:text-white transition">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Policy */}
//           <div className="px-4">
//             <h5 className="text-white text-lg mb-4 font-semibold">Policy</h5>
//             <ul className="space-y-2">
//               <li><a href="" className="hover:text-white transition">Privacy Policy</a></li>
//               <li><a href="" className="hover:text-white transition">Return Policy</a></li>
//               <li><a href="" className="hover:text-white transition">Shipping Policy</a></li>
//               <li><a href="" className="hover:text-white transition">Discount</a></li>
//             </ul>
//           </div>

//           {/* Address & Social Icons */}
//           <div className="px-4">
//             <h5 className="text-white text-lg mb-4 font-semibold">Address</h5>
//             <p className="mb-4 hover:text-white transition">80 MARITIME BLVD UNIT 44, ON L6S 0E7</p>
//             <h5 className="text-orange-500 text-lg mb-4 font-semibold">Follow Us</h5>
//             <div className="flex justify-center sm:justify-start space-x-6">
//               <a href="https://www.instagram.com/buildape/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="https://www.tiktok.com/@buildape?_t=8fgf9C3Fx4f&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
//                 <FaTiktok size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaChevronDown } from "react-icons/fa";

// --- Accordion Helper Component (इसी फ़ाइल में) ---
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // yahaan se py-12 class hata di gayi hai
    <div className="border-b border-gray-700 md:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
      >
        <h5 className="text-white text-lg font-semibold">{title}</h5>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-300 md:hidden ${
            isOpen ? "transform rotate-180" : ""
          }`}
          size={16}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:max-h-full ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pt-2 pb-4 md:pt-2 md:pb-0">{children}</div>
      </div>
    </div>
  );
};

// --- Aapka Main Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-[#000000] text-gray-300 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 text-left">
          <AccordionItem title="Category">
            <ul className="space-y-2">
              <li>
                <a href="category/protein-vegan" className="hover:text-white transition">
                  Protein Vegan
                </a>
              </li>
              <li>
                <a href="category/protein-hydrolized" className="hover:text-white transition">
                  Protein Hydrolized
                </a>
              </li>
              <li>
                <a href="category/joint-health" className="hover:text-white transition">
                  Joint Health
                </a>
              </li>
              <li>
                <a href="category/fat-burner" className="hover:text-white transition">
                  Fat Burner
                </a>
              </li>
              <li>
                <a href="category/carbs" className="hover:text-white transition">
                  Carbs
                </a>
              </li>
              <li>
                <a href="category/creatine" className="hover:text-white transition">
                  Creatine
                </a>
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Quick Links">
            <ul className="space-y-2">
              <li><a href="" className="hover:text-white transition">About Us</a></li>
              <li><a href="" className="hover:text-white transition">Consultancy</a></li>
              <li><a href="" className="hover:text-white transition">Brands</a></li>
              <li><a href="" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Policy">
            <ul className="space-y-1">
              <li><a href="" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="" className="hover:text-white transition">Return Policy</a></li>
              <li><a href="" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="" className="hover:text-white transition">Discount</a></li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Contact & Follow">
            <div className="space-y-4">
              <div>
                <h6 className="text-white font-semibold">Address</h6>
                <p className="text-gray-300 transition hover:text-white">
                  80 MARITIME BLVD UNIT 44, ON L6S 0E7
                </p>
              </div>
              <div>
                <h6 className="text-orange-500 font-semibold">Follow Us</h6>
                <div className="flex items-center space-x-6 pt-2">
                  <a href="https://www.instagram.com/buildape/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://www.tiktok.com/@buildape?_t=8fgf9C3Fx4f&_r=1" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    <FaTiktok size={24} />
                  </a>
                </div>
              </div>
            </div>
          </AccordionItem>
        </div>
      </div>
    </footer>
  );
};

export default Footer;