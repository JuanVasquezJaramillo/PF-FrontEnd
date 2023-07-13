import React from 'react'
import ReactPlayer from 'react-player/youtube' 
import style from "../modules/Card.module.css"
import { Link } from 'react-router-dom'
 
const Card = (props) => {
  const id = props.idEntrenador
  const arrayvideo = props.video
  return (
    <div className={style.cardcontainer}>
       <Link to={`/planDetail/${id}`}>
       <h2>Title  {props.title}</h2>
      <h2>Id entrenador {props.idUser}</h2>
      <h2> price {props. price}</h2>
      
      <h2>Desc Publica{props.descPublica}</h2>
      </Link>
     <ReactPlayer
      url = "https://www.youtube.com/watch?v=WdehyAwDK3M&list=PLqIHQ2B3G1bsIqauvbi6eeMTk58BRsMbh&index=4"
      light
      />
 </div>
  )
}

export default Card