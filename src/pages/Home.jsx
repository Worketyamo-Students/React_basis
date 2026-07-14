import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { CardDemo } from './AdminLongin'
import { HoverCardDemo } from '@/composants/Btn_over'

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
    <CardDemo/>
    <HoverCardDemo/>


    <Button variant='destructive'>Button</Button>




    </div>

   </>
  )
}

export default Home
