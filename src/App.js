/* eslint-disable */
import './App.css';
import {useState, useEffect} from 'react';
import Pokemon from './pokemon';
import OnsearchPokemon from './OnSearchPokemon';

function App() {

  const[searchPokemon, setsearchPokemon] = useState('')
  const[namePokemon, setnamePokemon] = useState('')
  const[imgPokemon, setimgPokemon] = useState('')

  useEffect(() => {
 
    if(searchPokemon){
      let url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      const fetchDataApi = async () => {
          const data = await fetch(url).then(response => response.json())
          setnamePokemon(data.name)
          setimgPokemon(data.sprites.other.dream_world.front_default)
      }
      fetchDataApi()
    }
  },[searchPokemon])

  return (
    <div className="App">
      <header className="App-header" >
      <OnsearchPokemon className="inputPokemon" Onsearch={setsearchPokemon}/>
      <Pokemon className="imgPokemon" name={namePokemon} imgUrl={imgPokemon}/>
      </header>
    </div>
  )
}

export default App;


   
 
