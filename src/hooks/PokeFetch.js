import { useEffect,useState } from "react";
import { getPokemon } from "../helpers/getPokemon";



export const PokeFetch = (pokemon) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{
        getPokemon(pokemon)
            .then( imgs => {
                
                setTimeout(() => {
                    // console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    },1000);
                });
            });
        
    },[pokemon])

    

    return state;
}

