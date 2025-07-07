

// // import React, { useEffect, useRef, useState } from 'react';
// // import { gsap } from 'gsap';
// // import { Link } from 'react-router-dom';

// // const TrendingProduct = () => {
// //   const componentRef = useRef(null);
// //   const containerRef = useRef(null);
// //   const [isAtStart, setIsAtStart] = useState(false);
// //   const [isAtEnd, setIsAtEnd] = useState(false);

// //   const products = [
// //     { id: 'chicago', name: 'Batch 27', variant: 'Chicago', description: 'Limitless Pharma Pure Whey Isolate 5Lb', price: '$100', image: '/product-1.png' },
// //     { id: 'game-royal', name: 'Difsel', variant: 'Game Royal', description: 'Limitless Pharma Pure Whey Isolate 5Lb', price: '$100', image: '/product-2.png' },
// //     { id: 'pine-green', name: 'IsoGold', variant: 'Pine Green', description: 'Limitless Pharma Pure Whey Isolate 5Lb', price: '$100', image: '/product-3.png' },
// //     { id: 'court-purple', name: 'RYS', variant: 'Court Purple', description: 'Limitless Pharma Pure Whey Isolate 5Lb', price: '$100', image: '/product-4.png' },
// //     { id: 'product-5', name: 'Product 5', variant: 'Variant 5', description: 'Description 5', price: '$100', image: '/product-1.png' },
// //     { id: 'product-6', name: 'Product 6', variant: 'Variant 6', description: 'Description 6', price: '$100', image: '/product-2.png' },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (containerRef.current) {
// //         const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
// //         setIsAtStart(scrollLeft === 0);
// //         setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
// //       }
// //     };

// //     const container = containerRef.current;
// //     if (container) {
// //       container.addEventListener('scroll', handleScroll);
// //       // Initial check
// //       handleScroll();
// //       // Center the scroll initially
// //       container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
// //     }

// //     return () => {
// //       if (container) {
// //         container.removeEventListener('scroll', handleScroll);
// //       }
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const cards = gsap.utils.toArray('.product-card');

// //       // Floating animation
// //       gsap.to(cards, {
// //         y: -10,
// //         duration: 2,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //         stagger: 0.2,
// //         // scrub: true,
// //       });

// //       // Mouse interaction animation
// //       cards.forEach(card => {
// //         const image = card.querySelector('.product-image');
// //         const bg = card.querySelector('.product-bg');

// //         card.addEventListener('mousemove', (e) => {
// //           const { left, top, width, height } = card.getBoundingClientRect();
// //           const x = (e.clientX - left) / width - 0.5;
// //           const y = (e.clientY - top) / height - 0.5;

// //           gsap.to(image, { x: x * 20, y: y * 20, duration: 0.5, ease: 'power2.out' });
// //           gsap.to(bg, { x: x * 10, y: y * 10, duration: 0.8, ease: 'power2.out' });
// //         });

// //         card.addEventListener('mouseleave', () => {
// //           gsap.to([image, bg], { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
// //         });
// //       });
// //     }, componentRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div ref={componentRef} className="min-h-screen bg-white text-black flex flex-col overflow-hidden relative">
// //       <header className="text-center py-12 px-4">
// //         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trending Now</h2>
// //         <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// //           Discover this week's hottest picks with special floating animations
// //         </p>
// //       </header>

// //       <main className="flex-1 w-full px-4 pb-12 relative">
// //         {/* Gradient overlays for scroll indicators */}
// //         {!isAtStart && (
// //           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
// //         )}
// //         {!isAtEnd && (
// //           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
// //         )}

// //         <div 
// //           ref={containerRef}
// //           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
// //         >
// //           <div className="flex space-x-6 w-max mx-auto pl-[calc(50vw-14rem)] pr-[calc(50vw-14rem)]">
// //             {products.map((product) => (
// //               <div 
// //                 key={product.id} 
// //                 className="product-card snap-start relative group w-72 flex-shrink-0 h-96 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg bg-gray-50"
// //               >
// //                  <Link to={`/products/${product.id}`} className="absolute inset-0 z-30"></Link>
// //                 <div className="product-bg absolute inset-0 bg-gray-100"></div>
// //                 <div className="relative h-full flex items-center justify-center p-6">
// //                   <img src={product.image} alt={product.name} className="product-image h-48 object-contain transform transition-transform duration-500 group-hover:scale-110 z-10" />
// //                 </div>
// //                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-white z-20 border-t border-gray-200">
// //                   <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
// //                     <h3 className="text-xl font-bold">{product.name}</h3>
// //                     <p className="text-sm text-gray-600 mb-2">{product.variant}</p>
// //                     <div className="flex justify-between items-center">
// //                       <span className="text-orange-500 font-bold">{product.price}</span>
// //                       <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-gray-800 transition-all">
// //                         Add to Cart
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx='true' global='true'>{`
// //         .no-scrollbar::-webkit-scrollbar {
// //           display: none;
// //         }
// //         .no-scrollbar {
// //           -ms-overflow-style: none;
// //           scrollbar-width: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default TrendingProduct;

// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// // Note: I've removed the unused <Link> import for cleaner code.

// const TrendingProduct = () => {
//   const componentRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(false);
//   const [isAtEnd, setIsAtEnd] = useState(false);

//   // Using royalty-free images for demonstration
//   const products = [
//     { id: 'chicago', name: 'Batch 27', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-1.png' },
//     { id: 'game-royal', name: 'Difsel', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-2.png' },
//     { id: 'pine-green', name: 'IsoGold', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-3.png' },
//     { id: 'court-purple', name: 'RYS', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-4.png' },
//     { id: 'product-5', name: 'Product 5', description: 'Description 5', price: '$100', image: '/product-5.png' },
//     { id: 'product-6', name: 'Product 6', description: 'Description 6', price: '$100', image: '/product-6.png' },
//     // { id: 'chicago', name: 'Batch 27', description: 'Pure Whey Isolate 5Lb', price: '$100', image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=800&q=80' },
//     // { id: 'game-royal', name: 'Difsel', description: 'Pure Whey Isolate 5Lb', price: '$100', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80' },
//     // { id: 'pine-green', name: 'IsoGold', description: 'Pure Whey Isolate 5Lb', price: '$100', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80' },
//     // { id: 'court-purple', name: 'RYS', description: 'Pure Whey Isolate 5Lb', price: '$100', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80' },
//     // { id: 'product-5', name: 'Product 5', description: 'Description 5', price: '$100', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' },
//     // { id: 'product-6', name: 'Product 6', description: 'Description 6', price: '$100', image: 'https://images.unsplash.com/photo-1554344727-18b42fa09add?w=800&q=80' },
//   ];

//   // Effect for handling scroll position and showing gradients
//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//         // Check if we are at the start (with a small buffer)
//         setIsAtStart(scrollLeft < 1);
//         // Check if we are at the end (with a small buffer)
//         setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
//       }
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//       // Initial check and centering
//       handleScroll();
//       container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   // Effect for GSAP animations
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray('.product-card');

//       cards.forEach(card => {
//         const button = card.querySelector('.add-to-cart-btn');
//         const cardContent = card.querySelector('.card-content');
//         const image = card.querySelector('.card-image');

//         // Initial state for the button: hidden and below the card
//         gsap.set(button, { yPercent: 200, opacity: 0, pointerEvents: 'none' });
        
//         // Define timelines for reuse
//         const enterTimeline = gsap.timeline({ paused: true });
//         enterTimeline
//           .to(button, {
//             yPercent: -50, // Move to vertical center
//             opacity: 1,
//             duration: 0.5,
//             ease: 'power3.out',
//           })
//           .to(cardContent, { y: -20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '<')
//           .to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' }, '<');


//         const leaveTimeline = gsap.timeline({ paused: true });
//         leaveTimeline
//           .to(button, {
//             yPercent: 200, // Move back down, out of view
//             opacity: 0,
//             duration: 0.4,
//             ease: 'power3.in',
//           })
//           .to(cardContent, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.in' }, '<')
//           .to(image, { scale: 1, duration: 0.4, ease: 'power2.in' }, '<');

//         const onMouseEnter = () => {
//           gsap.set(button, { pointerEvents: 'auto' });
//           leaveTimeline.pause();
//           enterTimeline.restart();
//         };

//         const onMouseLeave = () => {
//           gsap.set(button, { pointerEvents: 'none' });
//           enterTimeline.pause();
//           leaveTimeline.restart();
//         };
        
//         card.addEventListener('mouseenter', onMouseEnter);
//         card.addEventListener('mouseleave', onMouseLeave);

//         // Cleanup function for React StrictMode and unmount
//         return () => {
//             card.removeEventListener('mouseenter', onMouseEnter);
//             card.removeEventListener('mouseleave', onMouseLeave);
//         };
//       });
//     }, componentRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={componentRef} className="min-h-screen bg-white text-white flex flex-col overflow-hidden relative">
//       <header className="text-center py-12 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Trending Now</h2>
//         <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           Discover this week's hottest picks. Hover on cards to add to your cart.
//         </p>
//       </header>

//       <main className="flex-1 w-full px-4 pb-12 relative">
//         {/* Gradient overlays for scroll indicators */}
//         {!isAtStart && (
//           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
//         )}
//         {!isAtEnd && (
//           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
//         )}

//         <div 
//           ref={containerRef}
//           className="products-container w-full overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory"
//         >
//           <div className="flex space-x-6 w-max mx-auto px-[calc(50vw-14rem)]">
//             {products.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="product-card snap-start relative group w-72 h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
//               >
//                 {/* Background Image */}
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500"
//                 />
                
//                 {/* Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                
//                 {/* Text Content */}
//                 <div className="card-content absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
//                     <h3 className="text-2xl font-bold truncate">{product.name}</h3>
//                     <p className="text-sm text-gray-200 mb-2 truncate">{product.description}</p>
//                     <span className="text-orange-400 text-xl font-bold">{product.price}</span>
//                 </div>

//                 {/* Animated "Add to Cart" Button */}
//                 <button 
//                   className="add-to-cart-btn absolute top-1/2 left-1/2 -translate-x-1/2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 z-10 whitespace-nowrap"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       <style jsx='true' global='true'>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TrendingProduct;


import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TrendingProduct = () => {
  const componentRef = useRef(null);
  const containerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const products = [
    { id: 'chicago', name: 'Batch 27', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-1.png' },
    { id: 'game-royal', name: 'Difsel', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-2.png' },
    { id: 'pine-green', name: 'IsoGold', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-3.png' },
    { id: 'court-purple', name: 'RYS', description: 'Pure Whey Isolate 5Lb', price: '$100', image: '/product-4.png' },
    { id: 'product-5', name: 'Product 5', description: 'Description 5', price: '$100', image: '/product-5.png' },
    { id: 'product-6', name: 'Product 6', description: 'Description 6', price: '$100', image: '/product-6.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setIsAtStart(scrollLeft < 1);
        setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.product-card');

      cards.forEach(card => {
        const button = card.querySelector('.add-to-cart-btn');
        const cardContent = card.querySelector('.card-content');
        const image = card.querySelector('.card-image');

        gsap.set(button, { yPercent: 200, opacity: 0, pointerEvents: 'none' });
        
        const enterTimeline = gsap.timeline({ paused: true });
        enterTimeline
          .to(button, {
            yPercent: -50,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
          })
          .to(cardContent, { y: -20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '<')
          .to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' }, '<');

        const leaveTimeline = gsap.timeline({ paused: true });
        leaveTimeline
          .to(button, {
            yPercent: 200,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.in',
          })
          .to(cardContent, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.in' }, '<')
          .to(image, { scale: 1, duration: 0.4, ease: 'power2.in' }, '<');

        const onMouseEnter = () => {
          gsap.set(button, { pointerEvents: 'auto' });
          leaveTimeline.pause();
          enterTimeline.restart();
        };

        const onMouseLeave = () => {
          gsap.set(button, { pointerEvents: 'none' });
          enterTimeline.pause();
          leaveTimeline.restart();
        };
        
        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', onMouseEnter);
            card.removeEventListener('mouseleave', onMouseLeave);
        };
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="min-h-screen bg-white text-white flex flex-col overflow-hidden relative">
      <header className="text-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Trending Now</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          Discover this week's hottest picks. Hover on cards to add to your cart.
        </p>
      </header>

      <main className="flex-1 w-full px-4 pb-8 relative">
        {!isAtStart && (
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        )}
        {!isAtEnd && (
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
        )}

        <div 
          ref={containerRef}
          className="products-container w-full overflow-x-auto no-scrollbar py-2 snap-x snap-mandatory"
        >
          <div className="flex space-x-4 w-max mx-auto px-[calc(50vw-12rem)]">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card snap-start relative group w-56 h-72 flex-shrink-0 rounded-xl overflow-hidden shadow-md cursor-pointer"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                
                <div className="card-content absolute bottom-0 left-0 right-0 p-4 transition-all duration-500">
                    <h3 className="text-xl font-bold truncate">{product.name}</h3>
                    <p className="text-xs text-gray-200 mb-1 truncate">{product.description}</p>
                    <span className="text-orange-400 text-lg font-bold">{product.price}</span>
                </div>

                <button 
                  className="add-to-cart-btn absolute top-1/2 left-1/2 -translate-x-1/2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 z-10 whitespace-nowrap text-sm"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx='true' global='true'>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TrendingProduct;