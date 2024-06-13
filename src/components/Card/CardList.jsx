import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import { CardsList } from "./cardStyle";

const CardList = ({ data }) => {
  const { cardData, cardSort, isAllShow, isNewShow, isSeasonalShow } =
    useSelector((state) => state.card);
  const { id, engName, kor, isShow } = data;
  const cd = cardData.find((card) => card.category === engName);
  return (
    <CardsList>
      {isAllShow ? (
        <>
          <div className="namebox">
            <h4>{kor}</h4>
          </div>
          <ul>
            {cd.data.map((card) => (
              <CardItem key={card.id} card={card} cd={cd} />
            ))}
          </ul>
        </>
      ) : null}
      {isShow ? (
        <>
          <div className="namebox">
            <h4>{kor}</h4>
          </div>
          <ul>
            {cd.data.map((card) => (
              <CardItem key={card.id} card={card} cd={cd} />
            ))}
          </ul>
        </>
      ) : null}
    </CardsList>
  );
};

export default CardList;
