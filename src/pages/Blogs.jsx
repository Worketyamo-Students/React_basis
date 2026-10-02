import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function Blogs() {

  const navigate = useNavigate()

  useEffect(()=>{
    const fetchBlog = async()=>{
      const token = localStorage.getItem('Token')
      try {
        const res = await axios.get('http://localhost:3000/api/blog', {
          headers: {Authorization: `Bearer ${token}`}
        })
        //setBlog
         console.log(res.data);
        
      } catch (error) {
        console.log(error);
        console.log(error.response)
        console.log(error.response?.data)
        console.log(error.response?.status)
              
        if(error.response?.status === 401){
          try {
            // localStorage.removeItem("Token")
            const RefreshToken = localStorage.getItem("RefreshToken")
            console.log(RefreshToken)
            const token = await axios.post("http://localhost:3000/api/auth/refresh", {
              refreshToken: RefreshToken
            })
            console.log(token)
            localStorage.setItem("Token", token.data.accesToken)
            const newToken = token.data.accesToken
            const res = await axios.get('https://blog-backend-3nrb.onrender.com/api/blog', {
              headers: {Authorization: `Bearer ${newToken}`}
           })
           console.log(res.data);
           
          } catch (error) {
            console.log(error);
            console.log(error.response)
            console.log(error.response?.data)
            console.log(error.response?.status)

            
              localStorage.removeItem("RefreshToken")
              localStorage.removeItem("Token")
              navigate("/")
            
          }
        }
      }
    }

fetchBlog()

  },[])

  return (
    <div>
      hello blog
      
    </div>
  )
}

export default Blogs
