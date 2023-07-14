import React from 'react'
import ReactPlayer from 'react-player/youtube' 
import style from "../modules/Card.module.css"
import { Link } from 'react-router-dom'
 
const Card = (props) => {
  
  const id = props.idEntrenador
  
  return (

    <div className={style.cardcontainer}>

       <Link to={`/planDetail/${props.userName}`}>    
      
      <h2>Users {props.userName}</h2>
      </Link>
      <h2>Title  {props.title}</h2>
      <h2> price {props. price}</h2>
      
      <h2>Desc Publica{props.publicDescription}</h2>
      
      
     <ReactPlayer
      url = {props.primerVideoUrl}
      light
      />
 </div>
  )
}

export default Card