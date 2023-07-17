import { useEffect, useState } from "react";
import { postPlan } from "../global/clasesSlice/postPlan.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById } from '../global/clasesSlice/clasesSlice';
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import style from "../modules/idDetailsTraining.module.css";


const IdDetailsTraining = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const detailsPlan = useSelector((state) => state.clases.list);
  //  const descriptionPrueba = detailsPlan[1]

  // datos del primer array
  const title = detailsPlan[0]?.title;
  const publicDescription = detailsPlan[0]?.publicDescription;
  const privateDescription = detailsPlan[0]?.privateDescription;
  const price = detailsPlan[0]?.price;
  const tags = detailsPlan[0]?.tags;
  // datos del segundo array

  const description = detailsPlan[1]?.[0]?.description;

  const idPlan = detailsPlan[1]?.[0]?.idPlan;
  const idVideo = detailsPlan[1]?.[0]?.idVideo;
  const publico = detailsPlan[1]?.[0]?.publico;
  const url = detailsPlan[1]?.[0]?.url;

  const descriptionuno = detailsPlan[1]?.[1]?.description;
  const urluno = detailsPlan[1]?.[1]?.url;
  const descriptiondos = detailsPlan[1]?.[2]?.descriptiondos;
  const urldos = detailsPlan[1]?.[2]?.urldos;

  // datos del tercer array

  const idUser = detailsPlan[2]?.idUser;
  const userName = detailsPlan[2]?.userName;

  // probar con funcion asyncrona
  // const numbers = descriptionPrueba
  // const listItems = numbers.map((number) =>
  //   <li key={number.idVideo}>{number.url}</li>
  // );

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
<<<<<<< HEAD
    
      
      const [errors,setErrors]=useState(
        { 
            title: "",
            publicDescription: "",
            privateDescription:"",
            price: "",
            tags:"",
             
         
        }
    )  
=======
    }
    return disabled;
  };

  const [errors, setErrors] = useState({
    title: "titulo requerido",
    publicDescription: "Descripcion publica requerida",
    privateDescription: "Descripcion privada requerida",
    price: "Precio requerido",
    tags: "Tags requerido",
  });
>>>>>>> 78eaf4b10d2b1692fafed01ff426f167e00140c6
  const validate = (inputs, name) => {
    if (name === "videos") {
      const videosprueba = inputs.videos.url;
      console.log("aaaaaaaaaa", videosprueba);
      if (videosprueba !== "") setErrors({ ...errors, videosprueba: "" });
      else setErrors({ ...errors, videosprueba: "campo requerido" });
    }

    if (name === "title") {
      if (inputs.title !== "") setErrors({ ...errors, title: "" });
      else setErrors({ ...errors, title: "campo requerido" });
    }
    if (name === "publicDescription") {
      if (inputs.publicDescription !== "")
        setErrors({ ...errors, publicDescription: "" });
      else setErrors({ ...errors, publicDescription: "campo requerido" });
    }
    if (name === "privateDescription") {
      if (inputs.privateDescription !== "")
        setErrors({ ...errors, privateDescription: "" });
      else setErrors({ ...errors, privateDescription: "campo requerido" });
    } else if (name === "price") {
      const regexPreci = /^\d{1,18}(\.\d{1,2})?$/;
      if (inputs.price !== "") setErrors({ ...errors, price: "" });
      else {
        setErrors({ ...errors, price: "rating  requerido" });
        return;
      }
      if (regexPreci.test(inputs.price)) setErrors({ ...errors, price: "" });
      else setErrors({ ...errors, price: "Formato no valido para numeros" });
    }
    if (name === "tags") {
      if (inputs.tags !== "") setErrors({ ...errors, tags: "" });
      else setErrors({ ...errors, tags: "Campo requerido" });

    } };
    const [inputs,setInputs]=useState(
        {
            idUser:"49ca9088-953d-4be5-b36e-902b4630438a",
            title: "",
            publicDescription: "",
            privateDescription:"",
            price: "",
            tags:"",
            video:"",
            publico:"",
            description:""
        }
    )
 const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(postPlan(inputs))
<<<<<<< HEAD
   }
=======
        console.log(inputs)

    }
  };
  const [inputs, setInputs] = useState({
    idUser: "154dab00-b81d-4bdc-892a-ad7acda6929d",
    title: "",
    publicDescription: "",
    privateDescription: "",
    price: "",
    tags: "",
    video: "",
    publico: "",
    description: "",
    videos: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPlan(inputs));
    console.log(inputs);
  };

>>>>>>> 78eaf4b10d2b1692fafed01ff426f167e00140c6

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
   
    const handleSubirVideo=()=>{
        setInputs(
            {
                ...inputs,                
                videos:[...inputs.videos,{url:inputs.video,description:inputs.description, publico:true}],
                video:"",
                description:""
            }
             )    
    }
    return(
      
    <main>
       <form onSubmit={handleSubmit} >
                <h1>Detalle del Plan</h1><br /><br />
                <div>
                    
                    <input onChange={handleChange} placeholder='Titulo de tu Entrenamiento...' type="text" name="title" value={title} />  <br />
                    {errors.title? <span>{errors.title}</span>: null}
                                     
                </div>
                <br />   
                <div>
                   
                    <input onChange={handleChange} placeholder='Descripcion Publica de  entrenamiento...' type="text" name="publicDescription" value={publicDescription} />   <br />
                   {errors.publicDescription? <span>{errors.publicDescription}</span>: <span></span> }         
                </div>
                <br />   
                <div>
                   <input onChange={handleChange} placeholder='Descripcion Privada de entrenamiento...' type="text" name="description" value={description} />  <br />
                    {errors.description? <span>{errors.description}</span>: <span></span> }         
                </div>
                <br />   

  const handleSubirVideo = () => {
    setInputs({
      ...inputs,
      videos: [
        ...inputs.videos,
        { url: inputs.video, description: inputs.description, publico: true },
      ],
      video: "",
      description: "",
    });
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1>Detalle del Plan</h1>

        <input
          onChange={handleChange}
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
          value={description}
          className={style.input}
        />
        {errors.description ? <span>{errors.description}</span> : <span></span>}

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
          placeholder="Ingrese el precio..."
          type="text"
          name="description"
          value={description}
          className={style.input}
        />
        {errors.description ? <span>{errors.description}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
          type="text"
          name="url"
          value={url}
          className={style.input}
        />
        {errors.url ? <span>{errors.url}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
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
          placeholder="Ingrese el precio..."
          type="text"
          name="urluno"
          value={urluno}
          className={style.input}
        />
        {errors.urluno ? <span>{errors.urluno}</span> : <span></span>}

        <input
          onChange={handleChange}
          placeholder="Ingrese el precio..."
          type="text"
          name="userName"
          value={userName}
          className={style.input}
        />
        <button>Actualizar</button>
      </form>

      {/*       
            <form  >
            <h1>Detalle  del plan</h1><br /><br />
                <h2 >Titulo </h2>
           <h4 >  {title}</h4> <br />
           
           <h2 >pDescripcion Publica </h2>
           <h4>{publicDescription}</h4> <br />
           <h2 >Descripcion Privada </h2>
           <h4>{privateDescription}</h4> <br />
           <h2 >Precio </h2>
           <h4>{price}</h4> <br />
           <h2 >Etiquetas </h2>
           <h4>{tags}</h4> <br />
           
           <h2 >Descripcion Video </h2>
           <h4>{description}</h4> <br /> 
           <h2 >Url de video </h2>
           <h4>{url}</h4> <br />


           <h2 >Descripcion Video </h2>
           <h4>{descriptionuno}</h4> <br /> 
           <h2 >Url de video </h2>
           <h4>{urluno}</h4> <br />
           <h2 >userName </h2>



          
           <h4>{descriptiondos}</h4> <br /> 
         
           <h4>{urldos}</h4> <br />
           <h4>{userName}</h4> <br />

                
                
                               
               <button>actualizar</button>
                
            </form> */}
    </div>
  );
};
export default IdDetailsTraining;
