"use client"
import { useState, createContext, useEffect } from "react"; 
import { faker } from '@faker-js/faker'
import { getAuth } from "@clerk/nextjs/server";

export const TinderContext = createContext();

  
  

export const TinderProvider = ({children}) => {
    const [cardsData, setCardsData] = useState([])
    const [currentAccount, setCurrentAccount] = useState()
    const [currentUser, setCurrentUser] = useState()
    // useEffect(() => {
    //   handler()
    // }, [])
    
    return (
        <TinderContext.Provider value={{}}>
            {children}
        </TinderContext.Provider>
    )
}
