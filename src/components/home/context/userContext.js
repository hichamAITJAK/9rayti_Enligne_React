import {  createContext, useEffect, useState } from "react";

export const UserClient = createContext({})

export default function UserProvider({children}){
    const [auth,setauth] = useState({})
    useEffect(()=>{
        const MyUser = JSON.parse(localStorage.getItem("user1"))
        
        if(MyUser){
            setauth(MyUser)
        }
    },[])
    return(
        <UserClient.Provider value={{auth,setauth}}>
            {children}
        </UserClient.Provider>
    )
}