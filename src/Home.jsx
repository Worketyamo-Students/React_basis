import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate()

  return (
    <div>
      <button 
      className='px-4 py-2 bg-blue-500 rounded cursor-pointer font-bold text-white transition-all hover:scale-95'
      onClick={()=>navigate('/pokemon')

      }>Voir les pokemons</button>








      {/* <Link to={'/joueurs'}>Allez vesr les jouers</Link> */}

    </div>
  )
}

export default Home
