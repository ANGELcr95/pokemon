/* eslint-disable */
import './OnSearchPokemon.css';
import { useState } from 'react';

const OnsearchPokemon = ({className, Onsearch}) => {
    const[value, setvalue] = useState('')
    
    return(
        <div className={className}>
            <h1>Elige tu Pokemon</h1>
            <input 
            type="text"  
            placeholder="name pokemon"
            value={value}
            onChange={(e) =>{
                setvalue(e.target.value)
            }}
            />
            <button onClick={() =>{
                Onsearch(value)
            }}>Search</button>
        </div>
    )
}

export default OnsearchPokemon;