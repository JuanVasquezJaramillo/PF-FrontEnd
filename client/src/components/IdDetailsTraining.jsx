import { useEffect, useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById } from '../global/clasesSlice/clasesSlice';
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import style from "../modules/idDetailsTraining.module.css";
import { deletePlan } from "../global/clasesSlice/DeletePlan.js";

const IdDetailsTraining = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id])
  
  const detailsPlan = useSelector((state) => state.clases.list)


//  const descriptionPrueba = detailsPlan[1]
const title = detailsPlan[0]?.title;

// datos del primer array
  
  
  const publicDescription = detailsPlan[0]?.publicDescription;
  const privateDescription = detailsPlan[0]?.privateDescription;
  const price = detailsPlan[0]?.price;
  const tags = detailsPlan[0]?.tags;
// datos del segundo array 



  const description    = detailsPlan[1]?.[0]?.description;
  
  
  const idVideo    = detailsPlan[1]?.[0]?.idVideo    ;
  const publico    = detailsPlan[1]?.[0]?.publico;
  const url    = detailsPlan[1]?.[0]?.url;


  const descriptionuno   =detailsPlan[1]?.[1]?.description;  
  const urluno    = detailsPlan[1]?.[1]?.url;
  const descriptiondos   =detailsPlan[1]?.[2]?.descriptiondos;  
  const urldos   = detailsPlan[1]?.[2]?.urldos;

  
  
// datos del tercer array   
          
 const idUser    = detailsPlan[2]?.idUser; 
const userName  = detailsPlan[2]?.userName; 

const [inputs,setInputs]=useState(
  {
      title:"",
      publicDescription: "",
      privateDescription:"",
      price: "",
      tags:"",
      video:"",
      publico:"",
      description:""
  }
)


// probar con funcion asyncrona
// const numbers = descriptionPrueba
// const listItems = numbers.map((number) =>
//   <li key={number.idVideo}>{number.url}</li>
// );



  
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
      <form onSubmit={handleSubmit} className={style.form}>
        <h1>Detalle del Plan</h1>

        <input
           onChange={...handleChange}
          placeholder="Titulo de tu Entrenamiento..."
          type="text"
          name="title"
            value={title}
          className={style.input}
          />

        {errors.title ? <span>{errors.title}</span> : null}

        <input
          onChange={handleChange}
          placeholder="Descripcion Publica de  entrenamiento..."
          type="text"
          name="publicDescription"
          value={publicDescription}
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
          name="description"
          value={privateDescription}
          className={style.input}
        />
        {errors.privateDescription ? <span>{errors.privateDescription}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
          type="text"
          name="price"
          value={price}
          className={style.input}
        />
        {errors.price ? <span>{errors.price}</span> : <span></span>}

        <select name="tags" onChange={handleChange} value={tags}>
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
          placeholder="Ingrese la descripcion Video uno.."
          type="text"
          name="description"
          value={description} 
          className={style.input}
          
        />
        {errors.description ? <span>{errors.description}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el la url para modificar..."
          type="text"
          name="url"
          value={url}
          className={style.input}
        />
        {errors.url ? <span>{errors.url}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese descripcion video 2..."
          type="text"
          name="description"
          value={descriptionuno}
          className={style.input}
        />
        {errors.descriptionuno ? (
          <span>{errors.descriptionuno}</span>
        ) : (
          <span></span>
        )}

        <input
          onChange={handleChange}
          placeholder="Ingrese el la url..."
          type="text"
          name="urluno"
          value={urluno}
          className={style.input}
        />
        {errors.urluno ? <span>{errors.urluno}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Usuario..."
          type="text"
          name="userName"
          value={userName}
          className={style.input}
        />
       
        <button>Actualizar</button> <button  >Eliminar</button>
      </form>

     
    </div>
  );
};
export default IdDetailsTraining;








// import { useEffect, useState } from "react";
// import { postPlan } from "../global/clasesSlice/postPlan.js";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { getById } from '../global/clasesSlice/clasesSlice';
// import { useLocalStorage } from "../hooks/useLocalStorage.js";
// import style from "../modules/idDetailsTraining.module.css";
// import { deletePlan } from "../global/clasesSlice/DeletePlan.js";

// const IdDetailsTraining = () => {
  
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getById(id));
//   }, [dispatch, id])
  
//   const detailsPlan = useSelector((state) => state.clases.list)

// //  const descriptionPrueba = detailsPlan[1]

// // datos del primer array
//   const title = detailsPlan[0]?.title;
 
//   const publicDescription = detailsPlan[0]?.publicDescription;
//   const privateDescription = detailsPlan[0]?.privateDescription;
//   const price = detailsPlan[0]?.price;
//   const tags = detailsPlan[0]?.tags;
// // datos del segundo array 



//   const description    = detailsPlan[1]?.[0]?.description;
  
  
//   const idVideo    = detailsPlan[1]?.[0]?.idVideo    ;
//   const publico    = detailsPlan[1]?.[0]?.publico;
//   const url    = detailsPlan[1]?.[0]?.url;


//   const descriptionuno   =detailsPlan[1]?.[1]?.description;  
//   const urluno    = detailsPlan[1]?.[1]?.url;
//   const descriptiondos   =detailsPlan[1]?.[2]?.descriptiondos;  
//   const urldos   = detailsPlan[1]?.[2]?.urldos;

  
  
// // datos del tercer array   
          
//  const idUser    = detailsPlan[2]?.idUser; 
// const userName  = detailsPlan[2]?.userName; 




// // probar con funcion asyncrona
// // const numbers = descriptionPrueba
// // const listItems = numbers.map((number) =>
// //   <li key={number.idVideo}>{number.url}</li>
// // );



  
//   const disable = () => {
//       let disabled = true;
//       for (let error in errors) {
//         if (errors[error] === "") disabled = false
//         else {
//           disabled = true
//           break
//         }
//       }
//       return disabled
//     }
  
    
//     const [errors,setErrors]=useState(
//       { 
//           title: "",
//           publicDescription: "",
//           privateDescription:"",
//           price: "",
//           tags:"",
           
       
//       }
//   )  
// const validate = (inputs, name) => {

//   if (name === "videos") {
//       const videosprueba = inputs.videos.url
//       console.log("aaaaaaaaaa", videosprueba)
//       if ( videosprueba !== "") setErrors({ ...errors, videosprueba: "" });
//       else setErrors({ ...errors, videosprueba: "campo requerido" });
//     }

//   if (name === "title") {
//     if (inputs.title !== "") setErrors({ ...errors, title: "" });
//     else setErrors({ ...errors, title: "campo requerido" });
//   }
//   if (name === "publicDescription") {
//     if (inputs.publicDescription !== "") setErrors({ ...errors, publicDescription: "" });
//     else setErrors({ ...errors, publicDescription: "campo requerido" });
//   }
//   if (name === "privateDescription") {
//     if (inputs.privateDescription !== "") setErrors({ ...errors, privateDescription: "" });
//     else setErrors({ ...errors, privateDescription: "campo requerido" });
//   }

//   else if (name === "price") {

//       const regexPreci = /^\d{1,18}(\.\d{1,2})?$/
//       if (inputs.price !== "")
//         setErrors({ ...errors, price: "" })
//       else {
//         setErrors({ ...errors, price: "rating  requerido" })
//         return
//       }
//         if (regexPreci.test(inputs.price)) setErrors({ ...errors, price: "" })
//       else setErrors({ ...errors, price: "Formato no valido para numeros" })

//     } if (name === "tags") {
//     if (inputs.tags !== "") setErrors({ ...errors, tags: "" });
//     else setErrors({ ...errors, tags: "Campo requerido" });
//   } };
  
//   const [inputs,setInputs]=useState(
//       {
//           title:"",
//           publicDescription: "",
//           privateDescription:"",
//           price: "",
//           tags:"",
//           video:"",
//           publico:"",
//           description:""
//       }
//   )
// const handleSubmit=(event)=>{
//       event.preventDefault();
//       dispatch(deletePlan(id));
    
//  }

//   const handleChange=(event)=>{
     
//       setInputs({
//           ...inputs,
//           [event.target.name]: event.target.value
//         })
//         validate({
//           ...inputs,
//           [event.target.name]: event.target.value
//         }, event.target.name)
//   }
 
//   // const handleSubirVideo=()=>{
//   //     setInputs(
//   //         {
//   //             ...inputs,                
//   //             videos:[...inputs.videos,{url:inputs.video,description:inputs.description, publico:true}],
//   //             video:"",
//   //             description:""
//   //         }
//   //          )    
//   // }
//   return (
//     <div className={style.formContainer}>
//       <form onSubmit={handleSubmit} className={style.form}>
//         <h1>Detalle del Plan</h1>

//         <input
//            onChange={handleChange}
//           placeholder="Titulo de tu Entrenamiento..."
//           type="text"
//           name="title"
//            value={title}
//           className={style.input}

          
//         />
//         {errors.title ? <span>{errors.title}</span> : null}

//         <input
//           onChange={handleChange}
//           placeholder="Descripcion Publica de  entrenamiento..."
//           type="text"
//           name="publicDescription"
//           value={publicDescription}
//           className={style.input}
//         />
//         {errors.publicDescription ? (
//           <span>{errors.publicDescription}</span>
//         ) : (
//           <span></span>
//         )}

//         <input
//           onChange={handleChange}
//           placeholder="Descripcion Privada de entrenamiento..."
//           type="text"
//           name="description"
//           value={description}
//           className={style.input}
//         />
//         {errors.description ? <span>{errors.description}</span> : <span></span>}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="price"
//           value={price}
//           className={style.input}
//         />
//         {errors.price ? <span>{errors.price}</span> : <span></span>}

//         <select name="tags" onChange={handleChange} value={tags}>
//           <option value="">-</option>
//           <option value="Natacion">Natacion</option>
//           <option value="Futbol">Futbol</option>
//           <option value="Yoga">Yoga</option>
//           <option value="Meditacion">Meditacion</option>
//           <option value="Ejercicio fisico">Ejercicio fisico</option>
//           <option value="Ajedrez">Ajedrez</option>
//           <option value="Boxeo">Boxeo</option>
//           <option value="	Ciclismo de ruta"> Ciclismo de ruta</option>
//         </select>
//         {errors.tags ? <span>{errors.tags}</span> : <span></span>}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="description"
//           value={description} // muestra los datos que llegan de la base de datos, pero no me deja modificar, 
//           className={style.input}
          
//         />
//         {errors.description ? <span>{errors.description}</span> : <span></span>}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="url"
//           value={url}
//           className={style.input}
//         />
//         {errors.url ? <span>{errors.url}</span> : <span></span>}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="description"
//           value={descriptionuno}
//           className={style.input}
//         />
//         {errors.descriptionuno ? (
//           <span>{errors.descriptionuno}</span>
//         ) : (
//           <span></span>
//         )}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="urluno"
//           value={urluno}
//           className={style.input}
//         />
//         {errors.urluno ? <span>{errors.urluno}</span> : <span></span>}

//         <input
//           onChange={handleChange}
//           placeholder="Ingrese el precio..."
//           type="text"
//           name="userName"
//           value={userName}
//           className={style.input}
//         />
       
//         <button>Actualizar</button> <button  >Eliminar</button>
//       </form>

      
//     </div>
//   );
// };
// export default IdDetailsTraining;
