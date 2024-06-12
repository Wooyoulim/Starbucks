import { DrinkMenuLi } from "./drinkMenuStyle";
import { DrinkmenuList } from "./drinkMenuStyle";
import { Link } from "react-router-dom";

const ThemaItem = ({ data }) => {
  const { id, imgurl, kor } = data;
  return (
    <DrinkmenuList>
      <DrinkMenuLi>
        <div className="img">
          <Link to={`/drinkMenu/${imgurl.split("/")[5]}/${id}`}>
            <img src={imgurl} alt={kor} />
          </Link>
        </div>
        <p className="name">{kor}</p>
      </DrinkMenuLi>
    </DrinkmenuList>
  );
};

export default ThemaItem;
