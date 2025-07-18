// // // // // import React, { useState, useEffect, useRef } from "react";
// // // // // import { Link, useLocation } from "react-router-dom";
// // // // // import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// // // // // import { gsap } from "gsap";

// // // // // // --- CATEGORY DATA (Source of Truth) ---
// // // // // const categoryColumns = [
// // // // //   {
// // // // //     title: "Popular Categories",
// // // // //     items: [
// // // // //       "Mass Gainer",
// // // // //       "Pre Workout",
// // // // //       "Carbs",
// // // // //       "Fat Burner",
// // // // //       "Protein Blend",
// // // // //       "Energy Drink",
// // // // //       "Protein Vegan",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     title: "Shop By Category A–D",
// // // // //     items: [
// // // // //       "Amino Acids / BCAA / EAA",
// // // // //       "Arginine & Glutamine",
// // // // //       "Carbs",
// // // // //       "Creatine",
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     title: "Shop By Category E–H",
// // // // //     items: ["Energy Drink", "Fat Burner"],
// // // // //   },
// // // // //   {
// // // // //     title: "Shop By Category I–N",
// // // // //     items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
// // // // //   },
// // // // //   {
// // // // //     title: "Shop By Category O–Z",
// // // // //     items: [
// // // // //       "Pre Workout",
// // // // //       "Probiotic",
// // // // //       "Protein Blend",
// // // // //       "Protein Casein",
// // // // //       "Protein Hydrolyzed",
// // // // //       "Protein Isolate",
// // // // //       "Protein Vegan",
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // // Helper to get all unique categories for mobile view
// // // // // const allUniqueCategories = [
// // // // //   ...new Set(categoryColumns.flatMap((col) => col.items)),
// // // // // ].sort();

// // // // // // Helper Hook for screen size detection
// // // // // const useMediaQuery = (query) => {
// // // // //   const [matches, setMatches] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const media = window.matchMedia(query);
// // // // //     if (media.matches !== matches) {
// // // // //       setMatches(media.matches);
// // // // //     }
// // // // //     const listener = () => setMatches(media.matches);
// // // // //     window.addEventListener("resize", listener);
// // // // //     return () => window.removeEventListener("resize", listener);
// // // // //   }, [matches, query]);
// // // // //   return matches;
// // // // // };

// // // // // // Categories Component (For Desktop)
// // // // // const CategoriesDropdown = ({ variant = "dark" }) => {
// // // // //   const [showCategories, setShowCategories] = useState(false);
// // // // //   const categoriesTimeoutRef = useRef(null);
// // // // //   const isLight = variant === "light";
// // // // //   const textColor = isLight ? "text-black" : "text-white";
// // // // //   const hoverTextColor = isLight
// // // // //     ? "hover:text-gray-600"
// // // // //     : "hover:text-gray-300";
// // // // //   const dropdownRef = useRef(null);

// // // // //   const handleCategoriesMouseEnter = () => {
// // // // //     clearTimeout(categoriesTimeoutRef.current);
// // // // //     setShowCategories(true);
// // // // //   };

// // // // //   const handleCategoriesMouseLeave = () => {
// // // // //     categoriesTimeoutRef.current = setTimeout(() => {
// // // // //       setShowCategories(false);
// // // // //     }, 150);
// // // // //   };

// // // // //   const SubMenuItem = ({ label }) => (
// // // // //     <li className="list-none">
// // // // //       <a
// // // // //         href="#"
// // // // //         className="hover:text-orange-500 block py-1 transition-colors duration-300"
// // // // //       >
// // // // //         {label}
// // // // //       </a>
// // // // //     </li>
// // // // //   );

// // // // //   return (
// // // // //     <div
// // // // //       onMouseEnter={handleCategoriesMouseEnter}
// // // // //       onMouseLeave={handleCategoriesMouseLeave}
// // // // //       className="relative h-full flex items-center"
// // // // //     >
// // // // //       <div
// // // // //         className={`flex items-center space-x-1 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // // //       >
// // // // //         <span>CATEGORIES</span>
// // // // //         <FaChevronDown className="text-xs" />
// // // // //       </div>
// // // // //       {showCategories && (
// // // // //         <div
// // // // //           ref={dropdownRef}
// // // // //           className="fixed left-0 w-full bg-white shadow-lg border-t z-50"
// // // // //           style={{ top: "72px", animation: "fadeIn 0.2s ease-out" }}
// // // // //           onMouseEnter={() => clearTimeout(categoriesTimeoutRef.current)}
// // // // //           onMouseLeave={handleCategoriesMouseLeave}
// // // // //         >
// // // // //           <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // // // //             {categoryColumns.map((col) => (
// // // // //               <div key={col.title}>
// // // // //                 <h4 className="font-semibold pb-1 mb-2">{col.title}</h4>
// // // // //                 <ul>
// // // // //                   {col.items.map((item) => (
// // // // //                     <SubMenuItem key={item} label={item} />
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // HeaderContent Component
// // // // // const HeaderContent = ({
// // // // //   variant = "dark",
// // // // //   onMenuToggle,
// // // // //   isMenuOpen,
// // // // //   isDesktop,
// // // // // }) => {
// // // // //   const isLight = variant === "light";
// // // // //   const textColor = isLight ? "text-black" : "text-white";
// // // // //   const hoverTextColor = isLight
// // // // //     ? "hover:text-gray-600"
// // // // //     : "hover:text-gray-300";
// // // // //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// // // // //   const userIconBg = isLight
// // // // //     ? "bg-gray-200 hover:bg-gray-300"
// // // // //     : "bg-white/20 hover:bg-white/30";
// // // // //   const userIconColor = isLight ? "text-black" : "text-white";
// // // // //   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// // // // //   return (
// // // // //     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
// // // // //       <Link to="/">
// // // // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // // // //       </Link>
// // // // //       {isDesktop && (
// // // // //         <nav className="hidden md:flex items-center h-full space-x-6">
// // // // //           <Link
// // // // //             to="/"
// // // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // // //           >
// // // // //             HOME
// // // // //           </Link>
// // // // //           <CategoriesDropdown variant={variant} />
// // // // //           <Link
// // // // //             to="/consult"
// // // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // // //           >
// // // // //             CONSULTANCY
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/contact"
// // // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // // //           >
// // // // //             CONTACT
// // // // //           </Link>
// // // // //         </nav>
// // // // //       )}
// // // // //       <div className="flex items-center space-x-4">
// // // // //         <Link
// // // // //           to="/login"
// // // // //           className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // // // //         >
// // // // //           <FaUser className={`text-lg ${userIconColor}`} />
// // // // //         </Link>
// // // // //         <Link
// // // // //           to="/cart"
// // // // //           className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // // // //         >
// // // // //           <FaShoppingCart className={`text-lg ${userIconColor}`} />
// // // // //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
// // // // //             3
// // // // //           </span>
// // // // //         </Link>
// // // // //         <button
// // // // //           onClick={onMenuToggle}
// // // // //           className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}
// // // // //         >
// // // // //           {isMenuOpen ? <FaTimes /> : "☰"}
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Main Header Component
// // // // // const Header = () => {
// // // // //   const location = useLocation();
// // // // //   const isDesktop = useMediaQuery("(min-width: 768px)");
// // // // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
// // // // //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
// // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // //   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

// // // // //   const initialContentRef = useRef(null);
// // // // //   const scrolledContentRef = useRef(null);
// // // // //   const mobileMenuRef = useRef(null);

// // // // //   const toggleMobileMenu = () => {
// // // // //     const willOpen = !isMobileMenuOpen;
// // // // //     setIsMobileMenuOpen(willOpen);
// // // // //     // Reset category dropdown when closing main menu
// // // // //     if (!willOpen) {
// // // // //       setIsMobileCategoryOpen(false);
// // // // //     }
// // // // //   };

// // // // //   // Fix for hamburger menu not working on first click
// // // // //   useEffect(() => {
// // // // //     if (mobileMenuRef.current) {
// // // // //       gsap.set(mobileMenuRef.current, { x: "100%" });
// // // // //     }
// // // // //   }, []);

// // // // //   // Mobile menu animation
// // // // //   useEffect(() => {
// // // // //     if (mobileMenuRef.current) {
// // // // //       gsap.to(mobileMenuRef.current, {
// // // // //         x: isMobileMenuOpen ? "0%" : "100%",
// // // // //         duration: 0.4,
// // // // //         ease: "power3.inOut",
// // // // //       });
// // // // //       document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
// // // // //     }
// // // // //   }, [isMobileMenuOpen]);

// // // // //   // Desktop header animation
// // // // //   useEffect(() => {
// // // // //     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
// // // // //       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
// // // // //       if (isHeroActive) {
// // // // //         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // // // //           initialContentRef.current,
// // // // //           { y: "-100%" },
// // // // //           { y: "0%", duration: 0.6 },
// // // // //           "-=0.2"
// // // // //         );
// // // // //       } else {
// // // // //         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // // // //           scrolledContentRef.current,
// // // // //           { y: "-100%" },
// // // // //           { y: "0%", duration: 0.6 },
// // // // //           "-=0.2"
// // // // //         );
// // // // //       }
// // // // //     }
// // // // //   }, [isHeroActive, isDesktop]);

// // // // //   // Initial setup and event listeners
// // // // //   useEffect(() => {
// // // // //     const handleHeaderUpdate = (event) =>
// // // // //       setScrolledHeaderStyle(event.detail.style);
// // // // //     const handleHeroHiding = () => {
// // // // //       if (isDesktop) setIsHeroActive(false);
// // // // //     };
// // // // //     const handleHeroShowing = () => {
// // // // //       if (isDesktop) setIsHeroActive(true);
// // // // //     };

// // // // //     window.addEventListener("header:update", handleHeaderUpdate);
// // // // //     window.addEventListener("hero:hiding", handleHeroHiding);
// // // // //     window.addEventListener("hero:showing", handleHeroShowing);

// // // // //     // Logic to set initial header state based on route and screen size
// // // // //     const onHomePage = location.pathname === "/";
// // // // //     setIsHeroActive(onHomePage && isDesktop);

// // // // //     if (isDesktop) {
// // // // //       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
// // // // //       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
// // // // //     } else {
// // // // //       // On mobile, always show the scrolled header and hide the transparent one
// // // // //       gsap.set(initialContentRef.current, { y: "-100%" });
// // // // //       gsap.set(scrolledContentRef.current, { y: "0%" });
// // // // //     }
// // // // //     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
// // // // //     if (isMobileMenuOpen && isDesktop) {
// // // // //       setIsMobileMenuOpen(false);
// // // // //     }

// // // // //     return () => {
// // // // //       window.removeEventListener("header:update", handleHeaderUpdate);
// // // // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // // // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // // // //     };
// // // // //   }, [location.pathname, isDesktop]);

// // // // //   const scrolledBgClass =
// // // // //     scrolledHeaderStyle === "light" || !isDesktop
// // // // //       ? "bg-white shadow-md"
// // // // //       : "bg-transparent";
// // // // //   const scrolledContentVariant =
// // // // //     scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

// // // // //   return (
// // // // //     <>
// // // // //       <header className="w-full fixed top-0 z-[100] h-[72px]">
// // // // //         <div
// // // // //           ref={initialContentRef}
// // // // //           className="bg-transparent w-full absolute top-0 left-0"
// // // // //         >
// // // // //           <HeaderContent
// // // // //             variant="dark"
// // // // //             onMenuToggle={toggleMobileMenu}
// // // // //             isMenuOpen={isMobileMenuOpen}
// // // // //             isDesktop={isDesktop}
// // // // //           />
// // // // //         </div>
// // // // //         <div
// // // // //           ref={scrolledContentRef}
// // // // //           className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}
// // // // //         >
// // // // //           <HeaderContent
// // // // //             variant={scrolledContentVariant}
// // // // //             onMenuToggle={toggleMobileMenu}
// // // // //             isMenuOpen={isMobileMenuOpen}
// // // // //             isDesktop={isDesktop}
// // // // //           />
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* --- MOBILE MENU --- */}
// // // // //       <div
// // // // //         ref={mobileMenuRef}
// // // // //         className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden"
// // // // //         style={{ willChange: "transform" }}
// // // // //       >
// // // // //         <div className="p-4 border-b flex justify-between items-center h-[72px]">
// // // // //           <Link to="/" onClick={toggleMobileMenu}>
// // // // //             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
// // // // //           </Link>
// // // // //           <button
// // // // //             onClick={toggleMobileMenu}
// // // // //             className="text-2xl text-gray-700 focus:outline-none"
// // // // //             aria-label="Close menu"
// // // // //           >
// // // // //             <FaTimes />
// // // // //           </button>
// // // // //         </div>

// // // // //         <nav
// // // // //           className="flex flex-col p-4 overflow-y-auto"
// // // // //           style={{ height: "calc(100vh - 72px)" }}
// // // // //         >
// // // // //           <Link
// // // // //             to="/"
// // // // //             className="text-lg font-medium text-black py-3 "
// // // // //             onClick={toggleMobileMenu}
// // // // //           >
// // // // //             HOME
// // // // //           </Link>

// // // // //           {/* --- MOBILE CATEGORY DROPDOWN --- */}
// // // // //           <div className="">
// // // // //             <button
// // // // //               onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
// // // // //               className="w-full flex justify-between items-center text-lg font-medium text-black py-3"
// // // // //             >
// // // // //               <span>CATEGORIES</span>
// // // // //               <FaChevronDown
// // // // //                 className={`transition-transform duration-300 ${
// // // // //                   isMobileCategoryOpen ? "rotate-180" : ""
// // // // //                 }`}
// // // // //               />
// // // // //             </button>
// // // // //             {isMobileCategoryOpen && (
// // // // //               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
// // // // //                 {allUniqueCategories.map((cat) => (
// // // // //                   <Link
// // // // //                     key={cat}
// // // // //                     to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
// // // // //                     className="text-gray-700 py-1"
// // // // //                     onClick={toggleMobileMenu}
// // // // //                   >
// // // // //                     {cat}
// // // // //                   </Link>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           <Link
// // // // //             to="/consult"
// // // // //             className="text-lg font-medium text-black py-3 "
// // // // //             onClick={toggleMobileMenu}
// // // // //           >
// // // // //             CONSULTANCY
// // // // //           </Link>
// // // // //           <Link
// // // // //             to="/contact"
// // // // //             className="text-lg font-medium text-black py-3 "
// // // // //             onClick={toggleMobileMenu}
// // // // //           >
// // // // //             CONTACT
// // // // //           </Link>
// // // // //         </nav>
// // // // //       </div>

// // // // //       <style jsx global>{`
// // // // //         @keyframes fadeIn {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: translateY(-10px);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Header;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// // // // import { gsap } from "gsap";

// // // // // --- CATEGORY DATA (Source of Truth) ---
// // // // const categoryColumns = [
// // // //   {
// // // //     title: "Popular Categories",
// // // //     items: [
// // // //       "Mass Gainer",
// // // //       "Pre Workout",
// // // //       "Carbs",
// // // //       "Fat Burner",
// // // //       "Protein Blend",
// // // //       "Energy Drink",
// // // //       "Protein Vegan",
// // // //     ],
// // // //   },
// // // //   {
// // // //     title: "Shop By Category A–D",
// // // //     items: [
// // // //       "Amino Acids / BCAA / EAA",
// // // //       "Arginine & Glutamine",
// // // //       "Carbs",
// // // //       "Creatine",
// // // //     ],
// // // //   },
// // // //   {
// // // //     title: "Shop By Category E–H",
// // // //     items: ["Energy Drink", "Fat Burner"],
// // // //   },
// // // //   {
// // // //     title: "Shop By Category I–N",
// // // //     items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
// // // //   },
// // // //   {
// // // //     title: "Shop By Category O–Z",
// // // //     items: [
// // // //       "Pre Workout",
// // // //       "Probiotic",
// // // //       "Protein Blend",
// // // //       "Protein Casein",
// // // //       "Protein Hydrolyzed",
// // // //       "Protein Isolate",
// // // //       "Protein Vegan",
// // // //     ],
// // // //   },
// // // // ];

// // // // // Helper to get all unique categories for mobile view
// // // // const allUniqueCategories = [
// // // //   ...new Set(categoryColumns.flatMap((col) => col.items)),
// // // // ].sort();

// // // // // Helper Hook for screen size detection
// // // // const useMediaQuery = (query) => {
// // // //   const [matches, setMatches] = useState(false);
// // // //   useEffect(() => {
// // // //     const media = window.matchMedia(query);
// // // //     if (media.matches !== matches) {
// // // //       setMatches(media.matches);
// // // //     }
// // // //     const listener = () => setMatches(media.matches);
// // // //     window.addEventListener("resize", listener);
// // // //     return () => window.removeEventListener("resize", listener);
// // // //   }, [matches, query]);
// // // //   return matches;
// // // // };

// // // // // ====================================================================
// // // // // === 🚀 GSAP ANIMATED CategoriesDropdown (UPDATED COMPONENT) ===
// // // // // ====================================================================
// // // // const CategoriesDropdown = ({ variant = "dark" }) => {
// // // //   const dropdownRef = useRef(null);
// // // //   const timeline = useRef(null);

// // // //   // useEffect hook to set up the GSAP animation when the component mounts
// // // //   useEffect(() => {
// // // //     // Set the initial state of the dropdown (hidden and slightly up)
// // // //     gsap.set(dropdownRef.current, { autoAlpha: 0, y: -15 });

// // // //     // Create a paused GSAP timeline.
// // // //     // autoAlpha animates both opacity and visibility for better performance.
// // // //     timeline.current = gsap.to(dropdownRef.current, {
// // // //       autoAlpha: 1, // Fade in and become visible
// // // //       y: 0,         // Move down to its final position
// // // //       duration: 0.4,
// // // //       ease: "power2.out",
// // // //       paused: true, // Animation will not play automatically
// // // //     });
// // // //   }, []);

// // // //   // Play the animation forward on mouse enter
// // // //   const handleCategoriesMouseEnter = () => {
// // // //     timeline.current.play();
// // // //   };

// // // //   // Reverse the animation on mouse leave for a smooth exit
// // // //   const handleCategoriesMouseLeave = () => {
// // // //     timeline.current.reverse();
// // // //   };
  
// // // //   // --- Other existing variables ---
// // // //   const isLight = variant === "light";
// // // //   const textColor = isLight ? "text-black" : "text-white";
// // // //   const hoverTextColor = isLight
// // // //     ? "hover:text-gray-600"
// // // //     : "hover:text-gray-300";

// // // //   const SubMenuItem = ({ label }) => (
// // // //     <li className="list-none">
// // // //       <a
// // // //         href="#"
// // // //         className="hover:text-orange-500 block py-1 transition-colors duration-300"
// // // //       >
// // // //         {label}
// // // //       </a>
// // // //     </li>
// // // //   );

// // // //   return (
// // // //     <div
// // // //       onMouseEnter={handleCategoriesMouseEnter}
// // // //       onMouseLeave={handleCategoriesMouseLeave}
// // // //       className="relative h-full flex items-center"
// // // //     >
// // // //       <div
// // // //         className={`flex items-center space-x-1 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // //       >
// // // //         <span>CATEGORIES</span>
// // // //         <FaChevronDown className="text-xs" />
// // // //       </div>

// // // //       {/* The dropdown is now ALWAYS in the DOM, and its visibility is controlled by GSAP.
// // // //         - Removed: {showCategories && ...} conditional rendering
// // // //         - Removed: style={{ animation: "..." }}
// // // //         - Added: `invisible` class for the initial state before JS runs. GSAP's autoAlpha will override this.
// // // //       */}
// // // //       <div
// // // //         ref={dropdownRef}
// // // //         className="invisible fixed left-0 w-full bg-white shadow-lg border-t z-50"
// // // //         style={{ top: "72px" }} 
// // // //       >
// // // //         <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
// // // //           {categoryColumns.map((col) => (
// // // //             <div key={col.title}>
// // // //               <h4 className="font-semibold pb-1 mb-2">{col.title}</h4>
// // // //               <ul>
// // // //                 {col.items.map((item) => (
// // // //                   <SubMenuItem key={item} label={item} />
// // // //                 ))}
// // // //               </ul>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // // // --- HeaderContent Component (Unchanged) ---
// // // // const HeaderContent = ({
// // // //   variant = "dark",
// // // //   onMenuToggle,
// // // //   isMenuOpen,
// // // //   isDesktop,
// // // // }) => {
// // // //   const isLight = variant === "light";
// // // //   const textColor = isLight ? "text-black" : "text-white";
// // // //   const hoverTextColor = isLight
// // // //     ? "hover:text-gray-600"
// // // //     : "hover:text-gray-300";
// // // //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// // // //   const userIconBg = isLight
// // // //     ? "bg-gray-200 hover:bg-gray-300"
// // // //     : "bg-white/20 hover:bg-white/30";
// // // //   const userIconColor = isLight ? "text-black" : "text-white";
// // // //   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// // // //   return (
// // // //     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
// // // //       <Link to="/">
// // // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // // //       </Link>
// // // //       {isDesktop && (
// // // //         <nav className="hidden md:flex items-center h-full space-x-6">
// // // //           <Link
// // // //             to="/"
// // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // //           >
// // // //             HOME
// // // //           </Link>
// // // //           <CategoriesDropdown variant={variant} />
// // // //           <Link
// // // //             to="/consult"
// // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // //           >
// // // //             CONSULTANCY
// // // //           </Link>
// // // //           <Link
// // // //             to="/contact"
// // // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // // //           >
// // // //             CONTACT
// // // //           </Link>
// // // //         </nav>
// // // //       )}
// // // //       <div className="flex items-center space-x-4">
// // // //         <Link
// // // //           to="/login"
// // // //           className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // // //         >
// // // //           <FaUser className={`text-lg ${userIconColor}`} />
// // // //         </Link>
// // // //         <Link
// // // //           to="/cart"
// // // //           className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // // //         >
// // // //           <FaShoppingCart className={`text-lg ${userIconColor}`} />
// // // //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
// // // //             3
// // // //           </span>
// // // //         </Link>
// // // //         <button
// // // //           onClick={onMenuToggle}
// // // //           className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}
// // // //         >
// // // //           {isMenuOpen ? <FaTimes /> : "☰"}
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Main Header Component (Unchanged, removed keyframes) ---
// // // // const Header = () => {
// // // //   const location = useLocation();
// // // //   const isDesktop = useMediaQuery("(min-width: 768px)");
// // // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
// // // //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

// // // //   const initialContentRef = useRef(null);
// // // //   const scrolledContentRef = useRef(null);
// // // //   const mobileMenuRef = useRef(null);

// // // //   const toggleMobileMenu = () => {
// // // //     const willOpen = !isMobileMenuOpen;
// // // //     setIsMobileMenuOpen(willOpen);
// // // //     if (!willOpen) {
// // // //       setIsMobileCategoryOpen(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (mobileMenuRef.current) {
// // // //       gsap.set(mobileMenuRef.current, { x: "100%" });
// // // //     }
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (mobileMenuRef.current) {
// // // //       gsap.to(mobileMenuRef.current, {
// // // //         x: isMobileMenuOpen ? "0%" : "100%",
// // // //         duration: 0.4,
// // // //         ease: "power3.inOut",
// // // //       });
// // // //       document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
// // // //     }
// // // //   }, [isMobileMenuOpen]);

// // // //   useEffect(() => {
// // // //     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
// // // //       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
// // // //       if (isHeroActive) {
// // // //         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // // //           initialContentRef.current,
// // // //           { y: "-100%" },
// // // //           { y: "0%", duration: 0.6 },
// // // //           "-=0.2"
// // // //         );
// // // //       } else {
// // // //         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // // //           scrolledContentRef.current,
// // // //           { y: "-100%" },
// // // //           { y: "0%", duration: 0.6 },
// // // //           "-=0.2"
// // // //         );
// // // //       }
// // // //     }
// // // //   }, [isHeroActive, isDesktop]);

// // // //   useEffect(() => {
// // // //     const handleHeaderUpdate = (event) =>
// // // //       setScrolledHeaderStyle(event.detail.style);
// // // //     const handleHeroHiding = () => {
// // // //       if (isDesktop) setIsHeroActive(false);
// // // //     };
// // // //     const handleHeroShowing = () => {
// // // //       if (isDesktop) setIsHeroActive(true);
// // // //     };

// // // //     window.addEventListener("header:update", handleHeaderUpdate);
// // // //     window.addEventListener("hero:hiding", handleHeroHiding);
// // // //     window.addEventListener("hero:showing", handleHeroShowing);

// // // //     const onHomePage = location.pathname === "/";
// // // //     setIsHeroActive(onHomePage && isDesktop);

// // // //     if (isDesktop) {
// // // //       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
// // // //       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
// // // //     } else {
// // // //       gsap.set(initialContentRef.current, { y: "-100%" });
// // // //       gsap.set(scrolledContentRef.current, { y: "0%" });
// // // //     }
// // // //     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
// // // //     if (isMobileMenuOpen && isDesktop) {
// // // //       setIsMobileMenuOpen(false);
// // // //     }

// // // //     return () => {
// // // //       window.removeEventListener("header:update", handleHeaderUpdate);
// // // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // // //     };
// // // //   }, [location.pathname, isDesktop]);

// // // //   const scrolledBgClass =
// // // //     scrolledHeaderStyle === "light" || !isDesktop
// // // //       ? "bg-white shadow-md"
// // // //       : "bg-transparent";
// // // //   const scrolledContentVariant =
// // // //     scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

// // // //   return (
// // // //     <>
// // // //       <header className="w-full fixed top-0 z-[100] h-[72px]">
// // // //         <div
// // // //           ref={initialContentRef}
// // // //           className="bg-transparent w-full absolute top-0 left-0"
// // // //         >
// // // //           <HeaderContent
// // // //             variant="dark"
// // // //             onMenuToggle={toggleMobileMenu}
// // // //             isMenuOpen={isMobileMenuOpen}
// // // //             isDesktop={isDesktop}
// // // //           />
// // // //         </div>
// // // //         <div
// // // //           ref={scrolledContentRef}
// // // //           className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}
// // // //         >
// // // //           <HeaderContent
// // // //             variant={scrolledContentVariant}
// // // //             onMenuToggle={toggleMobileMenu}
// // // //             isMenuOpen={isMobileMenuOpen}
// // // //             isDesktop={isDesktop}
// // // //           />
// // // //         </div>
// // // //       </header>

// // // //       {/* --- MOBILE MENU --- */}
// // // //       <div
// // // //         ref={mobileMenuRef}
// // // //         className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden"
// // // //         style={{ willChange: "transform" }}
// // // //       >
// // // //         <div className="p-4 border-b flex justify-between items-center h-[72px]">
// // // //           <Link to="/" onClick={toggleMobileMenu}>
// // // //             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
// // // //           </Link>
// // // //           <button
// // // //             onClick={toggleMobileMenu}
// // // //             className="text-2xl text-gray-700 focus:outline-none"
// // // //             aria-label="Close menu"
// // // //           >
// // // //             <FaTimes />
// // // //           </button>
// // // //         </div>

// // // //         <nav
// // // //           className="flex flex-col p-4 overflow-y-auto"
// // // //           style={{ height: "calc(100vh - 72px)" }}
// // // //         >
// // // //           <Link
// // // //             to="/"
// // // //             className="text-lg font-medium text-black py-3 "
// // // //             onClick={toggleMobileMenu}
// // // //           >
// // // //             HOME
// // // //           </Link>

// // // //           {/* --- MOBILE CATEGORY DROPDOWN --- */}
// // // //           <div className="">
// // // //             <button
// // // //               onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
// // // //               className="w-full flex justify-between items-center text-lg font-medium text-black py-3"
// // // //             >
// // // //               <span>CATEGORIES</span>
// // // //               <FaChevronDown
// // // //                 className={`transition-transform duration-300 ${
// // // //                   isMobileCategoryOpen ? "rotate-180" : ""
// // // //                 }`}
// // // //               />
// // // //             </button>
// // // //             {isMobileCategoryOpen && (
// // // //               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
// // // //                 {allUniqueCategories.map((cat) => (
// // // //                   <Link
// // // //                     key={cat}
// // // //                     to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
// // // //                     className="text-gray-700 py-1"
// // // //                     onClick={toggleMobileMenu}
// // // //                   >
// // // //                     {cat}
// // // //                   </Link>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           <Link
// // // //             to="/consult"
// // // //             className="text-lg font-medium text-black py-3 "
// // // //             onClick={toggleMobileMenu}
// // // //           >
// // // //             CONSULTANCY
// // // //           </Link>
// // // //           <Link
// // // //             to="/contact"
// // // //             className="text-lg font-medium text-black py-3 "
// // // //             onClick={toggleMobileMenu}
// // // //           >
// // // //             CONTACT
// // // //           </Link>
// // // //         </nav>
// // // //       </div>

// // // //       {/* --- Removed the old CSS @keyframes --- */}
// // // //     </>
// // // //   );
// // // // };

// // // // export default Header;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// // // import { gsap } from "gsap";

// // // // --- CATEGORY DATA (Source of Truth) ---
// // // const categoryColumns = [
// // //   {
// // //     title: "Popular Categories",
// // //     items: [
// // //       "Mass Gainer",
// // //       "Pre Workout",
// // //       "Carbs",
// // //       "Fat Burner",
// // //       "Protein Blend",
// // //       "Energy Drink",
// // //       "Protein Vegan",
// // //     ],
// // //   },
// // //   {
// // //     title: "Shop By Category A–D",
// // //     items: [
// // //       "Amino Acids / BCAA / EAA",
// // //       "Arginine & Glutamine",
// // //       "Carbs",
// // //       "Creatine",
// // //     ],
// // //   },
// // //   {
// // //     title: "Shop By Category E–H",
// // //     items: ["Energy Drink", "Fat Burner"],
// // //   },
// // //   {
// // //     title: "Shop By Category I–N",
// // //     items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
// // //   },
// // //   {
// // //     title: "Shop By Category O–Z",
// // //     items: [
// // //       "Pre Workout",
// // //       "Probiotic",
// // //       "Protein Blend",
// // //       "Protein Casein",
// // //       "Protein Hydrolyzed",
// // //       "Protein Isolate",
// // //       "Protein Vegan",
// // //     ],
// // //   },
// // // ];

// // // // Helper to get all unique categories for mobile view
// // // const allUniqueCategories = [
// // //   ...new Set(categoryColumns.flatMap((col) => col.items)),
// // // ].sort();

// // // // Helper Hook for screen size detection
// // // const useMediaQuery = (query) => {
// // //   const [matches, setMatches] = useState(false);
// // //   useEffect(() => {
// // //     const media = window.matchMedia(query);
// // //     if (media.matches !== matches) {
// // //       setMatches(media.matches);
// // //     }
// // //     const listener = () => setMatches(media.matches);
// // //     window.addEventListener("resize", listener);
// // //     return () => window.removeEventListener("resize", listener);
// // //   }, [matches, query]);
// // //   return matches;
// // // };

// // // // ====================================================================
// // // // === ✨ UPDATED CategoriesDropdown Component ✨ ===
// // // // ====================================================================
// // // const CategoriesDropdown = ({ variant = "dark" }) => {
// // //   const dropdownRef = useRef(null);
// // //   const timeline = useRef(null);
// // //   const isLight = variant === "light";
// // //   const textColor = isLight ? "text-black" : "text-white";
// // //   const hoverTextColor = isLight
// // //     ? "hover:text-gray-600"
// // //     : "hover:text-gray-300";

// // //   // Setup GSAP animation
// // //   useEffect(() => {
// // //     gsap.set(dropdownRef.current, { autoAlpha: 0, y: -20 });
// // //     timeline.current = gsap.to(dropdownRef.current, {
// // //       autoAlpha: 1,
// // //       y: 0,
// // //       duration: 0.5,
// // //       // Using a smooth cubic-bezier for a more premium feel
// // //       ease: "cubic-bezier(.16,.84,.44,1)", 
// // //       paused: true,
// // //     });
// // //   }, []);

// // //   const handleCategoriesMouseEnter = () => {
// // //     timeline.current.play();
// // //   };

// // //   const handleCategoriesMouseLeave = () => {
// // //     timeline.current.reverse();
// // //   };

// // //   const SubMenuItem = ({ label }) => (
// // //     <li className="list-none">
// // //       <a
// // //         href="#"
// // //         className="hover:text-orange-500 block py-1.5 transition-colors duration-300 text-base" // Increased padding and font size
// // //       >
// // //         {label}
// // //       </a>
// // //     </li>
// // //   );

// // //   return (
// // //     <div
// // //       onMouseEnter={handleCategoriesMouseEnter}
// // //       onMouseLeave={handleCategoriesMouseLeave}
// // //       className="relative h-full flex items-center"
// // //     >
// // //       <div
// // //         className={`flex items-center space-x-2 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // //       >
// // //         <span>CATEGORIES</span>
// // //         <FaChevronDown className="text-xs" />
// // //       </div>
// // //       <div
// // //         ref={dropdownRef}
// // //         className="invisible fixed left-0 w-full bg-white shadow-xl border-t z-50" // Increased shadow
// // //         style={{ top: "72px" }}
// // //       >
// // //         <div 
// // //           className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10" // Increased padding and gap
// // //         >
// // //           {categoryColumns.map((col) => (
// // //             <div key={col.title}>
// // //               <h4 className="font-semibold text-gray-800 pb-2 mb-3 text-base"> {/* Changed text color and size */}
// // //                 {col.title}
// // //               </h4>
// // //               <ul className="space-y-1"> {/* Added space between items */}
// // //                 {col.items.map((item) => (
// // //                   <SubMenuItem key={item} label={item} />
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };


// // // // --- HeaderContent Component (Unchanged) ---
// // // const HeaderContent = ({
// // //   variant = "dark",
// // //   onMenuToggle,
// // //   isMenuOpen,
// // //   isDesktop,
// // // }) => {
// // //   const isLight = variant === "light";
// // //   const textColor = isLight ? "text-black" : "text-white";
// // //   const hoverTextColor = isLight
// // //     ? "hover:text-gray-600"
// // //     : "hover:text-gray-300";
// // //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// // //   const userIconBg = isLight
// // //     ? "bg-gray-200 hover:bg-gray-300"
// // //     : "bg-white/20 hover:bg-white/30";
// // //   const userIconColor = isLight ? "text-black" : "text-white";
// // //   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// // //   return (
// // //     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
// // //       <Link to="/">
// // //         <img src={logoSrc} alt="BUILDAPE" className="h-12" />
// // //       </Link>
// // //       {isDesktop && (
// // //         <nav className="hidden md:flex items-center h-full space-x-6">
// // //           <Link
// // //             to="/"
// // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // //           >
// // //             HOME
// // //           </Link>
// // //           <CategoriesDropdown variant={variant} />
// // //           <Link
// // //             to="/consult"
// // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // //           >
// // //             CONSULTANCY
// // //           </Link>
// // //           <Link
// // //             to="/contact"
// // //             className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
// // //           >
// // //             CONTACT
// // //           </Link>
// // //         </nav>
// // //       )}
// // //       <div className="flex items-center space-x-4">
// // //         <Link
// // //           to="/login"
// // //           className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // //         >
// // //           <FaUser className={`text-lg ${userIconColor}`} />
// // //         </Link>
// // //         <Link
// // //           to="/cart"
// // //           className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
// // //         >
// // //           <FaShoppingCart className={`text-lg ${userIconColor}`} />
// // //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
// // //             3
// // //           </span>
// // //         </Link>
// // //         <button
// // //           onClick={onMenuToggle}
// // //           className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}
// // //         >
// // //           {isMenuOpen ? <FaTimes /> : "☰"}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // --- Main Header Component (Unchanged) ---
// // // const Header = () => {
// // //   const location = useLocation();
// // //   const isDesktop = useMediaQuery("(min-width: 768px)");
// // //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
// // //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

// // //   const initialContentRef = useRef(null);
// // //   const scrolledContentRef = useRef(null);
// // //   const mobileMenuRef = useRef(null);

// // //   const toggleMobileMenu = () => {
// // //     const willOpen = !isMobileMenuOpen;
// // //     setIsMobileMenuOpen(willOpen);
// // //     if (!willOpen) {
// // //       setIsMobileCategoryOpen(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (mobileMenuRef.current) {
// // //       gsap.set(mobileMenuRef.current, { x: "100%" });
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     if (mobileMenuRef.current) {
// // //       gsap.to(mobileMenuRef.current, {
// // //         x: isMobileMenuOpen ? "0%" : "100%",
// // //         duration: 0.4,
// // //         ease: "power3.inOut",
// // //       });
// // //       document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
// // //     }
// // //   }, [isMobileMenuOpen]);

// // //   useEffect(() => {
// // //     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
// // //       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
// // //       if (isHeroActive) {
// // //         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // //           initialContentRef.current,
// // //           { y: "-100%" },
// // //           { y: "0%", duration: 0.6 },
// // //           "-=0.2"
// // //         );
// // //       } else {
// // //         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// // //           scrolledContentRef.current,
// // //           { y: "-100%" },
// // //           { y: "0%", duration: 0.6 },
// // //           "-=0.2"
// // //         );
// // //       }
// // //     }
// // //   }, [isHeroActive, isDesktop]);

// // //   useEffect(() => {
// // //     const handleHeaderUpdate = (event) =>
// // //       setScrolledHeaderStyle(event.detail.style);
// // //     const handleHeroHiding = () => {
// // //       if (isDesktop) setIsHeroActive(false);
// // //     };
// // //     const handleHeroShowing = () => {
// // //       if (isDesktop) setIsHeroActive(true);
// // //     };

// // //     window.addEventListener("header:update", handleHeaderUpdate);
// // //     window.addEventListener("hero:hiding", handleHeroHiding);
// // //     window.addEventListener("hero:showing", handleHeroShowing);

// // //     const onHomePage = location.pathname === "/";
// // //     setIsHeroActive(onHomePage && isDesktop);

// // //     if (isDesktop) {
// // //       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
// // //       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
// // //     } else {
// // //       gsap.set(initialContentRef.current, { y: "-100%" });
// // //       gsap.set(scrolledContentRef.current, { y: "0%" });
// // //     }
// // //     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
// // //     if (isMobileMenuOpen && isDesktop) {
// // //       setIsMobileMenuOpen(false);
// // //     }

// // //     return () => {
// // //       window.removeEventListener("header:update", handleHeaderUpdate);
// // //       window.removeEventListener("hero:hiding", handleHeroHiding);
// // //       window.removeEventListener("hero:showing", handleHeroShowing);
// // //     };
// // //   }, [location.pathname, isDesktop]);

// // //   const scrolledBgClass =
// // //     scrolledHeaderStyle === "light" || !isDesktop
// // //       ? "bg-white shadow-md"
// // //       : "bg-transparent";
// // //   const scrolledContentVariant =
// // //     scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

// // //   return (
// // //     <>
// // //       <header className="w-full fixed top-0 z-[100] h-[72px]">
// // //         <div
// // //           ref={initialContentRef}
// // //           className="bg-transparent w-full absolute top-0 left-0"
// // //         >
// // //           <HeaderContent
// // //             variant="dark"
// // //             onMenuToggle={toggleMobileMenu}
// // //             isMenuOpen={isMobileMenuOpen}
// // //             isDesktop={isDesktop}
// // //           />
// // //         </div>
// // //         <div
// // //           ref={scrolledContentRef}
// // //           className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}
// // //         >
// // //           <HeaderContent
// // //             variant={scrolledContentVariant}
// // //             onMenuToggle={toggleMobileMenu}
// // //             isMenuOpen={isMobileMenuOpen}
// // //             isDesktop={isDesktop}
// // //           />
// // //         </div>
// // //       </header>

// // //       {/* --- MOBILE MENU --- */}
// // //       <div
// // //         ref={mobileMenuRef}
// // //         className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden"
// // //         style={{ willChange: "transform" }}
// // //       >
// // //         <div className="p-4 border-b flex justify-between items-center h-[72px]">
// // //           <Link to="/" onClick={toggleMobileMenu}>
// // //             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
// // //           </Link>
// // //           <button
// // //             onClick={toggleMobileMenu}
// // //             className="text-2xl text-gray-700 focus:outline-none"
// // //             aria-label="Close menu"
// // //           >
// // //             <FaTimes />
// // //           </button>
// // //         </div>

// // //         <nav
// // //           className="flex flex-col p-4 overflow-y-auto"
// // //           style={{ height: "calc(100vh - 72px)" }}
// // //         >
// // //           <Link
// // //             to="/"
// // //             className="text-lg font-medium text-black py-3 "
// // //             onClick={toggleMobileMenu}
// // //           >
// // //             HOME
// // //           </Link>

// // //           {/* --- MOBILE CATEGORY DROPDOWN --- */}
// // //           <div className="">
// // //             <button
// // //               onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
// // //               className="w-full flex justify-between items-center text-lg font-medium text-black py-3"
// // //             >
// // //               <span>CATEGORIES</span>
// // //               <FaChevronDown
// // //                 className={`transition-transform duration-300 ${
// // //                   isMobileCategoryOpen ? "rotate-180" : ""
// // //                 }`}
// // //               />
// // //             </button>
// // //             {isMobileCategoryOpen && (
// // //               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
// // //                 {allUniqueCategories.map((cat) => (
// // //                   <Link
// // //                     key={cat}
// // //                     to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
// // //                     className="text-gray-700 py-1"
// // //                     onClick={toggleMobileMenu}
// // //                   >
// // //                     {cat}
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>

// // //           <Link
// // //             to="/consult"
// // //             className="text-lg font-medium text-black py-3 "
// // //             onClick={toggleMobileMenu}
// // //           >
// // //             CONSULTANCY
// // //           </Link>
// // //           <Link
// // //             to="/contact"
// // //             className="text-lg font-medium text-black py-3 "
// // //             onClick={toggleMobileMenu}
// // //           >
// // //             CONTACT
// // //           </Link>
// // //         </nav>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Header;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// // import { gsap } from "gsap";

// // // --- CATEGORY DATA (Source of Truth) ---
// // const categoryColumns = [
// //   {
// //     title: "Popular Categories",
// //     items: [
// //       "Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan",
// //     ],
// //   },
// //   {
// //     title: "Shop By Category A–D",
// //     items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"],
// //   },
// //   { title: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
// //   { title: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
// //   {
// //     title: "Shop By Category O–Z",
// //     items: [
// //       "Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan",
// //     ],
// //   },
// // ];

// // const allUniqueCategories = [...new Set(categoryColumns.flatMap((col) => col.items))].sort();

// // const useMediaQuery = (query) => {
// //   const [matches, setMatches] = useState(false);
// //   useEffect(() => {
// //     const media = window.matchMedia(query);
// //     if (media.matches !== matches) setMatches(media.matches);
// //     const listener = () => setMatches(media.matches);
// //     window.addEventListener("resize", listener);
// //     return () => window.removeEventListener("resize", listener);
// //   }, [matches, query]);
// //   return matches;
// // };

// // // --- UPDATED CategoriesDropdown ---
// // const CategoriesDropdown = ({ variant = "dark" }) => {
// //   const dropdownRef = useRef(null);
// //   const timeline = useRef(null);
// //   const isLight = variant === "light";
// //   const textColor = isLight ? "text-black" : "text-white";
// //   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";

// //   useEffect(() => {
// //     gsap.set(dropdownRef.current, { autoAlpha: 0, y: -20 });
// //     timeline.current = gsap.to(dropdownRef.current, {
// //       autoAlpha: 1, y: 0, duration: 0.5, ease: "cubic-bezier(.16,.84,.44,1)", paused: true,
// //     });
// //   }, []);

// //   const handleCategoriesMouseEnter = () => timeline.current.play();
// //   const handleCategoriesMouseLeave = () => timeline.current.reverse();

// //   const SubMenuItem = ({ label }) => (
// //     <li className="list-none">
// //       <a href="#" className="hover:text-orange-500 block py-1.5 transition-colors duration-300 text-base">
// //         {label}
// //       </a>
// //     </li>
// //   );

// //   return (
// //     <div onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave} className="relative h-full flex items-center">
// //       <div className={`flex items-center space-x-2 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //         <span>CATEGORIES</span>
// //         <FaChevronDown className="text-xs" />
// //       </div>
// //       <div ref={dropdownRef} className="invisible fixed left-0 w-full bg-white shadow-xl border-t z-50" style={{ top: "72px" }}>
// //         <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10">
// //           {categoryColumns.map((col) => (
// //             <div key={col.title}>
// //               <h4 className="font-semibold text-gray-800 pb-2 mb-3 text-base">{col.title}</h4>
// //               <ul className="space-y-1">
// //                 {col.items.map((item) => <SubMenuItem key={item} label={item} />)}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- HeaderContent (Unchanged) ---
// // const HeaderContent = ({ variant = "dark", onMenuToggle, isMenuOpen, isDesktop }) => {
// //   const isLight = variant === "light";
// //   const textColor = isLight ? "text-black" : "text-white";
// //   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
// //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// //   const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white/20 hover:bg-white/30";
// //   const userIconColor = isLight ? "text-black" : "text-white";
// //   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// //   return (
// //     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
// //       <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
// //       {isDesktop && (
// //         <nav className="hidden md:flex items-center h-full space-x-6">
// //           <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// //           <CategoriesDropdown variant={variant} />
// //           <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// //           <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// //         </nav>
// //       )}
// //       <div className="flex items-center space-x-4">
// //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// //           <FaUser className={`text-lg ${userIconColor}`} />
// //         </Link>
// //         <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// //           <FaShoppingCart className={`text-lg ${userIconColor}`} />
// //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
// //         </Link>
// //         <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
// //           {isMenuOpen ? <FaTimes /> : "☰"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // ====================================================================
// // // === ✨ Main Header Component with Updated Mobile Menu Logic ✨ ===
// // // ====================================================================
// // const Header = () => {
// //   const location = useLocation();
// //   const isDesktop = useMediaQuery("(min-width: 768px)");
// //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
// //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");

// //   // State to track if the menu is fully open or closed. This will control the icon.
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   // State to prevent clicks during animation.
// //   const [isAnimating, setIsAnimating] = useState(false);

// //   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
// //   const initialContentRef = useRef(null);
// //   const scrolledContentRef = useRef(null);
// //   const mobileMenuRef = useRef(null);
  
// //   // --- 👇 NEW: Corrected function to toggle mobile menu ---
// //   const toggleMobileMenu = () => {
// //     // Agar animation chal rahi hai to kuch na karein
// //     if (isAnimating) return; 

// //     // Menu kholne ke liye (OPENING)
// //     if (!isMobileMenuOpen) {
// //       setIsAnimating(true);
// //       document.body.style.overflow = "hidden";

// //       gsap.to(mobileMenuRef.current, {
// //         x: '0%',
// //         duration: 0.6,
// //         ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //         // Animation complete hone ke BAAD icon change karein
// //         onComplete: () => {
// //           setIsMobileMenuOpen(true);
// //           setIsAnimating(false);
// //         }
// //       });
// //     } 
// //     // Menu band karne ke liye (CLOSING)
// //     else {
// //       setIsAnimating(true);
// //       document.body.style.overflow = "auto";
      
// //       gsap.to(mobileMenuRef.current, {
// //         x: '100%',
// //         duration: 0.5,
// //         ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //         // Animation complete hone ke BAAD icon change karein
// //         onComplete: () => {
// //           setIsMobileMenuOpen(false);
// //           setIsAnimating(false);
// //           // Main menu band hone par category menu bhi band kar dein
// //           setIsMobileCategoryOpen(false);
// //         }
// //       });
// //     }
// //   };
  
// //   // This function is for closing the menu when a link is clicked
// //   const closeMenuAndNavigate = () => {
// //     if (isAnimating) return;

// //     if (isMobileMenuOpen) {
// //       setIsAnimating(true);
// //       document.body.style.overflow = "auto";
// //       gsap.to(mobileMenuRef.current, {
// //         x: '100%',
// //         duration: 0.5,
// //         ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //         onComplete: () => {
// //           setIsMobileMenuOpen(false);
// //           setIsAnimating(false);
// //           setIsMobileCategoryOpen(false);
// //         }
// //       });
// //     }
// //   };

// //   // Set initial position of mobile menu
// //   useEffect(() => {
// //     gsap.set(mobileMenuRef.current, { x: "100%" });
// //   }, []);
  
// //   // --- The rest of the useEffects are for desktop header animations and are unchanged ---
// //   useEffect(() => {
// //     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
// //       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
// //       if (isHeroActive) {
// //         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// //           initialContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
// //         );
// //       } else {
// //         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// //           scrolledContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
// //         );
// //       }
// //     }
// //   }, [isHeroActive, isDesktop]);

// //   useEffect(() => {
// //     const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
// //     const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
// //     const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

// //     window.addEventListener("header:update", handleHeaderUpdate);
// //     window.addEventListener("hero:hiding", handleHeroHiding);
// //     window.addEventListener("hero:showing", handleHeroShowing);

// //     const onHomePage = location.pathname === "/";
// //     setIsHeroActive(onHomePage && isDesktop);

// //     if (isDesktop) {
// //       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
// //       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
// //     } else {
// //       gsap.set(initialContentRef.current, { y: "-100%" });
// //       gsap.set(scrolledContentRef.current, { y: "0%" });
// //     }
// //     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
// //     if (isMobileMenuOpen && isDesktop) {
// //       closeMenuAndNavigate();
// //     }

// //     return () => {
// //       window.removeEventListener("header:update", handleHeaderUpdate);
// //       window.removeEventListener("hero:hiding", handleHeroHiding);
// //       window.removeEventListener("hero:showing", handleHeroShowing);
// //     };
// //   }, [location.pathname, isDesktop]);

// //   const scrolledBgClass = scrolledHeaderStyle === "light" || !isDesktop ? "bg-white shadow-md" : "bg-transparent";
// //   const scrolledContentVariant = scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

// //   return (
// //     <>
// //       <header className="w-full fixed top-0 z-[100] h-[72px]">
// //         <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// //           <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //         </div>
// //         <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
// //           <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //         </div>
// //       </header>

// //       <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden" style={{ willChange: "transform" }}>
// //         <div className="p-4 border-b flex justify-between items-center h-[72px]">
// //           <Link to="/" onClick={closeMenuAndNavigate}>
// //             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
// //           </Link>
// //           <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 focus:outline-none" aria-label="Close menu">
// //             <FaTimes />
// //           </button>
// //         </div>

// //         <nav className="flex flex-col p-4 overflow-y-auto" style={{ height: "calc(100vh - 72px)" }}>
// //           <Link to="/" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>HOME</Link>
// //           <div className="">
// //             <button onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)} className="w-full flex justify-between items-center text-lg font-medium text-black py-3">
// //               <span>CATEGORIES</span>
// //               <FaChevronDown className={`transition-transform duration-300 ${isMobileCategoryOpen ? "rotate-180" : ""}`} />
// //             </button>
// //             {isMobileCategoryOpen && (
// //               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
// //                 {allUniqueCategories.map((cat) => (
// //                   <Link key={cat} to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-700 py-1" onClick={closeMenuAndNavigate}>
// //                     {cat}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //           <Link to="/consult" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONSULTANCY</Link>

// //           <Link to="/contact" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONTACT</Link>
// //         </nav>
// //       </div>
// //     </>
// //   );
// // };

// // export default Header;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// // import { gsap } from "gsap";

// // // --- CATEGORY DATA (Source of Truth) ---
// // const categoryColumns = [
// //   {
// //     title: "Popular Categories",
// //     items: [
// //       "Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan",
// //     ],
// //   },
// //   {
// //     title: "Shop By Category A–D",
// //     items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"],
// //   },
// //   { title: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
// //   { title: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
// //   {
// //     title: "Shop By Category O–Z",
// //     items: [
// //       "Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan",
// //     ],
// //   },
// // ];

// // const allUniqueCategories = [...new Set(categoryColumns.flatMap((col) => col.items))].sort();

// // const useMediaQuery = (query) => {
// //   const [matches, setMatches] = useState(false);
// //   useEffect(() => {
// //     const media = window.matchMedia(query);
// //     if (media.matches !== matches) setMatches(media.matches);
// //     const listener = () => setMatches(media.matches);
// //     window.addEventListener("resize", listener);
// //     return () => window.removeEventListener("resize", listener);
// //   }, [matches, query]);
// //   return matches;
// // };

// // // --- CategoriesDropdown (Unchanged from previous version) ---
// // const CategoriesDropdown = ({ variant = "dark" }) => {
// //   const dropdownRef = useRef(null);
// //   const timeline = useRef(null);
// //   const isLight = variant === "light";
// //   const textColor = isLight ? "text-black" : "text-white";
// //   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";

// //   useEffect(() => {
// //     gsap.set(dropdownRef.current, { autoAlpha: 0, y: -20 });
// //     timeline.current = gsap.to(dropdownRef.current, {
// //       autoAlpha: 1, y: 0, duration: 0.5, ease: "cubic-bezier(.16,.84,.44,1)", paused: true,
// //     });
// //   }, []);

// //   const handleCategoriesMouseEnter = () => timeline.current.play();
// //   const handleCategoriesMouseLeave = () => timeline.current.reverse();

// //   const SubMenuItem = ({ label }) => (
// //     <li className="list-none">
// //       <a href="#" className="hover:text-orange-500 block py-1.5 transition-colors duration-300 text-base">
// //         {label}
// //       </a>
// //     </li>
// //   );

// //   return (
// //     <div onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave} className="relative h-full flex items-center">
// //       <div className={`flex items-center space-x-2 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
// //         <span>CATEGORIES</span>
// //         <FaChevronDown className="text-xs" />
// //       </div>
// //       <div ref={dropdownRef} className="invisible fixed left-0 w-full bg-white shadow-xl border-t z-50" style={{ top: "72px" }}>
// //         <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10">
// //           {categoryColumns.map((col) => (
// //             <div key={col.title}>
// //               <h4 className="font-semibold text-gray-800 pb-2 mb-3 text-base">{col.title}</h4>
// //               <ul className="space-y-1">
// //                 {col.items.map((item) => <SubMenuItem key={item} label={item} />)}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- HeaderContent (Unchanged) ---
// // const HeaderContent = ({ variant = "dark", onMenuToggle, isMenuOpen, isDesktop }) => {
// //   const isLight = variant === "light";
// //   const textColor = isLight ? "text-black" : "text-white";
// //   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
// //   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
// //   const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white/20 hover:bg-white/30";
// //   const userIconColor = isLight ? "text-black" : "text-white";
// //   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

// //   return (
// //     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
// //       <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
// //       {isDesktop && (
// //         <nav className="hidden md:flex items-center h-full space-x-6">
// //           <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
// //           <CategoriesDropdown variant={variant} />
// //           <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
// //           <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
// //         </nav>
// //       )}
// //       <div className="flex items-center space-x-4">
// //         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// //           <FaUser className={`text-lg ${userIconColor}`} />
// //         </Link>
// //         <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
// //           <FaShoppingCart className={`text-lg ${userIconColor}`} />
// //           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
// //         </Link>
// //         <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
// //           {isMenuOpen ? <FaTimes /> : "☰"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Main Header Component ---
// // const Header = () => {
// //   const location = useLocation();
// //   const isDesktop = useMediaQuery("(min-width: 768px)");
// //   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
// //   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
// //   const initialContentRef = useRef(null);
// //   const scrolledContentRef = useRef(null);
// //   const mobileMenuRef = useRef(null);

// //   // --- 👇 FINAL CORRECTED LOGIC for Mobile Menu ---
// //   const toggleMobileMenu = () => {
// //     if (isAnimating) return;

// //     if (!isMobileMenuOpen) {
// //       // OPENING: Animation pehle, icon baad mein
// //       setIsAnimating(true);
// //       document.body.style.overflow = "hidden";
// //       gsap.to(mobileMenuRef.current, {
// //         x: '0%',
// //         duration: 0.6,
// //         ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //         onComplete: () => {
// //           setIsMobileMenuOpen(true);
// //           setIsAnimating(false);
// //         }
// //       });
// //     } else {
// //       // CLOSING: Icon pehle, animation saath mein
// //       setIsAnimating(true);
// //       // **THE FIX:** Icon state ko turant badal do
// //       setIsMobileMenuOpen(false); 
      
// //       document.body.style.overflow = "auto";
// //       gsap.to(mobileMenuRef.current, {
// //         x: '100%',
// //         duration: 0.5,
// //         ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //         onComplete: () => {
// //           setIsAnimating(false);
// //           setIsMobileCategoryOpen(false);
// //         }
// //       });
// //     }
// //   };

// //   const closeMenuAndNavigate = () => {
// //     if (isAnimating || !isMobileMenuOpen) return;
    
// //     setIsAnimating(true);
// //     // Yahan bhi icon state ko turant badal do
// //     setIsMobileMenuOpen(false); 

// //     document.body.style.overflow = "auto";
// //     gsap.to(mobileMenuRef.current, {
// //       x: '100%',
// //       duration: 0.5,
// //       ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
// //       onComplete: () => {
// //         setIsAnimating(false);
// //         setIsMobileCategoryOpen(false);
// //       }
// //     });
// //   };

// //   // Set initial position of mobile menu
// //   useEffect(() => {
// //     gsap.set(mobileMenuRef.current, { x: "100%" });
// //   }, []);

// //   // --- Desktop header animation effects ---
// //   useEffect(() => {
// //     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
// //       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
// //       if (isHeroActive) {
// //         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// //           initialContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
// //         );
// //       } else {
// //         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
// //           scrolledContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
// //         );
// //       }
// //     }
// //   }, [isHeroActive, isDesktop]);

// //   useEffect(() => {
// //     const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
// //     const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
// //     const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

// //     window.addEventListener("header:update", handleHeaderUpdate);
// //     window.addEventListener("hero:hiding", handleHeroHiding);
// //     window.addEventListener("hero:showing", handleHeroShowing);

// //     const onHomePage = location.pathname === "/";
// //     setIsHeroActive(onHomePage && isDesktop);

// //     if (isDesktop) {
// //       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
// //       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
// //     } else {
// //       gsap.set(initialContentRef.current, { y: "-100%" });
// //       gsap.set(scrolledContentRef.current, { y: "0%" });
// //     }
// //     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
// //     if (isMobileMenuOpen && isDesktop) {
// //       closeMenuAndNavigate();
// //     }

// //     return () => {
// //       window.removeEventListener("header:update", handleHeaderUpdate);
// //       window.removeEventListener("hero:hiding", handleHeroHiding);
// //       window.removeEventListener("hero:showing", handleHeroShowing);
// //     };
// //   }, [location.pathname, isDesktop]);

// //   const scrolledBgClass = scrolledHeaderStyle === "light" || !isDesktop ? "bg-white shadow-md" : "bg-transparent";
// //   const scrolledContentVariant = scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

// //   return (
// //     <>
// //       <header className="w-full fixed top-0 z-[100] h-[72px]">
// //         <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
// //           <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //         </div>
// //         <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
// //           <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
// //         </div>
// //       </header>

// //       <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden" style={{ willChange: "transform" }}>
// //         <div className="p-4 border-b flex justify-between items-center h-[72px]">
// //           <Link to="/" onClick={closeMenuAndNavigate}>
// //             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
// //           </Link>
// //           <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 focus:outline-none" aria-label="Close menu">
// //             <FaTimes />
// //           </button>
// //         </div>

// //         <nav className="flex flex-col p-4 overflow-y-auto" style={{ height: "calc(100vh - 72px)" }}>
// //           <Link to="/" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>HOME</Link>
// //           <div className="">
// //             <button onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)} className="w-full flex justify-between items-center text-lg font-medium text-black py-3">
// //               <span>CATEGORIES</span>
// //               <FaChevronDown className={`transition-transform duration-300 ${isMobileCategoryOpen ? "rotate-180" : ""}`} />
// //             </button>
// //             {isMobileCategoryOpen && (
// //               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
// //                 {allUniqueCategories.map((cat) => (
// //                   <Link key={cat} to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-700 py-1" onClick={closeMenuAndNavigate}>
// //                     {cat}
// //                   </Link>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //           <Link to="/consult" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONSULTANCY</Link>
// //           <Link to="/contact" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONTACT</Link>
// //         </nav>
// //       </div>
// //     </>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
// import { gsap } from "gsap";

// // --- CATEGORY DATA (Source of Truth) ---
// const categoryColumns = [
//   {
//     title: "Popular Categories",
//     items: [
//       "Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan",
//     ],
//   },
//   {
//     title: "Shop By Category A–D",
//     items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"],
//   },
//   { title: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
//   { title: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
//   {
//     title: "Shop By Category O–Z",
//     items: [
//       "Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan",
//     ],
//   },
// ];

// const allUniqueCategories = [...new Set(categoryColumns.flatMap((col) => col.items))].sort();

// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) setMatches(media.matches);
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);
//   return matches;
// };

// // --- CategoriesDropdown (UPDATED) ---
// const CategoriesDropdown = ({ variant = "dark" }) => {
//   const dropdownRef = useRef(null);
//   const timeline = useRef(null);
//   const isLight = variant === "light";
//   const textColor = isLight ? "text-black" : "text-white";
//   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";

//   useEffect(() => {
//     gsap.set(dropdownRef.current, { autoAlpha: 0, y: -20 });
//     timeline.current = gsap.to(dropdownRef.current, {
//       autoAlpha: 1, y: 0, duration: 0.5, ease: "cubic-bezier(.16,.84,.44,1)", paused: true,
//     });
//   }, []);

//   const handleCategoriesMouseEnter = () => timeline.current.play();
//   const handleCategoriesMouseLeave = () => timeline.current.reverse();

//   // --- 👇 THIS IS THE UPDATED PART ---
//   const SubMenuItem = ({ label }) => {
//     // Create a URL-friendly "slug" from the category name
//     const categorySlug = label.toLowerCase().replace(/\s+/g, "-");

//     return (
//       <li className="list-none">
//         <Link
//           to={`/${categorySlug}`}
//           className="hover:text-orange-500 block py-1.5 transition-colors duration-300 text-base"
//         >
//           {label}
//         </Link>
//       </li>
//     );
//   };

//   return (
//     <div onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave} className="relative h-full flex items-center">
//       <div className={`flex items-center space-x-2 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
//         <span>CATEGORIES</span>
//         <FaChevronDown className="text-xs" />
//       </div>
//       <div ref={dropdownRef} className="invisible fixed left-0 w-full bg-white shadow-xl border-t z-50" style={{ top: "72px" }}>
//         <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10">
//           {categoryColumns.map((col) => (
//             <div key={col.title}>
//               <h4 className="font-semibold text-gray-800 pb-2 mb-3 text-base">{col.title}</h4>
//               <ul className="space-y-1">
//                 {col.items.map((item) => <SubMenuItem key={item} label={item} />)}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- HeaderContent (Unchanged) ---
// const HeaderContent = ({ variant = "dark", onMenuToggle, isMenuOpen, isDesktop }) => {
//   const isLight = variant === "light";
//   const textColor = isLight ? "text-black" : "text-white";
//   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
//   const logoSrc = isLight ? "/logo-1.png" : "/white.png";
//   const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white/20 hover:bg-white/30";
//   const userIconColor = isLight ? "text-black" : "text-white";
//   const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

//   return (
//     <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
//       <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
//       {isDesktop && (
//         <nav className="hidden md:flex items-center h-full space-x-6">
//           <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//           <CategoriesDropdown variant={variant} />
//           <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
//           <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//         </nav>
//       )}
//       <div className="flex items-center space-x-4">
//         <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//           <FaUser className={`text-lg ${userIconColor}`} />
//         </Link>
//         <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//           <FaShoppingCart className={`text-lg ${userIconColor}`} />
//           <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
//         </Link>
//         <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
//           {isMenuOpen ? <FaTimes /> : "☰"}
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- Main Header Component (Unchanged) ---
// const Header = () => {
//   const location = useLocation();
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
//   const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
//   const initialContentRef = useRef(null);
//   const scrolledContentRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   const toggleMobileMenu = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     if (!isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//       gsap.to(mobileMenuRef.current, {
//         x: '0%', duration: 0.6, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
//         onComplete: () => {
//           setIsMobileMenuOpen(true);
//           setIsAnimating(false);
//         }
//       });
//     } else {
//       setIsMobileMenuOpen(false);
//       document.body.style.overflow = "auto";
//       gsap.to(mobileMenuRef.current, {
//         x: '100%', duration: 0.5, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
//         onComplete: () => {
//           setIsAnimating(false);
//           setIsMobileCategoryOpen(false);
//         }
//       });
//     }
//   };

//   const closeMenuAndNavigate = () => {
//     if (isAnimating || !isMobileMenuOpen) return;
//     setIsAnimating(true);
//     setIsMobileMenuOpen(false);
//     document.body.style.overflow = "auto";
//     gsap.to(mobileMenuRef.current, {
//       x: '100%', duration: 0.5, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
//       onComplete: () => {
//         setIsAnimating(false);
//         setIsMobileCategoryOpen(false);
//       }
//     });
//   };

//   useEffect(() => {
//     gsap.set(mobileMenuRef.current, { x: "100%" });
//   }, []);

//   useEffect(() => {
//     if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
//       const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
//       if (isHeroActive) {
//         tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
//           initialContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
//         );
//       } else {
//         tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
//           scrolledContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
//         );
//       }
//     }
//   }, [isHeroActive, isDesktop]);

//   useEffect(() => {
//     const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
//     const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
//     const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

//     window.addEventListener("header:update", handleHeaderUpdate);
//     window.addEventListener("hero:hiding", handleHeroHiding);
//     window.addEventListener("hero:showing", handleHeroShowing);

//     const onHomePage = location.pathname === "/";
//     setIsHeroActive(onHomePage && isDesktop);

//     if (isDesktop) {
//       gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
//       gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
//     } else {
//       gsap.set(initialContentRef.current, { y: "-100%" });
//       gsap.set(scrolledContentRef.current, { y: "0%" });
//     }
//     setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
//     if (isMobileMenuOpen && isDesktop) {
//       closeMenuAndNavigate();
//     }

//     return () => {
//       window.removeEventListener("header:update", handleHeaderUpdate);
//       window.removeEventListener("hero:hiding", handleHeroHiding);
//       window.removeEventListener("hero:showing", handleHeroShowing);
//     };
//   }, [location.pathname, isDesktop]);

//   const scrolledBgClass = scrolledHeaderStyle === "light" || !isDesktop ? "bg-white shadow-md" : "bg-transparent";
//   const scrolledContentVariant = scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

//   return (
//     <>
//       <header className="w-full fixed top-0 z-[100] h-[72px]">
//         <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
//           <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//         </div>
//         <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
//           <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//         </div>
//       </header>

//       <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden" style={{ willChange: "transform" }}>
//         <div className="p-4 border-b flex justify-between items-center h-[72px]">
//           <Link to="/" onClick={closeMenuAndNavigate}>
//             <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
//           </Link>
//           <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 focus:outline-none" aria-label="Close menu">
//             <FaTimes />
//           </button>
//         </div>

//         <nav className="flex flex-col p-4 overflow-y-auto" style={{ height: "calc(100vh - 72px)" }}>
//           <Link to="/" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>HOME</Link>
//           <div className="">
//             <button onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)} className="w-full flex justify-between items-center text-lg font-medium text-black py-3">
//               <span>CATEGORIES</span>
//               <FaChevronDown className={`transition-transform duration-300 ${isMobileCategoryOpen ? "rotate-180" : ""}`} />
//             </button>
//             {isMobileCategoryOpen && (
//               <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
//                 {allUniqueCategories.map((cat) => (
//                   <Link key={cat} to={`/${cat.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-700 py-1" onClick={closeMenuAndNavigate}>
//                     {cat}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//           <Link to="/consult" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONSULTANCY</Link>
//           <Link to="/contact" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONTACT</Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaShoppingCart, FaTimes, FaChevronDown } from "react-icons/fa";
import { gsap } from "gsap";

// --- CATEGORY DATA (Source of Truth) ---
const categoryColumns = [
  {
    title: "Popular Categories",
    items: [
      "Mass Gainer", "Pre Workout", "Carbs", "Fat Burner", "Protein Blend", "Energy Drink", "Protein Vegan",
    ],
  },
  {
    title: "Shop By Category A–D",
    items: ["Amino Acids / BCAA / EAA", "Arginine & Glutamine", "Carbs", "Creatine"],
  },
  { title: "Shop By Category E–H", items: ["Energy Drink", "Fat Burner"] },
  { title: "Shop By Category I–N", items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"] },
  {
    title: "Shop By Category O–Z",
    items: [
      "Pre Workout", "Probiotic", "Protein Blend", "Protein Casein", "Protein Hydrolyzed", "Protein Isolate", "Protein Vegan",
    ],
  },
];

const allUniqueCategories = [...new Set(categoryColumns.flatMap((col) => col.items))].sort();

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// --- CategoriesDropdown (CORRECTED) ---
const CategoriesDropdown = ({ variant = "dark" }) => {
  // Get the current location object
  const location = useLocation(); 
  const dropdownRef = useRef(null);
  const timeline = useRef(null);
  const isLight = variant === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";

  useEffect(() => {
    gsap.set(dropdownRef.current, { autoAlpha: 0, y: -20 });
    timeline.current = gsap.to(dropdownRef.current, {
      autoAlpha: 1, y: 0, duration: 0.5, ease: "cubic-bezier(.16,.84,.44,1)", paused: true,
    });
  }, []);
  
  // This effect listens for URL changes and closes the menu
  useEffect(() => {
    if (timeline.current) {
      timeline.current.reverse();
    }
  }, [location.pathname]); // Dependency array ensures this runs on every path change

  const handleCategoriesMouseEnter = () => timeline.current.play();
  const handleCategoriesMouseLeave = () => timeline.current.reverse();

  const SubMenuItem = ({ label }) => {
    const categorySlug = label.toLowerCase().replace(/\s+/g, "-").replace(/\//g, '');
    return (
      <li className="list-none">
        <Link
          to={`/${categorySlug}`}
          className="hover:text-orange-500 block py-1.5 transition-colors duration-300 text-base"
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <div onMouseEnter={handleCategoriesMouseEnter} onMouseLeave={handleCategoriesMouseLeave} className="relative h-full flex items-center">
      <div className={`flex items-center space-x-2 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
        <span>CATEGORIES</span>
        <FaChevronDown className="text-xs" />
      </div>
      <div ref={dropdownRef} className="invisible fixed left-0 w-full bg-white shadow-xl  z-50" style={{ top: "72px" }}>
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-10">
          {categoryColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-gray-800 pb-2 mb-3 text-base">{col.title}</h4>
              <ul className="space-y-1">
                {col.items.map((item) => <SubMenuItem key={item} label={item} />)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- HeaderContent (Unchanged) ---
const HeaderContent = ({ variant = "dark", onMenuToggle, isMenuOpen, isDesktop }) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
  const logoSrc = isLight ? "/logo-1.png" : "/white.png";
  const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white/20 hover:bg-white/30";
  const userIconColor = isLight ? "text-black" : "text-white";
  const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

  return (
    <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
      <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
      {isDesktop && (
        <nav className="hidden md:flex items-center h-full space-x-6">
          <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
          <CategoriesDropdown variant={variant} />
          <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
          <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
        </nav>
      )}
      <div className="flex items-center space-x-4">
        <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
          <FaUser className={`text-lg ${userIconColor}`} />
        </Link>
        <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
          <FaShoppingCart className={`text-lg ${userIconColor}`} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
        </Link>
        <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
          {isMenuOpen ? <FaTimes /> : "☰"}
        </button>
      </div>
    </div>
  );
};

// --- Main Header Component (Unchanged) ---
const Header = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
  const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const initialContentRef = useRef(null);
  const scrolledContentRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(mobileMenuRef.current, {
        x: '0%', duration: 0.6, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
        onComplete: () => {
          setIsMobileMenuOpen(true);
          setIsAnimating(false);
        }
      });
    } else {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = "auto";
      gsap.to(mobileMenuRef.current, {
        x: '100%', duration: 0.5, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
        onComplete: () => {
          setIsAnimating(false);
          setIsMobileCategoryOpen(false);
        }
      });
    }
  };

  const closeMenuAndNavigate = () => {
    if (isAnimating || !isMobileMenuOpen) return;
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    gsap.to(mobileMenuRef.current, {
      x: '100%', duration: 0.5, ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
      onComplete: () => {
        setIsAnimating(false);
        setIsMobileCategoryOpen(false);
      }
    });
  };

  useEffect(() => {
    gsap.set(mobileMenuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      if (isHeroActive) {
        tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
          initialContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
        );
      } else {
        tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
          scrolledContentRef.current, { y: "-100%" }, { y: "0%", duration: 0.6 }, "-=0.2"
        );
      }
    }
  }, [isHeroActive, isDesktop]);

  useEffect(() => {
    const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
    const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
    const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

    window.addEventListener("header:update", handleHeaderUpdate);
    window.addEventListener("hero:hiding", handleHeroHiding);
    window.addEventListener("hero:showing", handleHeroShowing);

    const onHomePage = location.pathname === "/";
    setIsHeroActive(onHomePage && isDesktop);

    if (isDesktop) {
      gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
      gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
    } else {
      gsap.set(initialContentRef.current, { y: "-100%" });
      gsap.set(scrolledContentRef.current, { y: "0%" });
    }
    setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
    if (isMobileMenuOpen && isDesktop) {
      closeMenuAndNavigate();
    }

    return () => {
      window.removeEventListener("header:update", handleHeaderUpdate);
      window.removeEventListener("hero:hiding", handleHeroHiding);
      window.removeEventListener("hero:showing", handleHeroShowing);
    };
  }, [location.pathname, isDesktop]);

  const scrolledBgClass = scrolledHeaderStyle === "light" || !isDesktop ? "bg-white shadow-md" : "bg-transparent";
  const scrolledContentVariant = scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

  return (
    <>
      <header className="w-full fixed top-0 z-[100] h-[72px]">
        <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
          <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
        </div>
        <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
          <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
        </div>
      </header>

      <div ref={mobileMenuRef} className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden" style={{ willChange: "transform" }}>
        <div className="p-4 border-b flex justify-between items-center h-[72px]">
          <Link to="/" onClick={closeMenuAndNavigate}>
            <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
          </Link>
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 focus:outline-none" aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-4 overflow-y-auto" style={{ height: "calc(100vh - 72px)" }}>
          <Link to="/" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>HOME</Link>
          <div>
            <button onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)} className="w-full flex justify-between items-center text-lg font-medium text-black py-3">
              <span>CATEGORIES</span>
              <FaChevronDown className={`transition-transform duration-300 ${isMobileCategoryOpen ? "rotate-180" : ""}`} />
            </button>
            {isMobileCategoryOpen && (
              <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
                {allUniqueCategories.map((cat) => (
                  <Link key={cat} to={`/${cat.toLowerCase().replace(/\s+/g, "-").replace(/\//g, '')}`} className="text-gray-700 py-1" onClick={closeMenuAndNavigate}>
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/consult" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONSULTANCY</Link>
          <Link to="/contact" className="text-lg font-medium text-black py-3 " onClick={closeMenuAndNavigate}>CONTACT</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
