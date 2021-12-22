import React from "react";
import './Form.css'

const Form = (props) => {

 const handleChange = (event) => {
    event.preventDefault();
    const search = event.target.value
    props.setSearch(search)
console.log(search)
  
  
   

    
  }


  return <div>
    <h1 className="title">Busca tu Pokemon</h1>
  <form className="formulario">

    <input className="redondeado" type="text" id="search" name="search"onChange={handleChange} required="required" /><br />
   

    </form>

  </div>;

};

export default Form;
