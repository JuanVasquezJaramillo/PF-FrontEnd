import React from "react";
import CustomCard from "./Card";
import style from "../modules/Cards.module.css";

const Cards = ({ clases }) => {
  return (
    <div>
      <div className={style.cardscontainer}>
        {clases.map((c) => (
          <CustomCard
            idUser={c.idUser}
            title={c.title}
            price={c.price}
            publicDescription={c.publicDescription}
            privateDescription={c.privateDescription}
            tags={c.tags}
            userName={c.userName}
            primerVideoUrl={c.primerVideoUrl}
            idPlan={c.idPlan}
            key={c.idPlan}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
