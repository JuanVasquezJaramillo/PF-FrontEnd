import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/authContext";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const auth = useAuth();
  const dispatch = useDispatch()

  const [name, setName] = useState("");

  const userAcces = useSelector((state) =>  state.user.access)

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  // funcion para cerrar session
  const handleSignout = () => {
    auth.logout();
    dispatch(signOut())
  }

  return (
    <nav>
      {userAcces? (
        <>
          {/* Rutas de usuario logeado */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trainingnew">NuevaRutina</NavLink>
          <NavLink to="/training">DetalleRutina</NavLink>
          <NavLink to="/profile">perfil</NavLink>
          <NavLink to="/" onClick={() => handleSignout()}>Logout</NavLink>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              style={{
                display: "block",
                fontSize: "16px",
                width: "400px",
                maxWidth: "100%",
                boxSizing: "border-box",
                border: "1px solid #aaa",
                borderRadius: ".3em",
                cursor: "text",
                padding: ".4em 1.4em .3em .8em",
              }}
              type="search"
              placeholder="Buscar..."
              onChange={(event) => handleChange(event)}
              value={name}
            ></input> 
            <button
              style={{
                display: "block",
                cursor: "pointer",
                border: "1px solid #aaa",
              }}>
              Buscar
            </button>
          </div>
        </>
      ) : (
        <>
          {/* rutas usarios sin logearse */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </>
      )}
    </nav>
  );
}
