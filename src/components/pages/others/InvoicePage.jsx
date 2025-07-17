import React from "react";

const InvoicePage = () => {
  // Dummy invoice data
  const invoiceData = {
    invoiceNumber: "INV-2023-00542",
    date: "May 15, 2023",
    dueDate: "June 14, 2023",
    status: "Paid",
    from: {
      name: "Optimum Nutrition Inc.",
      address: "123 Supplement Ave",
      city: "Toronto, ON M5V 2H1",
      email: "orders@optimumnutrition.com",
      phone: "(416) 555-0199",
    },
    to: {
      name: "John Smith",
      address: "456 Fitness Street",
      city: "Vancouver, BC V6B 2W9",
      email: "john.smith@example.com",
    },
    items: [
      {
        id: 1,
        name: "Optimum Nutrition Gold Standard Whey",
        description: "5 lbs, Double Rich Chocolate",
        quantity: 2,
        price: 89.99,
        total: 179.98,
      },
      {
        id: 2,
        name: "Amino Energy",
        description: "30 Servings, Orange",
        quantity: 1,
        price: 29.99,
        total: 29.99,
      },
      {
        id: 3,
        name: "Creatine Monohydrate",
        description: "300g Unflavored",
        quantity: 1,
        price: 19.99,
        total: 19.99,
      },
    ],
    subtotal: 229.96,
    tax: 29.89,
    shipping: 9.99,
    total: 269.84,
    paymentMethod: "Visa ending in 4242",
    paymentDate: "May 16, 2023",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-3">
            Invoice
          </h1>
          <p className="text-xl text-gray-600">Here's your order summary</p>
        </div>

        {/* Invoice container */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Invoice header */}
          <div className="px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-3xl font-bold">INVOICE</h2>
                <p className="text-orange-100 mt-1">
                  #{invoiceData.invoiceNumber}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    invoiceData.status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {invoiceData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Invoice details */}
          <div className="px-8 py-8 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  From
                </h3>
                <p className="text-base text-gray-900 font-medium">
                  {invoiceData.from.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {invoiceData.from.address}
                </p>
                <p className="text-sm text-gray-500">{invoiceData.from.city}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  {invoiceData.from.email}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Phone:</span>{" "}
                  {invoiceData.from.phone}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  To
                </h3>
                <p className="text-base text-gray-900 font-medium">
                  {invoiceData.to.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {invoiceData.to.address}
                </p>
                <p className="text-sm text-gray-500">{invoiceData.to.city}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  {invoiceData.to.email}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Details
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Date Issued:</span>{" "}
                    {invoiceData.date}
                  </p>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Due Date:</span>{" "}
                    {invoiceData.dueDate}
                  </p>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Payment Method:</span>{" "}
                    {invoiceData.paymentMethod}
                  </p>
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">Payment Date:</span>{" "}
                    {invoiceData.paymentDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice items */}
          <div className="px-8 py-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Qty
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoiceData.items.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm text-gray-500">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                        ${item.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Invoice totals */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-end">
              <div className="w-full max-w-md">
                <div className="grid grid-cols-2 gap-y-3">
                  <div className="text-base font-medium text-gray-500">
                    Subtotal
                  </div>
                  <div className="text-base text-gray-900 text-right">
                    ${invoiceData.subtotal.toFixed(2)}
                  </div>

                  <div className="text-base font-medium text-gray-500">Tax</div>
                  <div className="text-base text-gray-900 text-right">
                    ${invoiceData.tax.toFixed(2)}
                  </div>

                  <div className="text-base font-medium text-gray-500">
                    Shipping
                  </div>
                  <div className="text-base text-gray-900 text-right">
                    ${invoiceData.shipping.toFixed(2)}
                  </div>

                  <div className="border-t my-2 col-span-2"></div>

                  <div className="text-xl font-bold text-gray-900 pt-1">
                    Total
                  </div>
                  <div className="text-xl font-bold text-orange-600 text-right pt-1">
                    ${invoiceData.total.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice footer */}
          <div className="px-8 py-5 bg-gray-100 text-center text-sm text-gray-600">
            <p>Thank you for your business. We appreciate your trust in us.</p>
            <p className="mt-1">
              Please contact{" "}
              <span className="text-orange-500">
                support@optimumnutrition.com
              </span>{" "}
              for any questions.
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 cursor-pointer py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Download PDF
          </button>
          <button className="px-8 cursor-pointer py-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            Print Invoice
          </button>
          <button className="px-8 cursor-pointer py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Back to Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
