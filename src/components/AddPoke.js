import React, {useState} from 'react';
import PropTypes  from 'prop-types' ;

export const AddPoke = ({ setPoke }) => {
    const[ inputValue, setInputValue] = useState('');
        

    const handleInputChange = (e) =>{
            setInputValue(e.target.value );
            
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.length > 0) {
            setPoke( poke => [ inputValue]);
            setInputValue('');
            console.log(inputValue);
        }
           
    }
    
    
    return (

        <form class="row justify-content-md-center" onSubmit={ handleSubmit }>
            <div class="col-6">
                <div>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder='&#xf002; Buscar pokemon por nombre o id'
                        value = { inputValue }
                        onChange={ handleInputChange }
                    />
                </div>
            </div>
            <div >
                <button type="submit" class="btn btn-primary btn-lg">Buscar</button>
            </div>
        </form>
        
    )
}

AddPoke.protoTypes = {
    setPoke: PropTypes.func.isRequired
}

export default AddPoke;
