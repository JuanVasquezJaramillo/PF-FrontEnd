import { useEffect, useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById, resetClase, updatePlan} from '../global/clasesSlice/clasesSlice';
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import style from "../modules/idDetailsTraining.module.css";
import { deletePlan } from "../global/clasesSlice/DeletePlan.js";




const IdDetailsTraining = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detailsPlan = useSelector((state) => state.clases.clase)
console.log("prueba1", detailsPlan)
 
  useEffect(() => {
    dispatch(getById(id));
    // return () => {
    //   dispatch(resetClase())
    // }
  }, [dispatch, id])


  const handleUpdate=(event)=>{
    event.preventDefault();
    dispatch(updatePlan(inputs)); 
    dispatch(getById(id));
    console.log("pronandooooo", detailsPlan)
  }


const [inputs,setInputs]=useState(
  {
    idPlan: id,
      title:detailsPlan.title,
      publicDescription: detailsPlan.publicDescription,
      privateDescription:detailsPlan.privateDescription,
      price: detailsPlan.price,
      tags:detailsPlan.tags,
      userName: detailsPlan.userName,
      videos: detailsPlan.videos
  }
)
console.log("VIDEOS",inputs.videos)
console.log("id", id)
  const disable = () => {
      let disabled = true;
      for (let error in errors) {
        if (errors[error] === "") disabled = false
        else {
          disabled = true
          break
        }
      }
      return disabled
    }
    const [errors,setErrors]=useState(
      { 
          title: "",
          publicDescription: "",
          privateDescription:"",
          price: "",
          tags:"",
           
       
      }
  )  
const validate = (inputs, name) => {

  if (name === "videos") {
      const videosprueba = inputs.videos.url
      console.log("aaaaaaaaaa", videosprueba)
      if ( videosprueba !== "") setErrors({ ...errors, videosprueba: "" });
      else setErrors({ ...errors, videosprueba: "campo requerido" });
    }

  if (name === "title") {
    if (inputs.title !== "") setErrors({ ...errors, title: "" });
    else setErrors({ ...errors, title: "campo requerido" });
  }
  if (name === "publicDescription") {
    if (inputs.publicDescription !== "") setErrors({ ...errors, publicDescription: "" });
    else setErrors({ ...errors, publicDescription: "campo requerido" });
  }
  if (name === "privateDescription") {
    if (inputs.privateDescription !== "") setErrors({ ...errors, privateDescription: "" });
    else setErrors({ ...errors, privateDescription: "campo requerido" });
  }

  else if (name === "price") {

      const regexPreci = /^\d{1,18}(\.\d{1,2})?$/
      if (inputs.price !== "")
        setErrors({ ...errors, price: "" })
      else {
        setErrors({ ...errors, price: "rating  requerido" })
        return
      }
        if (regexPreci.test(inputs.price)) setErrors({ ...errors, price: "" })
      else setErrors({ ...errors, price: "Formato no valido para numeros" })

    } if (name === "tags") {
    if (inputs.tags !== "") setErrors({ ...errors, tags: "" });
    else setErrors({ ...errors, tags: "Campo requerido" });
  } };



const handleSubmit=(event)=>{
      event.preventDefault();
      dispatch(deletePlan(id)); 
 }



  const handleChange=(event)=>{
     
      setInputs({
          ...inputs,
          [event.target.name]: event.target.value
        })
        validate({
          ...inputs,
          [event.target.name]: event.target.value
        }, event.target.name)
  }
 
 
  
  return (
    
    <div className={style.formContainer}>
      
      <form key={id.video} onSubmit={handleSubmit} className={style.form}>
        <h1>Detalle del Plan</h1>

        <input
           onChange={...handleChange}
          placeholder="Titulo de tu Entrenamiento..."
          type="text"
          name="title"
            value={inputs.title}
          className={style.input}
          />

        {errors.title ? <span>{errors.title}</span> : null}

        <input
          onChange={handleChange}
          placeholder="Descripcion Publica de  entrenamiento..."
          type="text"
          name="publicDescription"
          value={inputs.publicDescription}
          className={style.input}
        />
        {errors.publicDescription ? (
          <span>{errors.publicDescription}</span>
        ) : (
          <span></span>
        )}

        <input
          onChange={handleChange}
          placeholder="Descripcion Privada de entrenamiento..."
          type="text"
          name="privateDescription"
          value={inputs.privateDescription}
          className={style.input}
        />
        {errors.privateDescription ? <span>{errors.privateDescription}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
          type="text"
          name="price"
          value={inputs.price}
          className={style.input}
        />
        {errors.price ? <span>{errors.price}</span> : <span></span>}

        <select name="tags" onChange={handleChange} value={inputs.tags}>
          <option value="">-</option>
          <option value="Natacion">Natacion</option>
          <option value="Futbol">Futbol</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditacion">Meditacion</option>
          <option value="Ejercicio fisico">Ejercicio fisico</option>
          <option value="Ajedrez">Ajedrez</option>
          <option value="Boxeo">Boxeo</option>
          <option value="	Ciclismo de ruta"> Ciclismo de ruta</option>
        </select>
        {errors.tags ? <span>{errors.tags}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Usuario..."
          type="text"
          name="userName"
          value={inputs.userName}
          className={style.input}
        />






       
        <button type="button" onClick={handleUpdate}>Actualizar</button> <button type="submit" >Eliminar</button>
      </form>
   
     
    </div>

    
  );

  
};

export default IdDetailsTraining;





