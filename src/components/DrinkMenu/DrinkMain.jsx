import DrinkList from "./DrinkList";
import { useSelector } from "react-redux";

const DrinkMain = () => {
  const { drinkSortData } = useSelector((state) => state.drinkMenu);
  return (
    <div>
      <>
        {drinkSortData.map((data) => (
          <DrinkList key={data.id} data={data} />
        ))}
      </>
    </div>
  );
};

export default DrinkMain;
