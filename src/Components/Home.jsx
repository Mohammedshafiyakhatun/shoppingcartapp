import React from 'react'
import  { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
 
  const [products, setProducts] = useState([]);
 const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const addToCart = (products) => {
    const updatedCart = [...cart, products];
    setCart(updatedCart);
  };

  const goToCart = () => {
    navigate("/cart", { state: { cart } });
  };
const gotodash=()=>{
  navigate("/dashboard");
}

  return (
    <div className="min-h-screen  bg-blue-100 p-6 flex flex-col ">
      <div className="flex justify-between items-center mb-6 ml-6 bg-white rounded-lg shadow-md p-4">
        <h1 className="text-3xl uppercase font-bold text-primary">SMILE-STORE</h1>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered input-primary w-full max-w-md"
          />
          <button className="btn btn-warning" onClick={gotodash}>dashboard</button>
        </div>
        <button
          onClick={goToCart}
          className="badge badge-primary p-4 text-lg cursor-pointer"
        >
          Cart: {cart.length}
        </button>
      </div>

      <div className="flex flex-1 justify-center  ">
        {loading ? (
          <div className="text-center text-xl">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
            {products.map((product) => (
              <div key={product.id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                <figure>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-56 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg">{product.title}</h2>
                  <p className="font-semibold text-primary">₹ {product.price}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-secondary"
                      onClick={() => addToCart(product)}
                    >
                      - Add +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export {Home};
