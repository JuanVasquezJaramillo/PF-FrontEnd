<<<<<<< HEAD
import { getAllClases } from "../global/clasesSlice/clasesSlice"; 
import Cards from "../components/Cards";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
export default function HomePage() {

  const clases = useSelector((state) => state.clases.list)


const dispatch = useDispatch()
=======
import { getAllClases } from "../global/clasesSlice/clasesSlice";
import Cards from "../components/Cards.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import clases from '../jsonClases.js'
import Paginado from "./paginado/paginado";
import { useState } from "react";
import { filterTypeExercise } from "../global/filterSlice/filterSlice";
import { orderByPrice } from "../global/orderSlice/orderSlice";
import estilo from '../modules/homePage.module.css'

export default function HomePage() {

  //const clases = useSelector((state) => state.clases.list) 
  const dispatch = useDispatch()
  const [defaultExercise, setDefaultExercise] = useState('filterPorDefect');
  const [defaultOrder, setDefaultOrder] = useState('porDefecto')
  //const filter = useSelector((state) => state.clasesF.clasesF); //Filtrados
  const filter = useSelector((state) => state.order.precios ) //Ordenamiento
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298

  useEffect(() => {
    dispatch(getAllClases())
  }, [])
<<<<<<< HEAD
=======
  
  //LÓGICA PAGINADO
  const [currentPag, setCurrentPag] = useState(1);
  const [cantidadPorPag] = useState(2);
  const indiceUltimaReceta = currentPag * cantidadPorPag
  const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
  const currentClases = filter.slice(indicePrimerReceta, indiceUltimaReceta)

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

>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298

  return (
    <>
      <h1>HomePage</h1>
<<<<<<< HEAD
      
      <Cards  clases = {clases}/>
=======
      <div className={estilo.contenedor}>
      <Paginado cantidadPorPag={cantidadPorPag}
        clases={filter.length}
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
          <button  onClick={clearFilters} className={estilo.boton}>LIMPIAR FILTROS</button>
        </div>

      </div>

      <Cards clases={currentClases} />
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298
    </>
  );
}