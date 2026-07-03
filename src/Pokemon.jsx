import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Pokemon() {
    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([])
    const [chargement, setChargement] = useState(true)
    const [erreur, setErreur] = useState(null)


    useEffect(()=>{
        const fetchPokemon = async()=>{
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15/') 
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
    if (chargement) return <p>Chargement des pokemons ...</p>
    if (erreur) return <p>{erreur}</p>


  return (
    <>
    <div className='w-screen h-screen'>
        <h1>Liste des Pokemons</h1>
        <div className='w-full bg-green-100 flex flex-wrap gap-5 p-5'>
            {pokemons.map((pokemon)=>(
                <div key={pokemon.id} onClick={()=>navigate(`/detail/${pokemon.name}`)} className='shadow-2xl p-3 rounded-2xl transition-all cursor-pointer hover:scale-95'>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>#{pokemon.id} - {pokemon.name}</p>
                </div>
            ))}
        </div>

    </div>
    
    
    </>
  )
}

export default Pokemon
