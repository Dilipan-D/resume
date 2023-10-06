import { useEffect } from "react";

export const FunctionOne = ()=>{

    useEffect(()=>{
       return ()=>{
        console.log("This is function unmount");
       } 
      },[])

    return(
        <>
            <div>This is FunctionOne</div>
        </>
    )
}