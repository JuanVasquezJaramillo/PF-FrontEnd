import React from 'react'
import ReactPlayer from 'react-player/youtube' 
import style from "./Card.module.css"

const Card = (props) => {
  const arrayvideo = props.video
  console.log(arrayvideo)
  return (
    <div className={style.cardcontainer}>
      <h2>Id entrenador {props.idEntrenador}</h2>
      <h2>Precio {props.precio}</h2>
      <h2>Desc Publica{props.descPublica}</h2>
      
      <ReactPlayer
      
      url = {arrayvideo}
      light
      />

    </div>
  )
}

export default Card