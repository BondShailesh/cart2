import { useState } from "react";
import { createContext } from "react"

export const Context = createContext();

export const ContextProvider = ({children})=>{
let [cartitem,setCartItem] = useState(0)
 const handleCartnum = ()=>{
    setCartItem(cartitem+1)
 }
    return (
    <Context.Provider value={{ cartitem , handleCartnum}}>{children}</Context.Provider>
    )
}