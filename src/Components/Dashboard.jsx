import React from 'react'
import {useNavigate} from "react-router-dom"
import {useParams} from 'react-router-dom'

 function Dashboard() {
  const navigate = useNavigate();
  const gotohome=()=>{
    navigate("/");
  };
    
  return (
    <div className='card m-50 p-20 flex justify-center align-items-center  bg-error ' >

      <h1 className=' itallic font-bold text-2xl align-items-center'>Dashboard</h1>
      
      <button  className='bg-success-content text-white padding-20 mt-20' onClick={gotohome}> Logout</button>
      
      
    </div>
  )
}
export {Dashboard}