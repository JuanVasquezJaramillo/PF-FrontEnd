import React from 'react'
import Card from './Card'
import style from "../modules/Cards.module.css"

const Cards = ({clases}) => {
 
  return (

    <div>
    <div className={style.cardscontainer}>
      {clases.map((c) => <Card
        idEntrenador={c.idEntrenador}
        idUser={c.idUser}
        price={c. price}
        descPublica={c.descPublica}
        descPrivada={c.descPrivada}
        etiquetas={c.etiquetas}
        title={c.title}
        key={c.idPlan}
      
        />)}
      
    </div>



  </div>
  )
}

export default Cards