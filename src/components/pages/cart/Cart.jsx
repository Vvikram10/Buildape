import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h3 className="text-2xl font-bold mb-6">My Cart</h3>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-8/12">
          {/* Free Shipping Banner (uncomment if needed) */}
          {/* <p className="text-green-600 mb-4">Free Delivery in Brampton in 24 Hours</p> */}
          
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium">Product</th>
                  <th className="text-center py-3 font-medium">Quantity</th>
                  <th className="text-right py-3 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                        <img 
                          src="/product-1.png" 
                          alt="Optimum Nutrition Amino Energy" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Optimum Nutrition Amino Energy</p>
                        <div className="mt-1">
                          <span className="font-bold">$0.00</span>
                          <span className="ml-2 text-sm text-gray-500 line-through">$41.99</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button 
                        onClick={handleDecrease}
                        className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                      >
                        <span className="text-gray-600">−</span>
                      </button>
                      <input 
                        type="text" 
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-12 text-center border rounded-md py-1"
                      />
                      <button 
                        onClick={handleIncrease}
                        className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                      >
                        <span className="text-gray-600">+</span>
                      </button>
                    </div>
                    <button className="mt-2 text-sm text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </td>
                  <td className="text-right font-bold">$0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="border-b py-4">
              <div className="flex space-x-4">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img 
                    src="adm/uploads/product/bcaa+orange.jpeg" 
                    alt="Optimum Nutrition Amino Energy" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Optimum Nutrition Amino Energy</p>
                  <div className="mt-1">
                    <span className="font-bold">$0.00</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">$41.99</span>
                  </div>
                  
                  <div className="mt-3 flex items-center space-x-2">
                    <button 
                      onClick={handleDecrease}
                      className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                    >
                      <span className="text-gray-600">−</span>
                    </button>
                    <input 
                      type="text" 
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 text-center border rounded-md py-1"
                    />
                    <button 
                      onClick={handleIncrease}
                      className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-100"
                    >
                      <span className="text-gray-600">+</span>
                    </button>
                  </div>
                  <button className="mt-2 text-sm text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-4/12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-5">
              <h5 className="text-lg font-bold flex-shrink-0">Order Summary</h5>
              <div className="border-t flex-grow ml-2"></div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">$9.99</span>
              </div>
            </div>
            
            <div className="border-t my-4"></div>
            
            <div className="flex justify-between items-center mb-6">
              <h6 className="font-bold">Total</h6>
              <span className="text-lg font-bold">$9.99</span>
            </div>
            
            <form>
              <input type="hidden" name="promo_id" value="" />
              <input type="hidden" name="org_total" value="" />
              
              <Link
                to='/checkout'
                name="checkout" 
                className="w-full bg-orange-500 hover:bg-orange-500 text-white py-3 px-4 rounded-md font-medium transition duration-200"
              >
                Checkout
              </Link>
            </form>
          </div>
          
          {/* Coupon Code (uncomment if needed) */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6 mt-4 relative overflow-hidden">
            <img src="assets/img/shapes/circle-half.png" alt="circle shape" className="absolute right-0 top-0 -z-10" />
            <h4 className="font-bold mb-3">Coupon Code</h4>
            
            <form className="flex space-x-2">
              <input 
                type="text" 
                name="code" 
                placeholder="Enter Your Voucher Code" 
                className="flex-grow border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="button" 
                id="save_update_price" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium flex-shrink-0"
              >
                Apply Voucher
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;