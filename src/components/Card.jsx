import React from 'react'

export default function Card({name, metier, experience}) {
  return (
    <div>
        <h1>Nom : {name}</h1>
        <p>Metier : {metier}</p>
        <p>Experience : {experience} ans d'experience</p>
        <p>Statut : 
            <span className={`${experience >= 6 ? 'text-green-400' : 'text-red-500' } } `}>
                {experience >= 6 ? 'senior': 'junior'}
            </span> </p>

        <br />

    </div>
  )
}
