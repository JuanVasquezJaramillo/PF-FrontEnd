import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Carrousel from "./carrousel";
import style from "../modules/TrainingDetail.module.css";

const TrainingDetail = () => {
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
  return (
    <div className={style.container}>
      {plan.title ? ( 
        <div className={style.descripcionTraining}> 

          {plan.videos ? <Carrousel videos={plan.videos} /> : null}
          <div className={style.datos}>
            <button onClick={() => handleBorrar()} className={style.button}>
              borrar plan
            </button>
            <p className={style.parrafos}>Entrenador: {plan.userName}</p>
            <p className={style.parrafos}>{plan.publicDescription}</p>
            <p className={style.parrafos}>{plan.privateDescription}</p>
            <p className={style.parrafos}>Precio: {plan.price}</p>
            <p className={style.parrafos}>Etiquetas: {plan.tags}</p>
          </div>
          <textarea
            name="comentario"
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe un comentario a tu instructor"
          ></textarea>
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
export default TrainingDetail;
