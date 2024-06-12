import { useEffect, useState } from "react";
import { DrinkSortContent } from "./drinkMenuStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAllShow,
  changeNew,
  changeSeasonal,
  changeShow,
} from "../../store/modules/drinkMenuSlice";

const ThemaSort = ({ goThema, setGoThema }) => {
  const dispatch = useDispatch();
  const { drinkSortData, isAllShow, isNewShow, isSeasonalShow } = useSelector(
    (state) => state.drinkMenu
  );
  const [isSort, setIsSort] = useState(true);
  const changeSort = () => {
    setIsSort(!isSort);
  };
  const [sortOpen, setSortOpen] = useState(false);
  return (
    <DrinkSortContent>
      <div className="sortContent">
        <div className="drinkTop">
          <h3>커피 분류 보기</h3>
          <span className={isSort ? "on" : ""} onClick={changeSort}></span>
        </div>
        {isSort ? (
          <>
            <ul className="drinkCategory">
              <li className="category" onClick={() => {
                  setGoThema(false);
                }}>카테고리</li>
              <li
                className="category on"
                onClick={() => {
                  setGoThema(true);
                }}
              >
                테마
              </li>
            </ul>
            <ul className="themaUl">
              <li>
                <p>
                  <img
                    src="./images/drink/thema.jpg"
                    alt="Light Up Your Summer"
                  />
                </p>
              </li>
            </ul>
          </>
        ) : null}
      </div>
    </DrinkSortContent>
  );
};

export default ThemaSort;
