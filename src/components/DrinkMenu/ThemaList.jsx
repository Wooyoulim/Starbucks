import { DrinkmenuList } from "./drinkMenuStyle";
import ThemaItem from "./ThemaItem";
import { useSelector } from "react-redux";

const ThemaList = () => {
  const { themaMenuData } = useSelector((state) => state.drinkMenu);
  const summerData = themaMenuData.find((data) => data.thema === "summer").data;
  return (
    <DrinkmenuList>
      <ul>
        {summerData.map((data) => (
          <ThemaItem key={data.index} data={data} />
        ))}
      </ul>
    </DrinkmenuList>
  );
};

export default ThemaList;
