import React from 'react';

export const Modal = ({data}) => {
    const {id, name, img, base_experience, height,powers, type, weight} = data;
    return(

        <>
        <div class="modal fade" id="pokeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{id} {name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className='imgModal'><img src={img} alt={name} /></div>
                        <ul>
                            <li>Experiencia base: {base_experience}</li>
                            <li>Altura: {height}</li>
                            <li>Peso: {weight}</li>
                            <li>Habilidades:
                                <ul>
                                    {powers?.map((ab) => {
                                    return <li key={ab.id}>{ab.name}</li>;
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div></>
    )
    
};
