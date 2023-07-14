import { getAllClass, filterTypeExercise, orderByPrice } from "../global/clasesSlice/clasesSlice";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../components/Cards.jsx";
import estilo from '../modules/homePage.module.css'
import Paginado from "./paginado/paginado";
import { useAuth } from "../context/authContext";
// import clases from '../jsonClases.js'

export default function HomePage() {
  
  const auth = useAuth();
  const {displayName} = auth.user;

  const auth = useAuth();
  const {displayName} = auth.user;

  const clases = useSelector((state) => state.clases.list)
  const dispatch = useDispatch()
  const [defaultExercise, setDefaultExercise] = useState('filterPorDefect');
  const [defaultOrder, setDefaultOrder] = useState('porDefecto')
  //const filter = useSelector((state) => state.clasesF.clasesF); //Filtrados
  //const filter = useSelector((state) => state.order.precios ) //Ordenamiento

  

  useEffect(() => {
    dispatch(getAllClass())
  }, [])

  //LÓGICA PAGINADO
  const [currentPag, setCurrentPag] = useState(1);
  const [cantidadPorPag] = useState(5);
  const indiceUltimaReceta = currentPag * cantidadPorPag
  const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
  const currentClases = clases.slice(indicePrimerReceta, indiceUltimaReceta)

  const paginado = (pageNumber) => {
    setCurrentPag(pageNumber)
  }
  //FIN 

  const handleFilterExercises = (event) => {
    dispatch(filterTypeExercise(event.target.value))
    setCurrentPag(1);
    setDefaultExercise(`${event.target.value}`)
  }

  const handleOrderPrice = (event) => {
    event.preventDefault();
    dispatch(orderByPrice(event.target.value))
    setCurrentPag(1);
    setDefaultOrder(`${event.target.value}`)

  }
  const clearFilters = () => {
    window.location.reload();
    setCurrentPag(1);
    setDefaultOrder('porDefecto')
    setDefaultExercise('filterPorDefect')
  };
  return (
    <>
      <h1>HomePage</h1>
      {displayName && <h1>Hello!! {displayName}</h1>}
      <div className={estilo.contenedor}>
        <Paginado cantidadPorPag={cantidadPorPag}
          clases={clases.length}
          paginado={paginado} />
      </div>

      <div>
        <div className={estilo.contenedor}>
          <select className={estilo.select} onChange={event => handleOrderPrice(event)}>
            <option value='porDefecto'>Ordenar por precio</option>
            <option value='Mayor'>Mayor</option>
            <option value='Menor'>Menor</option>
          </select>
          <select className={estilo.select} onChange={event => handleFilterExercises(event)}>
            <option value='filterPorDefect'>Seleccionar filtro</option>
            <option value='Abdomen'>Abdomen</option>
            <option value='Brazos'>Brazos</option>
            <option value='Gluteos'>Gluteos</option>
            <option value='Pierna'>Pierna</option>
          </select>
        </div>

        <div className={estilo.contenedor}>
          <button onClick={clearFilters} className={estilo.boton}>LIMPIAR FILTROS</button>
        </div>

      </div>

      <Cards clases={currentClases} />
    </>
  );
}