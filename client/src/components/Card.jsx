import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../modules/Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const id = props.idPlan;

  return (
    <div className={style.cardcontainer} >

      <Link  to={`/IdDetailsTraining/${id}`} className={style.link}>
        <h2 className={style.id}> {id}</h2>
        
      </Link>

      <Link to={`/alternativeDetail/${id}`} className={style.link}>
      <h2 className={style.userName}>{props.userName}</h2>
        <h2 className={style.title}>{props.title}</h2>
        <h2 className={style.price}>${props.price}</h2>
        <h2 className={style.publicDescription}>{props.publicDescription}</h2>
      </Link>

      <ReactPlayer
        url={props.primerVideoUrl}
        light
        width="100%"
        height="20rem"
        border-radius="20px"
      />
    </div>
  );
};

export default Card;
