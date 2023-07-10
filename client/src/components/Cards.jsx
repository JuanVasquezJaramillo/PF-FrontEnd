import React from 'react'
import Card from './Card'
<<<<<<< HEAD
import style from "./Cards.module.css"
=======
import style from "../modules/Cards.module.css"
>>>>>>> 189c3927ec1995cc16077f650a4d8757b52d2298


const Cards = ({clases}) => {
 
  return (

    <div>
    <div className={style.cardscontainer}>
      {clases.map((c) => <Card
        idEntrenador={c.idEntrenador}
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