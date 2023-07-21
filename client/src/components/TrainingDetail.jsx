import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Carrousel from "./carrousel";
import style from "../modules/TrainingDetail.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../global/clasesSlice/clasesSlice";

const TrainingDetail = () => {
  const dispatch = useDispatch();
  const {idPlan} = useParams();
  console.log(idPlan)
  const [plan, serPlan] = useState({})
  useEffect(() => {
   const URL_BASE='http://127.0.0.1:5000/plan' 
   axios(`${URL_BASE}/${idPlan}`)
    .then(response=>serPlan(response.data))}
    
    , []);
  const handleBorrar = async ()=>{
    const URL_BASE='http://127.0.0.1:5000/plan'
    axios.delete(`${URL_BASE}?idPlan=${idPlan}`)
    .then(response=>serPlan(response.data))
    .catch(error => {
      console.error(error.message);
   })
 };
 const handleAdd = (plan) => {
  dispatch(addProduct(plan))
 }
  return (
    <div className={style.container}>
      {plan[0]?.title ? ( 
        <div className={style.descripcionTraining}> 

          {plan[1] ? <Carrousel videos={plan[1]} /> : null}
          <div className={style.datos}>
            <button onClick={() => handleBorrar()} className={style.button}>
              borrar plan
            </button>
            <p className={style.parrafos}>Entrenador: {plan[0].userName}</p>
            <p className={style.parrafos}>{plan[0].publicDescription}</p>
            <p className={style.parrafos}>{plan[0].privateDescription}</p>
            <p className={style.parrafos}>Precio: {plan[0].price}</p>
            <p className={style.parrafos}>Etiquetas: {plan[0].tags}</p>
          </div>
          <textarea
            name="comentario"
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe un comentario a tu instructor"
          ></textarea>

          <button onClick={() => handleAdd(plan)}>Añadir a carrito de compras</button>
        
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
export default TrainingDetail;
