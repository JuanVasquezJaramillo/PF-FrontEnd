import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const TrainingDetail=()=>{
    // const {idTraining} = useParams();
    const [training,setTraining]=useState({});
    useEffect(()=>{
        // const URL_BASE='http://127.0.0.1:3000/training'
        // axios(`${URL_BASE}/${idTraining}`)
        // .then(response=>setTraining(response.data))}
        setTraining(
            
                {
                    titulo:"Entrenamiento Futbol",trainer:"Juan Perez",descPublica:"Aca te vamos a enseñar todo sobre futbol"
                    ,descPrivada:"Gracias por comprar este entrenamiento, espero te guste las clases",precio:"$123",tipo:"Entrenamiento",etiquetas:"futbol velocidad delantero"
                    ,videos:[{url:"https://www.youtube.com/embed/tg25chxV6jY",desc:"En la primer clase veremos..."},{url:"https://www.youtube-nocookie.com/embed/k4QMNkNV26A",desc:"En la segunda clase veremos..."}]
                }
            
        )
    }
    ,[])
    return(
        <div>
            {
                training.titulo?
                <>
                    <div>{training.titulo}</div>
                    <p>Entrenador: {training.trainer}</p>
                    <p>{training.descPublica}</p>
                    <p>{training.descPrivada}</p>
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
                                            <p>• {video.desc}</p>
                                            <iframe width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
export default TrainingDetail;