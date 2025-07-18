// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiTrash2 } from "react-icons/fi";
// const Cart = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value > 0) {
//       setQuantity(value);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-20 bg-white">
//       <h3 className="text-2xl font-bold mb-6">My Cart</h3>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Cart Items */}
//         <div className="lg:w-8/12">
//           {/* Free Shipping Banner (uncomment if needed) */}
//           <p className="text-green-600 mb-4">
//             Free Delivery in Brampton in 24 Hours
//           </p>

//           {/* Desktop Table */}
//           <div className="hidden md:block">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-3 font-medium">Product</th>
//                   <th className="text-center py-3 font-medium">Quantity</th>
//                   <th className="text-right py-3 font-medium">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="py-4">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
//                         <img
//                           src="/product-1.png"
//                           alt="Optimum Nutrition Amino Energy"
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">
//                           Optimum Nutrition Amino Energy
//                         </p>
//                         <div className="mt-1">
//                           <span className="font-bold">$0.00</span>
//                           <span className="ml-2 text-sm text-gray-500 line-through">
//                             $41.99
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="text-center">
//                     <div className="flex items-center justify-center space-x-2">
//                       <button
//                         onClick={handleDecrease}
//                         className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
//                       >
//                         <span className="text-gray-600">−</span>
//                       </button>
//                       <input
//                         type="text"
//                         value={quantity}
//                         onChange={handleQuantityChange}
//                         className="w-12 text-center border rounded-md py-1"
//                       />
//                       <button
//                         onClick={handleIncrease}
//                         className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
//                       >
//                         <span className="text-gray-600">+</span>
//                       </button>
//                     </div>
//                     <button className="mt-2 text-sm text-red-500 hover:text-red-700">
//                       Remove
//                     </button>
//                   </td>
//                   <td className="text-right font-bold">$0.00</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile View */}
//           <div className="md:hidden">
//             <div className="border-b py-4">
//               <div className="flex space-x-4">
//                 <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
//                   <img
//                     src="/product-1.png"
//                     alt="Optimum Nutrition Amino Energy"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-500">
//                     Optimum Nutrition Amino Energy
//                   </p>
//                   <div className="mt-1">
//                     <span className="font-bold">$0.00</span>
//                     <span className="ml-2 text-sm text-gray-500 line-through">
//                       $41.99
//                     </span>
//                   </div>

//                   <div className="mt-3 flex items-center space-x-2">
//                     <button
//                       onClick={handleDecrease}
//                       className="w-8 h-8 flex cursor-pointer items-center justify-center border rounded-md hover:bg-gray-100"
//                     >
//                       <span className="text-gray-600 ">−</span>
//                     </button>
//                     <input
//                       type="text"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       className="w-12 text-center border rounded-md py-1"
//                     />
//                     <button
//                       onClick={handleIncrease}
//                       className="w-8 h-8 cursor-pointer flex items-center justify-center border rounded-md hover:bg-gray-100"
//                     >
//                       <span className="text-gray-600 ">+</span>
//                     </button>
//                   </div>
//                   {/* <button className="mt-2 text-sm text-red-500 hover:text-red-700 cursor-pointer">
//                     Remove
//                   </button> */}
//                   <button
//                     className="p-2 cursor-pointer text-red-500 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
//                     aria-label="Remove item" // बेहतर एक्सेसिबिलिटी के लिए
//                   >
//                     <FiTrash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="lg:w-4/12">
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-center mb-5">
//               <h5 className="text-lg font-bold flex-shrink-0">Order Summary</h5>
//               <div className="border-t flex-grow ml-2"></div>
//             </div>

//             <div className="space-y-3 mb-4">
//               <div className="flex justify-between">
//                 <span>Subtotal:</span>
//                 <span className="font-medium">$0.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax:</span>
//                 <span className="font-medium">$0.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping:</span>
//                 <span className="font-medium">$9.99</span>
//               </div>
//             </div>

//             <div className="border-t my-4"></div>

//             <div className="flex justify-between items-center mb-6">
//               <h6 className="font-bold">Total</h6>
//               <span className="text-lg font-bold">$9.99</span>
//             </div>

//             <form>
//               <input type="hidden" name="promo_id" value="" />
//               <input type="hidden" name="org_total" value="" />

//               <Link
//                 to="/checkout"
//                 name="checkout"
//                 className="w-full bg-orange-500 hover:bg-orange-500 text-white py-3 px-4 rounded-md font-medium transition duration-200"
//               >
//                 Checkout
//               </Link>
//             </form>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-6 mt-4 relative overflow-hidden">
//             <img
//               src="assets/img/shapes/circle-half.png"
//               alt="circle shape"
//               className="absolute right-0 top-0 -z-10"
//             />

//             <h4 className="font-bold mb-3">Coupon Code</h4>

//             <form className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="text"
//                 name="code"
//                 placeholder="Enter Your Voucher Code"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 id="save_update_price"
//                 className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium w-full md:w-auto"
//               >
//                 Apply Voucher
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState, useLayoutEffect, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiXCircle } from "react-icons/fi";
import gsap from "gsap";

const Cart = () => {
  // Sample data
  const initialItems = [
    { id: 1, name: "Optimum Nutrition Amino Energy", price: 41.99, quantity: 1, image: "/product-1.png" },
    { id: 2, name: "Rule 1 Whey Protein Isolate", price: 89.99, quantity: 2, image: "/product-2.png" },
  ];

  const [cartItems, setCartItems] = useState(initialItems);
  // --- COUPON STATES START ---
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState({ type: null, value: 0 });
  const [couponMessage, setCouponMessage] = useState({ text: "", type: "" });
  // --- COUPON STATES END ---

  const componentRef = useRef(null);
  const itemRefs = useRef({});
  const couponFormRef = useRef(null); // Ref for coupon form shake animation

  // --- UPDATED PRICE CALCULATION WITH DISCOUNT ---
  const { subtotal, tax, shipping, total, discountAmount } = useMemo(() => {
    const sub = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.13;
    const calculatedTax = sub * taxRate;
    const shippingCost = sub > 0 ? 9.99 : 0;
    
    let appliedDiscount = 0;
    if (discount.type === 'percentage') {
      appliedDiscount = sub * (discount.value / 100);
    } else if (discount.type === 'flat') {
      appliedDiscount = discount.value;
    }
    
    const finalTotal = sub + calculatedTax + shippingCost - appliedDiscount;

    return {
      subtotal: sub,
      tax: calculatedTax,
      shipping: shippingCost,
      total: Math.max(0, finalTotal),
      discountAmount: appliedDiscount,
    };
  }, [cartItems, discount]);

  const subtotalRef = useRef(null);
  const totalRef = useRef(null);
  const taxRef = useRef(null);
  const discountRef = useRef(null); // Ref for discount amount element

  // Page Load Animation (No Change)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-on-load", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.2, });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  // --- UPDATED Price Counter Animation ---
  useEffect(() => {
    const refs = [
      { ref: subtotalRef, value: subtotal },
      { ref: taxRef, value: tax },
      { ref: totalRef, value: total },
      { ref: discountRef, value: discountAmount },
    ];
    
    if (total > 0) {
       gsap.fromTo(totalRef.current.parentElement.parentElement, { backgroundColor: "#fef3c7" }, { backgroundColor: "transparent", duration: 0.8, ease: "none" });
    }
    
    refs.forEach(({ ref, value }) => {
      if (!ref.current) return;
      const counter = { val: parseFloat(ref.current.innerText.replace(/[^0-9.-]+/g,"")) || 0 };
      gsap.to(counter, {
        val: value,
        duration: 0.7,
        ease: "power1.out",
        onUpdate: () => {
          ref.current.innerText = value < 0 ? `- $${(-value).toFixed(2)}` : `$${value.toFixed(2)}`;
        },
      });
    });
  }, [subtotal, tax, total, discountAmount]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };
  
  const handleRemoveItem = (id) => {
    const itemRow = itemRefs.current[id];
    if (!itemRow) return;
    gsap.to(itemRow, {
      opacity: 0, x: -100, height: 0, padding: 0, margin: 0, duration: 0.5, ease: "power2.in",
      onComplete: () => setCartItems(prev => prev.filter(item => item.id !== id)),
    });
  };

  // --- COUPON LOGIC FUNCTIONS START ---
  const handleApplyCoupon = () => {
    const validCoupons = {
      "SALE10": { type: 'percentage', value: 10 },
      "FLAT20": { type: 'flat', value: 20 }
    };

    const code = couponCode.trim().toUpperCase();
    
    if (validCoupons[code]) {
      setDiscount(validCoupons[code]);
      setCouponMessage({ text: `Coupon "${code}" applied!`, type: "success" });
      setCouponCode("");
    } else {
      setDiscount({ type: null, value: 0 });
      setCouponMessage({ text: "Invalid coupon code.", type: "error" });
      gsap.fromTo(couponFormRef.current, { x: -10 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    }
  };
  
  const handleRemoveDiscount = () => {
      setDiscount({ type: null, value: 0 });
      setCouponMessage({ text: "Discount removed.", type: "" });
  };
  // --- COUPON LOGIC FUNCTIONS END ---

  return (
    <div ref={componentRef} className="container mx-auto px-4 py-20 bg-white min-h-screen">
      <h3 className="text-3xl font-bold mb-6 animate-on-load">My Cart</h3>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-8/12 animate-on-load">
          {cartItems.length > 0 ? (
            <div className="flex flex-col">
              {/* Desktop Table... (No Changes) */}
              <div className="hidden md:block">
                 <table className="w-full border-collapse">
                   <thead><tr className="border-b"><th className="text-left py-3 font-medium text-gray-500 uppercase tracking-wider">Product</th><th className="text-center py-3 font-medium text-gray-500 uppercase tracking-wider">Quantity</th><th className="text-right py-3 font-medium text-gray-500 uppercase tracking-wider">Total</th></tr></thead>
                   <tbody>
                    {cartItems.map(item => (
                       <tr key={item.id} ref={el => itemRefs.current[item.id] = el} className="border-b">
                         <td className="py-4"><div className="flex items-center space-x-4"><div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md"><img src={item.image} alt={item.name} className="w-full h-full object-cover"/></div><div><p className="font-semibold text-gray-800">{item.name}</p><p className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)}</p><button onClick={() => handleRemoveItem(item.id)} className="mt-2 text-sm cursor-pointer text-red-500 hover:text-red-700 font-medium">Remove</button></div></div></td>
                         <td className="text-center"><div className="flex items-center justify-center space-x-2"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} className=" cursor-pointer w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 transition-colors"><span>−</span></button><input type="text" value={item.quantity} readOnly className="w-12 text-center border rounded-md py-1"/><button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="cursor-pointer w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 transition-colors"><span>+</span></button></div></td>
                         <td className="text-right font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>
              {/* Mobile View... (No Changes) */}
              <div className="md:hidden space-y-4">
                 {cartItems.map(item => (
                   <div key={item.id} ref={el => itemRefs.current[item.id + '_mobile'] = el} className="border-b py-4">
                     <div className="flex space-x-4"><div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md"><img src={item.image} alt={item.name} className="w-full h-full object-cover"/></div><div className="flex-1"><p className="font-semibold text-gray-800">{item.name}</p><p className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)}</p><div className="mt-3 flex items-center justify-between"><div className="flex items-center space-x-2"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 transition-colors"><span>−</span></button><input type="text" value={item.quantity} readOnly className="w-12 text-center border rounded-md py-1"/><button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100 transition-colors"><span>+</span></button></div><button onClick={() => handleRemoveItem(item.id)} className="p-2 text-red-500 rounded-full hover:bg-red-100 transition-colors"><FiTrash2 size={18} /></button></div></div></div>
                   </div>
                 ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed rounded-lg"><h4 className="text-xl font-semibold text-gray-700">Your Cart is Empty</h4><p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p><Link to="/" className="mt-4 inline-block bg-orange-500 text-white py-2 px-5 rounded-md hover:bg-orange-600 transition-colors">Continue Shopping</Link></div>
          )}
        </div>

        {/* --- UPDATED Order Summary --- */}
        <div className="lg:w-4/12 animate-on-load">
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 sticky top-28">
            <h5 className="text-xl font-bold mb-4 border-b pb-3">Order Summary</h5>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span><span ref={subtotalRef} className="font-medium">$0.00</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Tax (13%):</span><span ref={taxRef} className="font-medium">$0.00</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Shipping:</span><span className="font-medium">${shipping.toFixed(2)}</span></div>
              {/* --- DISCOUNT ROW START --- */}
              {discountAmount > 0 && (
                <div className="flex justify-between text-green-600 border-t pt-3">
                  <span className="font-semibold">Discount:</span>
                  <div className="flex items-center gap-2">
                     <span ref={discountRef} className="font-semibold">-$0.00</span>
                     <button onClick={handleRemoveDiscount} title="Remove discount" className="text-red-500 hover:text-red-700"><FiXCircle size={16}/></button>
                  </div>
                </div>
              )}
              {/* --- DISCOUNT ROW END --- */}
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between items-center mb-6">
              <h6 className="text-lg font-bold">Total</h6>
              <span ref={totalRef} className="text-2xl font-bold text-orange-500">$0.00</span>
            </div>

            {/* --- COUPON FORM START --- */}
            <div ref={couponFormRef} className="mt-6">
                <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="text" 
                      value={couponCode} 
                      onChange={(e) => setCouponCode(e.target.value)} 
                      placeholder="Enter coupon code" 
                      className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button 
                      onClick={handleApplyCoupon} 
                      className="bg-gray-800 text-white cursor-pointer px-5 py-2 rounded-md font-medium w-full sm:w-auto hover:bg-gray-700 transition-colors flex-shrink-0"
                    >
                      Apply
                    </button>
                </div>
                {couponMessage.text && (
                    <p className={`mt-2 text-sm ${couponMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                        {couponMessage.text}
                    </p>
                )}
            </div>
            {/* --- COUPON FORM END --- */}

            <Link to="/checkout" className="w-full block text-center mt-6 bg-orange-500 text-white py-3 px-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
