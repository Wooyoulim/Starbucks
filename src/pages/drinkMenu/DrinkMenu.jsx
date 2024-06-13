import { DrinkMenuWrap } from "./drinkMenuStyle";
import DrinkSubVisual from "../../components/DrinkSubVisual";
import DrinkInner from "../../components/DrinkMenu/DrinkInner";

const DrinkMenu = () => {
  return (
    <DrinkMenuWrap>
      <DrinkSubVisual />
      <div className="inner">
        <DrinkInner />
      </div>
    </DrinkMenuWrap>
  );
};

export default DrinkMenu;
