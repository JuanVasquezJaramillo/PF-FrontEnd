import React from 'react'
import ReactPlayer from 'react-player/youtube' 
<<<<<<< HEAD
import style from "./Card.module.css"
=======
import style from "../modules/Card.module.css"
import { Link } from 'react-router-dom'
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298

const Card = (props) => {
  const arrayvideo = props.video
  console.log(arrayvideo)
  return (
<<<<<<< HEAD
    <div className={style.cardcontainer}>
=======
    
    <Link to={"/training"}>
    <div className={style.cardcontainer}>
      
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298
      <h2>Id entrenador {props.idEntrenador}</h2>
      <h2>Precio {props.precio}</h2>
      <h2>Desc Publica{props.descPublica}</h2>
      
      <ReactPlayer
      
      url = {arrayvideo}
      light
      />

    </div>
<<<<<<< HEAD
=======
      </Link>
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298
  )
}

export default Card