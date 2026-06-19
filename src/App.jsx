import React, { useState } from 'react'
import Salutation from './components/Salutation'
import Card from './components/Card'


const produits = [
  {id:1, nom: 'T-shirt', prix: 25000, dispo: true},
  {id:2, nom: 'Jean', prix: 125000, dispo: false},
  {id:3, nom: 'Basket', prix: 14500, dispo: true},
  {id:4, nom: 'String', prix: 2000, dispo: false}
]



function App() {

  const [step, setStep] = useState(-1)

  const handleStep = ()=>{
    if (step <= produits.length -1) {   
      setStep(step+1)
    }
  }



  return (
    <div className='w-screen h-screen flex justify-center items-center gap-5'>
      <button onClick={handleStep} className='px-4 py-2 bg-blue-500 text-white cursor-pointer rounded transition-all hover:scale-95'>Precedent</button>
      {
        produits.map((prod, index)=>(
          <div key={prod.id} className={`w-50 h-50 p-5 border-2 flex flex-col gap-4 ${index <= step ? 'bg-amber-300 text-black': 'bg-blue-500 text-white scale-50'}`}>
            <h1>{prod.nom}</h1>
            <p>{prod.prix.toLocaleString()}</p>
            <span className={`${prod.dispo ? 'text-green-500':'text-red-500'}`}>{prod.dispo ? 'Disponible' : 'Epuise'}</span>
          </div>
        ))
      }
      <button onClick={handleStep} className='px-4 py-2 bg-blue-500 text-white cursor-pointer rounded transition-all hover:scale-95'>Suivant</button>
      

    </div>
  )
}

export default App
