import React from "react";
import './Card.css'

const Card = ({info}) => {

  const {name,imagen} = info
  return (

    
  
  <div className="card">
        <h1>Hola soy el pokemon:</h1>
          <h2>{name}</h2>
          <img src={imagen} alt="imagen pokemon"/> 

          </div>
  )         
};

export default Card;
