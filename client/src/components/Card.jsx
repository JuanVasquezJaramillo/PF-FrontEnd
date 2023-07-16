import React from 'react'
import ReactPlayer from 'react-player/youtube'
import style from "../modules/Card.module.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
  const id = props.idPlan

  return (

    <div className={style.cardcontainer}>

      <Link to={`/IdDetailsTraining/${id}`}>
        <h1> {id}</h1>
      </Link>

      <Link to={`/alternativeDetail/${id}`}>
        <h2>{props.userName}</h2>
        <h2>{props.title}</h2>
        <h2>${props.price}</h2>

        <h2>{props.publicDescription}</h2>
      </Link>

      <ReactPlayer
        url={props.primerVideoUrl}
        light
      />
    </div>
  )
}

export default Card