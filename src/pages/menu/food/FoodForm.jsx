import FoodSubVisual from "../../../components/FoodSubVisual";
import Bread from "./Bread";
import Cake from "./Cake";
import FoodInput from "./FoodInput";
import FoodSelect from "./FoodSelect";
import { FoodWrap } from "./FoodStyle";
import Fruit from "./Fruit";
import Icecream from "./Icecream";
import Sandwich from "./Sandwich";
import Snack from "./Snack";
import Soup from "./Soup";
import data from "../../../assets/api/foodData";
import CategoryFood from "./CategoryFood";
import { useState } from "react";
import FoodThemeInput from "./FoodThemeInput";
import FoodThemeList from "./FoodThemeList";
const FoodForm = () => {
  const [isCheckCategory, setIsCheckCategory] = useState({
    all: true,
    bread: false,
    cake: false,
    sandwich: false,
    soup: false,
    fruit: false,
    snack: false,
    icecream: false,
  });
  const [showNew, setShowNew] = useState({
    new: false,
    season: false,
    theme: "",
  });

  //data 추출
  const newfoodData = data.map((item) => item.data).flat();

  //아이콘 있는 데이터만 추출
  const filterNewData = newfoodData.filter((item2) => item2.icon === "new");
  const [onThema, setOnThema] = useState(false);
  const [currentThema, setCurrentThema] = useState("summer");

  return (
    <FoodWrap>
      <FoodSubVisual />
      <div className="inner">
        {onThema ? (
          <>
            <FoodThemeInput
              setOnThema={setOnThema}
              setCurrentThema={setCurrentThema}
              currentThema={currentThema}
              onThema={onThema}
              setShowNew={setShowNew}
            />
            <FoodThemeList
              currentThema={currentThema}
              setShowNew={setShowNew}
              showNew={showNew}
              onThema={onThema}
              isCheckCategory={isCheckCategory}
            />
          </>
        ) : (
          <>
            <FoodInput
              setIsCheckCategory={setIsCheckCategory}
              isCheckCategory={isCheckCategory}
              setOnThema={setOnThema}
              onThema={onThema}
            />
            <div className="foodmenu">
              <div className="select">
                <FoodSelect showNew={showNew} setShowNew={setShowNew} />
              </div>

              <div className="food">
                {isCheckCategory.all ? (
                  <>
                    <CategoryFood showNew={showNew} />
                  </>
                ) : (
                  <>
                    {isCheckCategory.bread && <Bread showNew={showNew} />}
                    {isCheckCategory.cake && <Cake showNew={showNew} />}
                    {isCheckCategory.sandwich && <Sandwich showNew={showNew} />}
                    {isCheckCategory.soup && <Soup showNew={showNew} />}
                    {isCheckCategory.fruit && <Fruit showNew={showNew} />}
                    {isCheckCategory.snack && <Snack showNew={showNew} />}
                    {isCheckCategory.icecream && <Icecream showNew={showNew} />}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </FoodWrap>
  );
};

export default FoodForm;
