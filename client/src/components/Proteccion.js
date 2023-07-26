import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAuth } from "../context/authContext";

export  function Proteccion() {
  const navigate = useNavigate();
  const auth = useAuth();
  const user = useSelector(state=> state.user.user)
  useEffect(() => {
    if (!user.idUser && !auth.user ) navigate("/");
    
  });
 
}
