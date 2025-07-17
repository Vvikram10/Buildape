// // // // // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // // // // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch } from 'react-icons/fa';
// // // // // import { useParams } from 'react-router-dom';
// // // // // import gsap from 'gsap';
// // // // // import ReactImageMagnify from 'react-image-magnify';

// // // // // // ## ImageGallery Component (Corrected)
// // // // // // This component will not crash if the images array is empty.
// // // // // const ImageGallery = ({ images }) => {
// // // // //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// // // // //     if (!mainImage) {
// // // // //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// // // // //     }

// // // // //     return (
// // // // //         <div className="space-y-4 ">
// // // // //             <div style={{ zIndex: 10 }}>
// // // // //                 <ReactImageMagnify {...{
// // // // //                     smallImage: {
// // // // //                         alt: 'Product Image',
// // // // //                         isFluidWidth: true,
// // // // //                         src: mainImage,
// // // // //                         sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
// // // // //                     },
// // // // //                     largeImage: {
// // // // //                         src: mainImage,
// // // // //                         width: 2000,
// // // // //                         height: 2000
// // // // //                     },
// // // // //                     enlargedImageContainerStyle: { zIndex: "150", backgroundColor: '#fff', border: '1px solid #ddd' },
// // // // //                     enlargedImageContainerDimensions: { width: '150%', height: '150%' },
// // // // //                     enlargedImagePosition: 'beside',
// // // // //                     isHintEnabled: true,
// // // // //                     // ## THEEK KIYA GAYA CODE ##
// // // // //                     // Niche wali line ko ek function bana diya gaya hai jo JSX return karta hai
// // // // //                     hintComponent: () => <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>Hover to zoom</div>
// // // // //                 }} />
// // // // //             </div>

// // // // //             <div className="grid grid-cols-4 gap-2">
// // // // //                 {images && images.map((img, index) => (
// // // // //                     <button
// // // // //                         key={index}
// // // // //                         onClick={() => setMainImage(img)}
// // // // //                         className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
// // // // //                     >
// // // // //                         <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
// // // // //                     </button>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // // ## ProductDetails Component (Complete and Corrected)
// // // // // const ProductDetails = () => {
// // // // //     const { id } = useParams();
// // // // //     const [product, setProduct] = useState(null);
// // // // //     const [loading, setLoading] = useState(true);
// // // // //     const [error, setError] = useState(null);
// // // // //     const [quantity, setQuantity] = useState(1);
// // // // //     const [selectedFlavor, setSelectedFlavor] = useState(null);
// // // // //     const [activeTab, setActiveTab] = useState('description');

// // // // //     const contentRef = useRef(null);
// // // // //     const breadcrumbRef = useRef(null);
// // // // //     const galleryRef = useRef(null);
// // // // //     const [showReviewForm, setShowReviewForm] = useState(false);
// // // // //     const [rating, setRating] = useState(0);
// // // // //     const [hoverRating, setHoverRating] = useState(0);

// // // // //     useEffect(() => {
// // // // //         const fetchProductData = async () => {
// // // // //             try {
// // // // //                 setLoading(true);
// // // // //                 const dummyData = {
// // // // //                     id: id,
// // // // //                     name: "DIESEL 26 GRAM",
// // // // //                     brand: "DIESEL",
// // // // //                     sku: "2030",
// // // // //                     originalPrice: 100,
// // // // //                     salePrice: 47.99,
// // // // //                     rating: 4,
// // // // //                     reviewCount: 0,
// // // // //                     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// // // // //                     flavors: [
// // // // //                         { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
// // // // //                         { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
// // // // //                     ],
// // // // //                     images: ['/images/diesel-1.jpg', '/product-2.png'],
// // // // //                     details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
// // // // //                 };
// // // // //                 setProduct(dummyData);
// // // // //                 // Safely set the initial flavor to prevent crashes.
// // // // //                 if (dummyData.flavors && dummyData.flavors.length > 0) {
// // // // //                     setSelectedFlavor(dummyData.flavors[0].name);
// // // // //                 }
// // // // //             } catch (err) {
// // // // //                 setError(err.message);
// // // // //             } finally {
// // // // //                 setLoading(false);
// // // // //             }
// // // // //         };
// // // // //         fetchProductData();
// // // // //     }, [id]);

// // // // //     useLayoutEffect(() => {
// // // // //         if (!loading && product) {
// // // // //             const tl = gsap.timeline();
// // // // //             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// // // // //               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// // // // //               .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
// // // // //         }
// // // // //     }, [loading, product]);

// // // // //     const recentlyViewed = [
// // // // //         { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
// // // // //         { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
// // // // //         { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
// // // // //         { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
// // // // //     ];

// // // // //     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
// // // // //     const increaseQuantity = () => setQuantity(prev => prev + 1);
// // // // //     const decreaseQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

// // // // //     const renderStars = (ratingValue) => {
// // // // //         const stars = [];
// // // // //         for (let i = 1; i <= 5; i++) {
// // // // //             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// // // // //             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// // // // //             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// // // // //         }
// // // // //         return stars;
// // // // //     };

// // // // //     // Handle loading, error, and no product states first.
// // // // //     if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// // // // //     if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// // // // //     if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

// // // // //     // Render the page only if product data exists.
// // // // //     return (
// // // // //         <div className="main-wrapper bg-gray-50">
// // // // //             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// // // // //                 <div className="container mx-auto px-4">
// // // // //                     <nav className="flex" aria-label="Breadcrumb">
// // // // //                         <ol className="flex items-center space-x-2 text-sm">
// // // // //                             <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// // // // //                             <li className="text-gray-500">/</li>
// // // // //                             <li className="text-gray-600 font-medium">{product.name}</li>
// // // // //                         </ol>
// // // // //                     </nav>
// // // // //                 </div>
// // // // //             </div>

// // // // //             <section className="py-8">
// // // // //                 <div className="container mx-auto px-4">
// // // // //                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // // // //                         <div className="flex flex-col lg:flex-row">
// // // // //                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
// // // // //                                 {/* Safely render the ImageGallery. */}
// // // // //                                 {product.images && product.images.length > 0 ? (
// // // // //                                     <ImageGallery images={product.images} />
// // // // //                                 ) : (
// // // // //                                     <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Images Found</div>
// // // // //                                 )}
// // // // //                             </div>

// // // // //                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
// // // // //                                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// // // // //                                 <div className="flex items-center mb-4">
// // // // //                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // // // //                                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// // // // //                                 </div>
// // // // //                                 <div className="space-y-1 text-gray-700 mb-4 text-sm">
// // // // //                                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// // // // //                                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// // // // //                                 </div>
// // // // //                                 <div className="flex items-baseline mb-5">
// // // // //                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// // // // //                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// // // // //                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// // // // //                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// // // // //                                     </span>
// // // // //                                 </div>
// // // // //                                 <div>
// // // // //                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal cursor-pointer">{selectedFlavor}</span></h3>
// // // // //                                     <div className="flex flex-wrap gap-2 mb-6">
// // // // //                                         {/* Safely render flavors. */}
// // // // //                                         {product.flavors && product.flavors.map(flavor => (
// // // // //                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// // // // //                                                 className={` cursor-pointer flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// // // // //                                                 {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// // // // //                                                 {flavor.name}
// // // // //                                             </button>
// // // // //                                         ))}
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                                 <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
// // // // //                                     {/* <div className="flex items-center border rounded-lg overflow-hidden">
// // // // //                                         <button onClick={decreaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors disabled:opacity-50" disabled={quantity <= 1}>
// // // // //                                             <FaMinus className="text-gray-600" />
// // // // //                                         </button>
// // // // //                                         <span className="px-5 py-2 bg-white text-lg font-semibold">{quantity}</span>
// // // // //                                         <button onClick={increaseQuantity} className="bg-gray-100 hover:bg-gray-200 px-4 py-3 transition-colors">
// // // // //                                             <FaPlus className="text-gray-600" />
// // // // //                                         </button>
// // // // //                                     </div> */}
// // // // //                                     <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95 cursor-pointer">
// // // // //                                         <FaShoppingBag className="mr-3" /> Add to Cart
// // // // //                                     </button>
// // // // //                                 </div>
// // // // //                                 <div className="bg-gray-50 p-4 rounded-lg border">
// // // // //                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// // // // //                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// // // // //                                         {/* Safely render details. */}
// // // // //                                         {product.details && product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// // // // //                                     </ul>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div className="border-t p-4 sm:p-6">
// // // // //                             <div className="flex border-b">
// // // // //                                 <button
// // // // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // // // //                                     onClick={() => setActiveTab('description')}
// // // // //                                 >
// // // // //                                     Description
// // // // //                                 </button>
// // // // //                                 <button
// // // // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // // // //                                     onClick={() => setActiveTab('reviews')}
// // // // //                                 >
// // // // //                                     Reviews ({product.reviewCount})
// // // // //                                 </button>
// // // // //                             </div>

// // // // //                             <div className="py-6">
// // // // //                                 {activeTab === 'description' && (
// // // // //                                     <div>
// // // // //                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// // // // //                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// // // // //                                     </div>
// // // // //                                 )}
// // // // //                                 {activeTab === 'reviews' && (
// // // // //                                     <div className="space-y-6">
// // // // //                                         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// // // // //                                             <div>
// // // // //                                                 <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
// // // // //                                                 <div className="flex items-center">
// // // // //                                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // // // //                                                     <span className="text-gray-700">{product.rating} out of 5</span>
// // // // //                                                 </div>
// // // // //                                                 <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
// // // // //                                             </div>
// // // // //                                             <button onClick={() => setShowReviewForm(!showReviewForm)} className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium cursor-pointer">
// // // // //                                                 <FaSearch className="mr-2" /> Write a Review
// // // // //                                             </button>
// // // // //                                         </div>

// // // // //                                         {showReviewForm && (
// // // // //                                             <div className="bg-gray-50 p-6 rounded-lg border">
// // // // //                                                 <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// // // // //                                                 <form className="space-y-4">
// // // // //                                                     <div>
// // // // //                                                         <label className="block text-gray-700 mb-2 font-medium">Rating</label>
// // // // //                                                         <div className="flex">
// // // // //                                                             {[1, 2, 3, 4, 5].map((star) => (
// // // // //                                                                 <button key={star} type="button" onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125">
// // // // //                                                                     {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
// // // // //                                                                 </button>
// // // // //                                                             ))}
// // // // //                                                         </div>
// // // // //                                                     </div>
// // // // //                                                     <div>
// // // // //                                                         <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
// // // // //                                                         <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // // //                                                     </div>
// // // // //                                                     <div>
// // // // //                                                         <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
// // // // //                                                         <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // // //                                                     </div>
// // // // //                                                     <div>
// // // // //                                                         <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
// // // // //                                                         <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // // //                                                     </div>
// // // // //                                                     <div>
// // // // //                                                         <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
// // // // //                                                         <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
// // // // //                                                     </div>
// // // // //                                                     <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold cursor-pointer">Submit Review</button>
// // // // //                                                 </form>
// // // // //                                             </div>
// // // // //                                         )}

// // // // //                                         {product.reviewCount === 0 && !showReviewForm && (
// // // // //                                             <div className="text-center py-10 border-t mt-6">
// // // // //                                                 <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
// // // // //                                             </div>
// // // // //                                         )}
// // // // //                                     </div>
// // // // //                                 )}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>

// // // // //             <section className="py-12 bg-white">
// // // // //                 <div className="container mx-auto px-4">
// // // // //                     <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
// // // // //                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
// // // // //                         {recentlyViewed.map(item => (
// // // // //                             <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
// // // // //                                 <div className="bg-gray-50 p-4">
// // // // //                                     <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"/>
// // // // //                                 </div>
// // // // //                                 <div className="p-4 bg-white">
// // // // //                                     <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">{item.name}</h3>
// // // // //                                     <div className="flex items-center mb-2">
// // // // //                                         <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
// // // // //                                     </div>
// // // // //                                     <div className="flex items-baseline mb-3">
// // // // //                                         <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
// // // // //                                         {item.originalPrice && (
// // // // //                                             <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
// // // // //                                         )}
// // // // //                                     </div>
// // // // //                                     <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer">Add to Cart</button>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </section>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default ProductDetails;

// // // // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // // // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaSearch } from 'react-icons/fa';
// // // // import { useParams } from 'react-router-dom';
// // // // import gsap from 'gsap';
// // // // import ReactImageMagnify from 'react-image-magnify';

// // // // // ## Corrected ImageGallery Component ##
// // // // // This component now has the fix for the side-by-side zoom effect.
// // // // // const ImageGallery = ({ images }) => {
// // // // //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// // // // //     if (!mainImage) {
// // // // //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// // // // //     }

// // // // //     return (
// // // // //         <div className="space-y-4">
// // // // //             {/* KEY FIX: The 'relative' class on this div creates a positioning context for the zoom window. */}
// // // // //             <div className="relative">
// // // // //                 <ReactImageMagnify {...{
// // // // //                     smallImage: {
// // // // //                         alt: 'Product Image',
// // // // //                         isFluidWidth: true,
// // // // //                         src: mainImage,
// // // // //                     },
// // // // //                     largeImage: {
// // // // //                         src: mainImage,
// // // // //                         width: 1200,
// // // // //                         height: 1200,
// // // // //                     },
// // // // //                     enlargedImagePosition: 'beside',
// // // // //                     // This style positions the zoom window absolutely, so it doesn't break the layout.
// // // // //                     enlargedImageContainerStyle: {
// // // // //                         position: 'absolute',
// // // // //                         left: '105%', // Positioned to the right of the main image with a gap
// // // // //                         top: '0',
// // // // //                         zIndex: 99,
// // // // //                         border: '1px solid #e5e5e5',
// // // // //                         backgroundColor: 'white',
// // // // //                         boxShadow: '0 0 10px rgba(0,0,0,0.2)'
// // // // //                     },
// // // // //                     // This sets the zoom window to be the same size as the main image container.
// // // // //                     enlargedImageContainerDimensions: {
// // // // //                         width: '100%',
// // // // //                         height: '100%',
// // // // //                     },
// // // // //                     lensStyle: {
// // // // //                         backgroundColor: 'rgba(0, 0, 0, 0.4)',
// // // // //                     }
// // // // //                 }} />
// // // // //             </div>

// // // // //             {/* Thumbnail navigation */}
// // // // //             <div className="grid grid-cols-4 gap-2">
// // // // //                 {images && images.map((img, index) => (
// // // // //                     <button
// // // // //                         key={index}
// // // // //                         onClick={() => setMainImage(img)}
// // // // //                         className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
// // // // //                     >
// // // // //                         <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
// // // // //                     </button>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // const ImageGallery = ({ images }) => {
// // // //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// // // //     if (!mainImage) {
// // // //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// // // //     }

// // // //     return (
// // // //         <div className="space-y-4">
// // // //             <div className="relative w-full max-w-md mx-auto">
// // // //                 <ReactImageMagnify {...{
// // // //                     smallImage: {
// // // //                         alt: 'Product Image',
// // // //                         isFluidWidth: true,
// // // //                         src: mainImage,
// // // //                     },
// // // //                     largeImage: {
// // // //                         src: mainImage,
// // // //                         width: 1200,
// // // //                         height: 1200,
// // // //                     },
// // // //                     enlargedImagePosition: 'over', // lens zoom (crop part show hoga)
// // // //                     // No positive space lens here! Default is negative space lens (this is what you need)
// // // //                     lensStyle: {
// // // //                         backgroundColor: 'rgba(0, 0, 0, 0.4)',
// // // //                         borderRadius: '50%',
// // // //                         border: '2px solid white',
// // // //                         boxShadow: '0 0 10px rgba(0,0,0,0.5)',
// // // //                         width: '150px',
// // // //                         height: '150px'
// // // //                     }
// // // //                 }} />
// // // //             </div>

// // // //             <div className="grid grid-cols-4 gap-2">
// // // //                 {images && images.map((img, index) => (
// // // //                     <button
// // // //                         key={index}
// // // //                         onClick={() => setMainImage(img)}
// // // //                         className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
// // // //                     >
// // // //                         <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
// // // //                     </button>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // // ## Main ProductDetails Component ##
// // // // const ProductDetails = () => {
// // // //     const { id } = useParams();
// // // //     const [product, setProduct] = useState(null);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [error, setError] = useState(null);
// // // //     const [quantity, setQuantity] = useState(1);
// // // //     const [selectedFlavor, setSelectedFlavor] = useState(null);
// // // //     const [activeTab, setActiveTab] = useState('description');

// // // //     const contentRef = useRef(null);
// // // //     const breadcrumbRef = useRef(null);
// // // //     const galleryRef = useRef(null);
// // // //     const [showReviewForm, setShowReviewForm] = useState(false);
// // // //     const [rating, setRating] = useState(0);
// // // //     const [hoverRating, setHoverRating] = useState(0);

// // // //     useEffect(() => {
// // // //         const fetchProductData = async () => {
// // // //             try {
// // // //                 setLoading(true);
// // // //                 // NOTE: Using dummy data as in your example.
// // // //                 const dummyData = {
// // // //                     id: id,
// // // //                     name: "DIESEL 26 GRAM",
// // // //                     brand: "DIESEL",
// // // //                     sku: "2030",
// // // //                     originalPrice: 100,
// // // //                     salePrice: 47.99,
// // // //                     rating: 4,
// // // //                     reviewCount: 0,
// // // //                     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// // // //                     flavors: [
// // // //                         { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
// // // //                         { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
// // // //                     ],
// // // //                     // Make sure these image paths are correct in your project
// // // //                     images: ['/images/pr-3.png', '/product-2.png', '/adm/uploads/product/bcaa+cherry.jpeg'],
// // // //                     details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
// // // //                 };
// // // //                 setProduct(dummyData);
// // // //                 if (dummyData.flavors && dummyData.flavors.length > 0) {
// // // //                     setSelectedFlavor(dummyData.flavors[0].name);
// // // //                 }
// // // //             } catch (err) {
// // // //                 setError(err.message);
// // // //             } finally {
// // // //                 setLoading(false);
// // // //             }
// // // //         };
// // // //         fetchProductData();
// // // //     }, [id]);

// // // //     // GSAP Animations
// // // //     useLayoutEffect(() => {
// // // //         if (!loading && product) {
// // // //             const tl = gsap.timeline();
// // // //             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// // // //               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// // // //               .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
// // // //         }
// // // //     }, [loading, product]);

// // // //     const recentlyViewed = [
// // // //         { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
// // // //         { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
// // // //         { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
// // // //         { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
// // // //     ];

// // // //     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);

// // // //     const renderStars = (ratingValue) => {
// // // //         const stars = [];
// // // //         for (let i = 1; i <= 5; i++) {
// // // //             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// // // //             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// // // //             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// // // //         }
// // // //         return stars;
// // // //     };

// // // //     if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// // // //     if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// // // //     if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

// // // //     return (
// // // //         <div className="main-wrapper bg-gray-50">
// // // //             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// // // //                 <div className="container mx-auto px-4">
// // // //                     <nav aria-label="Breadcrumb">
// // // //                         <ol className="flex items-center space-x-2 text-sm">
// // // //                             <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// // // //                             <li className="text-gray-500">/</li>
// // // //                             <li className="text-gray-600 font-medium">{product.name}</li>
// // // //                         </ol>
// // // //                     </nav>
// // // //                 </div>
// // // //             </div>

// // // //             <section className="py-8">
// // // //                 <div className="container mx-auto px-4">
// // // //                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // // //                         <div className="flex flex-col lg:flex-row">
// // // //                             {/* Image Gallery Column */}
// // // //                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
// // // //                                 <ImageGallery images={product.images} />
// // // //                             </div>

// // // //                             {/* Product Info Column */}
// // // //                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
// // // //                                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// // // //                                 <div className="flex items-center mb-4">
// // // //                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // // //                                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// // // //                                 </div>
// // // //                                 <div className="space-y-1 text-gray-700 mb-4 text-sm">
// // // //                                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// // // //                                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// // // //                                 </div>
// // // //                                 <div className="flex items-baseline mb-5">
// // // //                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// // // //                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// // // //                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// // // //                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// // // //                                     </span>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
// // // //                                     <div className="flex flex-wrap gap-2 mb-6">
// // // //                                         {product.flavors && product.flavors.map(flavor => (
// // // //                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// // // //                                                 className={`cursor-pointer flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// // // //                                                 {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// // // //                                                 {flavor.name}
// // // //                                             </button>
// // // //                                         ))}
// // // //                                     </div>
// // // //                                 </div>
// // // //                                 <div className="flex items-center gap-4 mb-6">
// // // //                                     <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
// // // //                                         <FaShoppingBag className="mr-3" /> Add to Cart
// // // //                                     </button>
// // // //                                 </div>
// // // //                                 <div className="bg-gray-50 p-4 rounded-lg border">
// // // //                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// // // //                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// // // //                                         {product.details && product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// // // //                                     </ul>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>

// // // //                         {/* Description and Reviews Section */}
// // // //                         <div className="border-t p-4 sm:p-6">
// // // //                             <div className="flex border-b">
// // // //                                 <button
// // // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // // //                                     onClick={() => setActiveTab('description')}
// // // //                                 >
// // // //                                     Description
// // // //                                 </button>
// // // //                                 <button
// // // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // // //                                     onClick={() => setActiveTab('reviews')}
// // // //                                 >
// // // //                                     Reviews ({product.reviewCount})
// // // //                                 </button>
// // // //                             </div>

// // // //                             <div className="py-6">
// // // //                                 {activeTab === 'description' && (
// // // //                                     <div>
// // // //                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// // // //                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// // // //                                     </div>
// // // //                                 )}
// // // //                                 {activeTab === 'reviews' && (
// // // //                                     <div className="space-y-6">
// // // //                                         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// // // //                                             <div>
// // // //                                                 <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
// // // //                                                 <div className="flex items-center">
// // // //                                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // // //                                                     <span className="text-gray-700">{product.rating} out of 5</span>
// // // //                                                 </div>
// // // //                                                 <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
// // // //                                             </div>
// // // //                                             <button onClick={() => setShowReviewForm(!showReviewForm)} className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium">
// // // //                                                 <FaSearch className="mr-2" /> Write a Review
// // // //                                             </button>
// // // //                                         </div>

// // // //                                         {showReviewForm && (
// // // //                                             <div className="bg-gray-50 p-6 rounded-lg border">
// // // //                                                 <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// // // //                                                 <form className="space-y-4">
// // // //                                                     <div>
// // // //                                                         <label className="block text-gray-700 mb-2 font-medium">Rating</label>
// // // //                                                         <div className="flex">
// // // //                                                             {[1, 2, 3, 4, 5].map((star) => (
// // // //                                                                 <button key={star} type="button" onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125">
// // // //                                                                     {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
// // // //                                                                 </button>
// // // //                                                             ))}
// // // //                                                         </div>
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
// // // //                                                         <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
// // // //                                                         <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
// // // //                                                         <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // // //                                                     </div>
// // // //                                                     <div>
// // // //                                                         <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
// // // //                                                         <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
// // // //                                                     </div>
// // // //                                                     <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold">Submit Review</button>
// // // //                                                 </form>
// // // //                                             </div>
// // // //                                         )}

// // // //                                         {product.reviewCount === 0 && !showReviewForm && (
// // // //                                             <div className="text-center py-10 border-t mt-6">
// // // //                                                 <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
// // // //                                             </div>
// // // //                                         )}
// // // //                                     </div>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </section>

// // // //             {/* Recently Viewed Section */}
// // // //             <section className="py-12 bg-white">
// // // //                 <div className="container mx-auto px-4">
// // // //                     <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
// // // //                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
// // // //                         {recentlyViewed.map(item => (
// // // //                             <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
// // // //                                 <div className="bg-gray-50 p-4">
// // // //                                     <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"/>
// // // //                                 </div>
// // // //                                 <div className="p-4 bg-white">
// // // //                                     <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">{item.name}</h3>
// // // //                                     <div className="flex items-center mb-2">
// // // //                                         <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
// // // //                                     </div>
// // // //                                     <div className="flex items-baseline mb-3">
// // // //                                         <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
// // // //                                         {item.originalPrice && (
// // // //                                             <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
// // // //                                         )}
// // // //                                     </div>
// // // //                                     <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors">Add to Cart</button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //             </section>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ProductDetails;

// // // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaSearch } from 'react-icons/fa';
// // // import { useParams } from 'react-router-dom';
// // // import gsap from 'gsap';

// // // // ## ImageGallery Component (Zoom Removed) ##
// // // // This component now displays images without the zoom feature.
// // // const ImageGallery = ({ images }) => {
// // //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// // //     if (!mainImage) {
// // //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// // //     }

// // //     return (
// // //         <div className="space-y-4">
// // //             {/* Main image display using a standard img tag */}
// // //             <div className="relative w-full max-w-md mx-auto">
// // //                 <img
// // //                     src={mainImage}
// // //                     alt="Product Image"
// // //                     className="w-full h-auto object-cover rounded-lg shadow-md"
// // //                 />
// // //             </div>

// // //             {/* Thumbnail navigation */}
// // //             <div className="grid grid-cols-4 gap-2">
// // //                 {images && images.map((img, index) => (
// // //                     <button
// // //                         key={index}
// // //                         onClick={() => setMainImage(img)}
// // //                         className={`rounded border-2 transition-all ${mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'}`}
// // //                     >
// // //                         <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-cover rounded-sm" />
// // //                     </button>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // ## Main ProductDetails Component ##
// // // const ProductDetails = () => {
// // //     const { id } = useParams();
// // //     const [product, setProduct] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [quantity, setQuantity] = useState(1);
// // //     const [selectedFlavor, setSelectedFlavor] = useState(null);
// // //     const [activeTab, setActiveTab] = useState('description');

// // //     const contentRef = useRef(null);
// // //     const breadcrumbRef = useRef(null);
// // //     const galleryRef = useRef(null);
// // //     const [showReviewForm, setShowReviewForm] = useState(false);
// // //     const [rating, setRating] = useState(0);
// // //     const [hoverRating, setHoverRating] = useState(0);

// // //     useEffect(() => {
// // //         const fetchProductData = async () => {
// // //             try {
// // //                 setLoading(true);
// // //                 // NOTE: Using dummy data as in your example.
// // //                 const dummyData = {
// // //                     id: id,
// // //                     name: "DIESEL 26 GRAM",
// // //                     brand: "DIESEL",
// // //                     sku: "2030",
// // //                     originalPrice: 100,
// // //                     salePrice: 47.99,
// // //                     rating: 4,
// // //                     reviewCount: 0,
// // //                     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// // //                     flavors: [
// // //                         { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
// // //                         { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
// // //                     ],
// // //                     // Make sure these image paths are correct in your project
// // //                     images: ['/images/pr-3.png', '/product-2.png', '/adm/uploads/product/bcaa+cherry.jpeg'],
// // //                     details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"]
// // //                 };
// // //                 setProduct(dummyData);
// // //                 if (dummyData.flavors && dummyData.flavors.length > 0) {
// // //                     setSelectedFlavor(dummyData.flavors[0].name);
// // //                 }
// // //             } catch (err) {
// // //                 setError(err.message);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //         fetchProductData();
// // //     }, [id]);

// // //     // GSAP Animations
// // //     useLayoutEffect(() => {
// // //         if (!loading && product) {
// // //             const tl = gsap.timeline();
// // //             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// // //               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// // //               .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
// // //         }
// // //     }, [loading, product]);

// // //     const recentlyViewed = [
// // //         { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp", rating: 4.5 },
// // //         { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg", rating: 4 },
// // //         { id: 53, name: "Product C", price: 29.99, originalPrice: 39.99, image: "/product-2.png", rating: 5 },
// // //         { id: 54, name: "Product D", price: 19.99, originalPrice: 24.99, image: "/images/diesel-1.jpg", rating: 3.5 },
// // //     ];

// // //     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);

// // //     const renderStars = (ratingValue) => {
// // //         const stars = [];
// // //         for (let i = 1; i <= 5; i++) {
// // //             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// // //             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// // //             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// // //         }
// // //         return stars;
// // //     };

// // //     if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// // //     if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// // //     if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

// // //     return (
// // //         <div className="main-wrapper bg-gray-50">
// // //             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// // //                 <div className="container mx-auto px-4">
// // //                     <nav aria-label="Breadcrumb">
// // //                         <ol className="flex items-center space-x-2 text-sm">
// // //                             <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// // //                             <li className="text-gray-500">/</li>
// // //                             <li className="text-gray-600 font-medium">{product.name}</li>
// // //                         </ol>
// // //                     </nav>
// // //                 </div>
// // //             </div>

// // //             <section className="py-8">
// // //                 <div className="container mx-auto px-4">
// // //                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // //                         <div className="flex flex-col lg:flex-row">
// // //                             {/* Image Gallery Column */}
// // //                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6">
// // //                                 <ImageGallery images={product.images} />
// // //                             </div>

// // //                             {/* Product Info Column */}
// // //                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
// // //                                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// // //                                 <div className="flex items-center mb-4">
// // //                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // //                                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// // //                                 </div>
// // //                                 <div className="space-y-1 text-gray-700 mb-4 text-sm">
// // //                                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// // //                                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// // //                                 </div>
// // //                                 <div className="flex items-baseline mb-5">
// // //                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// // //                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// // //                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// // //                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// // //                                     </span>
// // //                                 </div>
// // //                                 <div>
// // //                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
// // //                                     <div className="flex flex-wrap gap-2 mb-6">
// // //                                         {product.flavors && product.flavors.map(flavor => (
// // //                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// // //                                                 className={`cursor-pointer flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// // //                                                 {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// // //                                                 {flavor.name}
// // //                                             </button>
// // //                                         ))}
// // //                                     </div>
// // //                                 </div>
// // //                                 <div className="flex items-center gap-4 mb-6">
// // //                                     <button onClick={addToCart} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
// // //                                         <FaShoppingBag className="mr-3" /> Add to Cart
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="bg-gray-50 p-4 rounded-lg border">
// // //                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// // //                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// // //                                         {product.details && product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// // //                                     </ul>
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         {/* Description and Reviews Section */}
// // //                         <div className="border-t p-4 sm:p-6">
// // //                             <div className="flex border-b">
// // //                                 <button
// // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // //                                     onClick={() => setActiveTab('description')}
// // //                                 >
// // //                                     Description
// // //                                 </button>
// // //                                 <button
// // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // //                                     onClick={() => setActiveTab('reviews')}
// // //                                 >
// // //                                     Reviews ({product.reviewCount})
// // //                                 </button>
// // //                             </div>

// // //                             <div className="py-6">
// // //                                 {activeTab === 'description' && (
// // //                                     <div>
// // //                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// // //                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// // //                                     </div>
// // //                                 )}
// // //                                 {activeTab === 'reviews' && (
// // //                                     <div className="space-y-6">
// // //                                         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
// // //                                             <div>
// // //                                                 <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
// // //                                                 <div className="flex items-center">
// // //                                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // //                                                     <span className="text-gray-700">{product.rating} out of 5</span>
// // //                                                 </div>
// // //                                                 <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
// // //                                             </div>
// // //                                             <button onClick={() => setShowReviewForm(!showReviewForm)} className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors font-medium">
// // //                                                 <FaSearch className="mr-2" /> Write a Review
// // //                                             </button>
// // //                                         </div>

// // //                                         {showReviewForm && (
// // //                                             <div className="bg-gray-50 p-6 rounded-lg border">
// // //                                                 <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// // //                                                 <form className="space-y-4">
// // //                                                     <div>
// // //                                                         <label className="block text-gray-700 mb-2 font-medium">Rating</label>
// // //                                                         <div className="flex">
// // //                                                             {[1, 2, 3, 4, 5].map((star) => (
// // //                                                                 <button key={star} type="button" onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(star)} className="text-3xl mr-1 text-yellow-400 transition-transform hover:scale-125">
// // //                                                                     {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
// // //                                                                 </button>
// // //                                                             ))}
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Name</label>
// // //                                                         <input type="text" id="name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email</label>
// // //                                                         <input type="email" id="email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <label htmlFor="title" className="block text-gray-700 mb-1 font-medium">Review Title</label>
// // //                                                         <input type="text" id="title" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
// // //                                                     </div>
// // //                                                     <div>
// // //                                                         <label htmlFor="review" className="block text-gray-700 mb-1 font-medium">Your Review</label>
// // //                                                         <textarea id="review" rows="4" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
// // //                                                     </div>
// // //                                                     <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors font-semibold">Submit Review</button>
// // //                                                 </form>
// // //                                             </div>
// // //                                         )}

// // //                                         {product.reviewCount === 0 && !showReviewForm && (
// // //                                             <div className="text-center py-10 border-t mt-6">
// // //                                                 <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
// // //                                             </div>
// // //                                         )}
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>

// // //             {/* Recently Viewed Section */}
// // //             <section className="py-12 bg-white">
// // //                 <div className="container mx-auto px-4">
// // //                     <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Recently Viewed</h2>
// // //                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
// // //                         {recentlyViewed.map(item => (
// // //                             <div key={item.id} className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
// // //                                 <div className="bg-gray-50 p-4">
// // //                                     <img src={item.image} alt={item.name} className="w-full h-40 sm:h-48 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"/>
// // //                                 </div>
// // //                                 <div className="p-4 bg-white">
// // //                                     <h3 className="font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors truncate">{item.name}</h3>
// // //                                     <div className="flex items-center mb-2">
// // //                                         <div className="flex mr-1 text-sm">{renderStars(item.rating)}</div>
// // //                                     </div>
// // //                                     <div className="flex items-baseline mb-3">
// // //                                         <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
// // //                                         {item.originalPrice && (
// // //                                             <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
// // //                                         )}
// // //                                     </div>
// // //                                     <button className="w-full bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors">Add to Cart</button>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default ProductDetails;

// // // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag } from 'react-icons/fa';
// // // import { useParams } from 'react-router-dom';
// // // import gsap from 'gsap';

// // // // Updated ImageGallery Component
// // // const ImageGallery = ({ images }) => {
// // //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// // //     if (!mainImage) {
// // //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// // //     }

// // //     return (
// // //         <div className="space-y-4">
// // //             <div className="relative w-full mx-auto aspect-square md:aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg">
// // //                 <img
// // //                     src={mainImage}
// // //                     alt="Product"
// // //                     className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
// // //                 />
// // //                 <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
// // //                     SALE
// // //                 </div>
// // //             </div>

// // //             <div className="grid grid-cols-4 gap-3 px-2">
// // //                 {images && images.map((img, index) => (
// // //                     <button
// // //                         key={index}
// // //                         onClick={() => setMainImage(img)}
// // //                         className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${mainImage === img ? 'border-blue-500 ring-2 ring-blue-300 scale-105' : 'border-gray-200 hover:border-gray-300'}`}
// // //                     >
// // //                         <img
// // //                             src={img}
// // //                             alt={`Thumbnail ${index + 1}`}
// // //                             className="w-full h-20 md:h-24 object-contain bg-white p-1"
// // //                         />
// // //                         {mainImage === img && (
// // //                             <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
// // //                         )}
// // //                     </button>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // const ProductDetails = () => {
// // //     const { id } = useParams();
// // //     const [product, setProduct] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [quantity, setQuantity] = useState(1);
// // //     const [selectedFlavor, setSelectedFlavor] = useState(null);
// // //     const [activeTab, setActiveTab] = useState('description');
// // //     const [newReviewText, setNewReviewText] = useState('');
// // //     const [newReviewerName, setNewReviewerName] = useState('');
// // //     const [newReviewRating, setNewReviewRating] = useState(0);

// // //     const contentRef = useRef(null);
// // //     const breadcrumbRef = useRef(null);
// // //     const galleryRef = useRef(null);

// // //     useEffect(() => {
// // //         const fetchProductData = async () => {
// // //             try {
// // //                 setLoading(true);
// // //                 const dummyData = {
// // //                     id: id,
// // //                     name: "DIESEL 26 GRAM",
// // //                     brand: "DIESEL",
// // //                     sku: "2030",
// // //                     originalPrice: 100,
// // //                     salePrice: 47.99,
// // //                     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// // //                     flavors: [
// // //                         { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
// // //                         { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
// // //                     ],
// // //                     images: ['/images/pr-3.png', '/product-2.png', '/adm/uploads/product/bcaa+cherry.jpeg'],
// // //                     details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"],
// // //                     reviews: [
// // //                         { id: 1, author: "Aman Sharma", rating: 5, text: "बहुत अच्छा प्रोडक्ट है! चेरी लाइमेड फ्लेवर शानदार है।", date: "2025-07-10" },
// // //                         { id: 2, author: "Priya Singh", rating: 4, text: "रिकवरी में मदद करता है। स्ट्रॉबेरी पाइनएप्पल थोड़ा मीठा है।", date: "2025-07-12" }
// // //                     ]
// // //                 };

// // //                 const totalRating = dummyData.reviews.reduce((acc, review) => acc + review.rating, 0);
// // //                 const reviewCount = dummyData.reviews.length;
// // //                 const avgRating = reviewCount > 0 ? totalRating / reviewCount : 0;

// // //                 setProduct({
// // //                     ...dummyData,
// // //                     rating: avgRating,
// // //                     reviewCount: reviewCount
// // //                 });

// // //                 if (dummyData.flavors && dummyData.flavors.length > 0) {
// // //                     setSelectedFlavor(dummyData.flavors[0].name);
// // //                 }
// // //             } catch (err) {
// // //                 setError(err.message);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //         fetchProductData();
// // //     }, [id]);

// // //     useLayoutEffect(() => {
// // //         if (!loading && product) {
// // //             const tl = gsap.timeline();
// // //             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// // //               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// // //               .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
// // //         }
// // //     }, [loading, product]);

// // //     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);

// // //     const handleReviewSubmit = (e) => {
// // //         e.preventDefault();
// // //         if (!newReviewText || !newReviewerName || newReviewRating === 0) {
// // //             alert("कृपया सभी फ़ील्ड भरें और रेटिंग दें।");
// // //             return;
// // //         }

// // //         const newReview = {
// // //             id: Date.now(),
// // //             author: newReviewerName,
// // //             rating: newReviewRating,
// // //             text: newReviewText,
// // //             date: new Date().toISOString().split('T')[0]
// // //         };

// // //         const updatedReviews = [...product.reviews, newReview];
// // //         const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
// // //         const reviewCount = updatedReviews.length;
// // //         const avgRating = reviewCount > 0 ? totalRating / reviewCount : 0;

// // //         setProduct(prev => ({
// // //             ...prev,
// // //             reviews: updatedReviews,
// // //             rating: avgRating,
// // //             reviewCount: reviewCount
// // //         }));

// // //         setNewReviewText('');
// // //         setNewReviewerName('');
// // //         setNewReviewRating(0);
// // //     };

// // //     const renderStars = (ratingValue) => {
// // //         const stars = [];
// // //         for (let i = 1; i <= 5; i++) {
// // //             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// // //             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// // //             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// // //         }
// // //         return stars;
// // //     };

// // //     if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// // //     if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// // //     if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

// // //     return (
// // //         <div className="main-wrapper bg-gray-50">
// // //             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// // //                 <div className="container mx-auto px-4">
// // //                     <nav aria-label="Breadcrumb">
// // //                         <ol className="flex items-center space-x-2 text-sm">
// // //                             <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// // //                             <li className="text-gray-500">/</li>
// // //                             <li className="text-gray-600 font-medium">{product.name}</li>
// // //                         </ol>
// // //                     </nav>
// // //                 </div>
// // //             </div>

// // //             <section className="py-8">
// // //                 <div className="container mx-auto px-4">
// // //                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// // //                         <div className="flex flex-col lg:flex-row">
// // //                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
// // //                                 <ImageGallery images={product.images} />
// // //                             </div>

// // //                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
// // //                                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// // //                                 <div className="flex items-center mb-4">
// // //                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// // //                                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// // //                                 </div>
// // //                                 <div className="space-y-1 text-gray-700 mb-4 text-sm">
// // //                                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// // //                                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// // //                                 </div>
// // //                                 <div className="flex items-baseline mb-5">
// // //                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// // //                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// // //                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// // //                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// // //                                     </span>
// // //                                 </div>

// // //                                 <div>
// // //                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
// // //                                     <div className="flex flex-wrap gap-2 mb-6">
// // //                                         {product.flavors && product.flavors.map(flavor => (
// // //                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// // //                                                 className={`cursor-pointer flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// // //                                                 {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// // //                                                 {flavor.name}
// // //                                             </button>
// // //                                         ))}
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="flex items-center gap-4 mt-6">
// // //                                     <div className="flex items-center border border-gray-300 rounded-lg">
// // //                                         <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors" aria-label="Decrease quantity">-</button>
// // //                                         <span className="px-5 py-3 font-semibold text-gray-900">{quantity}</span>
// // //                                         <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-r-lg transition-colors" aria-label="Increase quantity">+</button>
// // //                                     </div>
// // //                                     <button onClick={addToCart} className="flex-grow bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
// // //                                         <FaShoppingBag className="mr-3" /> Add to Cart
// // //                                     </button>
// // //                                 </div>

// // //                                 <div className="bg-gray-50 p-4 rounded-lg border mt-6">
// // //                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// // //                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// // //                                         {product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// // //                                     </ul>
// // //                                 </div>
// // //                             </div>
// // //                         </div>

// // //                         <div className="border-t p-4 sm:p-6">
// // //                             <div className="flex border-b">
// // //                                 <button
// // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // //                                     onClick={() => setActiveTab('description')}
// // //                                 >
// // //                                     Description
// // //                                 </button>
// // //                                 <button
// // //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// // //                                     onClick={() => setActiveTab('reviews')}
// // //                                 >
// // //                                     Reviews ({product.reviewCount})
// // //                                 </button>
// // //                             </div>

// // //                             <div className="py-6">
// // //                                 {activeTab === 'description' && (
// // //                                     <div>
// // //                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// // //                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// // //                                     </div>
// // //                                 )}

// // //                                 {activeTab === 'reviews' && (
// // //                                     <div className="space-y-8">
// // //                                         <h3 className="text-xl font-semibold">Customer Reviews</h3>
// // //                                         <div className="space-y-6">
// // //                                             {product.reviews.length > 0 ? (
// // //                                                 product.reviews.map(review => (
// // //                                                     <div key={review.id} className="border-b pb-4 last:border-b-0">
// // //                                                         <div className="flex items-center mb-2">
// // //                                                             <div className="flex mr-2">{renderStars(review.rating)}</div>
// // //                                                             <span className="font-bold text-gray-800">{review.author}</span>
// // //                                                             <span className="text-gray-500 text-sm ml-auto">{new Date(review.date).toLocaleDateString()}</span>
// // //                                                         </div>
// // //                                                         <p className="text-gray-700">{review.text}</p>
// // //                                                     </div>
// // //                                                 ))
// // //                                             ) : (
// // //                                                 <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
// // //                                             )}
// // //                                         </div>

// // //                                         <div className="mt-8 pt-6 border-t">
// // //                                             <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// // //                                             <form onSubmit={handleReviewSubmit} className="space-y-4 max-w-lg">
// // //                                                 <div>
// // //                                                     <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
// // //                                                     <div className="flex items-center gap-1">
// // //                                                         {[1, 2, 3, 4, 5].map((star) => (
// // //                                                             <button type="button" key={star} onClick={() => setNewReviewRating(star)} className="text-2xl transition-transform hover:scale-125">
// // //                                                                 {star <= newReviewRating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300 hover:text-yellow-400" />}
// // //                                                             </button>
// // //                                                         ))}
// // //                                                     </div>
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">Name</label>
// // //                                                     <input type="text" id="reviewerName" value={newReviewerName} onChange={(e) => setNewReviewerName(e.target.value)} className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Your Name" required />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">Review</label>
// // //                                                     <textarea id="reviewText" rows="4" value={newReviewText} onChange={(e) => setNewReviewText(e.target.value)} className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Share your thoughts..." required></textarea>
// // //                                                 </div>
// // //                                                 <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
// // //                                                     Submit Review
// // //                                                 </button>
// // //                                             </form>
// // //                                         </div>
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default ProductDetails;

// // import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// // import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag } from 'react-icons/fa';
// // import { useParams } from 'react-router-dom';
// // import gsap from 'gsap';

// // // ImageMagnifier Component
// // const ImageMagnifier = ({
// //   src,
// //   width = '100%',
// //   height = 400,  // Fixed height
// //   magnifierHeight = 150,
// //   magnifierWidth = 150,
// //   zoomLevel = 2
// // }) => {
// //   const [[x, y], setXY] = useState([0, 0]);
// //   const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
// //   const [showMagnifier, setShowMagnifier] = useState(false);
// //   const imgRef = useRef(null);

// //   return (
// //     <div className="relative" style={{ height: `${height}px`, width: width }}>
// //       <img
// //         ref={imgRef}
// //         src={src}
// //         style={{ height: '100%', width: '100%', objectFit: 'contain' }}
// //         onMouseEnter={(e) => {
// //           const elem = imgRef.current;
// //           setSize([elem.offsetWidth, elem.offsetHeight]);
// //           setShowMagnifier(true);
// //         }}
// //         onMouseMove={(e) => {
// //           const elem = imgRef.current;
// //           const { top, left } = elem.getBoundingClientRect();

// //           // Calculate cursor position relative to the image
// //           const x = e.pageX - left - window.pageXOffset;
// //           const y = e.pageY - top - window.pageYOffset;

// //           setXY([x, y]);
// //         }}
// //         onMouseLeave={() => {
// //           setShowMagnifier(false);
// //         }}
// //         alt="Product"
// //         className="w-full h-full object-contain rounded-lg shadow-md cursor-crosshair bg-white"
// //       />

// //       {showMagnifier && (
// //         <div
// //           className="absolute pointer-events-none border-2 border-gray-300 rounded-full bg-white bg-opacity-50"
// //           style={{
// //             height: `${magnifierHeight}px`,
// //             width: `${magnifierWidth}px`,
// //             left: `${x - magnifierWidth / 2}px`,
// //             top: `${y - magnifierHeight / 2}px`,
// //             backgroundImage: `url('${src}')`,
// //             backgroundRepeat: 'no-repeat',
// //             backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
// //             backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
// //             backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
// //             zIndex: 10,
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // // Updated ImageGallery Component with Magnifier
// // const ImageGallery = ({ images }) => {
// //     const [mainImage, setMainImage] = useState(images && images.length > 0 ? images[0] : null);

// //     if (!mainImage) {
// //         return <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">No Image Available</div>;
// //     }

// //     return (
// //         <div className="space-y-4">
// //             <div className="relative w-full mx-auto aspect-square md:aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-lg">
// //                 <ImageMagnifier
// //                     src={mainImage}
// //                     height="100%"
// //                     magnifierHeight={150}
// //                     magnifierWidth={150}
// //                     zoomLevel={2}
// //                 />
// //                 <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
// //                     SALE
// //                 </div>
// //             </div>

// //             <div className="grid grid-cols-4 gap-3 px-2">
// //                 {images && images.map((img, index) => (
// //                     <button
// //                         key={index}
// //                         onClick={() => setMainImage(img)}
// //                         className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${mainImage === img ? 'border-blue-500 ring-2 ring-blue-300 scale-105' : 'border-gray-200 hover:border-gray-300'}`}
// //                     >
// //                         <img
// //                             src={img}
// //                             alt={`Thumbnail ${index + 1}`}
// //                             className="w-full h-20 md:h-24 object-contain bg-white p-1"
// //                         />
// //                         {mainImage === img && (
// //                             <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
// //                         )}
// //                     </button>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // const ProductDetails = () => {
// //     const { id } = useParams();
// //     const [product, setProduct] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [quantity, setQuantity] = useState(1);
// //     const [selectedFlavor, setSelectedFlavor] = useState(null);
// //     const [activeTab, setActiveTab] = useState('description');
// //     const [newReviewText, setNewReviewText] = useState('');
// //     const [newReviewerName, setNewReviewerName] = useState('');
// //     const [newReviewRating, setNewReviewRating] = useState(0);

// //     const contentRef = useRef(null);
// //     const breadcrumbRef = useRef(null);
// //     const galleryRef = useRef(null);

// //     useEffect(() => {
// //         const fetchProductData = async () => {
// //             try {
// //                 setLoading(true);
// //                 const dummyData = {
// //                     id: id,
// //                     name: "DIESEL 26 GRAM",
// //                     brand: "DIESEL",
// //                     sku: "2030",
// //                     originalPrice: 100,
// //                     salePrice: 47.99,
// //                     description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
// //                     flavors: [
// //                         { id: '43', name: 'Cherry Limeade', color: '#FF6B6B' },
// //                         { id: '56', name: 'Strawberry Pineapple', color: '#FFD166' }
// //                     ],
// //                     images: ['/images/pr-3.png', '/product-2.png', '/adm/uploads/product/bcaa+cherry.jpeg'],
// //                     details: ["30 servings per container", "BCAA + EAA formula", "Includes coconut water powder", "Promotes hydration and recovery"],
// //                     reviews: [
// //                         { id: 1, author: "Aman Sharma", rating: 5, text: "बहुत अच्छा प्रोडक्ट है! चेरी लाइमेड फ्लेवर शानदार है।", date: "2025-07-10" },
// //                         { id: 2, author: "Priya Singh", rating: 4, text: "रिकवरी में मदद करता है। स्ट्रॉबेरी पाइनएप्पल थोड़ा मीठा है।", date: "2025-07-12" }
// //                     ]
// //                 };

// //                 const totalRating = dummyData.reviews.reduce((acc, review) => acc + review.rating, 0);
// //                 const reviewCount = dummyData.reviews.length;
// //                 const avgRating = reviewCount > 0 ? totalRating / reviewCount : 0;

// //                 setProduct({
// //                     ...dummyData,
// //                     rating: avgRating,
// //                     reviewCount: reviewCount
// //                 });

// //                 if (dummyData.flavors && dummyData.flavors.length > 0) {
// //                     setSelectedFlavor(dummyData.flavors[0].name);
// //                 }
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         fetchProductData();
// //     }, [id]);

// //     useLayoutEffect(() => {
// //         if (!loading && product) {
// //             const tl = gsap.timeline();
// //             tl.from(breadcrumbRef.current, { y: -30, opacity: 0, duration: 0.5, ease: 'power2.out' })
// //               .from(galleryRef.current, { x: -50, opacity: 0, duration: 0.6, ease: 'power2.out' }, "-=0.2")
// //               .from(contentRef.current.children, { y: 50, opacity: 0, filter: "blur(5px)", duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.4");
// //         }
// //     }, [loading, product]);

// //     const addToCart = () => console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);

// //     const handleReviewSubmit = (e) => {
// //         e.preventDefault();
// //         if (!newReviewText || !newReviewerName || newReviewRating === 0) {
// //             alert("कृपया सभी फ़ील्ड भरें और रेटिंग दें।");
// //             return;
// //         }

// //         const newReview = {
// //             id: Date.now(),
// //             author: newReviewerName,
// //             rating: newReviewRating,
// //             text: newReviewText,
// //             date: new Date().toISOString().split('T')[0]
// //         };

// //         const updatedReviews = [...product.reviews, newReview];
// //         const totalRating = updatedReviews.reduce((acc, review) => acc + review.rating, 0);
// //         const reviewCount = updatedReviews.length;
// //         const avgRating = reviewCount > 0 ? totalRating / reviewCount : 0;

// //         setProduct(prev => ({
// //             ...prev,
// //             reviews: updatedReviews,
// //             rating: avgRating,
// //             reviewCount: reviewCount
// //         }));

// //         setNewReviewText('');
// //         setNewReviewerName('');
// //         setNewReviewRating(0);
// //     };

// //     const renderStars = (ratingValue) => {
// //         const stars = [];
// //         for (let i = 1; i <= 5; i++) {
// //             if (i <= Math.floor(ratingValue)) stars.push(<FaStar key={i} className="text-yellow-400" />);
// //             else if (i === Math.ceil(ratingValue) && !Number.isInteger(ratingValue)) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
// //             else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
// //         }
// //         return stars;
// //     };

// //     if (loading) return <div className="flex justify-center items-center h-screen"><p>Loading Product...</p></div>;
// //     if (error) return <div className="flex justify-center items-center h-screen"><p className="text-red-500">Error: {error}</p></div>;
// //     if (!product) return <div className="flex justify-center items-center h-screen"><p>Product not found.</p></div>;

// //     return (
// //         <div className="main-wrapper bg-gray-50">
// //             <div ref={breadcrumbRef} className="py-4 bg-white shadow-sm">
// //                 <div className="container mx-auto px-4">
// //                     <nav aria-label="Breadcrumb">
// //                         <ol className="flex items-center space-x-2 text-sm">
// //                             <li><a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
// //                             <li className="text-gray-500">/</li>
// //                             <li className="text-gray-600 font-medium">{product.name}</li>
// //                         </ol>
// //                     </nav>
// //                 </div>
// //             </div>

// //             <section className="py-8">
// //                 <div className="container mx-auto px-4">
// //                     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //                         <div className="flex flex-col lg:flex-row">
// //                             <div ref={galleryRef} className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
// //                                 <ImageGallery images={product.images} />
// //                             </div>

// //                             <div ref={contentRef} className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
// //                                 <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
// //                                 <div className="flex items-center mb-4">
// //                                     <div className="flex mr-2">{renderStars(product.rating)}</div>
// //                                     <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
// //                                 </div>
// //                                 <div className="space-y-1 text-gray-700 mb-4 text-sm">
// //                                     <p><span className="font-semibold">Brand:</span> {product.brand}</p>
// //                                     <p><span className="font-semibold">SKU:</span> {product.sku}</p>
// //                                 </div>
// //                                 <div className="flex items-baseline mb-5">
// //                                     <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
// //                                     <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
// //                                     <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
// //                                         {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
// //                                     </span>
// //                                 </div>

// //                                 <div>
// //                                     <h3 className="text-md font-semibold mb-3">Flavor: <span className="font-normal">{selectedFlavor}</span></h3>
// //                                     <div className="flex flex-wrap gap-2 mb-6">
// //                                         {product.flavors && product.flavors.map(flavor => (
// //                                             <button key={flavor.id} onClick={() => setSelectedFlavor(flavor.name)}
// //                                                 className={`cursor-pointer flex items-center px-3 py-2 rounded-full border-2 transition-all ${selectedFlavor === flavor.name ? 'border-blue-500 bg-blue-50 scale-105' : 'border-gray-300'}`}>
// //                                                 {flavor.color && <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: flavor.color }}></span>}
// //                                                 {flavor.name}
// //                                             </button>
// //                                         ))}
// //                                     </div>
// //                                 </div>

// //                                 <div className="flex items-center gap-4 mt-6">
// //                                    <div className="flex items-center border border-gray-300 rounded-lg">
// //   <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors" aria-label="Decrease quantity">-</button>
// //   <span className="px-5 py-3 font-semibold text-gray-900">{quantity}</span>
// //   <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-r-lg transition-colors" aria-label="Increase quantity">+</button>
// // </div>
// //                                     <button onClick={addToCart} className="flex-grow bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
// //                                         <FaShoppingBag className="mr-3" /> Add to Cart
// //                                     </button>
// //                                 </div>

// //                                 <div className="bg-gray-50 p-4 rounded-lg border mt-6">
// //                                     <h3 className="font-semibold mb-2">Product Highlights</h3>
// //                                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// //                                         {product.details.map((detail, index) => <li key={index}>{detail}</li>)}
// //                                     </ul>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div className="border-t p-4 sm:p-6">
// //                             <div className="flex border-b">
// //                                 <button
// //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// //                                     onClick={() => setActiveTab('description')}
// //                                 >
// //                                     Description
// //                                 </button>
// //                                 <button
// //                                     className={`px-4 py-2 font-medium transition-colors ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
// //                                     onClick={() => setActiveTab('reviews')}
// //                                 >
// //                                     Reviews ({product.reviewCount})
// //                                 </button>
// //                             </div>

// //                             <div className="py-6">
// //                                 {activeTab === 'description' && (
// //                                     <div>
// //                                         <h3 className="text-xl font-semibold mb-4">Product Details</h3>
// //                                         <p className="text-gray-700 whitespace-pre-line leading-relaxed">{product.description}</p>
// //                                     </div>
// //                                 )}

// //                                 {activeTab === 'reviews' && (
// //                                     <div className="space-y-8">
// //                                         <h3 className="text-xl font-semibold">Customer Reviews</h3>
// //                                         <div className="space-y-6">
// //                                             {product.reviews.length > 0 ? (
// //                                                 product.reviews.map(review => (
// //                                                     <div key={review.id} className="border-b pb-4 last:border-b-0">
// //                                                         <div className="flex items-center mb-2">
// //                                                             <div className="flex mr-2">{renderStars(review.rating)}</div>
// //                                                             <span className="font-bold text-gray-800">{review.author}</span>
// //                                                             <span className="text-gray-500 text-sm ml-auto">{new Date(review.date).toLocaleDateString()}</span>
// //                                                         </div>
// //                                                         <p className="text-gray-700">{review.text}</p>
// //                                                     </div>
// //                                                 ))
// //                                             ) : (
// //                                                 <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
// //                                             )}
// //                                         </div>

// //                                         <div className="mt-8 pt-6 border-t">
// //                                             <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
// //                                             <form onSubmit={handleReviewSubmit} className="space-y-4 max-w-lg">
// //                                                 <div>
// //                                                     <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
// //                                                     <div className="flex items-center gap-1">
// //                                                         {[1, 2, 3, 4, 5].map((star) => (
// //                                                             <button type="button" key={star} onClick={() => setNewReviewRating(star)} className="text-2xl transition-transform hover:scale-125">
// //                                                                 {star <= newReviewRating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300 hover:text-yellow-400" />}
// //                                                             </button>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                                 <div>
// //                                                     <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">Name</label>
// //                                                     <input type="text" id="reviewerName" value={newReviewerName} onChange={(e) => setNewReviewerName(e.target.value)} className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Your Name" required />
// //                                                 </div>
// //                                                 <div>
// //                                                     <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">Review</label>
// //                                                     <textarea id="reviewText" rows="4" value={newReviewText} onChange={(e) => setNewReviewText(e.target.value)} className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Share your thoughts..." required></textarea>
// //                                                 </div>
// //                                                 <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
// //                                                     Submit Review
// //                                                 </button>
// //                                             </form>
// //                                         </div>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default ProductDetails;

// import React, { useState } from 'react';
// import { FaStar, FaShoppingBag } from 'react-icons/fa';

// const ProductPage = () => {
//   const [selectedFlavor, setSelectedFlavor] = useState('Cherry Limeade');
//   const [quantity, setQuantity] = useState(1);

//   // Product data
//   const product = {
//     name: "DIESEL 26 GRAM",
//     brand: "DIESEL",
//     sku: "2030",
//     originalPrice: 100,
//     salePrice: 47.99,
//     discountPercent: 52,
//     description: "HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level...",
//     flavors: ['Cherry Limeade', 'Strawberry Pineapple'],
//     highlights: ["30 servings per container"],
//     reviewCount: 2,
//     rating: 4.5,
//     imageUrl: "/images/pr-3.png" // Replace with your actual image path
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm py-4 px-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">BUILDAPE</h1>
//           <div className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-800 hover:text-blue-600">HOME</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">MENU</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">CONSULTANCY</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">CONTACT</a>
//           </div>
//         </div>
//       </nav>

//       {/* Product Section */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Product Image - Full width on mobile, half on desktop */}
//             <div className="lg:w-1/2">
//               <div className="relative w-full h-96 sm:h-[500px] lg:h-full">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-full object-contain p-4"
//                   style={{ maxHeight: '600px' }}
//                 />
//                 <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
//                   SALE
//                 </div>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>

//               {/* Rating */}
//               <div className="flex items-center mb-4">
//                 <div className="flex mr-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
//               </div>

//               {/* Brand/SKU */}
//               <div className="space-y-1 text-gray-700 mb-4 text-sm">
//                 <p><span className="font-semibold">Brand:</span> {product.brand}</p>
//                 <p><span className="font-semibold">SKU:</span> {product.sku}</p>
//               </div>

//               {/* Pricing */}
//               <div className="flex items-baseline mb-5">
//                 <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
//                 <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//                 <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                   {product.discountPercent}% OFF
//                 </span>
//               </div>

//               {/* Flavor Selection */}
//               <div className="mb-6">
//                 <h3 className="text-md font-semibold mb-3">
//                   Flavor: <span className="font-normal">{selectedFlavor}</span>
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.flavors.map(flavor => (
//                     <button
//                       key={flavor}
//                       onClick={() => setSelectedFlavor(flavor)}
//                       className={`px-4 py-2 rounded-full border transition-all ${
//                         selectedFlavor === flavor
//                           ? 'border-blue-500 bg-blue-50 text-blue-700'
//                           : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {flavor}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Highlights */}
//               <div className="bg-gray-50 p-4 rounded-lg border mb-6">
//                 <h3 className="font-semibold mb-2">Product Highlights</h3>
//                 <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                   {product.highlights.map((highlight, index) => (
//                     <li key={index}>{highlight}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Add to Cart */}
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors"
//                   >
//                     -
//                   </button>
//                   <span className="px-5 py-3 font-semibold text-gray-900">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(q => q + 1)}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-r-lg transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button className="flex-grow bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
//                   <FaShoppingBag className="mr-3" /> Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// import React, { useState, useRef } from 'react';
// import { FaStar, FaShoppingBag } from 'react-icons/fa';

// const ImageMagnifier = ({
//   src,
//   width = '100%',
//   height = '500px',
//   magnifierHeight = 200,
//   magnifierWidth = 200,
//   zoomLevel = 2.5
// }) => {
//   const [[x, y], setXY] = useState([0, 0]);
//   const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
//   const [showMagnifier, setShowMagnifier] = useState(false);
//   const imgRef = useRef(null);

//   return (
//     <div className="relative" style={{ width, height }}>
//       <img
//         ref={imgRef}
//         src={src}
//         style={{
//           height: '100%',
//           width: '100%',
//           objectFit: 'contain'
//         }}
//         onMouseEnter={(e) => {
//           const elem = imgRef.current;
//           setSize([elem.offsetWidth, elem.offsetHeight]);
//           setShowMagnifier(true);
//         }}
//         onMouseMove={(e) => {
//           const elem = imgRef.current;
//           const { top, left } = elem.getBoundingClientRect();

//           // Calculate cursor position relative to the image
//           const x = e.pageX - left - window.pageXOffset;
//           const y = e.pageY - top - window.pageYOffset;

//           setXY([x, y]);
//         }}
//         onMouseLeave={() => {
//           setShowMagnifier(false);
//         }}
//         alt="Product"
//         className="w-full h-full object-contain rounded-lg shadow-md cursor-crosshair bg-white p-4"
//       />

//       {showMagnifier && (
//         <div
//           className="absolute pointer-events-none border-2 border-gray-300 rounded-full bg-white bg-opacity-50"
//           style={{
//             height: `${magnifierHeight}px`,
//             width: `${magnifierWidth}px`,
//             left: `${x - magnifierWidth / 2}px`,
//             top: `${y - magnifierHeight / 2}px`,
//             backgroundImage: `url('${src}')`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
//             backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
//             backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
//             zIndex: 10,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// const ProductPage = () => {
//   const [selectedFlavor, setSelectedFlavor] = useState('Cherry Limeade');
//   const [quantity, setQuantity] = useState(1);

//   // Product data
//   const product = {
//     name: "DIESEL 26 GRAM",
//     brand: "DIESEL",
//     sku: "2030",
//     originalPrice: 100,
//     salePrice: 47.99,
//     discountPercent: 52,
//     description: "HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level...",
//     flavors: ['Cherry Limeade', 'Strawberry Pineapple'],
//     highlights: ["30 servings per container"],
//     reviewCount: 2,
//     rating: 4.5,
//     imageUrl: "/images/pr-3.png" // Replace with your actual image path
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm py-4 px-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">BUILDAPE</h1>
//           <div className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-800 hover:text-blue-600">HOME</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">MENU</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">CONSULTANCY</a>
//             <a href="#" className="text-gray-800 hover:text-blue-600">CONTACT</a>
//           </div>
//         </div>
//       </nav>

//       {/* Product Section */}
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="flex flex-col lg:flex-row">
//             {/* Product Image with Magnifier */}
//             <div className="lg:w-1/2">
//               <div className="relative w-full h-96 sm:h-[500px] lg:h-full">
//                 <ImageMagnifier
//                   src={product.imageUrl}
//                   height="100%"
//                   magnifierHeight={200}
//                   magnifierWidth={200}
//                   zoomLevel={2.5}
//                 />
//                 <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
//                   SALE
//                 </div>
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-start">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>

//               {/* Rating */}
//               <div className="flex items-center mb-4">
//                 <div className="flex mr-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
//               </div>

//               {/* Brand/SKU */}
//               <div className="space-y-1 text-gray-700 mb-4 text-sm">
//                 <p><span className="font-semibold">Brand:</span> {product.brand}</p>
//                 <p><span className="font-semibold">SKU:</span> {product.sku}</p>
//               </div>

//               {/* Pricing */}
//               <div className="flex items-baseline mb-5">
//                 <span className="text-3xl font-bold text-orange-500 mr-3">${product.salePrice}</span>
//                 <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//                 <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
//                   {product.discountPercent}% OFF
//                 </span>
//               </div>

//               {/* Flavor Selection */}
//               <div className="mb-6">
//                 <h3 className="text-md font-semibold mb-3">
//                   Flavor: <span className="font-normal">{selectedFlavor}</span>
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.flavors.map(flavor => (
//                     <button
//                       key={flavor}
//                       onClick={() => setSelectedFlavor(flavor)}
//                       className={`px-4 py-2 rounded-full border transition-all ${
//                         selectedFlavor === flavor
//                           ? 'border-blue-500 bg-blue-50 text-blue-700'
//                           : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {flavor}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Highlights */}
//               <div className="bg-gray-50 p-4 rounded-lg border mb-6">
//                 <h3 className="font-semibold mb-2">Product Highlights</h3>
//                 <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                   {product.highlights.map((highlight, index) => (
//                     <li key={index}>{highlight}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Add to Cart */}
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center border border-gray-300 rounded-lg">
//                   <button
//                     onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors"
//                   >
//                     -
//                   </button>
//                   <span className="px-5 py-3 font-semibold text-gray-900">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(q => q + 1)}
//                     className="px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-r-lg transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button className="flex-grow bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
//                   <FaShoppingBag className="mr-3" /> Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState, useRef } from "react";
import {
  FaStar,
  FaShoppingBag,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const ImageMagnifier = ({
  src,
  width = "100%",
  height = "500px",
  magnifierHeight = 200,
  magnifierWidth = 200,
  zoomLevel = 2.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imgRef = useRef(null);

  return (
    <div className="relative" style={{ width, height }}>
      <img
        ref={imgRef}
        src={src}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        onMouseEnter={(e) => {
          const elem = imgRef.current;
          setSize([elem.offsetWidth, elem.offsetHeight]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = imgRef.current;
          const { top, left } = elem.getBoundingClientRect();

          // Calculate cursor position relative to the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;

          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt="Product"
        className="w-full h-full object-contain rounded-lg shadow-md cursor-crosshair bg-white p-4"
      />

      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-gray-300 rounded-full bg-white bg-opacity-50"
          style={{
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            left: `${x - magnifierWidth / 2}px`,
            top: `${y - magnifierHeight / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

const ProductDetails = () => {
  const [selectedFlavor, setSelectedFlavor] = useState("Cherry Limeade");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Enhanced product data with full description and reviews
  const product = {
    name: "DIESEL 26 GRAM",
    brand: "DIESEL",
    sku: "2030",
    originalPrice: 100,
    salePrice: 47.99,
    discountPercent: 52,
    description: `HYDRATION. ENDURANCE. RECOVERY. DIESEL BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.

Key Benefits:
- Enhanced hydration during workouts
- Improved endurance and performance
- Faster muscle recovery
- Delicious flavors with no artificial sweeteners
- Suitable for all fitness levels`,
    longDescription: `The DIESEL BCAA+EAA supplement is scientifically formulated to support athletes and fitness enthusiasts in achieving their performance goals. Each serving contains a precise 2:1:1 ratio of Branched-Chain Amino Acids (Leucine, Isoleucine, and Valine) combined with all nine Essential Amino Acids for complete muscle support.

Our formula includes:
- 5g BCAA + EAA blend per serving
- Added electrolytes for hydration
- Coconut water powder for natural minerals
- Zero sugar and only 10 calories per serving
- Vegan-friendly and gluten-free

Directions: Mix one scoop with 8-10 oz of cold water and consume during or after your workout. For best results, use consistently as part of your training regimen.`,
    flavors: ["Cherry Limeade", "Strawberry Pineapple"],
    highlights: [
      "30 servings per container",
      "BCAA + EAA formula",
      "Includes coconut water powder",
      "Promotes hydration and recovery",
    ],
    reviews: [
      {
        id: 1,
        name: "Rahul Sharma",
        rating: 5,
        date: "2023-10-15",
        comment:
          "Excellent product! The Cherry Limeade flavor tastes amazing and I've noticed better recovery after my workouts.",
      },
      {
        id: 2,
        name: "Priya Patel",
        rating: 4,
        date: "2023-09-28",
        comment:
          "Works well for my marathon training. The only reason I didn't give 5 stars is because the Strawberry Pineapple is a bit too sweet for my taste.",
      },
    ],
    imageUrl: "/images/pr-3.png",
  };

  // Calculate average rating
  const averageRating =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating > 0) {
      const review = {
        id: Date.now(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split("T")[0],
      };
      product.reviews.unshift(review); // Add new review to beginning
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">BUILDAPE</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              HOME
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              MENU
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              CONSULTANCY
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image with Magnifier */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-96 sm:h-[500px] lg:h-full">
                <ImageMagnifier
                  src={product.imageUrl}
                  height="100%"
                  magnifierHeight={200}
                  magnifierWidth={200}
                  zoomLevel={2.5}
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  SALE
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-start">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-2">{renderStars(averageRating)}</div>
                <span className="text-gray-600 text-sm">
                  ({product.reviews.length} reviews)
                </span>
              </div>

              {/* Brand/SKU */}
              <div className="space-y-1 text-gray-700 mb-4 text-sm">
                <p>
                  <span className="font-semibold">Brand:</span> {product.brand}
                </p>
                <p>
                  <span className="font-semibold">SKU:</span> {product.sku}
                </p>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline mb-5">
                <span className="text-3xl font-bold text-orange-500 mr-3">
                  ${product.salePrice}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
                <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {product.discountPercent}% OFF
                </span>
              </div>

              {/* Flavor Selection */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-3 cursor-pointer">
                  Flavor: <span className="font-normal">{selectedFlavor}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                        selectedFlavor === flavor
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-gray-50 p-4 rounded-lg border mb-6">
                <h3 className="font-semibold mb-2">Product Highlights</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg cursor-pointer">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-l-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-5 py-3 font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer rounded-r-lg transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="flex-grow cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold text-lg transition-transform active:scale-95">
                  <FaShoppingBag className="mr-3" /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Description and Reviews Tabs */}
          <div className="border-t border-gray-200 mt-8">
            <div className="flex border-b border-gray-200 cursor-pointer">
              <button
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === "description"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`px-6 py-4 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({product.reviews.length})
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {activeTab === "description" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Product Details</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.description}
                  </p>

                  <h3 className="text-xl font-semibold mt-6">
                    Additional Information
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {product.longDescription}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <h3 className="font-semibold mb-2">Ingredients</h3>
                    <p className="text-gray-700">
                      Branched-Chain Amino Acids (L-Leucine, L-Isoleucine,
                      L-Valine), Essential Amino Acids, Coconut Water Powder,
                      Natural Flavors, Citric Acid, Stevia Leaf Extract.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-4">
                      {renderStars(averageRating)}
                      <span className="ml-2 text-gray-600">
                        {averageRating.toFixed(1)} out of 5
                      </span>
                    </div>
                    <span className="text-gray-600">
                      {product.reviews.length} customer reviews
                    </span>
                  </div>

                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6 last:border-b-0"
                      >
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {renderStars(review.rating)}
                          </div>
                          <span className="font-medium">{review.name}</span>
                          <span className="text-gray-500 text-sm ml-auto">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">
                      Write a Review
                    </h3>
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Rating
                        </label>
                        <div className="flex space-x-1 ">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() =>
                                setNewReview({ ...newReview, rating: star })
                              }
                              className="text-2xl focus:outline-none cursor-pointer"
                            >
                              {star <= newReview.rating ? (
                                <FaStar className="text-yellow-400" />
                              ) : (
                                <FaRegStar className="text-gray-300 hover:text-yellow-400" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={newReview.name}
                          onChange={(e) =>
                            setNewReview({ ...newReview, name: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="comment"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Review
                        </label>
                        <textarea
                          id="comment"
                          rows="4"
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 cursor-pointer bg-orange-500 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
