import { useEffect, useState } from "react";
import { CardSortContent } from "./cardStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  cardChangeShow,
  cardChangeAllShow,
  cardChangeNew,
  cardChangeSeasonal,
} from "../../store/modules/cardSlice";

const CardSort = ({ goThema, setGoThema }) => {
  const dispatch = useDispatch();
  const { cardSort, isAllShow, isNewShow, isSeasonalShow } = useSelector(
    (state) => state.card
  );
  const [isSort, setIsSort] = useState(true);
  const changeSort = () => {
    setIsSort(!isSort);
  };
  const [sortOpen, setSortOpen] = useState(false);
  return (
    <CardSortContent>
      <div className="sortContent">
        <div className="cardTop">
          <h3>카드 분류 보기</h3>
          <span className={isSort ? "on" : ""} onClick={changeSort}></span>
        </div>
        {isSort ? (
          <>
            <ul className="cardCategory">
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
                <label
                  htmlFor="all"
                  onClick={(e) => dispatch(cardChangeAllShow())}
                >
                  전체 상품보기
                </label>
              </li>
              {cardSort.map((data) => (
                <li key={data.id}>
                  <input
                    type="checkbox"
                    name={data.engName}
                    checked={data.isShow}
                  />
                  <label
                    htmlFor={data.engName}
                    onClick={(e) => dispatch(cardChangeShow(e.target.htmlFor))}
                  >
                    {data.kor}
                  </label>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <ul className={sortOpen ? "cardSort on" : "cardSort"}>
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
            onClick={() => dispatch(cardChangeNew())}
          ></label>
          <span></span>
          신규 출시된 메뉴
        </li>
        <li>
          <input type="checkbox" name="seasonMenu" checked={isSeasonalShow} />
          <label
            htmlFor="seasonMenu"
            onClick={() => dispatch(cardChangeSeasonal())}
          ></label>
          <span></span>
          한정기간 출시되는 시즌성 메뉴
        </li>
      </ul>
    </CardSortContent>
  );
};

export default CardSort;
