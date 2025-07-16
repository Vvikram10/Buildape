// // import React, { useRef, useLayoutEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // ScrollTrigger को रजिस्टर करना
// // gsap.registerPlugin(ScrollTrigger);

// // const TrendingProduct = () => {
// //   // पूरे हेडर सेक्शन को टारगेट करने के लिए ref
// //   const headerRef = useRef(null); 
// //   const containerRef = useRef(null);
// //   const [isAtStart, setIsAtStart] = useState(true);
// //   const [isAtEnd, setIsAtEnd] = useState(false);

// //   const products = [
// //     { id: "chicago", name: "Batch 27", variant: "Chicago", price: "$100", image: "/product-1.png" },
// //     { id: "game-royal", name: "Diesel", variant: "Game Royal", price: "$100", image: "/product-2.png" },
// //     { id: "pine-green", name: "IsoGold", variant: "Pine Green", price: "$100", image: "/product-3.png" },
// //     { id: "court-purple", name: "RYS", variant: "Court Purple", price: "$100", image: "/product-4.png" },
// //     { id: "another-product", name: "New Whey", variant: "Vanilla", price: "$100", image: "/product-1.png" },
// //   ];

// //   // ## सही Scroll-Triggered Animation ##
// //   useLayoutEffect(() => {
// //     const headerElement = headerRef.current;
    
// //     // सही एलिमेंट्स को उनके क्लास से सेलेक्ट करना
// //     const headingContainer = headerElement.querySelector(".heading-container");
// //     const paragraph = headerElement.querySelector(".subheading");

// //     // अगर एलिमेंट्स मौजूद नहीं हैं तो आगे न बढ़ें
// //     if (!headingContainer || !paragraph) return;

// //     // GSAP टाइमलाइन बनाना
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: headerElement,
// //         start: "top 85%", // जब हेडर का टॉप 85% व्यू में आए
// //         scrub: 1,       // स्क्रॉल के साथ स्मूथ एनीमेशन
// //       },
// //     });

// //     // 1. हेडिंग के कंटेनर को एनिमेट करना
// //     tl.fromTo(
// //       headingContainer,
// //       { opacity: 0, filter: "blur(5px)", y: 20 },
// //       { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" }
// //     );

// //     // 2. पैराग्राफ को एनिमेट करना
// //     tl.fromTo(
// //       paragraph,
// //       { opacity: 0, filter: "blur(5px)", y: 20 },
// //       { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" },
// //       "-=0.8" // पिछले एनीमेशन के साथ थोड़ा ओवरलैप
// //     );

// //     // कंपोनेंट हटने पर टाइमलाइन को खत्म करना
// //     return () => {
// //       if (tl) tl.kill();
// //     };
// //   }, []);

// //   const handleScroll = () => {
// //     if (containerRef.current) {
// //       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
// //       setIsAtStart(scrollLeft === 0);
// //       setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 2);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-black flex flex-col relative">
      
// //       {/* ## JSX में सही रेफ और क्लास लगाई गई है ## */}
// //       <header ref={headerRef} className="text-center py-12 px-4 flex flex-col items-center">
        
// //         {/* इस div को GSAP टारगेट करेगा, इसलिए इसमें class और opacity-0 लगाया गया है */}
// //         <div className="heading-container relative inline-block opacity-0">
// //           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
// //             {"Trending Now".split("").map((char, i) => (
// //               <motion.span
// //                 key={i}
// //                 className="relative inline-block"
// //                 initial={{ color: "#000000" }}
// //                 animate={{ color: ["#000000", "#f97316", "#000000"] }}
// //                 transition={{
// //                   delay: i * 0.1,
// //                   duration: 1.5,
// //                   repeat: Infinity,
// //                   repeatDelay: "Trending Now".length * 0.1 + 1,
// //                 }}
// //               >
// //                 {char === " " ? "\u00A0" : char}
// //               </motion.span>
// //             ))}
// //           </h2>
// //         </div>

// //         {/* इस p को GSAP टारगेट करेगा */}
// //         <p className="subheading text-lg text-gray-600 py-1 opacity-0">
// //           Discover this week's hottest picks
// //         </p>
// //       </header>

// //       <main className="flex-1 w-full px-4 pb-12 relative">
// //         {!isAtStart && (
// //           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
// //         )}
// //         {!isAtEnd && (
// //           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
// //         )}

// //         <div
// //           ref={containerRef}
// //           onScroll={handleScroll}
// //           className="products-container w-full overflow-x-auto py-4 snap-x snap-mandatory"
// //         >
// //           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
// //             {products.map((product) => (
// //               <div
// //                 key={product.id}
// //                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
// //               >
// //                 <Link
// //                   to={`/products/${product.id}`}
// //                   className="absolute inset-0 z-30"
// //                 ></Link>

// //                 <div className="relative h-full flex items-center justify-center p-6">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10"
// //                   />
// //                 </div>

// //                 <div className="product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-40 border-t border-gray-200 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
// //                   <h3 className="text-xl font-bold">{product.name}</h3>
// //                   <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-orange-500 font-bold">
// //                       {product.price}
// //                     </span>
// //                     <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-colors relative">
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx global>{`
// //         .products-container {
// //           overflow-x: auto !important;
// //           scrollbar-width: none;
// //           -ms-overflow-style: none;
// //         }
// //         .products-container::-webkit-scrollbar {
// //           display: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default TrendingProduct;

// import React, { useRef, useLayoutEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // ScrollTrigger को रजिस्टर करना
// gsap.registerPlugin(ScrollTrigger);

// const TrendingProduct = () => {
//   const headerRef = useRef(null); 
//   const containerRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(true);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   // 💡 1. एक्टिव कार्ड को ट्रैक करने के लिए स्टेट
//   const [activeCardId, setActiveCardId] = useState(null);

//   const products = [
//     { id: "chicago", name: "Batch 27", variant: "Chicago", price: "$100", image: "/product-1.png" },
//     { id: "game-royal", name: "Diesel", variant: "Game Royal", price: "$100", image: "/product-2.png" },
//     { id: "pine-green", name: "IsoGold", variant: "Pine Green", price: "$100", image: "/product-3.png" },
//     { id: "court-purple", name: "RYS", variant: "Court Purple", price: "$100", image: "/product-4.png" },
//     { id: "another-product", name: "New Whey", variant: "Vanilla", price: "$100", image: "/product-1.png" },
//   ];

//   useLayoutEffect(() => {
//     // आपका GSAP कोड यहाँ वैसे ही रहेगा
//     const headerElement = headerRef.current;
//     if (!headerElement) return;
//     const headingContainer = headerElement.querySelector(".heading-container");
//     const paragraph = headerElement.querySelector(".subheading");
//     if (!headingContainer || !paragraph) return;
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: headerElement,
//         start: "top 85%",
//         scrub: 1,
//       },
//     });
//     tl.fromTo(headingContainer, { opacity: 0, filter: "blur(5px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" });
//     tl.fromTo(paragraph, { opacity: 0, filter: "blur(5px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" }, "-=0.8");
//     return () => { if (tl) tl.kill(); };
//   }, []);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 2);
//     }
//   };

//   // 💡 2. कार्ड पर क्लिक को हैंडल करने वाला फंक्शन
//   const handleCardClick = (id) => {
//     // अगर पहले से ही एक्टिव कार्ड पर क्लिक हुआ है, तो उसे बंद कर दो (null सेट करके)
//     // वरना नए कार्ड को एक्टिव कर दो
//     setActiveCardId(prevId => (prevId === id ? null : id));
//   };


//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col relative">
//       {/* आपका Header JSX यहाँ वैसे ही रहेगा */}
//       <header ref={headerRef} className="text-center py-12 px-4 flex flex-col items-center">
//         <div className="heading-container relative inline-block opacity-0">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//             {"Trending Now".split("").map((char, i) => (
//               <motion.span key={i} className="relative inline-block" initial={{ color: "#000000" }} animate={{ color: ["#000000", "#f97316", "#000000"] }} transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity, repeatDelay: "Trending Now".length * 0.1 + 1, }}>
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </h2>
//         </div>
//         <p className="subheading text-lg text-gray-600 py-1 opacity-0">Discover this week's hottest picks</p>
//       </header>
      
//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {!isAtStart && <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />}
//         {!isAtEnd && <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />}
//         <div ref={containerRef} onScroll={handleScroll} className="products-container w-full overflow-x-auto py-4 snap-x snap-mandatory">
//           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
//             {products.map((product) => {
//               // 💡 3. चेक करें कि यह कार्ड एक्टिव है या नहीं
//               const isActive = activeCardId === product.id;

//               return (
//                 <div
//                   key={product.id}
//                   // 💡 4. onClick इवेंट जोड़ा गया
//                   onClick={() => handleCardClick(product.id)}
//                   // 💡 5. `group` क्लास अभी भी डेस्कटॉप होवर के लिए रहेगी
//                   className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50 cursor-pointer"
//                 >
//                   <Link
//                     to={`/products/${product.id}`}
//                     // `onClick` को रोकने के लिए ताकि div का क्लिक काम करे
//                     onClick={(e) => e.preventDefault()}
//                     className="absolute inset-0 z-30"
//                   ></Link>

//                   <div className="relative h-full flex items-center justify-center p-6">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       // 💡 6. इमेज का स्केल अब `isActive` पर निर्भर करेगा
//                       className={`h-48 object-contain transform transition-transform duration-500 z-10 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
//                     />
//                   </div>
                  
//                   <div
//                     // 💡 7. इन्फो पैनल की पोजीशन अब `isActive` पर निर्भर करेगी
//                     className={`product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-40 border-t border-gray-200 transition-all duration-300 transform group-hover:translate-y-0 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}
//                   >
//                     <h3 className="text-xl font-bold">{product.name}</h3>
//                     <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-orange-500 font-bold">{product.price}</span>
//                       <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-colors relative z-50" onClick={(e) => { e.stopPropagation(); /* Link और Card के click को रोकेगा */ window.location.href = `/products/${product.id}`;}}>
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </main>

//       <style jsx global>{`
//         .products-container { overflow-x: auto !important; scrollbar-width: none; -ms-overflow-style: none; }
//         .products-container::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;

import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 💡 1. स्क्रीन साइज पता करने के लिए कस्टम हुक
// यह हुक बताएगा कि स्क्रीन की चौड़ाई 768px से कम है या नहीं।
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

const TrendingProduct = () => {
  const isMobile = useIsMobile(); // हुक को कॉल करें
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  const navigate = useNavigate();
  const clickTimeoutRef = useRef(null); 

  const products = [
    { id: "chicago", name: "Batch 27", variant: "Chicago", price: "$100", image: "/product-1.png" },
    { id: "game-royal", name: "Diesel", variant: "Game Royal", price: "$100", image: "/product-2.png" },
    { id: "pine-green", name: "IsoGold", variant: "Pine Green", price: "$100", image: "/product-3.png" },
    { id: "court-purple", name: "RYS", variant: "Court Purple", price: "$100", image: "/product-4.png" },
    { id: "another-product", name: "New Whey", variant: "Vanilla", price: "$100", image: "/product-1.png" },
  ];
  
  // GSAP Scroll-Triggered Animation
  useLayoutEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const headingContainer = headerElement.querySelector(".heading-container");
    const paragraph = headerElement.querySelector(".subheading");

    if (!headingContainer || !paragraph) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerElement,
        start: "top 85%",
        scrub: 1,
      },
    });

    tl.fromTo(
      headingContainer,
      { opacity: 0, filter: "blur(5px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      paragraph,
      { opacity: 0, filter: "blur(5px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 2);
    }
  };

  // 💡 2. यह क्लिक हैंडलर अब सिर्फ मोबाइल के लिए है
  const handleMobileCardClick = (productId) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      navigate(`/products/${productId}`);
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        setActiveCardId(prevId => (prevId === productId ? null : productId));
        clickTimeoutRef.current = null;
      }, 300);
    }
  };
  
  // कंपोनेंट अनमाउंट होने पर टाइमर को साफ़ करें
  useLayoutEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col relative">
      <header ref={headerRef} className="text-center py-12 px-4 flex flex-col items-center">
        <div className="heading-container relative inline-block opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {"Trending Now".split("").map((char, i) => (
              <motion.span
                key={i}
                className="relative inline-block"
                initial={{ color: "#000000" }}
                animate={{ color: ["#000000", "#f97316", "#000000"] }}
                transition={{
                  delay: i * 0.1,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: "Trending Now".length * 0.1 + 1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </div>
        <p className="subheading text-lg text-gray-600 py-1 opacity-0">
          Discover this week's hottest picks
        </p>
      </header>
      
      <main className="flex-1 w-full px-4 md:px-8 pb-12 relative">
        {!isAtStart && <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />}
        {!isAtEnd && <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />}
        <div ref={containerRef} onScroll={handleScroll} className="products-container w-full overflow-x-auto py-4 snap-x snap-mandatory">
          {/* 💡 3. मोबाइल और डेस्कटॉप के लिए अलग-अलग क्लास */}
          <div className={`flex space-x-6 w-max ${isMobile ? 'mx-auto pl-[calc(50vw-9rem)] pr-[calc(50vw-9rem)]' : ''}`}>
            {products.map((product) => {
              const isActive = activeCardId === product.id;
              return (
                <div
                  key={product.id}
                  // 💡 4. मोबाइल और डेस्कटॉप के लिए अलग-अलग क्लिक लॉजिक
                  onClick={() => {
                    if (isMobile) {
                      handleMobileCardClick(product.id);
                    } else {
                      // डेस्कटॉप पर सिंगल क्लिक में नेविगेट करें
                      navigate(`/products/${product.id}`);
                    }
                  }}
                  className={`product-card relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50 cursor-pointer ${
                    isMobile ? 'snap-center' : 'snap-start' // मोबाइल पर सेंटर, डेस्कटॉप पर स्टार्ट
                  }`}
                >
                  <Link
                    to={`/products/${product.id}`}
                    // सिर्फ मोबाइल पर डिफ़ॉल्ट क्लिक को रोकें
                    onClick={(e) => isMobile && e.preventDefault()}
                    className="absolute inset-0 z-30"
                  ></Link>

                  <div className="relative h-full flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      // hover इफ़ेक्ट डेस्कटॉप पर काम करेगा, isActive मोबाइल पर
                      className={`h-48 object-contain transform transition-transform duration-500 z-10 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
                    />
                  </div>
                  
                  <div
                    // hover इफ़ेक्ट डेस्कटॉप पर काम करेगा, isActive मोबाइल पर
                    className={`product-info-panel absolute bottom-0 left-0 right-0 p-6 bg-white z-40 border-t border-gray-200 transition-all duration-300 transform group-hover:translate-y-0 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}
                  >
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 font-bold">{product.price}</span>
                      <button className="px-4 py-2 bg-orange-500 hover:bg-gray-800 text-white rounded-full transition-colors relative z-50" onClick={(e) => { e.stopPropagation(); navigate(`/products/${product.id}`); }}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <style jsx global>{`
        .products-container { scrollbar-width: none; -ms-overflow-style: none; }
        .products-container::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default TrendingProduct;
