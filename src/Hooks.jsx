import React, { useState } from 'react'
import { useRef, useEffect, useMemo } from 'react'

const Blogs = [
    {id:1, auteur: 'Brice'},
    {id:2, auteur: 'Patrick Boma'},
    {id:3, auteur: 'Bertrand legrand'},
    {id:4, auteur: 'Junior Mbassa'},
    {id:5, auteur: 'Jean-charles casteleto'},
    {id:6, auteur: 'Emmanuel dubois'},
    {id:7, auteur: 'Georges ebode'},
    {id:8, auteur: 'Leopol francis'},
    {id:9, auteur: 'Gilbert du couteau'},
    {id:10, auteur: 'Franceska peresse'},
]

function Hooks() {
    const [valeur, setValeur] = useState('')
    const [step, setStep] = useState(0)
  
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    
    const BlogFilter = useMemo(()=>{
        console.log('Je filtre les blogs');
        return Blogs.filter(b => b.auteur.toLowerCase().includes(valeur.toLowerCase()))
        
    }, [valeur])


    

    

    
  return (
    <div>
        <input ref={inputRef} value={valeur} type="text" placeholder='recherchez un blog...' onChange={(e)=>setValeur(e.target.value)} />
        <p>Blogs : {BlogFilter.length} trouves </p>
        <ul>
            {BlogFilter.map(b => <li key={b.id}>{b.auteur}</li>)}
        </ul>

        <span>{step}</span><br />
        <button onClick={()=>setStep(step+1)}>Ajouter au panier</button>
    </div>
  )
}

export default Hooks
