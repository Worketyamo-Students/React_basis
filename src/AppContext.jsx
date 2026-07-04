import React from 'react'
import { useUtilisateur } from './UserContext.jsx'
import { useNavigate } from 'react-router-dom'


function AppContext() {

    const navigate = useNavigate()
    const {utilisateur, setUtilisateur} = useUtilisateur()


  return (
    <div>
        <p>Like:, {utilisateur}</p>
        <button onClick={()=>setUtilisateur(utilisateur+1)}>Liker</button>

        <br />
        <button
        onClick={()=>navigate('/pokemon')}
        >Voir les pokemons</button>
    </div>
    
  )
}

export default AppContext
