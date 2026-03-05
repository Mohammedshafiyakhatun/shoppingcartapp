import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 border-b pb-4">
                    <figure className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="rounded-lg h-full w-full object-cover"
                      />
                    </figure>
                    <div className="flex-1">
                      <h2 className="font-bold text-lg">{item.title}</h2>
                      <p className="text-gray-500 text-sm">Qty: 1</p>
                      <p className="font-bold text-primary mt-2">₹ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{item.title.substring(0, 20)}...</p>
                        <p className="text-xs text-gray-500">Qty: 1</p>
                      </div>
                      <p className="font-bold">₹ {item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">₹ {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            className="btn btn-outline flex-1"
            onClick={() => navigate("/home")}
          >
            Back to Home
          </button>
          <button
            className="btn btn-primary flex-1"
            onClick={() => navigate("/payment", { state: { cart } })}
          >
            Proceed with Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export {Cart};