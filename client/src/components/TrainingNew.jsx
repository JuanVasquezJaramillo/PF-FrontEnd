import {useState } from "react" 
import { postPlan } from "../global/clasesSlice/postPlan"; 
import { useDispatch, useSelector } from 'react-redux';
const TrainingNew =()=>{
    const dispatch = useDispatch()

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
            title: "titulo requerido",
            publicDescription: "Descripcion publica requerida",
            privateDescription:"Descripcion privada requerida",
            price: "Precio requerido",
            tags:"Tags requerido",
             
         
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
    const [inputs,setInputs]=useState(
        {
            idUser:"154dab00-b81d-4bdc-892a-ad7acda6929d",
            title: "",
            publicDescription: "",
            privateDescription:"",
            price: "",
            tags:"",
            video:"",
            publico:"",
            description:"",
             videos:[]
        }
    )
 const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(postPlan(inputs))
        console.log(inputs)

         
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
        // <main>
             
            <form onSubmit={handleSubmit} >
                <h1>Crear Nuevo Plan</h1><br /><br />
                <div>
                    
                    <input onChange={handleChange} placeholder='Titulo de tu Entrenamiento...' type="text" name="title"  />  <br />
                    {errors.title? <span>{errors.title}</span>: null}
                                     
                </div>
                <br />   
                <div>
                   
                    <input onChange={handleChange} placeholder='Descripcion Publica de  entrenamiento...' type="text" name="publicDescription"  />   <br />
                   {errors.publicDescription? <span>{errors.publicDescription}</span>: <span></span> }         
                </div>
                <br />   
                <div>
                   <input onChange={handleChange} placeholder='Descripcion Privada de entrenamiento...' type="text" name="privateDescription"  />  <br />
                    {errors.privateDescription? <span>{errors.privateDescription}</span>: <span></span> }         
                </div>
                <br />   

                <div>
                   <input onChange={handleChange} placeholder='Ingrese el precio...' type="text" name="price"  /> <br />    
                   {errors.price? <span>{errors.price}</span>: <span></span> }   
                </div> <br />

                <select name="tags" onChange={handleChange}>
                <option value="">-</option>
                    <option value="Natacion">Natacion</option>
                    <option value="Futbol">Futbol</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Meditacion">Meditacion</option>
                    <option value="Ejercicio fisico">Ejercicio fisico</option>
                    <option value="Ajedrez">Ajedrez</option>
                    <option value="Boxeo">Boxeo</option>
                    <option value="	Ciclismo de ruta">	Ciclismo de ruta</option>
                </select>
                {errors.tags? <span>{errors.tags}</span>: <span></span> }   
                <br /> <br />
               

                <div>       
                
                    <input  onChange={handleChange}  type="text" placeholder='Ingrese la url del video...' name="video"  />
                   
                    <input  onChange={handleChange}  type="text" placeholder='Descripcion del video' name="description"  />   
                       
                    <button type="button" onClick={() => handleSubirVideo()}>Subir</button> 
                    {inputs.videos.length !== 0
                        ?
                            <div>
                                {
                                    inputs.videos.map((video,index) => (
                                        
                                        <h2 key={index}>•  {video.url}       {video.description}</h2>
                                        
                                    ))
                                }
                            
                            </div>
                        :
                            null
                    }   
                </div>
                
                               
                <input disabled={disable()} type="submit"/>
                
            </form>
           
        // </main>
    )
    
}
export default TrainingNew;