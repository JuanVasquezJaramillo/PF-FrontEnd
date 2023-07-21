import React from "react";
import ReactPlayer from "react-player/youtube";
import style from "../modules/Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const idUser = props.idUser
  
  const id = props.idPlan;

  return (
    <div className={style.cardcontainer}>
      <Link to={`/IdDetailsTraining/${id}`} className={style.link}>
        <h1> {id}</h1>
      </Link>
      
      <Link to={`/alternativeProfile/${idUser}`} className={style.link}>
      <h2 className={style.userName}>{props.userName}</h2>
      </Link>
      
      
      {/* probando merge */}
      <Link to={`/training/${id}`} className={style.link}>
        
        <h2 className={style.title}>{props.title}</h2>
        <h2 className={style.price}>${props.price}</h2>
        {/* <h2 className={style.publicDescription}>{props.publicDescription}</h2> */}
      </Link>

      <ReactPlayer
        url={props.primerVideoUrl}
        light
        width="100%"
        height="40vh"
        border-radius="20px"
      />
    </div>
  );
};
 
export default Card;
