import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PulseLoader,ClimbingBoxLoader} from 'react-spinners'
import { useUtilisateur } from './UserContext.jsx'

function Pokemon() {
    const navigate = useNavigate()
    const {utilisateur} = useUtilisateur()

    const [pokemons, setPokemons] = useState([])
    const [chargement, setChargement] = useState(true)
    const [erreur, setErreur] = useState(null)


    useEffect(()=>{
        const fetchPokemon = async()=>{
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon/') 
                const data = res.data.results
                const promesses = data.map((p)=> axios.get(p.url))
                
                const result = await Promise.all(promesses)
                // console.log(result);

                const details = result.map((r)=> r.data)
                // console.log(details);
                setPokemons(details)
                
                
            } catch (error) {
                setErreur("impossible de charger les Pokemons")   
            } finally{
                setChargement(false)
            }
        }

        fetchPokemon()
    }, [])
    if (chargement) {
        return (
            <div className='w-full min-h-screen bg-green-100 flex flex-col gap-4 items-center justify-center'>
                <PulseLoader color='#047857' size={15}></PulseLoader>
                <p className='text-shadow-emerald-800 font-semibold text-2xl animate-pulse'>
                    Chargement des pokemons en cours...
                </p>
            </div>
        )
    }
  
    if (erreur) return <p>{erreur}</p>


  return (
    <>
    <div className='w-screen min-h-screen'>
        <h1>Liste des Pokemons</h1>
        <div className='w-full bg-green-100 flex flex-wrap gap-5 p-5'>
            {pokemons.map((pokemon, index)=>(
                <div key={pokemon.id} onClick={()=>navigate(`/detail/${pokemon.name}`)}  style={{ animationDelay: `${index * 70}ms` }} className='bg-white shadow-xl p-4 rounded-2xl cursor-pointer flex flex-col items-center w-40 opacity-0
                               motion-safe:animate-[fadeInUp_0.6s_ease-out_forwards]
                               transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-300/40'>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>#{pokemon.id} - {pokemon.name}</p>
                </div>
            ))}
        </div>

    </div>

    <div>
           <p>Utilisateur:  {utilisateur}</p>
    </div>
    
    
    </>
  )
}

export default Pokemon
