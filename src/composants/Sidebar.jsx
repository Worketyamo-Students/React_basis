import React from 'react'
import { Menu } from './Menu'

function Sidebar({handleSuiv, handlePrec, active}) {
  return (
    <div className='bg-blue-950 flex-1 flex flex-col'>
      <div className='flex-3 flex flex-col pl-8 pt-10 gap-5'>
            {
                Menu.map((m, index)=>(
                <div key={m.id}>
                    <h1 className={`${active === index ? 'font-bold text-white text-[1.1rem]': ''}`}>{m.title}</h1>
                    <p className={`${active === index ? 'text-amber-100': 'text-gray-500'}`}>{m.description}</p>
                </div>
            ))
            }
      </div>


      <div className='flex-1 flex items-end justify-around pb-6'>
            <button onClick={handlePrec} className='px-4 py-2 bg-green-700 text-white rounded-2xl hover:cursor-pointer hover:scale-95'>Precedent</button>
            <button onClick={handleSuiv} className='px-4 py-2 bg-green-700 text-white rounded-2xl hover:cursor-pointer hover:scale-95'>Suivant</button>

      </div>
    </div>
  )
}

export default Sidebar
