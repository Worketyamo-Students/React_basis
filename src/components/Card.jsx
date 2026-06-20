import React from 'react'

export default function Card({name, metier, experience, logo}) {
  return (
    <div>
        <img src={logo} alt={name} width={50} height={50}/>
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
