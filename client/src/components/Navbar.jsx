import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useAuth } from "../context/authContext";
// import SearchBar from "./SearchBar/SearchBar";
import style from "../modules/navbar.module.css";
import Cart from "./Carrito/Cart";

export default function Navbar() {
  
  const auth = useAuth();
  // funcion para cerrar session
  const handleSignout = () => {
    auth.logout();
    // dispatch(signOut());
  };

  return (
    <nav className={style.navBar}>
      <NavLink to="/">
        <h1 className={style.marca}>OnlyTrainers</h1>
      </NavLink>
      {auth.user ? (
        <>
          <div>
            {/* Rutas de usuario logeado */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trainingnew">NuevaRutina</NavLink>
            {/* <NavLink to="/training">DetalleRutina</NavLink> */}
            <NavLink to="/training/5">DetalleRutina</NavLink>
            <NavLink to="/profile">perfil</NavLink>
            
            <NavLink to="/" onClick={() => handleSignout()}>
              Logout
            </NavLink>
          </div>
          <Cart/>
        </>
      ) : (
        <>
          <div>
            {/* rutas usarios sin logearse */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Sign in</NavLink>
            <NavLink to="/register">Sign up</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            {/* <NavLink to="/alternativeProfile">altPerfil</NavLink> */}
            {/*Solo es una vista.*/}
            {/* <NavLink to="/paycheck">Pagos</NavLink> */}
          </div>
        </>
      )}
    </nav>
  );
}