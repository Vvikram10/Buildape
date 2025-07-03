

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
      bgColor: 'bg-[#1D4ED8]', // Red from image
    },
    {
      id: 'game-royal',
      name: 'Diesel Perfect Sports',
      variant: 'Perfect Nutrition',
      description: 'Perfect Sports Diesel Grass Fed New Zealand Whey Protein Isolate is the perfect choice for those looking for a high-quality protein supplement',
      price: '$56',
      image: '/product-2.png',
      bgColor: 'bg-[#8B0000]', // Blue from image
    },
    {
      id: 'pine-green',
      name: 'PVL IsoGold 5Lb',
      variant: 'Iso Nutrition',
      description: 'ISO GOLD is the premium isolated whey protein you have been looking for.',
      price: '$48',
      image: '/product-3.png',
      bgColor: 'bg-[#DAA520]', // Green from image
    },
    {
      id: 'court-purple',
      name: 'RYSE BCAA/EAA',
      variant: 'RYSE Nutrition',
      description: 'This product contains 5g 2:1:1 BCAAs and 3G of Essential Amino Acids for superior recovery compared to BCAA alone.',
      price: '$40',
      image: '/product-4.png',
      bgColor: 'bg-[#22c55e]', // Purple from image
    },
  ];

  // GSAP Animation Logic - NO CHANGES MADE HERE
  useEffect(() => {
    const shoeSections = document.querySelectorAll('.shoe-section');
    const initialWidth = 100 / shoeSections.length;

    gsap.set(shoeSections, { width: `${initialWidth}%` });
    gsap.set('.shoe-content', { opacity: 0, y: 20 });
    gsap.set('.nike-text', { opacity: 0 });

    shoeSections.forEach(section => {
      section.addEventListener('mouseenter', () => {
        shoeSections.forEach(s => s.classList.remove('active'));
        section.classList.add('active');

        gsap.to(section, {
          width: '40%',
          duration: 0.7,
          ease: 'power2.inOut'
        });

        gsap.to(section.querySelector('.shoe-image'), {
          rotation: 0,
          scale: 1.15,
          duration: 0.7,
          ease: 'power2.inOut'
        });

        gsap.to(section.querySelector('.shoe-content'), {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out'
        });

        gsap.to(section.querySelectorAll('.nike-text'), {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });

        shoeSections.forEach(otherSection => {
          if (otherSection !== section) {
            gsap.to(otherSection, {
              width: `${(100 - 40) / (shoeSections.length - 1)}%`,
              duration: 0.7,
              ease: 'power2.inOut'
            });
            gsap.to(otherSection.querySelector('.shoe-image'), {
              rotation: 15,
              scale: 0.7,
              duration: 0.7,
              ease: 'power2.inOut'
            });
            gsap.to(otherSection.querySelector('.shoe-content'), {
              opacity: 0,
              y: 20,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(otherSection.querySelectorAll('.nike-text'), {
              opacity: 0,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });
      });

      section.addEventListener('mouseleave', () => {
        shoeSections.forEach(s => s.classList.remove('active'));
        gsap.to(shoeSections, {
          width: `${initialWidth}%`,
          duration: 0.7,
          ease: 'power2.inOut'
        });
        gsap.to('.shoe-image', { // Reset all images
            rotation: 15,
            scale: 0.7,
            duration: 0.7,
            ease: 'power2.inOut'
        });
        gsap.to('.shoe-content', { // Hide all content
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'power2.out'
        });
        gsap.to('.nike-text', { // Hide all NIKE text
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
      });
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen w-full flex flex-col justify-center items-center">
            <header className="text-center py-12 px-4">
         <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-gray-800 tracking-tight">
           Top Products
         </h2>
         <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl mx-auto">
           Our best-selling products with interactive 3D rotation effect
        </p>
      </header>
      <main className="flex h-[650px] w-full max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className={`shoe-section ${product.bgColor} relative overflow-hidden flex justify-center items-center`}
            data-shoe={product.id}
          >
            {/* Nike background text container - UPDATED */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0">
                <div className="nike-text">
                    <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>{product.name.split(' ')[0]}</span>
                </div>
                <div className="nike-text">
                    <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-white py-4">{product.name.split(' ')[0]}</span>
                </div>
                <div className="nike-text">
                    <span className="text-8xl lg:text-9xl font-extrabold tracking-wider text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>{product.name.split(' ')[0]}</span>
                </div>
            </div>

            {/* Shoe Image */}
            <div className="relative z-20 w-full h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={`${product.name} ${product.variant}`}
                className="shoe-image w-auto h-auto max-w-[80%] max-h-[50%] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Text content */}
            <div className="shoe-content absolute bottom-[10px] left-0 right-0 z-30 text-center">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <h4 className="text-2xl font-bold text-white ">{product.variant}</h4>
                <p className="text-xs font-light text-white/80 max-w-[280px] mx-auto mb-1">{product.description}</p>
                <div className="flex justify-center">
                    <button className="price-button py-1 px-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold">
                        {product.price}
                    </button>
                </div>
            </div>
          </div>
        ))}
      </main>

      <style jsx global>{`
        .shoe-section {
          transition: width 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shoe-image {
          transition: transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform: rotate(15deg) scale(0.7);
          transform-origin: center center;
          will-change: transform;
        }

        .shoe-content {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .nike-text {
          opacity: 0; /* Initially hidden */
          transition: opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default TopProduct;