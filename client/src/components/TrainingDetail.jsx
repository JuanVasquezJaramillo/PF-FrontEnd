import { useParams } from "react-router-dom";
// import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Carrousel from "./carrousel";
import style from "../modules/trainingDetail.module.css";
import { Box } from "@mui/material";

const TrainingDetail = () => {
  // const {idTraining} = useParams();
  const [training, setTraining] = useState({});
  useEffect(() => {
    // const URL_BASE='http://127.0.0.1:3000/training'
    // axios(`${URL_BASE}/${idTraining}`)
    // .then(response=>setTraining(response.data))}
    setTraining({
      titulo: "Entrenamiento Futbol",
      trainer: "Juan Perez",
      descPublica: "Aca te vamos a enseñar todo sobre futbol",
      descPrivada:
        "Gracias por comprar este entrenamiento, espero te guste las clases",
      precio: "$123",
      tipo: "Entrenamiento",
      etiquetas: "futbol velocidad delantero",
      videos: [
        {
          url: "https://www.youtube.com/embed/tg25chxV6jY",
          desc: "En la primer clase veremos...",
        },
        {
          url: "https://www.youtube-nocookie.com/embed/k4QMNkNV26A",
          desc: "En la segunda clase veremos...",
        },
        {
          url: "https://www.youtube-nocookie.com/embed/k4QMNkNV26A",
          desc: "En la segunda clase veremos...",
        },
      ],
    });
  }, []);

  return (
    <div className={style.container}>
      <Box>
        <h1 className={style.titulo}>{training.titulo}</h1>

        {training.videos ? <Carrousel videos={training.videos} /> : null}

        {training.titulo ? (
          <div className={style.descripcionTraining}>
            <div className={style.datos}>
              <p className={style.parrafos}>Entrenador: {training.trainer}</p>
              <p className={style.parrafos}>{training.descPublica}</p>
              <p className={style.parrafos}>{training.descPrivada}</p>
              <p className={style.parrafos}>Precio: {training.precio}</p>
              <p className={style.parrafos}>Tipo: {training.tipo}</p>
              <p className={style.parrafos}>Etiquetas: {training.etiquetas}</p>
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
      </Box>
    </div>
  );
};
export default TrainingDetail;
