import React from 'react'
import { Modal } from './Modal';

export const PokeData = ({id, name, img, base_experience, height,powers, type, weight}) => {
    const data={id, name, img,base_experience, height,powers, type, weight };
    return (
        <div className='card cardPokemon animate__animated animate__bounce' >
            <div className='imgPokemon'>
                <img src={img} alt={name}/> 
            </div>
            <div class="card-body">
                <h5 class="card-title">#{id} { name }</h5>
                <div>
                    {type?.map((tp)=>{
                        return <span className='type' key={tp.id}> Tipo: {tp.name}</span>;
                    })}
            
                </div> 
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#pokeModal">Tarjeta Personal</button>
            </div>
            <Modal data = {data}  />

        </div>
    )
}

export default PokeData;