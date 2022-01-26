import React from 'react'
import { PokeFetch } from '../hooks/PokeFetch'
import PokeData from './PokeData'

export const PokeCard = ({pokemon}) => {

    const {data , loading} = PokeFetch(pokemon);
    
    
    return (
        <>{
            loading
            ?
            (
                !data==null?
                <div className='card alert alert-dark text-center'>
                Loading...
                 </div>
                :
                <div className='alert alert-dark text-center'>
                    El pokemon no se encontro 😭
                </div>
                 
            
            )
            :
            (
                <div>
                {
                                
                        < PokeData
                            key= { data.id}
                            {...data}
                        />
                        
                    
                }
            </div>
            )
         }
        </>
    )

}

export default PokeCard;
