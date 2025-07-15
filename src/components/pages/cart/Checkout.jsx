import React, { useState } from 'react';

const Checkout = () => {
  // State for form inputs. In a real application, you might use a library like Formik or React Hook Form.
  const [formData, setFormData] = useState({
    email: '',
    country: 'Canada',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    province: 'Ontario',
    postalCode: '',
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    securityCode: '',
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment and order here.
    console.log('Order submitted:', formData);
    alert('Order placed successfully! (See console for details)');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          
          {/* Left Side: Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4">
                  <select 
                    name="country" 
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md bg-white"
                  >
                    <option>Canada</option>
                    <option>United States</option>
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="firstName" placeholder="First name" className="w-full p-3 border rounded-md" required />
                    <input type="text" name="lastName" placeholder="Last name" className="w-full p-3 border rounded-md" required />
                  </div>
                  <input type="text" name="address" placeholder="Address" className="w-full p-3 border rounded-md" required />
                  <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded-md" required />
                    <select name="province" className="w-full p-3 border rounded-md bg-white">
                      <option>Ontario</option>
                      <option>Quebec</option>
                      <option>British Columbia</option>
                      <option>Alberta</option>
                    </select>
                    <input type="text" name="postalCode" placeholder="Postal code" className="w-full p-3 border rounded-md" required />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
                <div className="bg-white border rounded-lg p-4">
                    <div className="grid grid-cols-1 gap-4">
                         <input 
                            type="text" 
                            name="cardNumber"
                            placeholder="Card number" 
                            className="w-full p-3 border rounded-md" 
                            required 
                         />
                         <input 
                            type="text" 
                            name="nameOnCard"
                            placeholder="Name on card" 
                            className="w-full p-3 border rounded-md" 
                            required 
                         />
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="expirationDate"
                                placeholder="Expiration date (MM / YY)" 
                                className="w-full p-3 border rounded-md" 
                                required 
                            />
                            <input 
                                type="text" 
                                name="securityCode"
                                placeholder="Security code" 
                                className="w-full p-3 border rounded-md" 
                                required 
                            />
                        </div>
                    </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-4 rounded-md transition duration-300"
                >
                  Place Order
                </button>
              </div>

            </form>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-5/12">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4 border-b pb-4">Order Summary</h2>
              
              {/* Product Item */}
              <div className="flex justify-between items-center py-4 border-b">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src="/product-1.png" 
                      alt="Product" 
                      className="w-16 h-16 object-cover rounded-md border"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/f97316/white?text=Img'; }}
                    />
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Optimum Nutrition Amino Energy</p>
                    <p className="text-xs text-gray-500">Flavor: Orange</p>
                  </div>
                </div>
                <span className="font-semibold">$0.00</span>
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">$9.99</span>
                </div>
                 <div className="flex justify-between">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>
              
              <div className="border-t my-4"></div>
              
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">Total</h3>
                <span className="text-xl font-bold text-orange-500">$9.99</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
