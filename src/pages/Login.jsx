import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Loader2 } from 'lucide-react'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const handleEmail = (e)=>{
        setEmail(e.target.value) 
    }
     const handlePassword = (e)=>{
        setPassword(e.target.value) 
    }

    const dataPost = {
        email : email,
        password : password
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        setSuccess('')
        setIsLoading(true)

        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', dataPost)
            console.log(res.data);
            
            
            const token = res.data.token
            const refreshToken = res.data.refreshToken
             if (token) {
                localStorage.setItem('Token', token)
                localStorage.setItem('RefreshToken', refreshToken)
             }     
             
            const userRole = res.data.user.role
       
            setSuccess('Compte creer avec success ! preparation de la connexion')

            setTimeout(()=>{
                if (userRole === "ADMIN") {
                    navigate('/dashboard')
                } else{
                    navigate('/blogs')
                }
                
            }, 1000)

        } catch (error) {
            setError(error.response?.data?.message || 'Une erreur est survenue') 
        } finally{
            setEmail('')
            setPassword('')
            setIsLoading(false)
        }

    }




  return (
   <>

    <main className='w-screen h-screen flex flex-col justify-center items-center'>
        <form action="" onSubmit={handleSubmit}  className='w-[40%] p-5 bg-green-100 flex gap-5 flex-col items-center' >

            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" id='email' className='border-2 p-1 rounded' name={email} onChange={handleEmail}/>
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" id='password'  className='border-2 p-1 rounded' name={password} onChange={handlePassword}/>
            </div>


            <div>
                <button
                className={`px-4 py-2 text-white rounded bg-blue-400 flex items-center gap-2 cursor-pointer hover:scale-95`}
                disabled={isLoading}
                >{isLoading ? (
                    <>
                        <Loader2 className='w-5 h-5 animate-spin'/>
                        <span>Connexion en cours...</span>
                    </>
                ):('Connexion')
                
                }</button>
            </div>

            <div>
                <span>Pas encore de compte ? <Link to={'/signup'} className='text-blue-500'>Creez un compte</Link></span>
            </div>

       

        </form>
    



     </main>
    



    
    {/* <form action="">
        <div>
            <label htmlFor="email">Email : </label>
            <input type="email" id='email'/>
        </div>

        <div>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' />
        </div>

        

        <div>
            <button>Connexion</button>
        </div>

        <div>
            <span>Pas encore de compte ? <Link to={'/signup'} className='text-blue-500'>Creez un compte</Link></span>
        </div>

    </form> */}

   
   </>
  )
}

export default Login
