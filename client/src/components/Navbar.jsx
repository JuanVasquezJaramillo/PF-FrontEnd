import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [name, setName] = useState('');
    const handleChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  };
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/login'>Sign in</NavLink>
      <NavLink to='/register'>Sign up</NavLink>
      <NavLink to='/trainingnew'>NuevaRutina</NavLink>
      <NavLink to='/training'>DetalleRutina</NavLink>
      <NavLink to='/profile'>perfil</NavLink>
      <div style={{display:"flex", justifyContent:'center'}}>
      <input style={{display:'block', fontSize: '16px', width:'400px', maxWidth:'100%', boxSizing:'border-box', border:'1px solid #aaa', borderRadius:'.3em', cursor:'text', padding: '.4em 1.4em .3em .8em'}} type="search" placeholder="Buscar..." onChange={event => handleChange(event)} value={name} ></input>
      <button style={{display: 'block', cursor: 'pointer', border: '1px solid #aaa'}}>Buscar</button>
      </div>
  </nav>
  );
}