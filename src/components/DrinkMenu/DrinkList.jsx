import { useSelector } from "react-redux";
import DrinkItem from "./DrinkItem";
import { DrinkmenuList } from "./drinkMenuStyle";
import { useEffect } from "react";

const DrinkList = ({ data }) => {
  const { drinkMenuData, drinkSortData, isAllShow, isNewShow, isSeasonalShow } =
    useSelector((state) => state.drinkMenu);
  const { id, engName, drinkSort, isShow, newProduct, seasonalLimited } = data;
  const dr = drinkMenuData.find((drink) => drink.category === engName);
  return (
    <DrinkmenuList>
      {isAllShow ? (
        <>
          <div className="namebox">
            <h4>{drinkSort}</h4>
            {engName !== "bottle" ? (
              <>
                <img src="./images/drink/logo_decaf.png" alt="" />
                <span>디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
              </>
            ) : null}
          </div>
          <ul>
            {dr.data.map((drink) => (
              <DrinkItem key={drink.id} drink={drink} dr={dr} />
            ))}
          </ul>
        </>
      ) : null}
      {isShow ? (
        <>
          <div className="namebox">
            <h4>{drinkSort}</h4>
            {engName !== "bottle" ? (
              <>
                <img src="./images/drink/logo_decaf.png" alt="" />
                <span>디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</span>
              </>
            ) : null}
          </div>
          <ul>
            {dr.data.map((drink) => (
              <DrinkItem key={drink.id} drink={drink} dr={dr} />
            ))}
          </ul>
        </>
      ) : null}
    </DrinkmenuList>
  );
};

export default DrinkList;
