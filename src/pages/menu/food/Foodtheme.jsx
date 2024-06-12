import { useState } from "react";
import { ThemeUl } from "./FoodStyle";
import { useDispatch } from "react-redux";

const Foodtheme = ({ showNew, setShowNew, handleClickButton }) => {
  const [content, setContent] = useState();

  return (
    <ThemeUl>
      <button
        name="summer"
        value="summer"
        onClick={(e) => handleClickButton(e)}
      >
        <img
          src="../../../../public/images/food/foodtheme01.jpg"
          alt="테마이미지1"
        />
      </button>
      <button
        name="brunch"
        value="brunch"
        onClick={(e) => handleClickButton(e)}
      >
        <img
          src="../../../../public/images/food/foodtheme02.jpg"
          alt="테마이미지2"
        />
      </button>
      <button
        name="wholecake"
        value="wholecake"
        onClick={(e) => handleClickButton(e)}
      >
        <img
          src="../../../../public/images/food/foodtheme03.jpg"
          alt="테마이미지3"
        />
      </button>
    </ThemeUl>
  );
};

export default Foodtheme;
