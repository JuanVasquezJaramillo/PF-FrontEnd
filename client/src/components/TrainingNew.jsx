import {useState } from "react" 
import validation from "./validation.js"
// import axios from 'axios';
import { useNavigate} from 'react-router-dom'
const TrainingNew =()=>{
    const navigate=useNavigate()
    const [trainingCreado,setTrainingCreado]=useState('')
    const [errors,setErrors]=useState(
        {
            titulo: "",
            descPublica: "",
        }
    )  
 
    const [training,setTraining]=useState(
        {
            titulo: "",
            idEntrenador:1,
            descPublica: "",
            descPrivada: "",
            precio: 0,
            etiquetas:"",
            videos:[]
        }
    )

    function createTraining(training) {
        const URL_BASE='http://127.0.0.1:3000'
        // axios.post(`${URL_BASE}/training`, training)
        // .then(response => {
        //     console.log(response.data)
        //     setTrainingCreado(response.data)

        // })
        // .catch(error => {
        //     console.log(error.response.data)
        //     setTrainingCreado(error.response.data)
        // });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
         createTraining(training)
    }
    const handleChange=(event)=>{
        let value= event.target.value
        setTraining(
            {
                ...training,
                [event.target.name]:value
            }
        )
        setErrors(validation({...training,[event.target.name]:event.target.value}))

    }
    const handleCancel=()=>{
        navigate('/home')
    }
    return(
        <div>
            {trainingCreado===''
            ?   
            <form onSubmit={handleSubmit} >
                <label>Crear nueva actividad</label><br /><br />
                <div>
                    <label htmlFor="">Titulo: </label>
                    <input onChange={handleChange} placeholder='Ingrese nombre del titulo...' type="text" name="titulo" value={training.titulo} />
                    {errors.titulo? <span>{errors.titulo}</span>: null}                    
                </div>
                <div>
                    <label htmlFor="">Descripcion: </label>
                    { <input onChange={handleChange} placeholder='Ingrese una descripcion de su entrenamiento...' type="text" name="descPublica" value={training.descPublica} /> }
                    {errors.descPublica? <span>{errors.descPublica}</span>: <span></span> }         
                </div>
                <div>
                    <label htmlFor="">Detalles: </label>
                    { <input onChange={handleChange} placeholder='Ingrese una descripcion detallada de su entrenamiento...' type="text" name="descPrivada" value={training.descPrivada} /> }        
                </div>
                <div>
                    <label htmlFor="">Etiquetas: </label>
                    { <input onChange={handleChange} placeholder='Ingrese palabras claves que serviran para encontrar tu entrenamiento...' type="text" name="etiquetas" value={training.etiquetas} /> }        
                </div>
                <div>
                    <label htmlFor="">Precio: </label>
                    { <input onChange={handleChange} placeholder='Ingrese el precio...' type="number" name="precio" value={training.precio} /> }        
                </div>

                <div>       
                    <label htmlFor="">Videos: </label>
                    <input  type="text" placeholder='Ingrese la url del video...' name="videos" value={training.videos} onChange={handleChange} />     
                </div>
                <button disabled ={errors.titulo || errors.descPublica} type="submit">Crear Entrenamiento</button>
                <button type="button" onClick={()=>handleCancel()}>Cancelar</button> 
            </form>
            :
            <div>
                <h2>{trainingCreado}</h2>
                <button onClick={() => setTrainingCreado('')}>Atras</button>
            </div>
            }
        </div>
    )
    
}
export default TrainingNew;