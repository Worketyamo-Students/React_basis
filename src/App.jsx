import React, { useState } from 'react'
import Card from './components/Card'
// import avatar11 from './assets/avatar11.png'
// import avatar12 from './assets/avatar12.png'
// import avatar13 from './assets/avatar13.png'

function App() {
  const [state, functionState] = useState([
    {id: 1, name: 'Ronaldo'},
    {id: 2, name: 'Ronaldihno'},
    {id: 3, name: 'Messi'}
  ])

  const [name, setName] = useState('')

  const handleChange = (e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
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

      <div className='w-200 flex flex-col justify-center items-center p-8  bg-green-200'>
        <h1 className='font-bold text-2xl'>Vos grands joueurs</h1>
      <ul>{state.map( (e)=>(
        <li className='mt-5' key={e.id}>{e.name}</li>
      ))}</ul>


      {/* <Card name={'Bertrand'} metier={'Pousseur'} experience={4} logo={avatar11}/>
      <Card name={'Bertrand'} metier={'Pousseur'} experience={4} logo={avatar12}/>
      <Card name={'Bertrand'} metier={'Pousseur'} experience={4} logo={avatar13}/> */}
    </div>
    </main>
    
  )
}

export default App
