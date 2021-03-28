import './App.css';
import React, {useState,useEffect} from 'react';
import Pokemon from './Pokemon'

function App() {
  const [query,setQuery] = useState('ditto');
  const [search,setSearch] = useState('');
  const [pokemon,setPokemon] = useState('');
  
  useEffect( () => {
    getPokemon();
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );
    const data = await response.json();
    setPokemon(data);
    console.log(pokemon.sprites.other["official-artwork"]["front_default"]);
    
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" onChange={updateSearch}></input>
        <button className="search-button">Search</button>
      </form>
      <div className="display">
        <Pokemon
            key={pokemon.name}
            image={pokemon.sprites.other["official-artwork"]["front_default"]}
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
        />
      </div>
    </div>
  );
}

export default App;
