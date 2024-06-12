import { useState } from "react";
import { FoodForm } from "./FoodStyle";
import foodThemaSort from "../../../assets/api/foodThemeSort";
import FoodThemaSort from "./FoodThemaSort";

function FoodThemeInput({
  setOnThema,
  setCurrentThema,
  currentThema,
  setShowNew,
  onThema,
}) {
  const [showTheme, setShowTheme] = useState(true);
  const [showInput, setShowInput] = useState(true);
  const [buttonInput, setButtonInput] = useState(true);

  const changeButton = () => {
    setButtonInput(!buttonInput);
    setOnThema((onThema) => !onThema);
    setShowNew({
      new: false,
      season: false,
      theme: "",
    });
  };

  return (
    <FoodForm>
      <div className="top">
        <h2>분류보기</h2>
        <p onClick={() => setShowInput(!showInput)}>
          <i className="xi-angle-up"></i>
        </p>
      </div>
      {showInput && (
        <>
          <div className="btn">
            <button className={onThema ? "" : "on"} onClick={changeButton}>
              카테고리
            </button>
            <button className={onThema ? "on" : ""} onClick={changeButton}>
              테마
            </button>
          </div>
          <ul className="themaSort">
            {foodThemaSort.map((item) => (
              <FoodThemaSort
                key={item.id}
                item={item}
                setCurrentThema={setCurrentThema}
                currentThema={currentThema}
              />
            ))}
          </ul>
        </>
      )}
    </FoodForm>
  );
}

export default FoodThemeInput;
