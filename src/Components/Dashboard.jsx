import React from 'react'
import {useNavigate} from "react-router-dom"
import {useParams} from 'react-router-dom'

 function Dashboard() {
  const navigate = useNavigate();
  const gotohome=()=>{
    navigate("/");
  };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

  <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">

    <h1 className="italic font-bold text-2xl border-2 border-blue-500 p-2 mb-4">
      Dashboard
    </h1>

    <button
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      onClick={gotohome}
    >
      Logout
    </button>

  </div>

</div>
  )
}
export {Dashboard}