import { useState } from "react"


export const useCounter = (initialState = [1,2,3,4,5,6,7,8,9]) => {

    const [counter, setCounter] = useState(initialState)
    //Definir Funciones
    const increment = ( )=>{
        if(counter.length>1){
        setCounter( counter?.map((e)=>{
            return e+9;
        }) )
        }
        else{
            setCounter( counter?.map((e)=>{
                return parseInt(e)+1;
            }) )
        };
    }

    const decrement = ( )=>{
        if (counter[0]>1){
            if(counter.length>1){
            setCounter( counter?.map((e)=>{
                return e-9;
            }) );
            }
            else{
                setCounter( counter?.map((e)=>{
                    return parseInt(e)-1;
                }) )}
        }
    }

    const reset = ()=>{
        setCounter(initialState);
    }
    return{
        counter,
        increment,
        decrement,
        reset,
        setCounter
    }
}