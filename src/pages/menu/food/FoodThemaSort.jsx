import { FoodSortList } from "./FoodStyle";

const FoodThemaSort = ({ item, setCurrentThema, currentThema }) => {
  const { thema, imgurl } = item;
  return (
    <FoodSortList
      onClick={(e) => {
        setCurrentThema(thema);
      }}
      className={currentThema === thema ? "on" : ""}
    >
      <p>
        <img src={imgurl} alt={thema} />
      </p>
    </FoodSortList>
  );
};

export default FoodThemaSort;
