import React from 'react'
import Card from './Card'
import style from "../modules/Cards.module.css"
import style from "./Cards.module.css"

const Cards = ({clases}) => {
 
  return (

    <div>
    <div className={style.cardscontainer}>
      {clases.map((c) => <Card
        idEntrenador={c.idEntrenador}
        idEntrenador={c.idUser}
       precio={c.precio}
        descPublica={c.descPublica}
        descPrivada={c.descPrivada}
        etiquetas={c.etiquetas}
        video={c.video}
        key={c.idVideo}
      
        />)}
      
    </div>



  </div>
  )
}

export default Cards