import {
  getAllClass,
  filterTypeExercise,
  orderByPrice,
  filterPrice,
} from "../global/clasesSlice/clasesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../components/Cards.jsx";
import estilo from "../modules/homePage.module.css";
import Paginado from "./paginado/paginado";
import { useAuth } from "../context/authContext";
import SearchBar from "../components/SearchBar/SearchBar";
import Swal from "sweetalert2";
import { resetList } from "../global/clasesSlice/clasesSlice"
// import { resetList } from "../global/clasesSlice/clasesSlice"
// import clases from '../jsonClases.js'

export default function HomePage() {
  const auth = useAuth();
  const { displayName } = auth.user;

  const { list: clases } = useSelector(state => state.clases);
  const dispatch = useDispatch();
  const [defaultExercise, setDefaultExercise] = useState("");
  const [defaultOrder, setDefaultOrder] = useState("");
  const [defaultPrice, setDefaultPrice] = useState({ min: "", max: "" });
  //const filter = useSelector((state) => state.clasesF.clasesF); //Filtrados
  //const filter = useSelector((state) => state.order.precios ) //Ordenamiento

  // console.log("Homepage", clases);

  useEffect(() => {
    dispatch(getAllClass());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //LÓGICA PAGINADO
  const [currentPag, setCurrentPag] = useState(1);
  const [cantidadPorPag] = useState(5);
  const indiceUltimaReceta = currentPag * cantidadPorPag;
  const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag;
  const currentClases = clases.slice(indicePrimerReceta, indiceUltimaReceta);

  const paginado = (pageNumber) => {
    setCurrentPag(pageNumber);
  };
  //FIN

  const handleFilterExercises = (event) => {
    dispatch(filterTypeExercise(event.target.value));
    setCurrentPag(1);
    setDefaultExercise(`${event.target.value}`);
  };

  const handleFilterPrice = (event) => {
    event.preventDefault();
    setDefaultPrice({
      ...defaultPrice,
      [event.target.name]: event.target.value
    });
    
  }

  const submitFilterPrice = (event) => {
    event.preventDefault();
    if (+defaultPrice.min < +defaultPrice.max) {
      dispatch(filterPrice({ min: +defaultPrice.min, max: +defaultPrice.max }));
      setCurrentPag(1);
      setDefaultPrice({ min: 0, max: 0})
    } else {
      Swal.fire({
      title: "Filter by price",
      text: "Precio min debe ser menor a precio max",
      icon: "info",
      timer: 3000
    })
    }
  }

  const handleOrderPrice = (event) => {
    event.preventDefault();
    dispatch(orderByPrice(event.target.value));
    setCurrentPag(1);
    setDefaultOrder(`${event.target.value}`);
  };
  const clearFilters = () => {
    dispatch(resetList());
    setCurrentPag(1);
    setDefaultOrder("");
    setDefaultExercise("");
  };
  return (
    <>
      <section className={estilo.hero}>
        {displayName && (
          <h1 className={estilo.saludoHome}>Hello!! {displayName}</h1>
        )}
        <div className={estilo.divHero}>
          <h2 className={estilo.tituloHero}>
            {" "}
            ¡Entrená desde tu casa o en donde quieras!{" "}
          </h2>
          <p className={estilo.parrafoHero}>
            Somos only trainers, funcionamos como interemediarios entre vos y
            los entrenadores. Podés suscribirte al entrenador que prefieras y
            más se adapte a tus necesidades. Esperamos que disfrutes tu
            entrenamiento
          </p>
          <SearchBar />
        </div>
      </section>

      <div className={estilo.contenedor}>
        <Paginado
          cantidadPorPag={cantidadPorPag}
          clases={clases.length}
          paginado={paginado}
        />
      </div>

      <div>
        <div className={estilo.contenedor}>
          <select
            className={estilo.select}
            value={defaultOrder}
            onChange={(event) => handleOrderPrice(event)}
          >
            <option value="porDefecto">Ordenar por precio</option>
            <option value="Mayor">Mayor</option>
            <option value="Menor">Menor</option>
          </select>
          <select
            className={estilo.select}
            value={defaultExercise}
            onChange={(event) => handleFilterExercises(event)}
          >
            <option value="filterPorDefect">Seleccionar filtro</option>
            {/* <option value='Abdomen'>Abdomen</option>
            <option value='Brazos'>Brazos</option>
            <option value='Gluteos'>Gluteos</option>
            <option value='Pierna'>Pierna</option> */}
            <option value="Natacion">Natacion</option>
            <option value="Futbol">Futbol</option>
            <option value="Yoga">Yoga</option>
            <option value="Meditacion">Meditacion</option>
            <option value="Ejercicio fisico">Ejercicio fisico</option>
            <option value="Ajedrez">Ajedrez</option>
            <option value="Boxeo">Boxeo</option>
            <option value="	Ciclismo de ruta"> Ciclismo de ruta</option>
          </select>
          <label>
            <input placeholder="min" autoComplete="true" type="number" name="min" onChange={handleFilterPrice} />
            <input placeholder="max" autoComplete="true" type="number" name="max" onChange={handleFilterPrice} />
            <button onClick={submitFilterPrice} disabled={defaultPrice.min !== "" && defaultPrice.max !== "" ? false : true}>Filter</button>
          </label>
        </div>

        <div className={estilo.contenedor}>
          <button onClick={clearFilters} className={estilo.boton}>
            LIMPIAR FILTROS
          </button>
        </div>
      </div>

      <Cards clases={currentClases} />
    </>
  );
}
