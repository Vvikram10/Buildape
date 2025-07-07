

// // import React, { useEffect } from 'react';
// // import { gsap } from 'gsap';

// // const TopProduct = () => {
// //   const products = [
// //     {
// //       id: 'chicago',
// //       name: 'Batch 27',
// //       variant: 'Batch Nutrition',
// //       description: 'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
// //       price: '$49',
// //       image: '/product-1.png',
// //     },
// //     {
// //       id: 'game-royal',
// //       name: 'Diesel Perfect Sports',
// //       variant: 'Perfect Nutrition',
// //       description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
// //       price: '$56',
// //       image: '/product-2.png',
// //     },
// //     {
// //       id: 'pine-green',
// //       name: 'Total War',
// //       variant: 'Iso Nutrition',
// //       description: 'Total War is the ultimate pre-workout supplement designed to enhance your performance and endurance.',
// //       price: '$48',
// //       image: '/product-5.png',
// //     },
// //     {
// //       id: 'court-purple',
// //       name: 'RYSE BCAA/EAA',
// //       variant: 'RYSE Nutrition',
// //       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
// //       price: '$40',
// //       image: '/product-4.png',
// //     },
// //   ];

// //   useEffect(() => {
// //     if (typeof window === 'undefined') return;

// //     requestAnimationFrame(() => {
// //       const shoeSections = document.querySelectorAll('.shoe-section');
// //       let activeSection = null;
// //       const isMobile = window.innerWidth < 640;

// //       gsap.set(shoeSections, {
// //         width: isMobile ? '90vw' : '300px',
// //         flexShrink: 0,
// //       });

// //       gsap.set('.shoe-content', { opacity: 0, y: 20 });
// //       gsap.set('.nike-text', { opacity: 0 });
// //       gsap.set('.shoe-image', {
// //         rotation: 15,
// //         scale: 0.7,
// //         transformOrigin: 'center center',
// //       });
// //       gsap.set('.shoe-shadow', {
// //         opacity: 1,
// //         scaleX: 0.8,
// //         scaleY: 0.8,
// //         transformOrigin: 'center center',
// //       });

// //       shoeSections.forEach((section) => {
// //         section.addEventListener('click', () => {
// //           const isAlreadyActive = section === activeSection;
// //           shoeSections.forEach((s) => s.classList.remove('active'));
// //           activeSection = isAlreadyActive ? null : section;

// //           const masterTL = gsap.timeline({
// //             defaults: {
// //               duration: 0.5,
// //               ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
// //             }
// //           });

// //           if (isAlreadyActive) {
// //             masterTL
// //               .to(section, {
// //                 width: isMobile ? '90vw' : '300px'
// //               }, 0)
// //               .to(section.querySelector('.shoe-image'), {
// //                 rotation: 15,
// //                 scale: 0.7,
// //               }, 0)
// //               .to(section.querySelector('.shoe-shadow'), {
// //                 opacity: 1,
// //                 scaleX: 0.8,
// //                 scaleY: 0.8
// //               }, 0)
// //               .to(section.querySelector('.shoe-content'), {
// //                 opacity: 0,
// //                 y: 20
// //               }, 0)
// //               .to(section.querySelectorAll('.nike-text'), {
// //                 opacity: 0
// //               }, 0)
// //               .set(section.querySelector('.static-price'), { autoAlpha: 1 }, 0);
// //             return;
// //           }

// //           section.classList.add('active');

// //           masterTL
// //             .to(section, {
// //               width: isMobile ? '100vw' : '500px'
// //             }, 0)
// //             .to(section.querySelector('.shoe-image'), {
// //               rotation: 0,
// //               scale: 1.15
// //             }, 0)
// //             .to(section.querySelector('.shoe-shadow'), {
// //               opacity: 0,
// //               scaleX: 1.15,
// //               scaleY: 1.15
// //             }, 0)
// //             .to(section.querySelectorAll('.nike-text'), {
// //               opacity: 1
// //             }, 0.1)
// //             .to(section.querySelector('.shoe-content'), {
// //               opacity: 1,
// //               y: 0
// //             }, 0.1)
// //             .set(section.querySelector('.static-price'), { autoAlpha: 0 }, 0);

// //           shoeSections.forEach((otherSection) => {
// //             if (otherSection !== section) {
// //               masterTL
// //                 .to(otherSection, {
// //                   width: isMobile ? '10vw' : '300px'
// //                 }, 0)
// //                 .to(otherSection.querySelector('.shoe-image'), {
// //                   rotation: 15,
// //                   scale: 0.7
// //                 }, 0)
// //                 .to(otherSection.querySelector('.shoe-shadow'), {
// //                   opacity: 1,
// //                   scaleX: 0.8,
// //                   scaleY: 0.8
// //                 }, 0)
// //                 .to(otherSection.querySelector('.shoe-content'), {
// //                   opacity: 0,
// //                   y: 20
// //                 }, 0)
// //                 .to(otherSection.querySelectorAll('.nike-text'), {
// //                   opacity: 0
// //                 }, 0)
// //                 .set(otherSection.querySelector('.static-price'), { autoAlpha: 1 }, 0);
// //             }
// //           });
// //         });
// //       });
// //     });
// //   }, []);

// //   return (
// //     <div className="bg-gradient-to-br from-[#f8f5ee] to-[#fcfcfc] text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
// //       <header className="text-center py-12 px-4">
// //         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Product</h2>
// //         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// //           Our best-selling products with interactive 3D rotation effect
// //         </p>
// //       </header>

// //       <main className="flex w-full h-[650px] overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className="shoe-section snap-center flex-shrink-0 min-w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg"
// //             data-shoe={product.id}
// //           >
// //             {/* Nike Text */}
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               {[...Array(3)].map((_, idx) => (
// //                 <div key={idx} className="nike-text">
// //                   <span
// //                     className={`text-8xl font-extrabold tracking-wider ${idx === 1 ? 'text-gray-200 py-4' : 'text-transparent'}`}
// //                     style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
// //                   >
// //                     {product.name.split(' ')[0]}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Product Image & Shadow */}
// //             <div className="relative z-20 w-full flex items-center justify-center pt-8">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// //               />
// //               <div className="shoe-shadow absolute bottom-0 w-[60%] h-4 bg-gray-500/30 rounded-full blur-md"></div>
// //             </div>

// //             {/* Expandable Content */}
// //             <div className="shoe-content absolute bottom-[5px] left-0 right-0 z-30 text-center p-4">
// //               <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
// //               <h4 className="text-2xl font-bold text-gray-900">{product.variant}</h4>
// //               <p className="text-xs font-light text-gray-600 max-w-[280px] mx-auto mb-4">
// //                 {product.description}
// //               </p>
// //               <div className="flex justify-center">
// //                 <button className="py-1 px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200">
// //                   {product.price}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Static Price */}
// //             <div className="static-price absolute bottom-4 z-10 text-center text-base font-semibold text-black bg-white px-4 py-1 rounded-full shadow transition-opacity duration-300">
// //               {product.price}
// //             </div>
// //           </div>
// //         ))}
// //       </main>
// //     </div>
// //   );
// // };

// // export default TopProduct;

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const TopProduct = () => {
//   const products = [
//     {
//       id: 'chicago',
//       name: 'Batch 27',
//       variant: 'Batch Nutrition',
//       description: 'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
//       price: '$49',
//       image: '/product-1.png',
//     },
//     {
//       id: 'game-royal',
//       name: 'Diesel Perfect Sports',
//       variant: 'Perfect Nutrition',
//       description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
//       price: '$56',
//       image: '/product-2.png',
//     },
//     {
//       id: 'pine-green',
//       name: 'Total War',
//       variant: 'Iso Nutrition',
//       description: 'Total War is the ultimate pre-workout supplement designed to enhance your performance and endurance.',
//       price: '$48',
//       image: '/product-5.png',
//     },
//     {
//       id: 'court-purple',
//       name: 'RYSE BCAA/EAA',
//       variant: 'RYSE Nutrition',
//       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
//       price: '$40',
//       image: '/product-4.png',
//     },
//     {
//       id: 'court-purple',
//       name: 'RYSE BCAA/EAA',
//       variant: 'RYSE Nutrition',
//       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
//       price: '$40',
//       image: '/product-4.png',
//     },
//     {
//       id: 'court-purple',
//       name: 'RYSE BCAA/EAA',
//       variant: 'RYSE Nutrition',
//       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
//       price: '$40',
//       image: '/product-4.png',
//     },
//   ];

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const handleResize = () => {
//       const shoeSections = document.querySelectorAll('.shoe-section');
//       const isSmallDevice = window.innerWidth < 768; // Mobile and small tablets

//       gsap.set(shoeSections, {
//         width: isSmallDevice ? '22vw' : '300px', // Inactive width for small screens
//         height: isSmallDevice ? '220px' : '600px', // **Even smaller initial height for small devices**
//         flexShrink: 0,
//       });

//       // Re-apply initial styles if no active section or on active section resize
//       const activeSection = document.querySelector('.shoe-section.active');
//       if (!activeSection) {
//         gsap.set('.shoe-content', { opacity: 0, y: 20 });
//         gsap.set('.nike-text', { opacity: 0 });
//         gsap.set('.shoe-image', {
//           rotation: 15,
//           scale: 0.7,
//           transformOrigin: 'center center',
//         });
//         gsap.set('.shoe-shadow', {
//           opacity: 1,
//           scaleX: 0.8,
//           scaleY: 0.8,
//           transformOrigin: 'center center',
//         });
//         gsap.set('.static-price', { autoAlpha: 1 });
//       } else {
//          // If there's an active section on resize, re-adjust its size
//          gsap.set(activeSection, {
//             width: isSmallDevice ? '90vw' : '500px',
//             height: isSmallDevice ? '400px' : '600px', // **Adjusted active height for small devices**
//          });
//          gsap.set(activeSection.querySelector('.shoe-image'), {
//             scale: isSmallDevice ? 0.9 : 1.15,
//             rotation: 0
//          });
//          gsap.set(activeSection.querySelector('.shoe-shadow'), {
//             opacity: 0,
//             scaleX: isSmallDevice ? 0.9 : 1.15,
//             scaleY: isSmallDevice ? 0.9 : 1.15
//          });
//          gsap.set(activeSection.querySelector('.shoe-content'), {
//             opacity: 1,
//             y: 0
//          });
//          gsap.set(activeSection.querySelectorAll('.nike-text'), {
//             opacity: 1
//          });
//          gsap.set(activeSection.querySelector('.static-price'), { autoAlpha: 0 });
         
//          // Adjust other sections
//          shoeSections.forEach((s) => {
//             if (s !== activeSection) {
//                gsap.set(s, {
//                   width: isSmallDevice ? '10vw' : '300px',
//                   height: isSmallDevice ? '220px' : '600px', // **Inactive height for others**
//                });
//                gsap.set(s.querySelector('.shoe-image'), {
//                   rotation: 15,
//                   scale: 0.7
//                });
//                gsap.set(s.querySelector('.shoe-shadow'), {
//                   opacity: 1,
//                   scaleX: 0.8,
//                   scaleY: 0.8
//                });
//                gsap.set(s.querySelector('.shoe-content'), {
//                   opacity: 0,
//                   y: 20
//                });
//                gsap.set(s.querySelectorAll('.nike-text'), {
//                   opacity: 0
//                });
//                gsap.set(s.querySelector('.static-price'), { autoAlpha: 1 });
//             }
//          });
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial setup

//     let activeSection = null;

//     const shoeSections = document.querySelectorAll('.shoe-section');
//     shoeSections.forEach((section) => {
//       section.addEventListener('click', () => {
//         const isSmallDevice = window.innerWidth < 768;
//         const isAlreadyActive = section === activeSection;

//         shoeSections.forEach((s) => s.classList.remove('active'));
//         activeSection = isAlreadyActive ? null : section;

//         const masterTL = gsap.timeline({
//           defaults: {
//             duration: 0.5,
//             ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
//           }
//         });

//         if (isAlreadyActive) {
//           masterTL
//             .to(section, {
//               width: isSmallDevice ? '22vw' : '300px', // Inactive width
//               height: isSmallDevice ? '220px' : '600px' // **Inactive height**
//             }, 0)
//             .to(section.querySelector('.shoe-image'), {
//               rotation: 15,
//               scale: 0.7,
//             }, 0)
//             .to(section.querySelector('.shoe-shadow'), {
//               opacity: 1,
//               scaleX: 0.8,
//               scaleY: 0.8
//             }, 0)
//             .to(section.querySelector('.shoe-content'), {
//               opacity: 0,
//               y: 20
//             }, 0)
//             .to(section.querySelectorAll('.nike-text'), {
//               opacity: 0
//             }, 0)
//             .set(section.querySelector('.static-price'), { autoAlpha: 1 }, 0);
//           return;
//         }

//         section.classList.add('active');

//         masterTL
//           .to(section, {
//             width: isSmallDevice ? '90vw' : '500px', // Active width
//             height: isSmallDevice ? '400px' : '600px' // **Active height**
//           }, 0)
//           .to(section.querySelector('.shoe-image'), {
//             rotation: 0,
//             scale: isSmallDevice ? 0.9 : 1.15
//           }, 0)
//           .to(section.querySelector('.shoe-shadow'), {
//             opacity: 0,
//             scaleX: isSmallDevice ? 0.9 : 1.15,
//             scaleY: isSmallDevice ? 0.9 : 1.15
//           }, 0)
//           .to(section.querySelectorAll('.nike-text'), {
//             opacity: 1
//           }, 0.1)
//           .to(section.querySelector('.shoe-content'), {
//             opacity: 1,
//             y: 0
//           }, 0.1)
//           .set(section.querySelector('.static-price'), { autoAlpha: 0 }, 0);

//         shoeSections.forEach((otherSection) => {
//           if (otherSection !== section) {
//             masterTL
//               .to(otherSection, {
//                 width: isSmallDevice ? '10vw' : '300px', // Collapsed width
//                 height: isSmallDevice ? '220px' : '600px' // **Collapsed height**
//               }, 0)
//               .to(otherSection.querySelector('.shoe-image'), {
//                 rotation: 15,
//                 scale: 0.7
//               }, 0)
//               .to(otherSection.querySelector('.shoe-shadow'), {
//                 opacity: 1,
//                 scaleX: 0.8,
//                 scaleY: 0.8
//               }, 0)
//               .to(otherSection.querySelector('.shoe-content'), {
//                 opacity: 0,
//                 y: 20
//               }, 0)
//               .to(otherSection.querySelectorAll('.nike-text'), {
//                 opacity: 0
//               }, 0)
//               .set(otherSection.querySelector('.static-price'), { autoAlpha: 1 }, 0);
//           }
//         });
//       });
//     });

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-[#f8f5ee] to-[#fcfcfc] text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
//       <header className="text-center py-12 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Product</h2>
//         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           Our best-selling products with interactive 3D rotation effect
//         </p>
//       </header>

//       <main className="flex w-full h-[450px] md:h-[650px] overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4 items-center justify-start md:justify-center">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="shoe-section snap-center flex-shrink-0 min-w-[100px] md:min-w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg h-[220px] md:h-[600px]" // **Initial card height for small screens**
//             data-shoe={product.id}
//           >
//             {/* Nike Text (smaller for inactive, very small cards) */}
//             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
//               {[...Array(3)].map((_, idx) => (
//                 <div key={idx} className="nike-text">
//                   <span
//                     className={`text-2xl md:text-8xl font-extrabold tracking-wider ${idx === 1 ? 'text-gray-200 py-0.5 md:py-4' : 'text-transparent'}`} // **Even smaller text for inactive state**
//                     style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
//                   >
//                     {product.name.split(' ')[0]}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Product Image & Shadow */}
//             <div className="relative z-20 w-full flex items-center justify-center pt-1 md:pt-8">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="shoe-image w-auto h-auto max-w-[45%] max-h-[30%] md:max-w-[80%] md:max-h-[50%] object-contain drop-shadow-2xl" // **Smaller image for very small inactive card**
//               />
//               <div className="shoe-shadow absolute bottom-0 w-[30%] h-1 md:w-[60%] md:h-4 bg-gray-500/30 rounded-full blur-md"></div>
//             </div>

//             {/* Expandable Content (initially hidden by GSAP, styled for active state) */}
//             <div className="shoe-content absolute bottom-[5px] left-0 right-0 z-30 text-center p-1 md:p-4">
//               <h3 className="text-base md:text-xl font-semibold text-gray-800">{product.name}</h3>
//               <h4 className="text-lg md:text-2xl font-bold text-gray-900">{product.variant}</h4>
//               <p className="text-xs font-light text-gray-600 max-w-[95%] md:max-w-[280px] mx-auto mb-1 md:mb-4">
//                 {product.description}
//               </p>
//               <div className="flex justify-center">
//                 <button className="py-0.5 px-4 md:px-8 bg-black text-white rounded-full font-bold text-sm md:text-lg hover:bg-gray-800 transition-colors duration-200">
//                   {product.price}
//                 </button>
//               </div>
//             </div>

//             {/* Static Price (initially visible, hidden when active) */}
//             <div className="static-price absolute bottom-2 md:bottom-4 z-10 text-center text-xs md:text-base font-semibold text-black bg-white px-2 py-0.5 md:px-4 md:py-1 rounded-full shadow transition-opacity duration-300">
//               {product.price}
//             </div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default TopProduct;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const TopProduct = () => {
  const products = [
    {
      id: 'chicago',
      name: 'Batch 27',
      variant: 'Batch Nutrition',
      description: 'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
      price: '$49',
      image: '/product-1.png',
    },
    {
      id: 'game-royal',
      name: 'Diesel Perfect Sports',
      variant: 'Perfect Nutrition',
      description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
      price: '$56',
      image: '/product-2.png',
    },
    {
      id: 'pine-green',
      name: 'Total War',
      variant: 'Iso Nutrition',
      description: 'Total War is the ultimate pre-workout supplement designed to enhance your performance and endurance.',
      price: '$48',
      image: '/product-5.png',
    },
    {
      id: 'court-purple',
      name: 'RYSE BCAA/EAA',
      variant: 'RYSE Nutrition',
      description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
      price: '$40',
      image: '/product-4.png',
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const shoeSections = document.querySelectorAll('.shoe-section');
      const isSmallDevice = window.innerWidth < 768; // Mobile and small tablets

      // Initial GSAP settings for cards based on device size
      gsap.set(shoeSections, {
        width: isSmallDevice ? '25vw' : '300px', // Inactive width
        height: isSmallDevice ? '180px' : '600px', // Initial height for small devices
        flexShrink: 0,
      });

      // Re-apply initial styles if no active section or on active section resize
      const activeSection = document.querySelector('.shoe-section.active');
      if (!activeSection) {
        gsap.set('.shoe-content', { opacity: 0, y: 20 });
        gsap.set('.nike-text', { opacity: 0 }); // Ensure Nike text is hidden when not active
        gsap.set('.shoe-image', {
          rotation: 15,
          scale: isSmallDevice ? 1.0 : 0.8, // Increased image scale for small inactive cards
          transformOrigin: 'center center',
        });
        gsap.set('.shoe-shadow', {
          opacity: 1,
          scaleX: 0.8,
          scaleY: 0.8,
          transformOrigin: 'center center',
        });
        gsap.set('.static-price', { autoAlpha: 1 });
      } else {
         // If there's an active section on resize, re-adjust its size
         gsap.set(activeSection, {
            width: isSmallDevice ? '90vw' : '500px',
            height: isSmallDevice ? '450px' : '600px', // Active height for small devices
         });
         gsap.set(activeSection.querySelector('.shoe-image'), {
            scale: isSmallDevice ? 1.1 : 1.15, // Active image scale
            rotation: 0
         });
         gsap.set(activeSection.querySelector('.shoe-shadow'), {
            opacity: 0,
            scaleX: isSmallDevice ? 1.1 : 1.15,
            scaleY: isSmallDevice ? 1.1 : 1.15
         });
         gsap.set(activeSection.querySelector('.shoe-content'), {
            opacity: 1,
            y: 0
         });
         gsap.set(activeSection.querySelectorAll('.nike-text'), {
            opacity: 1
         });
         gsap.set(activeSection.querySelector('.static-price'), { autoAlpha: 0 });
         
         // Adjust other sections (collapsed state)
         shoeSections.forEach((s) => {
            if (s !== activeSection) {
               gsap.set(s, {
                  width: isSmallDevice ? '10vw' : '300px',
                  height: isSmallDevice ? '180px' : '600px', // Collapsed height
               });
               gsap.set(s.querySelector('.shoe-image'), {
                  rotation: 15,
                  scale: isSmallDevice ? 1.0 : 0.8 // Collapsed image scale
               });
               gsap.set(s.querySelector('.shoe-shadow'), {
                  opacity: 1,
                  scaleX: 0.8,
                  scaleY: 0.8
               });
               gsap.set(s.querySelector('.shoe-content'), {
                  opacity: 0,
                  y: 20
               });
               gsap.set(s.querySelectorAll('.nike-text'), {
                  opacity: 0
               });
               gsap.set(s.querySelector('.static-price'), { autoAlpha: 1 });
            }
         });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    let activeSection = null;

    const shoeSections = document.querySelectorAll('.shoe-section');
    shoeSections.forEach((section) => {
      section.addEventListener('click', () => {
        const isSmallDevice = window.innerWidth < 768;
        const isAlreadyActive = section === activeSection;

        shoeSections.forEach((s) => s.classList.remove('active'));
        activeSection = isAlreadyActive ? null : section;

        const masterTL = gsap.timeline({
          defaults: {
            duration: 0.5,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1)"
          }
        });

        if (isAlreadyActive) {
          masterTL
            .to(section, {
              width: isSmallDevice ? '25vw' : '300px', // Inactive width
              height: isSmallDevice ? '180px' : '600px' // Inactive height
            }, 0)
            .to(section.querySelector('.shoe-image'), {
              rotation: 15,
              scale: isSmallDevice ? 1.0 : 0.8, // Inactive image scale
            }, 0)
            .to(section.querySelector('.shoe-shadow'), {
              opacity: 1,
              scaleX: 0.8,
              scaleY: 0.8
            }, 0)
            .to(section.querySelector('.shoe-content'), {
              opacity: 0,
              y: 20
            }, 0)
            .to(section.querySelectorAll('.nike-text'), {
              opacity: 0
            }, 0)
            .set(section.querySelector('.static-price'), { autoAlpha: 1 }, 0);
          return;
        }

        section.classList.add('active');

        masterTL
          .to(section, {
            width: isSmallDevice ? '90vw' : '500px', // Active width
            height: isSmallDevice ? '450px' : '600px' // Active height
          }, 0)
          .to(section.querySelector('.shoe-image'), {
            rotation: 0,
            scale: isSmallDevice ? 1.1 : 1.15 // Active image scale
          }, 0)
          .to(section.querySelector('.shoe-shadow'), {
            opacity: 0,
            scaleX: isSmallDevice ? 1.1 : 1.15,
            scaleY: isSmallDevice ? 1.1 : 1.15
          }, 0)
          .to(section.querySelectorAll('.nike-text'), {
            opacity: 1
          }, 0.1)
          .to(section.querySelector('.shoe-content'), {
            opacity: 1,
            y: 0
          }, 0.1)
          .set(section.querySelector('.static-price'), { autoAlpha: 0 }, 0);

        shoeSections.forEach((otherSection) => {
          if (otherSection !== section) {
            masterTL
              .to(otherSection, {
                width: isSmallDevice ? '10vw' : '300px', // Collapsed width
                height: isSmallDevice ? '180px' : '600px' // Collapsed height
              }, 0)
              .to(otherSection.querySelector('.shoe-image'), {
                rotation: 15,
                scale: isSmallDevice ? 1.0 : 0.8 // Collapsed image scale
              }, 0)
              .to(otherSection.querySelector('.shoe-shadow'), {
                opacity: 1,
                scaleX: 0.8,
                scaleY: 0.8
              }, 0)
              .to(otherSection.querySelector('.shoe-content'), {
                opacity: 0,
                y: 20
              }, 0)
              .to(otherSection.querySelectorAll('.nike-text'), {
                opacity: 0
              }, 0)
              .set(otherSection.querySelector('.static-price'), { autoAlpha: 1 }, 0);
          }
        });
      });
    }); // This closing bracket was correctly placed

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // This closing bracket was correctly placed

  return (
    <div className="bg-gradient-to-br from-[#f8f5ee] to-[#fcfcfc] text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
      <header className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Product</h2>
        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Our best-selling products with interactive 3D rotation effect
        </p>
      </header>

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <main className="flex w-full h-[450px] md:h-[650px] overflow-x-auto snap-x hide-scrollbar px-4 md:px-8 xl:px-16 items-center justify-start xl:justify-center"> {/* Adjusted padding and conditional justify-center */}
        {products.map((product) => (
          <div
            key={product.id}
            className="shoe-section snap-start flex-shrink-0 min-w-[100px] md:min-w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg h-[180px] md:h-[600px]" // snap-start added
            data-shoe={product.id}
          >
            {/* Nike Text (fully hidden by GSAP when inactive) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="nike-text">
                  <span
                    className={`text-2xl md:text-8xl font-extrabold tracking-wider ${idx === 1 ? 'text-gray-200 py-0.5 md:py-4' : 'text-transparent'}`}
                    style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
                  >
                    {product.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Product Image & Shadow */}
            <div className="relative z-20 w-full flex items-center justify-center pt-1 md:pt-8">
              <img
                src={product.image}
                alt={product.name}
                className="shoe-image w-auto h-auto max-w-[70%] max-h-[60%] md:max-w-[80%] md:max-h-[50%] object-contain drop-shadow-2xl"
              />
              <div className="shoe-shadow absolute bottom-0 w-[50%] h-1.5 md:w-[60%] md:h-4 bg-gray-500/30 rounded-full blur-md"></div>
            </div>

            {/* Expandable Content (initially hidden by GSAP, styled for active state) */}
            <div className="shoe-content absolute bottom-[5px] left-0 right-0 z-30 text-center p-1 md:p-4">
              <h3 className="text-base md:text-xl font-semibold text-gray-800">{product.name}</h3>
              <h4 className="text-lg md:text-2xl font-bold text-gray-900">{product.variant}</h4>
              <p className="text-xs font-light text-gray-600 max-w-[95%] md:max-w-[280px] mx-auto mb-1 md:mb-4">
                {product.description}
              </p>
              <div className="flex justify-center">
                <button className="py-0.5 px-4 md:px-8 bg-black text-white rounded-full font-bold text-sm md:text-lg hover:bg-gray-800 transition-colors duration-200">
                  {product.price}
                </button>
              </div>
            </div>

            {/* Static Price (initially visible, hidden when active) */}
            <div className="static-price absolute bottom-2 md:bottom-4 z-10 text-center text-xs md:text-base font-semibold text-black bg-white px-2 py-0.5 md:px-4 md:py-1 rounded-full shadow transition-opacity duration-300">
              {product.price}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TopProduct;