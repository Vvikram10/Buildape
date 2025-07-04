

// // // // import React, { useEffect } from 'react';
// // // // import { gsap } from 'gsap';

// // // // const TopProduct = () => {
// // // //   const products = [
// // // //     {
// // // //       id: 'chicago',
// // // //       name: 'Batch 27',
// // // //       variant: 'Batch Nutrition',
// // // //       description:
// // // //         'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
// // // //       price: '$49',
// // // //       image: '/product-1.png',
// // // //     },
// // // //     {
// // // //       id: 'game-royal',
// // // //       name: 'Diesel Perfect Sports',
// // // //       variant: 'Perfect Nutrition',
// // // //       description:
// // // //         'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
// // // //       price: '$56',
// // // //       image: '/product-2.png',
// // // //     },
// // // //     {
// // // //       id: 'pine-green',
// // // //       name: 'PVL IsoGold 5Lb',
// // // //       variant: 'Iso Nutrition',
// // // //       description:
// // // //         'ISO GOLD is the premium isolated whey protein you have been looking for.',
// // // //       price: '$48',
// // // //       image: '/product-3.png',
// // // //     },
// // // //     {
// // // //       id: 'court-purple',
// // // //       name: 'RYSE BCAA/EAA',
// // // //       variant: 'RYSE Nutrition',
// // // //       description:
// // // //         'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
// // // //       price: '$40',
// // // //       image: '/product-4.png',
// // // //     },
// // // //   ];

// // // //   // useEffect(() => {
// // // //   //   const shoeSections = document.querySelectorAll('.shoe-section');
// // // //   //   const initialWidth = 100 / shoeSections.length;
// // // //   //   let activeSection = null;

// // // //   //   gsap.set(shoeSections, { width: `${initialWidth}%` });
// // // //   //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // // //   //   gsap.set('.nike-text', { opacity: 0 });

// // // //   //   shoeSections.forEach((section) => {
// // // //   //     section.addEventListener('click', () => {
// // // //   //       const isAlreadyActive = section === activeSection;

// // // //   //       shoeSections.forEach((s) => s.classList.remove('active'));
// // // //   //       activeSection = isAlreadyActive ? null : section;

// // // //   //       if (isAlreadyActive) {
// // // //   //         gsap.to(shoeSections, {
// // // //   //           width: `${initialWidth}%`,
// // // //   //           duration: 0.15,
// // // //   //           ease: 'power2.inOut',
// // // //   //         });
// // // //   //         gsap.to('.shoe-image', {
// // // //   //           rotation: 15,
// // // //   //           scale: 0.7,
// // // //   //           duration: 0.15,
// // // //   //           ease: 'power2.inOut',
// // // //   //         });
// // // //   //         gsap.to('.shoe-content', {
// // // //   //           opacity: 0,
// // // //   //           y: 20,
// // // //   //           duration: 0.1,
// // // //   //           ease: 'power2.out',
// // // //   //         });
// // // //   //         gsap.to('.nike-text', {
// // // //   //           opacity: 0,
// // // //   //           duration: 0.1,
// // // //   //           ease: 'power2.out',
// // // //   //         });
// // // //   //         return;
// // // //   //       }

// // // //   //       section.classList.add('active');

// // // //   //       gsap.to(section, {
// // // //   //         width: '40%',
// // // //   //         duration: 0.15,
// // // //   //         ease: 'power2.inOut',
// // // //   //       });

// // // //   //       gsap.to(section.querySelector('.shoe-image'), {
// // // //   //         rotation: 0,
// // // //   //         scale: 1.15,
// // // //   //         duration: 0.15,
// // // //   //         ease: 'power2.inOut',
// // // //   //       });

// // // //   //       gsap.to(section.querySelector('.shoe-content'), {
// // // //   //         opacity: 1,
// // // //   //         y: 0,
// // // //   //         duration: 0.1,
// // // //   //         delay: 0.05,
// // // //   //         ease: 'power2.out',
// // // //   //       });

// // // //   //       gsap.to(section.querySelectorAll('.nike-text'), {
// // // //   //         opacity: 1,
// // // //   //         duration: 0.1,
// // // //   //         ease: 'power2.out',
// // // //   //       });

// // // //   //       shoeSections.forEach((otherSection) => {
// // // //   //         if (otherSection !== section) {
// // // //   //           gsap.to(otherSection, {
// // // //   //             width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // // //   //             duration: 0.15,
// // // //   //             ease: 'power2.inOut',
// // // //   //           });
// // // //   //           gsap.to(otherSection.querySelector('.shoe-image'), {
// // // //   //             rotation: 15,
// // // //   //             scale: 0.7,
// // // //   //             duration: 0.15,
// // // //   //             ease: 'power2.inOut',
// // // //   //           });
// // // //   //           gsap.to(otherSection.querySelector('.shoe-content'), {
// // // //   //             opacity: 0,
// // // //   //             y: 20,
// // // //   //             duration: 0.1,
// // // //   //             ease: 'power2.out',
// // // //   //           });
// // // //   //           gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // // //   //             opacity: 0,
// // // //   //             duration: 0.1,
// // // //   //             ease: 'power2.out',
// // // //   //           });
// // // //   //         }
// // // //   //       });
// // // //   //     });
// // // //   //   });
// // // //   // }, []);

// // // // //   useEffect(() => {
// // // // //   const shoeSections = document.querySelectorAll('.shoe-section');
// // // // //   const initialWidth = 100 / shoeSections.length;
// // // // //   let activeSection = null;

// // // // //   gsap.set(shoeSections, { width: `${initialWidth}%` });
// // // // //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // // // //   gsap.set('.nike-text', { opacity: 0 });

// // // // //   shoeSections.forEach(section => {
// // // // //     section.addEventListener('click', () => {
// // // // //       const isAlreadyActive = section === activeSection;

// // // // //       shoeSections.forEach(s => s.classList.remove('active'));
// // // // //       activeSection = isAlreadyActive ? null : section;

// // // // //       if (isAlreadyActive) {
// // // // //         gsap.to(shoeSections, {
// // // // //           width: `${initialWidth}%`,
// // // // //           duration: 0.08,
// // // // //           ease: 'power1.inOut'
// // // // //         });
// // // // //         gsap.to('.shoe-image', {
// // // // //           rotation: 15,
// // // // //           scale: 0.7,
// // // // //           duration: 0.08,
// // // // //           ease: 'power1.inOut'
// // // // //         });
// // // // //         gsap.to('.shoe-content', {
// // // // //           opacity: 0,
// // // // //           y: 20,
// // // // //           duration: 0.05,
// // // // //           ease: 'power1.out'
// // // // //         });
// // // // //         gsap.to('.nike-text', {
// // // // //           opacity: 0,
// // // // //           duration: 0.05,
// // // // //           ease: 'power1.out'
// // // // //         });
// // // // //         return;
// // // // //       }

// // // // //       section.classList.add('active');

// // // // //       gsap.to(section, {
// // // // //         width: '40%',
// // // // //         duration: 0.08,
// // // // //         ease: 'power1.inOut'
// // // // //       });

// // // // //       gsap.to(section.querySelector('.shoe-image'), {
// // // // //         rotation: 0,
// // // // //         scale: 1.15,
// // // // //         duration: 0.08,
// // // // //         ease: 'power1.inOut'
// // // // //       });

// // // // //       gsap.to(section.querySelector('.shoe-content'), {
// // // // //         opacity: 1,
// // // // //         y: 0,
// // // // //         duration: 0.05,
// // // // //         delay: 0.02,
// // // // //         ease: 'power1.out'
// // // // //       });

// // // // //       gsap.to(section.querySelectorAll('.nike-text'), {
// // // // //         opacity: 1,
// // // // //         duration: 0.05,
// // // // //         ease: 'power1.out'
// // // // //       });

// // // // //       shoeSections.forEach(otherSection => {
// // // // //         if (otherSection !== section) {
// // // // //           gsap.to(otherSection, {
// // // // //             width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // // // //             duration: 0.08,
// // // // //             ease: 'power1.inOut'
// // // // //           });
// // // // //           gsap.to(otherSection.querySelector('.shoe-image'), {
// // // // //             rotation: 15,
// // // // //             scale: 0.7,
// // // // //             duration: 0.08,
// // // // //             ease: 'power1.inOut'
// // // // //           });
// // // // //           gsap.to(otherSection.querySelector('.shoe-content'), {
// // // // //             opacity: 0,
// // // // //             y: 20,
// // // // //             duration: 0.05,
// // // // //             ease: 'power1.out'
// // // // //           });
// // // // //           gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // // // //             opacity: 0,
// // // // //             duration: 0.05,
// // // // //             ease: 'power1.out'
// // // // //           });
// // // // //         }
// // // // //       });
// // // // //     });
// // // // //   });
// // // // // }, []);

// // // // useEffect(() => {
// // // //   const shoeSections = document.querySelectorAll('.shoe-section');
// // // //   const initialWidth = 100 / shoeSections.length;
// // // //   let activeSection = null;

// // // //   gsap.set(shoeSections, { width: `${initialWidth}%` });
// // // //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // // //   gsap.set('.nike-text', { opacity: 0 });

// // // //   shoeSections.forEach((section) => {
// // // //     section.addEventListener('click', () => {
// // // //       const isAlreadyActive = section === activeSection;
// // // //       shoeSections.forEach((s) => s.classList.remove('active'));
// // // //       activeSection = isAlreadyActive ? null : section;

// // // //       if (isAlreadyActive) {
// // // //         gsap.to(shoeSections, {
// // // //           width: `${initialWidth}%`,
// // // //           duration: 0.08,
// // // //           ease: 'circ.out',
// // // //           overwrite: 'auto',
// // // //         });
// // // //         gsap.to('.shoe-image', {
// // // //           rotation: 15,
// // // //           scale: 0.7,
// // // //           duration: 0.08,
// // // //           ease: 'circ.out',
// // // //           overwrite: 'auto',
// // // //         });
// // // //         gsap.to('.shoe-content', {
// // // //           opacity: 0,
// // // //           y: 20,
// // // //           duration: 0.07,
// // // //           ease: 'circ.out',
// // // //           overwrite: 'auto',
// // // //         });
// // // //         gsap.to('.nike-text', {
// // // //           opacity: 0,
// // // //           duration: 0.07,
// // // //           ease: 'circ.out',
// // // //           overwrite: 'auto',
// // // //         });
// // // //         return;
// // // //       }

// // // //       section.classList.add('active');

// // // //       gsap.to(section, {
// // // //         width: '40%',
// // // //         duration: 0.08,
// // // //         ease: 'circ.out',
// // // //         overwrite: 'auto',
// // // //       });

// // // //       gsap.to(section.querySelector('.shoe-image'), {
// // // //         rotation: 0,
// // // //         scale: 1.15,
// // // //         duration: 0.08,
// // // //         ease: 'circ.out',
// // // //         overwrite: 'auto',
// // // //       });

// // // //       gsap.to(section.querySelector('.shoe-content'), {
// // // //         opacity: 1,
// // // //         y: 0,
// // // //         duration: 0.07,
// // // //         ease: 'circ.out',
// // // //         overwrite: 'auto',
// // // //       });

// // // //       gsap.to(section.querySelectorAll('.nike-text'), {
// // // //         opacity: 1,
// // // //         duration: 0.07,
// // // //         ease: 'circ.out',
// // // //         overwrite: 'auto',
// // // //       });

// // // //       shoeSections.forEach((otherSection) => {
// // // //         if (otherSection !== section) {
// // // //           gsap.to(otherSection, {
// // // //             width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // // //             duration: 0.08,
// // // //             ease: 'circ.out',
// // // //             overwrite: 'auto',
// // // //           });
// // // //           gsap.to(otherSection.querySelector('.shoe-image'), {
// // // //             rotation: 15,
// // // //             scale: 0.7,
// // // //             duration: 0.08,
// // // //             ease: 'circ.out',
// // // //             overwrite: 'auto',
// // // //           });
// // // //           gsap.to(otherSection.querySelector('.shoe-content'), {
// // // //             opacity: 0,
// // // //             y: 20,
// // // //             duration: 0.07,
// // // //             ease: 'circ.out',
// // // //             overwrite: 'auto',
// // // //           });
// // // //           gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // // //             opacity: 0,
// // // //             duration: 0.07,
// // // //             ease: 'circ.out',
// // // //             overwrite: 'auto',
// // // //           });
// // // //         }
// // // //       });
// // // //     });
// // // //   });
// // // // }, []);



// // // //   return (
// // // //     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
// // // //       <header className="text-center py-12 px-4">
// // // //         <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-gray-800 tracking-tight">
// // // //           Top Products
// // // //         </h2>
// // // //         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// // // //           Our best-selling products with interactive 3D rotation effect
// // // //         </p>
// // // //       </header>

// // // //       <main className="flex h-[650px] w-full max-w-7xl mx-auto">
// // // //         {products.map((product) => (
// // // //           <div
// // // //             key={product.id}
// // // //             className="shoe-section bg-gradient-to-br from-[#1f2937] to-[#111827] relative overflow-hidden flex justify-center items-center"
// // // //             data-shoe={product.id}
// // // //           >
// // // //             {/* Nike background text */}
// // // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // // //               <div className="nike-text">
// // // //                 <span
// // // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // // //                   style={{
// // // //                     WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
// // // //                   }}
// // // //                 >
// // // //                   {product.name.split(' ')[0]}
// // // //                 </span>
// // // //               </div>
// // // //               <div className="nike-text">
// // // //                 <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-white py-4">
// // // //                   {product.name.split(' ')[0]}
// // // //                 </span>
// // // //               </div>
// // // //               <div className="nike-text">
// // // //                 <span
// // // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // // //                   style={{
// // // //                     WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
// // // //                   }}
// // // //                 >
// // // //                   {product.name.split(' ')[0]}
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             {/* Shoe Image */}
// // // //             <div className="relative z-20 w-full h-full flex items-center justify-center">
// // // //               <img
// // // //                 src={product.image}
// // // //                 alt={`${product.name} ${product.variant}`}
// // // //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// // // //               />
// // // //             </div>

// // // //             {/* Text Content */}
// // // //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center">
// // // //               <h3 className="text-xl font-semibold text-white">{product.name}</h3>
// // // //               <h4 className="text-2xl font-bold text-white">{product.variant}</h4>
// // // //               <p className="text-xs font-light text-white/80 max-w-[280px] mx-auto mb-1">
// // // //                 {product.description}
// // // //               </p>
// // // //               <div className="flex justify-center">
// // // //                 <button className="price-button py-1 px-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold">
// // // //                   {product.price}
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </main>

// // // //       <style jsx global>{`
// // // //         .shoe-section {
// // // //           transition: width 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
// // // //           cursor: pointer;
// // // //           border-left: 1px solid rgba(255, 255, 255, 0.1);
// // // //           border-right: 1px solid rgba(255, 255, 255, 0.1);
// // // //         }

// // // //         .shoe-image {
// // // //           transition: transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
// // // //           transform: rotate(15deg) scale(0.7);
// // // //           transform-origin: center center;
// // // //           will-change: transform;
// // // //         }

// // // //         .shoe-content {
// // // //           opacity: 0;
// // // //           transform: translateY(20px);
// // // //           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
// // // //           will-change: opacity, transform;
// // // //         }

// // // //         .nike-text {
// // // //           opacity: 0;
// // // //           transition: opacity 0.5s ease;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TopProduct;

// // // import React, { useEffect } from 'react';
// // // import { gsap } from 'gsap';

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: 'chicago',
// // //       name: 'Batch 27',
// // //       variant: 'Batch Nutrition',
// // //       description:
// // //         'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
// // //       price: '$49',
// // //       image: '/product-1.png',
// // //     },
// // //     {
// // //       id: 'game-royal',
// // //       name: 'Diesel Perfect Sports',
// // //       variant: 'Perfect Nutrition',
// // //       description:
// // //         'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
// // //       price: '$56',
// // //       image: '/product-2.png',
// // //     },
// // //     {
// // //       id: 'pine-green',
// // //       name: 'PVL IsoGold 5Lb',
// // //       variant: 'Iso Nutrition',
// // //       description:
// // //         'ISO GOLD is the premium isolated whey protein you have been looking for.',
// // //       price: '$48',
// // //       image: '/product-3.png',
// // //     },
// // //     {
// // //       id: 'court-purple',
// // //       name: 'RYSE BCAA/EAA',
// // //       variant: 'RYSE Nutrition',
// // //       description:
// // //         'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
// // //       price: '$40',
// // //       image: '/product-4.png',
// // //     },
// // //   ];

// // //   // useEffect(() => {
// // //   //   const shoeSections = document.querySelectorAll('.shoe-section');
// // //   //   const initialWidth = 100 / shoeSections.length;
// // //   //   let activeSection = null;

// // //   //   const duration = 0.25;
// // //   //   const ease = 'power1.inOut';

// // //   //   gsap.set(shoeSections, { width: `${initialWidth}%` });
// // //   //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // //   //   gsap.set('.nike-text', { opacity: 0 });

// // //   //   shoeSections.forEach((section) => {
// // //   //     section.addEventListener('click', () => {
// // //   //       const isAlreadyActive = section === activeSection;

// // //   //       shoeSections.forEach((s) => s.classList.remove('active'));
// // //   //       activeSection = isAlreadyActive ? null : section;

// // //   //       if (isAlreadyActive) {
// // //   //         gsap.to(shoeSections, { width: `${initialWidth}%`, duration, ease });
// // //   //         gsap.to('.shoe-image', { rotation: 15, scale: 0.7, duration, ease });
// // //   //         gsap.to('.shoe-content', { opacity: 0, y: 20, duration: 0.15, ease });
// // //   //         gsap.to('.nike-text', { opacity: 0, duration: 0.15, ease });
// // //   //         return;
// // //   //       }

// // //   //       section.classList.add('active');

// // //   //       gsap.to(section, { width: '40%', duration, ease });
// // //   //       gsap.to(section.querySelector('.shoe-image'), {
// // //   //         rotation: 0,
// // //   //         scale: 1.15,
// // //   //         duration,
// // //   //         ease,
// // //   //       });
// // //   //       gsap.to(section.querySelector('.shoe-content'), {
// // //   //         opacity: 1,
// // //   //         y: 0,
// // //   //         duration: 0.15,
// // //   //         delay: 0.05,
// // //   //         ease,
// // //   //       });
// // //   //       gsap.to(section.querySelectorAll('.nike-text'), {
// // //   //         opacity: 1,
// // //   //         duration: 0.15,
// // //   //         ease,
// // //   //       });

// // //   //       shoeSections.forEach((otherSection) => {
// // //   //         if (otherSection !== section) {
// // //   //           gsap.to(otherSection, {
// // //   //             width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // //   //             duration,
// // //   //             ease,
// // //   //           });
// // //   //           gsap.to(otherSection.querySelector('.shoe-image'), {
// // //   //             rotation: 15,
// // //   //             scale: 0.7,
// // //   //             duration,
// // //   //             ease,
// // //   //           });
// // //   //           gsap.to(otherSection.querySelector('.shoe-content'), {
// // //   //             opacity: 0,
// // //   //             y: 20,
// // //   //             duration: 0.15,
// // //   //             ease,
// // //   //           });
// // //   //           gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // //   //             opacity: 0,
// // //   //             duration: 0.15,
// // //   //             ease,
// // //   //           });
// // //   //         }
// // //   //       });
// // //   //     });
// // //   //   });
// // //   // }, []);
// // // useEffect(() => {
// // //   const shoeSections = document.querySelectorAll('.shoe-section');
// // //   const initialWidth = 100 / shoeSections.length;
// // //   let activeSection = null;

// // //   const duration = 0.25;
// // //   const ease = 'power1.inOut';

// // //   gsap.set(shoeSections, { width: `${initialWidth}%` });
// // //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // //   gsap.set('.nike-text', { opacity: 0 });

// // //   shoeSections.forEach((section) => {
// // //     section.addEventListener('click', () => {
// // //       const isAlreadyActive = section === activeSection;

// // //       shoeSections.forEach((s) => s.classList.remove('active'));
// // //       activeSection = isAlreadyActive ? null : section;

// // //       if (isAlreadyActive) {
// // //         gsap.to(shoeSections, { width: `${initialWidth}%`, duration, ease });
// // //         gsap.to('.shoe-image', {
// // //           rotation: 15,
// // //           scale: 0.7,
// // //           duration,
// // //           ease,
// // //         });
// // //         gsap.to('.shoe-content', { opacity: 0, y: 20, duration: 0.15, ease });
// // //         gsap.to('.nike-text', { opacity: 0, duration: 0.15, ease });
// // //         return;
// // //       }

// // //       section.classList.add('active');

// // //       gsap.to(section, { width: '40%', duration, ease });

// // //       // 👇 Simultaneous rotation + scale
// // //       gsap.to(section.querySelector('.shoe-image'), {
// // //         rotation: 0,
// // //         scale: 1.15,
// // //         duration,
// // //         ease,
// // //       });

// // //       gsap.to(section.querySelector('.shoe-content'), {
// // //         opacity: 1,
// // //         y: 0,
// // //         duration: 0.15,
// // //         delay: 0.05,
// // //         ease,
// // //       });
// // //       gsap.to(section.querySelectorAll('.nike-text'), {
// // //         opacity: 1,
// // //         duration: 0.15,
// // //         ease,
// // //       });

// // //       shoeSections.forEach((otherSection) => {
// // //         if (otherSection !== section) {
// // //           gsap.to(otherSection, {
// // //             width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // //             duration,
// // //             ease,
// // //           });
// // //           gsap.to(otherSection.querySelector('.shoe-image'), {
// // //             rotation: 15,
// // //             scale: 0.7,
// // //             duration,
// // //             ease,
// // //           });
// // //           gsap.to(otherSection.querySelector('.shoe-content'), {
// // //             opacity: 0,
// // //             y: 20,
// // //             duration: 0.15,
// // //             ease,
// // //           });
// // //           gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // //             opacity: 0,
// // //             duration: 0.15,
// // //             ease,
// // //           });
// // //         }
// // //       });
// // //     });
// // //   });
// // // }, []);

// // //   return (
// // //     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
// // //       <header className="text-center py-12 px-4">
// // //         <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-gray-800 tracking-tight">
// // //           Top Products
// // //         </h2>
// // //         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// // //           Our best-selling products with interactive 3D rotation effect
// // //         </p>
// // //       </header>

// // //       <main className="flex h-[650px] w-full max-w-7xl mx-auto">
// // //         {products.map((product) => (
// // //           <div
// // //             key={product.id}
// // //             className="shoe-section bg-gradient-to-br from-[#1f2937] to-[#111827] relative overflow-hidden flex justify-center items-center"
// // //             data-shoe={product.id}
// // //           >
// // //             {/* Nike background text */}
// // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // //                   style={{
// // //                     WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
// // //                   }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-white py-4">
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // //                   style={{
// // //                     WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
// // //                   }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Product Image */}
// // //             <div className="relative z-20 w-full h-full flex items-center justify-center">
// // //               <img
// // //                 src={product.image}
// // //                 alt={`${product.name} ${product.variant}`}
// // //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// // //               />
// // //             </div>

// // //             {/* Text Content */}
// // //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center">
// // //               <h3 className="text-xl font-semibold text-white">{product.name}</h3>
// // //               <h4 className="text-2xl font-bold text-white">{product.variant}</h4>
// // //               <p className="text-xs font-light text-white/80 max-w-[280px] mx-auto mb-1">
// // //                 {product.description}
// // //               </p>
// // //               <div className="flex justify-center">
// // //                 <button className="price-button py-1 px-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold">
// // //                   {product.price}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </main>

// // //       <style jsx global>{`
// // //         .shoe-section {
// // //           transition: width 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
// // //           cursor: pointer;
// // //           border-left: 1px solid rgba(255, 255, 255, 0.1);
// // //           border-right: 1px solid rgba(255, 255, 255, 0.1);
// // //         }

// // //         .shoe-image {
// // //           transform: rotate(15deg) scale(0.7);
// // //           will-change: transform;
// // //         }

// // //         .shoe-content {
// // //           opacity: 0;
// // //           transform: translateY(20px);
// // //           will-change: opacity, transform;
// // //         }

// // //         .nike-text {
// // //           opacity: 0;
// // //           transition: opacity 0.5s ease;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default TopProduct;

// // // import React, { useEffect } from 'react';
// // // import { gsap } from 'gsap';

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: 'chicago',
// // //       name: 'Batch 27',
// // //       variant: 'Batch Nutrition',
// // //       description: 'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
// // //       price: '$49',
// // //       image: '/product-1.png',
// // //     },
// // //     {
// // //       id: 'game-royal',
// // //       name: 'Diesel Perfect Sports',
// // //       variant: 'Perfect Nutrition',
// // //       description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
// // //       price: '$56',
// // //       image: '/product-2.png',
// // //     },
// // //     {
// // //       id: 'pine-green',
// // //       name: 'PVL IsoGold 5Lb',
// // //       variant: 'Iso Nutrition',
// // //       description: 'ISO GOLD is the premium isolated whey protein you have been looking for.',
// // //       price: '$48',
// // //       image: '/product-3.png',
// // //     },
// // //     {
// // //       id: 'court-purple',
// // //       name: 'RYSE BCAA/EAA',
// // //       variant: 'RYSE Nutrition',
// // //       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
// // //       price: '$40',
// // //       image: '/product-4.png',
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     const shoeSections = document.querySelectorAll('.shoe-section');
// // //     const initialWidth = 100 / shoeSections.length;
// // //     let activeSection = null;

// // //     // Set initial states
// // //     gsap.set(shoeSections, { width: `${initialWidth}%` });
// // //     gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // //     gsap.set('.nike-text', { opacity: 0 });
// // //     gsap.set('.shoe-image', { 
// // //       rotation: 15, 
// // //       scale: 0.7,
// // //       transformOrigin: "center center",
// // //       willChange: "transform"
// // //     });

// // //     shoeSections.forEach((section) => {
// // //       section.addEventListener('click', () => {
// // //         const isAlreadyActive = section === activeSection;
// // //         shoeSections.forEach((s) => s.classList.remove('active'));
// // //         activeSection = isAlreadyActive ? null : section;

// // //         if (isAlreadyActive) {
// // //           // Reset all sections
// // //           gsap.to(shoeSections, {
// // //             width: `${initialWidth}%`,
// // //             duration: 0.08,
// // //             ease: 'power1.inOut'
// // //           });
          
// // //           // Reset all images - combined rotation and scale
// // //           gsap.to('.shoe-image', {
// // //             rotation: 15,
// // //             scale: 0.7,
// // //             duration: 0.08,
// // //             ease: 'power1.inOut',
// // //             overwrite: "auto"
// // //           });
          
// // //           gsap.to('.shoe-content', {
// // //             opacity: 0,
// // //             y: 20,
// // //             duration: 0.05,
// // //             ease: 'power1.out'
// // //           });
          
// // //           gsap.to('.nike-text', {
// // //             opacity: 0,
// // //             duration: 0.05,
// // //             ease: 'power1.out'
// // //           });
          
// // //           return;
// // //         }

// // //         section.classList.add('active');

// // //         // Active section animations
// // //         gsap.to(section, {
// // //           width: '40%',
// // //           duration: 0.08,
// // //           ease: 'power1.inOut'
// // //         });

// // //         // Active image animation - combined rotation and scale
// // //         gsap.to(section.querySelector('.shoe-image'), {
// // //           rotation: 0,
// // //           scale: 1.15,
// // //           duration: 0.08,
// // //           ease: 'power1.inOut',
// // //           overwrite: "auto"
// // //         });

// // //         gsap.to(section.querySelector('.shoe-content'), {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.05,
// // //           ease: 'power1.out'
// // //         });

// // //         gsap.to(section.querySelectorAll('.nike-text'), {
// // //           opacity: 1,
// // //           duration: 0.05,
// // //           ease: 'power1.out'
// // //         });

// // //         // Other sections animations
// // //         shoeSections.forEach((otherSection) => {
// // //           if (otherSection !== section) {
// // //             gsap.to(otherSection, {
// // //               width: `${(100 - 40) / (shoeSections.length - 1)}%`,
// // //               duration: 0.08,
// // //               ease: 'power1.inOut'
// // //             });
            
// // //             // Inactive image animation - combined rotation and scale
// // //             gsap.to(otherSection.querySelector('.shoe-image'), {
// // //               rotation: 15,
// // //               scale: 0.7,
// // //               duration: 0.08,
// // //               ease: 'power1.inOut',
// // //               overwrite: "auto"
// // //             });
            
// // //             gsap.to(otherSection.querySelector('.shoe-content'), {
// // //               opacity: 0,
// // //               y: 20,
// // //               duration: 0.05,
// // //               ease: 'power1.out'
// // //             });
            
// // //             gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // //               opacity: 0,
// // //               duration: 0.05,
// // //               ease: 'power1.out'
// // //             });
// // //           }
// // //         });
// // //       });
// // //     });
// // //   }, []);

// // //   return (
// // //     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
// // //       <header className="text-center py-12 px-4">
// // //         <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-gray-800 tracking-tight">
// // //           Top Products
// // //         </h2>
// // //         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// // //           Our best-selling products with interactive 3D rotation effect
// // //         </p>
// // //       </header>

// // //       <main className="flex h-[650px] w-full max-w-7xl mx-auto">
// // //         {products.map((product) => (
// // //           <div
// // //             key={product.id}
// // //             className="shoe-section bg-gradient-to-br from-[#1f2937] to-[#111827] relative overflow-hidden flex justify-center items-center"
// // //             data-shoe={product.id}
// // //           >
// // //             {/* Nike background text */}
// // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // //                   style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-white py-4">
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent"
// // //                   style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             {/* Product Image */}
// // //             <div className="relative z-20 w-full h-full flex items-center justify-center">
// // //               <img
// // //                 src={product.image}
// // //                 alt={`${product.name} ${product.variant}`}
// // //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// // //               />
// // //             </div>

// // //             {/* Text Content */}
// // //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center">
// // //               <h3 className="text-xl font-semibold text-white">{product.name}</h3>
// // //               <h4 className="text-2xl font-bold text-white">{product.variant}</h4>
// // //               <p className="text-xs font-light text-white/80 max-w-[280px] mx-auto mb-1">
// // //                 {product.description}
// // //               </p>
// // //               <div className="flex justify-center">
// // //                 <button className="price-button py-1 px-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold">
// // //                   {product.price}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </main>

// // //       <style jsx global>{`
// // //         .shoe-section {
// // //           // transition: width 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
// // //           cursor: pointer;
// // //           border-left: 1px solid rgba(255, 255, 255, 0.1);
// // //           border-right: 1px solid rgba(255, 255, 255, 0.1);
// // //         }

// // //         .shoe-content {
// // //           opacity: 0;
// // //           transform: translateY(20px);
// // //           // transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }

// // //         .nike-text {
// // //           opacity: 0;
// // //           transition: opacity 0.5s ease;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default TopProduct;


// // // import React, { useEffect } from 'react';
// // // import { gsap } from 'gsap';

// // // const TopProduct = () => {
// // //   const products = [
// // //     {
// // //       id: 'chicago',
// // //       name: 'Batch 27',
// // //       variant: 'Batch Nutrition',
// // //       description: 'Batch 27 preworkout supplement contains key ingredients to take your workout to the next level.',
// // //       price: '$49',
// // //       image: '/product-1.png',
// // //     },
// // //     {
// // //       id: 'game-royal',
// // //       name: 'Diesel Perfect Sports',
// // //       variant: 'Perfect Nutrition',
// // //       description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
// // //       price: '$56',
// // //       image: '/product-2.png',
// // //     },
// // //     {
// // //       id: 'pine-green',
// // //       name: 'PVL IsoGold 5Lb',
// // //       variant: 'Iso Nutrition',
// // //       description: 'ISO GOLD is the premium isolated whey protein you have been looking for.',
// // //       price: '$48',
// // //       image: '/product-3.png',
// // //     },
// // //     {
// // //       id: 'court-purple',
// // //       name: 'RYSE BCAA/EAA',
// // //       variant: 'RYSE Nutrition',
// // //       description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
// // //       price: '$40',
// // //       image: '/product-4.png',
// // //     },
// // //     // Add more products as needed...
// // //   ];

// // //   useEffect(() => {
// // //     const shoeSections = document.querySelectorAll('.shoe-section');
// // //     let activeSection = null;

// // //     const isMobile = window.innerWidth < 640;

// // //     gsap.set(shoeSections, {
// // //       width: isMobile ? '90vw' : '300px',
// // //       flexShrink: 0,
// // //     });

// // //     gsap.set('.shoe-content', { opacity: 0, y: 20 });
// // //     gsap.set('.nike-text', { opacity: 0 });
// // //     gsap.set('.shoe-image', {
// // //       rotation: 15,
// // //       scale: 0.7,
// // //       transformOrigin: 'center center',
// // //       willChange: 'transform',
// // //     });

// // //     shoeSections.forEach((section) => {
// // //       section.addEventListener('click', () => {
// // //         const isAlreadyActive = section === activeSection;
// // //         shoeSections.forEach((s) => s.classList.remove('active'));
// // //         activeSection = isAlreadyActive ? null : section;

// // //         if (isAlreadyActive) {
// // //           gsap.to(shoeSections, {
// // //             width: isMobile ? '90vw' : '300px',
// // //             duration: 0.3,
// // //             ease: 'power1.inOut',
// // //           });

// // //           gsap.to('.shoe-image', {
// // //             rotation: 15,
// // //             scale: 0.7,
// // //             duration: 0.3,
// // //             ease: 'power1.inOut',
// // //           });

// // //           gsap.to('.shoe-content', {
// // //             opacity: 0,
// // //             y: 20,
// // //             duration: 0.3,
// // //           });

// // //           gsap.to('.nike-text', {
// // //             opacity: 0,
// // //             duration: 0.3,
// // //           });

// // //           return;
// // //         }

// // //         section.classList.add('active');

// // //         gsap.to(section, {
// // //           width: isMobile ? '100vw' : '500px',
// // //           duration: 0.3,
// // //           ease: 'power1.inOut',
// // //         });

// // //         gsap.to(section.querySelector('.shoe-image'), {
// // //           rotation: 0,
// // //           scale: 1.15,
// // //           duration: 0.3,
// // //         });

// // //         gsap.to(section.querySelector('.shoe-content'), {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.3,
// // //         });

// // //         gsap.to(section.querySelectorAll('.nike-text'), {
// // //           opacity: 1,
// // //           duration: 0.3,
// // //         });

// // //         shoeSections.forEach((otherSection) => {
// // //           if (otherSection !== section) {
// // //             gsap.to(otherSection, {
// // //               width: isMobile ? '0vw' : '300px',
// // //               duration: 0.3,
// // //             });

// // //             gsap.to(otherSection.querySelector('.shoe-image'), {
// // //               rotation: 15,
// // //               scale: 0.7,
// // //               duration: 0.3,
// // //             });

// // //             gsap.to(otherSection.querySelector('.shoe-content'), {
// // //               opacity: 0,
// // //               y: 20,
// // //               duration: 0.3,
// // //             });

// // //             gsap.to(otherSection.querySelectorAll('.nike-text'), {
// // //               opacity: 0,
// // //               duration: 0.3,
// // //             });
// // //           }
// // //         });
// // //       });
// // //     });
// // //   }, []);

// // //   return (
// // //     <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
// // //       <header className="text-center py-12 px-4">
// // //         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Products</h2>
// // //         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
// // //           Our best-selling products with interactive 3D rotation effect
// // //         </p>
// // //       </header>

// // //       <main className="flex w-full h-[650px] overflow-x-auto snap-x snap-mandatory scrollbar-hide">
// // //         {products.map((product) => (
// // //           <div
// // //             key={product.id}
// // //             className="shoe-section snap-start flex-shrink-0 w-[300px] bg-gradient-to-br from-[#1f2937] to-[#111827] relative overflow-hidden flex justify-center items-center rounded-xl mx-1"
// // //             data-shoe={product.id}
// // //           >
// // //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// // //                   style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span className="text-8xl font-extrabold tracking-wider text-white py-4">
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //               <div className="nike-text">
// // //                 <span
// // //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// // //                   style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
// // //                 >
// // //                   {product.name.split(' ')[0]}
// // //                 </span>
// // //               </div>
// // //             </div>

// // //             <div className="relative z-20 w-full h-full flex items-center justify-center">
// // //               <img
// // //                 src={product.image}
// // //                 alt={product.name}
// // //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// // //               />
// // //             </div>

// // //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center">
// // //               <h3 className="text-xl font-semibold text-white">{product.name}</h3>
// // //               <h4 className="text-2xl font-bold text-white">{product.variant}</h4>
// // //               <p className="text-xs font-light text-white/80 max-w-[280px] mx-auto mb-1">
// // //                 {product.description}
// // //               </p>
// // //               <div className="flex justify-center">
// // //                 <button className="py-1 px-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold">
// // //                   {product.price}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </main>

// // //       <style jsx='true' global='true'>{`
// // //         .shoe-section {
// // //           cursor: pointer;
// // //         }

// // //         .shoe-content {
// // //           opacity: 0;
// // //           transform: translateY(20px);
// // //         }

// // //         .nike-text {
// // //           opacity: 0;
// // //           transition: opacity 0.5s ease;
// // //         }

// // //         /* Hide scrollbar cross-browser */
// // //         main::-webkit-scrollbar {
// // //           display: none;
// // //         }

// // //         main {
// // //           -ms-overflow-style: none;
// // //           scrollbar-width: none;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default TopProduct;

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
// //       description: 'ISO GOLD is the premium isolated whey protein you have been looking for.',
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
// //     // Add more products as needed...
// //   ];

// //   useEffect(() => {
// //     const shoeSections = document.querySelectorAll('.shoe-section');
// //     let activeSection = null;

// //     const isMobile = window.innerWidth < 640;

// //     gsap.set(shoeSections, {
// //       width: isMobile ? '90vw' : '300px',
// //       flexShrink: 0,
// //     });

// //     gsap.set('.shoe-content', { opacity: 0, y: 20 });
// //     gsap.set('.nike-text', { opacity: 0 });
// //     gsap.set('.shoe-image', {
// //       rotation: 15,
// //       scale: 0.7,
// //       transformOrigin: 'center center',
// //       willChange: 'transform',
// //     });
// //     gsap.set('.shoe-shadow', { opacity: 1, scale: 0.8 }); // Initial state for shadow

// //     shoeSections.forEach((section) => {
// //       section.addEventListener('click', () => {
// //         const isAlreadyActive = section === activeSection;
// //         shoeSections.forEach((s) => s.classList.remove('active'));
// //         activeSection = isAlreadyActive ? null : section;

// //         if (isAlreadyActive) {
// //           gsap.to(shoeSections, {
// //             width: isMobile ? '90vw' : '300px',
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });

// //           gsap.to(section.querySelector('.shoe-image'), {
// //             rotation: 15,
// //             scale: 0.7,
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });
// //           gsap.to(section.querySelector('.shoe-shadow'), {
// //             opacity: 1,
// //             scale: 0.8,
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });

// //           gsap.to('.shoe-content', {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //           });

// //           gsap.to('.nike-text', {
// //             opacity: 0,
// //             duration: 0.3,
// //           });

// //           return;
// //         }

// //         section.classList.add('active');

// //         gsap.to(section, {
// //           width: isMobile ? '100vw' : '500px',
// //           duration: 0.3,
// //           ease: 'power1.inOut',
// //         });

// //         gsap.to(section.querySelector('.shoe-image'), {
// //           rotation: 0,
// //           scale: 1.15,
// //           duration: 0.3,
// //         });
// //         gsap.to(section.querySelector('.shoe-shadow'), {
// //           opacity: 0, // Hide shadow when scaled
// //           scale: 1,
// //           duration: 0.3,
// //         });

// //         gsap.to(section.querySelector('.shoe-content'), {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.3,
// //         });

// //         gsap.to(section.querySelectorAll('.nike-text'), {
// //           opacity: 1,
// //           duration: 0.3,
// //         });

// //         shoeSections.forEach((otherSection) => {
// //           if (otherSection !== section) {
// //             gsap.to(otherSection, {
// //               width: isMobile ? '0vw' : '300px',
// //               duration: 0.3,
// //             });

// //             gsap.to(otherSection.querySelector('.shoe-image'), {
// //               rotation: 15,
// //               scale: 0.7,
// //               duration: 0.3,
// //             });
// //             gsap.to(otherSection.querySelector('.shoe-shadow'), {
// //               opacity: 1,
// //               scale: 0.8,
// //               duration: 0.3,
// //             });

// //             gsap.to(otherSection.querySelector('.shoe-content'), {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //             });

// //             gsap.to(otherSection.querySelectorAll('.nike-text'), {
// //               opacity: 0,
// //               duration: 0.3,
// //             });
// //           }
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
// //             className="shoe-section snap-center flex-shrink-0 w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg"
// //             data-shoe={product.id}
// //           >
// //             {/* Background Nike Text - hidden when scaled */}
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               <div className="nike-text">
// //                 <span
// //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// //                   style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
// //                 >
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //               <div className="nike-text">
// //                 <span className="text-8xl font-extrabold tracking-wider text-gray-200 py-4">
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //               <div className="nike-text">
// //                 <span
// //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// //                   style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
// //                 >
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="relative z-20 w-full flex items-center justify-center pt-8">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// //               />
// //               {/* Product Shadow */}
// //               <div className="shoe-shadow absolute bottom-0 w-[60%] h-4 bg-gray-500/30 rounded-full blur-md"></div>
// //             </div>

// //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center p-4">
// //               <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
// //               <h4 className="text-2xl font-bold text-gray-900">{product.variant}</h4>
// //               <p className="text-xs font-light text-gray-600 max-w-[280px] mx-auto mb-3">
// //                 {product.description}
// //               </p>
// //               <div className="flex justify-center">
// //                 <button className="py-2 px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200">
// //                   {product.price}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </main>

// //       <style jsx='true' global='true'>{`
// //         body {
// //           margin: 0;
// //           overflow-x: hidden; /* Prevent horizontal scrollbar on body */
// //         }
// //         .shoe-section {
// //           cursor: pointer;
// //           transition: all 0.3s ease-in-out;
// //         }

// //         .shoe-content {
// //           opacity: 0;
// //           transform: translateY(20px);
// //         }

// //         .nike-text {
// //           opacity: 0;
// //           transition: opacity 0.5s ease;
// //         }

// //         /* Hide scrollbar cross-browser */
// //         main::-webkit-scrollbar {
// //           display: none;
// //         }

// //         main {
// //           -ms-overflow-style: none;
// //           scrollbar-width: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default TopProduct;

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
// //     // Add more products as needed...
// //   ];

// //   useEffect(() => {
// //     const shoeSections = document.querySelectorAll('.shoe-section');
// //     let activeSection = null;

// //     const isMobile = window.innerWidth < 640;

// //     gsap.set(shoeSections, {
// //       width: isMobile ? '90vw' : '300px',
// //       flexShrink: 0,
// //     });

// //     gsap.set('.shoe-content', { opacity: 0, y: 20 });
// //     gsap.set('.nike-text', { opacity: 0 });
// //     gsap.set('.shoe-image', {
// //       rotation: 15,
// //       scale: 0.7,
// //       transformOrigin: 'center center',
// //       willChange: 'transform',
// //     });
// //     // Initial state for the shadow: visible when not scaled
// //     gsap.set('.shoe-shadow', { opacity: 1, scaleX: 0.8, scaleY: 0.8, transformOrigin: 'center center' });

// //     shoeSections.forEach((section) => {
// //       section.addEventListener('click', () => {
// //         const isAlreadyActive = section === activeSection;
// //         shoeSections.forEach((s) => s.classList.remove('active'));
// //         activeSection = isAlreadyActive ? null : section;

// //         if (isAlreadyActive) {
// //           gsap.to(shoeSections, {
// //             width: isMobile ? '90vw' : '300px',
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });

// //           // Animate image and shadow back to initial state together
// //           gsap.to(section.querySelector('.shoe-image'), {
// //             rotation: 15,
// //             scale: 0.7,
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });
// //           gsap.to(section.querySelector('.shoe-shadow'), {
// //             opacity: 1,
// //             scaleX: 0.8,
// //             scaleY: 0.8,
// //             duration: 0.3,
// //             ease: 'power1.inOut',
// //           });

// //           gsap.to('.shoe-content', {
// //             opacity: 0,
// //             y: 20,
// //             duration: 0.3,
// //           });

// //           gsap.to('.nike-text', {
// //             opacity: 0,
// //             duration: 0.3,
// //           });

// //           return;
// //         }

// //         section.classList.add('active');

// //         gsap.to(section, {
// //           width: isMobile ? '100vw' : '500px',
// //           duration: 0.3,
// //           ease: 'power1.inOut',
// //         });

// //         // Animate image and shadow to active state together
// //         gsap.to(section.querySelector('.shoe-image'), {
// //           rotation: 0,
// //           scale: 1.15,
// //           duration: 0.3,
// //           ease: 'power1.inOut',
// //         });
// //         gsap.to(section.querySelector('.shoe-shadow'), {
// //           opacity: 0, // Hide shadow when scaled
// //           scaleX: 1.15, // Scale shadow with image for a smoother disappear effect
// //           scaleY: 1.15,
// //           duration: 0.3,
// //           ease: 'power1.inOut',
// //         });


// //         gsap.to(section.querySelector('.shoe-content'), {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.3,
// //         });

// //         gsap.to(section.querySelectorAll('.nike-text'), {
// //           opacity: 1,
// //           duration: 0.3,
// //         });

// //         shoeSections.forEach((otherSection) => {
// //           if (otherSection !== section) {
// //             gsap.to(otherSection, {
// //               width: isMobile ? '0vw' : '300px',
// //               duration: 0.3,
// //             });

// //             // Animate other images and shadows back to initial state together
// //             gsap.to(otherSection.querySelector('.shoe-image'), {
// //               rotation: 15,
// //               scale: 0.7,
// //               duration: 0.3,
// //             });
// //             gsap.to(otherSection.querySelector('.shoe-shadow'), {
// //               opacity: 1,
// //               scaleX: 0.8,
// //               scaleY: 0.8,
// //               duration: 0.3,
// //             });

// //             gsap.to(otherSection.querySelector('.shoe-content'), {
// //               opacity: 0,
// //               y: 20,
// //               duration: 0.3,
// //             });

// //             gsap.to(otherSection.querySelectorAll('.nike-text'), {
// //               opacity: 0,
// //               duration: 0.3,
// //             });
// //           }
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
// //             className="shoe-section snap-center flex-shrink-0 w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg"
// //             data-shoe={product.id}
// //           >
// //             {/* Background Nike Text - hidden when scaled */}
// //             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
// //               <div className="nike-text">
// //                 <span
// //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// //                   style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
// //                 >
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //               <div className="nike-text">
// //                 <span className="text-8xl font-extrabold tracking-wider text-gray-200 py-4">
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //               <div className="nike-text">
// //                 <span
// //                   className="text-8xl font-extrabold tracking-wider text-transparent"
// //                   style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)' }}
// //                 >
// //                   {product.name.split(' ')[0]}
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="relative z-20 w-full flex items-center justify-center pt-8">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
// //               />
// //               {/* Product Shadow */}
// //               <div className="shoe-shadow absolute bottom-0 w-[60%] h-4 bg-gray-500/30 rounded-full blur-md"></div>
// //             </div>

// //             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center p-4">
// //               <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
// //               <h4 className="text-2xl font-bold text-gray-900">{product.variant}</h4>
// //               <p className="text-xs font-light text-gray-600 max-w-[280px] mx-auto mb-3">
// //                 {product.description}
// //               </p>
// //               <div className="flex justify-center">
// //                 <button className="py-2 px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200">
// //                   {product.price}
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </main>

// //       <style jsx='true' global='true'>{`
// //         body {
// //           margin: 0;
// //           overflow-x: hidden; /* Prevent horizontal scrollbar on body */
// //         }
// //         .shoe-section {
// //           cursor: pointer;
// //           transition: all 0.3s ease-in-out;
// //         }

// //         .shoe-content {
// //           opacity: 0;
// //           transform: translateY(20px);
// //         }

// //         .nike-text {
// //           opacity: 0;
// //           transition: opacity 0.5s ease;
// //         }

// //         /* Hide scrollbar cross-browser */
// //         main::-webkit-scrollbar {
// //           display: none;
// //         }

// //         main {
// //           -ms-overflow-style: none;
// //           scrollbar-width: none;
// //         }
// //       `}</style>
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
//   ];

//   useEffect(() => {
//     const shoeSections = document.querySelectorAll('.shoe-section');
//     let activeSection = null;
//     const isMobile = window.innerWidth < 640;

//     gsap.set(shoeSections, {
//       width: isMobile ? '90vw' : '300px',
//       flexShrink: 0,
//     });

//     gsap.set('.shoe-content', { opacity: 0, y: 20 });
//     gsap.set('.nike-text', { opacity: 0 });
//     gsap.set('.shoe-image', {
//       rotation: 15,
//       scale: 0.7,
//       transformOrigin: 'center center',
//       willChange: 'transform',
//     });
//     gsap.set('.shoe-shadow', {
//       opacity: 1,
//       scaleX: 0.8,
//       scaleY: 0.8,
//       transformOrigin: 'center center',
//     });

//     shoeSections.forEach((section) => {
//       section.addEventListener('click', () => {
//         const isAlreadyActive = section === activeSection;
//         shoeSections.forEach((s) => s.classList.remove('active'));
//         activeSection = isAlreadyActive ? null : section;

//         if (isAlreadyActive) {
//           gsap.to(shoeSections, {
//             width: isMobile ? '90vw' : '300px',
//             duration: 0.3,
//             ease: 'power1.inOut',
//           });

//           gsap.to(section.querySelector('.shoe-image'), {
//             rotation: 15,
//             scale: 0.7,
//             duration: 0.3,
//           });
//           gsap.to(section.querySelector('.shoe-shadow'), {
//             opacity: 1,
//             scaleX: 0.8,
//             scaleY: 0.8,
//             duration: 0.3,
//           });

//           gsap.to('.shoe-content', {
//             opacity: 0,
//             y: 20,
//             duration: 0.3,
//           });

//           gsap.to('.nike-text', {
//             opacity: 0,
//             duration: 0.3,
//           });

//           return;
//         }

//         section.classList.add('active');

//         gsap.to(section, {
//           width: isMobile ? '100vw' : '500px',
//           duration: 0.3,
//           ease: 'power1.inOut',
//         });

//         gsap.to(section.querySelector('.shoe-image'), {
//           rotation: 0,
//           scale: 1.15,
//           duration: 0.3,
//         });
//         gsap.to(section.querySelector('.shoe-shadow'), {
//           opacity: 0,
//           scaleX: 1.15,
//           scaleY: 1.15,
//           duration: 0.3,
//         });

//         gsap.to(section.querySelector('.shoe-content'), {
//           opacity: 1,
//           y: 0,
//           duration: 0.3,
//         });

//         gsap.to(section.querySelectorAll('.nike-text'), {
//           opacity: 1,
//           duration: 0.3,
//         });

//         shoeSections.forEach((otherSection) => {
//           if (otherSection !== section) {
//             gsap.to(otherSection, {
//               width: isMobile ? '0vw' : '300px',
//               duration: 0.3,
//             });

//             gsap.to(otherSection.querySelector('.shoe-image'), {
//               rotation: 15,
//               scale: 0.7,
//               duration: 0.3,
//             });
//             gsap.to(otherSection.querySelector('.shoe-shadow'), {
//               opacity: 1,
//               scaleX: 0.8,
//               scaleY: 0.8,
//               duration: 0.3,
//             });

//             gsap.to(otherSection.querySelector('.shoe-content'), {
//               opacity: 0,
//               y: 20,
//               duration: 0.3,
//             });

//             gsap.to(otherSection.querySelectorAll('.nike-text'), {
//               opacity: 0,
//               duration: 0.3,
//             });
//           }
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-[#f8f5ee] to-[#fcfcfc] text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
//       <header className="text-center py-12 px-4">
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Product</h2>
//         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           Our best-selling products with interactive 3D rotation effect
//         </p>
//       </header>

//       <main className="flex w-full h-[650px] overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="shoe-section snap-center flex-shrink-0 w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg"
//             data-shoe={product.id}
//           >
//             {/* Nike Text */}
//             <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
//               {[...Array(3)].map((_, idx) => (
//                 <div key={idx} className="nike-text">
//                   <span
//                     className={`text-8xl font-extrabold tracking-wider ${
//                       idx === 1 ? 'text-gray-200 py-4' : 'text-transparent'
//                     }`}
//                     style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
//                   >
//                     {product.name.split(' ')[0]}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Product Image & Shadow */}
//             <div className="relative z-20 w-full flex items-center justify-center pt-8">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
//               />
//               <div className="shoe-shadow absolute bottom-0 w-[60%] h-4 bg-gray-500/30 rounded-full blur-md"></div>
//             </div>

//             {/* Full content visible only after click */}
//             <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center p-4">
//               <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//               <h4 className="text-2xl font-bold text-gray-900">{product.variant}</h4>
//               <p className="text-xs font-light text-gray-600 max-w-[280px] mx-auto mb-3">
//                 {product.description}
//               </p>
//               <div className="flex justify-center">
//                 <button className="py-2 px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200">
//                   {product.price}
//                 </button>
//               </div>
//             </div>

//             {/* Static Price at bottom (only before click) */}
//             <div className="static-price absolute bottom-4 z-10 text-center text-base font-semibold text-black bg-white px-4 py-1 rounded-full shadow transition-opacity duration-300">
//               {product.price}
//             </div>
//           </div>
//         ))}
//       </main>

//       <style jsx="true" global="true">{`
//         body {
//           margin: 0;
//           overflow-x: hidden;
//         }
//         .shoe-section {
//           cursor: pointer;
//           transition: all 0.3s ease-in-out;
//         }
//         .shoe-content {
//           opacity: 0;
//           transform: translateY(20px);
//         }
//         .nike-text {
//           opacity: 0;
//           transition: opacity 0.5s ease;
//         }
//         .static-price {
//           opacity: 1;
//         }
//         .shoe-section.active .static-price {
//           opacity: 0;
//           pointer-events: none;
//         }
//         main::-webkit-scrollbar {
//           display: none;
//         }
//         main {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
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

  // useEffect(() => {
  //   const shoeSections = document.querySelectorAll('.shoe-section');
  //   let activeSection = null;
  //   const isMobile = window.innerWidth < 640;


  //   gsap.set(shoeSections, {
  //     width: isMobile ? '90vw' : '300px',
  //     flexShrink: 0,
  //   });

  //   gsap.set('.shoe-content', { opacity: 0, y: 20 });
  //   gsap.set('.nike-text', { opacity: 0 });
  //   gsap.set('.shoe-image', {
  //     rotation: 15,
  //     scale: 0.7,
  //     transformOrigin: 'center center',
  //   });
  //   gsap.set('.shoe-shadow', {
  //     opacity: 1,
  //     scaleX: 0.8,
  //     scaleY: 0.8,
  //     transformOrigin: 'center center',
  //   });

  //   shoeSections.forEach((section) => {
  //     section.addEventListener('click', () => {
  //       const isAlreadyActive = section === activeSection;
  //       shoeSections.forEach((s) => s.classList.remove('active'));
  //       activeSection = isAlreadyActive ? null : section;

  //       // Create a master timeline for all animations
  //       const masterTL = gsap.timeline({
  //         defaults: { duration: 0.5, ease: 'power2.inOut' }
  //       });

  //       if (isAlreadyActive) {
  //         // Collapse animation sequence
  //         masterTL
  //           .to(section.querySelector('.shoe-content'), {
  //             opacity: 0,
  //             y: 20,
  //             duration: 0.3
  //           })
  //           .to(section.querySelectorAll('.nike-text'), {
  //             opacity: 0,
  //             duration: 0.2
  //           }, '<0.1')
  //           .to(section.querySelector('.shoe-image'), {
  //             rotation: 15,
  //             scale: 0.7,
  //           }, '<')
  //           .to(section.querySelector('.shoe-shadow'), {
  //             opacity: 1,
  //             scaleX: 0.8,
  //             scaleY: 0.8,
  //           }, '<')
  //           .to(shoeSections, {
  //             width: isMobile ? '90vw' : '300px',
  //             stagger: 0.05
  //           }, '<');

  //         return;
  //       }

  //       section.classList.add('active');

  //       // Expand animation sequence
  //       masterTL
  //         .to(shoeSections, {
  //           width: (i, target) => {
  //             return target === section 
  //               ? (isMobile ? '100vw' : '500px') 
  //               : (isMobile ? '0vw' : '300px');
  //           },
  //           stagger: 0.05
  //         })
  //         .to(section.querySelector('.shoe-image'), {
  //           rotation: 0,
  //           scale: 1.15,
  //         }, '<0.2')
  //         .to(section.querySelector('.shoe-shadow'), {
  //           opacity: 0,
  //           scaleX: 1.15,
  //           scaleY: 1.15,
  //         }, '<')
  //         .to(section.querySelectorAll('.nike-text'), {
  //           opacity: 1,
  //           duration: 0.4
  //         }, '<0.3')
  //         .to(section.querySelector('.shoe-content'), {
  //           opacity: 1,
  //           y: 0,
  //         }, '<0.4');

  //       // Animate other sections
  //       shoeSections.forEach((otherSection) => {
  //         if (otherSection !== section) {
  //           masterTL
  //             .to(otherSection.querySelector('.shoe-image'), {
  //               rotation: 15,
  //               scale: 0.7,
  //             }, '<')
  //             .to(otherSection.querySelector('.shoe-shadow'), {
  //               opacity: 1,
  //               scaleX: 0.8,
  //               scaleY: 0.8,
  //             }, '<')
  //             .to(otherSection.querySelector('.shoe-content'), {
  //               opacity: 0,
  //               y: 20,
  //             }, '<')
  //             .to(otherSection.querySelectorAll('.nike-text'), {
  //               opacity: 0,
  //             }, '<');
  //         }
  //       });
  //     });
  //   });
  // }, []);
//   useEffect(() => {
//   const shoeSections = document.querySelectorAll('.shoe-section');
//   let activeSection = null;
//   const isMobile = window.innerWidth < 640;

//   // Initial setup remains the same
//   gsap.set(shoeSections, {
//     width: isMobile ? '90vw' : '300px',
//     flexShrink: 0,
//   });

//   gsap.set('.shoe-content', { opacity: 0, y: 20 });
//   gsap.set('.nike-text', { opacity: 0 });
//   gsap.set('.shoe-image', {
//     rotation: 15,
//     scale: 0.7,
//     transformOrigin: 'center center',
//   });
//   gsap.set('.shoe-shadow', {
//     opacity: 1,
//     scaleX: 0.8,
//     scaleY: 0.8,
//     transformOrigin: 'center center',
//   });

//   shoeSections.forEach((section) => {
//     section.addEventListener('click', () => {
//       const isAlreadyActive = section === activeSection;
//       shoeSections.forEach((s) => s.classList.remove('active'));
//       activeSection = isAlreadyActive ? null : section;

//       // Create a master timeline with faster durations for non-width animations
//       const masterTL = gsap.timeline();

//       if (isAlreadyActive) {
//         // Collapse animation - keep width timing same but speed up others
//         masterTL
//           .to(shoeSections, {
//             width: isMobile ? '90vw' : '300px',
//             stagger: 0.05,
//             duration: 0.5 // Keep width transition same
//           })
//           .to(section.querySelector('.shoe-content'), {
//             opacity: 0,
//             y: 20,
//             duration: 0.2 // Faster
//           }, '<0.1') // Start slightly after width begins
//           .to(section.querySelectorAll('.nike-text'), {
//             opacity: 0,
//             duration: 0.15 // Faster
//           }, '<')
//           .to(section.querySelector('.shoe-image'), {
//             rotation: 15,
//             scale: 0.7,
//             duration: 0.3 // Faster
//           }, '<')
//           .to(section.querySelector('.shoe-shadow'), {
//             opacity: 1,
//             scaleX: 0.8,
//             scaleY: 0.8,
//             duration: 0.3 // Faster
//           }, '<');

//         return;
//       }

//       section.classList.add('active');

//       // Expand animation - keep width timing same but speed up others
//       masterTL
//         .to(shoeSections, {
//           width: (i, target) => {
//             return target === section 
//               ? (isMobile ? '100vw' : '500px') 
//               : (isMobile ? '0vw' : '300px');
//           },
//           stagger: 0.05,
//           duration: 0.5 // Keep width transition same
//         })
//         .to(section.querySelector('.shoe-image'), {
//           rotation: 0,
//           scale: 1.15,
//           duration: 0.3 // Faster
//         }, '<0.1') // Start slightly after width begins
//         .to(section.querySelector('.shoe-shadow'), {
//           opacity: 0,
//           scaleX: 1.15,
//           scaleY: 1.15,
//           duration: 0.1 // Faster
//         }, '<')
//         .to(section.querySelectorAll('.nike-text'), {
//           opacity: 1,
//           duration: 0.1 // Faster
//         }, '<0.2')
//         .to(section.querySelector('.shoe-content'), {
//           opacity: 1,
//           y: 0,
//           duration: 0.1 // Faster
//         }, '<0.2');

//       // Animate other sections faster
//       shoeSections.forEach((otherSection) => {
//         if (otherSection !== section) {
//           masterTL
//             .to(otherSection.querySelector('.shoe-image'), {
//               rotation: 15,
//               scale: 0.7,
//               duration: 0.3 // Faster
//             }, '<0.1')
//             .to(otherSection.querySelector('.shoe-shadow'), {
//               opacity: 1,
//               scaleX: 0.8,
//               scaleY: 0.8,
//               duration: 0.3 // Faster
//             }, '<')
//             .to(otherSection.querySelector('.shoe-content'), {
//               opacity: 0,
//               y: 20,
//               duration: 0.2 // Faster
//             }, '<')
//             .to(otherSection.querySelectorAll('.nike-text'), {
//               opacity: 0,
//               duration: 0.2 // Faster
//             }, '<');
//         }
//       });
//     });
//   });
// }, []);

useEffect(() => {
  const shoeSections = document.querySelectorAll('.shoe-section');
  let activeSection = null;
  const isMobile = window.innerWidth < 640;

  // Initial setup
  gsap.set(shoeSections, {
    width: isMobile ? '90vw' : '300px',
    flexShrink: 0,
  });

  gsap.set('.shoe-content', { opacity: 0, y: 20 });
  gsap.set('.nike-text', { opacity: 0 });
  gsap.set('.shoe-image', {
    rotation: 15,
    scale: 0.7,
    transformOrigin: 'center center',
  });
  gsap.set('.shoe-shadow', {
    opacity: 1,
    scaleX: 0.8,
    scaleY: 0.8,
    transformOrigin: 'center center',
  });

  shoeSections.forEach((section) => {
    section.addEventListener('click', () => {
      const isAlreadyActive = section === activeSection;
      shoeSections.forEach((s) => s.classList.remove('active'));
      activeSection = isAlreadyActive ? null : section;

      // Create timeline with smooth, fast animations
      const masterTL = gsap.timeline({
        defaults: {
          duration: 0.35,
          ease: 'power2.inOut'
        }
      });

      if (isAlreadyActive) {
        // Closing animation - perfectly smooth and centered
        masterTL
          .to(section, {
            width: isMobile ? '90vw' : '300px',
            ease: 'power2.inOut'
          }, 0)
          .to(section.querySelector('.shoe-image'), {
            rotation: 15,
            scale: 0.7,
            transformOrigin: 'center center'
          }, 0)
          .to(section.querySelector('.shoe-shadow'), {
            opacity: 1,
            scaleX: 0.8,
            scaleY: 0.8
          }, 0)
          .to(section.querySelector('.shoe-content'), {
            opacity: 0,
            y: 20,
            duration: 0.25
          }, 0)
          .to(section.querySelectorAll('.nike-text'), {
            opacity: 0,
            duration: 0.2
          }, 0);

        return;
      }

      section.classList.add('active');

      // Opening animation - perfectly centered scaling
      masterTL
        .to(section, {
          width: isMobile ? '100vw' : '500px',
          ease: 'power2.inOut'
        }, 0)
        .to(section.querySelector('.shoe-image'), {
          rotation: 0,
          scale: 1.15,
          transformOrigin: 'center center'
        }, 0)
        .to(section.querySelector('.shoe-shadow'), {
          opacity: 0,
          scaleX: 1.15,
          scaleY: 1.15
        }, 0)
        .to(section.querySelectorAll('.nike-text'), {
          opacity: 1,
          duration: 0.3
        }, 0.1)
        .to(section.querySelector('.shoe-content'), {
          opacity: 1,
          y: 0,
          duration: 0.3
        }, 0.1);

      // Animate other sections to close
      shoeSections.forEach((otherSection) => {
        if (otherSection !== section) {
          masterTL
            .to(otherSection, {
              width: isMobile ? '0vw' : '300px',
              ease: 'power2.inOut'
            }, 0)
            .to(otherSection.querySelector('.shoe-image'), {
              rotation: 15,
              scale: 0.7
            }, 0)
            .to(otherSection.querySelector('.shoe-shadow'), {
              opacity: 1,
              scaleX: 0.8,
              scaleY: 0.8
            }, 0)
            .to(otherSection.querySelector('.shoe-content'), {
              opacity: 0,
              y: 20,
              duration: 0.2
            }, 0)
            .to(otherSection.querySelectorAll('.nike-text'), {
              opacity: 0,
              duration: 0.2
            }, 0);
        }
      });
    });
  });
}, []);

  return (
    <div className="bg-gradient-to-br from-[#f8f5ee] to-[#fcfcfc] text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
      <header className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Product</h2>
        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Our best-selling products with interactive 3D rotation effect
        </p>
      </header>

      <main className="flex w-full h-[650px] overflow-x-auto snap-x snap-mandatory scrollbar-hide p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="shoe-section snap-center flex-shrink-0 w-[300px] bg-white relative overflow-hidden flex flex-col justify-center items-center rounded-2xl mx-2 shadow-lg"
            data-shoe={product.id}
          >
            {/* Nike Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="nike-text">
                  <span
                    className={`text-8xl font-extrabold tracking-wider ${
                      idx === 1 ? 'text-gray-200 py-4' : 'text-transparent'
                    }`}
                    style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
                  >
                    {product.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Product Image & Shadow */}
            <div className="relative z-20 w-full flex items-center justify-center pt-8">
              <img
                src={product.image}
                alt={product.name}
                className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
              />
              <div className="shoe-shadow absolute bottom-0 w-[60%] h-4 bg-gray-500/30 rounded-full blur-md"></div>
            </div>

            {/* Full content visible only after click */}
            <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <h4 className="text-2xl font-bold text-gray-900">{product.variant}</h4>
              <p className="text-xs font-light text-gray-600 max-w-[280px] mx-auto mb-3">
                {product.description}
              </p>
              <div className="flex justify-center">
                <button className="py-2 px-8 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-200">
                  {product.price}
                </button>
              </div>
            </div>

            {/* Static Price at bottom (only before click) */}
            <div className="static-price absolute bottom-4 z-10 text-center text-base font-semibold text-black bg-white px-4 py-1 rounded-full shadow transition-opacity duration-300">
              {product.price}
            </div>
          </div>
        ))}
      </main>

      <style jsx="true" global="true">{`
        body {
          margin: 0;
          overflow-x: hidden;
        }
        .shoe-section {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .shoe-content {
          opacity: 0;
          transform: translateY(20px);
        }
        .nike-text {
          opacity: 0;
        }
        .static-price {
          opacity: 1;
        }
        .shoe-section.active .static-price {
          opacity: 0;
          pointer-events: none;
        }
        main::-webkit-scrollbar {
          display: none;
        }
        main {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TopProduct;
