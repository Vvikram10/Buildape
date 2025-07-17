import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { gsap } from 'gsap'; // Abhi iski zaroorat nahi

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD-1001",
      date: "2023-05-15",
      status: "confirmed",
      products: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 149.99,
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
        {
          id: 2,
          name: "Bluetooth Speaker",
          price: 89.99,
          quantity: 2,
          image: "https://via.placeholder.com/80",
        },
      ],
      total: 329.97,
    },
    {
      id: "ORD-1002",
      date: "2023-05-14",
      status: "paid",
      products: [
        {
          id: 3,
          name: "Smart Watch",
          price: 199.99,
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
      ],
      total: 199.99,
    },
    {
      id: "ORD-1003",
      date: "2023-05-12",
      status: "canceled",
      products: [
        {
          id: 4,
          name: "Wireless Keyboard",
          price: 59.99,
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
        {
          id: 5,
          name: "Gaming Mouse",
          price: 39.99,
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
      ],
      total: 99.98,
    },
  ]);

  const containerRef = useRef(null);
  const orderRefs = useRef([]);

  /*
  // ANIMATION CODE COMMENTED OUT TO FIX VISIBILITY
  useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "power2.out"
    });

    gsap.from(orderRefs.current, {
      duration: 0.6,
      y: 30,
      opacity: 0,
      stagger: 0.15,
      ease: "back.out(1.7)"
    });
  }, []);
  */

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "paid":
        return "bg-green-100 text-green-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "paid":
        return "Paid";
      case "canceled":
        return "Canceled";
      default:
        return "Pending";
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Orders</h1>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order.id}
              ref={(el) => (orderRefs.current[index] = el)}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Order Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-3 sm:mb-0">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order #{order.id}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Placed on {order.date}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                  <span className="text-lg font-semibold">
                    ₹{order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Products List */}
              <div className="divide-y divide-gray-200">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="px-6 py-4 flex flex-col sm:flex-row"
                  >
                    <div className="flex items-center mb-3 sm:mb-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md mr-4 flex-shrink-0"
                      />
                      <div className="sm:hidden">
                        <h3 className="text-md font-medium text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-between">
                      <div className="hidden sm:block">
                        <h3 className="text-md font-medium text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                      <div className="w-full sm:w-auto text-right">
                        <p className="text-md font-medium">
                          ₹{product.price.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{(product.price * product.quantity).toFixed(2)} total
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Actions */}
              <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div>
                  {order.status === "confirmed" && (
                    <button
                      onClick={() => handleStatusChange(order.id, "paid")}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mr-2 mb-2 sm:mb-0"
                    >
                      Mark as Paid
                    </button>
                  )}
                  {order.status !== "canceled" && (
                    <button
                      onClick={() => handleStatusChange(order.id, "canceled")}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
                <Link to="/invoice">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-left sm:text-right">
                    View Invoice
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderManagementPage;
