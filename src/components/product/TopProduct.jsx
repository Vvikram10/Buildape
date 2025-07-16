

// // // // import React, { useEffect } from "react";
// // // // import { gsap } from "gsap";
// // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // const TopProduct = () => {
// // // //   const products = [
// // // //     {
// // // //       id: "product-red",
// // // //       name: "Air Jordan 1",
// // // //       variant: "Chicago",
// // // //       description:
// // // //         "One of the most iconic sneakers in history, originally released in 1985. Its bold red, black, and white colorway symbolizes Michael Jordan's legacy with the Chicago Bulls.",
// // // //       price: "$170",
// // // //       image: "/product-2.png",
// // // //       bgColor: "#124a8f",
// // // //     },
// // // //     {
// // // //       id: "product-blue",
// // // //       name: "Air Force 1",
// // // //       variant: "White '07",
// // // //       description:
// // // //         "The legend lives on in this classic basketball shoe. It blends iconic court style with a crisp, clean look that never gets old.",
// // // //       price: "$110",
// // // //       image: "/product-3.png",
// // // //       bgColor: "#a0243c",
// // // //     },
// // // //     {
// // // //       id: "product-pink",
// // // //       name: "Nike Dunk Low",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-4.png",
// // // //       bgColor: "#c8920e",
// // // //     },
// // // //     {
// // // //       id: "product-green",
// // // //       name: "Nike Dunk Low",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-4.png",
// // // //       bgColor: "#0f4e34",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     // GSAP animations and logic from your original code
// // // //     // This part remains unchanged as it already contains logic for mobile.
// // // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // // //     const duration = 0.4;

// // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // //     let activeSection = null;

// // // //     const getResponsiveSettings = () => {
// // // //       const isMobile = window.innerWidth < 1024;
// // // //       const totalSections = shoeSections.length;
// // // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // // //       const collapsedWidth = isMobile
// // // //         ? "100vw"
// // // //         : `${(100 - 45) / (totalSections - 1)}%`;

// // // //       return {
// // // //         isMobile,
// // // //         expanded: { width: expandedWidth },
// // // //         collapsed: { width: isMobile ? "100vw" : "25%" },
// // // //         otherCollapsed: { width: collapsedWidth },
// // // //         image: {
// // // //           collapsedScale: 0.7,
// // // //           expandedScale: 1,
// // // //           yOffset: 0,
// // // //         },
// // // //       };
// // // //     };

// // // //     const setInitialStates = () => {
// // // //       const { isMobile } = getResponsiveSettings();

// // // //       gsap.set(".products-container", {
// // // //           // No need to set width/display/overflow with GSAP
// // // //           // as Tailwind classes will handle it.
// // // //       });

// // // //       gsap.set(shoeSections, {
// // // //         width: isMobile ? "100vw" : "25%", // Set initial width for desktop
// // // //         flexShrink: 0,
// // // //         scrollSnapAlign: isMobile ? "start" : "none",
// // // //       });

// // // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });

// // // //       gsap.set(".shoe-image", {
// // // //         rotation: -25,
// // // //         scale: getResponsiveSettings().image.collapsedScale,
// // // //         y: 0,
// // // //         transformOrigin: "center center",
// // // //       });
// // // //     };

// // // //     const handleCardClick = (e) => {
// // // //       const section = e.currentTarget;
// // // //       const { expanded, otherCollapsed, image, isMobile } =
// // // //         getResponsiveSettings();
// // // //       const isAlreadyActive = section.classList.contains("active");

// // // //       const animateIn = () => {
// // // //         gsap
// // // //           .timeline()
// // // //           .to(section.querySelector(".shoe-image"), {
// // // //             rotation: 0,
// // // //             scale: image.expandedScale,
// // // //             y: image.yOffset,
// // // //             duration,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             section.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.8,
// // // //               stagger: 0.05,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           )
// // // //           .to(
// // // //             section.querySelector(".shoe-content"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.9,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           );
// // // //       };

// // // //       const animateOut = (target) => {
// // // //         gsap
// // // //           .timeline()
// // // //           .to(target.querySelector(".shoe-content"), {
// // // //             opacity: 0,
// // // //             y: 30,
// // // //             duration: duration * 0.6,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             target.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 0,
// // // //               y: 20,
// // // //               duration: duration * 0.6,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           )
// // // //           .to(
// // // //             target.querySelector(".shoe-image"),
// // // //             {
// // // //               rotation: -25,
// // // //               scale: image.collapsedScale,
// // // //               y: 0,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           );
// // // //       };
      
// // // //       if (isMobile) {
// // // //          // On mobile, just handle the animation. Scrolling is native.
// // // //          if (section.classList.contains("active")) return;

// // // //          shoeSections.forEach(s => {
// // // //             if (s.classList.contains("active")) {
// // // //                 s.classList.remove("active");
// // // //                 animateOut(s);
// // // //             }
// // // //          });
// // // //          section.classList.add("active");
// // // //          animateIn();

// // // //       } else {
// // // //         // Desktop logic remains the same
// // // //         if (activeSection && activeSection !== section) {
// // // //           activeSection.classList.remove("active");
// // // //           animateOut(activeSection);
// // // //         }

// // // //         if (isAlreadyActive) {
// // // //           activeSection.classList.remove("active");
// // // //           activeSection = null;
// // // //           gsap.to(shoeSections, {
// // // //             width: "25%",
// // // //             duration,
// // // //             ease: customEase,
// // // //           });
// // // //           animateOut(section);
// // // //           return;
// // // //         }

// // // //         activeSection = section;
// // // //         section.classList.add("active");

// // // //         gsap
// // // //           .timeline()
// // // //           .to(
// // // //             shoeSections,
// // // //             {
// // // //               width: (i, target) =>
// // // //                 target === section ? expanded.width : otherCollapsed.width,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             0
// // // //           )
// // // //           .add(animateIn(), 0.1);
// // // //       }
// // // //     };

// // // //     setInitialStates();
    
// // // //     // Initial animation for the first item on mobile
// // // //     if (window.innerWidth < 1024 && shoeSections.length > 0) {
// // // //         const firstSection = shoeSections[0];
// // // //         firstSection.classList.add("active");
// // // //         gsap.to(firstSection.querySelector(".shoe-image"), { rotation: 0, scale: 1, duration: 0, ease: customEase });
// // // //         gsap.to(firstSection.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: 0 });
// // // //         gsap.to(firstSection.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: 0 });
// // // //     }

// // // //     shoeSections.forEach((section) =>
// // // //       section.addEventListener("click", handleCardClick)
// // // //     );

// // // //     const handleResize = () => {
// // // //       if (activeSection) {
// // // //         activeSection.classList.remove("active");
// // // //         activeSection = null;
// // // //       }
// // // //       setInitialStates();
// // // //        // Re-run initial animation on resize for mobile
// // // //       if (window.innerWidth < 1024 && shoeSections.length > 0) {
// // // //         const firstSection = shoeSections[0];
// // // //         firstSection.classList.add("active");
// // // //         gsap.to(firstSection.querySelector(".shoe-image"), { rotation: 0, scale: 1, duration: 0, ease: customEase });
// // // //         gsap.to(firstSection.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: 0 });
// // // //         gsap.to(firstSection.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: 0 });
// // // //       }
// // // //     };

// // // //     window.addEventListener("resize", handleResize);

// // // //     return () => {
// // // //       shoeSections.forEach((section) =>
// // // //         section.removeEventListener("click", handleCardClick)
// // // //       );
// // // //       window.removeEventListener("resize", handleResize);
// // // //     };
// // // //   }, [products]); // Add products to dependency array

// // // //   return (
// // // //     <div className="h-screen w-full font-sans bg-black overflow-hidden">
// // // //       {/*
// // // //         - `flex` is default (mobile-first).
// // // //         - `overflow-x-auto` enables horizontal scrolling on small screens.
// // // //         - `snap-x` and `snap-mandatory` create a snapping effect between products.
// // // //         - `lg:overflow-x-hidden` disables horizontal scrolling on large screens.
// // // //         - `lg:w-full` ensures the container takes full width on large screens.
// // // //       */}
// // // //       <div className="products-container flex h-full w-auto overflow-x-auto snap-x snap-mandatory lg:overflow-x-hidden lg:w-full">
// // // //         {products.map((product, index) => {
// // // //           const bgText = product.name.split(" ")[0].toUpperCase();

// // // //           return (
// // // //             <div
// // // //               key={`${product.id}-${index}`}
// // // //               /*
// // // //                 - `w-screen` makes each product take the full screen width on mobile.
// // // //                 - `flex-shrink-0` prevents items from shrinking.
// // // //                 - `lg:w-1/4` sets the width for large screens (your original setting).
// // // //                 - `snap-start` aligns the start of the element to the snapport.
// // // //               */
// // // //               className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full w-screen flex-shrink-0 snap-start lg:w-1/4"
// // // //               data-shoe={product.id}
// // // //               style={{ backgroundColor: product.bgColor }}
// // // //             >
// // // //               <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // // //                 {[...Array(3)].map((_, idx) => (
// // // //                   <div key={idx} className="nike-bg-text">
// // // //                     <span
// // // //                       className={`font-extrabold tracking-wider leading-none ${
// // // //                         idx === 1 ? "text-white/80" : "text-transparent"
// // // //                       }`}
// // // //                       style={{
// // // //                         fontSize: "clamp(1rem, 12vw, 8rem)",
// // // //                         ...(idx !== 1
// // // //                           ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" }
// // // //                           : {}),
// // // //                       }}
// // // //                     >
// // // //                       {bgText}
// // // //                     </span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain"
// // // //                   style={{
// // // //                     filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))",
// // // //                   }}
// // // //                 />
// // // //               </div>
              
// // // //               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // // //                 <h6
// // // //                   className="text-sm font-semibold leading-tight"
// // // //                   style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
// // // //                 >
// // // //                   {product.name}
// // // //                 </h6>
// // // //                 <p
// // // //                   className="text-xs text-white/80 mb-1"
// // // //                   style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
// // // //                 >
// // // //                   {product.variant}
// // // //                 </p>
// // // //                 <p
// // // //                   className="text-[10px] text-white/60 max-w-xs mx-auto mb-1"
// // // //                   style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.description}
// // // //                 </p>
// // // //                 <div
// // // //                   className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto"
// // // //                   style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.price}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TopProduct;

// // // // import React, { useEffect } from "react";
// // // // import { gsap } from "gsap";
// // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // const TopProduct = () => {
// // // //   const products = [
// // // //     {
// // // //       id: "product-red",
// // // //       name: "DIESEL",
// // // //       variant: "Chicago",
// // // //       description:
// // // //         "One of the most iconic sneakers in history, originally released in 1985. Its bold red, black, and white colorway symbolizes Michael Jordan's legacy with the Chicago Bulls.",
// // // //       price: "$170",
// // // //       image: "/product-2.png",
// // // //       bgColor: "#124a8f",
// // // //     },
// // // //     {
// // // //       id: "product-blue",
// // // //       name: "ISO GOLD",
// // // //       variant: "White '07",
// // // //       description:
// // // //         "The legend lives on in this classic basketball shoe. It blends iconic court style with a crisp, clean look that never gets old.",
// // // //       price: "$110",
// // // //       image: "/product-3.png",
// // // //       bgColor: "#a0243c",
// // // //     },
// // // //     {
// // // //       id: "product-pink",
// // // //       name: "RYS",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-4.png",
// // // //       bgColor: "#c8920e",
// // // //     },
// // // //     {
// // // //       id: "product-green",
// // // //       name: "BATCH",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-1.png",
// // // //       bgColor: "#0f4e34",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // // //     const duration = 0.4;

// // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // //     let activeSection = null;

// // // //     const getResponsiveSettings = () => {
// // // //       const isMobile = window.innerWidth < 1024;
// // // //       const totalSections = shoeSections.length;
// // // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // // //       const collapsedWidth = isMobile
// // // //         ? "100vw"
// // // //         : `${(100 - 45) / (totalSections - 1)}%`;

// // // //       return {
// // // //         isMobile,
// // // //         expanded: { width: expandedWidth },
// // // //         collapsed: { width: isMobile ? "100vw" : "25%" },
// // // //         otherCollapsed: { width: collapsedWidth },
// // // //         image: {
// // // //           collapsedScale: 0.7,
// // // //           expandedScale: 1,
// // // //           yOffset: 0,
// // // //         },
// // // //       };
// // // //     };

// // // //     const setInitialStates = () => {
// // // //       gsap.set(shoeSections, {
// // // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // // //         flexShrink: 0,
// // // //         scrollSnapAlign: window.innerWidth < 1024 ? "start" : "none",
// // // //       });

// // // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });

// // // //       gsap.set(".shoe-image", {
// // // //         rotation: -25,
// // // //         scale: getResponsiveSettings().image.collapsedScale,
// // // //         y: 0,
// // // //         transformOrigin: "center center",
// // // //       });
// // // //     };

// // // //     const handleCardClick = (e) => {
// // // //       const section = e.currentTarget;
// // // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // // //       const isAlreadyActive = section.classList.contains("active");

// // // //       const animateIn = (target) => {
// // // //         gsap
// // // //           .timeline()
// // // //           .to(target.querySelector(".shoe-image"), {
// // // //             rotation: 0,
// // // //             scale: image.expandedScale,
// // // //             y: image.yOffset,
// // // //             duration,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             target.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.8,
// // // //               stagger: 0.05,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           )
// // // //           .to(
// // // //             target.querySelector(".shoe-content"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.9,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           );
// // // //       };

// // // //       const animateOut = (target) => {
// // // //         gsap
// // // //           .timeline()
// // // //           .to(target.querySelector(".shoe-content"), {
// // // //             opacity: 0,
// // // //             y: 30,
// // // //             duration: duration * 0.6,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             target.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 0,
// // // //               y: 20,
// // // //               duration: duration * 0.6,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           )
// // // //           .to(
// // // //             target.querySelector(".shoe-image"),
// // // //             {
// // // //               rotation: -25,
// // // //               scale: image.collapsedScale,
// // // //               y: 0,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           );
// // // //       };

// // // //       // *** CHANGE STARTS HERE ***
// // // //       // Unified logic for all devices

// // // //       if (isMobile) {
// // // //         // If the clicked section is already active, collapse it.
// // // //         if (isAlreadyActive) {
// // // //           section.classList.remove("active");
// // // //           animateOut(section);
// // // //           return;
// // // //         }

// // // //         // If another section is active, find and collapse it.
// // // //         shoeSections.forEach(s => {
// // // //           if (s.classList.contains("active")) {
// // // //             s.classList.remove("active");
// // // //             animateOut(s);
// // // //           }
// // // //         });

// // // //         // Expand the currently clicked section.
// // // //         section.classList.add("active");
// // // //         animateIn(section);

// // // //       } else {
// // // //         // Desktop logic remains the same (it already worked as required)
// // // //         if (activeSection && activeSection !== section) {
// // // //           activeSection.classList.remove("active");
// // // //           animateOut(activeSection);
// // // //         }

// // // //         if (isAlreadyActive) {
// // // //           activeSection.classList.remove("active");
// // // //           activeSection = null;
// // // //           gsap.to(shoeSections, {
// // // //             width: "25%",
// // // //             duration,
// // // //             ease: customEase,
// // // //           });
// // // //           animateOut(section);
// // // //           return;
// // // //         }

// // // //         activeSection = section;
// // // //         section.classList.add("active");

// // // //         gsap.timeline()
// // // //           .to(
// // // //             shoeSections,
// // // //             {
// // // //               width: (i, target) =>
// // // //                 target === section ? expanded.width : otherCollapsed.width,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             0
// // // //           )
// // // //           .add(animateIn(section), 0.1);
// // // //       }
// // // //       // *** CHANGE ENDS HERE ***
// // // //     };

// // // //     setInitialStates();

// // // //     // *** CHANGE ***: Removed the initial animation block for mobile.
// // // //     // Products on mobile will now start in a collapsed state.

// // // //     shoeSections.forEach((section) =>
// // // //       section.addEventListener("click", handleCardClick)
// // // //     );

// // // //     const handleResize = () => {
// // // //       if (activeSection) {
// // // //         activeSection.classList.remove("active");
// // // //         activeSection = null;
// // // //       }
// // // //       // Reset all states on resize
// // // //       setInitialStates();
// // // //       // *** CHANGE ***: Also removed the initial animation from here.
// // // //     };

// // // //     window.addEventListener("resize", handleResize);

// // // //     return () => {
// // // //       shoeSections.forEach((section) =>
// // // //         section.removeEventListener("click", handleCardClick)
// // // //       );
// // // //       window.removeEventListener("resize", handleResize);
// // // //     };
// // // //   }, [products]);

// // // //   // The JSX part remains unchanged
// // // //   return (
// // // //     <div className="h-screen w-full font-sans bg-black overflow-hidden">
// // // //       <div className="products-container flex h-full w-auto overflow-x-auto snap-x snap-mandatory lg:overflow-x-hidden lg:w-full">
// // // //         {products.map((product, index) => {
// // // //           const bgText = product.name.split(" ")[0].toUpperCase();
// // // //           return (
// // // //             <div
// // // //               key={`${product.id}-${index}`}
// // // //               className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full w-screen flex-shrink-0 snap-start lg:w-1/4"
// // // //               data-shoe={product.id}
// // // //               style={{ backgroundColor: product.bgColor }}
// // // //             >
// // // //               <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // // //                 {[...Array(3)].map((_, idx) => (
// // // //                   <div key={idx} className="nike-bg-text">
// // // //                     <span
// // // //                       className={`font-extrabold tracking-wider leading-none ${
// // // //                         idx === 1 ? "text-white/80" : "text-transparent"
// // // //                       }`}
// // // //                       style={{
// // // //                         fontSize: "clamp(1rem, 12vw, 8rem)",
// // // //                         ...(idx !== 1
// // // //                           ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" }
// // // //                           : {}),
// // // //                       }}
// // // //                     >
// // // //                       {bgText}
// // // //                     </span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain"
// // // //                   style={{
// // // //                     filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))",
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // // //                 <h6
// // // //                   className="text-sm font-semibold leading-tight"
// // // //                   style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
// // // //                 >
// // // //                   {product.name}
// // // //                 </h6>
// // // //                 <p
// // // //                   className="text-xs text-white/80 mb-1"
// // // //                   style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
// // // //                 >
// // // //                   {product.variant}
// // // //                 </p>
// // // //                 <p
// // // //                   className="text-[10px] text-white/60 max-w-xs mx-auto mb-1"
// // // //                   style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.description}
// // // //                 </p>
// // // //                 <div
// // // //                   className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto"
// // // //                   style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.price}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TopProduct;

// // // // import React, { useEffect } from "react";
// // // // import { gsap } from "gsap";
// // // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // // const TopProduct = () => {
// // // //   const products = [
// // // //     {
// // // //       id: "product-red",
// // // //       name: "DIESEL",
// // // //       variant: "Chicago",
// // // //       description:
// // // //         "One of the most iconic sneakers in history, originally released in 1985. Its bold red, black, and white colorway symbolizes Michael Jordan's legacy with the Chicago Bulls.",
// // // //       price: "$170",
// // // //       image: "/product-2.png",
// // // //       bgColor: "#124a8f",
// // // //     },
// // // //     {
// // // //       id: "product-blue",
// // // //       name: "ISO GOLD",
// // // //       variant: "White '07",
// // // //       description:
// // // //         "The legend lives on in this classic basketball shoe. It blends iconic court style with a crisp, clean look that never gets old.",
// // // //       price: "$110",
// // // //       image: "/product-3.png",
// // // //       bgColor: "#a0243c",
// // // //     },
// // // //     {
// // // //       id: "product-pink",
// // // //       name: "RYS",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-4.png",
// // // //       bgColor: "#c8920e",
// // // //     },
// // // //     {
// // // //       id: "product-green",
// // // //       name: "BATCH",
// // // //       variant: "Panda",
// // // //       description:
// // // //         "A timeless silhouette that's become a staple in streetwear. The black and white 'Panda' colorway is a modern classic.",
// // // //       price: "$115",
// // // //       image: "/product-1.png",
// // // //       bgColor: "#0f4e34",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // // //     const duration = 0.4;

// // // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // // //     let activeSection = null;

// // // //     const getResponsiveSettings = () => {
// // // //       const isMobile = window.innerWidth < 1024;
// // // //       const totalSections = shoeSections.length;
// // // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // // //       const collapsedWidth = isMobile
// // // //         ? "100vw"
// // // //         : `${(100 - 45) / (totalSections - 1)}%`;

// // // //       return {
// // // //         isMobile,
// // // //         expanded: { width: expandedWidth },
// // // //         collapsed: { width: isMobile ? "100vw" : "25%" },
// // // //         otherCollapsed: { width: collapsedWidth },
// // // //         image: {
// // // //           collapsedScale: 0.7,
// // // //           expandedScale: 1,
// // // //           yOffset: 0,
// // // //         },
// // // //       };
// // // //     };

// // // //     const setInitialStates = () => {
// // // //       gsap.set(shoeSections, {
// // // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // // //         flexShrink: 0,
// // // //         scrollSnapAlign: window.innerWidth < 1024 ? "start" : "none",
// // // //       });

// // // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });

// // // //       gsap.set(".shoe-image", {
// // // //         rotation: -25,
// // // //         scale: getResponsiveSettings().image.collapsedScale,
// // // //         y: 0,
// // // //         transformOrigin: "center center",
// // // //       });
      
// // // //       // GRADIENT CHANGE: Set initial state for the gradient effect
// // // //       gsap.set(".radial-gradient-effect", {
// // // //         scaleX: 0.3,
// // // //         scaleY: 1.5,
// // // //         opacity: 0.8,
// // // //         transformOrigin: "center center",
// // // //       });
// // // //     };

// // // //     const handleCardClick = (e) => {
// // // //       const section = e.currentTarget;
// // // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // // //       const isAlreadyActive = section.classList.contains("active");

// // // //       const animateIn = (target) => {
// // // //         gsap
// // // //           .timeline()
// // // //           // GRADIENT CHANGE: Animate the gradient to its expanded state
// // // //           .to(target.querySelector(".radial-gradient-effect"), {
// // // //               scaleX: 1.5,
// // // //               scaleY: 1.5,
// // // //               opacity: 1,
// // // //               duration,
// // // //               ease: customEase,
// // // //           }, 0)
// // // //           .to(target.querySelector(".shoe-image"), {
// // // //             rotation: 0,
// // // //             scale: image.expandedScale,
// // // //             y: image.yOffset,
// // // //             duration,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             target.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.8,
// // // //               stagger: 0.05,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           )
// // // //           .to(
// // // //             target.querySelector(".shoe-content"),
// // // //             {
// // // //               opacity: 1,
// // // //               y: 0,
// // // //               duration: duration * 0.9,
// // // //               ease: customEase,
// // // //             },
// // // //             "<0.1"
// // // //           );
// // // //       };

// // // //       const animateOut = (target) => {
// // // //         gsap
// // // //           .timeline()
// // // //           // GRADIENT CHANGE: Animate the gradient back to its collapsed state
// // // //           .to(target.querySelector(".radial-gradient-effect"), {
// // // //             scaleX: 0.3,
// // // //             scaleY: 1.5,
// // // //             opacity: 0.8,
// // // //             duration: duration * 0.6,
// // // //             ease: customEase,
// // // //           }, 0)
// // // //           .to(target.querySelector(".shoe-content"), {
// // // //             opacity: 0,
// // // //             y: 30,
// // // //             duration: duration * 0.6,
// // // //             ease: customEase,
// // // //           })
// // // //           .to(
// // // //             target.querySelectorAll(".nike-bg-text"),
// // // //             {
// // // //               opacity: 0,
// // // //               y: 20,
// // // //               duration: duration * 0.6,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           )
// // // //           .to(
// // // //             target.querySelector(".shoe-image"),
// // // //             {
// // // //               rotation: -25,
// // // //               scale: image.collapsedScale,
// // // //               y: 0,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             "<"
// // // //           );
// // // //       };

// // // //       if (isMobile) {
// // // //         if (isAlreadyActive) {
// // // //           section.classList.remove("active");
// // // //           animateOut(section);
// // // //           return;
// // // //         }

// // // //         shoeSections.forEach(s => {
// // // //           if (s.classList.contains("active")) {
// // // //             s.classList.remove("active");
// // // //             animateOut(s);
// // // //           }
// // // //         });

// // // //         section.classList.add("active");
// // // //         animateIn(section);

// // // //       } else {
// // // //         if (activeSection && activeSection !== section) {
// // // //           activeSection.classList.remove("active");
// // // //           animateOut(activeSection);
// // // //         }

// // // //         if (isAlreadyActive) {
// // // //           activeSection.classList.remove("active");
// // // //           activeSection = null;
// // // //           gsap.to(shoeSections, {
// // // //             width: "25%",
// // // //             duration,
// // // //             ease: customEase,
// // // //           });
// // // //           animateOut(section);
// // // //           return;
// // // //         }

// // // //         activeSection = section;
// // // //         section.classList.add("active");

// // // //         gsap.timeline()
// // // //           .to(
// // // //             shoeSections,
// // // //             {
// // // //               width: (i, target) =>
// // // //                 target === section ? expanded.width : otherCollapsed.width,
// // // //               duration,
// // // //               ease: customEase,
// // // //             },
// // // //             0
// // // //           )
// // // //           .add(animateIn(section), 0.1);
// // // //       }
// // // //     };

// // // //     setInitialStates();

// // // //     shoeSections.forEach((section) =>
// // // //       section.addEventListener("click", handleCardClick)
// // // //     );

// // // //     const handleResize = () => {
// // // //       if (activeSection) {
// // // //         activeSection.classList.remove("active");
// // // //         activeSection = null;
// // // //       }
// // // //       setInitialStates();
// // // //     };

// // // //     window.addEventListener("resize", handleResize);

// // // //     return () => {
// // // //       shoeSections.forEach((section) =>
// // // //         section.removeEventListener("click", handleCardClick)
// // // //       );
// // // //       window.removeEventListener("resize", handleResize);
// // // //     };
// // // //   }, [products]);

// // // //   return (
// // // //     <div className="h-screen w-full font-sans bg-black overflow-hidden">
// // // //       <style>{`
// // // //         .radial-gradient-effect {
// // // //           position: absolute;
// // // //           top: 0;
// // // //           left: 0;
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           pointer-events: none;
// // // //           z-index: 0;
// // // //         }
// // // //       `}</style>
// // // //       <div className="products-container flex h-full w-auto overflow-x-auto snap-x snap-mandatory lg:overflow-x-hidden lg:w-full">
// // // //         {products.map((product, index) => {
// // // //           const bgText = product.name.split(" ")[0].toUpperCase();
// // // //           return (
// // // //             <div
// // // //               key={`${product.id}-${index}`}
// // // //               className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full w-screen flex-shrink-0 snap-start lg:w-1/4"
// // // //               data-shoe={product.id}
// // // //               style={{ backgroundColor: product.bgColor }}
// // // //             >
// // // //               {/* GRADIENT CHANGE: Added div for the gradient effect */}
// // // //               <div 
// // // //                 className="radial-gradient-effect"
// // // //                 style={{
// // // //                   background: `radial-gradient(circle at 50% 50%, white 0%, transparent 60%)`,
// // // //                 }}
// // // //               ></div>

// // // //               <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // // //                 {[...Array(3)].map((_, idx) => (
// // // //                   <div key={idx} className="nike-bg-text">
// // // //                     <span
// // // //                       className={`font-extrabold tracking-wider leading-none ${
// // // //                         idx === 1 ? "text-white/80" : "text-transparent"
// // // //                       }`}
// // // //                       style={{
// // // //                         fontSize: "clamp(1rem, 12vw, 8rem)",
// // // //                         ...(idx !== 1
// // // //                           ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" }
// // // //                           : {}),
// // // //                       }}
// // // //                     >
// // // //                       {bgText}
// // // //                     </span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain"
// // // //                   style={{
// // // //                     filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))",
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // // //                 <h6
// // // //                   className="text-sm font-semibold leading-tight"
// // // //                   style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
// // // //                 >
// // // //                   {product.name}
// // // //                 </h6>
// // // //                 <p
// // // //                   className="text-xs text-white/80 mb-1"
// // // //                   style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
// // // //                 >
// // // //                   {product.variant}
// // // //                 </p>
// // // //                 <p
// // // //                   className="text-[10px] text-white/60 max-w-xs mx-auto mb-1"
// // // //                   style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.description}
// // // //                 </p>
// // // //                 <div
// // // //                   className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto"
// // // //                   style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
// // // //                 >
// // // //                   {product.price}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TopProduct;

// // // import React, { useEffect } from "react";
// // // import { gsap } from "gsap";
// // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: "product-red",
// // //       name: "DIESEL",
// // //       variant: "Chicago",
// // //       description:
// // //         "One of the most iconic sneakers in history, originally released in 1985.",
// // //       price: "$170",
// // //       image: "/product-2.png",
// // //       bgColor: "#124a8f",
// // //     },
// // //     {
// // //       id: "product-blue",
// // //       name: "ISO GOLD",
// // //       variant: "White '07",
// // //       description:
// // //         "The legend lives on in this classic basketball shoe.",
// // //       price: "$110",
// // //       image: "/product-3.png",
// // //       bgColor: "#a0243c",
// // //     },
// // //     {
// // //       id: "product-pink",
// // //       name: "RYS",
// // //       variant: "Panda",
// // //       description:
// // //         "A timeless silhouette that's become a staple in streetwear.",
// // //       price: "$115",
// // //       image: "/product-4.png",
// // //       bgColor: "#c8920e",
// // //     },
// // //     {
// // //       id: "product-green",
// // //       name: "BATCH",
// // //       variant: "Panda",
// // //       description:
// // //         "A modern classic colorway on a timeless silhouette.",
// // //       price: "$115",
// // //       image: "/product-1.png",
// // //       bgColor: "#0f4e34",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // //     const duration = 0.4;

// // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // //     let activeSection = null;

// // //     const getResponsiveSettings = () => {
// // //       const isMobile = window.innerWidth < 1024;
// // //       const totalSections = shoeSections.length;
// // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // //       const collapsedWidth = isMobile
// // //         ? "100vw"
// // //         : `${(100 - 45) / (totalSections - 1)}%`;

// // //       return {
// // //         isMobile,
// // //         expanded: { width: expandedWidth },
// // //         otherCollapsed: { width: collapsedWidth },
// // //         image: {
// // //           collapsedScale: 0.7,
// // //           expandedScale: 1,
// // //         },
// // //       };
// // //     };

// // //     const setInitialStates = () => {
// // //       gsap.set(shoeSections, {
// // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // //         flexShrink: 0,
// // //       });

// // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });

// // //       gsap.set(".shoe-image", {
// // //         rotation: -25,
// // //         scale: getResponsiveSettings().image.collapsedScale,
// // //         transformOrigin: "center center",
// // //       });

// // //       // ### GRADIENT CHANGE: Set initial state to the EGG SHAPE ###
// // //       gsap.set(".radial-gradient-effect", {
// // //         scaleX: 0.7,      // अंडाकार बनाने के लिए चौड़ाई कम
// // //         scaleY: 1.2,      // अंडाकार बनाने के लिए ऊंचाई ज़्यादा
// // //         opacity: 0.5,     // हल्का इफ़ेक्ट
// // //         transformOrigin: "center center",
// // //       });
// // //     };

// // //     const handleCardClick = (e) => {
// // //       const section = e.currentTarget;
// // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // //       const isAlreadyActive = section.classList.contains("active");

// // //       const animateIn = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), {
// // //             scale: 1.4,     // फैलकर लगभग गोलाकार बनेगा
// // //             opacity: 0.7,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelector(".shoe-image"), {
// // //             rotation: 0,
// // //             scale: image.expandedScale,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), {
// // //             opacity: 1,
// // //             y: 0,
// // //             duration: duration * 0.8,
// // //             stagger: 0.05,
// // //             ease: customEase,
// // //           }, "<0.1")
// // //           .to(target.querySelector(".shoe-content"), {
// // //             opacity: 1,
// // //             y: 0,
// // //             duration: duration * 0.9,
// // //             ease: customEase,
// // //           }, "<0.1");
// // //       };

// // //       const animateOut = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), {
// // //             scaleX: 0.7,      // वापस अंडाकार की चौड़ाई में
// // //             scaleY: 1.2,      // वापस अंडाकार की ऊंचाई में
// // //             opacity: 0.5,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelector(".shoe-content"), {
// // //             opacity: 0,
// // //             y: 30,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), {
// // //             opacity: 0,
// // //             y: 20,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, "<")
// // //           .to(target.querySelector(".shoe-image"), {
// // //             rotation: -25,
// // //             scale: image.collapsedScale,
// // //             duration,
// // //             ease: customEase,
// // //           }, "<");
// // //       };

// // //       if (isMobile) {
// // //         if (isAlreadyActive) {
// // //           section.classList.remove("active");
// // //           animateOut(section);
// // //           return;
// // //         }
// // //         shoeSections.forEach(s => {
// // //           if (s.classList.contains("active")) {
// // //             s.classList.remove("active");
// // //             animateOut(s);
// // //           }
// // //         });
// // //         section.classList.add("active");
// // //         animateIn(section);
// // //       } else {
// // //         if (activeSection && activeSection !== section) {
// // //           activeSection.classList.remove("active");
// // //           animateOut(activeSection);
// // //         }

// // //         if (isAlreadyActive) {
// // //           activeSection.classList.remove("active");
// // //           activeSection = null;
// // //           gsap.to(shoeSections, {
// // //             width: "25%",
// // //             duration,
// // //             ease: customEase,
// // //           });
// // //           animateOut(section);
// // //           return;
// // //         }

// // //         activeSection = section;
// // //         section.classList.add("active");

// // //         gsap.timeline()
// // //           .to(shoeSections, {
// // //             width: (i, target) =>
// // //               target === section ? expanded.width : otherCollapsed.width,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .add(animateIn(section), 0.1);
// // //       }
// // //     };

// // //     setInitialStates();
// // //     shoeSections.forEach((section) =>
// // //       section.addEventListener("click", handleCardClick)
// // //     );

// // //     const handleResize = () => {
// // //       if (activeSection) {
// // //         activeSection.classList.remove("active");
// // //         activeSection = null;
// // //       }
// // //       setInitialStates();
// // //     };

// // //     window.addEventListener("resize", handleResize);

// // //     return () => {
// // //       shoeSections.forEach((section) =>
// // //         section.removeEventListener("click", handleCardClick)
// // //       );
// // //       window.removeEventListener("resize", handleResize);
// // //     };
// // //   }, [products]);

// // //   return (
// // //     <div className="h-screen w-full font-sans bg-black overflow-hidden">
// // //       <style>{`
// // //         .radial-gradient-effect {
// // //           position: absolute;
// // //           top: 0; left: 0;
// // //           width: 100%; height: 100%;
// // //           pointer-events: none;
// // //           z-index: 0;
// // //         }
// // //       `}</style>
// // //       <div className="products-container flex h-full w-full">
// // //         {products.map((product) => {
// // //           const bgText = product.name.split(" ")[0].toUpperCase();
// // //           return (
// // //             <div
// // //               key={product.id}
// // //               className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full"
// // //               data-shoe={product.id}
// // //               style={{ backgroundColor: product.bgColor }}
// // //             >
// // //               <div
// // //                 className="radial-gradient-effect"
// // //                 style={{
// // //                   background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)`,
// // //                 }}
// // //               ></div>

// // //               <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // //                 {[...Array(3)].map((_, idx) => (
// // //                   <div key={idx} className="nike-bg-text">
// // //                     <span
// // //                       className={`font-extrabold tracking-wider leading-none ${
// // //                         idx === 1 ? "text-white/80" : "text-transparent"
// // //                       }`}
// // //                       style={{
// // //                         fontSize: "clamp(1rem, 12vw, 8rem)",
// // //                         ...(idx !== 1
// // //                           ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" }
// // //                           : {}),
// // //                       }}
// // //                     >
// // //                       {bgText}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // //                 <img
// // //                   src={product.image}
// // //                   alt={product.name}
// // //                   className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain"
// // //                   style={{
// // //                     filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))",
// // //                   }}
// // //                 />
// // //               </div>
// // //               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // //                 <h6
// // //                   className="text-sm font-semibold leading-tight"
// // //                   style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
// // //                 >
// // //                   {product.name}
// // //                 </h6>
// // //                 <p
// // //                   className="text-xs text-white/80 mb-1"
// // //                   style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
// // //                 >
// // //                   {product.variant}
// // //                 </p>
// // //                 <p
// // //                   className="text-[10px] text-white/60 max-w-xs mx-auto mb-1"
// // //                   style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}
// // //                 >
// // //                   {product.description}
// // //                 </p>
// // //                 <div
// // //                   className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto"
// // //                   style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
// // //                 >
// // //                   {product.price}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TopProduct; 

// // // import React, { useEffect } from "react";
// // // import { gsap } from "gsap";
// // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: "product-red",
// // //       name: "BATCH",
// // //       variant: "Chicago",
// // //       description:
// // //         "One of the most iconic sneakers in history, originally released in 1985.",
// // //       price: "$170",
// // //       image: "/product-1.png",
// // //       bgColor: "#124a8f",
// // //     },
// // //     {
// // //       id: "product-blue",
// // //       name: "DIESEL",
// // //       variant: "White '07",
// // //       description:
// // //         "The legend lives on in this classic basketball shoe.",
// // //       price: "$110",
// // //       image: "/product-2.png",
// // //       bgColor: "#a0243c",
// // //     },
// // //     {
// // //       id: "product-pink",
// // //       name: "ISO GOLD",
// // //       variant: "Panda",
// // //       description:
// // //         "A timeless silhouette that's become a staple in streetwear.",
// // //       price: "$115",
// // //       image: "/product-3.png",
// // //       bgColor: "#c8920e",
// // //     },
// // //     {
// // //       id: "product-green",
// // //       name: "RVS",
// // //       variant: "Panda",
// // //       description:
// // //         "A modern classic colorway on a timeless silhouette.",
// // //       price: "$115",
// // //       image: "/product-4.png",
// // //       bgColor: "#0f4e34",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // //     const duration = 0.4;

// // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // //     let activeSection = null;

// // //     const getResponsiveSettings = () => {
// // //       const isMobile = window.innerWidth < 1024;
// // //       const totalSections = shoeSections.length;
// // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // //       const collapsedWidth = isMobile
// // //         ? "100vw"
// // //         : `${(100 - 45) / (totalSections - 1)}%`;

// // //       return {
// // //         isMobile,
// // //         expanded: { width: expandedWidth },
// // //         otherCollapsed: { width: collapsedWidth },
// // //         image: {
// // //           collapsedScale: 0.7,
// // //           expandedScale: 1,
// // //         },
// // //       };
// // //     };

// // //     const setInitialStates = () => {
// // //       gsap.set(shoeSections, {
// // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // //         flexShrink: 0,
// // //       });

// // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });

// // //       gsap.set(".shoe-image", {
// // //         rotation: -25,
// // //         scale: getResponsiveSettings().image.collapsedScale,
// // //         transformOrigin: "center center",
// // //       });

// // //       // ### GRADIENT CHANGE: Set initial state to the EGG SHAPE ###
// // //       gsap.set(".radial-gradient-effect", {
// // //         scaleX: 0.7,      // अंडाकार बनाने के लिए चौड़ाई कम
// // //         scaleY: 1.2,      // अंडाकार बनाने के लिए ऊंचाई ज़्यादा
// // //         opacity: 0.5,     // हल्का इफ़ेक्ट
// // //         transformOrigin: "center center",
// // //       });
// // //     };

// // //     const handleCardClick = (e) => {
// // //       const section = e.currentTarget;
// // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // //       const isAlreadyActive = section.classList.contains("active");

// // //       const animateIn = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), {
// // //             scale: 1.4,     // फैलकर लगभग गोलाकार बनेगा
// // //             opacity: 0.7,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelector(".shoe-image"), {
// // //             rotation: 0,
// // //             scale: image.expandedScale,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), {
// // //             opacity: 1,
// // //             y: 0,
// // //             duration: duration * 0.8,
// // //             stagger: 0.05,
// // //             ease: customEase,
// // //           }, "<0.1")
// // //           .to(target.querySelector(".shoe-content"), {
// // //             opacity: 1,
// // //             y: 0,
// // //             duration: duration * 0.9,
// // //             ease: customEase,
// // //           }, "<0.1");
// // //       };

// // //       const animateOut = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), {
// // //             scaleX: 0.7,      // वापस अंडाकार की चौड़ाई में
// // //             scaleY: 1.2,      // वापस अंडाकार की ऊंचाई में
// // //             opacity: 0.5,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelector(".shoe-content"), {
// // //             opacity: 0,
// // //             y: 30,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), {
// // //             opacity: 0,
// // //             y: 20,
// // //             duration: duration * 0.6,
// // //             ease: customEase,
// // //           }, "<")
// // //           .to(target.querySelector(".shoe-image"), {
// // //             rotation: -25,
// // //             scale: image.collapsedScale,
// // //             duration,
// // //             ease: customEase,
// // //           }, "<");
// // //       };

// // //       if (isMobile) {
// // //         if (isAlreadyActive) {
// // //           section.classList.remove("active");
// // //           animateOut(section);
// // //           return;
// // //         }
// // //         shoeSections.forEach(s => {
// // //           if (s.classList.contains("active")) {
// // //             s.classList.remove("active");
// // //             animateOut(s);
// // //           }
// // //         });
// // //         section.classList.add("active");
// // //         animateIn(section);
// // //       } else {
// // //         if (activeSection && activeSection !== section) {
// // //           activeSection.classList.remove("active");
// // //           animateOut(activeSection);
// // //         }

// // //         if (isAlreadyActive) {
// // //           activeSection.classList.remove("active");
// // //           activeSection = null;
// // //           gsap.to(shoeSections, {
// // //             width: "25%",
// // //             duration,
// // //             ease: customEase,
// // //           });
// // //           animateOut(section);
// // //           return;
// // //         }

// // //         activeSection = section;
// // //         section.classList.add("active");

// // //         gsap.timeline()
// // //           .to(shoeSections, {
// // //             width: (i, target) =>
// // //               target === section ? expanded.width : otherCollapsed.width,
// // //             duration,
// // //             ease: customEase,
// // //           }, 0)
// // //           .add(animateIn(section), 0.1);
// // //       }
// // //     };

// // //     setInitialStates();
// // //     shoeSections.forEach((section) =>
// // //       section.addEventListener("click", handleCardClick)
// // //     );

// // //     const handleResize = () => {
// // //       if (activeSection) {
// // //         activeSection.classList.remove("active");
// // //         activeSection = null;
// // //       }
// // //       setInitialStates();
// // //     };

// // //     window.addEventListener("resize", handleResize);

// // //     return () => {
// // //       shoeSections.forEach((section) =>
// // //         section.removeEventListener("click", handleCardClick)
// // //       );
// // //       window.removeEventListener("resize", handleResize);
// // //     };
// // //   }, []);

// // //   return (
// // //     <section id="top-product-section">
// // //     <div  className="h-screen w-full font-sans bg-black overflow-hidden relative">
// // //       {/* Vignette effect overlay */}
// // //       <div
// // //         className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
// // //         style={{
// // //           background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
// // //         }}
// // //       ></div>

// // //       <style>{`
// // //         .radial-gradient-effect {
// // //           position: absolute;
// // //           top: 0; left: 0;
// // //           width: 100%; height: 100%;
// // //           pointer-events: none;
// // //           z-index: 0;
// // //         }
// // //       `}</style>

// // //       <div className="products-container flex h-full w-full">
// // //         {products.map((product) => {
// // //           const bgText = product.name.split(" ")[0].toUpperCase();
// // //           return (
// // //             <div
// // //               key={product.id}
// // //               className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full"
// // //               data-shoe={product.id}
// // //               style={{ backgroundColor: product.bgColor }}
// // //             >
// // //               <div
// // //                 className="radial-gradient-effect"
// // //                 style={{
// // //                   background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)`,
// // //                 }}
// // //               ></div>

// // //               <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // //                 {[...Array(3)].map((_, idx) => (
// // //                   <div key={idx} className="nike-bg-text">
// // //                     <span
// // //                       className={`font-extrabold tracking-wider leading-none ${
// // //                         idx === 1 ? "text-white/80" : "text-transparent"
// // //                       }`}
// // //                       style={{
// // //                         fontSize: "clamp(1rem, 12vw, 8rem)",
// // //                         ...(idx !== 1
// // //                           ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" }
// // //                           : {}),
// // //                       }}
// // //                     >
// // //                       {bgText}
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // //                 <img
// // //                   src={product.image}
// // //                   alt={product.name}
// // //                   className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain"
// // //                   style={{
// // //                     filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))",
// // //                   }}
// // //                 />
// // //               </div>
// // //               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // //                 <h6
// // //                   className="text-sm font-semibold leading-tight"
// // //                   style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
// // //                 >
// // //                   {product.name}
// // //                 </h6>
// // //                 <p
// // //                   className="text-xs text-white/80 mb-1"
// // //                   style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
// // //                 >
// // //                   {product.variant}
// // //                 </p>
// // //                 <p
// // //                   className="text-[10px] text-white/60 max-w-xs mx-auto mb-1"
// // //                   style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}
// // //                 >
// // //                   {product.description}
// // //                 </p>
// // //                 <div
// // //                   className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto"
// // //                   style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
// // //                 >
// // //                   {product.price}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //     </section>
// // //   );
// // // };

// // // export default TopProduct;

// // // import React, { useEffect, useRef, useState, useCallback } from "react"; // बदला हुआ: useRef, useState, useCallback जोड़ा गया
// // // import { gsap } from "gsap";
// // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: "product-red",
// // //       name: "BATCH",
// // //       variant: "Chicago",
// // //       description: "One of the most iconic sneakers in history, originally released in 1985.",
// // //       price: "$170",
// // //       image: "/product-1.png",
// // //       bgColor: "#124a8f",
// // //     },
// // //     {
// // //       id: "product-blue",
// // //       name: "DIESEL",
// // //       variant: "White '07",
// // //       description: "The legend lives on in this classic basketball shoe.",
// // //       price: "$110",
// // //       image: "/product-2.png",
// // //       bgColor: "#a0243c",
// // //     },
// // //     {
// // //       id: "product-pink",
// // //       name: "ISO GOLD",
// // //       variant: "Panda",
// // //       description: "A timeless silhouette that's become a staple in streetwear.",
// // //       price: "$115",
// // //       image: "/product-3.png",
// // //       bgColor: "#c8920e",
// // //     },
// // //     {
// // //       id: "product-green",
// // //       name: "RVS",
// // //       variant: "Panda",
// // //       description: "A modern classic colorway on a timeless silhouette.",
// // //       price: "$115",
// // //       image: "/product-4.png",
// // //       bgColor: "#0f4e34",
// // //     },
// // //   ];

// // //   // ==========================================================
// // //   // ===== नया कोड यहाँ से शुरू (New Code Starts Here) =====
// // //   // ==========================================================
// // //   const sectionRef = useRef(null);
// // //   const isAnimating = useRef(false);

// // //   const goToSection = useCallback((targetElement) => {
// // //     if (!targetElement || isAnimating.current) return;

// // //     isAnimating.current = true;
// // //     gsap.to(window, {
// // //       scrollTo: { y: targetElement, autoKill: false },
// // //       duration: 1,
// // //       ease: "power2.inOut",
// // //       onComplete: () => {
// // //         // एनिमेशन पूरा होने के बाद थोड़ी देर रुकें
// // //         setTimeout(() => {
// // //           isAnimating.current = false;
// // //         }, 300);
// // //       },
// // //     });
// // //   }, []);

// // //   useEffect(() => {
// // //     const section = sectionRef.current;
// // //     if (!section) return;
    
// // //     // यह फंक्शन स्क्रॉल इवेंट को हैंडल करेगा
// // //     const handleWheel = (e) => {
// // //       e.preventDefault();
// // //       if (isAnimating.current) return;
      
// // //       const direction = e.deltaY > 0 ? 1 : -1; // 1 = नीचे, -1 = ऊपर

// // //       if (direction === 1) {
// // //         // अगले सेक्शन पर जाएं
// // //         goToSection(section.nextElementSibling);
// // //       } else {
// // //         // पिछले सेक्शन पर जाएं
// // //         goToSection(section.previousElementSibling);
// // //       }
// // //     };

// // //     // ScrollTrigger यह पता लगाएगा कि यह सेक्शन स्क्रीन पर है या नहीं
// // //     const trigger = ScrollTrigger.create({
// // //       trigger: section,
// // //       start: "top top",
// // //       end: "bottom bottom",
// // //       // जब यह सेक्शन एक्टिव हो, तो स्क्रॉल को रोकें
// // //       onEnter: () => {
// // //         gsap.to(window, {scrollTo: {y: section}, duration: 0.5});
// // //         window.addEventListener("wheel", handleWheel, { passive: false });
// // //       },
// // //       onLeave: () => {
// // //         window.removeEventListener("wheel", handleWheel);
// // //       },
// // //       onEnterBack: () => {
// // //         gsap.to(window, {scrollTo: {y: section}, duration: 0.5});
// // //         window.addEventListener("wheel", handleWheel, { passive: false });
// // //       },
// // //       onLeaveBack: () => {
// // //         window.removeEventListener("wheel", handleWheel);
// // //       },
// // //     });

// // //     return () => {
// // //       // कंपोनेंट हटने पर लिस्नर और ट्रिगर को साफ करें
// // //       window.removeEventListener("wheel", handleWheel);
// // //       trigger.kill();
// // //     };
// // //   }, [goToSection]);
// // //   // ==========================================================
// // //   // ===== नया कोड यहाँ खत्म (New Code Ends Here) =====
// // //   // ==========================================================


// // //   // ===== आपका मौजूदा कोड (इसमें कोई बदलाव नहीं) =====
// // //   useEffect(() => {
// // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // //     const duration = 0.4;
// // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // //     let activeSection = null;

// // //     const getResponsiveSettings = () => {
// // //       const isMobile = window.innerWidth < 1024;
// // //       const totalSections = shoeSections.length;
// // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // //       const collapsedWidth = isMobile ? "100vw" : `${(100 - 45) / (totalSections - 1)}%`;
// // //       return {
// // //         isMobile,
// // //         expanded: { width: expandedWidth },
// // //         otherCollapsed: { width: collapsedWidth },
// // //         image: { collapsedScale: 0.7, expandedScale: 1 },
// // //       };
// // //     };

// // //     const setInitialStates = () => {
// // //       gsap.set(shoeSections, {
// // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // //         flexShrink: 0,
// // //       });
// // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });
// // //       gsap.set(".shoe-image", { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, transformOrigin: "center center" });
// // //       gsap.set(".radial-gradient-effect", { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, transformOrigin: "center center" });
// // //     };

// // //     const handleCardClick = (e) => {
// // //       const section = e.currentTarget;
// // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // //       const isAlreadyActive = section.classList.contains("active");

// // //       const animateIn = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), { scale: 1.4, opacity: 0.7, duration, ease: customEase }, 0)
// // //           .to(target.querySelector(".shoe-image"), { rotation: 0, scale: image.expandedScale, duration, ease: customEase }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: duration * 0.8, stagger: 0.05, ease: customEase }, "<0.1")
// // //           .to(target.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: duration * 0.9, ease: customEase }, "<0.1");
// // //       };

// // //       const animateOut = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, duration: duration * 0.6, ease: customEase }, 0)
// // //           .to(target.querySelector(".shoe-content"), { opacity: 0, y: 30, duration: duration * 0.6, ease: customEase }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), { opacity: 0, y: 20, duration: duration * 0.6, ease: customEase }, "<")
// // //           .to(target.querySelector(".shoe-image"), { rotation: -25, scale: image.collapsedScale, duration, ease: customEase }, "<");
// // //       };

// // //       if (isMobile) {
// // //         if (isAlreadyActive) { section.classList.remove("active"); animateOut(section); return; }
// // //         shoeSections.forEach(s => { if (s.classList.contains("active")) { s.classList.remove("active"); animateOut(s); } });
// // //         section.classList.add("active");
// // //         animateIn(section);
// // //       } else {
// // //         if (activeSection && activeSection !== section) { activeSection.classList.remove("active"); animateOut(activeSection); }
// // //         if (isAlreadyActive) {
// // //           activeSection.classList.remove("active"); activeSection = null;
// // //           gsap.to(shoeSections, { width: "25%", duration, ease: customEase });
// // //           animateOut(section); return;
// // //         }
// // //         activeSection = section; section.classList.add("active");
// // //         gsap.timeline()
// // //           .to(shoeSections, { width: (i, target) => (target === section ? expanded.width : otherCollapsed.width), duration, ease: customEase }, 0)
// // //           .add(animateIn(section), 0.1);
// // //       }
// // //     };

// // //     setInitialStates();
// // //     shoeSections.forEach((section) => section.addEventListener("click", handleCardClick));
// // //     const handleResize = () => {
// // //       if (activeSection) { activeSection.classList.remove("active"); activeSection = null; }
// // //       setInitialStates();
// // //     };
// // //     window.addEventListener("resize", handleResize);

// // //     return () => {
// // //       shoeSections.forEach((section) => section.removeEventListener("click", handleCardClick));
// // //       window.removeEventListener("resize", handleResize);
// // //     };
// // //   }, []);

// // //   return (
// // //     // बदला हुआ: मुख्य सेक्शन में ref जोड़ा गया
// // //     <section id="top-product-section" ref={sectionRef}>
// // //       <div className="h-screen w-full font-sans bg-black overflow-hidden relative">
// // //         {/* Vignette effect overlay */}
// // //         <div
// // //           className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
// // //           style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}
// // //         ></div>
// // //         <style>{`
// // //           .radial-gradient-effect {
// // //             position: absolute; top: 0; left: 0;
// // //             width: 100%; height: 100%;
// // //             pointer-events: none; z-index: 0;
// // //           }
// // //         `}</style>
// // //         <div className="products-container flex h-full w-full">
// // //           {products.map((product) => {
// // //             const bgText = product.name.split(" ")[0].toUpperCase();
// // //             return (
// // //               <div
// // //                 key={product.id}
// // //                 className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full"
// // //                 data-shoe={product.id}
// // //                 style={{ backgroundColor: product.bgColor }}
// // //               >
// // //                 {/* ... बाकी का JSX बिना किसी बदलाव के ... */}
// // //                 <div className="radial-gradient-effect" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)` }}></div>
// // //                 <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // //                   {[...Array(3)].map((_, idx) => (
// // //                     <div key={idx} className="nike-bg-text">
// // //                       <span className={`font-extrabold tracking-wider leading-none ${idx === 1 ? "text-white/80" : "text-transparent"}`} style={{ fontSize: "clamp(1rem, 12vw, 8rem)", ...(idx !== 1 ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" } : {}), }}>
// // //                         {bgText}
// // //                       </span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // //                   <img src={product.image} alt={product.name} className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain" style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))" }} />
// // //                 </div>
// // //                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // //                   <h6 className="text-sm font-semibold leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{product.name}</h6>
// // //                   <p className="text-xs text-white/80 mb-1" style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}>{product.variant}</p>
// // //                   <p className="text-[10px] text-white/60 max-w-xs mx-auto mb-1" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}>{product.description}</p>
// // //                   <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{product.price}</div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TopProduct;

// // // import React, { useEffect, useRef, useState, useCallback } from "react";
// // // import { gsap } from "gsap";
// // // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // // const TopProduct = () => {
// // //   const products = [
// // //     { id: "product-red", name: "BATCH", variant: "Chicago", description: "One of the most iconic sneakers in history, originally released in 1985.", price: "$170", image: "/product-1.png", bgColor: "#124a8f" },
// // //     { id: "product-blue", name: "DIESEL", variant: "White '07", description: "The legend lives on in this classic basketball shoe.", price: "$110", image: "/product-2.png", bgColor: "#a0243c" },
// // //     { id: "product-pink", name: "ISO GOLD", variant: "Panda", description: "A timeless silhouette that's become a staple in streetwear.", price: "$115", image: "/product-3.png", bgColor: "#c8920e" },
// // //     { id: "product-green", name: "RVS", variant: "Panda", description: "A modern classic colorway on a timeless silhouette.", price: "$115", image: "/product-4.png", bgColor: "#0f4e34" },
// // //   ];

// // //   const sectionRef = useRef(null);
// // //   const isAnimating = useRef(false);

// // //   // START: बदला हुआ कोड (हेडर के लिए नया useEffect)
// // //   useEffect(() => {
// // //     const section = sectionRef.current;
// // //     if (!section) return;

// // //     // यह ScrollTrigger मॉनिटर करेगा कि सेक्शन कब पास हुआ
// // //     const trigger = ScrollTrigger.create({
// // //       trigger: section,
// // //       // जब सेक्शन का निचला हिस्सा (bottom) viewport के टॉप पर पहुंचे
// // //       start: "bottom top", 
      
// // //       // जब नीचे स्क्रॉल करते हुए सेक्शन viewport से निकल जाए
// // //       onEnter: () => {
// // //         // हेडर को 'light' (सफ़ेद) बनाने के लिए इवेंट भेजें
// // //         window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'light' } }));
// // //       },
      
// // //       // जब वापस ऊपर स्क्रॉल करते हुए सेक्शन viewport में आए
// // //       onLeaveBack: () => {
// // //         // हेडर को वापस 'transparent' बनाने के लिए इवेंट भेजें
// // //         window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'transparent' } }));
// // //       }
// // //     });

// // //     // कंपोनेंट हटने पर ScrollTrigger को साफ करें
// // //     return () => {
// // //       trigger.kill();
// // //     };
// // //   }, []);
// // //   // END: बदला हुआ कोड

// // //   const goToSection = useCallback((targetElement) => {
// // //     if (!targetElement || isAnimating.current) return;

// // //     isAnimating.current = true;
// // //     gsap.to(window, {
// // //       scrollTo: { y: targetElement, autoKill: false },
// // //       duration: 1,
// // //       ease: "power2.inOut",
// // //       onComplete: () => {
// // //         setTimeout(() => {
// // //           isAnimating.current = false;
// // //         }, 300);
// // //       },
// // //     });
// // //   }, []);

// // //   useEffect(() => {
// // //     const section = sectionRef.current;
// // //     if (!section) return;
    
// // //     const handleWheel = (e) => {
// // //       e.preventDefault();
// // //       if (isAnimating.current) return;
      
// // //       const direction = e.deltaY > 0 ? 1 : -1;

// // //       if (direction === 1) {
// // //         goToSection(section.nextElementSibling);
// // //       } else {
// // //         goToSection(section.previousElementSibling);
// // //       }
// // //     };

// // //     const trigger = ScrollTrigger.create({
// // //       trigger: section,
// // //       start: "top top",
// // //       end: "bottom bottom",
// // //       onEnter: () => {
// // //         gsap.to(window, {scrollTo: {y: section}, duration: 0.5});
// // //         window.addEventListener("wheel", handleWheel, { passive: false });
// // //       },
// // //       onLeave: () => {
// // //         window.removeEventListener("wheel", handleWheel);
// // //       },
// // //       onEnterBack: () => {
// // //         gsap.to(window, {scrollTo: {y: section}, duration: 0.5});
// // //         window.addEventListener("wheel", handleWheel, { passive: false });
// // //       },
// // //       onLeaveBack: () => {
// // //         window.removeEventListener("wheel", handleWheel);
// // //       },
// // //     });

// // //     return () => {
// // //       window.removeEventListener("wheel", handleWheel);
// // //       trigger.kill();
// // //     };
// // //   }, [goToSection]);

// // //   useEffect(() => {
// // //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// // //     const duration = 0.4;
// // //     const shoeSections = gsap.utils.toArray(".shoe-section");
// // //     let activeSection = null;

// // //     const getResponsiveSettings = () => {
// // //       const isMobile = window.innerWidth < 1024;
// // //       const totalSections = shoeSections.length;
// // //       const expandedWidth = isMobile ? "100vw" : "45%";
// // //       const collapsedWidth = isMobile ? "100vw" : `${(100 - 45) / (totalSections - 1)}%`;
// // //       return {
// // //         isMobile,
// // //         expanded: { width: expandedWidth },
// // //         otherCollapsed: { width: collapsedWidth },
// // //         image: { collapsedScale: 0.7, expandedScale: 1 },
// // //       };
// // //     };

// // //     const setInitialStates = () => {
// // //       gsap.set(shoeSections, {
// // //         width: window.innerWidth < 1024 ? "100vw" : "25%",
// // //         flexShrink: 0,
// // //       });
// // //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// // //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });
// // //       gsap.set(".shoe-image", { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, transformOrigin: "center center" });
// // //       gsap.set(".radial-gradient-effect", { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, transformOrigin: "center center" });
// // //     };

// // //     const handleCardClick = (e) => {
// // //       const section = e.currentTarget;
// // //       const { expanded, otherCollapsed, image, isMobile } = getResponsiveSettings();
// // //       const isAlreadyActive = section.classList.contains("active");

// // //       const animateIn = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), { scale: 1.4, opacity: 0.7, duration, ease: customEase }, 0)
// // //           .to(target.querySelector(".shoe-image"), { rotation: 0, scale: image.expandedScale, duration, ease: customEase }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: duration * 0.8, stagger: 0.05, ease: customEase }, "<0.1")
// // //           .to(target.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: duration * 0.9, ease: customEase }, "<0.1");
// // //       };

// // //       const animateOut = (target) => {
// // //         gsap.timeline()
// // //           .to(target.querySelector(".radial-gradient-effect"), { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, duration: duration * 0.6, ease: customEase }, 0)
// // //           .to(target.querySelector(".shoe-content"), { opacity: 0, y: 30, duration: duration * 0.6, ease: customEase }, 0)
// // //           .to(target.querySelectorAll(".nike-bg-text"), { opacity: 0, y: 20, duration: duration * 0.6, ease: customEase }, "<")
// // //           .to(target.querySelector(".shoe-image"), { rotation: -25, scale: image.collapsedScale, duration, ease: customEase }, "<");
// // //       };

// // //       if (isMobile) {
// // //         if (isAlreadyActive) { section.classList.remove("active"); animateOut(section); return; }
// // //         shoeSections.forEach(s => { if (s.classList.contains("active")) { s.classList.remove("active"); animateOut(s); } });
// // //         section.classList.add("active");
// // //         animateIn(section);
// // //       } else {
// // //         if (activeSection && activeSection !== section) { activeSection.classList.remove("active"); animateOut(activeSection); }
// // //         if (isAlreadyActive) {
// // //           activeSection.classList.remove("active"); activeSection = null;
// // //           gsap.to(shoeSections, { width: "25%", duration, ease: customEase });
// // //           animateOut(section); return;
// // //         }
// // //         activeSection = section; section.classList.add("active");
// // //         gsap.timeline()
// // //           .to(shoeSections, { width: (i, target) => (target === section ? expanded.width : otherCollapsed.width), duration, ease: customEase }, 0)
// // //           .add(animateIn(section), 0.1);
// // //       }
// // //     };

// // //     setInitialStates();
// // //     shoeSections.forEach((section) => section.addEventListener("click", handleCardClick));
// // //     const handleResize = () => {
// // //       if (activeSection) { activeSection.classList.remove("active"); activeSection = null; }
// // //       setInitialStates();
// // //     };
// // //     window.addEventListener("resize", handleResize);

// // //     return () => {
// // //       shoeSections.forEach((section) => section.removeEventListener("click", handleCardClick));
// // //       window.removeEventListener("resize", handleResize);
// // //     };
// // //   }, []);

// // //   return (
// // //     <section id="top-product-section" ref={sectionRef}>
// // //       <div className="h-screen w-full font-sans bg-black overflow-hidden relative">
// // //         <div
// // //           className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
// // //           style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}
// // //         ></div>
// // //         <style>{`
// // //           .radial-gradient-effect {
// // //             position: absolute; top: 0; left: 0;
// // //             width: 100%; height: 100%;
// // //             pointer-events: none; z-index: 0;
// // //           }
// // //         `}</style>
// // //         <div className="products-container flex h-full w-full">
// // //           {products.map((product) => {
// // //             const bgText = product.name.split(" ")[0].toUpperCase();
// // //             return (
// // //               <div
// // //                 key={product.id}
// // //                 className="shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full"
// // //                 data-shoe={product.id}
// // //                 style={{ backgroundColor: product.bgColor }}
// // //               >
// // //                 <div className="radial-gradient-effect" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)` }}></div>
// // //                 <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// // //                   {[...Array(3)].map((_, idx) => (
// // //                     <div key={idx} className="nike-bg-text">
// // //                       <span className={`font-extrabold tracking-wider leading-none ${idx === 1 ? "text-white/80" : "text-transparent"}`} style={{ fontSize: "clamp(1rem, 12vw, 8rem)", ...(idx !== 1 ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" } : {}), }}>
// // //                         {bgText}
// // //                       </span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// // //                   <img src={product.image} alt={product.name} className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain" style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))" }} />
// // //                 </div>
// // //                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// // //                   <h6 className="text-sm font-semibold leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{product.name}</h6>
// // //                   <p className="text-xs text-white/80 mb-1" style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}>{product.variant}</p>
// // //                   <p className="text-[10px] text-white/60 max-w-xs mx-auto mb-1" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}>{product.description}</p>
// // //                   <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{product.price}</div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TopProduct;

// // import React, { useEffect, useRef, useState, useCallback } from "react";
// // import { gsap } from "gsap";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// // const TopProduct = () => {
// //   const products = [
// //     { id: "product-red", name: "BATCH", variant: "Chicago", description: "One of the most iconic sneakers in history.", price: "$170", image: "/product-1.png", bgColor: "#124a8f" },
// //     { id: "product-blue", name: "DIESEL", variant: "White '07", description: "The legend lives on in this classic basketball shoe.", price: "$110", image: "/product-2.png", bgColor: "#a0243c" },
// //     { id: "product-pink", name: "ISO GOLD", variant: "Panda", description: "A timeless silhouette that's become a staple.", price: "$115", image: "/product-3.png", bgColor: "#c8920e" },
// //     { id: "product-green", name: "RVS", variant: "Panda", description: "A modern classic colorway on a timeless silhouette.", price: "$115", image: "/product-4.png", bgColor: "#0f4e34" },
// //   ];

// //   const sectionRef = useRef(null);
// //   // START: isAnimating रिफरेंस को हटा दिया गया क्योंकि अब इसकी जरूरत नहीं है
// //   // const isAnimating = useRef(false);

// //   // हेडर कलर बदलने वाला लॉजिक (इसमें कोई बदलाव नहीं)
// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;
// //     const trigger = ScrollTrigger.create({
// //       trigger: section,
// //       start: "bottom top",
// //       onEnter: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'light' } })),
// //       onLeaveBack: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'transparent' } }))
// //     });
// //     return () => trigger.kill();
// //   }, []);

// //   // START: व्हील-बेस्ड स्क्रॉल जैकिंग को हटा दिया गया है
// //   // यह मोबाइल पर समस्याओं का कारण बन रहा था और अनुभव को जटिल बना रहा था।
// //   // अब पेज सामान्य रूप से स्क्रॉल होगा।

// //   // कार्ड एनिमेशन के लिए मुख्य useEffect
// //   useEffect(() => {
// //     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
// //     const duration = 0.4;
// //     const shoeSections = gsap.utils.toArray(".shoe-section");
// //     let activeSection = null;

// //     // START: रिस्पॉन्सिव सेटिंग्स को अपडेट किया गया
// //     const getResponsiveSettings = () => {
// //       const isMobile = window.innerWidth < 1024;
// //       const totalSections = shoeSections.length;
// //       return {
// //         isMobile,
// //         // डेस्कटॉप के लिए सेटिंग्स
// //         expanded: { width: "45%" },
// //         otherCollapsed: { width: `${(100 - 45) / (totalSections - 1)}%` },
// //         // मोबाइल और डेस्कटॉप दोनों के लिए इमेज सेटिंग्स
// //         image: { collapsedScale: 0.7, expandedScale: 1 },
// //       };
// //     };
// //     // END: रिस्पॉन्सिव सेटिंग्स को अपडेट किया गया

// //     // START: आरम्भिक स्टेट्स को सेट करने वाले फंक्शन को अपडेट किया गया
// //     const setInitialStates = () => {
// //       const { isMobile } = getResponsiveSettings();
// //       gsap.set(shoeSections, {
// //         // मोबाइल पर एक निश्चित चौड़ाई और डेस्कटॉप पर 25%
// //         width: isMobile ? "85vw" : "25%",
// //         flexShrink: 0, // यह सुनिश्चित करेगा कि मोबाइल पर कार्ड्स सिकुड़ें नहीं
// //       });
// //       gsap.set(".shoe-content", { opacity: 0, y: 30 });
// //       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });
// //       gsap.set(".shoe-image", { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, transformOrigin: "center center" });
// //       gsap.set(".radial-gradient-effect", { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, transformOrigin: "center center" });
// //     };
// //     // END: आरम्भिक स्टेट्स को सेट करने वाले फंक्शन को अपडेट किया गया

// //     const animateIn = (target) => {
// //       gsap.timeline()
// //         .to(target.querySelector(".radial-gradient-effect"), { scale: 1.4, opacity: 0.7, duration, ease: customEase }, 0)
// //         .to(target.querySelector(".shoe-image"), { rotation: 0, scale: getResponsiveSettings().image.expandedScale, duration, ease: customEase }, 0)
// //         .to(target.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: duration * 0.8, stagger: 0.05, ease: customEase }, "<0.1")
// //         .to(target.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: duration * 0.9, ease: customEase }, "<0.1");
// //     };

// //     const animateOut = (target) => {
// //       gsap.timeline()
// //         .to(target.querySelector(".radial-gradient-effect"), { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, duration: duration * 0.6, ease: customEase }, 0)
// //         .to(target.querySelector(".shoe-content"), { opacity: 0, y: 30, duration: duration * 0.6, ease: customEase }, 0)
// //         .to(target.querySelectorAll(".nike-bg-text"), { opacity: 0, y: 20, duration: duration * 0.6, ease: customEase }, "<")
// //         .to(target.querySelector(".shoe-image"), { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, duration, ease: customEase }, "<");
// //     };
    
// //     // START: क्लिक हैंडलर को अपडेट किया गया
// //     const handleCardClick = (e) => {
// //       const section = e.currentTarget;
// //       const { isMobile, expanded, otherCollapsed } = getResponsiveSettings();
// //       const isAlreadyActive = section.classList.contains("active");

// //       // मोबाइल पर, सिर्फ कंटेंट को दिखाएं/छिपाएं
// //       if (isMobile) {
// //         if (isAlreadyActive) {
// //           section.classList.remove("active");
// //           animateOut(section);
// //         } else {
// //           // पहले से एक्टिव किसी भी अन्य कार्ड को बंद करें
// //           shoeSections.forEach(s => {
// //             if (s.classList.contains("active")) {
// //               s.classList.remove("active");
// //               animateOut(s);
// //             }
// //           });
// //           section.classList.add("active");
// //           animateIn(section);
// //         }
// //         return;
// //       }

// //       // डेस्कटॉप लॉजिक (अकॉर्डियन)
// //       if (activeSection && activeSection !== section) {
// //         activeSection.classList.remove("active");
// //         animateOut(activeSection);
// //       }
// //       if (isAlreadyActive) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //         gsap.to(shoeSections, { width: "25%", duration, ease: customEase });
// //         animateOut(section);
// //         return;
// //       }
// //       activeSection = section;
// //       section.classList.add("active");
// //       gsap.timeline()
// //         .to(shoeSections, { width: (i, target) => (target === section ? expanded.width : otherCollapsed.width), duration, ease: customEase }, 0)
// //         .add(animateIn(section), 0.1);
// //     };
// //     // END: क्लिक हैंडलर को अपडेट किया गया

// //     setInitialStates();
// //     shoeSections.forEach((section) => section.addEventListener("click", handleCardClick));
    
// //     const handleResize = () => {
// //       if (activeSection) {
// //         activeSection.classList.remove("active");
// //         activeSection = null;
// //       }
// //       setInitialStates();
// //     };
// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       shoeSections.forEach((section) => section.removeEventListener("click", handleCardClick));
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   // START: isMobile स्टेट को यहाँ जोड़ा गया
// //   const [isMobile, setIsMobile] = useState(false);
// //   useEffect(() => {
// //     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
// //     checkMobile();
// //     window.addEventListener('resize', checkMobile);
// //     return () => window.removeEventListener('resize', checkMobile);
// //   }, []);
// //   // END: isMobile स्टेट को यहाँ जोड़ा गया

// //   return (
// //     <section id="top-product-section" ref={sectionRef}>
// //       {/* START: कंटेनर में बदलाव */}
// //       <div className="h-screen w-full font-sans bg-black overflow-hidden relative flex items-center">
// //       {/* END: कंटेनर में बदलाव */}
// //         <div
// //           className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
// //           style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}
// //         ></div>
// //         <style>{`
// //           .radial-gradient-effect { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
// //           /* मोबाइल स्क्रॉलिंग के लिए स्नैपिंग */
// //           @media (max-width: 1023px) {
// //             .products-container-mobile { scroll-snap-type: x mandatory; overflow-x: auto; padding-left: calc(50vw - 42.5vw); padding-right: calc(50vw - 42.5vw); }
// //             .shoe-section-mobile { scroll-snap-align: center; }
// //             .products-container-mobile::-webkit-scrollbar { display: none; }
// //             .products-container-mobile { scrollbar-width: none; }
// //           }
// //         `}</style>
// //         {/* START: कंटेनर में क्लास को कंडीशनल बनाया गया */}
// //         <div className={`flex ${isMobile ? 'products-container-mobile' : 'h-full w-full'}`}>
// //         {/* END: कंटेनर में क्लास को कंडीशनल बनाया गया */}
// //           {products.map((product) => {
// //             const bgText = product.name.split(" ")[0].toUpperCase();
// //             return (
// //               <div
// //                 key={product.id}
// //                 // START: कार्ड में क्लास को कंडीशनल बनाया गया
// //                 className={`shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer ${isMobile ? 'h-[70vh] shoe-section-mobile' : 'h-full'}`}
// //                 // END: कार्ड में क्लास को कंडीशनल बनाया गया
// //                 data-shoe={product.id}
// //                 style={{ backgroundColor: product.bgColor }}
// //               >
// //                 <div className="radial-gradient-effect" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)` }}></div>
// //                 <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
// //                   {[...Array(3)].map((_, idx) => (
// //                     <div key={idx} className="nike-bg-text">
// //                       <span className={`font-extrabold tracking-wider leading-none ${idx === 1 ? "text-white/80" : "text-transparent"}`} style={{ fontSize: "clamp(1rem, 12vw, 8rem)", ...(idx !== 1 ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" } : {}), }}>
// //                         {bgText}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
// //                   <img src={product.image} alt={product.name} className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain" style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))" }} />
// //                 </div>
// //                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
// //                   <h6 className="text-sm font-semibold leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{product.name}</h6>
// //                   <p className="text-xs text-white/80 mb-1" style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}>{product.variant}</p>
// //                   <p className="text-[10px] text-white/60 max-w-xs mx-auto mb-1" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}>{product.description}</p>
// //                   <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{product.price}</div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopProduct;

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// const TopProduct = () => {
//   const products = [
//     { id: "product-red", name: "BATCH", variant: "Chicago", description: "One of the most iconic sneakers in history.", price: "$170", image: "/product-1.png", bgColor: "#124a8f" },
//     { id: "product-blue", name: "DIESEL", variant: "White '07", description: "The legend lives on in this classic basketball shoe.", price: "$110", image: "/product-2.png", bgColor: "#a0243c" },
//     { id: "product-pink", name: "ISO GOLD", variant: "Panda", description: "A timeless silhouette that's become a staple.", price: "$115", image: "/product-3.png", bgColor: "#c8920e" },
//     { id: "product-green", name: "RVS", variant: "Panda", description: "A modern classic colorway on a timeless silhouette.", price: "$115", image: "/product-4.png", bgColor: "#0f4e34" },
//   ];

//   const sectionRef = useRef(null);
  
//   // हेडर कलर बदलने वाला लॉजिक (इसमें कोई बदलाव नहीं)
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;
//     const trigger = ScrollTrigger.create({
//       trigger: section,
//       start: "bottom top",
//       onEnter: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'light' } })),
//       onLeaveBack: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'transparent' } }))
//     });
//     return () => trigger.kill();
//   }, []);

//   useEffect(() => {
//     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
//     const duration = 0.4;
//     const shoeSections = gsap.utils.toArray(".shoe-section");
//     let activeSection = null;

//     const getResponsiveSettings = () => {
//       const isMobile = window.innerWidth < 1024;
//       const totalSections = shoeSections.length;
//       return {
//         isMobile,
//         expanded: { width: "45%" },
//         otherCollapsed: { width: `${(100 - 45) / (totalSections - 1)}%` },
//         image: { collapsedScale: 0.7, expandedScale: 1 },
//       };
//     };

//     const setInitialStates = () => {
//       const { isMobile } = getResponsiveSettings();
//       gsap.set(shoeSections, {
//         width: isMobile ? "85vw" : "25%",
//         flexShrink: 0,
//       });
//       gsap.set(".shoe-content", { opacity: 0, y: 30 });
//       gsap.set(".nike-bg-text", { opacity: 0, y: 20 });
//       gsap.set(".shoe-image", { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, transformOrigin: "center center" });
//       gsap.set(".radial-gradient-effect", { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, transformOrigin: "center center" });
//     };

//     const animateIn = (target) => {
//       gsap.timeline()
//         .to(target.querySelector(".radial-gradient-effect"), { scale: 1.4, opacity: 0.7, duration, ease: customEase }, 0)
//         .to(target.querySelector(".shoe-image"), { rotation: 0, scale: getResponsiveSettings().image.expandedScale, duration, ease: customEase }, 0)
//         .to(target.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: duration * 0.8, stagger: 0.05, ease: customEase }, "<0.1")
//         .to(target.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: duration * 0.9, ease: customEase }, "<0.1");
//     };

//     const animateOut = (target) => {
//       gsap.timeline()
//         .to(target.querySelector(".radial-gradient-effect"), { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, duration: duration * 0.6, ease: customEase }, 0)
//         .to(target.querySelector(".shoe-content"), { opacity: 0, y: 30, duration: duration * 0.6, ease: customEase }, 0)
//         .to(target.querySelectorAll(".nike-bg-text"), { opacity: 0, y: 20, duration: duration * 0.6, ease: customEase }, "<")
//         .to(target.querySelector(".shoe-image"), { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, duration, ease: customEase }, "<");
//     };
    
//     const handleCardClick = (e) => {
//       const section = e.currentTarget;
//       const { isMobile, expanded, otherCollapsed } = getResponsiveSettings();
//       const isAlreadyActive = section.classList.contains("active");

//       if (isMobile) {
//         if (isAlreadyActive) {
//           section.classList.remove("active");
//           animateOut(section);
//         } else {
//           shoeSections.forEach(s => {
//             if (s.classList.contains("active")) {
//               s.classList.remove("active");
//               animateOut(s);
//             }
//           });
//           section.classList.add("active");
//           animateIn(section);
//         }
//         return;
//       }

//       if (activeSection && activeSection !== section) {
//         activeSection.classList.remove("active");
//         animateOut(activeSection);
//       }
//       if (isAlreadyActive) {
//         activeSection.classList.remove("active");
//         activeSection = null;
//         gsap.to(shoeSections, { width: "25%", duration, ease: customEase });
//         animateOut(section);
//         return;
//       }
//       activeSection = section;
//       section.classList.add("active");
//       gsap.timeline()
//         .to(shoeSections, { width: (i, target) => (target === section ? expanded.width : otherCollapsed.width), duration, ease: customEase }, 0)
//         .add(animateIn(section), 0.1);
//     };

//     setInitialStates();
//     shoeSections.forEach((section) => section.addEventListener("click", handleCardClick));
    
//     const handleResize = () => {
//       if (activeSection) {
//         activeSection.classList.remove("active");
//         activeSection = null;
//       }
//       setInitialStates();
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       shoeSections.forEach((section) => section.removeEventListener("click", handleCardClick));
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <section id="top-product-section" ref={sectionRef}>
//       {/* START: मुख्य बदलाव यहाँ है। h-screen को h-dvh से बदल दिया गया है। */}
//       <div className="h-dvh w-full font-sans bg-black overflow-hidden relative">
//       {/* END: मुख्य बदलाव */}
//         <div
//           className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
//           style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}
//         ></div>
//         <style>{`
//           .radial-gradient-effect { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
//           @media (max-width: 1023px) {
//             .products-container-mobile { 
//                 scroll-snap-type: x mandatory; 
//                 overflow-x: auto; 
//                 padding-left: calc(50vw - 42.5vw); 
//                 padding-right: calc(50vw - 42.5vw);
//                 /* START: ऊंचाई को 100% पर सेट किया गया है ताकि यह अपने parent (h-dvh) को भर सके */
//                 height: 100%;
//                 /* END: ऊंचाई का बदलाव */
//             }
//             .shoe-section-mobile { scroll-snap-align: center; }
//             .products-container-mobile::-webkit-scrollbar { display: none; }
//             .products-container-mobile { scrollbar-width: none; }
//           }
//         `}</style>
//         {/* START: कंटेनर में h-full और items-center जोड़ा गया है */}
//         <div className={`flex h-full w-full items-center ${isMobile ? 'products-container-mobile' : ''}`}>
//         {/* END: कंटेनर का बदलाव */}
//           {products.map((product) => {
//             const bgText = product.name.split(" ")[0].toUpperCase();
//             return (
//               <div
//                 key={product.id}
//                 // START: कार्ड की ऊंचाई को h-[70vh] से h-full में बदला गया है
//                 className={`shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer ${isMobile ? 'h-full shoe-section-mobile' : 'h-full'}`}
//                 // END: कार्ड की ऊंचाई का बदलाव
//                 data-shoe={product.id}
//                 style={{ backgroundColor: product.bgColor }}
//               >
//                 <div className="radial-gradient-effect" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)` }}></div>
//                 <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
//                   {[...Array(3)].map((_, idx) => (
//                     <div key={idx} className="nike-bg-text">
//                       <span className={`font-extrabold tracking-wider leading-none ${idx === 1 ? "text-white/80" : "text-transparent"}`} style={{ fontSize: "clamp(1rem, 12vw, 8rem)", ...(idx !== 1 ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" } : {}), }}>
//                         {bgText}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
//                   <img src={product.image} alt={product.name} className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain" style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))" }} />
//                 </div>
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
//                   <h6 className="text-sm font-semibold leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{product.name}</h6>
//                   <p className="text-xs text-white/80 mb-1" style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}>{product.variant}</p>
//                   <p className="text-[10px] text-white/60 max-w-xs mx-auto mb-1" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}>{product.description}</p>
//                   <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{product.price}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopProduct;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const TopProduct = () => {
  const products = [
    { id: "product-red", name: "BATCH", variant: "Chicago", description: "One of the most iconic sneakers in history.", price: "$170", image: "/product-1.png", bgColor: "#124a8f" },
    { id: "product-blue", name: "DIESEL", variant: "White '07", description: "The legend lives on in this classic basketball shoe.", price: "$110", image: "/product-2.png", bgColor: "#a0243c" },
    { id: "product-pink", name: "ISO GOLD", variant: "Panda", description: "A timeless silhouette that's become a staple.", price: "$115", image: "/product-3.png", bgColor: "#c8920e" },
    { id: "product-green", name: "RVS", variant: "Panda", description: "A modern classic colorway on a timeless silhouette.", price: "$115", image: "/product-4.png", bgColor: "#0f4e34" },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "bottom top",
      onEnter: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'light' } })),
      onLeaveBack: () => window.dispatchEvent(new CustomEvent("header:update", { detail: { style: 'transparent' } }))
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
    const duration = 0.4;
    const shoeSections = gsap.utils.toArray(".shoe-section");
    let activeSection = null;

    const getResponsiveSettings = () => {
      const isMobile = window.innerWidth < 1024;
      const totalSections = shoeSections.length;
      return {
        isMobile,
        expanded: { width: "45%" },
        otherCollapsed: { width: `${(100 - 45) / (totalSections - 1)}%` },
        image: { collapsedScale: 0.7, expandedScale: 1 },
      };
    };

    const setInitialStates = () => {
      const { isMobile } = getResponsiveSettings();
      gsap.set(shoeSections, {
        // START: मोबाइल पर चौड़ाई 100vw की गई
        width: isMobile ? "100vw" : "25%",
        // END: चौड़ाई का बदलाव
        flexShrink: 0,
      });
      gsap.set(".shoe-content", { opacity: 0, y: 30 });
      gsap.set(".nike-bg-text", { opacity: 0, y: 20 });
      gsap.set(".shoe-image", { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, transformOrigin: "center center" });
      gsap.set(".radial-gradient-effect", { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, transformOrigin: "center center" });
    };

    const animateIn = (target) => {
      gsap.timeline()
        .to(target.querySelector(".radial-gradient-effect"), { scale: 1.4, opacity: 0.7, duration, ease: customEase }, 0)
        .to(target.querySelector(".shoe-image"), { rotation: 0, scale: getResponsiveSettings().image.expandedScale, duration, ease: customEase }, 0)
        .to(target.querySelectorAll(".nike-bg-text"), { opacity: 1, y: 0, duration: duration * 0.8, stagger: 0.05, ease: customEase }, "<0.1")
        .to(target.querySelector(".shoe-content"), { opacity: 1, y: 0, duration: duration * 0.9, ease: customEase }, "<0.1");
    };

    const animateOut = (target) => {
      gsap.timeline()
        .to(target.querySelector(".radial-gradient-effect"), { scaleX: 0.7, scaleY: 1.2, opacity: 0.5, duration: duration * 0.6, ease: customEase }, 0)
        .to(target.querySelector(".shoe-content"), { opacity: 0, y: 30, duration: duration * 0.6, ease: customEase }, 0)
        .to(target.querySelectorAll(".nike-bg-text"), { opacity: 0, y: 20, duration: duration * 0.6, ease: customEase }, "<")
        .to(target.querySelector(".shoe-image"), { rotation: -25, scale: getResponsiveSettings().image.collapsedScale, duration, ease: customEase }, "<");
    };
    
    const handleCardClick = (e) => {
      const section = e.currentTarget;
      const { isMobile, expanded, otherCollapsed } = getResponsiveSettings();
      const isAlreadyActive = section.classList.contains("active");

      if (isMobile) {
        if (isAlreadyActive) {
          section.classList.remove("active");
          animateOut(section);
        } else {
          shoeSections.forEach(s => {
            if (s.classList.contains("active")) {
              s.classList.remove("active");
              animateOut(s);
            }
          });
          section.classList.add("active");
          animateIn(section);
        }
        return;
      }

      if (activeSection && activeSection !== section) {
        activeSection.classList.remove("active");
        animateOut(activeSection);
      }
      if (isAlreadyActive) {
        activeSection.classList.remove("active");
        activeSection = null;
        gsap.to(shoeSections, { width: "25%", duration, ease: customEase });
        animateOut(section);
        return;
      }
      activeSection = section;
      section.classList.add("active");
      gsap.timeline()
        .to(shoeSections, { width: (i, target) => (target === section ? expanded.width : otherCollapsed.width), duration, ease: customEase }, 0)
        .add(animateIn(section), 0.1);
    };

    setInitialStates();
    shoeSections.forEach((section) => section.addEventListener("click", handleCardClick));
    
    const handleResize = () => {
      if (activeSection) {
        activeSection.classList.remove("active");
        activeSection = null;
      }
      setInitialStates();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      shoeSections.forEach((section) => section.removeEventListener("click", handleCardClick));
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="top-product-section" ref={sectionRef}>
      <div className="h-dvh w-full font-sans bg-black overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}
        ></div>
        <style>{`
          .radial-gradient-effect { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
          @media (max-width: 1023px) {
            .products-container-mobile { 
                scroll-snap-type: x mandatory; 
                overflow-x: auto; 
                height: 100%;
                width: 100%; /* यह सुनिश्चित करता है कि कंटेनर पूरी चौड़ाई ले */
                /* START: अनावश्यक पैडिंग हटा दी गई है */
                /* END: पैडिंग हटाई गई */
            }
            .shoe-section-mobile { scroll-snap-align: center; }
            .products-container-mobile::-webkit-scrollbar { display: none; }
            .products-container-mobile { scrollbar-width: none; }
          }
        `}</style>
        <div className={`flex h-full w-full ${isMobile ? 'products-container-mobile' : 'items-center'}`}>
          {products.map((product) => {
            const bgText = product.name.split(" ")[0].toUpperCase();
            return (
              <div
                key={product.id}
                className={`shoe-section grid grid-cols-1 grid-rows-1 relative overflow-hidden cursor-pointer h-full ${isMobile ? 'shoe-section-mobile' : ''}`}
                data-shoe={product.id}
                style={{ backgroundColor: product.bgColor }}
              >
                <div className="radial-gradient-effect" style={{ background: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)` }}></div>
                <div className="col-start-1 row-start-1 w-full h-full flex flex-col justify-center items-center pointer-events-none z-[1]">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="nike-bg-text">
                      <span className={`font-extrabold tracking-wider leading-none ${idx === 1 ? "text-white/80" : "text-transparent"}`} style={{ fontSize: "clamp(1rem, 12vw, 8rem)", ...(idx !== 1 ? { WebkitTextStroke: "2px rgba(255,255,255,0.2)" } : {}), }}>
                        {bgText}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="col-start-1 row-start-1 w-full h-full flex justify-center items-center pointer-events-none z-[10] p-3">
                  <img src={product.image} alt={product.name} className="shoe-image w-auto h-auto max-w-[50%] max-h-[40%] object-contain" style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.4))" }} />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] text-center text-white px-4 shoe-content w-full">
                  <h6 className="text-sm font-semibold leading-tight" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>{product.name}</h6>
                  <p className="text-xs text-white/80 mb-1" style={{ fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}>{product.variant}</p>
                  <p className="text-[10px] text-white/60 max-w-xs mx-auto mb-1" style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)" }}>{product.description}</p>
                  <div className="inline-block px-4 py-1 bg-white text-black rounded-full text-xs font-medium pointer-events-auto" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}>{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopProduct;