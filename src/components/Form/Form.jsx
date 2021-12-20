import React from "react";

const Form = (props) => {

 const handleChange = (event) => {
    event.preventDefault();
    const search = event.target.value
    props.setSearch(search)
console.log(search)
  
  
   

    
  }


  return <div>
    <h1>Busqueda de un Pokemon</h1>
  <form>

    <input type="text" id="search" name="search"onChange={handleChange} required="required" /><br />
   

    </form>

  </div>;

};

export default Form;
