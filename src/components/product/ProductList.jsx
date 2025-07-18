// import React from 'react';
// import { Link } from 'react-router-dom';

// const ProductList = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map(product => (
//         <Link 
//           to={`/products/${product.id}`} 
//           key={product.id}
//           className="block"
//         >
//           <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               <p className="text-gray-600 mb-2">{product.brand}</p>
//               <p className="text-orange-500 font-bold">${product.price.toLocaleString()}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';

// const ProductList = ({ products }) => {
//   const containerRef = useRef(null);

//   // GSAP animation for staggering cards on load
//   useEffect(() => {
//     if (containerRef.current) {
//       const cards = containerRef.current.children;
//       gsap.fromTo(cards, 
//         { 
//           opacity: 0, 
//           y: 50 
//         },
//         { 
//           opacity: 1, 
//           y: 0, 
//           duration: 0.5, 
//           stagger: 0.1, // This creates the staggered effect
//           ease: 'power3.out' 
//         }
//       );
//     }
//   }, [products]); // Re-run animation if products change

//   return (
//     <div 
//       ref={containerRef} 
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 md:p-6"
//     >
//       {products.map(product => (
//         // The Link component is targeted by GSAP as a child of the container
//         <Link 
//           to={`/products/${product.id}`} 
//           key={product.id}
//           className="block opacity-0" // Start as invisible for the animation
//         >
//           <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer flex flex-col h-full">
            
//             {/* Image Container: Ensures image is fully visible */}
//             <div className="aspect-square w-full  flex items-center justify-center p-4 overflow-hidden">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
//               />
//             </div>
            
//             {/* Content */}
//             <div className="p-5 flex flex-col flex-grow">
//               <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
//               <h3 className="font-bold text-lg text-gray-900 mb-2 truncate">
//                 {product.name}
//               </h3>
//               <div className="mt-auto"> {/* Pushes price to the bottom */}
//                 <p className="text-xl font-black text-orange-500">
//                   ${product.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const ProductList = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.children;
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [products]);

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    console.log('Add to cart clicked!');
    // Add your "add to cart" logic here
  };

  return (
    // 👇 यहाँ बदलाव किया गया है
    <div 
      ref={containerRef} 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6"
    >
      {products.map(product => (
        <Link 
          to={`/products/${product.id}`} 
          key={product.id}
          className="block opacity-0 group relative aspect-square rounded-xl overflow-hidden shadow-lg"
        >
          {/* Full-size Image as Background */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          
          {/* Sliding Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            
            {/* Product Name */}
            <h3 className="font-bold text-lg text-white mb-1 truncate">
              {product.name}
            </h3>

            {/* Product Price */}
            <p className="text-xl font-black text-orange-400 mb-3">
              ${product.price.toLocaleString()}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCartClick}
              className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;