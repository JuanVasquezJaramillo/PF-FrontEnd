import PropTypes from 'prop-types';
import Card from './Card'
import style from "../modules/Cards.module.css"

const Cards = ({clases}) => {

  return (
  <div>
    <div className={style.cardscontainer}>
      {clases.map((c) => <Card
        idUser={c.idUser}
        title={c.title}
        price={c. price}
        publicDescription ={c.publicDescription}
        privateDescription={c.privateDescription}
        tags={c.tags}
        userName={c.userName }
        primerVideoUrl={c.primerVideoUrl }
        idPlan={c.idPlan }
        key={c.idPlan}
      />)}
    </div>
  </div>
  )
}

Cards.propTypes = {
  clases: PropTypes.array
}

export default Cards