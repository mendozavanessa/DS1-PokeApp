import React, { useState }  from "react";
import Navbar from "./components/Navbar";
import AddPoke from "./components/AddPoke";
import PokeCard from "./components/PokeCard";
import { useCounter } from "./hooks/useCounter";





export const PokedexApp = () => {

    const {counter,increment,decrement,reset,setCounter} = useCounter();
   

    
    return (
        <div>
            <Navbar />
            <div className="pagination">
                <span onClick={decrement} class="previous"><i class="fas fa-arrow-circle-left"></i></span>
                <span onClick={reset} class="home"><i class="fas fa-home"></i></span>
                <span onClick={increment } class="next"><i class="fas fa-arrow-circle-right"></i></span>
            </div>
            <hr/>

             <AddPoke setPoke = { setCounter }/>     
            <ol className="contenedor">
                {
                    counter.map( (pokemon) =>
                        
                         < PokeCard
                            key = { pokemon }
                            pokemon = { pokemon }
                        />
                        
                    )

                } 

            
            </ol> 
            
        </div>
    )
}
