

// // // import React, { useState, useEffect } from 'react';
// // // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch, FaTimes } from 'react-icons/fa';
// // // import { useParams } from 'react-router-dom';

// // // const ProductDetails = () => {
// // //   const { id } = useParams();
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [selectedFlavor, setSelectedFlavor] = useState('Cherry Limeade');
// // //   const [isZoomed, setIsZoomed] = useState(false);
// // //   const [showReviewForm, setShowReviewForm] = useState(false);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [activeTab, setActiveTab] = useState('description');
// // //   const [rating, setRating] = useState(0);
// // //   const [hoverRating, setHoverRating] = useState(0);

// // //   // Improved product data structure
// // //   const product = {
// // //     name: "DIESEL 26 GRAM",
// // //     brand: "DIESEL",
// // //     sku: "2030",
// // //     originalPrice: 100,
// // //     salePrice: 47.99,
// // //     rating: 4,
// // //     reviewCount: 0,
// // //     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// // //     flavors: [
// // //       { 
// // //         id: '43', 
// // //         name: 'Cherry Limeade',
// // //         color: '#FF6B6B',
// // //         image: '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg'
// // //       },
// // //       { 
// // //         id: '56', 
// // //         name: 'Strawberry Pineapple',
// // //         color: '#FFD166',
// // //         image: '/adm/uploads/flavor_gallery/1176309bcaa+strawberry.jpeg'
// // //       }
// // //     ],
// // //     images: [
// // //       '/images/diesel-1.jpg',
// // //       '/product-2.png',
// // //     ],
// // //     details: [
// // //       "30 servings per container",
// // //       "BCAA + EAA formula",
// // //       "Includes coconut water powder",
// // //       "Promotes hydration and recovery"
// // //     ]
// // //   };

// // //   // Improved recently viewed items
// // //   const recentlyViewed = [
// // //     { 
// // //       id: 34, 
// // //       name: "Alani BCAA 30 Servings", 
// // //       price: 44.99, 
// // //       originalPrice: 54.99, 
// // //       image: "/adm/uploads/product/bcaa hawaiin.webp",
// // //       rating: 4.5
// // //     },
// // //     { 
// // //       id: 52, 
// // //       name: "RYSE BCAA/EAA 30 serve", 
// // //       price: 47.99, 
// // //       originalPrice: 54.99, 
// // //       image: "/adm/uploads/product/bcaa+cherry.jpeg",
// // //       rating: 4
// // //     },
// // //   ];

// // //     const addToCart = () => {
// // //     // Add to cart logic here
// // //     console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
// // //   };

// // //     const increaseQuantity = () => {
// // //     setQuantity(prev => prev + 1);
// // //   };

// // //   const decreaseQuantity = () => {
// // //     if (quantity > 1) {
// // //       setQuantity(prev => prev - 1);
// // //     }
// // //   };

// // //   const handleFlavorChange = (e) => {
// // //     setSelectedFlavor(e.target.value);
// // //   };


// // //   // Improved star rating component
// // //   const renderStars = (ratingValue) => {
// // //     const stars = [];
// // //     const fullStars = Math.floor(ratingValue);
// // //     const hasHalfStar = ratingValue % 1 !== 0;
    
// // //     for (let i = 1; i <= 5; i++) {
// // //       if (i <= fullStars) {
// // //         stars.push(<FaStar key={i} className="text-yellow-400" />);
// // //       } else if (i === fullStars + 1 && hasHalfStar) {
// // //         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// // //       } else {
// // //         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// // //       }
// // //     }
    
// // //     return stars;
// // //   };

// // //   // Improved flavor selection
// // //   const FlavorSelector = ({ flavors, selected, onSelect }) => {
// // //     return (
// // //       <div className="flex flex-wrap gap-2 mb-4">
// // //         {flavors.map(flavor => (
// // //           <button
// // //             key={flavor.id}
// // //             onClick={() => onSelect(flavor.name)}
// // //             className={`flex items-center px-3 py-2 rounded-full border ${selected === flavor.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
// // //           >
// // //             {flavor.color && (
// // //               <span 
// // //                 className="w-4 h-4 rounded-full mr-2" 
// // //                 style={{ backgroundColor: flavor.color }}
// // //               ></span>
// // //             )}
// // //             {flavor.name}
// // //           </button>
// // //         ))}
// // //       </div>
// // //     );
// // //   };

// // //   // Improved image gallery with thumbnails
// // //   const ImageGallery = ({ images }) => {
// // //     const [mainImage, setMainImage] = useState(images[0]);
    
// // //     return (
// // //       <div className="space-y-4">
// // //         <div className="relative overflow-hidden rounded-lg bg-gray-100">
// // //           <img 
// // //             src={mainImage} 
// // //             alt="Main product" 
// // //             className="w-full h-auto object-contain cursor-zoom-in"
// // //             onMouseEnter={() => setIsZoomed(true)}
// // //             onMouseLeave={() => setIsZoomed(false)}
// // //             style={{ height: '400px' }}
// // //           />
// // //           {isZoomed && (
// // //             <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
// // //               <img 
// // //                 src={mainImage} 
// // //                 alt="Zoomed product" 
// // //                 className="max-w-full max-h-full object-contain"
// // //               />
// // //             </div>
// // //           )}
// // //         </div>
        
// // //         <div className="grid grid-cols-4 gap-2">
// // //           {images.map((img, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => setMainImage(img)}
// // //               className={`rounded border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
// // //             >
// // //               <img 
// // //                 src={img} 
// // //                 alt={`Thumbnail ${index + 1}`} 
// // //                 className="w-full h-20 object-cover"
// // //               />
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="main-wrapper bg-gray-50">

// // //       {/* Breadcrumb */}
// // //       <div className="py-4 bg-white shadow-sm">
// // //         <div className="container mx-auto px-4">
// // //           <nav className="flex" aria-label="Breadcrumb">
// // //             <ol className="flex items-center space-x-2 text-sm">
// // //               <li>
// // //                 <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a>
// // //               </li>
// // //               <li className="text-gray-500">/</li>
// // //               <li className="text-gray-600 font-medium">{product.name}</li>
// // //             </ol>
// // //           </nav>
// // //         </div>
// // //       </div>

// // //       {/* Product Details */}
// // //       <section className="py-8">
// // //         <div className="container mx-auto px-4">
// // //           <div className="bg-white rounded-xl shadow-sm overflow-hidden">
// // //             <div className="flex flex-col lg:flex-row">
// // //               {/* Product Images - Improved */}
// // //               <div className="lg:w-1/2 p-6">
// // //                 <ImageGallery images={product.images} />
// // //               </div>

// // //               {/* Product Info - Improved */}
// // //               <div className="lg:w-1/2 p-6">
// // //                 <div className="space-y-6">
// // //                   <div>
// // //                     <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
// // //                     <div className="flex items-center mb-4">
// // //                       <div className="flex mr-2">
// // //                         {renderStars(product.rating)}
// // //                       </div>
// // //                       <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// // //                     </div>
// // //                     <div className="space-y-2 text-gray-700 mb-4">
// // //                       <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// // //                       <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Pricing - Improved */}
// // //                   <div className="flex items-center">
// // //                     <span className="text-3xl font-bold text-gray-900 mr-3">${product.salePrice}</span>
// // //                     {product.originalPrice && (
// // //                       <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// // //                     )}
// // //                     {product.originalPrice && (
// // //                       <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
// // //                         {Math.round((1 - product.salePrice/product.originalPrice) * 100)}% OFF
// // //                       </span>
// // //                     )}
// // //                   </div>

// // //                   {/* Flavor Selection - Improved */}
// // //                   <div>
// // //                     <h3 className="text-lg font-semibold mb-3">Flavor</h3>
// // //                     <FlavorSelector 
// // //                       flavors={product.flavors} 
// // //                       selected={selectedFlavor} 
// // //                       onSelect={setSelectedFlavor} 
// // //                     />
// // //                   </div>

// // //                   {/* Quantity - Improved */}
// // //                   <div className="flex items-center">
// // //                     <h3 className="text-lg font-semibold mr-4">Quantity:</h3>
// // //                     <div className="flex items-center border rounded-lg overflow-hidden">
// // //                       <button 
// // //                         onClick={decreaseQuantity}
// // //                         className="bg-gray-100 hover:bg-gray-200 px-3 py-2 transition-colors"
// // //                         disabled={quantity <= 1}
// // //                       >
// // //                         <FaMinus className="text-gray-600" />
// // //                       </button>
// // //                       <span className="px-4 py-2 bg-white">{quantity}</span>
// // //                       <button 
// // //                         onClick={increaseQuantity}
// // //                         className="bg-gray-100 hover:bg-gray-200 px-3 py-2 transition-colors"
// // //                       >
// // //                         <FaPlus className="text-gray-600" />
// // //                       </button>
// // //                     </div>
// // //                   </div>

// // //                   {/* Add to Cart - Improved */}
// // //                   <button 
// // //                     onClick={addToCart}
// // //                     className="w-full bg-orange-500 hover:bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center font-medium transition-colors"
// // //                   >
// // //                     <FaShoppingBag className="mr-2" /> Add to Cart - ${(product.salePrice * quantity).toFixed(2)}
// // //                   </button>

// // //                   {/* Product Highlights */}
// // //                   <div className="bg-gray-50 p-4 rounded-lg">
// // //                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// // //                     <ul className="list-disc pl-5 space-y-1">
// // //                       {product.details.map((detail, index) => (
// // //                         <li key={index} className="text-gray-700">{detail}</li>
// // //                       ))}
// // //                     </ul>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Description and Reviews Tabs - Improved */}
// // //             <div className="border-t p-6">
// // //               <div className="flex border-b">
// // //                 <button
// // //                   className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
// // //                   onClick={() => setActiveTab('description')}
// // //                 >
// // //                   Description
// // //                 </button>
// // //                 <button
// // //                   className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
// // //                   onClick={() => setActiveTab('reviews')}
// // //                 >
// // //                   Reviews ({product.reviewCount})
// // //                 </button>
// // //               </div>

// // //               <div className="py-4">
// // //                 {activeTab === 'description' && (
// // //                   <div>
// // //                     <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// // //                     <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
// // //                   </div>
// // //                 )}

// // //                 {activeTab === 'reviews' && (
// // //                   <div className="space-y-6">
// // //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// // //                       <div>
// // //                         <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
// // //                         <div className="flex items-center">
// // //                           <div className="flex mr-2">
// // //                             {renderStars(product.rating)}
// // //                           </div>
// // //                           <span className="text-gray-700">{product.rating} out of 5</span>
// // //                         </div>
// // //                         <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
// // //                       </div>
// // //                       <button
// // //                         onClick={() => setShowReviewForm(!showReviewForm)}
// // //                         className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors"
// // //                       >
// // //                         <FaSearch className="mr-2" /> Write a Review
// // //                       </button>
// // //                     </div>

// // //                     {showReviewForm && (
// // //                       <div className="bg-gray-50 p-6 rounded-lg">
// // //                         <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// // //                         <form className="space-y-4">
// // //                           <div>
// // //                             <label className="block text-gray-700 mb-2">Rating</label>
// // //                             <div className="flex">
// // //                               {[1, 2, 3, 4, 5].map((star) => (
// // //                                 <button
// // //                                   key={star}
// // //                                   type="button"
// // //                                   onMouseEnter={() => setHoverRating(star)}
// // //                                   onMouseLeave={() => setHoverRating(0)}
// // //                                   onClick={() => setRating(star)}
// // //                                   className="text-3xl mr-1"
// // //                                 >
// // //                                   {star <= (hoverRating || rating) ? (
// // //                                     <FaStar className="text-yellow-400" />
// // //                                   ) : (
// // //                                     <FaRegStar className="text-yellow-400" />
// // //                                   )}
// // //                                 </button>
// // //                               ))}
// // //                             </div>
// // //                           </div>
// // //                           <div>
// // //                             <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
// // //                             <input
// // //                               type="text"
// // //                               id="name"
// // //                               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                               required
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
// // //                             <input
// // //                               type="email"
// // //                               id="email"
// // //                               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                               required
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label htmlFor="title" className="block text-gray-700 mb-2">Review Title</label>
// // //                             <input
// // //                               type="text"
// // //                               id="title"
// // //                               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                               required
// // //                             />
// // //                           </div>
// // //                           <div>
// // //                             <label htmlFor="review" className="block text-gray-700 mb-2">Your Review</label>
// // //                             <textarea
// // //                               id="review"
// // //                               rows="4"
// // //                               className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //                               required
// // //                             ></textarea>
// // //                           </div>
// // //                           <button
// // //                             type="submit"
// // //                             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
// // //                           >
// // //                             Submit Review
// // //                           </button>
// // //                         </form>
// // //                       </div>
// // //                     )}

// // //                     {product.reviewCount === 0 ? (
// // //                       <div className="text-center py-8">
// // //                         <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
// // //                       </div>
// // //                     ) : (
// // //                       <div className="space-y-4">
// // //                         {/* Reviews would be listed here */}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Recently Viewed - Improved */}
// // //       <section className="py-12 bg-white">
// // //         <div className="container mx-auto px-4">
// // //           <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
// // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
// // //             {recentlyViewed.map(item => (
// // //               <div key={item.id} className="group">
// // //                 <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
// // //                   <div className="p-4">
// // //                     <img 
// // //                       src={item.image} 
// // //                       alt={item.name} 
// // //                       className="w-full h-48 object-contain mx-auto"
// // //                     />
// // //                   </div>
// // //                   <div className="p-4 border-t">
// // //                     <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
// // //                       {item.name}
// // //                     </h3>
// // //                     <div className="flex items-center mb-2">
// // //                       <div className="flex mr-1">
// // //                         {renderStars(item.rating)}
// // //                       </div>
// // //                     </div>
// // //                     <div className="flex items-center">
// // //                       <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
// // //                       {item.originalPrice && (
// // //                         <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
// // //                       )}
// // //                     </div>
// // //                     <button 
// // //                       className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors"
// // //                     >
// // //                       Add to Cart
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetails;

// // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
// // import { useParams } from 'react-router-dom';
// // import gsap from 'gsap';

// // const ProductDetails = () => {
// //   const { id } = useParams();
  
// //   const [product, setProduct] = useState(null); 
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const [quantity, setQuantity] = useState(1);
// //   const [selectedFlavor, setSelectedFlavor] = useState(null);
// //   const [showReviewForm, setShowReviewForm] = useState(false);
// //   const [activeTab, setActiveTab] = useState('description');
// //   const [rating, setRating] = useState(0);
// //   const [hoverRating, setHoverRating] = useState(0);

// //   const contentRef = useRef(null);
// //   const breadcrumbRef = useRef(null);
// //   const galleryRef = useRef(null);

// //   useEffect(() => {
// //     const fetchProductData = async () => {
// //       try {
// //         setLoading(true);
// //         // --- डमी डेटा (इसे अपनी API से बदलें) ---
// //         const dummyData = {
// //           id: id,
// //           name: "DIESEL 26 GRAM",
// //           brand: "DIESEL",
// //           sku: "2030",
// //           originalPrice: 100,
// //           salePrice: 47.99,
// //           rating: 4,
// //           reviewCount: 0,
// //           description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// //           flavors: [
// //             { id: '43', name: 'Cherry Limeade', color: '#FF6B6B', image: '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg' },
// //             { id: '56', name: 'Strawberry Pineapple', color: '#FFD166', image: '/adm/uploads/flavor_gallery/1176309bcaa+strawberry.jpeg' }
// //           ],
// //           images: ['/images/diesel-1.jpg', '/product-2.png'],
// //           details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
// //         };
        
// //         setProduct(dummyData);
// //         setSelectedFlavor(dummyData.flavors[0].name); 
        
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProductData();
// //   }, [id]);

// //   useLayoutEffect(() => {
// //     if (!loading && product) {
// //         const tl = gsap.timeline();
// //         tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// //           .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// //           .from(contentRef.current.children, {
// //             y: 50,
// //             opacity: 0,
// //             filter: "blur(5px)",
// //             duration: 0.7,
// //             stagger: 0.1,
// //             ease: "power2.out"
// //           }, "-=0.4");
// //     }
// //   }, [loading, product]);

// //   const recentlyViewed = [
// //     { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
// //     { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
// //     { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
// //     { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
// //   ];

// //   const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
// //   const increaseQuantity = () => setQuantity(prev => prev + 1);
// //   const decreaseQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

// //   const renderStars = (ratingValue) => {
// //     const stars = [];
// //     for (let i = 1; i <= 5; i++) {
// //       if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// //       else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// //       else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// //     }
// //     return stars;
// //   };

// //   const ImageGallery = ({ images }) => {
// //     const [mainImage, setMainImage] = useState(images[0]);
    
// //     return (
// //       <div className="space-y-4">
// //         <div className="relative overflow-hidden rounded-lg bg-gray-100 group">
// //           <img 
// //             src={mainImage} 
// //             alt="Main product" 
// //             className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
// //             style={{ height: '400px' }}
// //           />
// //         </div>
        
// //         <div className="grid grid-cols-4 gap-2">
// //           {images.map((img, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setMainImage(img)}
// //               className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
// //             >
// //               <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };
  
// //   if (loading) {
// //     return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// //   }

// //   if (error) {
// //     return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// //   }

// //   if (!product) {
// //     return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;
// //   }

// //   return (
// //     <div className="main-wrapper bg-gray-50">

// //       <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// //         <div className="container mx-auto px-4">
// //           <nav className="flex" aria-label="Breadcrumb">
// //             <ol className="flex items-center space-x-2 text-sm">
// //               <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// //               <li className="text-gray-500">/</li>
// //               <li className="text-gray-600 font-medium">{product.name}</li>
// //             </ol>
// //           </nav>
// //         </div>
// //       </div>

// //       <section className="py-8">
// //         <div className="container mx-auto px-4">
// //           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //             <div className="flex flex-col lg:flex-row">

// //               <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
// //                 <ImageGallery images={product.images} />
// //               </div>

// //               <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                
// //                 <div>
// //                   <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// //                   <div className="flex items-center mb-4">
// //                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// //                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// //                   </div>
// //                   <div className="space-y-1 text-gray-700 mb-4 text-sm">
// //                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// //                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-baseline mb-5">
// //                   <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// //                   <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// //                   <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// //                     {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// //                   </span>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
// //                    <div className="flex flex-wrap gap-2 mb-6">
// //                       {product.flavors.map(flavor => (
// //                         <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// //                           className={`flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// //                           {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// //                           {flavor.name}
// //                         </button>
// //                       ))}
// //                     </div>
// //                 </div>

// //                 <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
// //                   {/* <div className="flex items-center border rounded-lg overflow-hidden">
// //                     <button onClick={decreaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors disabled:opacity-50" disabled={quantity <= 1}>
// //                       <FaMinus className="text-gray-600" />
// //                     </button>
// //                     <span className="px-4 py-2 bg-white text-lg font-semibold">{quantity}</span>
// //                     <button onClick={increaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors">
// //                       <FaPlus className="text-gray-600" />
// //                     </button>
// //                   </div> */}
// //                   <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
// //                     <FaShoppingBag className="mr-3" /> Add to Cart
// //                   </button>
// //                 </div>

// //                 <div className="bg-gray-50 p-4 rounded-lg border">
// //                   <h3 className="font-semibold mb-2">Product Highlights</h3>
// //                   <ul className="list-disc pl-5 space-y-1 text-gray-700">
// //                     {product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* --- Description and Reviews Section (Filled In) --- */}
// //             <div className="border-t p-4 sm:p-6">
// //               <div className="flex border-b">
// //                 <button
// //                   className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// //                   onClick={() => setActiveTab('description')}
// //                 >
// //                   Description
// //                 </button>
// //                 <button
// //                   className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// //                   onClick={() => setActiveTab('reviews')}
// //                 >
// //                   Reviews ({product.reviewCount})
// //                 </button>
// //               </div>

// //               <div className="py-6">
// //                 {activeTab === 'description' && (
// //                   <div>
// //                     <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// //                     <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// //                   </div>
// //                 )}

// //                 {activeTab === 'reviews' && (
// //                   <div className="space-y-6">
// //                     <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// //                       <div>
// //                         <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
// //                         <div className="flex items-center">
// //                           <div className="flex mr-2">{renderStars(product.rating)}</div>
// //                           <span className="text-gray-700">{product.rating} out of 5</span>
// //                         </div>
// //                         <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
// //                       </div>
// //                       <button
// //                         onClick={() => setShowReviewForm(!showReviewForm)}
// //                         className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium"
// //                       >
// //                         <FaSearch className="mr-2" /> Write a Review
// //                       </button>
// //                     </div>

// //                     {showReviewForm && (
// //                       <div className="bg-gray-50 p-6 rounded-lg border">
// //                         <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// //                         <form className="space-y-4">
// //                           {/* Rating Input */}
// //                           <div>
// //                             <label className="block text-gray-700 mb-2 font-medium">Rating</label>
// //                             <div className="flex">
// //                               {[1, 2, 3, 4, 5].map((star) => (
// //                                 <button
// //                                   key={star} type="button"
// //                                   onMouseEnter={() => setHoverRating(star)}
// //                                   onMouseLeave={() => setHoverRating(0)}
// //                                   onClick={() => setRating(star)}
// //                                   className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125"
// //                                 >
// //                                   {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
// //                                 </button>
// //                               ))}
// //                             </div>
// //                           </div>
// //                           {/* Other Form Inputs */}
// //                           <div>
// //                             <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
// //                             <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// //                           </div>
// //                           <div>
// //                             <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
// //                             <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// //                           </div>
// //                           <div>
// //                             <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
// //                             <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// //                           </div>
// //                           <div>
// //                             <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
// //                             <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
// //                           </div>
// //                           <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold">
// //                             Submit Review
// //                           </button>
// //                         </form>
// //                       </div>
// //                     )}

// //                     {product.reviewCount === 0 && !showReviewForm && (
// //                       <div className="text-center py-10 border-t mt-6">
// //                         <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- Recently Viewed Section (Filled In) --- */}
// //       <section className="py-12 bg-white">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
// //             {recentlyViewed.map(item => (
// //               <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
// //                   <div className="bg-gray-50 p-4">
// //                     <img 
// //                       src={item.image} 
// //                       alt={item.name} 
// //                       className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
// //                     />
// //                   </div>
// //                   <div className="p-4 bg-white">
// //                     <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">
// //                       {item.name}
// //                     </h3>
// //                     <div className="flex items-center mb-2">
// //                       <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
// //                     </div>
// //                     <div className="flex items-baseline mb-3">
// //                       <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
// //                       {item.originalPrice && (
// //                         <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
// //                       )}
// //                     </div>
// //                     <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors">
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ProductDetails;

// import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import gsap from 'gsap';
// import ReactImageMagnify from 'react-image-magnify';

// const ProductDetails = () => {
//     const { id } = useParams();

//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const [quantity, setQuantity] = useState(1);
//     const [selectedFlavor, setSelectedFlavor] = useState(null);
//     const [activeTab, setActiveTab] = useState('description');
    
//     const contentRef = useRef(null);
//     const breadcrumbRef = useRef(null);
//     const galleryRef = useRef(null);
//     const [showReviewForm, setShowReviewForm] = useState(false);
//     const [rating, setRating] = useState(0);
//     const [hoverRating, setHoverRating] = useState(0);

//     const ImageGallery = ({ images }) => {
//         const [mainImage, setMainImage] = useState(images[0]);

//         return (
//             <div className="space-y-4">
//                 <div style={{ zIndex: 10 }}> 
//                     <ReactImageMagnify {...{
//                         smallImage: {
//                             alt: 'Product Image',
//                             isFluidWidth: true,
//                             src: mainImage
//                         },
//                         largeImage: {
//                             src: mainImage, 
//                             width: 1200,
//                             height: 1200
//                         },
//                         enlargedImageContainerStyle: {
//                             zIndex: "150",
//                             backgroundColor: '#fff',
//                             border: '1px solid #ddd'
//                         },
//                         enlargedImagePosition: 'beside'
//                     }} />
//                 </div>
                
//                 <div className="grid grid-cols-4 gap-2">
//                     {images.map((img, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setMainImage(img)}
//                             className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
//                         >
//                             <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     useEffect(() => {
//         const fetchProductData = async () => {
//           try {
//             setLoading(true);
//             const dummyData = {
//               id: id,
//               name: "DIESEL 26 GRAM",
//               brand: "DIESEL",
//               sku: "2030",
//               originalPrice: 100,
//               salePrice: 47.99,
//               rating: 4,
//               reviewCount: 0,
//               description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
//               flavors: [
//                 { id: '43', name: 'Cherry Limeade', color: '#FF6B6B', image: '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg' },
//                 { id: '56', name: 'Strawberry Pineapple', color: '#FFD166', image: '/adm/uploads/flavor_gallery/1176309bcaa+strawberry.jpeg' }
//               ],
//               images: ['/images/diesel-1.jpg', '/product-2.png'],
//               details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
//             };
//             setProduct(dummyData);
//             setSelectedFlavor(dummyData.flavors[0].name); 
//           } catch (err) {
//             setError(err.message);
//           } finally {
//             setLoading(false);
//           }
//         };
//         fetchProductData();
//       }, [id]);
    
//       useLayoutEffect(() => {
//         if (!loading && product) {
//             const tl = gsap.timeline();
//             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
//               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
//               .from(contentRef.current.children, {
//                 y: 50,
//                 opacity: 0,
//                 filter: "blur(5px)",
//                 duration: 0.7,
//                 stagger: 0.1,
//                 ease: "power2.out"
//               }, "-=0.4");
//         }
//       }, [loading, product]);

//     const recentlyViewed = [
//         { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
//         { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
//         { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
//         { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
//     ];

//     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
//     const increaseQuantity = () => setQuantity(prev => prev + 1);
//     const decreaseQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

//     const renderStars = (ratingValue) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
//             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//         }
//         return stars;
//     };
      
//     if (loading) {
//         return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
//     }

//     if (error) {
//         return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
//     }

//     if (!product) {
//         return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;
//     }

//     return (
//         <div className="main-wrapper bg-gray-50">
//             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
//                 <div className="container mx-auto px-4">
//                     <nav className="flex" aria-label="Breadcrumb">
//                         <ol className="flex items-center space-x-2 text-sm">
//                         <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
//                         <li className="text-gray-500">/</li>
//                         <li className="text-gray-600 font-medium">{product.name}</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>

//             <section className="py-8">
//                 <div className="container mx-auto px-4">
//                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                         <div className="flex flex-col lg:flex-row">
//                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
//                                 <ImageGallery images={product.images} />
//                             </div>
                            
//                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
//                                 <div>
//                                     <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
//                                     <div className="flex items-center mb-4">
//                                         <div className="flex mr-2">{renderStars(product.rating)}</div>
//                                         <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
//                                     </div>
//                                     <div className="space-y-1 text-gray-700 mb-4 text-sm">
//                                         <p><span className="font-semibold">Brand:</span> {product.brand}</p>
//                                         <p><span className="font-semibold">SKU:</span> {product.sku}</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-baseline mb-5">
//                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
//                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
//                                     <div className="flex flex-wrap gap-2 mb-6">
//                                         {product.flavors.map(flavor => (
//                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
//                                             className={`flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
//                                             {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
//                                             {flavor.name}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
//                                     <div className="flex items-center border rounded-lg overflow-hidden">
//                                         <button onClick={decreaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors disabled:opacity-50" disabled={quantity <= 1}>
//                                         <FaMinus className="text-gray-600" />
//                                         </button>
//                                         <span className="px-5 py-2 bg-white text-lg font-semibold">{quantity}</span>
//                                         <button onClick={increaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors">
//                                         <FaPlus className="text-gray-600" />
//                                         </button>
//                                     </div>
//                                     <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
//                                         <FaShoppingBag className="mr-3" /> Add to Cart
//                                     </button>
//                                 </div>
//                                 <div className="bg-gray-50 p-4 rounded-lg border">
//                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
//                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                                         {product.details.map((detail, index) => <li key={index}>{detail}</li>)}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="border-t p-4 sm:p-6">
//                             <div className="flex border-b">
//                                 <button
//                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
//                                     onClick={() => setActiveTab('description')}
//                                     >
//                                     Description
//                                 </button>
//                                 <button
//                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
//                                     onClick={() => setActiveTab('reviews')}
//                                     >
//                                     Reviews ({product.reviewCount})
//                                 </button>
//                             </div>

//                             <div className="py-6">
//                                 {activeTab === 'description' && (
//                                     <div>
//                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
//                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
//                                     </div>
//                                 )}
//                                 {activeTab === 'reviews' && (
//                                     <div className="space-y-6">
//                                         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//                                             <div>
//                                                 <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
//                                                 <div className="flex items-center">
//                                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
//                                                     <span className="text-gray-700">{product.rating} out of 5</span>
//                                                 </div>
//                                                 <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
//                                             </div>
//                                             <button onClick={() => setShowReviewForm(!showReviewForm)} className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium">
//                                                 <FaSearch className="mr-2" /> Write a Review
//                                             </button>
//                                         </div>

//                                         {showReviewForm && (
//                                             <div className="bg-gray-50 p-6 rounded-lg border">
//                                                 <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
//                                                 <form className="space-y-4">
//                                                     <div>
//                                                         <label className="block text-gray-700 mb-2 font-medium">Rating</label>
//                                                         <div className="flex">
//                                                             {[1, 2, 3, 4, 5].map((star) => (
//                                                                 <button key={star} type="button" onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125">
//                                                                     {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
//                                                                 </button>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                     <div>
//                                                         <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
//                                                         <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
//                                                     </div>
//                                                     <div>
//                                                         <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
//                                                         <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
//                                                     </div>
//                                                     <div>
//                                                         <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
//                                                         <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
//                                                     </div>
//                                                     <div>
//                                                         <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
//                                                         <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
//                                                     </div>
//                                                     <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold">Submit Review</button>
//                                                 </form>
//                                             </div>
//                                         )}

//                                         {product.reviewCount === 0 && !showReviewForm && (
//                                             <div className="text-center py-10 border-t mt-6">
//                                                 <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-12 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
//                         {recentlyViewed.map(item => (
//                             <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
//                                 <div className="bg-gray-50 p-4">
//                                     <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"/>
//                                 </div>
//                                 <div className="p-4 bg-white">
//                                     <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">{item.name}</h3>
//                                     <div className="flex items-center mb-2">
//                                         <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
//                                     </div>
//                                     <div className="flex items-baseline mb-3">
//                                         <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
//                                         {item.originalPrice && (
//                                             <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
//                                         )}
//                                     </div>
//                                     <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors">Add to Cart</button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import ReactImageMagnify from 'react-image-magnify';

// ## ImageGallery Component (Corrected)
// This component will not crash if the images array is empty.
const ImageGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

    if (!mainImage) {
        return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
    }

    return (
        <div className="space-y-4 ">
            <div style={{ zIndex: 10 }}>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Product Image',
                        isFluidWidth: true,
                        src: mainImage,
                        sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                        src: mainImage,
                        width: 2000,
                        height: 2000
                    },
                    enlargedImageContainerStyle: { zIndex: "150", backgroundColor: '#fff', border: '1px solid #ddd' },
                    enlargedImageContainerDimensions: { width: '150%', height: '150%' },
                    enlargedImagePosition: 'beside',
                    isHintEnabled: true,
                    // ## THEEK KIYA GAYA CODE ##
                    // Niche wali line ko ek function bana diya gaya hai jo JSX return karta hai
                    hintComponent: () => <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Hover to zoom</div>
                }} />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
                {images && images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setMainImage(img)}
                        className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
                    </button>
                ))}
            </div>
        </div>
    );
};


// ## ProductDetails Component (Complete and Corrected)
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [activeTab, setActiveTab] = useState('description');
    
    const contentRef = useRef(null);
    const breadcrumbRef = useRef(null);
    const galleryRef = useRef(null);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const dummyData = {
                    id: id,
                    name: "DIESEL 26 GRAM",
                    brand: "DIESEL",
                    sku: "2030",
                    originalPrice: 100,
                    salePrice: 47.99,
                    rating: 4,
                    reviewCount: 0,
                    description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
                    flavors: [
                        { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
                        { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
                    ],
                    images: ['/images/diesel-1.jpg', '/product-2.png'],
                    details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
                };
                setProduct(dummyData);
                // Safely set the initial flavor to prevent crashes.
                if (dummyData.flavors && dummyData.flavors.length > 0) {
                    setSelectedFlavor(dummyData.flavors[0].name);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, [id]);
    
    useLayoutEffect(() => {
        if (!loading && product) {
            const tl = gsap.timeline();
            tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
              .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
              .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
        }
    }, [loading, product]);

    const recentlyViewed = [
        { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
        { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
        { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
        { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
    ];

    const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

    const renderStars = (ratingValue) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
            else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
        return stars;
    };
    
    // Handle loading, error, and no product states first.
    if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
    if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
    if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

    // Render the page only if product data exists.
    return (
        <div className="main-wrapper bg-gray-50">
            <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm">
                            <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li className="text-gray-600 font-medium">{product.name}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
                                {/* Safely render the ImageGallery. */}
                                {product.images && product.images.length > 0 ? (
                                    <ImageGallery images={product.images} />
                                ) : (
                                    <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Images Found</div>
                                )}
                            </div>
                            
                            <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">{renderStars(product.rating)}</div>
                                    <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
                                </div>
                                <div className="space-y-1 text-gray-700 mb-4 text-sm">
                                    <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                                    <p><span className="font-semibold">SKU:</span> {product.sku}</p>
                                </div>
                                <div className="flex items-baseline mb-5">
                                    <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
                                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                    <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                        {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {/* Safely render flavors. */}
                                        {product.flavors && product.flavors.map(flavor => (
                                            <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
                                                className={`flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
                                                {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
                                                {flavor.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button onClick={decreaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors disabled:opacity-50" disabled={quantity <= 1}>
                                            <FaMinus className="text-gray-600" />
                                        </button>
                                        <span className="px-5 py-2 bg-white text-lg font-semibold">{quantity}</span>
                                        <button onClick={increaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors">
                                            <FaPlus className="text-gray-600" />
                                        </button>
                                    </div>
                                    <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
                                        <FaShoppingBag className="mr-3" /> Add to Cart
                                    </button>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg border">
                                    <h3 className="font-semibold mb-2">Product Highlights</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                        {/* Safely render details. */}
                                        {product.details && product.details.map((detail, index) => <li key={index}>{detail}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-t p-4 sm:p-6">
                            <div className="flex border-b">
                                <button
                                    className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                </button>
                                <button
                                    className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                    onClick={() => setActiveTab('reviews')}
                                >
                                    Reviews ({product.reviewCount})
                                </button>
                            </div>

                            <div className="py-6">
                                {activeTab === 'description' && (
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
                                    </div>
                                )}
                                {activeTab === 'reviews' && (
                                    <div className="space-y-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                                                <div className="flex items-center">
                                                    <div className="flex mr-2">{renderStars(product.rating)}</div>
                                                    <span className="text-gray-700">{product.rating} out of 5</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
                                            </div>
                                            <button onClick={() => setShowReviewForm(!showReviewForm)} className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium">
                                                <FaSearch className="mr-2" /> Write a Review
                                            </button>
                                        </div>

                                        {showReviewForm && (
                                            <div className="bg-gray-50 p-6 rounded-lg border">
                                                <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
                                                <form className="space-y-4">
                                                    <div>
                                                        <label className="block text-gray-700 mb-2 font-medium">Rating</label>
                                                        <div className="flex">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <button key={star} type="button" onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125">
                                                                    {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
                                                        <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
                                                        <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
                                                        <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
                                                        <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
                                                    </div>
                                                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold">Submit Review</button>
                                                </form>
                                            </div>
                                        )}

                                        {product.reviewCount === 0 && !showReviewForm && (
                                            <div className="text-center py-10 border-t mt-6">
                                                <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
                        {recentlyViewed.map(item => (
                            <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <div className="bg-gray-50 p-4">
                                    <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"/>
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">{item.name}</h3>
                                    <div className="flex items-center mb-2">
                                        <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
                                    </div>
                                    <div className="flex items-baseline mb-3">
                                        <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
                                        {item.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                                        )}
                                    </div>
                                    <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors">Add to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;