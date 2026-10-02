import React, { useState } from 'react'
import Content from './composants/Content'
import Sidebar from './composants/Sidebar'
import { Menu } from './composants/Menu'

function AppNav() {
    const [active, setActive] = useState(0)
    const taille = Menu.length

    const handleSuiv = ()=>{
        setActive((active + 1) % taille)
    }
    const handlePrec = ()=>{
        setActive((active)=>(active + taille-1) % taille)
    }

  return (
    <>
    <main className='w-screen h-screen flex'>
        <Sidebar active={active} handleSuiv={handleSuiv} handlePrec={handlePrec}/>
        <Content active={active}/>
    </main>
    
    </>
  )
}

export default AppNav
