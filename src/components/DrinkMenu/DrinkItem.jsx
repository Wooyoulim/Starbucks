import { Link } from "react-router-dom";
import { DrinkMenuLi } from "./drinkMenuStyle";
import { useSelector } from "react-redux";

const DrinkItem = ({ drink, dr }) => {
  const { isNewShow, isSeasonalShow } = useSelector((state) => state.drinkMenu);
  const { imgurl, kor, id, newProduct, seasonalLimited } = drink;
  const { category } = dr;
  return (
    <>
      {isNewShow &&
        isSeasonalShow === false &&
        (newProduct ? (
          <DrinkMenuLi>
            <div className="img">
              <Link to={`/drinkMenu/${category}/${id}`}>
                <img src={imgurl} alt={kor} />
                <p>
                  {newProduct ? (
                    <img src="./images/drink/mark01.png" alt="" />
                  ) : null}
                  {seasonalLimited ? (
                    <img src="./images/drink/mark02.png" alt="" />
                  ) : null}
                </p>
              </Link>
            </div>
            <p className="name">{kor}</p>
          </DrinkMenuLi>
        ) : null)}
      {isSeasonalShow &&
        isNewShow === false &&
        (seasonalLimited ? (
          <DrinkMenuLi>
            <div className="img">
              <Link to={`/drinkMenu/${category}/${id}`}>
                <img src={imgurl} alt={kor} />
                <p>
                  {newProduct ? (
                    <img src="./images/drink/mark01.png" alt="" />
                  ) : null}
                  {seasonalLimited ? (
                    <img src="./images/drink/mark02.png" alt="" />
                  ) : null}
                </p>
              </Link>
            </div>
            <p className="name">{kor}</p>
          </DrinkMenuLi>
        ) : null)}
      {isNewShow && isSeasonalShow && newProduct && seasonalLimited && (
        <DrinkMenuLi>
          <div className="img">
            <Link to={`/drinkMenu/${category}/${id}`}>
              <img src={imgurl} alt={kor} />
              <p>
                {newProduct ? (
                  <img src="./images/drink/mark01.png" alt="" />
                ) : null}
                {seasonalLimited ? (
                  <img src="./images/drink/mark02.png" alt="" />
                ) : null}
              </p>
            </Link>
          </div>
          <p className="name">{kor}</p>
        </DrinkMenuLi>
      )}
      {isNewShow === false && isSeasonalShow === false && (
        <DrinkMenuLi>
          <div className="img">
            <Link to={`/drinkMenu/${category}/${id}`}>
              <img src={imgurl} alt={kor} />
              <p>
                {newProduct ? (
                  <img src="./images/drink/mark01.png" alt="" />
                ) : null}
                {seasonalLimited ? (
                  <img src="./images/drink/mark02.png" alt="" />
                ) : null}
              </p>
            </Link>
          </div>
          <p className="name">{kor}</p>
        </DrinkMenuLi>
      )}
    </>
  );
};

export default DrinkItem;
