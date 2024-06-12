import { Link } from "react-router-dom";
import { CardLi } from "./cardStyle";
import { useSelector } from "react-redux";

const CardItem = ({ card, cd }) => {
  const { isNewShow, isSeasonalShow } = useSelector((state) => state.card);
  const { id, imgurl, kor, newProduct, seasonalLimited } = card;
  const { category } = cd;
  return (
    <>
      {isNewShow &&
        isSeasonalShow === false &&
        (newProduct ? (
          <CardLi>
            <div className="img">
              <Link to={`/card/${category}/${id}`}>
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
          </CardLi>
        ) : null)}
      {isSeasonalShow &&
        isNewShow === false &&
        (seasonalLimited ? (
          <CardLi>
            <div className="img">
              <Link to={`/card/${category}/${id}`}>
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
          </CardLi>
        ) : null)}
      {isNewShow && isSeasonalShow && newProduct && seasonalLimited && (
        <CardLi>
          <div className="img">
            <Link to={`/card/${category}/${id}`}>
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
        </CardLi>
      )}
      {isNewShow === false && isSeasonalShow === false && (
        <CardLi>
          <div className="img">
            <Link to={`/card/${category}/${id}`}>
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
        </CardLi>
      )}
    </>
  );
};

export default CardItem;
