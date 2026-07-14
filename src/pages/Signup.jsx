import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const handleName = (e)=>{
        setName(e.target.value)  
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value) 
    }
     const handlePassword = (e)=>{
        setPassword(e.target.value) 
    }

    const dataPost = {
        email : email,
        password : password,
        name : name
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        setSuccess('')
        setIsLoading(true)

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signup', dataPost)
            console.log(res.data);
            
            setSuccess('Compte creer avec success ! preparation de la connexion')

            setTimeout(()=>{
                navigate('/login')
            }, 1000)

        } catch (error) {
            setError(error.response?.data?.message || 'Une erreur est survenue') 
        } finally{
            setName('')
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
                <label htmlFor="name">Name : </label>
                <input type="text" id='name' className='border-2 p-1 rounded' value={name} onChange={handleName}/>
            </div>
        
            <div>
                <label htmlFor="email">Email : </label>
                <input type="email" id='email' className='border-2 p-1 rounded' value={email} onChange={handleEmail}/>
            </div>

            <div>
                <label htmlFor="password">Password : </label>
                <input type="password" id='password'  className='border-2 p-1 rounded' value={password} onChange={handlePassword}/>
            </div>

        

            <div>
                <button
                    className={`px-4 py-2 text-white rounded bg-blue-400 flex items-center gap-2 cursor-pointer hover:scale-95`}
                    disabled={isLoading}
                >{isLoading ? (
                    <>
                        <Loader2 className='w-5 h-5 animate-spin'/>
                        <span>Creation du compte en cours...</span>
                    </>
                ):('Creer un compte')

                }
                   
                </button>
            </div>

       

        </form>
    



     </main>
    
    </>
  )
}

export default Signup
