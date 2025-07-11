

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
//     const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
//     const duration = 0.5;

//     const shoeSections = gsap.utils.toArray(".shoe-section");
//     let activeSection = null;

//     const getResponsiveSettings = () => {
//       // Define breakpoint for mobile vs. desktop behavior
//       const isMobile = window.innerWidth < 1024;
//       const totalSections = shoeSections.length;
//       const expandedWidth = isMobile ? "100vw" : "45%";
//       // On mobile, collapsed width will also be 100vw to remove gaps
//       const collapsedWidth = isMobile ? "100vw" : `${(100 - 45) / (totalSections - 1)}%`;

//       return {
//         isMobile,
//         expanded: { width: expandedWidth },
//         collapsed: { width: isMobile ? "100vw" : "25%" }, // Default mobile card width set to 100vw
//         otherCollapsed: { width: collapsedWidth },
//         image: {
//           collapsedScale: 0.6,
//           expandedScale: isMobile ? 0.8 : 0.8,
//           yOffset: 25,
//         },
//       };
//     };

//     const setInitialStates = () => {
//       const { collapsed, image } = getResponsiveSettings();
//       const isMobile = window.innerWidth < 1024;

//       if (isMobile) {
//         gsap.set(".products-container", {
//           width: "auto",
//           overflowX: "auto",
//           display: "flex",
//           // Removed padding/margin that caused gaps
//         });
//         gsap.set(shoeSections, {
//           width: "100vw", // Each card takes full viewport width
//           height: "100%", // Each card takes full viewport height
//           flexShrink: 0,
//           marginLeft: 0, // Removed gap-creating margins
//           marginRight: 0, // Removed gap-creating margins
//         });
//         // Hide content initially on mobile
//         gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
//         gsap.set(".nike-text", { opacity: 0, y: 20 });
//       } else {
//         gsap.set(".products-container", { width: "100%", overflowX: "hidden", display: "flex" });
//         gsap.set(shoeSections, {
//           width: collapsed.width,
//           height: "100%",
//           flexShrink: 1,
//           marginLeft: 0,
//           marginRight: 0,
//         });
//         // Ensure content is visible on desktop initially for collapsed state
//         gsap.set(".shoe-content", { opacity: 0, maxHeight: 0, y: 30 });
//         gsap.set(".nike-text", { opacity: 0, y: 20 });
//       }

//       gsap.set(".shoe-image", {
//         rotation: 25,
//         scale: image.collapsedScale,
//         y: 0,
//         transformOrigin: "center center",
//       });
//     };

//     const handleCardClick = (e) => {
//       const section = e.currentTarget;
//       const { expanded, collapsed, otherCollapsed, image, isMobile } = getResponsiveSettings();
//       const isAlreadyActive = section.classList.contains("active");

//       // Mobile behavior: If a card is clicked, scroll to it and show its details
//       if (isMobile) {
//         gsap.to(".products-container", {
//           scrollTo: {
//             x: section.offsetLeft, // Scroll directly to the start of the section
//             autoKill: false,
//           },
//           duration: 0.8,
//           ease: "power2.out",
//           onComplete: () => {
//             // After scrolling, show content for the active section
//             if (!isAlreadyActive) {
//               section.classList.add("active");
//               gsap.timeline()
//                 .to(section.querySelector(".shoe-image"), {
//                   rotation: 0,
//                   scale: image.expandedScale,
//                   y: image.yOffset,
//                   duration: duration,
//                   ease: customEase,
//                 })
//                 .to(section.querySelectorAll(".nike-text"), {
//                   opacity: 1,
//                   y: 0,
//                   duration: duration * 0.8,
//                   stagger: 0.04,
//                   ease: customEase,
//                 }, "<0.1")
//                 .to(section.querySelector(".shoe-content"), {
//                   opacity: 1,
//                   y: 0,
//                   maxHeight: "40vh",
//                   duration: duration * 0.9,
//                   ease: customEase,
//                 }, "<0.1");
//             } else {
//               // If already active and clicked again on mobile, collapse it
//               section.classList.remove("active");
//               gsap.timeline()
//                 .to(section.querySelector(".shoe-content"), {
//                   opacity: 0,
//                   y: 30,
//                   maxHeight: 0,
//                   duration: duration * 0.6,
//                   ease: customEase,
//                 })
//                 .to(section.querySelectorAll(".nike-text"), {
//                   opacity: 0,
//                   y: 20,
//                   duration: duration * 0.6,
//                   ease: customEase,
//                 }, "<")
//                 .to(section.querySelector(".shoe-image"), {
//                   rotation: 25,
//                   scale: image.collapsedScale,
//                   y: 0,
//                   duration: duration,
//                   ease: customEase,
//                 }, "<");
//             }
//           },
//         });
//         // For mobile, ensure only the clicked card shows full content
//         shoeSections.forEach((s) => {
//           if (s !== section && s.classList.contains("active")) {
//             s.classList.remove("active");
//             gsap.timeline()
//               .to(s.querySelector(".shoe-content"), {
//                 opacity: 0,
//                 y: 30,
//                 maxHeight: 0,
//                 duration: duration * 0.6,
//                 ease: customEase,
//               })
//               .to(s.querySelectorAll(".nike-text"), {
//                 opacity: 0,
//                 y: 20,
//                 duration: duration * 0.6,
//                 ease: customEase,
//               }, "<")
//               .to(s.querySelector(".shoe-image"), {
//                 rotation: 25,
//                 scale: image.collapsedScale,
//                 y: 0,
//                 duration: duration,
//                 ease: customEase,
//               }, "<");
//           }
//         });

//       } else {
//         // Desktop/Tablet behavior (existing logic)
//         if (activeSection && activeSection !== section) {
//           activeSection.classList.remove("active");
//           const tl_out = gsap.timeline();
//           tl_out
//             .to(activeSection.querySelector(".shoe-content"), {
//               opacity: 0,
//               y: 30,
//               maxHeight: 0,
//               duration: duration * 0.6,
//               ease: customEase,
//             })
//             .to(activeSection.querySelectorAll(".nike-text"), {
//               opacity: 0,
//               y: 20,
//               duration: duration * 0.6,
//               ease: customEase,
//             }, "<")
//             .to(activeSection.querySelector(".shoe-image"), {
//               rotation: 25,
//               scale: image.collapsedScale,
//               y: 0,
//               duration: duration,
//               ease: customEase,
//             }, "<");
//         }

//         if (isAlreadyActive) {
//           activeSection.classList.remove("active");
//           activeSection = null;
//           const tl = gsap.timeline();
//           tl.to(shoeSections, {
//             width: collapsed.width,
//             duration: duration,
//             ease: customEase,
//           })
//             .to(section.querySelector(".shoe-content"), {
//               opacity: 0,
//               y: 30,
//               maxHeight: 0,
//               duration: duration * 0.6,
//               ease: customEase,
//             }, "<")
//             .to(section.querySelectorAll(".nike-text"), {
//               opacity: 0,
//               y: 20,
//               duration: duration * 0.6,
//               ease: customEase,
//             }, "<")
//             .to(section.querySelector(".shoe-image"), {
//               rotation: 25,
//               scale: image.collapsedScale,
//               y: 0,
//               duration: duration,
//               ease: customEase,
//             }, "<");
//           return;
//         }

//         activeSection = section;
//         section.classList.add("active");

//         const masterTL = gsap.timeline();

//         masterTL
//           .to(shoeSections, {
//             width: (i, target) =>
//               target === section ? expanded.width : otherCollapsed.width,
//             duration: duration,
//             ease: customEase,
//           }, 0)
//           .to(section.querySelector(".shoe-image"), {
//             rotation: 0,
//             scale: image.expandedScale,
//             y: image.yOffset,
//             duration: duration,
//             ease: customEase,
//           }, 0)
//           .to(section.querySelectorAll(".nike-text"), {
//             opacity: 1,
//             y: 0,
//             duration: duration * 0.8,
//             stagger: 0.04,
//             ease: customEase,
//           }, 0.1)
//           .to(section.querySelector(".shoe-content"), {
//             opacity: 1,
//             y: 0,
//             maxHeight: "40vh",
//             duration: duration * 0.9,
//             ease: customEase,
//           }, "<0.1");
//       }
//     };

//     setInitialStates();
//     shoeSections.forEach((section) =>
//       section.addEventListener("click", handleCardClick)
//     );

//     const handleResize = () => {
//       // Clear active state on resize to re-evaluate responsiveness
//       if (activeSection) {
//         activeSection.classList.remove("active");
//         activeSection = null;
//       }
//       setInitialStates(); // Re-apply styles based on new window size
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       shoeSections.forEach((section) =>
//         section.removeEventListener("click", handleCardClick)
//       );
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [products]);

//   return (
//     <div className="h-screen w-full font-sans overflow-hidden bg-black">
//       {/* Products Container */}
//       <div className="products-container flex h-full md:overflow-x-hidden">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="shoe-section relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between snap-center"
//             data-shoe={product.id}
//             style={{ backgroundColor: product.bgColor }}
//           >
//             {/* Vignette Overlay (Adjusted transparent percentage) */}
//             <div
//               className="absolute inset-0 z-0" // Vignette should be behind product image but above solid background
//               style={{
//                 background: `radial-gradient(ellipse at center, transparent 20%, ${product.bgColor} 100%)`, // Changed from 40% to 20%
//                 opacity: 0.9, // Increased opacity slightly for a more noticeable effect
//               }}
//             ></div>

//             {/* Background Text */}
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
//       </div>
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
      bgGradient: {
        start: "rgba(52, 106, 171, 0.9)",
        end: "rgba(1, 64, 135, 0.95)",
      },
    },
    {
      id: "product-red",
      name: "Diesel",
      variant: "Whey Isolate",
      description: "Pure New Zealand whey isolate for lean muscle and recovery.",
      price: "$70",
      image: "/product-2.png",
      bgGradient: {
        start: "rgba(210, 60, 60, 0.9)",
        end: "rgba(140, 30, 30, 0.95)",
      },
    },
    {
      id: "product-yellow",
      name: "Isogold",
      variant: "Premium Isolate",
      description: "A premium whey protein isolate for rapid absorption and growth.",
      price: "$65",
      image: "/product-6.png",
      bgGradient: {
        type: "linear", // custom flag to apply linear gradient
        start: "#F5B82E",
        middle: "#fff0b3",
        end: "#F5B82E",
      },
    },
    {
      id: "product-green",
      name: "Ryse",
      variant: "BCAA / EAA",
      description: "Fuel your muscles with essential amino acids for recovery.",
      price: "$45",
      image: "/product-4.png",
      bgGradient: {
        start: "rgba(51, 109, 72, 0.9)",
        end: "rgba(4, 69, 32, 0.95)",
      },
    },
  ];

  useEffect(() => {
    const customEase = "cubic-bezier(0.83, 0, 0.17, 1)";
    const duration = 0.2;

    const shoeSections = gsap.utils.toArray(".shoe-section");
    let activeSection = null;

    const getResponsiveSettings = () => {
      const isMobile = window.innerWidth < 1024;
      const totalSections = shoeSections.length;
      const expandedWidth = isMobile ? "100vw" : "45%";
      const collapsedWidth = isMobile ? "100vw" : `${(100 - 45) / (totalSections - 1)}%`;

      return {
        isMobile,
        expanded: { width: expandedWidth },
        collapsed: { width: isMobile ? "100vw" : "25%" },
        otherCollapsed: { width: collapsedWidth },
        image: {
          collapsedScale: 0.6,
          expandedScale: 0.8,
          yOffset: 25,
        },
      };
    };

    const setInitialStates = () => {
      const { collapsed, image } = getResponsiveSettings();
      const isMobile = window.innerWidth < 1024;

      gsap.set(".products-container", {
        width: isMobile ? `${100 * shoeSections.length}vw` : "100%",
        overflowX: isMobile ? "auto" : "hidden",
        display: "flex",
      });

      gsap.set(shoeSections, {
        width: isMobile ? "100vw" : collapsed.width,
        height: "100%",
        flexShrink: isMobile ? 0 : 1,
      });

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
      const { expanded, collapsed, otherCollapsed, image, isMobile } = getResponsiveSettings();
      const isAlreadyActive = section.classList.contains("active");

      const animateIn = () => {
        gsap.timeline()
          .to(section.querySelector(".shoe-image"), {
            rotation: 0,
            scale: image.expandedScale,
            y: image.yOffset,
            duration,
            ease: customEase,
          })
          .to(section.querySelectorAll(".nike-text"), {
            opacity: 1,
            y: 0,
            duration: duration * 0.8,
            stagger: 0.04,
            ease: customEase,
          }, "<0.1")
          .to(section.querySelector(".shoe-content"), {
            opacity: 1,
            y: 0,
            maxHeight: "40vh",
            duration: duration * 0.9,
            ease: customEase,
          }, "<0.1");
      };

      const animateOut = (target) => {
        gsap.timeline()
          .to(target.querySelector(".shoe-content"), {
            opacity: 0,
            y: 30,
            maxHeight: 0,
            duration: duration * 0.6,
            ease: customEase,
          })
          .to(target.querySelectorAll(".nike-text"), {
            opacity: 0,
            y: 20,
            duration: duration * 0.6,
            ease: customEase,
          }, "<")
          .to(target.querySelector(".shoe-image"), {
            rotation: 25,
            scale: image.collapsedScale,
            y: 0,
            duration,
            ease: customEase,
          }, "<");
      };

      if (isMobile) {
        gsap.to(".products-container", {
          scrollTo: {
            x: section.offsetLeft,
            autoKill: false,
          },
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            if (!isAlreadyActive) {
              section.classList.add("active");
              animateIn();
            } else {
              section.classList.remove("active");
              animateOut(section);
            }
          },
        });

        shoeSections.forEach((s) => {
          if (s !== section && s.classList.contains("active")) {
            s.classList.remove("active");
            animateOut(s);
          }
        });
      } else {
        if (activeSection && activeSection !== section) {
          activeSection.classList.remove("active");
          animateOut(activeSection);
        }

        if (isAlreadyActive) {
          activeSection.classList.remove("active");
          activeSection = null;
          gsap.to(shoeSections, {
            width: collapsed.width,
            duration,
            ease: customEase,
          });
          animateOut(section);
          return;
        }

        activeSection = section;
        section.classList.add("active");

        gsap.timeline()
          .to(shoeSections, {
            width: (i, target) => (target === section ? expanded.width : otherCollapsed.width),
            duration,
            ease: customEase,
          }, 0)
          .add(animateIn(), 0.1);
      }
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

  return (
    <div className="h-screen w-full font-sans overflow-hidden bg-black">
      <div className="products-container flex h-full overflow-x-auto snap-x snap-mandatory">
        {products.map((product) => (
          <div
            key={product.id}
            className="shoe-section snap-start shrink-0 w-screen relative overflow-hidden cursor-pointer p-4 flex flex-col justify-between"
            data-shoe={product.id}
            style={{
              background:
                product.bgGradient.type === "linear"
                  ? `linear-gradient(to bottom,
                      ${product.bgGradient.start} 0%,
                      ${product.bgGradient.middle} 50%,
                      ${product.bgGradient.end} 100%)`
                  : `radial-gradient(ellipse at center,
                      ${product.bgGradient.start} 0%,
                      ${product.bgGradient.end} 100%)`,
              boxShadow: "inset 0 0 60px rgba(0,0,0,0.2)",
            }}
          >
            {/* Background Text */}
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

            {/* Radial Glow */}
            <div className="flex-grow flex items-center justify-center z-10 pointer-events-none relative">
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, transparent 70%)`,
                  width: "140%",
                  height: "140%",
                  mixBlendMode: "soft-light",
                  filter: "blur(6px)",
                  opacity: 0.8,
                }}
              ></div>

              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  width: "130%",
                  height: "130%",
                  mixBlendMode: "overlay",
                  opacity: 0.7,
                }}
              ></div>

              <img
                src={product.image}
                alt={product.name}
                className="shoe-image w-auto max-h-[50vh] object-contain relative z-10"
                style={{
                  transformOrigin: "center center",
                  filter: "drop-shadow(0 10px 15px rgba(255,255,255,0.2))",
                }}
              />
            </div>

            {/* Info */}
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
      </div>
    </div>
  );
};

export default TopProduct;
