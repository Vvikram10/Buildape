// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaShoppingCart, FaTimes } from "react-icons/fa";
// import { gsap } from "gsap";

// // Helper Hook for screen size detection
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);
//   return matches;
// };

// // HeaderContent Component
// const HeaderContent = ({ variant = 'dark', onMenuToggle, isMenuOpen, isDesktop }) => {
//     const isLight = variant === 'light';
//     const textColor = isLight ? "text-black" : "text-white";
//     const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
//     const logoSrc = isLight ? "/logo-1.png" : "/white.png";
//     const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
//     const userIconColor = isLight ? "text-black" : "text-black";
//     const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

//     return (
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//             <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
//             <nav className="hidden md:flex space-x-6">
//                 <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//                 <Link to="/menu" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>MENU</Link>
//                 <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
//                 <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//                 <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//                     <FaUser className={`text-lg ${userIconColor}`} />
//                 </Link>
//                 <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//                     <FaShoppingCart className={`text-lg ${userIconColor}`} />
//                     <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
//                 </Link>
//                 <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
//                     {isMenuOpen ? <FaTimes /> : '☰'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Main Header Component
// const Header = () => {
//     const location = useLocation();
//     const isDesktop = useMediaQuery('(min-width: 768px)');
//     const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
//     const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const initialContentRef = useRef(null);
//     const scrolledContentRef = useRef(null);
//     const mobileMenuRef = useRef(null);

//     const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//     // Mobile menu animation
//     useEffect(() => {
//         if (mobileMenuRef.current) {
//             gsap.to(mobileMenuRef.current, {
//                 x: isMobileMenuOpen ? '0%' : '100%',
//                 duration: 0.3,
//                 ease: 'power2.inOut',
//                 overwrite: 'auto'
//             });
//             document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
//         }
//     }, [isMobileMenuOpen]);

//     // Desktop header animation
//     useEffect(() => {
//         if (isDesktop) {
//             const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

//             if (isHeroActive) {
//                 tl.to(scrolledContentRef.current, { y: '-100%', duration: 0.4 });
//                 tl.to({}, { duration: 0.2 });
//                 tl.fromTo(initialContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
//             } else {
//                 tl.to(initialContentRef.current, { y: '-100%', duration: 0.4 });
//                 tl.to({}, { duration: 0.2 });
//                 tl.fromTo(scrolledContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
//             }
//         }
//     }, [isHeroActive, isDesktop]);

//     // Initial setup and events
//     useEffect(() => {
//         const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
//         const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
//         const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

//         window.addEventListener("header:update", handleHeaderUpdate);
//         window.addEventListener("hero:hiding", handleHeroHiding);
//         window.addEventListener("hero:showing", handleHeroShowing);

//         if (isDesktop) {
//             setIsMobileMenuOpen(false);
//             if (location.pathname === '/') {
//                 gsap.set(initialContentRef.current, { y: '0%' });
//                 gsap.set(scrolledContentRef.current, { y: '-100%' });
//                 setIsHeroActive(true);
//             } else {
//                 gsap.set(initialContentRef.current, { y: '-100%' });
//                 gsap.set(scrolledContentRef.current, { y: '0%' });
//                 setIsHeroActive(false);
//             }
//         } else {
//             gsap.set(initialContentRef.current, { y: '-100%' });
//             gsap.set(scrolledContentRef.current, { y: '0%' });
//             setIsHeroActive(false);
//         }
//         setScrolledHeaderStyle(location.pathname === '/' ? 'transparent' : 'light');

//         return () => {
//             window.removeEventListener("header:update", handleHeaderUpdate);
//             window.removeEventListener("hero:hiding", handleHeroHiding);
//             window.removeEventListener("hero:showing", handleHeroShowing);
//         };
//     }, [location.pathname, isDesktop]);

//     const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
//     const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

//     return (
//         <>
//             <header className="w-full fixed top-0 z-[100] h-[72px] overflow-hidden">
//                 {/* Transparent Header (for Hero Section) */}
//                 <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
//                     <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>

//                 {/* Scrolled White Header */}
//                 <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
//                     <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>
//             </header>

//             {/* Mobile Menu (Right to Left Slide) */}
// <div
//   ref={mobileMenuRef}
//   className="fixed top-0 right-0 w-full h-full bg-white z-[100] transform translate-x-full shadow-xl md:hidden"
//   style={{ willChange: 'transform' }}
// >
//   {/* Header with Logo and Close Button */}
//   <div className="p-4 border-b flex justify-between items-center">
//     <Link to="/" onClick={toggleMobileMenu}>
//       <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
//     </Link>
//     <button
//       onClick={toggleMobileMenu}
//       className="text-2xl text-gray-700 focus:outline-none"
//       aria-label="Close menu"
//     >
//       <FaTimes className="text-xl" /> {/* Thin close icon */}
//     </button>
//   </div>

//   {/* Navigation Links */}
//   <nav className="flex flex-col space-y-4 p-4">
//     <Link to="/" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>HOME</Link>
//     <Link to="/menu" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>MENU</Link>
//     <Link to="/consult" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONSULTANCY</Link>
//     <Link to="/contact" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONTACT</Link>
//   </nav>
// </div>
//         </>
//     );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaUser, FaShoppingCart, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";
// import { gsap } from "gsap";

// // Helper Hook for screen size detection
// const useMediaQuery = (query) => {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);
//   return matches;
// };

// // Categories Component
// const CategoriesDropdown = ({ variant = 'dark' }) => {
//   const [showCategories, setShowCategories] = useState(false);
//   const categoriesTimeoutRef = useRef(null);
//   const isLight = variant === 'light';
//   const textColor = isLight ? "text-black" : "text-white";
//   const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
//   const dropdownRef = useRef(null);

//   const handleCategoriesMouseEnter = () => {
//     if (categoriesTimeoutRef.current) {
//       clearTimeout(categoriesTimeoutRef.current);
//     }
//     setShowCategories(true);
//   };

//   const handleCategoriesMouseLeave = () => {
//     categoriesTimeoutRef.current = setTimeout(() => {
//       setShowCategories(false);
//     }, 150);
//   };

//   const SubMenuItem = ({ label }) => (
//     <li className="group relative overflow-hidden list-none">
//       <a
//         href="#"
//         className="hover:text-orange-500 block py-1 transition-all duration-300 group-hover:translate-x-2"
//       >
//         {label}
//         {/* <FaArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" /> */}
//       </a>
//     </li>
//   );

//   return (
//     <div
//       onMouseEnter={handleCategoriesMouseEnter}
//       onMouseLeave={handleCategoriesMouseLeave}
//       className="relative h-full"
//     >
//       <div className={`flex items-center space-x-1 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>
//         <span>CATEGORIES</span>
//         <FaChevronDown className="text-xs" />
//       </div>

//       {showCategories && (
//         <div
//           ref={dropdownRef}
//           className="fixed left-0 w-full bg-white shadow-lg border-t z-50"
//           style={{
//             top: '65px',
//             animation: 'fadeIn 0.2s ease-out'
//           }}
//           onMouseEnter={() => clearTimeout(categoriesTimeoutRef.current)}
//           onMouseLeave={handleCategoriesMouseLeave}
//         >
//           <div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
//             {/* Column 1 */}
//             <div>
//               <h4 className="font-semibold pb-1 mb-2">Popular Categories</h4>
//               {[
//                 "Mass Gainer",
//                 "Pre Workout",
//                 "Carbs",
//                 "Fat Burner",
//                 "Protein Blend",
//                 "Energy Drink",
//                 "Protein Vegan"
//               ].map((item) => (
//                 <SubMenuItem key={item} label={item} />
//               ))}
//             </div>

//             {/* Column 2 */}
//             <div>
//               <h4 className="font-semibold pb-1 mb-2">Shop By Category A–D</h4>
//               {[
//                 "Amino Acids / BCAA / EAA",
//                 "Arginine & Glutamine",
//                 "Carbs",
//                 "Creatine"
//               ].map((item) => (
//                 <SubMenuItem key={item} label={item} />
//               ))}
//             </div>

//             {/* Column 3 */}
//             <div>
//               <h4 className="font-semibold pb-1 mb-2">Shop By Category E–H</h4>
//               {["Energy Drink", "Fat Burner"].map((item) => (
//                 <SubMenuItem key={item} label={item} />
//               ))}
//             </div>

//             {/* Column 4 */}
//             <div>
//               <h4 className="font-semibold pb-1 mb-2">Shop By Category I–N</h4>
//               {[
//                 "Joint Health",
//                 "Keto",
//                 "Kidney & Liver",
//                 "Mass Gainer"
//               ].map((item) => (
//                 <SubMenuItem key={item} label={item} />
//               ))}
//             </div>

//             {/* Column 5 */}
//             <div>
//               <h4 className="font-semibold pb-1 mb-2">Shop By Category O–Z</h4>
//               {[
//                 "Pre Workout",
//                 "Probiotic",
//                 "Protein Blend",
//                 "Protein Casein",
//                 "Protein Hydrolyzed",
//                 "Protein Isolate",
//                 "Protein Vegan"
//               ].map((item) => (
//                 <SubMenuItem key={item} label={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // HeaderContent Component
// const HeaderContent = ({ variant = 'dark', onMenuToggle, isMenuOpen, isDesktop }) => {
//     const isLight = variant === 'light';
//     const textColor = isLight ? "text-black" : "text-white";
//     const hoverTextColor = isLight ? "hover:text-gray-600" : "hover:text-gray-300";
//     const logoSrc = isLight ? "/logo-1.png" : "/white.png";
//     const userIconBg = isLight ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-300";
//     const userIconColor = isLight ? "text-black" : "text-black";
//     const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

//     return (
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center relative">
//             <Link to="/"><img src={logoSrc} alt="BUILDAPE" className="h-12" /></Link>
//             <nav className="hidden md:flex space-x-6">
//                 <Link to="/" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>HOME</Link>
//                 <CategoriesDropdown variant={variant} />
//                 <Link to="/consult" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONSULTANCY</Link>
//                 <Link to="/contact" className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}>CONTACT</Link>
//             </nav>
//             <div className="flex items-center space-x-4">
//                 <Link to="/login" className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//                     <FaUser className={`text-lg ${userIconColor}`} />
//                 </Link>
//                 <Link to="/cart" className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}>
//                     <FaShoppingCart className={`text-lg ${userIconColor}`} />
//                     <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</span>
//                 </Link>
//                 <button onClick={onMenuToggle} className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}>
//                     {isMenuOpen ? <FaTimes /> : '☰'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// // Main Header Component
// const Header = () => {
//     const location = useLocation();
//     const isDesktop = useMediaQuery('(min-width: 768px)');
//     const [isHeroActive, setIsHeroActive] = useState(location.pathname === '/');
//     const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState('transparent');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const initialContentRef = useRef(null);
//     const scrolledContentRef = useRef(null);
//     const mobileMenuRef = useRef(null);

//     const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//     // Mobile menu animation
//     useEffect(() => {
//         if (mobileMenuRef.current) {
//             gsap.to(mobileMenuRef.current, {
//                 x: isMobileMenuOpen ? '0%' : '100%',
//                 duration: 0.3,
//                 ease: 'power2.inOut',
//                 overwrite: 'auto'
//             });
//             document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
//         }
//     }, [isMobileMenuOpen]);

//     // Desktop header animation
//     useEffect(() => {
//         if (isDesktop) {
//             const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

//             if (isHeroActive) {
//                 tl.to(scrolledContentRef.current, { y: '-100%', duration: 0.4 });
//                 tl.to({}, { duration: 0.2 });
//                 tl.fromTo(initialContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
//             } else {
//                 tl.to(initialContentRef.current, { y: '-100%', duration: 0.4 });
//                 tl.to({}, { duration: 0.2 });
//                 tl.fromTo(scrolledContentRef.current, { y: '-100%' }, { y: '0%', duration: 0.6 });
//             }
//         }
//     }, [isHeroActive, isDesktop]);

//     // Initial setup and events
//     useEffect(() => {
//         const handleHeaderUpdate = (event) => setScrolledHeaderStyle(event.detail.style);
//         const handleHeroHiding = () => { if (isDesktop) setIsHeroActive(false); };
//         const handleHeroShowing = () => { if (isDesktop) setIsHeroActive(true); };

//         window.addEventListener("header:update", handleHeaderUpdate);
//         window.addEventListener("hero:hiding", handleHeroHiding);
//         window.addEventListener("hero:showing", handleHeroShowing);

//         if (isDesktop) {
//             setIsMobileMenuOpen(false);
//             if (location.pathname === '/') {
//                 gsap.set(initialContentRef.current, { y: '0%' });
//                 gsap.set(scrolledContentRef.current, { y: '-100%' });
//                 setIsHeroActive(true);
//             } else {
//                 gsap.set(initialContentRef.current, { y: '-100%' });
//                 gsap.set(scrolledContentRef.current, { y: '0%' });
//                 setIsHeroActive(false);
//             }
//         } else {
//             gsap.set(initialContentRef.current, { y: '-100%' });
//             gsap.set(scrolledContentRef.current, { y: '0%' });
//             setIsHeroActive(false);
//         }
//         setScrolledHeaderStyle(location.pathname === '/' ? 'transparent' : 'light');

//         return () => {
//             window.removeEventListener("header:update", handleHeaderUpdate);
//             window.removeEventListener("hero:hiding", handleHeroHiding);
//             window.removeEventListener("hero:showing", handleHeroShowing);
//         };
//     }, [location.pathname, isDesktop]);

//     const scrolledBgClass = scrolledHeaderStyle === 'light' ? 'bg-white shadow-md' : 'bg-transparent';
//     const scrolledContentVariant = scrolledHeaderStyle === 'light' ? 'light' : 'dark';

//     return (
//         <>
//             <header className="w-full fixed top-0 z-[100] h-[72px] ">
//                 {/* Transparent Header (for Hero Section) */}
//                 <div ref={initialContentRef} className="bg-transparent w-full absolute top-0 left-0">
//                     <HeaderContent variant="dark" onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>

//                 {/* Scrolled White Header */}
//                 <div ref={scrolledContentRef} className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}>
//                     <HeaderContent variant={scrolledContentVariant} onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
//                 </div>
//             </header>

//             {/* Mobile Menu (Right to Left Slide) */}
//             <div
//               ref={mobileMenuRef}
//               className="fixed top-0 right-0 w-full h-full bg-white z-[100] transform translate-x-full shadow-xl md:hidden"
//               style={{ willChange: 'transform' }}
//             >
//               {/* Header with Logo and Close Button */}
//               <div className="p-4 border-b flex justify-between items-center">
//                 <Link to="/" onClick={toggleMobileMenu}>
//                   <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
//                 </Link>
//                 <button
//                   onClick={toggleMobileMenu}
//                   className="text-2xl text-gray-700 focus:outline-none"
//                   aria-label="Close menu"
//                 >
//                   <FaTimes className="text-xl" />
//                 </button>
//               </div>

//               {/* Navigation Links */}
//               <nav className="flex flex-col space-y-4 p-4">
//                 <Link to="/" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>HOME</Link>
//                 <Link to="/categories" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CATEGORIES</Link>
//                 <Link to="/consult" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONSULTANCY</Link>
//                 <Link to="/contact" className="text-lg font-medium text-black py-2" onClick={toggleMobileMenu}>CONTACT</Link>
//               </nav>
//             </div>

//             {/* Add fadeIn animation */}
//             <style jsx global>{`
//               @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(-10px); }
//                 to { opacity: 1; transform: translateY(0); }
//               }
//             `}</style>
//         </>
//     );
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
      "Mass Gainer",
      "Pre Workout",
      "Carbs",
      "Fat Burner",
      "Protein Blend",
      "Energy Drink",
      "Protein Vegan",
    ],
  },
  {
    title: "Shop By Category A–D",
    items: [
      "Amino Acids / BCAA / EAA",
      "Arginine & Glutamine",
      "Carbs",
      "Creatine",
    ],
  },
  {
    title: "Shop By Category E–H",
    items: ["Energy Drink", "Fat Burner"],
  },
  {
    title: "Shop By Category I–N",
    items: ["Joint Health", "Keto", "Kidney & Liver", "Mass Gainer"],
  },
  {
    title: "Shop By Category O–Z",
    items: [
      "Pre Workout",
      "Probiotic",
      "Protein Blend",
      "Protein Casein",
      "Protein Hydrolyzed",
      "Protein Isolate",
      "Protein Vegan",
    ],
  },
];

// Helper to get all unique categories for mobile view
const allUniqueCategories = [
  ...new Set(categoryColumns.flatMap((col) => col.items)),
].sort();

// Helper Hook for screen size detection
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// Categories Component (For Desktop)
const CategoriesDropdown = ({ variant = "dark" }) => {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesTimeoutRef = useRef(null);
  const isLight = variant === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const hoverTextColor = isLight
    ? "hover:text-gray-600"
    : "hover:text-gray-300";
  const dropdownRef = useRef(null);

  const handleCategoriesMouseEnter = () => {
    clearTimeout(categoriesTimeoutRef.current);
    setShowCategories(true);
  };

  const handleCategoriesMouseLeave = () => {
    categoriesTimeoutRef.current = setTimeout(() => {
      setShowCategories(false);
    }, 150);
  };

  const SubMenuItem = ({ label }) => (
    <li className="list-none">
      <a
        href="#"
        className="hover:text-orange-500 block py-1 transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );

  return (
    <div
      onMouseEnter={handleCategoriesMouseEnter}
      onMouseLeave={handleCategoriesMouseLeave}
      className="relative h-full flex items-center"
    >
      <div
        className={`flex items-center space-x-1 cursor-pointer font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
      >
        <span>CATEGORIES</span>
        <FaChevronDown className="text-xs" />
      </div>
      {showCategories && (
        <div
          ref={dropdownRef}
          className="fixed left-0 w-full bg-white shadow-lg border-t z-50"
          style={{ top: "72px", animation: "fadeIn 0.2s ease-out" }}
          onMouseEnter={() => clearTimeout(categoriesTimeoutRef.current)}
          onMouseLeave={handleCategoriesMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-700">
            {categoryColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold pb-1 mb-2">{col.title}</h4>
                <ul>
                  {col.items.map((item) => (
                    <SubMenuItem key={item} label={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// HeaderContent Component
const HeaderContent = ({
  variant = "dark",
  onMenuToggle,
  isMenuOpen,
  isDesktop,
}) => {
  const isLight = variant === "light";
  const textColor = isLight ? "text-black" : "text-white";
  const hoverTextColor = isLight
    ? "hover:text-gray-600"
    : "hover:text-gray-300";
  const logoSrc = isLight ? "/logo-1.png" : "/white.png";
  const userIconBg = isLight
    ? "bg-gray-200 hover:bg-gray-300"
    : "bg-white/20 hover:bg-white/30";
  const userIconColor = isLight ? "text-black" : "text-white";
  const buttonTextColor = isMenuOpen && !isDesktop ? "text-black" : textColor;

  return (
    <div className="container mx-auto px-4 h-[72px] flex justify-between items-center relative">
      <Link to="/">
        <img src={logoSrc} alt="BUILDAPE" className="h-12" />
      </Link>
      {isDesktop && (
        <nav className="hidden md:flex items-center h-full space-x-6">
          <Link
            to="/"
            className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
          >
            HOME
          </Link>
          <CategoriesDropdown variant={variant} />
          <Link
            to="/consult"
            className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
          >
            CONSULTANCY
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 ${textColor} ${hoverTextColor}`}
          >
            CONTACT
          </Link>
        </nav>
      )}
      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className={`flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
        >
          <FaUser className={`text-lg ${userIconColor}`} />
        </Link>
        <Link
          to="/cart"
          className={`relative flex items-center rounded-full p-2 transition-colors duration-300 ${userIconBg}`}
        >
          <FaShoppingCart className={`text-lg ${userIconColor}`} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
            3
          </span>
        </Link>
        <button
          onClick={onMenuToggle}
          className={`md:hidden text-2xl transition-colors duration-300 z-[110] relative ${buttonTextColor}`}
        >
          {isMenuOpen ? <FaTimes /> : "☰"}
        </button>
      </div>
    </div>
  );
};

// Main Header Component
const Header = () => {
  const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isHeroActive, setIsHeroActive] = useState(location.pathname === "/");
  const [scrolledHeaderStyle, setScrolledHeaderStyle] = useState("transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  const initialContentRef = useRef(null);
  const scrolledContentRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    const willOpen = !isMobileMenuOpen;
    setIsMobileMenuOpen(willOpen);
    // Reset category dropdown when closing main menu
    if (!willOpen) {
      setIsMobileCategoryOpen(false);
    }
  };

  // Fix for hamburger menu not working on first click
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { x: "100%" });
    }
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: isMobileMenuOpen ? "0%" : "100%",
        duration: 0.4,
        ease: "power3.inOut",
      });
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }
  }, [isMobileMenuOpen]);

  // Desktop header animation
  useEffect(() => {
    if (isDesktop && initialContentRef.current && scrolledContentRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      if (isHeroActive) {
        tl.to(scrolledContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
          initialContentRef.current,
          { y: "-100%" },
          { y: "0%", duration: 0.6 },
          "-=0.2"
        );
      } else {
        tl.to(initialContentRef.current, { y: "-100%", duration: 0.4 }).fromTo(
          scrolledContentRef.current,
          { y: "-100%" },
          { y: "0%", duration: 0.6 },
          "-=0.2"
        );
      }
    }
  }, [isHeroActive, isDesktop]);

  // Initial setup and event listeners
  useEffect(() => {
    const handleHeaderUpdate = (event) =>
      setScrolledHeaderStyle(event.detail.style);
    const handleHeroHiding = () => {
      if (isDesktop) setIsHeroActive(false);
    };
    const handleHeroShowing = () => {
      if (isDesktop) setIsHeroActive(true);
    };

    window.addEventListener("header:update", handleHeaderUpdate);
    window.addEventListener("hero:hiding", handleHeroHiding);
    window.addEventListener("hero:showing", handleHeroShowing);

    // Logic to set initial header state based on route and screen size
    const onHomePage = location.pathname === "/";
    setIsHeroActive(onHomePage && isDesktop);

    if (isDesktop) {
      gsap.set(initialContentRef.current, { y: onHomePage ? "0%" : "-100%" });
      gsap.set(scrolledContentRef.current, { y: onHomePage ? "-100%" : "0%" });
    } else {
      // On mobile, always show the scrolled header and hide the transparent one
      gsap.set(initialContentRef.current, { y: "-100%" });
      gsap.set(scrolledContentRef.current, { y: "0%" });
    }
    setScrolledHeaderStyle(onHomePage ? "transparent" : "light");
    if (isMobileMenuOpen && isDesktop) {
      setIsMobileMenuOpen(false);
    }

    return () => {
      window.removeEventListener("header:update", handleHeaderUpdate);
      window.removeEventListener("hero:hiding", handleHeroHiding);
      window.removeEventListener("hero:showing", handleHeroShowing);
    };
  }, [location.pathname, isDesktop]);

  const scrolledBgClass =
    scrolledHeaderStyle === "light" || !isDesktop
      ? "bg-white shadow-md"
      : "bg-transparent";
  const scrolledContentVariant =
    scrolledHeaderStyle === "light" || !isDesktop ? "light" : "dark";

  return (
    <>
      <header className="w-full fixed top-0 z-[100] h-[72px]">
        <div
          ref={initialContentRef}
          className="bg-transparent w-full absolute top-0 left-0"
        >
          <HeaderContent
            variant="dark"
            onMenuToggle={toggleMobileMenu}
            isMenuOpen={isMobileMenuOpen}
            isDesktop={isDesktop}
          />
        </div>
        <div
          ref={scrolledContentRef}
          className={`w-full absolute top-0 left-0 transition-colors duration-300 ${scrolledBgClass}`}
        >
          <HeaderContent
            variant={scrolledContentVariant}
            onMenuToggle={toggleMobileMenu}
            isMenuOpen={isMobileMenuOpen}
            isDesktop={isDesktop}
          />
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-white z-[100] md:hidden"
        style={{ willChange: "transform" }}
      >
        <div className="p-4 border-b flex justify-between items-center h-[72px]">
          <Link to="/" onClick={toggleMobileMenu}>
            <img src="/logo-1.png" alt="BUILDAPE" className="h-10" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-gray-700 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav
          className="flex flex-col p-4 overflow-y-auto"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <Link
            to="/"
            className="text-lg font-medium text-black py-3 "
            onClick={toggleMobileMenu}
          >
            HOME
          </Link>

          {/* --- MOBILE CATEGORY DROPDOWN --- */}
          <div className="">
            <button
              onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
              className="w-full flex justify-between items-center text-lg font-medium text-black py-3"
            >
              <span>CATEGORIES</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isMobileCategoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileCategoryOpen && (
              <div className="pt-2 pb-3 pl-4 flex flex-col space-y-2">
                {allUniqueCategories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-700 py-1"
                    onClick={toggleMobileMenu}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/consult"
            className="text-lg font-medium text-black py-3 "
            onClick={toggleMobileMenu}
          >
            CONSULTANCY
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-black py-3 "
            onClick={toggleMobileMenu}
          >
            CONTACT
          </Link>
        </nav>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
