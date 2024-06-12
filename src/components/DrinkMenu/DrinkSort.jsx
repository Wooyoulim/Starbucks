import { useEffect, useState } from "react";
import { DrinkSortContent } from "./drinkMenuStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAllShow,
  changeNew,
  changeSeasonal,
  changeShow,
} from "../../store/modules/drinkMenuSlice";

const DrinkSort = ({ goThema, setGoThema }) => {
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
              <li className="category on">카테고리</li>
              <li
                className="category"
                onClick={() => {
                  setGoThema(true);
                }}
              >
                테마
              </li>
            </ul>
            <ul className="checkboxUl">
              <li>
                <input type="checkbox" name="all" checked={isAllShow} />
                <label htmlFor="all" onClick={(e) => dispatch(changeAllShow())}>
                  전체 상품보기
                </label>
              </li>
              {drinkSortData.map((data) => (
                <li key={data.id}>
                  <input
                    type="checkbox"
                    name={data.engName}
                    checked={data.isShow}
                  />
                  <label
                    htmlFor={data.engName}
                    onClick={(e) => dispatch(changeShow(e.target.htmlFor))}
                  >
                    {data.drinkSort}
                  </label>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <ul className={sortOpen ? "drinkSort on" : "drinkSort"}>
        <li
          onClick={() => {
            setSortOpen(!sortOpen);
          }}
        >
          상세분류
        </li>
        <li>
          <input type="checkbox" name="newMenu" checked={isNewShow} />
          <label
            htmlFor="newMenu"
            onClick={() => dispatch(changeNew())}
          ></label>
          <span></span>
          신규 출시된 메뉴
        </li>
        <li>
          <input type="checkbox" name="seasonMenu" checked={isSeasonalShow} />
          <label
            htmlFor="seasonMenu"
            onClick={() => dispatch(changeSeasonal())}
          ></label>
          <span></span>
          한정기간 출시되는 시즌성 메뉴
        </li>
      </ul>
    </DrinkSortContent>
  );
};

export default DrinkSort;
