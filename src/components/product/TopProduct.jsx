// // // // // // // import React, { useEffect, useRef } from "react";
// // // // // // // import { gsap } from "gsap";
// // // // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // // // import { motion } from "framer-motion";

// // // // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // // // const TopProduct = () => {
// // // // // // //   const products = [
// // // // // // //     {
// // // // // // //       id: "chicago",
// // // // // // //       name: "Air Jordan 1",
// // // // // // //       variant: "Chicago",
// // // // // // //       description:
// // // // // // //         "One of the most iconic sneakers in history, originally released in 1985. This was Michael Jordan's first signature shoe, and he wore it in the Chicago Bulls' classic colors.",
// // // // // // //       price: "$100",
// // // // // // //       image: "/product-1.png", // Replace with your image path
// // // // // // //       bgColor: "#c81e2b", // Red
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "game-royal",
// // // // // // //       name: "Air Jordan 1",
// // // // // // //       variant: "Game Royal",
// // // // // // //       description:
// // // // // // //         "A bold remix of a classic, the Game Royal colorway brings vibrant blue hues to the surface. A perfect pair for both on and off the court.",
// // // // // // //       price: "$100",
// // // // // // //       image: "/product-2.png", // Replace with your image path
// // // // // // //       bgColor: "#0f4c81", // Blue
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "pine-green",
// // // // // // //       name: "Air Jordan 1",
// // // // // // //       variant: "Pine Green",
// // // // // // //       description:
// // // // // // //         "The Pine Green 2.0 delivers a bold statement with rich green overlays and a stark black accent. It's a must-have for those who prefer an earthy, yet striking look.",
// // // // // // //       price: "$100",
// // // // // // //       image: "/product-6.png", // Replace with your image path
// // // // // // //       bgColor: "#16643b", // Green
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "court-purple",
// // // // // // //       name: "Air Jordan 1",
// // // // // // //       variant: "Court Purple",
// // // // // // //       description:
// // // // // // //         "The Court Purple edition fuses regal tones with classic Jordan heritage for a truly kingly look. A standout choice for any sneaker enthusiast.",
// // // // // // //       price: "$100",
// // // // // // //       image: "/product-4.png", // Replace with your image path
// // // // // // //       bgColor: "#4a237d", // Purple
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // // // //     let activeSection = null;

// // // // // // //     const getResponsiveSettings = () => {
// // // // // // //       const isMobile = window.innerWidth < 768;
// // // // // // //       const totalSections = shoeSections.length;
// // // // // // //       const expandedWidth = isMobile ? "100%" : "70%";
// // // // // // //       const collapsedWidth = isMobile
// // // // // // //         ? "0%"
// // // // // // //         : `${(100 - 70) / (totalSections - 1)}%`;

// // // // // // //       return {
// // // // // // //         isMobile,
// // // // // // //         expanded: { width: expandedWidth },
// // // // // // //         collapsed: { width: "25%" },
// // // // // // //         otherCollapsed: { width: collapsedWidth },
// // // // // // //         image: {
// // // // // // //           collapsedScale: 0.6,
// // // // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // // // //         },
// // // // // // //       };
// // // // // // //     };

// // // // // // //     const setInitialStates = () => {
// // // // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // // // //       gsap.set(shoeSections, {
// // // // // // //         width: collapsed.width,
// // // // // // //         height: "100%",
// // // // // // //       });
// // // // // // //       gsap.set(".shoe-content", { opacity: 0, y: 30, visibility: "hidden" });
// // // // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // // // //       gsap.set(".shoe-image", {
// // // // // // //         rotation: -25,
// // // // // // //         scale: image.collapsedScale,
// // // // // // //       });
// // // // // // //     };

// // // // // // //     const handleCardClick = (e) => {
// // // // // // //       const section = e.currentTarget;
// // // // // // //       const { isMobile, expanded, collapsed, otherCollapsed, image } =
// // // // // // //         getResponsiveSettings();
// // // // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // // // //       // Deactivate previously active section
// // // // // // //       if (activeSection && activeSection !== section) {
// // // // // // //         activeSection.classList.remove("active");
// // // // // // //         const tl_out = gsap.timeline();
// // // // // // //         tl_out
// // // // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // // // //             opacity: 0,
// // // // // // //             y: 30,
// // // // // // //             visibility: "hidden",
// // // // // // //             duration: 0.3,
// // // // // // //           })
// // // // // // //           .to(
// // // // // // //             activeSection.querySelectorAll(".nike-text"),
// // // // // // //             { opacity: 0, y: 20, duration: 0.3 },
// // // // // // //             "<"
// // // // // // //           )
// // // // // // //           .to(
// // // // // // //             activeSection.querySelector(".shoe-image"),
// // // // // // //             {
// // // // // // //               rotation: -25,
// // // // // // //               scale: image.collapsedScale,
// // // // // // //               duration: 0.5,
// // // // // // //               ease: "power2.inOut",
// // // // // // //             },
// // // // // // //             "<"
// // // // // // //           );
// // // // // // //       }

// // // // // // //       // If clicking the active card, collapse all to initial state
// // // // // // //       if (isAlreadyActive) {
// // // // // // //         activeSection.classList.remove("active");
// // // // // // //         activeSection = null;
// // // // // // //         const tl = gsap.timeline();
// // // // // // //         tl.to(shoeSections, {
// // // // // // //           width: collapsed.width,
// // // // // // //           duration: 0.5,
// // // // // // //           ease: "power2.inOut",
// // // // // // //         })
// // // // // // //           .to(
// // // // // // //             section.querySelector(".shoe-content"),
// // // // // // //             {
// // // // // // //               opacity: 0,
// // // // // // //               y: 30,
// // // // // // //               visibility: "hidden",
// // // // // // //               duration: 0.3,
// // // // // // //             },
// // // // // // //             "<"
// // // // // // //           )
// // // // // // //           .to(
// // // // // // //             section.querySelectorAll(".nike-text"),
// // // // // // //             { opacity: 0, y: 20, duration: 0.3 },
// // // // // // //             "<"
// // // // // // //           )
// // // // // // //           .to(
// // // // // // //             section.querySelector(".shoe-image"),
// // // // // // //             {
// // // // // // //               rotation: -25,
// // // // // // //               scale: image.collapsedScale,
// // // // // // //               duration: 0.5,
// // // // // // //               ease: "power2.inOut",
// // // // // // //             },
// // // // // // //             "<"
// // // // // // //           );
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       // Activate the new section
// // // // // // //       activeSection = section;
// // // // // // //       section.classList.add("active");

// // // // // // //       const masterTL = gsap.timeline();

// // // // // // //       // Animate widths
// // // // // // //       masterTL.to(
// // // // // // //         shoeSections,
// // // // // // //         {
// // // // // // //           width: (i, target) =>
// // // // // // //             target === section ? expanded.width : otherCollapsed.width,
// // // // // // //           duration: 0.7,
// // // // // // //           ease: "power2.inOut",
// // // // // // //         },
// // // // // // //         0
// // // // // // //       );

// // // // // // //       // Animate active card's content IN
// // // // // // //       masterTL
// // // // // // //         .to(
// // // // // // //           section.querySelector(".shoe-image"),
// // // // // // //           {
// // // // // // //             rotation: 0,
// // // // // // //             scale: image.expandedScale,
// // // // // // //             duration: 0.7,
// // // // // // //             ease: "power2.inOut",
// // // // // // //           },
// // // // // // //           0
// // // // // // //         )
// // // // // // //         .to(
// // // // // // //           section.querySelectorAll(".nike-text"),
// // // // // // //           {
// // // // // // //             opacity: 1,
// // // // // // //             y: 0,
// // // // // // //             duration: 0.4,
// // // // // // //             stagger: 0.05,
// // // // // // //           },
// // // // // // //           0.2
// // // // // // //         )
// // // // // // //         .to(
// // // // // // //           section.querySelector(".shoe-content"),
// // // // // // //           {
// // // // // // //             opacity: 1,
// // // // // // //             y: 0,
// // // // // // //             visibility: "visible",
// // // // // // //             duration: 0.4,
// // // // // // //           },
// // // // // // //           "<0.2"
// // // // // // //         );
// // // // // // //     };

// // // // // // //     setInitialStates();
// // // // // // //     shoeSections.forEach((section) =>
// // // // // // //       section.addEventListener("click", handleCardClick)
// // // // // // //     );

// // // // // // //     const handleResize = () => {
// // // // // // //       setInitialStates();
// // // // // // //       if (activeSection) {
// // // // // // //         activeSection.classList.remove("active");
// // // // // // //         activeSection = null;
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener("resize", handleResize);

// // // // // // //     return () => {
// // // // // // //       shoeSections.forEach((section) =>
// // // // // // //         section.removeEventListener("click", handleCardClick)
// // // // // // //       );
// // // // // // //       window.removeEventListener("resize", handleResize);
// // // // // // //     };
// // // // // // //   }, [products]);

// // // // // // //   return (
// // // // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // // // //       <main className="flex w-full h-full">
// // // // // // //         {products.map((product) => (
// // // // // // //           <div
// // // // // // //             key={product.id}
// // // // // // //             className="shoe-section relative overflow-hidden flex flex-col justify-center items-center cursor-pointer p-4"
// // // // // // //             data-shoe={product.id}
// // // // // // //             style={{ backgroundColor: product.bgColor }}
// // // // // // //           >
// // // // // // //             {/* Background "NIKE" Text */}
// // // // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // // // //               {[...Array(3)].map((_, idx) => (
// // // // // // //                 <div key={idx} className="nike-text">
// // // // // // //                   <span
// // // // // // //                     className={`text-7xl md:text-9xl font-extrabold tracking-wider text-white/20 ${
// // // // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // // // //                     }`}
// // // // // // //                     style={
// // // // // // //                       idx !== 1
// // // // // // //                         ? {
// // // // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // // // //                             color: "transparent",
// // // // // // //                           }
// // // // // // //                         : {}
// // // // // // //                     }
// // // // // // //                   >
// // // // // // //                     NIKE
// // // // // // //                   </span>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* Main Shoe Image */}
// // // // // // //             <div className="relative z-20 w-full h-1/2 flex items-center justify-center">
// // // // // // //               <img
// // // // // // //                 src={product.image}
// // // // // // //                 alt={product.name}
// // // // // // //                 className="shoe-image w-auto h-full max-w-none object-contain drop-shadow-2xl"
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             {/* Product Details */}
// // // // // // //             <div className="shoe-content z-30 w-full text-center text-white flex-grow flex flex-col justify-end items-center p-2 md:p-4">
// // // // // // //               <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
// // // // // // //                 {product.name}
// // // // // // //               </h3>
// // // // // // //               <h4 className="text-xl md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // // // //                 {product.variant}
// // // // // // //               </h4>
// // // // // // //               <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // // // //                 {product.description}
// // // // // // //               </p>
// // // // // // //               <div className="price-display px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // // // //                 {product.price}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TopProduct;

// // // // // // import React, { useEffect, useRef } from "react";
// // // // // // import { gsap } from "gsap";
// // // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // // import { motion } from "framer-motion";

// // // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // // const TopProduct = () => {
// // // // // //   const products = [
// // // // // //     {
// // // // // //       id: "chicago",
// // // // // //       name: "Air Jordan 1",
// // // // // //       variant: "Chicago",
// // // // // //       description:
// // // // // //         "One of the most iconic sneakers in history, originally released in 1985. This was Michael Jordan's first signature shoe, and he wore it in the Chicago Bulls' classic colors.",
// // // // // //       price: "$100",
// // // // // //       image: "/product-1.png", // Replace with your image path
// // // // // //       bgColor: "#c81e2b", // Red
// // // // // //     },
// // // // // //     {
// // // // // //       id: "game-royal",
// // // // // //       name: "Air Jordan 1",
// // // // // //       variant: "Game Royal",
// // // // // //       description:
// // // // // //         "A bold remix of a classic, the Game Royal colorway brings vibrant blue hues to the surface. A perfect pair for both on and off the court.",
// // // // // //       price: "$100",
// // // // // //       image: "/product-2.png", // Replace with your image path
// // // // // //       bgColor: "#0f4c81", // Blue
// // // // // //     },
// // // // // //     {
// // // // // //       id: "pine-green",
// // // // // //       name: "Air Jordan 1",
// // // // // //       variant: "Pine Green",
// // // // // //       description:
// // // // // //         "The Pine Green 2.0 delivers a bold statement with rich green overlays and a stark black accent. It's a must-have for those who prefer an earthy, yet striking look.",
// // // // // //       price: "$100",
// // // // // //       image: "/product-6.png", // Replace with your image path
// // // // // //       bgColor: "#16643b", // Green
// // // // // //     },
// // // // // //     {
// // // // // //       id: "court-purple",
// // // // // //       name: "Air Jordan 1",
// // // // // //       variant: "Court Purple",
// // // // // //       description:
// // // // // //         "The Court Purple edition fuses regal tones with classic Jordan heritage for a truly kingly look. A standout choice for any sneaker enthusiast.",
// // // // // //       price: "$100",
// // // // // //       image: "/product-4.png", // Replace with your image path
// // // // // //       bgColor: "#4a237d", // Purple
// // // // // //     },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // // //     let activeSection = null;

// // // // // //     const getResponsiveSettings = () => {
// // // // // //       const isMobile = window.innerWidth < 768;
// // // // // //       const totalSections = shoeSections.length;
// // // // // //       const expandedWidth = isMobile ? "100%" : "70%";
// // // // // //       const collapsedWidth = isMobile
// // // // // //         ? "0%"
// // // // // //         : `${(100 - 70) / (totalSections - 1)}%`;

// // // // // //       return {
// // // // // //         isMobile,
// // // // // //         expanded: { width: expandedWidth },
// // // // // //         collapsed: { width: "25%" },
// // // // // //         otherCollapsed: { width: collapsedWidth },
// // // // // //         image: {
// // // // // //           collapsedScale: 0.6,
// // // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // // //         },
// // // // // //       };
// // // // // //     };

// // // // // //     const setInitialStates = () => {
// // // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // // //       gsap.set(shoeSections, {
// // // // // //         width: collapsed.width,
// // // // // //         height: "100%",
// // // // // //       });
// // // // // //       gsap.set(".shoe-content", { opacity: 0, y: 30, visibility: "hidden" });
// // // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // // //       gsap.set(".shoe-image", {
// // // // // //         rotation: 25, // Changed from -25 to 25
// // // // // //         scale: image.collapsedScale,
// // // // // //       });
// // // // // //     };

// // // // // //     const handleCardClick = (e) => {
// // // // // //       const section = e.currentTarget;
// // // // // //       const { isMobile, expanded, collapsed, otherCollapsed, image } =
// // // // // //         getResponsiveSettings();
// // // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // // //       // Deactivate previously active section
// // // // // //       if (activeSection && activeSection !== section) {
// // // // // //         activeSection.classList.remove("active");
// // // // // //         const tl_out = gsap.timeline();
// // // // // //         tl_out
// // // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // // //             opacity: 0,
// // // // // //             y: 30,
// // // // // //             visibility: "hidden",
// // // // // //             duration: 0.3,
// // // // // //           })
// // // // // //           .to(
// // // // // //             activeSection.querySelectorAll(".nike-text"),
// // // // // //             { opacity: 0, y: 20, duration: 0.3 },
// // // // // //             "<"
// // // // // //           )
// // // // // //           .to(
// // // // // //             activeSection.querySelector(".shoe-image"),
// // // // // //             {
// // // // // //               rotation: 25, // Changed from -25 to 25
// // // // // //               scale: image.collapsedScale,
// // // // // //               duration: 0.5,
// // // // // //               ease: "power2.inOut",
// // // // // //             },
// // // // // //             "<"
// // // // // //           );
// // // // // //       }

// // // // // //       // If clicking the active card, collapse all to initial state
// // // // // //       if (isAlreadyActive) {
// // // // // //         activeSection.classList.remove("active");
// // // // // //         activeSection = null;
// // // // // //         const tl = gsap.timeline();
// // // // // //         tl.to(shoeSections, {
// // // // // //           width: collapsed.width,
// // // // // //           duration: 0.5,
// // // // // //           ease: "power2.inOut",
// // // // // //         })
// // // // // //           .to(
// // // // // //             section.querySelector(".shoe-content"),
// // // // // //             {
// // // // // //               opacity: 0,
// // // // // //               y: 30,
// // // // // //               visibility: "hidden",
// // // // // //               duration: 0.3,
// // // // // //             },
// // // // // //             "<"
// // // // // //           )
// // // // // //           .to(
// // // // // //             section.querySelectorAll(".nike-text"),
// // // // // //             { opacity: 0, y: 20, duration: 0.3 },
// // // // // //             "<"
// // // // // //           )
// // // // // //           .to(
// // // // // //             section.querySelector(".shoe-image"),
// // // // // //             {
// // // // // //               rotation: 25, // Changed from -25 to 25
// // // // // //               scale: image.collapsedScale,
// // // // // //               duration: 0.5,
// // // // // //               ease: "power2.inOut",
// // // // // //             },
// // // // // //             "<"
// // // // // //           );
// // // // // //         return;
// // // // // //       }

// // // // // //       // Activate the new section
// // // // // //       activeSection = section;
// // // // // //       section.classList.add("active");

// // // // // //       const masterTL = gsap.timeline();

// // // // // //       // Animate widths
// // // // // //       masterTL.to(
// // // // // //         shoeSections,
// // // // // //         {
// // // // // //           width: (i, target) =>
// // // // // //             target === section ? expanded.width : otherCollapsed.width,
// // // // // //           duration: 0.7,
// // // // // //           ease: "power2.inOut",
// // // // // //         },
// // // // // //         0
// // // // // //       );

// // // // // //       // Animate active card's content IN
// // // // // //       masterTL
// // // // // //         .to(
// // // // // //           section.querySelector(".shoe-image"),
// // // // // //           {
// // // // // //             rotation: 0,
// // // // // //             scale: image.expandedScale,
// // // // // //             duration: 0.7,
// // // // // //             ease: "power2.inOut",
// // // // // //           },
// // // // // //           0
// // // // // //         )
// // // // // //         .to(
// // // // // //           section.querySelectorAll(".nike-text"),
// // // // // //           {
// // // // // //             opacity: 1,
// // // // // //             y: 0,
// // // // // //             duration: 0.4,
// // // // // //             stagger: 0.05,
// // // // // //           },
// // // // // //           0.2
// // // // // //         )
// // // // // //         .to(
// // // // // //           section.querySelector(".shoe-content"),
// // // // // //           {
// // // // // //             opacity: 1,
// // // // // //             y: 0,
// // // // // //             visibility: "visible",
// // // // // //             duration: 0.4,
// // // // // //           },
// // // // // //           "<0.2"
// // // // // //         );
// // // // // //     };

// // // // // //     setInitialStates();
// // // // // //     shoeSections.forEach((section) =>
// // // // // //       section.addEventListener("click", handleCardClick)
// // // // // //     );

// // // // // //     const handleResize = () => {
// // // // // //       setInitialStates();
// // // // // //       if (activeSection) {
// // // // // //         activeSection.classList.remove("active");
// // // // // //         activeSection = null;
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener("resize", handleResize);

// // // // // //     return () => {
// // // // // //       shoeSections.forEach((section) =>
// // // // // //         section.removeEventListener("click", handleCardClick)
// // // // // //       );
// // // // // //       window.removeEventListener("resize", handleResize);
// // // // // //     };
// // // // // //   }, [products]);

// // // // // //   return (
// // // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // // //       <main className="flex w-full h-full">
// // // // // //         {products.map((product) => (
// // // // // //           <div
// // // // // //             key={product.id}
// // // // // //             className="shoe-section relative overflow-hidden flex flex-col justify-center items-center cursor-pointer p-4"
// // // // // //             data-shoe={product.id}
// // // // // //             style={{ backgroundColor: product.bgColor }}
// // // // // //           >
// // // // // //             {/* Background "NIKE" Text */}
// // // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // // //               {[...Array(3)].map((_, idx) => (
// // // // // //                 <div key={idx} className="nike-text">
// // // // // //                   <span
// // // // // //                     className={`text-7xl md:text-9xl font-extrabold tracking-wider text-white/20 ${
// // // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // // //                     }`}
// // // // // //                     style={
// // // // // //                       idx !== 1
// // // // // //                         ? {
// // // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // // //                             color: "transparent",
// // // // // //                           }
// // // // // //                         : {}
// // // // // //                     }
// // // // // //                   >
// // // // // //                     NIKE
// // // // // //                   </span>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Main Shoe Image */}
// // // // // //             <div className="relative z-20 w-full h-1/2 flex items-center justify-center">
// // // // // //               <img
// // // // // //                 src={product.image}
// // // // // //                 alt={product.name}
// // // // // //                 className="shoe-image w-auto h-full max-w-none object-contain drop-shadow-2xl"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Product Details */}
// // // // // //             <div className="shoe-content z-30 w-full text-center text-white flex-grow flex flex-col justify-end items-center p-2 md:p-4">
// // // // // //               <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
// // // // // //                 {product.name}
// // // // // //               </h3>
// // // // // //               <h4 className="text-xl md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // // //                 {product.variant}
// // // // // //               </h4>
// // // // // //               <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // // //                 {product.description}
// // // // // //               </p>
// // // // // //               <div className="price-display px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // // //                 {product.price}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TopProduct;

// // // // // import React, { useEffect } from "react";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // const TopProduct = () => {
// // // // //   // Aapke product data aur images
// // // // //   const products = [
// // // // //     {
// // // // //       id: "chicago",
// // // // //       name: "Air Jordan 1",
// // // // //       variant: "Chicago",
// // // // //       description:
// // // // //         "One of the most iconic sneakers in history, originally released in 1985. This was Michael Jordan's first signature shoe.",
// // // // //       price: "$100",
// // // // //       image: "/product-1.png", // Ensure this path is correct in your public folder
// // // // //       bgColor: "#c81e2b",
// // // // //     },
// // // // //     {
// // // // //       id: "game-royal",
// // // // //       name: "Air Jordan 1",
// // // // //       variant: "Game Royal",
// // // // //       description:
// // // // //         "A bold remix of a classic, the Game Royal colorway brings vibrant blue hues to the surface for on and off the court.",
// // // // //       price: "$100",
// // // // //       image: "/product-2.png", // Ensure this path is correct
// // // // //       bgColor: "#0f4c81",
// // // // //     },
// // // // //     {
// // // // //       id: "pine-green",
// // // // //       name: "Air Jordan 1",
// // // // //       variant: "Pine Green",
// // // // //       description:
// // // // //         "The Pine Green 2.0 delivers a bold statement with rich green overlays and a stark black accent. A must-have for any look.",
// // // // //       price: "$100",
// // // // //       image: "/product-6.png", // Ensure this path is correct
// // // // //       bgColor: "#16643b",
// // // // //     },
// // // // //     {
// // // // //       id: "court-purple",
// // // // //       name: "Air Jordan 1",
// // // // //       variant: "Court Purple",
// // // // //       description:
// // // // //         "The Court Purple edition fuses regal tones with classic Jordan heritage for a truly kingly look. A standout choice for any sneaker enthusiast.",
// // // // //       price: "$100",
// // // // //       image: "/product-4.png", // Ensure this path is correct
// // // // //       bgColor: "#4a237d",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // //     let activeSection = null;

// // // // //     const getResponsiveSettings = () => {
// // // // //       const isMobile = window.innerWidth < 768;
// // // // //       const totalSections = shoeSections.length;
// // // // //       // Expanded card will take 70% width, others will share the remaining 30%
// // // // //       const expandedWidth = isMobile ? "100%" : "70%";
// // // // //       const collapsedWidth = isMobile ? "0%" : `${(100 - 70) / (totalSections - 1)}%`;

// // // // //       return {
// // // // //         isMobile,
// // // // //         expanded: { width: expandedWidth },
// // // // //         // Initial state is 25% for all
// // // // //         collapsed: { width: "25%" },
// // // // //         otherCollapsed: { width: collapsedWidth },
// // // // //         image: {
// // // // //           collapsedScale: 0.6,
// // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // //         },
// // // // //       };
// // // // //     };

// // // // //     // Sets the initial state for all cards and content
// // // // //     const setInitialStates = () => {
// // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // //       gsap.set(shoeSections, {
// // // // //         width: collapsed.width,
// // // // //         height: "100%",
// // // // //       });
// // // // //       // Hide content by collapsing its height and making it transparent
// // // // //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // //       gsap.set(".shoe-image", {
// // // // //         rotation: 25,
// // // // //         scale: image.collapsedScale,
// // // // //         transformOrigin: "center center",
// // // // //       });
// // // // //     };

// // // // //     // Handles the click event on a card
// // // // //     const handleCardClick = (e) => {
// // // // //       const section = e.currentTarget;
// // // // //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // //       // Deactivate previously active section if a new one is clicked
// // // // //       if (activeSection && activeSection !== section) {
// // // // //         activeSection.classList.remove("active");
// // // // //         const tl_out = gsap.timeline();
// // // // //         tl_out
// // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           })
// // // // //           .to(activeSection.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(activeSection.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: "power2.inOut",
// // // // //           }, "<");
// // // // //       }

// // // // //       // If clicking the active card, collapse all to initial state
// // // // //       if (isAlreadyActive) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //         const tl = gsap.timeline();
// // // // //         tl.to(shoeSections, {
// // // // //           width: collapsed.width,
// // // // //           duration: 0.5,
// // // // //           ease: "power2.inOut",
// // // // //         })
// // // // //           .to(section.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           }, "<")
// // // // //           .to(section.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(section.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: "power2.inOut",
// // // // //           }, "<");
// // // // //         return;
// // // // //       }

// // // // //       // Activate the new section
// // // // //       activeSection = section;
// // // // //       section.classList.add("active");

// // // // //       const masterTL = gsap.timeline();

// // // // //       // Animate widths
// // // // //       masterTL.to(shoeSections, {
// // // // //         width: (i, target) =>
// // // // //           target === section ? expanded.width : otherCollapsed.width,
// // // // //         duration: 0.7,
// // // // //         ease: "power2.inOut",
// // // // //       }, 0);

// // // // //       // Animate active card's content IN
// // // // //       masterTL
// // // // //         .to(section.querySelector(".shoe-image"), {
// // // // //           rotation: 0,
// // // // //           scale: image.expandedScale,
// // // // //           duration: 0.7,
// // // // //           ease: "power2.inOut",
// // // // //         }, 0)
// // // // //         .to(section.querySelectorAll(".nike-text"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           duration: 0.4,
// // // // //           stagger: 0.05,
// // // // //         }, 0.2)
// // // // //         .to(section.querySelector(".shoe-content"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           maxHeight: "50vh", // Animate height to reveal content
// // // // //           duration: 0.4,
// // // // //         }, "<0.2");
// // // // //     };

// // // // //     setInitialStates();
// // // // //     shoeSections.forEach((section) =>
// // // // //       section.addEventListener("click", handleCardClick)
// // // // //     );

// // // // //     const handleResize = () => {
// // // // //       setInitialStates();
// // // // //       if (activeSection) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("resize", handleResize);

// // // // //     return () => {
// // // // //       shoeSections.forEach((section) =>
// // // // //         section.removeEventListener("click", handleCardClick)
// // // // //       );
// // // // //       window.removeEventListener("resize", handleResize);
// // // // //     };
// // // // //   }, [products]); // products dependency is okay here

// // // // //   return (
// // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // //       <main className="flex w-full h-full">
// // // // //         {products.map((product) => (
// // // // //           <div
// // // // //             key={product.id}
// // // // //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// // // // //             data-shoe={product.id}
// // // // //             style={{ backgroundColor: product.bgColor }}
// // // // //           >
// // // // //             {/* Background "NIKE" Text */}
// // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // //               {[...Array(3)].map((_, idx) => (
// // // // //                 <div key={idx} className="nike-text">
// // // // //                   <span
// // // // //                     className={`text-7xl md:text-9xl font-extrabold tracking-wider text-white/20 ${
// // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // //                     }`}
// // // // //                     style={
// // // // //                       idx !== 1
// // // // //                         ? {
// // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // //                             color: "transparent",
// // // // //                           }
// // // // //                         : {}
// // // // //                     }
// // // // //                   >
// // // // //                     NIKE
// // // // //                   </span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Wrapper for Image and Content to control their vertical flow */}
// // // // //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col justify-center items-center">
// // // // //               {/* Main Shoe Image Container */}
// // // // //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center md:pb-8">
// // // // //                 <img
// // // // //                   src={product.image}
// // // // //                   alt={product.name}
// // // // //                   className="shoe-image w-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
// // // // //                   style={{ transformOrigin: "center center" }}
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Product Details - Now part of the flex column */}
// // // // //               <div className="shoe-content w-full text-center text-white overflow-hidden">
// // // // //                   <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// // // // //                     {product.name}
// // // // //                   </h3>
// // // // //                   <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // //                     {product.variant}
// // // // //                   </h4>
// // // // //                   <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // //                     {product.description}
// // // // //                   </p>
// // // // //                   <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // //                     {product.price}
// // // // //                   </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TopProduct;

// // // // // import React, { useEffect } from "react";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // const TopProduct = () => {
// // // // //   // --- START OF CHANGES ---
// // // // //   // Product data updated with new colors and example details from your image
// // // // //   const products = [
// // // // //     {
// // // // //       id: "product-blue",
// // // // //       name: "Batch 27",
// // // // //       variant: "Pre-Workout",
// // // // //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// // // // //       price: "$50",
// // // // //       image: "/product-1.png", // NOTE: Please replace with your actual image path
// // // // //       bgColor: "#2A74B8", // Blue from your image
// // // // //     },
// // // // //     {
// // // // //       id: "product-red",
// // // // //       name: "Diesel",
// // // // //       variant: "Whey Isolate",
// // // // //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// // // // //       price: "$70",
// // // // //       image: "/product-2.png", // NOTE: Please replace with your actual image path
// // // // //       bgColor: "#F24344", // Red from your image
// // // // //     },
// // // // //     {
// // // // //       id: "product-yellow",
// // // // //       name: "Isogold",
// // // // //       variant: "Premium Isolate",
// // // // //       description: "A premium whey protein isolate for rapid absorption and growth.",
// // // // //       price: "$65",
// // // // //       image: "/product-6.png", // NOTE: Please replace with your actual image path
// // // // //       bgColor: "#F5B82E", // Yellow/Gold from your image
// // // // //     },
// // // // //     {
// // // // //       id: "product-green",
// // // // //       name: "Ryse",
// // // // //       variant: "BCAA / EAA",
// // // // //       description: "Fuel your muscles with essential amino acids for recovery.",
// // // // //       price: "$45",
// // // // //       image: "/product-4.png", // NOTE: Please replace with your actual image path
// // // // //       bgColor: "#93D03B", // Green from your image
// // // // //     },
// // // // //   ];
// // // // //   // --- END OF CHANGES ---

// // // // //   useEffect(() => {
// // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // //     let activeSection = null;

// // // // //     const getResponsiveSettings = () => {
// // // // //       const isMobile = window.innerWidth < 768;
// // // // //       const totalSections = shoeSections.length;
// // // // //       const expandedWidth = isMobile ? "100%" : "50%";
// // // // //       const collapsedWidth = isMobile ? "0%" : `${(100 - 50) / (totalSections - 1)}%`;

// // // // //       return {
// // // // //         isMobile,
// // // // //         expanded: { width: expandedWidth },
// // // // //         collapsed: { width: "25%" },
// // // // //         otherCollapsed: { width: collapsedWidth },
// // // // //         image: {
// // // // //           collapsedScale: 0.6,
// // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // //         },
// // // // //       };
// // // // //     };

// // // // //     const setInitialStates = () => {
// // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // //       gsap.set(shoeSections, {
// // // // //         width: collapsed.width,
// // // // //         height: "100%",
// // // // //       });
// // // // //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // //       gsap.set(".shoe-image", {
// // // // //         rotation: 25,
// // // // //         scale: image.collapsedScale,
// // // // //         transformOrigin: "center center",
// // // // //       });
// // // // //     };

// // // // //     const handleCardClick = (e) => {
// // // // //       const section = e.currentTarget;
// // // // //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // //       if (activeSection && activeSection !== section) {
// // // // //         activeSection.classList.remove("active");
// // // // //         const tl_out = gsap.timeline();
// // // // //         tl_out
// // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           })
// // // // //           .to(activeSection.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(activeSection.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: "power2.inOut",
// // // // //           }, "<");
// // // // //       }

// // // // //       if (isAlreadyActive) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //         const tl = gsap.timeline();
// // // // //         tl.to(shoeSections, {
// // // // //           width: collapsed.width,
// // // // //           duration: 0.5,
// // // // //           ease: "power2.inOut",
// // // // //         })
// // // // //           .to(section.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           }, "<")
// // // // //           .to(section.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(section.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: "power2.inOut",
// // // // //           }, "<");
// // // // //         return;
// // // // //       }

// // // // //       activeSection = section;
// // // // //       section.classList.add("active");

// // // // //       const masterTL = gsap.timeline();

// // // // //       masterTL.to(shoeSections, {
// // // // //         width: (i, target) =>
// // // // //           target === section ? expanded.width : otherCollapsed.width,
// // // // //         duration: 0.7,
// // // // //         ease: "power2.inOut",
// // // // //       }, 0);

// // // // //       masterTL
// // // // //         .to(section.querySelector(".shoe-image"), {
// // // // //           rotation: 0,
// // // // //           scale: image.expandedScale,
// // // // //           duration: 0.7,
// // // // //           ease: "power2.inOut",
// // // // //         }, 0)
// // // // //         .to(section.querySelectorAll(".nike-text"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           duration: 0.4,
// // // // //           stagger: 0.05,
// // // // //         }, 0.2)
// // // // //         .to(section.querySelector(".shoe-content"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           maxHeight: "50vh",
// // // // //           duration: 0.4,
// // // // //         }, "<0.2");
// // // // //     };

// // // // //     setInitialStates();
// // // // //     shoeSections.forEach((section) =>
// // // // //       section.addEventListener("click", handleCardClick)
// // // // //     );

// // // // //     const handleResize = () => {
// // // // //       setInitialStates();
// // // // //       if (activeSection) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("resize", handleResize);

// // // // //     return () => {
// // // // //       shoeSections.forEach((section) =>
// // // // //         section.removeEventListener("click", handleCardClick)
// // // // //       );
// // // // //       window.removeEventListener("resize", handleResize);
// // // // //     };
// // // // //   }, [products]);

// // // // //   return (
// // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // //       <main className="flex w-full h-full">
// // // // //         {products.map((product) => (
// // // // //           <div
// // // // //             key={product.id}
// // // // //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// // // // //             data-shoe={product.id}
// // // // //             style={{ backgroundColor: product.bgColor }}
// // // // //           >
// // // // //             {/* Background Text (Changed to BUILDAPE) */}
// // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // //               {[...Array(3)].map((_, idx) => (
// // // // //                 <div key={idx} className="nike-text">
// // // // //                   <span
// // // // //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // //                     }`}
// // // // //                     style={
// // // // //                       idx !== 1
// // // // //                         ? {
// // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // //                             color: "transparent",
// // // // //                           }
// // // // //                         : {}
// // // // //                     }
// // // // //                   >
// // // // //                     BUILDAPE {/* Changed text */}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Wrapper for Image and Content */}
// // // // //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col justify-center items-center">
// // // // //               {/* Main Product Image Container */}
// // // // //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center md:pb-8">
// // // // //                 <img
// // // // //                   src={product.image}
// // // // //                   alt={product.name}
// // // // //                   className="shoe-image w-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
// // // // //                   style={{ transformOrigin: "center center" }}
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Product Details */}
// // // // //               <div className="shoe-content w-full text-center text-white overflow-hidden">
// // // // //                   <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// // // // //                     {product.name}
// // // // //                   </h3>
// // // // //                   <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // //                     {product.variant}
// // // // //                   </h4>
// // // // //                   <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // //                     {product.description}
// // // // //                   </p>
// // // // //                   <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // //                     {product.price}
// // // // //                   </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TopProduct;

// // // // // import React, { useEffect } from "react";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // const TopProduct = () => {
// // // // //   const products = [
// // // // //     {
// // // // //       id: "product-blue",
// // // // //       name: "Batch 27",
// // // // //       variant: "Pre-Workout",
// // // // //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// // // // //       price: "$50",
// // // // //       image: "/product-1.png",
// // // // //       bgColor: "#2A74B8",
// // // // //     },
// // // // //     {
// // // // //       id: "product-red",
// // // // //       name: "Diesel",
// // // // //       variant: "Whey Isolate",
// // // // //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// // // // //       price: "$70",
// // // // //       image: "/product-2.png",
// // // // //       bgColor: "#F24344",
// // // // //     },
// // // // //     {
// // // // //       id: "product-yellow",
// // // // //       name: "Isogold",
// // // // //       variant: "Premium Isolate",
// // // // //       description: "A premium whey protein isolate for rapid absorption and growth.",
// // // // //       price: "$65",
// // // // //       image: "/product-6.png",
// // // // //       bgColor: "#F5B82E",
// // // // //     },
// // // // //     {
// // // // //       id: "product-green",
// // // // //       name: "Ryse",
// // // // //       variant: "BCAA / EAA",
// // // // //       description: "Fuel your muscles with essential amino acids for recovery.",
// // // // //       price: "$45",
// // // // //       image: "/product-4.png",
// // // // //       bgColor: "#93D03B",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // //     let activeSection = null;

// // // // //     const getResponsiveSettings = () => {
// // // // //       const isMobile = window.innerWidth < 768;
// // // // //       const totalSections = shoeSections.length;
// // // // //       const expandedWidth = isMobile ? "100%" : "45%";
// // // // //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// // // // //       return {
// // // // //         isMobile,
// // // // //         expanded: { width: expandedWidth },
// // // // //         collapsed: { width: "25%" },
// // // // //         otherCollapsed: { width: collapsedWidth },
// // // // //         image: {
// // // // //           collapsedScale: 0.6,
// // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // //         },
// // // // //       };
// // // // //     };

// // // // //     const setInitialStates = () => {
// // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // //       gsap.set(shoeSections, {
// // // // //         width: collapsed.width,
// // // // //         height: "100%",
// // // // //       });
// // // // //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // //       gsap.set(".shoe-image", {
// // // // //         rotation: 25,
// // // // //         scale: image.collapsedScale,
// // // // //         transformOrigin: "center center",
// // // // //       });
// // // // //     };

// // // // //     const handleCardClick = (e) => {
// // // // //       const section = e.currentTarget;
// // // // //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // //       if (activeSection && activeSection !== section) {
// // // // //         activeSection.classList.remove("active");
// // // // //         const tl_out = gsap.timeline();
// // // // //         tl_out
// // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           })
// // // // //           .to(activeSection.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(activeSection.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
// // // // //             // ease: "power2.inOut",
// // // // //           }, "<");
// // // // //       }

// // // // //       if (isAlreadyActive) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //         const tl = gsap.timeline();
// // // // //         tl.to(shoeSections, {
// // // // //           width: collapsed.width,
// // // // //           duration: 0.5,
// // // // //           ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
// // // // //         })
// // // // //           .to(section.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           }, "<")
// // // // //           .to(section.querySelectorAll(".nike-text"), { opacity: 0, y: 20, duration: 0.3 }, "<")
// // // // //           .to(section.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             duration: 0.5,
// // // // //             ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
// // // // //           }, "<");
// // // // //         return;
// // // // //       }

// // // // //       activeSection = section;
// // // // //       section.classList.add("active");

// // // // //       const masterTL = gsap.timeline();

// // // // //       masterTL.to(shoeSections, {
// // // // //         width: (i, target) =>
// // // // //           target === section ? expanded.width : otherCollapsed.width,
// // // // //         duration: 0.7,
// // // // //         ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
// // // // //       }, 0);

// // // // //       masterTL
// // // // //         .to(section.querySelector(".shoe-image"), {
// // // // //           rotation: 0,
// // // // //           scale: image.expandedScale,
// // // // //           duration: 0.7,
// // // // //           ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
// // // // //         }, 0)
// // // // //         .to(section.querySelectorAll(".nike-text"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           duration: 0.4,
// // // // //           stagger: 0.05,
// // // // //         }, 0.2)
// // // // //         .to(section.querySelector(".shoe-content"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           maxHeight: "55vh",
// // // // //           duration: 0.4,
// // // // //         }, "<0.2");
// // // // //     };

// // // // //     setInitialStates();
// // // // //     shoeSections.forEach((section) =>
// // // // //       section.addEventListener("click", handleCardClick)
// // // // //     );

// // // // //     const handleResize = () => {
// // // // //       setInitialStates();
// // // // //       if (activeSection) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("resize", handleResize);

// // // // //     return () => {
// // // // //       shoeSections.forEach((section) =>
// // // // //         section.removeEventListener("click", handleCardClick)
// // // // //       );
// // // // //       window.removeEventListener("resize", handleResize);
// // // // //     };
// // // // //   }, [products]);

// // // // //   return (
// // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // //       <main className="flex w-full h-full">
// // // // //         {products.map((product) => (
// // // // //           <div
// // // // //             key={product.id}
// // // // //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// // // // //             data-shoe={product.id}
// // // // //             style={{ backgroundColor: product.bgColor }}
// // // // //           >
// // // // //             {/* ✅ Dynamic Product Name as background text */}
// // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // //               {[...Array(3)].map((_, idx) => (
// // // // //                 <div key={idx} className="nike-text">
// // // // //                   <span
// // // // //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // //                     }`}
// // // // //                     style={
// // // // //                       idx !== 1
// // // // //                         ? {
// // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // //                             color: "transparent",
// // // // //                           }
// // // // //                         : {}
// // // // //                     }
// // // // //                   >
// // // // //                     {product.name}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Main Content */}
// // // // //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col justify-center items-center">
// // // // //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center md:pb-8">
// // // // //                 <img
// // // // //                   src={product.image}
// // // // //                   alt={product.name}
// // // // //                   className="shoe-image w-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
// // // // //                   style={{ transformOrigin: "center center" }}
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="shoe-content w-full text-center text-white overflow-hidden">
// // // // //                 <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// // // // //                   {product.name}
// // // // //                 </h3>
// // // // //                 <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // //                   {product.variant}
// // // // //                 </h4>
// // // // //                 <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // //                   {product.description}
// // // // //                 </p>
// // // // //                 <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // //                   {product.price}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TopProduct;

// // // // // import React, { useEffect } from "react";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // // const TopProduct = () => {
// // // // //   const products = [
// // // // //     {
// // // // //       id: "product-blue",
// // // // //       name: "Batch 27",
// // // // //       variant: "Pre-Workout",
// // // // //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// // // // //       price: "$50",
// // // // //       image: "/product-1.png",
// // // // //       bgColor: "#2A74B8",
// // // // //     },
// // // // //     {
// // // // //       id: "product-red",
// // // // //       name: "Diesel",
// // // // //       variant: "Whey Isolate",
// // // // //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// // // // //       price: "$70",
// // // // //       image: "/product-2.png",
// // // // //       bgColor: "#F24344",
// // // // //     },
// // // // //     {
// // // // //       id: "product-yellow",
// // // // //       name: "Isogold",
// // // // //       variant: "Premium Isolate",
// // // // //       description: "A premium whey protein isolate for rapid absorption and growth.",
// // // // //       price: "$65",
// // // // //       image: "/product-6.png",
// // // // //       bgColor: "#F5B82E",
// // // // //     },
// // // // //     {
// // // // //       id: "product-green",
// // // // //       name: "Ryse",
// // // // //       variant: "BCAA / EAA",
// // // // //       description: "Fuel your muscles with essential amino acids for recovery.",
// // // // //       price: "$45",
// // // // //       image: "/product-4.png",
// // // // //       bgColor: "#93D03B",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // // //     let activeSection = null;

// // // // //     const getResponsiveSettings = () => {
// // // // //       const isMobile = window.innerWidth < 768;
// // // // //       const totalSections = shoeSections.length;
// // // // //       const expandedWidth = isMobile ? "100%" : "45%";
// // // // //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// // // // //       return {
// // // // //         isMobile,
// // // // //         expanded: { width: expandedWidth },
// // // // //         collapsed: { width: "25%" },
// // // // //         otherCollapsed: { width: collapsedWidth },
// // // // //         image: {
// // // // //           collapsedScale: 0.6,
// // // // //           expandedScale: isMobile ? 0.9 : 1,
// // // // //           // yOffset: -10 // Added y-offset for the upward movement
// // // // //         },
// // // // //       };
// // // // //     };

// // // // //     const setInitialStates = () => {
// // // // //       const { collapsed, image } = getResponsiveSettings();
// // // // //       gsap.set(shoeSections, {
// // // // //         width: collapsed.width,
// // // // //         height: "100%",
// // // // //       });
// // // // //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// // // // //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// // // // //       gsap.set(".shoe-image", {
// // // // //         rotation: 25,
// // // // //         scale: image.collapsedScale,
// // // // //         y: 0,
// // // // //         transformOrigin: "center center",
// // // // //       });
// // // // //     };

// // // // //     const handleCardClick = (e) => {
// // // // //       const section = e.currentTarget;
// // // // //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// // // // //       const isAlreadyActive = section.classList.contains("active");

// // // // //       if (activeSection && activeSection !== section) {
// // // // //         activeSection.classList.remove("active");
// // // // //         const tl_out = gsap.timeline();
// // // // //         tl_out
// // // // //           .to(activeSection.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //             ease: "power2.inOut",
// // // // //           })
// // // // //           .to(activeSection.querySelectorAll(".nike-text"), { 
// // // // //             opacity: 0, 
// // // // //             y: 20, 
// // // // //             duration: 0.3 
// // // // //           }, "<")
// // // // //           .to(activeSection.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             y: 0,
// // // // //             duration: 0.5,
// // // // //             ease: "expo.out",
// // // // //           }, "<");
// // // // //       }

// // // // //       if (isAlreadyActive) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //         const tl = gsap.timeline();
// // // // //         tl.to(shoeSections, {
// // // // //           width: collapsed.width,
// // // // //           duration: 0.5,
// // // // //           ease: "power2.inOut",
// // // // //         })
// // // // //           .to(section.querySelector(".shoe-content"), {
// // // // //             opacity: 0,
// // // // //             y: 30,
// // // // //             maxHeight: 0,
// // // // //             duration: 0.3,
// // // // //           }, "<")
// // // // //           .to(section.querySelectorAll(".nike-text"), { 
// // // // //             opacity: 0, 
// // // // //             y: 20, 
// // // // //             duration: 0.3 
// // // // //           }, "<")
// // // // //           .to(section.querySelector(".shoe-image"), {
// // // // //             rotation: 25,
// // // // //             scale: image.collapsedScale,
// // // // //             y: 0,
// // // // //             duration: 0.5,
// // // // //             ease: "power2.Out",
// // // // //           }, "<");
// // // // //         return;
// // // // //       }

// // // // //       activeSection = section;
// // // // //       section.classList.add("active");

// // // // //       const masterTL = gsap.timeline();

// // // // //       masterTL.to(shoeSections, {
// // // // //         width: (i, target) =>
// // // // //           target === section ? expanded.width : otherCollapsed.width,
// // // // //         duration: 0.7,
// // // // //         ease: "power2.inOut",
// // // // //       }, 0);

// // // // //       masterTL
// // // // //         .to(section.querySelector(".shoe-image"), {
// // // // //           rotation: 0,
// // // // //           scale: image.expandedScale,
// // // // //           y: image.yOffset,
// // // // //           duration: 0.7,
// // // // //           ease: "back.out(1.2)",
// // // // //         }, 0)
// // // // //         .to(section.querySelectorAll(".nike-text"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           duration: 0.4,
// // // // //           stagger: 0.05,
// // // // //           ease: "power2.out",
// // // // //         }, 0.2)
// // // // //         .to(section.querySelector(".shoe-content"), {
// // // // //           opacity: 1,
// // // // //           y: 0,
// // // // //           maxHeight: "55vh",
// // // // //           duration: 0.4,
// // // // //           ease: "power2.out",
// // // // //         }, "<0.2");
// // // // //     };

// // // // //     setInitialStates();
// // // // //     shoeSections.forEach((section) =>
// // // // //       section.addEventListener("click", handleCardClick)
// // // // //     );

// // // // //     const handleResize = () => {
// // // // //       setInitialStates();
// // // // //       if (activeSection) {
// // // // //         activeSection.classList.remove("active");
// // // // //         activeSection = null;
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener("resize", handleResize);

// // // // //     return () => {
// // // // //       shoeSections.forEach((section) =>
// // // // //         section.removeEventListener("click", handleCardClick)
// // // // //       );
// // // // //       window.removeEventListener("resize", handleResize);
// // // // //     };
// // // // //   }, [products]);

// // // // //   return (
// // // // //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// // // // //       <main className="flex w-full h-full">
// // // // //         {products.map((product) => (
// // // // //           <div
// // // // //             key={product.id}
// // // // //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// // // // //             data-shoe={product.id}
// // // // //             style={{ backgroundColor: product.bgColor }}
// // // // //           >
// // // // //             {/* ✅ Dynamic Product Name as background text */}
// // // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // // //               {[...Array(3)].map((_, idx) => (
// // // // //                 <div key={idx} className="nike-text">
// // // // //                   <span
// // // // //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// // // // //                       idx === 1 ? "py-1 md:py-4" : ""
// // // // //                     }`}
// // // // //                     style={
// // // // //                       idx !== 1
// // // // //                         ? {
// // // // //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// // // // //                             color: "transparent",
// // // // //                           }
// // // // //                         : {}
// // // // //                     }
// // // // //                   >
// // // // //                     {product.name}
// // // // //                   </span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Main Content */}
// // // // //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col justify-center items-center">
// // // // //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center md:pb-8">
// // // // //                 <img
// // // // //                   src={product.image}
// // // // //                   alt={product.name}
// // // // //                   className="shoe-image w-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
// // // // //                   style={{ transformOrigin: "center center" }}
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="shoe-content w-full text-center text-white overflow-hidden">
// // // // //                 <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// // // // //                   {product.name}
// // // // //                 </h3>
// // // // //                 <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// // // // //                   {product.variant}
// // // // //                 </h4>
// // // // //                 <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// // // // //                   {product.description}
// // // // //                 </p>
// // // // //                 <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// // // // //                   {product.price}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TopProduct;

// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // const TopProduct = () => {
// //   const products = [
// //     {
// //       id: "product-blue",
// //       name: "Batch 27",
// //       variant: "Pre-Workout",
// //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// //       price: "$50",
// //       image: "/product-1.png",
// //       bgColor: "#2A74B8",
// //     },
// //     {
// //       id: "product-red",
// //       name: "Diesel",
// //       variant: "Whey Isolate",
// //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// //       price: "$70",
// //       image: "/product-2.png",
// //       bgColor: "#F24344",
// //     },
// //     {
// //       id: "product-yellow",
// //       name: "Isogold",
// //       variant: "Premium Isolate",
// //       description: "A premium whey protein isolate for rapid absorption and growth.",
// //       price: "$65",
// //       image: "/product-6.png",
// //       bgColor: "#F5B82E",
// //     },
// //     {
// //       id: "product-green",
// //       name: "Ryse",
// //       variant: "BCAA / EAA",
// //       description: "Fuel your muscles with essential amino acids for recovery.",
// //       price: "$45",
// //       image: "/product-4.png",
// //       bgColor: "#93D03B",
// //     },
// //   ];

// //   useEffect(() => {
// //     const shoeSections = gsap.utils.toArray(".shoe-section");
// //     let activeSection = null;

// //     const getResponsiveSettings = () => {
// //       const isMobile = window.innerWidth < 768;
// //       const totalSections = shoeSections.length;
// //       const expandedWidth = isMobile ? "100%" : "45%";
// //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// //       return {
// //         isMobile,
// //         expanded: { width: expandedWidth },
// //         collapsed: { width: "25%" },
// //         otherCollapsed: { width: collapsedWidth },
// //         image: {
// //           collapsedScale: 0.6,
// //           expandedScale: isMobile ? 0.9 : 1,
// //           yOffset: 0,
// //         },
// //       };
// //     };

// //     const setInitialStates = () => {
// //       const { collapsed, image } = getResponsiveSettings();
// //       gsap.set(shoeSections, {
// //         width: collapsed.width,
// //         height: "100%",
// //       });
// //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// //       gsap.set(".shoe-image", {
// //         rotation: 25,
// //         scale: image.collapsedScale,
// //         y: 0,
// //         transformOrigin: "center center",
// //       });
// //     };

// //     const handleCardClick = (e) => {
// //       const section = e.currentTarget;
// //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// //       const isAlreadyActive = section.classList.contains("active");

// //       if (activeSection && activeSection !== section) {
// //         activeSection.classList.remove("active");
// //         const tl_out = gsap.timeline();
// //         tl_out
// //           .to(activeSection.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           })
// //           .to(
// //             activeSection.querySelectorAll(".nike-text"),
// //             {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             activeSection.querySelector(".shoe-image"),
// //             {
// //               rotation: 25,
// //               scale: image.collapsedScale,
// //               y: 0,
// //               duration: 0.5,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           );
// //       }

// //       if (isAlreadyActive) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //         const tl = gsap.timeline();
// //         tl.to(shoeSections, {
// //           width: collapsed.width,
// //           duration: 0.5,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         })
// //           .to(
// //             section.querySelector(".shoe-content"),
// //             {
// //               opacity: 0,
// //               y: 30,
// //               maxHeight: 0,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             section.querySelectorAll(".nike-text"),
// //             {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             section.querySelector(".shoe-image"),
// //             {
// //               rotation: 25,
// //               scale: image.collapsedScale,
// //               y: 0,
// //               duration: 0.5,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           );
// //         return;
// //       }

// //       activeSection = section;
// //       section.classList.add("active");

// //       const masterTL = gsap.timeline();

// //       masterTL.to(
// //         shoeSections,
// //         {
// //           width: (i, target) =>
// //             target === section ? expanded.width : otherCollapsed.width,
// //           duration: 0.7,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         },
// //         0
// //       );

// //       masterTL
// //         .to(
// //           section.querySelector(".shoe-image"),
// //           {
// //             rotation: 0,
// //             scale: image.expandedScale,
// //             y: 0,
// //             duration: 0.7,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           0
// //         )
// //         .to(
// //           section.querySelectorAll(".nike-text"),
// //           {
// //             opacity: 1,
// //             y: 0,
// //             duration: 0.4,
// //             stagger: 0.05,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           0.2
// //         )
// //         .to(
// //           section.querySelector(".shoe-content"),
// //           {
// //             opacity: 1,
// //             y: 0,
// //             maxHeight: "40vh",
// //             duration: 0.4,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           "<0.2"
// //         );
// //     };

// //     setInitialStates();
// //     shoeSections.forEach((section) =>
// //       section.addEventListener("click", handleCardClick)
// //     );

// //     const handleResize = () => {
// //       setInitialStates();
// //       if (activeSection) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       shoeSections.forEach((section) =>
// //         section.removeEventListener("click", handleCardClick)
// //       );
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [products]);

// //   return (
// //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// //       <main className="flex w-full h-full">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// //             data-shoe={product.id}
// //             style={{ backgroundColor: product.bgColor }}
// //           >
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               {[...Array(3)].map((_, idx) => (
// //                 <div key={idx} className="nike-text">
// //                   <span
// //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// //                       idx === 1 ? "py-1 md:py-4" : ""
// //                     }`}
// //                     style={
// //                       idx !== 1
// //                         ? {
// //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// //                             color: "transparent",
// //                           }
// //                         : {}
// //                     }
// //                   >
// //                     {product.name}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col justify-center items-center">
// //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center md:pb-8">
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="shoe-image w-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-2xl"
// //                   style={{ transformOrigin: "center center" }}
// //                 />
// //               </div>

// //               <div className="shoe-content w-full text-center text-white overflow-hidden">
// //                 <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// //                   {product.name}
// //                 </h3>
// //                 <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// //                   {product.variant}
// //                 </h4>
// //                 <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// //                   {product.description}
// //                 </p>
// //                 <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// //                   {product.price}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </main>
// //     </div>
// //   );
// // };

// // export default TopProduct;
// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // const TopProduct = () => {
// //   const products = [
// //     {
// //       id: "product-blue",
// //       name: "Batch 27",
// //       variant: "Pre-Workout",
// //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// //       price: "$50",
// //       image: "/product-1.png",
// //       bgColor: "#2A74B8",
// //     },
// //     {
// //       id: "product-red",
// //       name: "Diesel",
// //       variant: "Whey Isolate",
// //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// //       price: "$70",
// //       image: "/product-2.png",
// //       bgColor: "#F24344",
// //     },
// //     {
// //       id: "product-yellow",
// //       name: "Isogold",
// //       variant: "Premium Isolate",
// //       description: "A premium whey protein isolate for rapid absorption and growth.",
// //       price: "$65",
// //       image: "/product-6.png",
// //       bgColor: "#F5B82E",
// //     },
// //     {
// //       id: "product-green",
// //       name: "Ryse",
// //       variant: "BCAA / EAA",
// //       description: "Fuel your muscles with essential amino acids for recovery.",
// //       price: "$45",
// //       image: "/product-4.png",
// //       bgColor: "#93D03B",
// //     },
// //   ];

// //   useEffect(() => {
// //     const shoeSections = gsap.utils.toArray(".shoe-section");
// //     let activeSection = null;

// //     const getResponsiveSettings = () => {
// //       const isMobile = window.innerWidth < 768;
// //       const totalSections = shoeSections.length;
// //       const expandedWidth = isMobile ? "100%" : "45%";
// //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// //       return {
// //         isMobile,
// //         expanded: { width: expandedWidth },
// //         collapsed: { width: "25%" },
// //         otherCollapsed: { width: collapsedWidth },
// //         image: {
// //           collapsedScale: 0.6,
// //           expandedScale: isMobile ? 0.9 : 1,
// //           yOffset: 0,
// //         },
// //       };
// //     };

// //     const setInitialStates = () => {
// //       const { collapsed, image } = getResponsiveSettings();
// //       gsap.set(shoeSections, {
// //         width: collapsed.width,
// //         height: "100%",
// //       });
// //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// //       gsap.set(".shoe-image", {
// //         rotation: 25,
// //         scale: image.collapsedScale,
// //         y: 0,
// //         transformOrigin: "center center",
// //       });
// //     };

// //     const handleCardClick = (e) => {
// //       const section = e.currentTarget;
// //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// //       const isAlreadyActive = section.classList.contains("active");

// //       if (activeSection && activeSection !== section) {
// //         activeSection.classList.remove("active");
// //         const tl_out = gsap.timeline();
// //         tl_out
// //           .to(activeSection.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           })
// //           .to(
// //             activeSection.querySelectorAll(".nike-text"),
// //             {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             activeSection.querySelector(".shoe-image"),
// //             {
// //               rotation: 25,
// //               scale: image.collapsedScale,
// //               y: 0,
// //               duration: 0.5,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           );
// //       }

// //       if (isAlreadyActive) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //         const tl = gsap.timeline();
// //         tl.to(shoeSections, {
// //           width: collapsed.width,
// //           duration: 0.5,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         })
// //           .to(
// //             section.querySelector(".shoe-content"),
// //             {
// //               opacity: 0,
// //               y: 30,
// //               maxHeight: 0,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             section.querySelectorAll(".nike-text"),
// //             {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           )
// //           .to(
// //             section.querySelector(".shoe-image"),
// //             {
// //               rotation: 25,
// //               scale: image.collapsedScale,
// //               y: 0,
// //               duration: 0.5,
// //               ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //             },
// //             "<"
// //           );
// //         return;
// //       }

// //       activeSection = section;
// //       section.classList.add("active");

// //       const masterTL = gsap.timeline();

// //       masterTL.to(
// //         shoeSections,
// //         {
// //           width: (i, target) =>
// //             target === section ? expanded.width : otherCollapsed.width,
// //           duration: 0.7,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         },
// //         0
// //       );

// //       masterTL
// //         .to(
// //           section.querySelector(".shoe-image"),
// //           {
// //             rotation: 0,
// //             scale: image.expandedScale,
// //             y: 0,
// //             duration: 0.7,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           0
// //         )
// //         .to(
// //           section.querySelectorAll(".nike-text"),
// //           {
// //             opacity: 1,
// //             y: 0,
// //             duration: 0.4,
// //             stagger: 0.05,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           0.2
// //         )
// //         .to(
// //           section.querySelector(".shoe-content"),
// //           {
// //             opacity: 1,
// //             y: 0,
// //             maxHeight: "55vh",
// //             duration: 0.4,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           },
// //           "<0.2"
// //         );
// //     };

// //     setInitialStates();
// //     shoeSections.forEach((section) =>
// //       section.addEventListener("click", handleCardClick)
// //     );

// //     const handleResize = () => {
// //       setInitialStates();
// //       if (activeSection) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       shoeSections.forEach((section) =>
// //         section.removeEventListener("click", handleCardClick)
// //       );
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [products]);

// //   return (
// //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// //       <main className="flex w-full h-full">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="shoe-section relative overflow-hidden cursor-pointer p-4"
// //             data-shoe={product.id}
// //             style={{ backgroundColor: product.bgColor }}
// //           >
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               {[...Array(3)].map((_, idx) => (
// //                 <div key={idx} className="nike-text">
// //                   <span
// //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// //                       idx === 1 ? "py-1 md:py-4" : ""
// //                     }`}
// //                     style={
// //                       idx !== 1
// //                         ? {
// //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// //                             color: "transparent",
// //                           }
// //                         : {}
// //                     }
// //                   >
// //                     {product.name}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="content-wrapper relative z-10 w-full h-full flex flex-col items-center">
// //               {/* 🚫 NO JUMP Fixed Image Section */}
// //               <div className="shoe-image-container w-full flex-shrink-0 flex justify-center items-center h-[50vh]">
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="shoe-image w-auto max-h-full object-contain drop-shadow-2xl"
// //                   style={{ transformOrigin: "center center" }}
// //                 />
// //               </div>

// //               {/* 🧾 Expandable Text Content */}
// //               <div className="shoe-content w-full text-center text-white overflow-hidden px-4">
// //                 <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// //                   {product.name}
// //                 </h3>
// //                 <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// //                   {product.variant}
// //                 </h4>
// //                 <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// //                   {product.description}
// //                 </p>
// //                 <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// //                   {product.price}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </main>
// //     </div>
// //   );
// // };

// // export default TopProduct; 

// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // const TopProduct = () => {
// //   const products = [
// //     {
// //       id: "product-blue",
// //       name: "Batch 27",
// //       variant: "Pre-Workout",
// //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// //       price: "$50",
// //       image: "/product-1.png",
// //       bgColor: "#2A74B8",
// //     },
// //     {
// //       id: "product-red",
// //       name: "Diesel",
// //       variant: "Whey Isolate",
// //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// //       price: "$70",
// //       image: "/product-2.png",
// //       bgColor: "#F24344",
// //     },
// //     {
// //       id: "product-yellow",
// //       name: "Isogold",
// //       variant: "Premium Isolate",
// //       description: "A premium whey protein isolate for rapid absorption and growth.",
// //       price: "$65",
// //       image: "/product-6.png",
// //       bgColor: "#F5B82E",
// //     },
// //     {
// //       id: "product-green",
// //       name: "Ryse",
// //       variant: "BCAA / EAA",
// //       description: "Fuel your muscles with essential amino acids for recovery.",
// //       price: "$45",
// //       image: "/product-4.png",
// //       bgColor: "#93D03B",
// //     },
// //   ];

// //   useEffect(() => {
// //     const shoeSections = gsap.utils.toArray(".shoe-section");
// //     let activeSection = null;

// //     const getResponsiveSettings = () => {
// //       const isMobile = window.innerWidth < 768;
// //       const totalSections = shoeSections.length;
// //       const expandedWidth = isMobile ? "100%" : "45%";
// //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// //       return {
// //         isMobile,
// //         expanded: { width: expandedWidth },
// //         collapsed: { width: "25%" },
// //         otherCollapsed: { width: collapsedWidth },
// //         image: {
// //           collapsedScale: 0.6,
// //           expandedScale: isMobile ? 0.9 : 1,
// //           yOffset: 0,
// //         },
// //       };
// //     };

// //     const setInitialStates = () => {
// //       const { collapsed, image } = getResponsiveSettings();
// //       gsap.set(shoeSections, {
// //         width: collapsed.width,
// //         height: "100%",
// //       });
// //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// //       gsap.set(".shoe-image", {
// //         rotation: 25,
// //         scale: image.collapsedScale,
// //         y: 0,
// //         transformOrigin: "center center",
// //       });
// //     };

// //     const handleCardClick = (e) => {
// //       const section = e.currentTarget;
// //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// //       const isAlreadyActive = section.classList.contains("active");

// //       if (activeSection && activeSection !== section) {
// //         activeSection.classList.remove("active");
// //         const tl_out = gsap.timeline();
// //         tl_out
// //           .to(activeSection.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           })
// //           .to(activeSection.querySelectorAll(".nike-text"), {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(activeSection.querySelector(".shoe-image"), {
// //             rotation: 25,
// //             scale: image.collapsedScale,
// //             y: 0,
// //             duration: 0.5,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<");
// //       }

// //       if (isAlreadyActive) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //         const tl = gsap.timeline();
// //         tl.to(shoeSections, {
// //           width: collapsed.width,
// //           duration: 0.5,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         })
// //           .to(section.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(section.querySelectorAll(".nike-text"), {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(section.querySelector(".shoe-image"), {
// //             rotation: 25,
// //             scale: image.collapsedScale,
// //             y: 0,
// //             duration: 0.5,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<");
// //         return;
// //       }

// //       activeSection = section;
// //       section.classList.add("active");

// //       const masterTL = gsap.timeline();

// //       masterTL.to(shoeSections, {
// //         width: (i, target) =>
// //           target === section ? expanded.width : otherCollapsed.width,
// //         duration: 0.7,
// //         ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //       }, 0);

// //       masterTL
// //         .to(section.querySelector(".shoe-image"), {
// //           rotation: 0,
// //           scale: image.expandedScale,
// //           y: image.yOffset,
// //           duration: 0.7,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, 0)
// //         .to(section.querySelectorAll(".nike-text"), {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.4,
// //           stagger: 0.05,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, 0.2)
// //         .to(section.querySelector(".shoe-content"), {
// //           opacity: 1,
// //           y: 0,
// //           maxHeight: "55vh",
// //           duration: 0.4,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, "<0.2");
// //     };

// //     setInitialStates();
// //     shoeSections.forEach((section) =>
// //       section.addEventListener("click", handleCardClick)
// //     );

// //     const handleResize = () => {
// //       setInitialStates();
// //       if (activeSection) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       shoeSections.forEach((section) =>
// //         section.removeEventListener("click", handleCardClick)
// //       );
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [products]);

// //   return (
// //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// //       <main className="flex w-full h-full">
// //         {products.map((product) => (
// //           // <div
// //           //   key={product.id}
// //           //   className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col items-center justify-center"
// //           //   data-shoe={product.id}
// //           //   style={{ backgroundColor: product.bgColor }}
// //           // >
// //           //   {/* Background Text */}
// //           //   <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //           //     {[...Array(3)].map((_, idx) => (
// //           //       <div key={idx} className="nike-text">
// //           //         <span
// //           //           className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// //           //             idx === 1 ? "py-1 md:py-4" : ""
// //           //           }`}
// //           //           style={
// //           //             idx !== 1
// //           //               ? {
// //           //                   WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// //           //                   color: "transparent",
// //           //                 }
// //           //               : {}
// //           //           }
// //           //         >
// //           //           {product.name}
// //           //         </span>
// //           //       </div>
// //           //     ))}
// //           //   </div>

// //           //   {/* Main Content Layer */}
// //           //   <div className="content-wrapper relative z-10 w-full h-full">

// //           //     {/* ✅ Centered Image */}
// //           //     <div className="shoe-image-container absolute inset-0 flex justify-center items-center pointer-events-none">
// //           //       <img
// //           //         src={product.image}
// //           //         alt={product.name}
// //           //         className="shoe-image w-auto max-h-[50vh] object-contain drop-shadow-2xl"
// //           //         style={{ transformOrigin: "center center" }}
// //           //       />
// //           //     </div>

// //           //     {/* ✅ Expanding Bottom Content */}
// //           //     <div className="shoe-content absolute bottom-0 left-0 right-0 text-center text-white overflow-hidden px-4 py-6">
// //           //       <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// //           //         {product.name}
// //           //       </h3>
// //           //       <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// //           //         {product.variant}
// //           //       </h4>
// //           //       <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// //           //         {product.description}
// //           //       </p>
// //           //       <div className="price-display inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// //           //         {product.price}
// //           //       </div>
// //           //     </div>

// //           //   </div>
// //           // </div>

// //           <div
// //   key={product.id}
// //   className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between"
// //   data-shoe={product.id}
// //   style={{ backgroundColor: product.bgColor }}
// // >
// //   {/* NIKE text background */}
// //   <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //     {[...Array(3)].map((_, idx) => (
// //       <div key={idx} className="nike-text">
// //         <span
// //           className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// //             idx === 1 ? "py-1 md:py-4" : ""
// //           }`}
// //           style={
// //             idx !== 1
// //               ? {
// //                   WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// //                   color: "transparent",
// //                 }
// //               : {}
// //           }
// //         >
// //           {product.name}
// //         </span>
// //       </div>
// //     ))}
// //   </div>

// //   {/* ✅ Centered Image with own space */}
// //   <div className="flex-grow flex items-center justify-center z-10 pointer-events-none">
// //     <img
// //       src={product.image}
// //       alt={product.name}
// //       className="shoe-image w-auto max-h-[50vh] object-contain drop-shadow-2xl"
// //       style={{ transformOrigin: "center center" }}
// //     />
// //   </div>

// //   {/* ✅ Fixed bottom content, never overlapping */}
// //   <div className="shoe-content z-20 text-center text-white px-4 py-6">
// //     <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// //       {product.name}
// //     </h3>
// //     <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// //       {product.variant}
// //     </h4>
// //     <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// //       {product.description}
// //     </p>
// //     <div className="inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// //       {product.price}
// //     </div>
// //   </div>
// // </div>

// //         ))}
// //       </main>
// //     </div>
// //   );
// // };

// // export default TopProduct;

// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // const TopProduct = () => {
// //   const products = [
// //     {
// //       id: "product-blue",
// //       name: "Batch 27",
// //       variant: "Pre-Workout",
// //       description: "Clinically dosed pre-workout for extreme energy and focus.",
// //       price: "$50",
// //       image: "/product-1.png",
// //       bgColor: "#2A74B8",
// //     },
// //     {
// //       id: "product-red",
// //       name: "Diesel",
// //       variant: "Whey Isolate",
// //       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
// //       price: "$70",
// //       image: "/product-2.png",
// //       bgColor: "#F24344",
// //     },
// //     {
// //       id: "product-yellow",
// //       name: "Isogold",
// //       variant: "Premium Isolate",
// //       description: "A premium whey protein isolate for rapid absorption and growth.",
// //       price: "$65",
// //       image: "/product-6.png",
// //       bgColor: "#F5B82E",
// //     },
// //     {
// //       id: "product-green",
// //       name: "Ryse",
// //       variant: "BCAA / EAA",
// //       description: "Fuel your muscles with essential amino acids for recovery.",
// //       price: "$45",
// //       image: "/product-4.png",
// //       bgColor: "#93D03B",
// //     },
// //   ];

// //   useEffect(() => {
// //     const shoeSections = gsap.utils.toArray(".shoe-section");
// //     let activeSection = null;

// //     const getResponsiveSettings = () => {
// //       const isMobile = window.innerWidth < 768;
// //       const totalSections = shoeSections.length;
// //       const expandedWidth = isMobile ? "100%" : "45%";
// //       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

// //       return {
// //         isMobile,
// //         expanded: { width: expandedWidth },
// //         collapsed: { width: "25%" },
// //         otherCollapsed: { width: collapsedWidth },
// //         image: {
// //           collapsedScale: 0.6,
// //           expandedScale: isMobile ? 0.9 : 1,
// //           yOffset: -10, // ✅ slight upward shift on expand
// //         },
// //       };
// //     };

// //     const setInitialStates = () => {
// //       const { collapsed, image } = getResponsiveSettings();
// //       gsap.set(shoeSections, {
// //         width: collapsed.width,
// //         height: "100%",
// //       });
// //       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
// //       gsap.set(".nike-text", { opacity: 0, y: 20 });
// //       gsap.set(".shoe-image", {
// //         rotation: 25,
// //         scale: image.collapsedScale,
// //         y: 0,
// //         transformOrigin: "center center",
// //       });
// //     };

// //     const handleCardClick = (e) => {
// //       const section = e.currentTarget;
// //       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
// //       const isAlreadyActive = section.classList.contains("active");

// //       if (activeSection && activeSection !== section) {
// //         activeSection.classList.remove("active");
// //         const tl_out = gsap.timeline();
// //         tl_out
// //           .to(activeSection.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           })
// //           .to(activeSection.querySelectorAll(".nike-text"), {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(activeSection.querySelector(".shoe-image"), {
// //             rotation: 25,
// //             scale: image.collapsedScale,
// //             y: 0,
// //             duration: 0.5,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<");
// //       }

// //       if (isAlreadyActive) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //         const tl = gsap.timeline();
// //         tl.to(shoeSections, {
// //           width: collapsed.width,
// //           duration: 0.5,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         })
// //           .to(section.querySelector(".shoe-content"), {
// //             opacity: 0,
// //             y: 30,
// //             maxHeight: 0,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(section.querySelectorAll(".nike-text"), {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<")
// //           .to(section.querySelector(".shoe-image"), {
// //             rotation: 25,
// //             scale: image.collapsedScale,
// //             y: 0,
// //             duration: 0.5,
// //             ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //           }, "<");
// //         return;
// //       }

// //       activeSection = section;
// //       section.classList.add("active");

// //       const masterTL = gsap.timeline();

// //       masterTL.to(shoeSections, {
// //         width: (i, target) =>
// //           target === section ? expanded.width : otherCollapsed.width,
// //         duration: 0.7,
// //         ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //       }, 0);

// //       masterTL
// //         .to(section.querySelector(".shoe-image"), {
// //           rotation: 0,
// //           scale: image.expandedScale,
// //           y: image.yOffset,
// //           duration: 0.5,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, 0)
// //         .to(section.querySelectorAll(".nike-text"), {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.4,
// //           stagger: 0.05,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, 0.2)
// //         .to(section.querySelector(".shoe-content"), {
// //           opacity: 1,
// //           y: 0,
// //           maxHeight: "40vh",
// //           duration: 0.4,
// //           ease: "cubic-bezier(0.65, 0, 0.35, 1)",
// //         }, "<0.2");
// //     };

// //     setInitialStates();
// //     shoeSections.forEach((section) =>
// //       section.addEventListener("click", handleCardClick)
// //     );

// //     const handleResize = () => {
// //       setInitialStates();
// //       if (activeSection) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       shoeSections.forEach((section) =>
// //         section.removeEventListener("click", handleCardClick)
// //       );
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, [products]);

// //   return (
// //     <div className="h-screen w-full font-sans overflow-hidden bg-black">
// //       <main className="flex w-full h-full">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between"
// //             data-shoe={product.id}
// //             style={{ backgroundColor: product.bgColor }}
// //           >
// //             {/* NIKE Background Text */}
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               {[...Array(3)].map((_, idx) => (
// //                 <div key={idx} className="nike-text">
// //                   <span
// //                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
// //                       idx === 1 ? "py-1 md:py-4" : ""
// //                     }`}
// //                     style={
// //                       idx !== 1
// //                         ? {
// //                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
// //                             color: "transparent",
// //                           }
// //                         : {}
// //                     }
// //                   >
// //                     {product.name}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Centered Image */}
// //             <div className="flex-grow flex items-center justify-center z-10 pointer-events-none">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="shoe-image w-auto max-h-[50vh] object-contain drop-shadow-2xl"
// //                 style={{ transformOrigin: "center center" }}
// //               />
// //             </div>

// //             {/* Bottom Content */}
// //             <div className="shoe-content z-20 text-center text-white px-4 py-6">
// //               <h3 className="text-xl md:text-3xl font-bold tracking-wide">
// //                 {product.name}
// //               </h3>
// //               <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
// //                 {product.variant}
// //               </h4>
// //               <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
// //                 {product.description}
// //               </p>
// //               <div className="inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
// //                 {product.price}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </main>
// //     </div>
// //   );
// // };

// // export default TopProduct;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// const TopProduct = () => {
//   const products = [
//     {
//       id: "product-blue",
//       name: "Batch 27",
//       variant: "Pre-Workout",
//       description: "Clinically dosed pre-workout for extreme energy and focus.",
//       price: "$50",
//       image: "/product-1.png",
//       bgColor: "#2A74B8",
//     },
//     {
//       id: "product-red",
//       name: "Diesel",
//       variant: "Whey Isolate",
//       description: "Pure New Zealand whey isolate for lean muscle and recovery.",
//       price: "$70",
//       image: "/product-2.png",
//       bgColor: "#F24344",
//     },
//     {
//       id: "product-yellow",
//       name: "Isogold",
//       variant: "Premium Isolate",
//       description: "A premium whey protein isolate for rapid absorption and growth.",
//       price: "$65",
//       image: "/product-6.png",
//       bgColor: "#F5B82E",
//     },
//     {
//       id: "product-green",
//       name: "Ryse",
//       variant: "BCAA / EAA",
//       description: "Fuel your muscles with essential amino acids for recovery.",
//       price: "$45",
//       image: "/product-4.png",
//       bgColor: "#93D03B",
//     },
//   ];

//   useEffect(() => {
//     const shoeSections = gsap.utils.toArray(".shoe-section");
//     let activeSection = null;

//     const getResponsiveSettings = () => {
//       const isMobile = window.innerWidth < 768;
//       const totalSections = shoeSections.length;
//       const expandedWidth = isMobile ? "100%" : "45%";
//       const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

//       return {
//         isMobile,
//         expanded: { width: expandedWidth },
//         collapsed: { width: "25%" },
//         otherCollapsed: { width: collapsedWidth },
//         image: {
//           collapsedScale: 0.6,
//           expandedScale: isMobile ? 0.9 : 1,
//           yOffset: -10, // Slightly shift up on expand
//         },
//       };
//     };

//     const setInitialStates = () => {
//       const { collapsed, image } = getResponsiveSettings();
//       gsap.set(shoeSections, { width: collapsed.width, height: "100%" });
//       gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
//       gsap.set(".nike-text", { opacity: 0, y: 20 });
//       gsap.set(".shoe-image", {
//         rotation: 25,
//         scale: image.collapsedScale,
//         y: 0,
//         transformOrigin: "center center",
//       });
//     };

//     const handleCardClick = (e) => {
//       const section = e.currentTarget;
//       const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
//       const isAlreadyActive = section.classList.contains("active");

//       if (activeSection && activeSection !== section) {
//         activeSection.classList.remove("active");
//         const tl_out = gsap.timeline();
//         tl_out
//           .to(activeSection.querySelector(".shoe-content"), {
//             opacity: 0,
//             y: 30,
//             maxHeight: 0,
//             duration: 0.25,
//             ease: "power2.inOut",
//           })
//           .to(activeSection.querySelectorAll(".nike-text"), {
//             opacity: 0,
//             y: 20,
//             duration: 0.25,
//             ease: "power2.inOut",
//           }, "<")
//           .to(activeSection.querySelector(".shoe-image"), {
//             rotation: 25,
//             scale: image.collapsedScale,
//             y: 0,
//             duration: 0.4,
//             ease: "power2.inOut",
//           }, "<");
//       }

//       if (isAlreadyActive) {
//         activeSection.classList.remove("active");
//         activeSection = null;
//         const tl = gsap.timeline();
//         tl.to(shoeSections, {
//           width: collapsed.width,
//           duration: 0.4,
//           ease: "power2.inOut",
//         })
//           .to(section.querySelector(".shoe-content"), {
//             opacity: 0,
//             y: 30,
//             maxHeight: 0,
//             duration: 0.25,
//             ease: "power2.inOut",
//           }, "<")
//           .to(section.querySelectorAll(".nike-text"), {
//             opacity: 0,
//             y: 20,
//             duration: 0.25,
//             ease: "power2.inOut",
//           }, "<")
//           .to(section.querySelector(".shoe-image"), {
//             rotation: 25,
//             scale: image.collapsedScale,
//             y: 0,
//             duration: 0.4,
//             ease: "power2.inOut",
//           }, "<");
//         return;
//       }

//       activeSection = section;
//       section.classList.add("active");

//       const masterTL = gsap.timeline();

//       masterTL.to(shoeSections, {
//         width: (i, target) => target === section ? expanded.width : otherCollapsed.width,
//         duration: 0.4,
//         ease: "power2.inOut",
//       }, 0);

//       masterTL
//         .to(section.querySelector(".shoe-image"), {
//           rotation: 0,
//           scale: image.expandedScale,
//           y: image.yOffset,
//           duration: 0.4,
//           ease: "power2.inOut",
//         }, 0)
//         .to(section.querySelectorAll(".nike-text"), {
//           opacity: 1,
//           y: 0,
//           duration: 0.25,
//           stagger: 0.04,
//           ease: "power2.inOut",
//         }, 0.1)
//         .to(section.querySelector(".shoe-content"), {
//           opacity: 1,
//           y: 0,
//           maxHeight: "40vh",
//           duration: 0.3,
//           ease: "power2.inOut",
//         }, "<0.1");
//     };

//     setInitialStates();
//     shoeSections.forEach(section => section.addEventListener("click", handleCardClick));

//     const handleResize = () => {
//       setInitialStates();
//       if (activeSection) {
//         activeSection.classList.remove("active");
//         activeSection = null;
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       shoeSections.forEach(section =>
//         section.removeEventListener("click", handleCardClick)
//       );
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [products]);

//   return (
//     <div className="h-screen w-full font-sans overflow-hidden bg-black">
//       <main className="flex w-full h-full">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between"
//             data-shoe={product.id}
//             style={{ backgroundColor: product.bgColor }}
//           >
//             {/* NIKE Background Text */}
//             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
//               {[...Array(3)].map((_, idx) => (
//                 <div key={idx} className="nike-text">
//                   <span
//                     className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
//                       idx === 1 ? "py-1 md:py-4" : ""
//                     }`}
//                     style={
//                       idx !== 1
//                         ? {
//                             WebkitTextStroke: "2px rgba(255,255,255,0.1)",
//                             color: "transparent",
//                           }
//                         : {}
//                     }
//                   >
//                     {product.name}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Centered Image */}
//             <div className="flex-grow flex items-center justify-center z-10 pointer-events-none">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="shoe-image w-auto max-h-[50vh] object-contain drop-shadow-2xl"
//                 style={{ transformOrigin: "center center" }}
//               />
//             </div>

//             {/* Bottom Content */}
//             <div className="shoe-content z-20 text-center text-white px-4 py-6">
//               <h3 className="text-xl md:text-3xl font-bold tracking-wide">
//                 {product.name}
//               </h3>
//               <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
//                 {product.variant}
//               </h4>
//               <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
//                 {product.description}
//               </p>
//               <div className="inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
//                 {product.price}
//               </div>
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default TopProduct;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const TopProduct = () => {
  const products = [
    {
      id: "product-blue",
      name: "Batch 27",
      variant: "Pre-Workout",
      description: "Clinically dosed pre-workout for extreme energy and focus.",
      price: "$50",
      image: "/product-1.png",
      bgColor: "#2A74B8",
    },
    {
      id: "product-red",
      name: "Diesel",
      variant: "Whey Isolate",
      description: "Pure New Zealand whey isolate for lean muscle and recovery.",
      price: "$70",
      image: "/product-2.png",
      bgColor: "#F24344",
    },
    {
      id: "product-yellow",
      name: "Isogold",
      variant: "Premium Isolate",
      description: "A premium whey protein isolate for rapid absorption and growth.",
      price: "$65",
      image: "/product-6.png",
      bgColor: "#F5B82E",
    },
    {
      id: "product-green",
      name: "Ryse",
      variant: "BCAA / EAA",
      description: "Fuel your muscles with essential amino acids for recovery.",
      price: "$45",
      image: "/product-4.png",
      bgColor: "#93D03B",
    },
  ];

  useEffect(() => {
    // --- YAHAN CHANGE KIYA GAYA HAI ---
    // Ek custom ease banaya gaya hai jisse animation smooth lage
    const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
    const duration = 0.5; // Sabhi animations ke liye ek duration set kar diya hai

    const shoeSections = gsap.utils.toArray(".shoe-section");
    let activeSection = null;

    const getResponsiveSettings = () => {
      const isMobile = window.innerWidth < 768;
      const totalSections = shoeSections.length;
      const expandedWidth = isMobile ? "100%" : "45%";
      const collapsedWidth = isMobile ? "0%" : `${(100 - 45) / (totalSections - 1)}%`;

      return {
        isMobile,
        expanded: { width: expandedWidth },
        collapsed: { width: "25%" },
        otherCollapsed: { width: collapsedWidth },
        image: {
          collapsedScale: 0.6,
          expandedScale: isMobile ? 0.9 : 1,
          yOffset: -10, // Slightly shift up on expand
        },
      };
    };

    const setInitialStates = () => {
      const { collapsed, image } = getResponsiveSettings();
      gsap.set(shoeSections, { width: collapsed.width, height: "100%" });
      gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
      gsap.set(".nike-text", { opacity: 0, y: 20 });
      gsap.set(".shoe-image", {
        rotation: 25,
        scale: image.collapsedScale,
        y: 0,
        transformOrigin: "center center",
      });
    };

    const handleCardClick = (e) => {
      const section = e.currentTarget;
      const { expanded, collapsed, otherCollapsed, image } = getResponsiveSettings();
      const isAlreadyActive = section.classList.contains("active");

      if (activeSection && activeSection !== section) {
        activeSection.classList.remove("active");
        const tl_out = gsap.timeline();
        tl_out
          .to(activeSection.querySelector(".shoe-content"), {
            opacity: 0,
            y: 30,
            maxHeight: 0,
            duration: duration * 0.6,
            // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          })
          .to(activeSection.querySelectorAll(".nike-text"), {
            opacity: 0,
            y: 20,
            duration: duration * 0.6,
             // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          }, "<")
          .to(activeSection.querySelector(".shoe-image"), {
            rotation: 25,
            scale: image.collapsedScale,
            y: 0,
            duration: duration,
             // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          }, "<");
      }

      if (isAlreadyActive) {
        activeSection.classList.remove("active");
        activeSection = null;
        const tl = gsap.timeline();
        tl.to(shoeSections, {
          width: collapsed.width,
          duration: duration,
           // --- YAHAN CHANGE KIYA GAYA HAI ---
          ease: customEase,
        })
          .to(section.querySelector(".shoe-content"), {
            opacity: 0,
            y: 30,
            maxHeight: 0,
            duration: duration * 0.6,
             // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          }, "<")
          .to(section.querySelectorAll(".nike-text"), {
            opacity: 0,
            y: 20,
            duration: duration * 0.6,
             // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          }, "<")
          .to(section.querySelector(".shoe-image"), {
            rotation: 25,
            scale: image.collapsedScale,
            y: 0,
            duration: duration,
             // --- YAHAN CHANGE KIYA GAYA HAI ---
            ease: customEase,
          }, "<");
        return;
      }

      activeSection = section;
      section.classList.add("active");

      const masterTL = gsap.timeline();

      masterTL.to(shoeSections, {
        width: (i, target) => target === section ? expanded.width : otherCollapsed.width,
        duration: duration,
         // --- YAHAN CHANGE KIYA GAYA HAI ---
        ease: customEase,
      }, 0);

      masterTL
        .to(section.querySelector(".shoe-image"), {
          rotation: 0,
          scale: image.expandedScale,
          y: image.yOffset,
          duration: duration,
           // --- YAHAN CHANGE KIYA GAYA HAI ---
          ease: customEase,
        }, 0)
        .to(section.querySelectorAll(".nike-text"), {
          opacity: 1,
          y: 0,
          duration: duration * 0.8,
          stagger: 0.04,
           // --- YAHAN CHANGE KIYA GAYA HAI ---
          ease: customEase,
        }, 0.1)
        .to(section.querySelector(".shoe-content"), {
          opacity: 1,
          y: 0,
          maxHeight: "40vh",
          duration: duration * 0.9,
           // --- YAHAN CHANGE KIYA GAYA HAI ---
          ease: customEase,
        }, "<0.1");
    };

    setInitialStates();
    shoeSections.forEach(section => section.addEventListener("click", handleCardClick));

    const handleResize = () => {
      setInitialStates();
      if (activeSection) {
        activeSection.classList.remove("active");
        activeSection = null;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      shoeSections.forEach(section =>
        section.removeEventListener("click", handleCardClick)
      );
      window.removeEventListener("resize", handleResize);
    };
  }, [products]);

  // JSX wahi rahega...
  return (
    <div className="h-screen w-full font-sans overflow-hidden bg-black">
      <main className="flex w-full h-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between"
            data-shoe={product.id}
            style={{ backgroundColor: product.bgColor }}
          >
            {/* NIKE Background Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="nike-text">
                  <span
                    className={`text-6xl md:text-8xl font-extrabold tracking-wider text-white/20 ${
                      idx === 1 ? "py-1 md:py-4" : ""
                    }`}
                    style={
                      idx !== 1
                        ? {
                            WebkitTextStroke: "2px rgba(255,255,255,0.1)",
                            color: "transparent",
                          }
                        : {}
                    }
                  >
                    {product.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Centered Image */}
            <div className="flex-grow flex items-center justify-center z-10 pointer-events-none">
              <img
                src={product.image}
                alt={product.name}
                className="shoe-image w-auto max-h-[50vh] object-contain drop-shadow-2xl"
                style={{ transformOrigin: "center center" }}
              />
            </div>

            {/* Bottom Content */}
            <div className="shoe-content z-20 text-center text-white px-4 py-6">
              <h3 className="text-xl md:text-3xl font-bold tracking-wide">
                {product.name}
              </h3>
              <h4 className="text-lg md:text-2xl font-medium text-white/80 mb-2 md:mb-4">
                {product.variant}
              </h4>
              <p className="text-xs md:text-sm font-light text-white/70 max-w-xs mx-auto mb-4">
                {product.description}
              </p>
              <div className="inline-block px-8 py-2 border border-white/50 rounded-full text-lg md:text-xl font-semibold">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TopProduct;


