import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      Welcome <br />
      <Link to={'/joueurs'}>Allez vesr les jouers</Link>

    </div>
  )
}

export default Home
