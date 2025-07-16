// // import React, { useEffect, useRef, useState } from 'react';
// // import { gsap } from 'gsap';

// // const Consultancy = () => {
// //   const formRef = useRef(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);

// //     try {
// //       const formData = new FormData(e.target);
// //       const response = await fetch('', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         alert('Form submitted successfully!');
// //         formRef.current.reset();
// //       } else {
// //         throw new Error('Submission failed');
// //       }
// //     } catch (error) {
// //       console.error('Submission error:', error);
// //       alert('Error submitting form. Please try again.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   useEffect(() => {
// //     if (!formRef.current) return;

// //     gsap.to(formRef.current, {
// //       opacity: 1,
// //       y: 0,
// //       duration: 0.8,
// //       ease: 'power3.out',
// //     });
// //   }, []);

// //   return (
// //     <div className="gym_consultancy py-20 bg-white min-h-screen shadow-sm">
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-10">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-2">Fitness Assessment Form</h2>
// //           <p className="text-gray-600">Fill out the form to get your personalized fitness plan</p>
// //         </div>

// //         <div className="flex justify-center">
// //           <div className="w-full lg:w-9/12">
// //             <form
// //               ref={formRef}
// //               onSubmit={handleSubmit}
// //               method="POST"
// //               encType="multipart/form-data"
// //               className="opacity-0 translate-y-10 transition-all duration-700 bg-white p-6 sm:p-8 rounded-lg shadow-md"
// //             >
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {/* Input Fields */}
// //                 {[
// //                   ['Name', 'name', 'text'],
// //                   ['Surname', 'surname', 'text'],
// //                   ['Email', 'email', 'email'],
// //                   ['Phone Number', 'phone', 'tel'],
// //                   ['Date of Birth', 'dob', 'date'],
// //                   ['Height (cm)', 'height', 'number'],
// //                   ['Current Weight (kg)', 'current_weight', 'number'],
// //                   ['Target Weight (kg)', 'target_weight', 'number'],
// //                   ['Current Body Fat %', 'current_body_fat', 'number'],
// //                   ['Target Body Fat %', 'target_body_fat', 'number'],
// //                 ].map(([label, name, type], i) => (
// //                   <div key={i}>
// //                     <label className="block text-gray-700 mb-2 font-medium">{label}</label>
// //                     <input
// //                       type={type}
// //                       name={name}
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
// //                       required={name !== 'target_weight' && name !== 'target_body_fat'}
// //                     />
// //                   </div>
// //                 ))}

// //                 {/* Goal */}
// //                 <div>
// //                   <label className="block text-gray-700 mb-2 font-medium">Goal</label>
// //                   <select
// //                     name="goal"
// //                     required
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
// //                   >
// //                     <option value="">Select your goal</option>
// //                     <option value="Weight Loss">Weight Loss</option>
// //                     <option value="Muscle Gain">Muscle Gain</option>
// //                     <option value="General Fitness">General Fitness</option>
// //                     <option value="Competition Preparation">Competition Preparation</option>
// //                   </select>
// //                 </div>

// //                 {/* Gender */}
// //                 <div>
// //                   <label className="block text-gray-700 mb-2 font-medium">Gender</label>
// //                   <select
// //                     name="gender"
// //                     required
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
// //                   >
// //                     <option value="">Select gender</option>
// //                     <option value="Male">Male</option>
// //                     <option value="Female">Female</option>
// //                     <option value="Other">Other</option>
// //                   </select>
// //                 </div>

// //                 {/* Medical Conditions */}
// //                 <div className="">
// //                   <label className="block text-gray-700 mb-2 font-medium">
// //                     Any Medical Conditions or Injuries?
// //                   </label>
// //                   <textarea
// //                     name="medical_conditions"
// //                     rows="1"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
// //                   ></textarea>
// //                 </div>

// //                 {/* Upload Photo */}
// //                 <div className="">
// //                   <label className="block text-gray-700 mb-2 font-medium">Upload Recent Photo (Optional)</label>
// //                   <input
// //                     type="file"
// //                     name="photo"
// //                     accept="image/*"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0  transition-all"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="mt-8 text-center">
// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className={`px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${
// //                     isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
// //                   }`}
// //                 >
// //                   {isSubmitting ? (
// //                     <span className="flex items-center justify-center">
// //                       <svg
// //                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="none"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <circle
// //                           className="opacity-25"
// //                           cx="12"
// //                           cy="12"
// //                           r="10"
// //                           stroke="currentColor"
// //                           strokeWidth="4"
// //                         ></circle>
// //                         <path
// //                           className="opacity-75"
// //                           fill="currentColor"
// //                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                         ></path>
// //                       </svg>
// //                       Processing...
// //                     </span>
// //                   ) : (
// //                     'Submit Assessment'
// //                   )}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Consultancy;

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion'; // Framer Motion को इम्पोर्ट करें

// const Consultancy = () => {
//   const formRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const headingText = "Fitness Assessment Form"; // एनीमेशन के लिए टेक्स्ट

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.target);
//       const response = await fetch('', { // Add your form submission URL here
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Form submitted successfully!');
//         formRef.current.reset();
//       } else {
//         throw new Error('Submission failed');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error submitting form. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (!formRef.current) return;

//     // फॉर्म के लिए GSAP एनीमेशन
//     gsap.to(formRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: 'power3.out',
//     });
//   }, []);

//   return (
//     <div className="gym_consultancy py-20 bg-white min-h-screen shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Animated Heading Section */}
//         <div className="text-center mb-10">
//           <motion.div
//             initial={{ opacity: 0, filter: "blur(10px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1.2 }}
//             className="relative"
//           >
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {headingText.split("").map((char, i) => (
//                 <motion.span
//                   key={i}
//                   className="relative inline-block"
//                   initial={{ color: "#1f2937" }} // text-gray-800
//                   animate={{
//                     color: ["#1f2937", "#f97316", "#1f2937"] // gray-800 -> orange-500 -> gray-800
//                   }}
//                   transition={{
//                     delay: i * 0.1,
//                     duration: 1.5,
//                     repeat: Infinity,
//                     repeatDelay: headingText.length * 0.1 + 1.5
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               ))}
//             </h2>
//           </motion.div>
//           <p className="text-gray-600">Fill out the form to get your personalized fitness plan</p>
//         </div>

//         <div className="flex justify-center">
//           <div className="w-full lg:w-9/12">
//             <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               method="POST"
//               encType="multipart/form-data"
//               className="opacity-0 translate-y-10 transition-all duration-700 bg-white p-6 sm:p-8 rounded-lg shadow-md"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Input Fields */}
//                 {[
//                   ['Name', 'name', 'text'],
//                   ['Surname', 'surname', 'text'],
//                   ['Email', 'email', 'email'],
//                   ['Phone Number', 'phone', 'tel'],
//                   ['Date of Birth', 'dob', 'date'],
//                   ['Height (cm)', 'height', 'number'],
//                   ['Current Weight (kg)', 'current_weight', 'number'],
//                   ['Target Weight (kg)', 'target_weight', 'number'],
//                   ['Current Body Fat %', 'current_body_fat', 'number'],
//                   ['Target Body Fat %', 'target_body_fat', 'number'],
//                 ].map(([label, name, type], i) => (
//                   <div key={i}>
//                     <label className="block text-gray-700 mb-2 font-medium">{label}</label>
//                     <input
//                       type={type}
//                       name={name}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                       required={name !== 'target_weight' && name !== 'target_body_fat'}
//                     />
//                   </div>
//                 ))}

//                 {/* Goal */}
//                 <div>
//                   <label className="block text-gray-700 mb-2 font-medium">Goal</label>
//                   <select
//                     name="goal"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   >
//                     <option value="">Select your goal</option>
//                     <option value="Weight Loss">Weight Loss</option>
//                     <option value="Muscle Gain">Muscle Gain</option>
//                     <option value="General Fitness">General Fitness</option>
//                     <option value="Competition Preparation">Competition Preparation</option>
//                   </select>
//                 </div>

//                 {/* Gender */}
//                 <div>
//                   <label className="block text-gray-700 mb-2 font-medium">Gender</label>
//                   <select
//                     name="gender"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   >
//                     <option value="">Select gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>

//                 {/* Medical Conditions */}
//                 <div className="">
//                   <label className="block text-gray-700 mb-2 font-medium">
//                     Any Medical Conditions or Injuries?
//                   </label>
//                   <textarea
//                     name="medical_conditions"
//                     rows="1"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   ></textarea>
//                 </div>

//                 {/* Upload Photo */}
//                 <div className="">
//                   <label className="block text-gray-700 mb-2 font-medium">Upload Recent Photo (Optional)</label>
//                   <input
//                     type="file"
//                     name="photo"
//                     accept="image/*"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="mt-8 text-center">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${
//                     isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     'Submit Assessment'
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Consultancy;

// import React, { useLayoutEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { motion } from 'framer-motion';

// // ScrollTrigger की अब ज़रूरत नहीं है

// const Consultancy = () => {
//   const formRef = useRef(null);
//   const pRef = useRef(null); // पैराग्राफ के लिए ref
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const headingText = "Fitness Assessment Form";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.target);
//       // सुनिश्चित करें कि आपने यहाँ अपना API एंडपॉइंट डाला है
//       const response = await fetch('YOUR_API_ENDPOINT_HERE', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         alert('Form submitted successfully!');
//         formRef.current.reset();
//       } else {
//         throw new Error('Submission failed');
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error submitting form. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // पेज लोड होने पर एनीमेशन के लिए useLayoutEffect
//   useLayoutEffect(() => {
//     const pElement = pRef.current;
//     const formElement = formRef.current;
    
//     // 1. पैराग्राफ के लिए एनीमेशन (पेज लोड पर)
//     if (pElement) {
//         gsap.fromTo(pElement,
//             { opacity: 0, filter: "blur(10px)", y: 20 }, // शुरुआती स्थिति
//             { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 } // अंतिम स्थिति
//         );
//     }
    
//     // 2. फॉर्म के लिए एनीमेशन (पेज लोड पर)
//     if (formElement) {
//         gsap.to(formElement, {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: 'power3.out',
//             delay: 0.8 // पैराग्राफ के थोड़ा बाद शुरू होगा
//         });
//     }
//   }, []);

//   return (
//     <div className="gym_consultancy py-20 bg-white min-h-screen shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-10">
//           <motion.div
//             initial={{ opacity: 0, filter: "blur(10px)" }}
//             animate={{ opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1.2 }}
//             className="relative"
//           >
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {headingText.split("").map((char, i) => (
//                 <motion.span
//                   key={i}
//                   className="relative inline-block"
//                   initial={{ color: "#1f2937" }}
//                   animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
//                   transition={{
//                     delay: i * 0.1,
//                     duration: 1.5,
//                     repeat: Infinity,
//                     repeatDelay: headingText.length * 0.1 + 1.5
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               ))}
//             </h2>
//           </motion.div>
//           <p ref={pRef} className="text-gray-600 opacity-0">
//             Fill out the form to get your personalized fitness plan
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <div className="w-full lg:w-9/12">
//             <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               method="POST"
//               encType="multipart/form-data"
//               className="opacity-0 translate-y-10 bg-white p-6 sm:p-8 rounded-lg shadow-md"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   ['Name', 'name', 'text'],
//                   ['Surname', 'surname', 'text'],
//                   ['Email', 'email', 'email'],
//                   ['Phone Number', 'phone', 'tel'],
//                   ['Date of Birth', 'dob', 'date'],
//                   ['Height (cm)', 'height', 'number'],
//                   ['Current Weight (kg)', 'current_weight', 'number'],
//                   ['Target Weight (kg)', 'target_weight', 'number'],
//                   ['Current Body Fat %', 'current_body_fat', 'number'],
//                   ['Target Body Fat %', 'target_body_fat', 'number'],
//                 ].map(([label, name, type], i) => (
//                   <div key={i}>
//                     <label className="block text-gray-700 mb-2 font-medium">{label}</label>
//                     <input
//                       type={type}
//                       name={name}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                       required={name !== 'target_weight' && name !== 'target_body_fat'}
//                     />
//                   </div>
//                 ))}
//                 <div>
//                   <label className="block text-gray-700 mb-2 font-medium">Goal</label>
//                   <select
//                     name="goal"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   >
//                     <option value="">Select your goal</option>
//                     <option value="Weight Loss">Weight Loss</option>
//                     <option value="Muscle Gain">Muscle Gain</option>
//                     <option value="General Fitness">General Fitness</option>
//                     <option value="Competition Preparation">Competition Preparation</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 mb-2 font-medium">Gender</label>
//                   <select
//                     name="gender"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   >
//                     <option value="">Select gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//                 <div className="md:col-span-1">
//                   <label className="block text-gray-700 mb-2 font-medium">
//                     Any Medical Conditions or Injuries?
//                   </label>
//                   <textarea
//                     name="medical_conditions"
//                     rows="1"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   ></textarea>
//                 </div>
//                 <div className="md:col-span-1">
//                   <label className="block text-gray-700 mb-2 font-medium">Upload Recent Photo (Optional)</label>
//                   <input
//                     type="file"
//                     name="photo"
//                     accept="image/*"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="mt-8 text-center">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`px-8 py-3 bg-orange-500 cursor-pointer text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${
//                     isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isSubmitting ? 'Processing...' : 'Submit Assessment'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Consultancy;

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

// --- Custom Dropdown Component (इसी फ़ाइल में बनाया गया) ---
const CustomSelect = ({ options, value, onChange, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // बाहर क्लिक करने पर dropdown बंद करने के लिए
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
      {/* यह input फॉर्म सबमिट करने के लिए ज़रूरी है */}
      <input type="hidden" name={name} value={value} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all flex justify-between items-center"
      >
        <span className="truncate">{selectedLabel}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-4 py-2 cursor-pointer hover:bg-orange-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


// --- आपका मुख्य Consultancy Component ---
const Consultancy = () => {
  const formRef = useRef(null);
  const pRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom dropdowns के लिए state
  const [goal, setGoal] = useState('');
  const [gender, setGender] = useState('');

  const headingText = "Fitness Assessment Form";

  // Dropdown के options
  const goalOptions = [
    { value: "Weight Loss", label: "Weight Loss" },
    { value: "Muscle Gain", label: "Muscle Gain" },
    { value: "General Fitness", label: "General Fitness" },
    { value: "Competition Preparation", label: "Competition Preparation" },
  ];
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(formRef.current);
      // सुनिश्चित करें कि आपने यहाँ अपना API एंडपॉइंट डाला है
      const response = await fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        formRef.current.reset();
        setGoal(''); // State को भी रीसेट करें
        setGender(''); // State को भी रीसेट करें
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useLayoutEffect(() => {
    const pElement = pRef.current;
    const formElement = formRef.current;
    if (pElement) {
        gsap.fromTo(pElement,
            { opacity: 0, filter: "blur(10px)", y: 20 },
            { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
        );
    }
    if (formElement) {
        gsap.to(formElement, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        });
    }
  }, []);

  return (
    <div className="gym_consultancy py-20 bg-white min-h-screen shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {headingText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="relative inline-block"
                  initial={{ color: "#1f2937" }}
                  animate={{ color: ["#1f2937", "#f97316", "#1f2937"] }}
                  transition={{
                    delay: i * 0.1,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: headingText.length * 0.1 + 1.5
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </motion.div>
          <p ref={pRef} className="text-gray-600 opacity-0">
            Fill out the form to get your personalized fitness plan
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
              className="opacity-0 translate-y-10 bg-white p-6 sm:p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  ['Name', 'name', 'text'], ['Surname', 'surname', 'text'],
                  ['Email', 'email', 'email'], ['Phone Number', 'phone', 'tel'],
                  ['Date of Birth', 'dob', 'date'], ['Height (cm)', 'height', 'number'],
                  ['Current Weight (kg)', 'current_weight', 'number'], ['Target Weight (kg)', 'target_weight', 'number'],
                  ['Current Body Fat %', 'current_body_fat', 'number'], ['Target Body Fat %', 'target_body_fat', 'number'],
                ].map(([label, name, type], i) => (
                  <div key={i}>
                    <label className="block text-gray-700 mb-2 font-medium">{label}</label>
                    <input type={type} name={name} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"
                      required={name !== 'target_weight' && name !== 'target_body_fat'}
                    />
                  </div>
                ))}

                {/* --- Goal Dropdown (Updated) --- */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Goal</label>
                  <CustomSelect
                    name="goal"
                    options={goalOptions}
                    value={goal}
                    onChange={setGoal}
                    placeholder="Select your goal"
                  />
                </div>

                {/* --- Gender Dropdown (Updated) --- */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Gender</label>
                  <CustomSelect
                    name="gender"
                    options={genderOptions}
                    value={gender}
                    onChange={setGender}
                    placeholder="Select gender"
                  />
                </div>
                
                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium">Any Medical Conditions or Injuries?</label>
                  <textarea name="medical_conditions" rows="1" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all"></textarea>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-gray-700 mb-2 font-medium">Upload Recent Photo (Optional)</label>
                  <input type="file" name="photo" accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 transition-all" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <button type="submit" disabled={isSubmitting}
                  className={`px-8 py-3 bg-orange-500 cursor-pointer text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Submit Assessment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;