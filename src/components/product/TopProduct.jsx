

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

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
    const mainScrollContainer = document.querySelector('.main-scroll-container');
    const shoeSections = gsap.utils.toArray('.shoe-section');
    let activeSection = null;

    // Responsive settings
    const getResponsiveSettings = () => {
      const isMobile = window.innerWidth < 768;
      return {
        isMobile,
        collapsed: {
          width: isMobile ? '150px' : '200px',
          height: isMobile ? '200px' : '260px',
        },
        expanded: {
          width: isMobile ? 'calc(100vw - 40px)' : '500px',
          height: isMobile ? '460px' : '600px',
        },
        image: {
          collapsedScale: isMobile ? 0.8 : 1.2,
          expandedScale: isMobile ? 1 : 1.15,
        },
      };
    };

    // Set initial state for all cards
    const setInitialStates = () => {
        const { collapsed, image } = getResponsiveSettings();
        gsap.set(shoeSections, {
            width: collapsed.width,
            height: collapsed.height,
            flexShrink: 0,
        });
        gsap.set('.shoe-content', { opacity: 0, y: 20, visibility: 'hidden' });
        gsap.set('.nike-text', { opacity: 0 });
        gsap.set('.shoe-image', { rotation: 15, scale: image.collapsedScale });
        gsap.set('.shoe-shadow', { opacity: 1, width: '40%', height: '2px', y: '10px' });
    };

    const handleCardClick = (e) => {
        const section = e.currentTarget;
        const { isMobile, collapsed, expanded, image } = getResponsiveSettings();
        const isAlreadyActive = section.classList.contains('active');

        if (isAlreadyActive) {
            const tl = gsap.timeline();
            tl.to(section, { ...collapsed, duration: 0.5, ease: 'power2.inOut' })
              .to(section.querySelector('.shoe-image'), { rotation: 15, scale: image.collapsedScale, duration: 0.5, ease: 'power2.inOut' }, "<")
              .to(section.querySelector('.shoe-shadow'), { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, "<")
              .to(section.querySelector('.shoe-content'), { opacity: 0, y: 20, visibility: 'hidden', duration: 0.3 }, "<")
              .to(section.querySelectorAll('.nike-text'), { opacity: 0, duration: 0.3 }, "<");
            section.classList.remove('active');
            activeSection = null;
            return;
        }

        if (activeSection) {
            const tl = gsap.timeline();
            tl.to(activeSection, { ...collapsed, duration: 0.5, ease: 'power2.inOut' })
              .to(activeSection.querySelector('.shoe-image'), { rotation: 15, scale: image.collapsedScale, duration: 0.5, ease: 'power2.inOut' }, "<")
              .to(activeSection.querySelector('.shoe-shadow'), { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, "<")
              .to(activeSection.querySelector('.shoe-content'), { opacity: 0, y: 20, visibility: 'hidden', duration: 0.3 }, "<")
              .to(activeSection.querySelectorAll('.nike-text'), { opacity: 0, duration: 0.3 }, "<");
            activeSection.classList.remove('active');
        }

        activeSection = section;
        section.classList.add('active');
        
        const masterTL = gsap.timeline();

        if (isMobile) {
            const scrollLeft = section.offsetLeft - (mainScrollContainer.offsetWidth - section.offsetWidth) / 2;
            masterTL.to(mainScrollContainer, {
                scrollTo: { x: scrollLeft, autoKill: false },
                duration: 0.5,
                ease: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            });
        }

        masterTL
            .to(section, { ...expanded, duration: 0.5, ease: 'power2.inOut' }, isMobile ? "-=0.2" : "<")
            .to(section.querySelector('.shoe-image'), { rotation: 0, scale: image.expandedScale, duration: 0.5, ease: 'power2.inOut' }, "<")
            .to(section.querySelector('.shoe-shadow'), { opacity: 0, duration: 0.4 }, "<")
            .to(section.querySelectorAll('.nike-text'), { opacity: 1, duration: 0.4, stagger: 0.05 }, "-=0.2")
            .to(section.querySelector('.shoe-content'), { opacity: 1, y: 0, visibility: 'visible', duration: 0.4 }, "<0.1");
    };

    setInitialStates();
    shoeSections.forEach(section => section.addEventListener('click', handleCardClick));

    const handleResize = () => {
        setInitialStates();
        if (activeSection) {
            activeSection.classList.remove('active');
            activeSection = null;
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        shoeSections.forEach(section => section.removeEventListener('click', handleCardClick));
        window.removeEventListener('resize', handleResize);
    };
  }, [products]);

  return (
    <div className="text-gray-800 min-h-screen w-full flex flex-col justify-center items-center bg-gray-50">
      <header className="text-center py-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Top Products</h2>
        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Our best-selling products with interactive animations.
        </p>
      </header>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shoe-section {
          cursor: pointer;
        }
        
        /* === KEY CHANGE START === */
        /* This new approach directly controls the image container's height */
        
        /* When card is collapsed, image container takes full height to center the image */
        .shoe-section:not(.active) .image-wrapper {
          height: 100%;
        }
        
        /* When card is expanded, image container gets its original 60% height */
        .shoe-section.active .image-wrapper {
          height: 60%;
        }

        /* Optional: Add a smooth transition for the height change */
        .image-wrapper {
            transition: height 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        /* === KEY CHANGE END === */

        .nike-text {
          white-space: nowrap;
        }
        
         @media (max-width: 767px) {
           .shoe-content h3 { font-size: 1rem; }
           .shoe-content h4 { font-size: 1.1rem; }
           .shoe-content p {
              font-size: 0.7rem;
              margin-bottom: 0.2rem;
              line-height: 1.3;
           }
           .shoe-content .price-display {
               font-size: 1rem;
               padding: 4px 16px;
           }
           .shoe-content .add-to-cart-btn {
              padding: 5px 16px;
              font-size: 0.8rem;
           }
           .nike-text span {
              font-size: 3.5rem !important;
           }
         }
      `}</style>

      <main className="main-scroll-container flex w-full h-[550px] md:h-[600px] overflow-x-auto snap-x hide-scrollbar px-4 md:px-8 xl:px-16 items-center justify-start xl:justify-center gap-4 pb-3">
        {products.map((product) => (
          <div
            key={product.id}
            // Returning to `justify-start` as the default flex behavior for the card
            className="shoe-section snap-center flex-shrink-0 bg-white relative overflow-hidden flex flex-col justify-start rounded-2xl shadow-lg"
            data-shoe={product.id}
          >
            {/* Background Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
              {[...Array(3)].map((_, idx) => (
                <div key={idx} className="nike-text">
                  <span
                    className={`text-6xl md:text-8xl font-extrabold tracking-wider ${idx === 1 ? 'text-gray-200 py-0.5 md:py-4' : 'text-transparent'}`}
                    style={idx !== 1 ? { WebkitTextStroke: '1px rgba(0,0,0,0.1)' } : {}}
                  >
                    {product.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* === KEY CHANGE: `h-[60%]` removed and a new class `image-wrapper` is added === */}
            <div className="image-wrapper relative z-20 w-full flex items-center justify-center pt-2 md:pt-6 mb-[-10px]">
              <img
                src={product.image}
                alt={product.name}
                className="shoe-image w-auto h-auto max-w-full max-h-full object-contain drop-shadow-2xl"
              />
              <div className="shoe-shadow absolute bottom-0 w-[50%] h-1.5 md:w-[60%] md:h-4 bg-gray-500/30 rounded-full blur-md"></div>
            </div>

            {/* Content Container - No changes needed here */}
            <div className="shoe-content z-30 w-full text-center p-2 md:p-4 flex-grow flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{product.name}</h3>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">{product.variant}</h4>
              <p className="text-xs font-light text-gray-600 max-w-[95%] md:max-w-[280px] mx-auto my-1 md:my-2">
                {product.description}
              </p>
              <div className="flex flex-col items-center gap-1 md:gap-3 ">
                <div className="price-display px-6 md:px-8 text-black font-normal text-base md:text-lg">
                  {product.price}
                </div>
                <button className="add-to-cart-btn py-2 px-8 bg-black text-white rounded-full font-bold text-base hover:bg-gray-800 transition-colors duration-200">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TopProduct;