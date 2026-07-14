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
        if (error.response?.status === 401) {
          console.log('Token expire, veuillez vous reconnecter !!');

          try {
            const refreshToken = localStorage.getItem('RefreshToken')
            const resRefresh = await axios.post(`http://localhost:3000/api/auth/refresh`, {refreshToken})
            console.log(resRefresh.data.accesToken);

            const newToken = resRefresh.data.accesToken
            localStorage.setItem('Token', newToken)

            const Retryres = await axios.get('http://localhost:3000/api/blog', {
              headers: {Authorization: `Bearer ${newToken}`}
            })
            //setBlog
            console.log(Retryres.data);
               
            
          } catch (errorRefresh) {
            console.log('Refresh token expire, reconnexion obligatoire');
            localStorage.removeItem('Token')
            localStorage.removeItem('RefreshToken')
            navigate('/login')
            
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
