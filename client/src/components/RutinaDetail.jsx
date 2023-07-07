import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const RutinaDetail=()=>{
    const {idTraining} = useParams();
    const [training,setTraining]=useState([]);
    useEffect(()=>{
        // const URL_BASE='http://127.0.0.1:3000/training'
        // axios(`${URL_BASE}/${idTraining}`)
        // .then(response=>setTraining(response.data))}
        setTraining(
            [
                {
                    titulo:"Entrenamiento Futbol",trainer:"Juan Perez",descPublica:"Aca te vamos a enseñar todo sobre futbol"
                    ,descPrivada:"Gracias por comprar este entrenamiento, espero te guste las clases",precio:"$123",tipo:"Entrenamiento",etiquetas:"futbol velocidad delantero"
                    ,videos:[{url:"video 1",des:"En la primer clase veremos..."},{url:"video 2",des:"En la segunda clase veremos..."}]
                }
            ]
        )
    }
    ,[])
    return(
        <div>
            {
                training.name?
                <>
                    <div>{training.titulo}</div>
                    <p>{training.trainer}</p>
                    <p>{training.descripcionpublica}</p>
                    <p>{training.descripcionprivada}</p>
                    <p>Precio: {training.precio}</p>
                    <p>Tipo: {training.tipo}</p>
                    <p>Etiquetas: {training.etiquetas}</p>
                   
                    {
                        training.videos? (
                            <>
                                <p>Clases:</p>
                                {
                                    training.videos.map(video => (
                                        <>
                                            <p>• {video.url}</p>
                                            <p>• {video.descripcion}</p>
                                        </>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </>
                : (
                    <h2>Cargando...</h2>
                )
            }
        </div>
    )
}
export default RutinaDetail;