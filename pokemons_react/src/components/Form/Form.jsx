import React from "react";

const Form = (props) => {

 const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.search.value
    props.setSearch(search)

  
  
   

    
  }


  return <div>
    <h1>Busqueda de un Pokemon</h1>
  <form onSubmit={handleSubmit}>

    <input type="text" id="search" name="search" required="required" /><br />
    <button type="submit">Buscar</button>

    </form>

  </div>;

};

export default Form;
