import React from 'react'
import { createContext, useState, useContext } from 'react'

const userContext = createContext()

export function UserProvider({children}){

    const [utilisateur, setUtilisateur] = useState(0)

    
    return (
        <userContext.Provider value={{utilisateur, setUtilisateur}}>
            {children}
            
        </userContext.Provider>
    )
}


 export function useUtilisateur(){
    return useContext(userContext)
 }




