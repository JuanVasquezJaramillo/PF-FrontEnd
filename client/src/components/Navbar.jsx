import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/authContext";
import { signOut } from "firebase/auth";
import SearchBar from "./SearchBar/SearchBar";
import style from "../modules/navbar.module.css";

export default function Navbar() {
  const auth = useAuth();
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const userAcces = useSelector((state) => state.user.access);

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  // funcion para cerrar session
  const handleSignout = () => {
    auth.logout();
    dispatch(signOut());
  };

  return (
    <nav className={style.navBar}>
      <NavLink to="/">
        <h1 className={style.marca}>OnlyTrainers</h1>
      </NavLink>
      {userAcces ? (
        <>
<<<<<<< HEAD
          {/* Rutas de usuario logeado */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trainingnew">NuevaRutina</NavLink>
          
          <NavLink to="/training">DetalleRutina</NavLink>
=======
          <div className={style.linkContainer}>
            {/* Rutas de usuario logeado */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trainingnew">NuevaRutina</NavLink>
            <NavLink to="/training">DetalleRutina</NavLink>
>>>>>>> 6663ec1865c31eeb4ef050e028c681fbc5f2444b

            <NavLink to="/profile">perfil</NavLink>
            <NavLink to="/" onClick={() => handleSignout()}>
              Logout
            </NavLink>
          </div>
          <div className={style.logout}></div>
        </>
      ) : (
        <>
<<<<<<< HEAD
          {/* rutas usarios sin logearse */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/alternativeProfile">altPerfil</NavLink> {/*Solo es una vista.*/}
          <NavLink to="/paycheck">Pagos</NavLink> {/*Esto está solo para hacer más fácil el desarrollo. Borrar al terminar*/}
          <SearchBar/> {/*Añadido por Pablo, Searchbar funcional*/}
         
=======
          <div>
            {/* rutas usarios sin logearse */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Sign in</NavLink>
            <NavLink to="/register">Sign up</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/alternativeProfile">altPerfil</NavLink>{" "}
            {/*Solo es una vista.*/}
            <NavLink to="/paycheck">Pagos</NavLink>{" "}
            {/*Esto está solo para hacer más fácil el desarrollo. Borrar al terminar*/}
          </div>
>>>>>>> 6663ec1865c31eeb4ef050e028c681fbc5f2444b
        </>
      )}
    </nav>
  );
}
