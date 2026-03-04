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
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex justify-between items-center mb-6 bg-secondary">
        <h1 className="text-3xl uppercase font-bold  text-primary ">SMILE-STORE</h1>
      <div className="flex justify-center my-6">
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


      {loading ? (
        <div className="text-center text-xl bg-accent">Loading products...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4 bg-accent">
          {products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl flex justify-center align-items-center ml-10 mt-10 mr-5 ">
              <figure>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="font-semibold">₹ {product.price}</p>
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
  );
}

export {Home};
