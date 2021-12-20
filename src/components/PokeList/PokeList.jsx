import React from "react";
import Card from "./Card/Card";

const PokeList = (props) => {
  
  const paintPokemons = () =>{   
    return props.dataPokemon.map((item,i)=> <Card info={item} key={i}/>)
  }
  
 
  return <div>
    {paintPokemons()}

  </div>;
};

export default PokeList;
