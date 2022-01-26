// import React from 'react'

export const getPokemon = async (pokemon) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    const resp = await fetch(url);
    const data = await resp.json();
    const {id,name,base_experience,height,order, weight, abilities, sprites, types} = data;
    const img = sprites.other.dream_world.front_default;
    // console.log(resp);
    //  console.log(id);
    // console.log(name);
    //console.log(height);
    // console.log(sprites.front_default);
    // console.log(types);

    const type = types.map(tp =>{
        return{
            id: tp.slot,
            name: tp.type.name,
        }
    })
    const powers = abilities.map( ab => {
        return{
            id: ab.slot,
            name: ab.ability.name,
           
        }
    });

    // console.log(powers);
    // console.log(type);
    return{ 
        id, 
        name,
        base_experience,
        height,
        order,
        weight,
        img,
        powers,
        type
        
    };
}
