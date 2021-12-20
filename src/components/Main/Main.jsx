import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import PokeList from "../PokeList"
import axios from "axios";
import { Routes,Route } from "react-router-dom";
import { useDebounce } from "use-debounce";


const Main = () => {

  const [input, setInput] = useState("");// estado inicial del input
  const [debouncedText] = useDebounce(input, 2000);
  const [pokemon, setPokemon ] = useState([]); // estado inicial de pokemon

  const setSearch = (search) => {
  setInput(search) // Rellena estado user

  }


const pokeFetch= async () =>{
  
  // const poke = parametro.search


  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debouncedText.toLowerCase()}`);

  const pokeApi = {
    name: resp.data.species.name,
    imagen: resp.data.sprites.front_default
  }
  
  setPokemon([...pokemon,pokeApi]) // Rellena estado user

   
}


useEffect(() => {
  pokeFetch()
},[debouncedText]);


  return( <main>

    <Routes>
      <Route path="/" element={<Form setSearch={setSearch} />}/>
       <Route path="/list" element={<PokeList dataPokemon={pokemon}/>} />
    </Routes>

  </main>)
};

export default Main;
