import React from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("RefreshToken")
      const res = await axios.post("http://localhost:3000/api/auth/logout",{
        refreshToken
      })
      console.log(res.data)
    } catch (error) {
      console.log(error);
      console.log(error.response)
      console.log(error.response?.data)
      console.log(error.response?.status)
    } finally {
      localStorage.removeItem("Token")
      localStorage.removeItem("RefreshToken")
      navigate("/")
    }
  }

  return (
    <div>
      <h1>Welcome Admin</h1>
      <Button variant='moi' onClick={handleLogout}>Se deconnecter</Button>
    </div>
  )
}

export default Dashboard
