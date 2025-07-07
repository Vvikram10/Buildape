// import React, { useState, useEffect } from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch, FaTimes } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//       const { id } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedFlavor, setSelectedFlavor] = useState('Cherry Limeade');
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [showReviewForm, setShowReviewForm] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [activeTab, setActiveTab] = useState('description');

//   const product = {
//     name: "RYSE BCAA/EAA 30 serve",
//     brand: "Ryse",
//     sku: "2030",
//     originalPrice: 54.99,
//     salePrice: 47.99,
//     rating: 4,
//     reviewCount: 0,
//     description: `HYDRATION. ENDURANCE. RECOVERY. RYSE BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
//     flavors: [
//       { id: '43', name: 'Cherry Limeade' },
//       { id: '56', name: 'Strawberry Pineapple' }
//     ],
//     images: [
//       '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg',
//       '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg', // Add more images if available
//     ]
//   };

//   const recentlyViewed = [
//     { id: 34, name: "Alani BCAA 30 Servings", price: 44.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa hawaiin.webp" },
//     { id: 52, name: "RYSE BCAA/EAA 30 serve", price: 47.99, originalPrice: 54.99, image: "/adm/uploads/product/bcaa+cherry.jpeg" },
//     // Add more recently viewed items
//   ];

//   const increaseQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const handleFlavorChange = (e) => {
//     setSelectedFlavor(e.target.value);
//   };

//   const renderStars = () => {
//     const stars = [];
//     const fullStars = Math.floor(product.rating);
//     const hasHalfStar = product.rating % 1 !== 0;
    
//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (i === fullStars + 1 && hasHalfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }
    
//     return stars;
//   };

//   const addToCart = () => {
//     // Add to cart logic here
//     console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
//   };

//   return (
//     <div className="main-wrapper">
//       {/* Mobile Menu (simplified) */}
//       <div className="offcanvas_menu fixed inset-0 bg-white z-50 hidden">
//         {/* Mobile menu content */}
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div className="popup_container fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">How's 10% off your first order sound?</h2>
//               <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-gray-700">
//                 <FaTimes />
//               </button>
//             </div>
//             <p className="mb-4">Subscribe to our newsletter to receive a 10% discount, along with updates on our latest sales and promotions.</p>
//             <form className="space-y-4">
//               <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
//               <div className="flex items-center">
//                 <input type="checkbox" id="terms" className="mr-2" required />
//                 <label htmlFor="terms" className="text-sm">
//                   I agree to terms & conditions provided by the Buildape. By providing my phone number, I agree to receive text messages from Buildape.
//                 </label>
//               </div>
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                 Sign Up Now
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="side_btn_one_popup_open fixed right-4 bottom-4 bg-blue-600 text-white p-3 rounded-full cursor-pointer z-40" onClick={() => setShowPopup(true)}>
//         <p className="text-sm">Get 10% Off</p>
//       </div>

//       {/* Breadcrumb */}
//       <div className="category_breadcrumb details_breadcrumb py-4 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <ul className="flex items-center text-sm">
//             <li><a href="/" className="hover:text-blue-600">Home</a></li>
//             <li className="mx-2">/</li>
//             <li className="text-blue-600">{product.name}</li>
//           </ul>
//         </div>
//       </div>

//       {/* Product Details */}
//       <section className="product-details-area py-8">
//         <div className="container mx-auto px-4">
//           <div className="product-details">
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Product Images */}
//               <div className="lg:w-1/2">
//                 <div className="zoom_slider_banner mb-4">
//                   <div className="relative">
//                     <img 
//                       src={product.images[0]} 
//                       alt={product.name} 
//                       className="w-full h-auto cursor-zoom-in"
//                       onMouseEnter={() => setIsZoomed(true)}
//                       onMouseLeave={() => setIsZoomed(false)}
//                     />
//                     {isZoomed && (
//                       <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
//                         <img 
//                           src={product.images[0]} 
//                           alt={product.name} 
//                           className="max-w-full max-h-full object-contain"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <p className="text-center text-sm mb-4">
//                   <FaSearch className="inline mr-1" /> Roll over image to zoom in
//                 </p>

//                 {/* Thumbnails */}
//                 <div className="multi_slider_img grid grid-cols-4 gap-2">
//                   {product.images.map((img, index) => (
//                     <div key={index} className="cursor-pointer">
//                       <img src={img} alt={`${product.name} thumbnail ${index}`} className="w-full h-auto" />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Description Tabs (Desktop) */}
//                 <div className="hidden lg:block mt-8">
//                   <div className="accordion">
//                     <div className="at-item border-b">
//                       <div 
//                         className={`at-title py-4 cursor-pointer ${activeTab === 'description' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('description')}
//                       >
//                         <h2 className="font-semibold">Description</h2>
//                       </div>
//                       {activeTab === 'description' && (
//                         <div className="at-tab py-4">
//                           <p className="whitespace-pre-line">{product.description}</p>
//                         </div>
//                       )}
//                     </div>

//                     <div className="at-item border-b">
//                       <div 
//                         className={`at-title py-4 cursor-pointer ${activeTab === 'reviews' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('reviews')}
//                       >
//                         <h2 className="font-semibold">Reviews</h2>
//                       </div>
//                       {activeTab === 'reviews' && (
//                         <div className="at-tab py-4">
//                           <div className="review-tab-box bg-white rounded pt-8 pb-10 px-4">
//                             <div className="flex flex-wrap items-center justify-between">
//                               <div className="top-left">
//                                 <h5 className="font-semibold mb-2">Reviews ({product.reviewCount})</h5>
//                                 <p className="mb-0">Get specific details about this product from customers who own it.</p>
//                                 <div className="flex items-center mt-1">
//                                   <div className="flex text-yellow-400">
//                                     {renderStars()}
//                                   </div>
//                                   <span className="ml-2 text-gray-800">(4 out of 5)</span>
//                                 </div>
//                               </div>
//                             </div>
//                             <hr className="my-4" />
//                             {/* Reviews would be listed here */}
//                             <p className="text-center text-gray-500">No reviews yet</p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Review Form */}
//                   <div className="write_a_review_section mt-8">
//                     <div className="btn_group">
//                       <button 
//                         className="open_review bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex items-center"
//                         onClick={() => setShowReviewForm(!showReviewForm)}
//                       >
//                         <FaSearch className="mr-2" /> Write a Review
//                       </button>
//                     </div>
//                     {showReviewForm && (
//                       <form className="form_review mt-4">
//                         <div className="rating-box mb-4">
//                           <h5 className="font-semibold mb-2">Write a Awesome Review</h5>
//                           <div className="rating-container flex">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <React.Fragment key={star}>
//                                 <input type="radio" name="star" value={star} id={`star-${star}`} className="hidden" />
//                                 <label htmlFor={`star-${star}`} className="text-2xl cursor-pointer">★</label>
//                               </React.Fragment>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="form-group space-y-4">
//                           <input type="hidden" name="product_id" value="52" />
//                           <input type="text" placeholder="Full Name" name="name" className="w-full p-2 border rounded" required />
//                           <input type="text" placeholder="Email Id" className="w-full p-2 border rounded" name="email" required />
//                           <input type="text" placeholder="Title of Review" className="w-full p-2 border rounded" name="title" required />
//                           <textarea placeholder="How was your overall experience?" className="w-full p-2 border rounded" name="review" required rows="4"></textarea>
//                           <button className="btn btn-dark btn-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
//                             Submit Review
//                           </button>
//                         </div>
//                       </form>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="lg:w-1/2">
//                 <div className="product-info">
//                   <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
//                   <div className="flex items-center mb-2">
//                     <div className="flex text-yellow-400 mr-2">
//                       {renderStars()}
//                     </div>
//                     <span className="text-gray-600">({product.reviewCount} reviews)</span>
//                   </div>
//                   <div className="brand_de mb-4">
//                     <ul className="space-y-1">
//                       <li>Brand: {product.brand}</li>
//                       <li>SKU: {product.sku}</li>
//                     </ul>
//                   </div>
//                   <div className="pricing mt-2 mb-4">
//                     <span className="text-gray-500 line-through mr-2">${product.originalPrice}</span>
//                     <span className="text-red-600 font-bold">${product.salePrice}</span>
//                   </div>

//                   {/* Flavor Selection */}
//                   <div className="widget-title flex mt-4">
//                     <h6 className="font-semibold">Pick Flavor: {selectedFlavor}</h6>
//                   </div>
//                   <form className="Cocoa_select mb-4">
//                     <select 
//                       id="flavor_id" 
//                       className="form-control w-full p-2 border rounded mb-3"
//                       onChange={handleFlavorChange}
//                       value={selectedFlavor}
//                       required
//                     >
//                       <option value="">Choose Your Flavour</option>
//                       {product.flavors.map(flavor => (
//                         <option key={flavor.id} value={flavor.name}>{flavor.name}</option>
//                       ))}
//                     </select>
//                   </form>

//                   {/* Quantity */}
//                   <div className="flex_quenty flex items-center mb-6">
//                     <p className="mr-4">Quantity:</p>
//                     <div className="qty-container flex items-center">
//                       <button 
//                         className="qty-btn-minus bg-gray-200 px-3 py-1 rounded-l"
//                         onClick={decreaseQuantity}
//                       >
//                         <FaMinus />
//                       </button>
//                       <input 
//                         type="text" 
//                         name="qty" 
//                         value={quantity} 
//                         className="input-qty w-12 text-center border-t border-b py-1" 
//                         readOnly
//                       />
//                       <button 
//                         className="qty-btn-plus bg-gray-200 px-3 py-1 rounded-r"
//                         onClick={increaseQuantity}
//                       >
//                         <FaPlus />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Add to Cart */}
//                   <div className="d-flex align-items-center gap-4 flex-wrap">
//                     <form className="product-form">
//                       <input type="hidden" id="real_price" value={product.salePrice} />
//                       <button 
//                         type="button" 
//                         className="btn btn-secondary btn-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded flex items-center"
//                         onClick={addToCart}
//                       >
//                         <FaShoppingBag className="mr-2" /> Add to Cart
//                       </button>
//                     </form>
//                   </div>
//                 </div>

//                 {/* Description Tabs (Mobile) */}
//                 <div className="lg:hidden mt-8">
//                   <div className="accordion">
//                     <div className="at-item border-b">
//                       <div 
//                         className={`at-title py-4 cursor-pointer ${activeTab === 'description' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('description')}
//                       >
//                         <h2 className="font-semibold">Description</h2>
//                       </div>
//                       {activeTab === 'description' && (
//                         <div className="at-tab py-4">
//                           <p className="whitespace-pre-line">{product.description}</p>
//                         </div>
//                       )}
//                     </div>

//                     <div className="at-item border-b">
//                       <div 
//                         className={`at-title py-4 cursor-pointer ${activeTab === 'reviews' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('reviews')}
//                       >
//                         <h2 className="font-semibold">Reviews</h2>
//                       </div>
//                       {activeTab === 'reviews' && (
//                         <div className="at-tab py-4">
//                           <div className="review-tab-box bg-white rounded pt-8 pb-10 px-4">
//                             <div className="flex flex-wrap items-center justify-between">
//                               <div className="top-left">
//                                 <h5 className="font-semibold mb-2">Reviews ({product.reviewCount})</h5>
//                                 <p className="mb-0">Get specific details about this product from customers who own it.</p>
//                                 <div className="flex items-center mt-1">
//                                   <div className="flex text-yellow-400">
//                                     {renderStars()}
//                                   </div>
//                                   <span className="ml-2 text-gray-800">(4 out of 5)</span>
//                                 </div>
//                               </div>
//                             </div>
//                             <hr className="my-4" />
//                             {/* Reviews would be listed here */}
//                             <p className="text-center text-gray-500">No reviews yet</p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Review Form */}
//                   <div className="write_a_review_section mt-8">
//                     <div className="btn_group">
//                       <button 
//                         className="open_review bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex items-center"
//                         onClick={() => setShowReviewForm(!showReviewForm)}
//                       >
//                         <FaSearch className="mr-2" /> Write a Review
//                       </button>
//                     </div>
//                     {showReviewForm && (
//                       <form className="form_review mt-4">
//                         <div className="rating-box mb-4">
//                           <h5 className="font-semibold mb-2">Write a Awesome Review</h5>
//                           <div className="rating-container flex">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <React.Fragment key={star}>
//                                 <input type="radio" name="star" value={star} id={`mobile-star-${star}`} className="hidden" />
//                                 <label htmlFor={`mobile-star-${star}`} className="text-2xl cursor-pointer">★</label>
//                               </React.Fragment>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="form-group space-y-4">
//                           <input type="hidden" name="product_id" value="52" />
//                           <input type="text" placeholder="Full Name" name="name" className="w-full p-2 border rounded" required />
//                           <input type="text" placeholder="Email Id" className="w-full p-2 border rounded" name="email" required />
//                           <input type="text" placeholder="Title of Review" className="w-full p-2 border rounded" name="title" required />
//                           <textarea placeholder="How was your overall experience?" className="w-full p-2 border rounded" name="review" required rows="4"></textarea>
//                           <button className="btn btn-dark btn-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
//                             Submit Review
//                           </button>
//                         </div>
//                       </form>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recently Viewed */}
//       <section className="top_sale_product py-8 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="section-title mb-6">
//             <h2 className="text-2xl font-bold mb-0">Recently Viewed</h2>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//             {recentlyViewed.map(item => (
//               <div key={item.id} className="swiper-slide">
//                 <div className="vertical-product-card bg-white rounded-lg shadow-sm overflow-hidden">
//                   <div className="thumbnail p-4 text-center">
//                     <a href={`/product/${item.id}`}>
//                       <img src={item.image} alt={item.name} className="w-full h-auto mx-auto" />
//                     </a>
//                   </div>
//                   <div className="card-content text-center p-4">
//                     <a href={`/product/${item.id}`} className="card-title font-bold block mb-2">{item.name}</a>
//                     <div className="pricing mb-2 flex items-center justify-center gap-2">
//                       {item.originalPrice && (
//                         <del className="text-gray-500">${item.originalPrice}</del>
//                       )}
//                       <h6 className="price text-red-600 font-bold">${item.price}</h6>
//                     </div>
//                     <div className="flex items-center justify-center mb-2">
//                       <div className="flex text-yellow-400">
//                         {renderStars()}
//                       </div>
//                     </div>
//                     <button 
//                       className="btn btn-outline-secondary border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded text-sm"
//                       onClick={() => console.log(`Add ${item.name} to cart`)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaMinus, FaPlus, FaSearch, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState('Cherry Limeade');
  const [isZoomed, setIsZoomed] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Improved product data structure
  const product = {
    name: "RYSE BCAA/EAA 30 serve",
    brand: "Ryse",
    sku: "2030",
    originalPrice: 54.99,
    salePrice: 47.99,
    rating: 4,
    reviewCount: 0,
    description: `HYDRATION. ENDURANCE. RECOVERY. RYSE BCAA+EAA 30 servings takes your standard BCAA Formula to an entirely new level with the addition of Essential Amino Acids and Coconut Water Powder. Maximize your training and promote recovery with the added benefits of RYSE BCAA+EAA.`,
    flavors: [
      { 
        id: '43', 
        name: 'Cherry Limeade',
        color: '#FF6B6B',
        image: '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg'
      },
      { 
        id: '56', 
        name: 'Strawberry Pineapple',
        color: '#FFD166',
        image: '/adm/uploads/flavor_gallery/1176309bcaa+strawberry.jpeg'
      }
    ],
    images: [
      '/adm/uploads/flavor_gallery/1176309bcaa+cherry.jpeg',
      '/adm/uploads/flavor_gallery/1176309bcaa+strawberry.jpeg',
    ],
    details: [
      "30 servings per container",
      "BCAA + EAA formula",
      "Includes coconut water powder",
      "Promotes hydration and recovery"
    ]
  };

  // Improved recently viewed items
  const recentlyViewed = [
    { 
      id: 34, 
      name: "Alani BCAA 30 Servings", 
      price: 44.99, 
      originalPrice: 54.99, 
      image: "/adm/uploads/product/bcaa hawaiin.webp",
      rating: 4.5
    },
    { 
      id: 52, 
      name: "RYSE BCAA/EAA 30 serve", 
      price: 47.99, 
      originalPrice: 54.99, 
      image: "/adm/uploads/product/bcaa+cherry.jpeg",
      rating: 4
    },
  ];

    const addToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.name} (${selectedFlavor}) to cart`);
  };

    const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleFlavorChange = (e) => {
    setSelectedFlavor(e.target.value);
  };


  // Improved star rating component
  const renderStars = (ratingValue) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  // Improved flavor selection
  const FlavorSelector = ({ flavors, selected, onSelect }) => {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {flavors.map(flavor => (
          <button
            key={flavor.id}
            onClick={() => onSelect(flavor.name)}
            className={`flex items-center px-3 py-2 rounded-full border ${selected === flavor.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          >
            {flavor.color && (
              <span 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: flavor.color }}
              ></span>
            )}
            {flavor.name}
          </button>
        ))}
      </div>
    );
  };

  // Improved image gallery with thumbnails
  const ImageGallery = ({ images }) => {
    const [mainImage, setMainImage] = useState(images[0]);
    
    return (
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <img 
            src={mainImage} 
            alt="Main product" 
            className="w-full h-auto object-contain cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            style={{ height: '400px' }}
          />
          {isZoomed && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
              <img 
                src={mainImage} 
                alt="Zoomed product" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`rounded border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="main-wrapper bg-gray-50">

      {/* Breadcrumb */}
      <div className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-600 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Product Images - Improved */}
              <div className="lg:w-1/2 p-6">
                <ImageGallery images={product.images} />
              </div>

              {/* Product Info - Improved */}
              <div className="lg:w-1/2 p-6">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-gray-600 text-sm">({product.reviewCount} reviews)</span>
                    </div>
                    <div className="space-y-2 text-gray-700 mb-4">
                      <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                      <p><span className="font-semibold">SKU:</span> {product.sku}</p>
                    </div>
                  </div>

                  {/* Pricing - Improved */}
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900 mr-3">${product.salePrice}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                    {product.originalPrice && (
                      <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                        {Math.round((1 - product.salePrice/product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Flavor Selection - Improved */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Flavor</h3>
                    <FlavorSelector 
                      flavors={product.flavors} 
                      selected={selectedFlavor} 
                      onSelect={setSelectedFlavor} 
                    />
                  </div>

                  {/* Quantity - Improved */}
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold mr-4">Quantity:</h3>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button 
                        onClick={decreaseQuantity}
                        className="bg-gray-100 hover:bg-gray-200 px-3 py-2 transition-colors"
                        disabled={quantity <= 1}
                      >
                        <FaMinus className="text-gray-600" />
                      </button>
                      <span className="px-4 py-2 bg-white">{quantity}</span>
                      <button 
                        onClick={increaseQuantity}
                        className="bg-gray-100 hover:bg-gray-200 px-3 py-2 transition-colors"
                      >
                        <FaPlus className="text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart - Improved */}
                  <button 
                    onClick={addToCart}
                    className="w-full bg-orange-500 hover:bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center font-medium transition-colors"
                  >
                    <FaShoppingBag className="mr-2" /> Add to Cart - ${(product.salePrice * quantity).toFixed(2)}
                  </button>

                  {/* Product Highlights */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Product Highlights</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.map((detail, index) => (
                        <li key={index} className="text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Description and Reviews Tabs - Improved */}
            <div className="border-t p-6">
              <div className="flex border-b">
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.reviewCount})
                </button>
              </div>

              <div className="py-4">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                    <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-gray-700">{product.rating} out of 5</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">Based on {product.reviewCount} reviews</p>
                      </div>
                      <button
                        onClick={() => setShowReviewForm(!showReviewForm)}
                        className="mt-4 md:mt-0 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center transition-colors"
                      >
                        <FaSearch className="mr-2" /> Write a Review
                      </button>
                    </div>

                    {showReviewForm && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Write a Review</h4>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-gray-700 mb-2">Rating</label>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  onMouseEnter={() => setHoverRating(star)}
                                  onMouseLeave={() => setHoverRating(0)}
                                  onClick={() => setRating(star)}
                                  className="text-3xl mr-1"
                                >
                                  {star <= (hoverRating || rating) ? (
                                    <FaStar className="text-yellow-400" />
                                  ) : (
                                    <FaRegStar className="text-yellow-400" />
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                            <input
                              type="text"
                              id="name"
                              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="title" className="block text-gray-700 mb-2">Review Title</label>
                            <input
                              type="text"
                              id="title"
                              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="review" className="block text-gray-700 mb-2">Your Review</label>
                            <textarea
                              id="review"
                              rows="4"
                              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                          >
                            Submit Review
                          </button>
                        </form>
                      </div>
                    )}

                    {product.reviewCount === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Reviews would be listed here */}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed - Improved */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recentlyViewed.map(item => (
              <div key={item.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-contain mx-auto"
                    />
                  </div>
                  <div className="p-4 border-t">
                    <h3 className="font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-1">
                        {renderStars(item.rating)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-gray-900 mr-2">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
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