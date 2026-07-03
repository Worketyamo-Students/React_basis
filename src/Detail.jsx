import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
    const {nom} = useParams()
    const navigate = useNavigate()
    const [pokemons, setPokemons] = useState([])
    const [chargement, setChargement] = useState(true)


    useEffect(()=>{
        const fetchDetail = async()=>{
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nom}`)
                const data = res.data

                setPokemons(data)
                
            } catch (error) {
                navigate('/pokemon')
            }finally{
                setChargement(false)
            }
        }

        fetchDetail()
    }, [nom])

    if (chargement) return <p>Chargement de {nom} ...</p>

  return (
    <>
        <main className='w-screen h-screen flex flex-col justify-center items-center gap-10'>

        <div className='bg-white p-3 shadow-2xl shadow-blue-950 rounded-2xl w-[50%] flex flex-col justify-center items-center'>
            <img src={pokemons.sprites.front_default} alt={pokemons.name} className='w-[30%]' />
            <h2 className='font-bold text-2xl underline'>#{pokemons.id} - {pokemons.name}</h2> <br />

            <h3 className='font-bold text-blue-500 text-xl'>Types : </h3>
            {pokemons.types.map((t)=>(
                <span key={t.type.name} className='p-1 m-2 bg-blue-300 rounded'>
                    {t.type.name}
                </span>
            ))}
            <h3 className='font-bold text-blue-500 text-xl'>Statistiques : </h3>
            {pokemons.stats.map((s)=>(
                <p key={s.stat.name} className='text-amber-950'>
                    {s.stat.name} : <span className='text-red-500'>{s.base_stat}</span>
                </p>
            ))}

        </div>
        <button 
        onClick={()=>navigate('/pokemon')}
        className='px-4 py-2 bg-blue-500 rounded cursor-pointer transition-all text-white hover:scale-95'
        
        >Retour</button>


        </main>
    </>
  )
}

export default Detail
