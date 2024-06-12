import { useState } from "react";
import { CardThemaSortContent } from "./cardStyle";
import { useDispatch, useSelector } from "react-redux";
import ThemaSortList from "./ThemaSortList";

const ThemaSort = ({ goThema, setGoThema, setCurrentThema, currentThema }) => {
  const dispatch = useDispatch();
  const { cardThemaSort } = useSelector((state) => state.card);
  const [isSort, setIsSort] = useState(true);
  const changeSort = () => {
    setIsSort(!isSort);
  };

  return (
    <CardThemaSortContent>
      <div className="sortContent">
        <div className="cardTop">
          <h3>카드 분류 보기</h3>
          <span className={isSort ? "on" : ""} onClick={changeSort}></span>
        </div>
        {isSort ? (
          <>
            <ul className="cardCategory">
              <li
                className="category"
                onClick={() => {
                  setGoThema(false);
                }}
              >
                카테고리
              </li>
              <li className="category on">테마</li>
            </ul>
            <ul className="themaUl">
              {cardThemaSort.map((data) => (
                <ThemaSortList
                  key={data.id}
                  data={data}
                  setCurrentThema={setCurrentThema}
                  currentThema={currentThema}
                />
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </CardThemaSortContent>
  );
};

export default ThemaSort;
