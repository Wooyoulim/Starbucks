import foodThemedata from "../../../assets/api/foodTheme";
import FoodThemeItem from "./FoodThemeItem";
import { FoodListUl } from "./FoodStyle";

const FoodThemeList = ({ currentThema, setShowNew, showNew, onThema }) => {
  const currentThemadata = foodThemedata.find(
    (item) => item.thema === currentThema
  );

  return (
    <FoodListUl>
      {currentThemadata.data.map((item) => (
        <FoodThemeItem key={item.id} item={item} />
      ))}
    </FoodListUl>
  );
};

export default FoodThemeList;
