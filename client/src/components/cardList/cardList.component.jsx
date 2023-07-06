import Cards from "../cards/card.component";

function CardList({ allTrainers }) {
  const trainerList = allTrainers;
  return (
    <div>
      {trainerList?.map((trainer, index) => (
        <Cards key={index} trainer={trainer} />
      ))}
    </div>
  );
}

export default CardList;
