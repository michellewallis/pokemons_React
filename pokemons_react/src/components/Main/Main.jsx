import React, { useState, useEffect } from 'react';
import Form from "../Form/Form";
import PokeList from "../PokeList"
import axios from "axios";
import { Routes,Route } from "react-router-dom";



const Main = () => {

  const [input, setInput] = useState("");// estado inicial del input
  const [pokemon, setPokemon ] = useState({}); // estado inicial de pokemon

  const setSearch = (search) => {
  

  setInput({search}) // Rellena estado user

  }


const pokeFetch= async (parametro) =>{
  
  const pokemon = parametro.search


  const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

  return resp
   
}


useEffect(() => {
  pokeFetch(input).then(data=>console.log(data))
},[input]);


  return( <main>

    <Routes>
      <Route path="/" element={<Form setSearch={setSearch} />}/>
       <Route path="/list" element={<PokeList/>} />
    </Routes>

  </main>)
};

export default Main;
