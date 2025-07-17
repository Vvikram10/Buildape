// import React, { useState } from 'react';

// const Checkout = () => {
//   // State for form inputs. In a real application, you might use a library like Formik or React Hook Form.
//   const [formData, setFormData] = useState({
//     email: '',
//     country: 'Canada',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     province: 'Ontario',
//     postalCode: '',
//     cardNumber: '',
//     nameOnCard: '',
//     expirationDate: '',
//     securityCode: '',
//   });

//   // Handler for form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
  
//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you would process the payment and order here.
//     console.log('Order submitted:', formData);
//     alert('Order placed successfully! (See console for details)');
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-8 lg:py-16">
//         <div className="flex flex-col-reverse lg:flex-row gap-12">
          
//           {/* Left Side: Form */}
//           <div className="lg:w-7/12">
//             <form onSubmit={handleSubmit}>
//               {/* Contact Information */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Email"
//                   className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
//                   required
//                 />
//               </div>

//               {/* Shipping Address */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <select 
//                     name="country" 
//                     value={formData.country}
//                     onChange={handleInputChange}
//                     className="w-full p-3 border rounded-md bg-white"
//                   >
//                     <option>Canada</option>
//                     <option>United States</option>
//                   </select>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" name="firstName" placeholder="First name" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="lastName" placeholder="Last name" className="w-full p-3 border rounded-md" required />
//                   </div>
//                   <input type="text" name="address" placeholder="Address" className="w-full p-3 border rounded-md" required />
//                   <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-md" required />
//                     <select name="province" className="w-full p-3 border rounded-md bg-white">
//                       <option>Ontario</option>
//                       <option>Quebec</option>
//                       <option>British Columbia</option>
//                       <option>Alberta</option>
//                     </select>
//                     <input type="text" name="postalCode" placeholder="Postal code" className="w-full p-3 border rounded-md" required />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Section */}
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>
//                 <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
//                 <div className="bg-white border rounded-lg p-4">
//                     <div className="grid grid-cols-1 gap-4">
//                          <input 
//                             type="text" 
//                             name="cardNumber"
//                             placeholder="Card number" 
//                             className="w-full p-3 border rounded-md" 
//                             required 
//                          />
//                          <input 
//                             type="text" 
//                             name="nameOnCard"
//                             placeholder="Name on card" 
//                             className="w-full p-3 border rounded-md" 
//                             required 
//                          />
//                         <div className="grid grid-cols-2 gap-4">
//                             <input 
//                                 type="text" 
//                                 name="expirationDate"
//                                 placeholder="Expiration date (MM / YY)" 
//                                 className="w-full p-3 border rounded-md" 
//                                 required 
//                             />
//                             <input 
//                                 type="text" 
//                                 name="securityCode"
//                                 placeholder="Security code" 
//                                 className="w-full p-3 border rounded-md" 
//                                 required 
//                             />
//                         </div>
//                     </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button 
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300"
//                 >
//                   Place Order
//                 </button>
//               </div>

//             </form>
//           </div>

//           {/* Right Side: Order Summary */}
//           <div className="lg:w-5/12">
//             <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
              
//               {/* Product Item */}
//               <div className="flex justify-between items-center py-4 border-b">
//                 <div className="flex items-center gap-4">
//                   <div className="relative">
//                     <img 
//                       src="/product-1.png" 
//                       alt="Product" 
//                       className="w-16 h-16 object-cover rounded-md border"
//                       onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }}
//                     />
//                     <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
//                   </div>
//                   <div>
//                     <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
//                     <p className="text-xs text-gray-500">Flavor: Orange</p>
//                   </div>
//                 </div>
//                 <span className="font-semibold">$0.00</span>
//               </div>

//               {/* Totals */}
//               <div className="space-y-3 pt-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal:</span>
//                   <span className="font-medium">$0.00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping:</span>
//                   <span className="font-medium">$9.99</span>
//                 </div>
//                  <div className="flex justify-between">
//                   <span className="text-gray-600">Tax:</span>
//                   <span className="font-medium">$0.00</span>
//                 </div>
//               </div>
              
//               <div className="border-t my-4"></div>
              
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-lg">Total</h3>
//                 <span className="text-xl font-bold text-orange-500">$9.99</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect, useRef } from 'react';

// // --- Custom Dropdown Component (उसी फ़ाइल में) ---
// // यह कंपोनेंट ड्रॉपडाउन की स्टाइलिंग और व्यवहार को नियंत्रित करता है।
// const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSelect = (optionValue) => {
//     onChange(optionValue);
//     setIsOpen(false);
//   };

//   // बाहर क्लिक करने पर ड्रॉपडाउन बंद करने के लिए
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

//   return (
//     <div className="relative" ref={dropdownRef}>
//       {/* यह छिपा हुआ इनपुट फॉर्म सबमिशन के लिए आवश्यक है */}
//       <input type="hidden" name={name} value={value} />
      
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-3 text-left bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent flex justify-between items-center"
//       >
//         <span className="truncate">{selectedLabel}</span>
//         <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option.value)}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


// // --- आपका मुख्य Checkout Component ---
// const Checkout = () => {
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     postalCode: '',
//     cardNumber: '',
//     nameOnCard: '',
//     expirationDate: '',
//     securityCode: '',
//   });

//   // Custom dropdowns के लिए अलग से State
//   const [country, setCountry] = useState('Canada');
//   const [province, setProvince] = useState('Ontario');

//   // Dropdown के लिए Options
//   const countryOptions = [
//     { value: 'Canada', label: 'Canada' },
//     { value: 'United States', label: 'United States' },
//   ];

//   const provinceOptions = [
//     { value: 'Ontario', label: 'Ontario' },
//     { value: 'Quebec', label: 'Quebec' },
//     { value: 'British Columbia', label: 'British Columbia' },
//     { value: 'Alberta', label: 'Alberta' },
//     { value: 'Manitoba', label: 'Manitoba' },
//     { value: 'Saskatchewan', label: 'Saskatchewan' },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const completeFormData = {
//         ...formData,
//         country,
//         province,
//     };
//     console.log('Order submitted:', completeFormData);
//     // Custom modal/toast notification का उपयोग करें
//     // alert('Order placed successfully! (See console for details)');
//     formRef.current.reset();
//     setCountry('Canada');
//     setProvince('Ontario');
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4 py-8 lg:py-16">
//         <div className="flex flex-col-reverse lg:flex-row gap-12">
          
//           {/* Left Side: Form */}
//           <div className="lg:w-7/12">
//             <form onSubmit={handleSubmit} ref={formRef}>
//               {/* Contact Information */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//                 <input type="email" name="email" onChange={handleInputChange} placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent" required />
//               </div>

//               {/* Shipping Address */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <CustomSelect name="country" options={countryOptions} value={country} onChange={setCountry} />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" name="firstName" onChange={handleInputChange} placeholder="First name" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last name" className="w-full p-3 border rounded-md" required />
//                   </div>
//                   <input type="text" name="address" onChange={handleInputChange} placeholder="Address" className="w-full p-3 border rounded-md" required />
//                   <input type="text" name="apartment" onChange={handleInputChange} placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <input type="text" name="city" onChange={handleInputChange} placeholder="City" className="w-full p-3 border rounded-md" required />
//                     <CustomSelect name="province" options={provinceOptions} value={province} onChange={setProvince} placeholder="Province" />
//                     <input type="text" name="postalCode" onChange={handleInputChange} placeholder="Postal code" className="w-full p-3 border rounded-md" required />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Section */}
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>
//                 <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
//                 <div className="bg-white border rounded-lg p-4">
//                   <div className="grid grid-cols-1 gap-4">
//                     <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="Card number" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="nameOnCard" onChange={handleInputChange} placeholder="Name on card" className="w-full p-3 border rounded-md" required />
//                     <div className="grid grid-cols-2 gap-4">
//                       <input type="text" name="expirationDate" onChange={handleInputChange} placeholder="Expiration date (MM / YY)" className="w-full p-3 border rounded-md" required />
//                       <input type="text" name="securityCode" onChange={handleInputChange} placeholder="Security code" className="w-full p-3 border rounded-md" required />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300">
//                   Place Order
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Side: Order Summary */}
//           <div className="lg:w-5/12">
//             <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
//               <div className="flex justify-between items-center py-4 border-b">
//                 <div className="flex items-center gap-4">
//                   <div className="relative">
//                     <img src="/product-1.png" alt="Product" className="w-16 h-16 object-cover rounded-md border" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }} />
//                     <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
//                   </div>
//                   <div>
//                     <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
//                     <p className="text-xs text-gray-500">Flavor: Orange</p>
//                   </div>
//                 </div>
//                 <span className="font-semibold">$0.00</span>
//               </div>
//               <div className="space-y-3 pt-4">
//                 <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span><span className="font-medium">$0.00</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-medium">$9.99</span></div>
//                 <div className="flex justify-between"><span className="text-gray-600">Tax:</span><span className="font-medium">$0.00</span></div>
//               </div>
//               <div className="border-t my-4"></div>
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-lg">Total</h3>
//                 <span className="text-xl font-bold text-orange-500">$9.99</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';

// // --- Custom Dropdown Component (No changes needed here) ---
// const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSelect = (optionValue) => {
//     onChange(optionValue);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <input type="hidden" name={name} value={value} />
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-3 text-left bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent flex justify-between items-center"
//       >
//         <span className="truncate">{selectedLabel}</span>
//         <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option.value)}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


// // --- Your Main Checkout Component with Animations ---
// const Checkout = () => {
//   const formRef = useRef(null);
//   // NEW: Refs for animations
//   const titleRef = useRef(null);
//   const formSideRef = useRef(null);
//   const summarySideRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     postalCode: '',
//     cardNumber: '',
//     nameOnCard: '',
//     expirationDate: '',
//     securityCode: '',
//   });

//   const [country, setCountry] = useState('Canada');
//   const [province, setProvince] = useState('Ontario');

//   const headingText = "Complete Your Order"; // NEW: Text for animated heading

//   const countryOptions = [
//     { value: 'Canada', label: 'Canada' },
//     { value: 'United States', label: 'United States' },
//   ];

//   const provinceOptions = [
//     { value: 'Ontario', label: 'Ontario' },
//     { value: 'Quebec', label: 'Quebec' },
//     // ... other provinces
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const completeFormData = {
//       ...formData,
//       country,
//       province,
//     };
//     console.log('Order submitted:', completeFormData);
//     formRef.current.reset();
//     setCountry('Canada');
//     setProvince('Ontario');
//   };

//   // NEW: GSAP Animation Effect
//   useLayoutEffect(() => {
//     const tl = gsap.timeline({ delay: 0.2 });
    
//     // Animate the main heading and subheading
//     tl.fromTo(titleRef.current, 
//       { opacity: 0, y: 20, filter: "blur(5px)" },
//       { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
//     );
    
//     // Animate the form side
//     tl.fromTo(formSideRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//       "-=0.5" // Start this animation slightly before the previous one finishes
//     );

//     // Animate the summary side
//     tl.fromTo(summarySideRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//       "-=0.8" // Stagger the animation
//     );

//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="container mx-auto px-4 py-8 lg:py-16">
        
//         {/* NEW: Animated Heading Section */}
//         <div ref={titleRef} className="text-center mb-12 opacity-0">
//           <motion.h1
//             initial={{ opacity: 0, filter: "blur(10px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1 }}
//             className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
//           >
//             {headingText.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="relative inline-block"
//                 initial={{ color: "#1f2937" }}
//                 animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
//                 transition={{
//                   delay: i * 0.08 + 0.5,
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatDelay: headingText.length * 0.1,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>
//           <p className="text-gray-600">Securely enter your details below.</p>
//         </div>

//         <div className="flex flex-col-reverse lg:flex-row gap-12">
          
//           {/* Left Side: Form - ADDED ref and initial opacity */}
//           <div ref={formSideRef} className="lg:w-7/12 opacity-0">
//             <form onSubmit={handleSubmit} ref={formRef}>
//               {/* Contact Information */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//                 <input type="email" name="email" onChange={handleInputChange} placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent" required />
//               </div>

//               {/* Shipping Address */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <CustomSelect name="country" options={countryOptions} value={country} onChange={setCountry} />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" name="firstName" onChange={handleInputChange} placeholder="First name" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last name" className="w-full p-3 border rounded-md" required />
//                   </div>
//                   <input type="text" name="address" onChange={handleInputChange} placeholder="Address" className="w-full p-3 border rounded-md" required />
//                   <input type="text" name="apartment" onChange={handleInputChange} placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <input type="text" name="city" onChange={handleInputChange} placeholder="City" className="w-full p-3 border rounded-md" required />
//                     <CustomSelect name="province" options={provinceOptions} value={province} onChange={setProvince} placeholder="Province" />
//                     <input type="text" name="postalCode" onChange={handleInputChange} placeholder="Postal code" className="w-full p-3 border rounded-md" required />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Section */}
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>
//                 <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
//                 <div className="bg-white border rounded-lg p-4">
//                   <div className="grid grid-cols-1 gap-4">
//                     <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="Card number" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="nameOnCard" onChange={handleInputChange} placeholder="Name on card" className="w-full p-3 border rounded-md" required />
//                     <div className="grid grid-cols-2 gap-4">
//                       <input type="text" name="expirationDate" onChange={handleInputChange} placeholder="Expiration date (MM / YY)" className="w-full p-3 border rounded-md" required />
//                       <input type="text" name="securityCode" onChange={handleInputChange} placeholder="Security code" className="w-full p-3 border rounded-md" required />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button type="submit" className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300">
//                   Place Order
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Side: Order Summary - ADDED ref and initial opacity */}
//           <div ref={summarySideRef} className="lg:w-5/12 opacity-0">
//             <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
//               {/* ... Rest of your order summary JSX ... */}
//                <div className="flex justify-between items-center py-4 border-b">
//                  <div className="flex items-center gap-4">
//                    <div className="relative">
//                      <img src="/product-1.png" alt="Product" className="w-16 h-16 object-cover rounded-md border" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }} />
//                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
//                    </div>
//                    <div>
//                      <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
//                      <p className="text-xs text-gray-500">Flavor: Orange</p>
//                    </div>
//                  </div>
//                  <span className="font-semibold">$0.00</span>
//                </div>
//                <div className="space-y-3 pt-4">
//                  <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span><span className="font-medium">$0.00</span></div>
//                  <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-medium">$9.99</span></div>
//                  <div className="flex justify-between"><span className="text-gray-600">Tax:</span><span className="font-medium">$0.00</span></div>
//                </div>
//                <div className="border-t my-4"></div>
//                <div className="flex justify-between items-center">
//                  <h3 className="font-bold text-lg">Total</h3>
//                  <span className="text-xl font-bold text-orange-500">$9.99</span>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';

// // --- Custom Dropdown Component (No changes needed here) ---
// const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleSelect = (optionValue) => {
//     onChange(optionValue);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <input type="hidden" name={name} value={value} />
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full p-3 text-left bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent flex justify-between items-center"
//       >
//         <span className="truncate">{selectedLabel}</span>
//         <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
//           {options.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleSelect(option.value)}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


// // --- Your Main Checkout Component with Animations ---
// const Checkout = () => {
//   const formRef = useRef(null);
//   const titleRef = useRef(null);
//   const formSideRef = useRef(null);
//   const summarySideRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     postalCode: '',
//     cardNumber: '',
//     nameOnCard: '',
//     expirationDate: '',
//     securityCode: '',
//   });

//   const [country, setCountry] = useState('Canada');
//   const [province, setProvince] = useState('Ontario');

//   const headingText = "Complete Your Order";

//   const countryOptions = [
//     { value: 'Canada', label: 'Canada' },
//     { value: 'United States', label: 'United States' },
//   ];

//   const provinceOptions = [
//     { value: 'Ontario', label: 'Ontario' },
//     { value: 'Quebec', label: 'Quebec' },
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const completeFormData = {
//       ...formData,
//       country,
//       province,
//     };
//     console.log('Order submitted:', completeFormData);
//     formRef.current.reset();
//     setCountry('Canada');
//     setProvince('Ontario');
//   };

//   useLayoutEffect(() => {
//     const tl = gsap.timeline({ delay: 0.2 });
    
//     tl.fromTo(titleRef.current, 
//       { opacity: 0, y: 20, filter: "blur(5px)" },
//       { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
//     );
    
//     tl.fromTo(formSideRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//       "-=0.5"
//     );

//     tl.fromTo(summarySideRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//       "-=0.8"
//     );

//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       {/* CHANGE: Replaced 'container' with 'max-w-7xl' to limit width on large screens */}
//       <div className="max-w-7xl mx-auto px-4 py-8 lg:py-16">
        
//         {/* Animated Heading Section */}
//         <div ref={titleRef} className="text-center mb-12 opacity-0">
//           <motion.h1
//             initial={{ opacity: 0, filter: "blur(10px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1 }}
//             className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
//           >
//             {headingText.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="relative inline-block"
//                 initial={{ color: "#1f2937" }}
//                 animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
//                 transition={{
//                   delay: i * 0.08 + 0.5,
//                   duration: 1.5,
//                   repeat: Infinity,
//                   repeatDelay: headingText.length * 0.1,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>
//           <p className="text-gray-600">Securely enter your details below.</p>
//         </div>

//         <div className="flex flex-col-reverse lg:flex-row gap-12">
          
//           {/* Left Side: Form */}
//           <div ref={formSideRef} className="lg:w-5/12 opacity-0">
//             <form onSubmit={handleSubmit} ref={formRef}>
//               {/* Contact Information */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
//                 <input type="email" name="email" onChange={handleInputChange} placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent" required />
//               </div>

//               {/* Shipping Address */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   <CustomSelect name="country" options={countryOptions} value={country} onChange={setCountry} />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input type="text" name="firstName" onChange={handleInputChange} placeholder="First name" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last name" className="w-full p-3 border rounded-md" required />
//                   </div>
//                   <input type="text" name="address" onChange={handleInputChange} placeholder="Address" className="w-full p-3 border rounded-md" required />
//                   <input type="text" name="apartment" onChange={handleInputChange} placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <input type="text" name="city" onChange={handleInputChange} placeholder="City" className="w-full p-3 border rounded-md" required />
//                     <CustomSelect name="province" options={provinceOptions} value={province} onChange={setProvince} placeholder="Province" />
//                     <input type="text" name="postalCode" onChange={handleInputChange} placeholder="Postal code" className="w-full p-3 border rounded-md" required />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Section */}
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>
//                 <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
//                 <div className="bg-white border rounded-lg p-4">
//                   <div className="grid grid-cols-1 gap-4">
//                     <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="Card number" className="w-full p-3 border rounded-md" required />
//                     <input type="text" name="nameOnCard" onChange={handleInputChange} placeholder="Name on card" className="w-full p-3 border rounded-md" required />
//                     <div className="grid grid-cols-2 gap-4">
//                       <input type="text" name="expirationDate" onChange={handleInputChange} placeholder="Expiration date (MM / YY)" className="w-full p-3 border rounded-md" required />
//                       <input type="text" name="securityCode" onChange={handleInputChange} placeholder="Security code" className="w-full p-3 border rounded-md" required />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <button type="submit" className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300">
//                   Place Order
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Side: Order Summary */}
//           <div ref={summarySideRef} className="lg:w-5/12 opacity-0">
//             <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
//                <div className="flex justify-between items-center py-4 border-b">
//                  <div className="flex items-center gap-4">
//                    <div className="relative">
//                      <img src="/product-1.png" alt="Product" className="w-16 h-16 object-cover rounded-md border" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }} />
//                      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
//                    </div>
//                    <div>
//                      <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
//                      <p className="text-xs text-gray-500">Flavor: Orange</p>
//                    </div>
//                  </div>
//                  <span className="font-semibold">$0.00</span>
//                </div>
//                <div className="space-y-3 pt-4">
//                  <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span><span className="font-medium">$0.00</span></div>
//                  <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-medium">$9.99</span></div>
//                  <div className="flex justify-between"><span className="text-gray-600">Tax:</span><span className="font-medium">$0.00</span></div>
//                </div>
//                <div className="border-t my-4"></div>
//                <div className="flex justify-between items-center">
//                  <h3 className="font-bold text-lg">Total</h3>
//                  <span className="text-xl font-bold text-orange-500">$9.99</span>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Custom Dropdown Component (No changes needed here) ---
const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

  return (
    <div className="relative" ref={dropdownRef}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-left bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent flex justify-between items-center"
      >
        <span className="truncate">{selectedLabel}</span>
        <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-52 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


// --- Main Checkout Component ---
const Checkout = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const formSideRef = useRef(null);
  const summarySideRef = useRef(null);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const [country, setCountry] = useState('Canada');
  const [province, setProvince] = useState('Ontario');

  const headingText = "Complete Your Order";

  const countryOptions = [
    { value: 'Canada', label: 'Canada' },
    { value: 'United States', label: 'United States' },
  ];

  const provinceOptions = [
    { value: 'Ontario', label: 'Ontario' },
    { value: 'Quebec', label: 'Quebec' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const completeFormData = {
      ...formData,
      country,
      province,
    };
    console.log('Order submitted:', completeFormData);
    formRef.current.reset();
    setCountry('Canada');
    setProvince('Ontario');
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 20, filter: "blur(5px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
    );
    
    tl.fromTo(formSideRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(summarySideRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 py-8 lg:py-16">
        
        {/* Animated Heading Section */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
          >
            {headingText.split("").map((char, i) => (
              <motion.span
                key={i}
                className="relative inline-block"
                initial={{ color: "#1f2937" }}
                animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
                transition={{
                  delay: i * 0.08 + 0.5,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: headingText.length * 0.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-gray-600">Securely enter your details below.</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12 w-full px-4 lg:px-0">
          
          {/* Left Side: Form */}
          <div ref={formSideRef} className="lg:w-1/2 w-full opacity-0">
            <form onSubmit={handleSubmit} ref={formRef}>
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <input type="email" name="email" onChange={handleInputChange} placeholder="Email" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent" required />
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4">
                  <CustomSelect name="country" options={countryOptions} value={country} onChange={setCountry} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="firstName" onChange={handleInputChange} placeholder="First name" className="w-full p-3 border rounded-md" required />
                    <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last name" className="w-full p-3 border rounded-md" required />
                  </div>
                  <input type="text" name="address" onChange={handleInputChange} placeholder="Address" className="w-full p-3 border rounded-md" required />
                  <input type="text" name="apartment" onChange={handleInputChange} placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" name="city" onChange={handleInputChange} placeholder="City" className="w-full p-3 border rounded-md" required />
                    <CustomSelect name="province" options={provinceOptions} value={province} onChange={setProvince} placeholder="Province" />
                    <input type="text" name="postalCode" onChange={handleInputChange} placeholder="Postal code" className="w-full p-3 border rounded-md" required />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
                <div className="bg-white border rounded-lg p-4">
                  <div className="grid grid-cols-1 gap-4">
                    <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="Card number" className="w-full p-3 border rounded-md" required />
                    <input type="text" name="nameOnCard" onChange={handleInputChange} placeholder="Name on card" className="w-full p-3 border rounded-md" required />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="expirationDate" onChange={handleInputChange} placeholder="Expiration date (MM / YY)" className="w-full p-3 border rounded-md" required />
                      <input type="text" name="securityCode" onChange={handleInputChange} placeholder="Security code" className="w-full p-3 border rounded-md" required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
               <Link to='/order-manage'>
                <button type="submit" className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300">
                  Place Order
                </button>
               </Link>
              </div>
            </form>
          </div>

          {/* Right Side: Order Summary */}
          <div ref={summarySideRef} className="lg:w-1/2 w-full opacity-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
               <div className="flex justify-between items-center py-4 border-b">
                 <div className="flex items-center gap-4">
                   <div className="relative">
                     <img src="/product-1.png" alt="Product" className="w-16 h-16 object-cover rounded-md border" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }} />
                     <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
                   </div>
                   <div>
                     <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
                     <p className="text-xs text-gray-500">Flavor: Orange</p>
                   </div>
                 </div>
                 <span className="font-semibold">$0.00</span>
               </div>
               <div className="space-y-3 pt-4">
                 <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span><span className="font-medium">$0.00</span></div>
                 <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-medium">$9.99</span></div>
                 <div className="flex justify-between"><span className="text-gray-600">Tax:</span><span className="font-medium">$0.00</span></div>
               </div>
               <div className="border-t my-4"></div>
               <div className="flex justify-between items-center">
                 <h3 className="font-bold text-lg">Total</h3>
                 <span className="text-xl font-bold text-orange-500">$9.99</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;


