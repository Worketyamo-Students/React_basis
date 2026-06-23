import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import { Link } from 'react-router-dom'
import {z} from 'zod'
// import avatar11 from './assets/avatar11.png'
// import avatar12 from './assets/avatar12.png'
// import avatar13 from './assets/avatar13.png'

const joueurSchema = z
.string()
.min(3, {message: 'Minimum 3 caracteres'})
.max(15, {message:'maximum 12 caracteres'})

function App() {
  const [state, functionState] = useState([
    {id: 1, name: 'Ronaldo'},
    {id: 2, name: 'Ronaldihno'},
    {id: 3, name: 'Messi'}
  ])

  const [name, setName] = useState('')
  const [error, setError] = useState('')


  const handleChange = (e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setError('')
    const nameNettoye = name.trim()
    const nameValid = joueurSchema.safeParse(nameNettoye)
    if (!nameValid.success) {
      setError(nameValid.error.format()._errors[0])
      return
    }

    const copySate = [...state]
    const id = new Date().getTime()
    const nom = nameNettoye
    copySate.push({id:id, name:nom})
    functionState(copySate)

    setName('')
    
  }

  const handleDelete = (id)=>{
    const state1= [...state]
    const newState = state1.filter(e=>e.id !== id)
    functionState(newState)
  }

  return (
    <main className='w-screen h-screen flex flex-col gap-5 justify-center items-center'>
      <form action="submit" onSubmit={handleSubmit}>
        <input 
         type="text" 
         value={name}
         onChange={handleChange}
         placeholder='Entrer un footbaleur' 
         className='border-2 px-4 py-2 rounded border-green-300'
         />
        <button
          className='px-4 py-2 bg-blue-500 text-white ml-5 rounded transition-all cursor-pointer hover:scale-95'>Enregistrer</button>
        
      </form>
      {error && <span className='text-red-500'>{error}</span> }

      <div className='w-200 flex flex-col justify-center items-center p-8  gap-8 bg-green-200'>
        <h1 className='font-bold text-2xl'>Vos grands joueurs de foot</h1>
      <ul>{state.map( (e)=>(
        <div key={e.id} className='mt-5 flex justify-center items-center gap-8'>
          <li className=''>{e.name}</li>
          <button className='px-4 py-2 p-2 bg-green-600 rounded text-white transition-all cursor-pointer hover:scale-95' onClick={()=>handleDelete(e.id)}>Delete</button>
        </div>
          
        
      ))}</ul>
    </div>
    <Link to={'/'}>Accueil</Link>
    </main>
    
  )
}

export default App
