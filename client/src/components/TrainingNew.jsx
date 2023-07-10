import {useState } from "react" 
import validation from "./validationTrainingNew.js"
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
            video:"",
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
    const handleSubirVideo=()=>{
        setTraining(
            {
                ...training,                
                videos:[...training.videos,{url:training.video,descripcion:"",publico:false}],
                video:""
            }
            
        )
        console.log(training.videos)//el video debe ser:[{url:"asdf",publico:true,descripcion:"sdf"},{url:"avvsdf",publico:true,descripcion:"svvvdf"}]
    }
    return(
        <main>
            {trainingCreado===''
            ?   
            <form onSubmit={handleSubmit} >
                <h1>Crear nueva actividad</h1><br /><br />
                <div>
                    <label htmlFor=""></label>
                    <input onChange={handleChange} placeholder='Ingrese nombre del titulo...' type="text" name="titulo" value={training.titulo} />
                    {errors.titulo? <span>{errors.titulo}</span>: null}                    
                </div>
                <div>
                    <label htmlFor=""></label>
                    { <input onChange={handleChange} placeholder='Ingrese una descripcion de su entrenamiento...' type="text" name="descPublica" value={training.descPublica} /> }
                    {errors.descPublica? <span>{errors.descPublica}</span>: <span></span> }         
                </div>
                <div>
                    <label htmlFor=""></label>
                    { <input onChange={handleChange} placeholder='Ingrese una descripcion detallada de su entrenamiento...' type="text" name="descPrivada" value={training.descPrivada} /> }        
                </div>
                <div>
                    <label htmlFor=""> </label>
                    { <input onChange={handleChange} placeholder='Ingrese palabras claves para buscar...' type="text" name="etiquetas" value={training.etiquetas} /> }        
                </div>
                <div>
                    <label htmlFor=""> </label>
                    { <input onChange={handleChange} placeholder='Ingrese el precio...' type="number" name="precio" value={training.precio} /> }        
                </div>

                <div>       
                    <label htmlFor=""> </label>
                    <input  onChange={handleChange}  type="text" placeholder='Ingrese la url del video...' name="video" value={training.video} />   
                    <button type="button" onClick={() => handleSubirVideo()}>Subir</button> 
                    {training.videos.length !== 0
                        ?
                            <div>
                                {
                                    training.videos.map((video,index) => (
                                        <h2 key={index}>• {video.url}</h2>
                                    ))
                                }
                            
                            </div>
                        :
                            null
                    }   
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
        </main>
    )
    
}
export default TrainingNew;