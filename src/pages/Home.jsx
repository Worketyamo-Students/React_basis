import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate()

  return (
   <>
     <div>

    Welcome home

    <div className='flex gap-4 p-5'>
      <button className='px-4 py-2 bg-blue-500 cursor-pointer text-white rounded transition-all hover:scale-95'>Voir les blogs</button>
      <button 
      className='transition-all cursor-pointer hover:scale-95'
      onClick={()=>navigate('/login')}
      >se Connecter</button>
    </div>




    </div>

   </>
  )
}

export default Home
