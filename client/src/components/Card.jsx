import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../modules/Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const arrayvideo = props.video;
  console.log(arrayvideo);
  return (
    <Link to={"/training"}>
      <div className={style.cardcontainer}>
        <h2>Id entrenador {props.idEntrenador}</h2>
        <h2>Precio ${props.precio}</h2>
        <h2>Desc Publica{props.descPublica}</h2>
        <div className={style.videoContainer}>
          <ReactPlayer url={arrayvideo} light />
        </div>
      </div>
    </Link>
  );
};

export default Card;
