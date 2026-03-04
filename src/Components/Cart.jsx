import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                <img
                  src={item.thumbnail}   
                  alt={item.title}
                  className="rounded-xl h-40 object-cover"
                />
              </figure>
               
              <div className="card-body">
                
                
                <h2 className="card-title">{item.title}</h2>
                <p>₹ {item.price}</p>
                 
              </div>
            </div>
          
          ))}
        </div>
         )}

      <button
        className="btn btn-primary mt-6"
        onClick={() => navigate("/home")}
      >
        Back to Home
      </button>
    </div>
  );
}

export {Cart};